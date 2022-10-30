import { Button } from "@windmill/react-ui";
import JoditEditor from "jodit-react";
import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import Select from "react-select";
import PageTitle from "../../../components/dashboard/Typography/PageTitle";
import InputGroup, { InputLabel } from "../../../components/shared/input/Input";
import ProcessBtn from "../../../components/shared/ui/Button/ProcessBtn";
import UseForm from "../../../hooks/useForm";
import Form from "../../auth/ui/Form";
import ModalPage from "../categories/delete";
import { selectCategory, selectTags } from "./data";
import UseUpload from "./UseUpload";
const init = {
  title: "",
  slug: "",
  category: [],
  tags: [],
  image: "",
};
const validate = (values) => {
  let errors = {};
  if (!values.title) {
    errors.title = "Title is required";
  }
  if (!values.slug) {
    errors.slug = "Slug is required";
  }

  return errors;
};
const AddArticles = () => {
  // article details
  const [text, setText] = useState("");
  const [submitError, setSubmitError] = useState([]);
  const editor = useRef();
  const config = {
    readonly: false,
    theme: "default",
  };
  // Jodit.make("#editor", {
  //   "theme": "dark"
  // });
  // handle form state
  const [disableSubmit, setDisableSubmit] = useState(true);
  const {
    formState: state,
    clear,
    handleBlur,
    handleChange,
    handleFocus,
    handleSubmit,
  } = UseForm({ init, validate });

  const cb = ({ hasError, values, errors }) => {
    if (hasError) {
      const obj = errors;
      const errorArray = Object.values(obj);
      setSubmitError(errorArray);
    } else {
      console.log("[success]" + JSON.stringify(values));
    }
  };

  // select
  const [category, setCategory] = useState([]);
  const [tags, setTags] = useState([]);
  console.log(category);
  const handleCategorySelect = (newValue) => {
    const reduceValue = newValue?.map((value) => value?.value);
    setCategory([...reduceValue]);
  };
  const handleTagsSelect = (newValue) => {
    const reduceValue = newValue?.map((value) => value?.value);
    setTags([...reduceValue]);
  };

  //  image upload
  const [selectImage, setSelectImage] = useState(null);
  console.log(selectImage);

  return (
    <>
      <ModalPage />
      <PageTitle className="">Add new Articles</PageTitle>
      <div className="bg-white md:p-10 p-4">
        <Form onSubmit={(e) => handleSubmit(e, cb)}>
          <InputGroup
            value={state.title.value}
            type={"text"}
            label={"Title"}
            name={"title"}
            placeholder={"title"}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            error={state.title.error}
          />
          <InputGroup
            value={state.slug.value}
            type={"text"}
            label={"slug"}
            name={"slug"}
            placeholder={"javascript-event-loop-article"}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            error={state.slug.error}
          />
          <div>
            <InputLabel htmlFor={"selectCategory"}>
              {"Select categories"}
            </InputLabel>
            <Select
              required
              isMulti
              id="selectCategory"
              name="category"
              options={selectCategory}
              className="basic-multi-select"
              classNamePrefix="select category"
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
              className="basic-multi-select"
              classNamePrefix="select category"
              onChange={handleTagsSelect}
            />
          </div>

          <UseUpload
            selectImage={selectImage}
            setSelectImage={setSelectImage}
          />
          <JoditEditor
            value={text}
            tabIndex={1}
            ref={editor}
            config={config}
            onBlur={(newText) => setText(newText)}
            onChange={(newText) => {
              console.log(newText);
            }}
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
          <Button type="submit">Submit</Button>
          <ProcessBtn label="Submitting..." />
        </Form>
      </div>
    </>
  );
};

export default AddArticles;
<div className="add-article">
  <div className="add">
    <div className="title-show-article">
      <h2>Add Article</h2>
      <Link className="btn" to="/dashborad/all-article">
        All Article
      </Link>
    </div>
    <form>
      <div className="form-group">
        <label htmlFor="title">Article title</label>
        <input
          type="text"
          name="title"
          placeholder="article title"
          className="form-control"
          id="title"
        />
      </div>
      <div className="form-group">
        <label htmlFor="slug">Article slug</label>
        <input
          type="text"
          placeholder="article slug"
          className="form-control"
          name="slug"
          id="slug"
        />
      </div>

      <div className="form-group img_upload">
        <div className="upload">
          <label htmlFor="upload_image">dfgsdfg</label>
          <input type="file" id="upload_image" />
        </div>
        <label htmlFor="article text">Article text</label>
      </div>
      <div className="form-group">
        <label htmlFor="image">Image</label>
        <div className="image-select">
          <label htmlFor="image">Select Image</label>
          <input type="file" className="form-control" name="image" id="image" />
        </div>
      </div>

      <button className="btn btn-block">Add Article</button>
    </form>
  </div>
</div>;
