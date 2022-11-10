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
import {
  useDeleteCategoryMutation,
  useGetCategoriesQuery,
  useUpdateCategoryStatusMutation,
} from "../../../features/category/categoriesApi";
import { search } from "../../../features/category/categoriesSlice";
import { selectCategorySearchString } from "../../../features/category/categorySelector";
import DeleteModal from "../../../hooks/deleteModal";
import UseFilter from "../../../hooks/filters/useFilter";
import StatusSwitcher from "../../../hooks/StatusSwitcher";
import {
  CategoryAction,
  categoryFilters,
} from "../../../utils/data/dashboard/categories";
import debounce from "../../../utils/debounce";

// import response from "../../../utils/demo/tableData";

function Categories() {
  const [pageTable, setPageTable] = useState(1);
  const [categories, setCategories] = useState([]);

  // fetch category
  const { data, isLoading, isError, error } = useGetCategoriesQuery(pageTable);

  useEffect(() => {
    setCategories(data?.categories);
  }, [data]);
  categories && console.log(categories);
  // pagination setup
  const resultsPerPage = 10;
  const totalResults = data?.categoryCount;

  // pagination change control
  function onPageChangeTable(p) {
    setPageTable(p);
  }

  // category delete modal
  const [opened, setOpened] = useState(false);
  const controlModal = (categoryId) => {
    setOpened((prevState) => !prevState);
    setCategoryId(categoryId);
  };

  // delete the category
  const [categoryId, setCategoryId] = useState("");
  const [deleteCategory] = useDeleteCategoryMutation();
  const handleDelete = () => {
    deleteCategory(categoryId);
    setOpened((prevState) => !prevState);
    // successNotify("Category Deleted successfully");
  };

  // handle status publish and pending
  const [updateCategoryStatus] = useUpdateCategoryStatusMutation();
  const handleStatus = (e, categoryId) => {
    const { checked } = e.target;
    if (checked) {
      updateCategoryStatus({
        id: categoryId,
        data: {
          status: "published",
        },
      });
    } else {
      updateCategoryStatus({
        id: categoryId,
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
    setIsCheck(categories?.map((category) => category._id));
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
  const searchString = useSelector(selectCategorySearchString);

  // handle categories filters operations

  const handleFilters = (value) => {
    const filteredCategory = UseFilter(categories, value);
    if (filteredCategory && filteredCategory.length > 0) {
      setCategories(filteredCategory);
    }
  };
  // handle bulk operations
  const handleBulkActions = (value) => {
    // const value = e.target.value;
    if (value && isCheck.length > 0) {
      console.log("handle", isCheck);

      if (value === "publish") {
        isCheck?.forEach((id) => {
          updateCategoryStatus({
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
          updateCategoryStatus({
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
          deleteCategory(id);
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
  } else if (!isLoading && !isError && categories?.length === 0) {
    content = (
      <TableRow>
        <TableCell>No Teams found!</TableCell>
      </TableRow>
    );
  } else if (!isLoading && !isError && categories?.length > 0) {
    content = categories
      ?.filter((category) =>
        category?.name?.toLowerCase().includes(searchString)
      )
      ?.map((category, i) => (
        <TableRow key={i}>
          <TableCell>
            <Input
              type="checkbox"
              name={category.name}
              onChange={(e) => handleClick(e, category?._id)}
              checked={isCheck?.includes(category._id)}
              className="h-5 w-5 transition duration-500 cursor-pointer focus:outline-none bg-transparent"
            />
          </TableCell>
          <TableCell>
            <div className="flex items-center text-sm">
              <div>
                <p className="font-semibold">{category?.name}</p>
              </div>
            </div>
          </TableCell>

          <TableCell>
            <StatusSwitcher handleStatus={handleStatus} data={category} />
          </TableCell>
          <TableCell>
            <Link to={`/dashboard/category/edit/${category?._id}`}>
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
              onClick={() => controlModal(category._id)}
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
        <PageTitle className="">All Categories</PageTitle>
        <Link to="/dashboard/category/add">
          <Button>Add Category</Button>
        </Link>
      </div>
      <div className="flex justify-center items-center">
        {/* bulk operation */}
        {isCheck?.length > 0 && (
          <WindSelect
            id="Actions"
            name="category"
            placeholder="Bulk Actions"
            options={CategoryAction}
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
          name="category"
          placeholder="Category Filters"
          options={categoryFilters}
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

export default Categories;
