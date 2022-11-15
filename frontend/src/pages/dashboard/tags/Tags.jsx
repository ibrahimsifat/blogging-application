import {
  Button,
  Input,
  Pagination,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TableHeader,
  TableRow,
} from "@windmill/react-ui";
import React, { useEffect, useState } from "react";
import WindSelect from "react-select";
import { EditIcon, TrashIcon } from "../../../assets/dashboard/icons";

import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import PageTitle from "../../../components/dashboard/Typography/PageTitle";
import { DarkInput } from "../../../components/shared/input/DarkInput";
import Error from "../../../components/shared/ui/Error";
import { search } from "../../../features/category/categoriesSlice";
import {
  useDeleteTagMutation,
  useGetTagsQuery,
  useUpdateTagStatusMutation,
} from "../../../features/tag/tagsApi";
import { selectTagSearchString } from "../../../features/tag/tagSelector";
import DeleteModal from "../../../hooks/deleteModal";
import UseFilter from "../../../hooks/filters/useFilter";
import StatusSwitcher from "../../../hooks/StatusSwitcher";
import { tagsAction, tagsFilters } from "../../../utils/data/dashboard/tags";
import debounce from "../../../utils/debounce";

// import response from "../../../utils/demo/tableData";

function Tags() {
  const [pageTable, setPageTable] = useState(1);
  const [tags, setTags] = useState([]);

  // fetch category
  const { data, isLoading, isError, error } = useGetTagsQuery(pageTable);

  useEffect(() => {
    setTags(data?.tags);
  }, [data]);
  tags && console.log(tags);
  // pagination setup
  const resultsPerPage = 10;
  const totalResults = data?.tagCount;

  // pagination change control
  function onPageChangeTable(p) {
    setPageTable(p);
  }

  // tag delete modal
  const [opened, setOpened] = useState(false);
  const controlModal = (tagId) => {
    setOpened((prevState) => !prevState);
    setTagId(tagId);
  };

  // delete the tag
  const [tagId, setTagId] = useState("");
  const [deleteTag] = useDeleteTagMutation();
  const handleDelete = () => {
    deleteTag(tagId);
    // successNotify("Category Deleted successfully");
    setOpened((prevState) => !prevState);
  };

  // handle status publish and pending
  const [updateTagStatus] = useUpdateTagStatusMutation();
  const handleStatus = (e, tagId) => {
    const { checked } = e.target;
    if (checked) {
      updateTagStatus({
        id: tagId,
        data: {
          status: "published",
        },
      });
    } else {
      updateTagStatus({
        id: tagId,
        data: {
          status: "pending",
        },
      });
    }
  };

  // select all
  const [isCheckAll, setIsCheckAll] = useState(false);
  const [isCheck, setIsCheck] = useState([]);

  const handleSelectAll = (e) => {
    setIsCheckAll(!isCheckAll);
    setIsCheck(tags?.map((tag) => tag._id));
    if (isCheckAll) {
      setIsCheck([]);
    }
  };

  const handleClick = (e, _id) => {
    const { checked } = e.target;
    if (checked) setIsCheck([...isCheck, _id]);
    else setIsCheck(isCheck.filter((id) => id !== _id));
  };

  // filter Search
  const dispatch = useDispatch();
  const handleSearch = (e) => {
    const searchString = e.target.value.toLowerCase();
    dispatch(search(searchString));
    console.log(e.target.value);
  };
  const searchString = useSelector(selectTagSearchString);

  // handle tags filters operations

  const handleFilters = (value) => {
    const filteredTags = UseFilter(tags, value, "name");
    if (filteredTags && filteredTags.length > 0) {
      setTags(filteredTags);
    }
  };
  // handle bulk operations
  const handleBulkActions = (value) => {
    // const value = e.target.value;
    if (value && isCheck.length > 0) {
      console.log("handle", isCheck);

      if (value === "publish") {
        isCheck?.forEach((id) => {
          updateTagStatus({
            id,
            data: {
              status: "published",
            },
          });
        });
        // unchecked after operation
        setIsCheck([]);
      }
      if (value === "pending") {
        isCheck?.forEach((id) => {
          updateTagStatus({
            id,
            data: {
              status: "pending",
            },
          });
        });
        // unchecked after operation
        setIsCheck([]);
      }
      if (value === "delete") {
        console.log("delete");
        isCheck?.forEach((id) => {
          deleteTag(id);
        });
        // unchecked after operation
        setIsCheck([]);
      }
    }
  };

  // decide what to render
  let content = null;
  if (isLoading) {
    content = (
      <TableRow>
        <TableCell>Loading... </TableCell>
      </TableRow>
    );
  } else if (!isLoading && isError) {
    content = (
      <TableRow>
        <TableCell>
          <Error message={error?.data} />
        </TableCell>
      </TableRow>
    );
  } else if (!isLoading && !isError && tags?.length === 0) {
    content = (
      <TableRow>
        <TableCell>No Teams found!</TableCell>
      </TableRow>
    );
  } else if (!isLoading && !isError && tags?.length > 0) {
    content = tags
      ?.filter((tag) => tag?.name?.toLowerCase().includes(searchString))
      ?.map((tag, i) => (
        <TableRow key={i}>
          <TableCell>
            <Input
              type="checkbox"
              name={tag.name}
              onChange={(e) => handleClick(e, tag?._id)}
              checked={isCheck?.includes(tag._id)}
              className="h-5 w-5 transition duration-500 cursor-pointer focus:outline-none bg-transparent"
            />
          </TableCell>
          <TableCell>
            <div className="flex items-center text-sm">
              <div>
                <p className="font-semibold">{tag?.name}</p>
              </div>
            </div>
          </TableCell>

          <TableCell>
            <StatusSwitcher handleStatus={handleStatus} data={tag} />
          </TableCell>
          <TableCell>
            <Link to={`/dashboard/tag/edit/${tag?._id}`}>
              <Button layout="link" size="icon" aria-label="Edit">
                <EditIcon className="w-5 h-5" aria-hidden="true" />
              </Button>
            </Link>
          </TableCell>
          <TableCell>
            <Button
              layout="link"
              size="icon"
              aria-label="Delete"
              onClick={() => controlModal(tag._id)}
            >
              <TrashIcon className="w-5 h-5" aria-hidden="true" />
            </Button>
          </TableCell>
        </TableRow>
      ));
  }

  return (
    <>
      {/* delete modal */}
      <DeleteModal
        opened={opened}
        controlModal={controlModal}
        handleDelete={handleDelete}
      />
      <div className="flex justify-between items-center">
        <PageTitle className="">All Tags</PageTitle>
        <Link to="/dashboard/tag/add">
          <Button>Add Tag</Button>
        </Link>
      </div>
      <div className="flex justify-center items-center">
        {/* bulk operation */}
        {isCheck?.length > 0 && (
          <WindSelect
            id="Actions"
            name="tag"
            placeholder="Bulk Actions"
            options={tagsAction}
            className="my-react-select-container"
            classNamePrefix="my-react-select"
            onChange={(data) => handleBulkActions(data.value)}
          />
        )}

        {/* search input */}
        <DarkInput
          type="text"
          placeholder="Search Categories"
          onChange={debounce(handleSearch, 400)}
        />
        <WindSelect
          id="Actions"
          name="tag"
          placeholder="Category Filters"
          options={tagsFilters}
          className="my-react-select-container"
          classNamePrefix="my-react-select"
          onChange={(data) => handleFilters(data.value)}
        />
      </div>
      <TableContainer className="mb-8">
        <Table>
          <TableHeader>
            <tr>
              <TableCell>
                <Input
                  className="h-5 w-5 transition duration-500 cursor-pointer focus:outline-none bg-transparent"
                  type="checkbox"
                  name="selectAll"
                  id="selectAll"
                  onChange={handleSelectAll}
                  checked={isCheckAll}
                />
              </TableCell>
              <TableCell>Name</TableCell>

              <TableCell>Status</TableCell>
              <TableCell>Edit</TableCell>
              <TableCell>Delete</TableCell>
            </tr>
          </TableHeader>
          <TableBody>{content}</TableBody>
        </Table>
        <TableFooter>
          <Pagination
            totalResults={totalResults}
            resultsPerPage={resultsPerPage}
            onChange={onPageChangeTable}
            label="Table navigation"
          />
        </TableFooter>
      </TableContainer>
    </>
  );
}

export default Tags;
