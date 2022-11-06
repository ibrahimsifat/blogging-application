import React, { useState } from "react";

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
import Modal from "../../../hooks/modal/Modal";
import StatusSwitcher from "../../../hooks/StatusSwitcher";
import { successNotify } from "../../../hooks/toast/Toast";
import debounce from "../../../utils/debounce";
// import response from "../../../utils/demo/tableData";

function Categories() {
  const [pageTable, setPageTable] = useState(1);

  // fetch category
  const { data, isLoading, isError, error } = useGetCategoriesQuery(pageTable);

  const categories = data?.categories;
  console.log(data);

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
    successNotify("Category Deleted successfully");
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

  // filter Search
  const dispatch = useDispatch();
  const handleSearch = (e) => {
    dispatch(search(e.target.value));
    console.log(e.target.value);
  };
  const searchString = useSelector(selectCategorySearchString);

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
      ?.filter((category) => category?.name.includes(searchString))
      ?.map((category, i) => (
        <TableRow key={i}>
          <TableCell>
            <Input
              type="checkbox"
              className="h-6 w-6 transition duration-500 cursor-pointer focus:outline-none"
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
            <StatusSwitcher handleStatus={handleStatus} category={category} />
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
      <Modal open={opened} control={controlModal}>
        <div className="flex justify-center items-center">
          <div>
            <h1 className="font-bold md:text-2xl text-xl">
              Are you Want To Delete Category{" "}
            </h1>
            <div className="flex justify-end items-start mt-10 space-x-4">
              <Button layout="outline" onClick={controlModal}>
                Cancel
              </Button>
              <Button onClick={handleDelete}>Delete</Button>
            </div>
          </div>
        </div>
      </Modal>
      <div className="flex justify-between items-center">
        <PageTitle className="">All Categories</PageTitle>
        <Link to="/dashboard/category/add">
          <Button>Add Category</Button>
        </Link>
      </div>

      <TableContainer className="mb-8">
        <Table>
          <TableHeader>
            <tr>
              <TableCell>Select</TableCell>
              <TableCell className="flex items-center ">
                <span className="md:mr-5 mr-3">Name</span>
                {/* search input */}
                <DarkInput
                  type="text"
                  placeholder="Search Categories"
                  onChange={debounce(handleSearch, 400)}
                />
              </TableCell>

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
