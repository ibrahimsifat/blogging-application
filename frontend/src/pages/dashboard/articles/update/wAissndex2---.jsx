import { Button, Label } from "@windmill/react-ui";
import JoditEditor from "jodit-react";
import React, { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Select from "react-select";
import PageTitle from "../../../../components/dashboard/Typography/PageTitle";
import {
  ErrorInput,
  Input,
  InputLabel,
} from "../../../../components/shared/input/Input";
import ProcessBtn from "../../../../components/shared/ui/Button/ProcessBtn";
import Error from "../../../../components/shared/ui/Error";
import {
  useAddArticleMutation,
  useGetArticleQuery,
} from "../../../../features/articles/articlesApi";
import { useGetCategoriesQuery } from "../../../../features/category/categoriesApi";
import { selectPublishedCategory } from "../../../../features/category/categorySelector";
import { useGetTagsQuery } from "../../../../features/tag/tagsApi";
import { selectPublishedTag } from "../../../../features/tag/tagSelector";
import UseUpload from "../../../../hooks/UseUpload";
import {
  arrayFromSelectValues,
  arrayFromValues,
} from "../../../../utils/arrayFromSelectValues";
import { articleValidate } from "../../../../utils/validator/formValidator";
import Form from "../../../auth/ui/Form";
const UpdateArticle = () => {
  const [addArticle, { isSuccess }] = useAddArticleMutation();
  // article details
  const [description, setDescription] = useState("");
  const [submitError, setSubmitError] = useState([]);

  const { articleSlug } = useParams();
  const [defaultCategory, setDefaultCategory] = useState([]);
  const [defaultTags, setDefaultTags] = useState([]);

  // fetch category
  const { data } = useGetArticleQuery(articleSlug);

  // get category from state
  const editArticle = data?.editArticle;

  // update input value
  useEffect(() => {
    // update old category and tags
    const oldCategories = arrayFromValues(editArticle?.category?.split(" "));
    const oldTags = arrayFromValues(editArticle?.tag?.split(" "));
    setDefaultCategory(oldCategories);
    setDefaultTags(oldTags);

    // update description
    setDescription(editArticle?.articleText);
  }, [editArticle]);

  const editor = useRef();
  const config = {
    readonly: false,
    theme: "dark",
  };
  console.log(description);
  // select
  const [categoryField, setCategoryField] = useState([]);
  const [tagsField, setTagsField] = useState([]);

  // fetch category
  useGetCategoriesQuery();
  // category from return select/option value
  const publishedCategories = useSelector(selectPublishedCategory);
  const selectCategories = arrayFromSelectValues(publishedCategories);
  // fetch tags
  useGetTagsQuery();
  // category from return select/option value
  const publishedTags = useSelector(selectPublishedTag);
  const selectTags = arrayFromSelectValues(publishedTags);

  // select categories and tags
  const handleCategorySelect = (newValue) => {
    const reduceValue = newValue?.map((value) => value?.value);
    setCategoryField([...reduceValue]);
  };
  const handleTagsSelect = (newValue) => {
    const reduceValue = newValue?.map((value) => value?.value);
    setTagsField([...reduceValue]);
  };

  //  image upload
  const [selectImage, setSelectImage] = useState(null);
  // handle submit
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: "onBlur", // "onChange"
  });
  const onSubmit = (data) => {
    const title = data.title.charAt(0).toUpperCase() + data.title.slice(1);
    const articleObj = {
      title,
      category: categoryField,
      tag: tagsField,
      image: selectImage,
      text: description,
    };
    const errors = articleValidate({ ...articleObj });
    if (errors !== {} || errors) {
      const errorArray = Object.values(errors);
      setSubmitError(errorArray);
    }
    console.log("errors", errors);
    if (Object.keys(errors).length === 0) {
      addArticle({ ...articleObj });
    }
  };

  const navigate = useNavigate();
  useEffect(() => {
    if (isSuccess) {
      // successNotify("Category added successfully");
      navigate("/dashboard/articles");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSuccess]);
  console.log(defaultCategory);
  return (
    <>
      <PageTitle className="">Add new Articles</PageTitle>
      <div className="md:p-10 p-4">
        <Form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <Label>Title</Label>
            {errors.title ? (
              <ErrorInput {...register("title", { required: true })} />
            ) : (
              <Input {...register("title", { required: true })} />
            )}
            {errors.title && <Error>Title is required</Error>}
          </div>

          <div>
            <InputLabel htmlFor={"selectCategory"}>
              {"Select categories"}
            </InputLabel>
            <Select
              defaultValue={defaultCategory}
              required
              isMulti
              id="selectCategory"
              name="category"
              options={selectCategories}
              className="my-react-select-container"
              classNamePrefix="my-react-select"
              onChange={handleCategorySelect}
            />
          </div>
          <div>
            <InputLabel htmlFor={"selectTags"}>{"Select Tags"}</InputLabel>
            <Select
              required
              isMulti
              id="selectTags"
              name="tags"
              options={selectTags}
              className="my-react-select-container"
              classNamePrefix="my-react-select"
              onChange={handleTagsSelect}
            />
          </div>

          <UseUpload
            selectImage={selectImage}
            setSelectImage={setSelectImage}
          />
          <JoditEditor
            theme="dark"
            value={description}
            tabIndex={1}
            ref={editor}
            config={config}
            onBlur={(newText) => setDescription(newText)}
            // onChange={(newText) => {
            //   console.log(newText);
            // }}
          />
          {submitError && (
            <ul>
              {submitError.map((error, i) => (
                <li className="text-red-500" key={i}>
                  {error}
                </li>
              ))}
            </ul>
          )}
          <Button block type="submit">
            Submit
          </Button>
          <ProcessBtn label="Submitting..." />
        </Form>
      </div>
    </>
  );
};

export default UpdateArticle;
