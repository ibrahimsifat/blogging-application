import JoditEditor from "jodit-react";
import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import PageTitle from "../../../components/dashboard/Typography/PageTitle";
import InputGroup from "../../../components/home/navigation/ui/Input";
import Button from "../../../components/shared/ui/Button/Button";
import ProcessBtn from "../../../components/shared/ui/Button/ProcessBtn";
import UseForm from "../../../hooks/useForm";
import Form from "../../auth/ui/Form";

const init = {
  username: "",
  email: "",
  password: "",
};
const validate = (values) => {
  let errors = {};
  if (!values.username) {
    errors.username = "Username is required";
  }
  if (!values.email) {
    errors.email = "Email is required";
  }
  if (!values.password) {
    errors.password = "Password is required";
  }
  return errors;
};
const AddArticles = () => {
  const [text, setText] = useState("");
  const editor = useRef();
  const config = {
    readonly: false,
  };

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
      console.log("[Error]" + JSON.stringify(errors));
    } else {
      console.log("[success]" + JSON.stringify(values));
    }
  };
  return (
    <>
      <PageTitle className="">Add new Articles</PageTitle>
      <div className="bg-white md:p-10 p-4">
        <Form onSubmit={(e) => handleSubmit(e, cb)}>
          <InputGroup
            value={state.username.value}
            type={"text"}
            label={"Username"}
            name={"username"}
            placeholder={"test@example.com"}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            error={state.username.error}
          />
          <InputGroup
            value={state.email.value}
            type={"email"}
            label={"Email"}
            name={"email"}
            placeholder={"test@example.com"}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            error={state.email.error}
          />
          <InputGroup
            value={state.password.value}
            type={"password"}
            label={"Password"}
            name={"password"}
            placeholder={"******"}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            error={state.password.error}
          />
          <JoditEditor
            className="bg-white text-white"
            value={text}
            tabIndex={1}
            ref={editor}
            config={config}
            onBlur={(newText) => setText(newText)}
            onChange={(newText) => {
              console.log(newText);
            }}
          />
          <Button $primary type="submit">
            Submit
          </Button>
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
