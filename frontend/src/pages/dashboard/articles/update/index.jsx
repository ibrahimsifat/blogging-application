import { Button } from "@windmill/react-ui";
import JoditEditor from "jodit-react";
import { default as React, useEffect, useRef, useState } from "react";
import { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import PageTitle from "../../../../components/dashboard/Typography/PageTitle";
import InputGroup from "../../../../components/shared/input/Input";
import Error from "../../../../components/shared/ui/Error";
import {
  useGetArticleQuery,
  useUpdateArticleMutation,
} from "../../../../features/articles/articlesApi";
import { useGetCategoriesQuery } from "../../../../features/category/categoriesApi";
import { selectPublishedCategory } from "../../../../features/category/categorySelector";
import { useGetTagsQuery } from "../../../../features/tag/tagsApi";
import { selectPublishedTag } from "../../../../features/tag/tagSelector";
import MultiSelect from "../../../../hooks/multiselect";

import { successNotify } from "../../../../hooks/toast/Toast";
import UseUpload from "../../../../hooks/UseUpload";
import {
  arrayFromSelectValues,
  arrayFromValues,
} from "../../../../utils/arrayFromSelectValues";
import { articleValidate } from "../../../../utils/validator/formValidator";
import Form from "../../../auth/ui/Form";

const UpdateArticle = () => {
  const { articleId } = useParams();
  const [updateArticle, { error, isSuccess }] = useUpdateArticleMutation();
  const [title, setTitle] = useState("");
  const [submitError, setSubmitError] = useState({ name: "", description: "" });
  const [defaultCategory, setDefaultCategory] = useState([]);
  const [defaultTags, setDefaultTags] = useState([]);
  const [description, setDescription] = useState("");
  const [categoryField, setCategoryField] = useState([]);
  const [tagsField, setTagsField] = useState([]);
  // input handleChange
  const handleChange = (e) => {
    setTitle(e.target.value);
  };
  // fetch category
  const { data } = useGetArticleQuery(articleId);

  // get category from state
  const editArticle = data?.editArticle;

  // update input value
  useEffect(() => {
    setTitle(editArticle?.title);

    // update old category and tags
    const oldCategories = arrayFromValues(editArticle?.category);
    const oldTags = arrayFromValues(editArticle?.tag);
    setDefaultCategory(oldCategories);
    setDefaultTags(oldTags);

    // update description
    setDescription(editArticle?.articleText);
    // update image
    setSelectImage(editArticle?.image);
    // set category and tags
    setCategoryField(editArticle?.category);
    setTagsField(editArticle?.tag);
  }, [editArticle]);

  console.log(articleId);

  useEffect(() => {
    if (isSuccess) {
      successNotify("Article Updated successfully");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSuccess]);

  const editor = useRef();
  const config = {
    readonly: false,
    theme: "dark",
  };

  // select

  console.log("categoryField", categoryField);
  console.log("defaultCategory", defaultCategory);
  // fetch category/tags
  useGetCategoriesQuery();
  useGetTagsQuery();
  // category from return select/option value
  const publishedCategories = useSelector(selectPublishedCategory);
  const selectCategories = arrayFromSelectValues(publishedCategories);
  // select categories and tags
  // article from return select/option value
  const publishedTags = useSelector(selectPublishedTag);
  const selectTags = arrayFromSelectValues(publishedTags);

  //  image upload
  const [selectImage, setSelectImage] = useState(null);

  // update article
  const onSubmit = (e) => {
    e.preventDefault();
    const articleObj = {
      title: title.charAt(0).toUpperCase() + title.slice(1),
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
      updateArticle({ ...articleObj, articleId });
    }
  };
  return (
    <div>
      {/* header */}
      <Toaster />
      <div className="flex justify-between items-center">
        <PageTitle className="">Update Article</PageTitle>
        <Link to="/dashboard/articles">
          <Button>All Article</Button>
        </Link>
      </div>
      {/* form */}
      <Form onSubmit={(e) => onSubmit(e)}>
        <InputGroup
          type="text"
          name="name"
          placeholder="This is name"
          id="name"
          label="Updated Name"
          value={title}
          onChange={handleChange}
          required={true}
        />
        <div>
          {defaultCategory?.length > 0 && (
            <MultiSelect
              label="Update categories"
              defaultValue={defaultCategory}
              id="UpdateCategory"
              setField={setCategoryField}
              selectOption={selectCategories}
            />
          )}
        </div>
        <div>
          {defaultTags?.length > 0 && (
            <MultiSelect
              label="Update Tags"
              defaultValue={defaultTags}
              id="UpdateTags"
              setField={setTagsField}
              selectOption={selectTags}
            />
          )}
        </div>
        <div className="relative">
          <UseUpload
            selectImage={selectImage}
            setSelectImage={setSelectImage}
          />
        </div>
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
        <Button type="submit">Update</Button>
      </Form>
      {submitError.name && <Error>{submitError?.name}</Error>}
      {submitError.description && <Error>{submitError?.description}</Error>}
      {error?.data?.name && <Error>{error?.data?.name}</Error>}
      {error?.data?.description && <Error>{error?.data?.description}</Error>}
    </div>
  );
};

export default UpdateArticle;
