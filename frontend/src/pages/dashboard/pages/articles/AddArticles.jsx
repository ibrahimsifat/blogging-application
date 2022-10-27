import JoditEditor from "jodit-react";
import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";

const AddArticles = () => {
  const [text, setText] = useState("");
  const editor = useRef();
  const config = {
    readonly: false,
  };
  return (
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

          <div className="form-group">
            <label htmlFor="category">Category</label>
            <select className="form-control" name="category" id="category">
              <option value="">--select article category--</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="tag">Tag</label>
            <select className="form-control" name="tag" id="tag">
              <option value="sdas">--select article tag--</option>
            </select>
          </div>
          <div className="form-group img_upload">
            <div className="upload">
              <label htmlFor="upload_image">dfgsdfg</label>
              <input type="file" id="upload_image" />
            </div>
            <label htmlFor="article text">Article text</label>
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
          </div>
          <div className="form-group">
            <label htmlFor="image">Image</label>
            <div className="image-select">
              <label htmlFor="image">Select Image</label>
              <input
                type="file"
                className="form-control"
                name="image"
                id="image"
              />
            </div>
          </div>

          <button className="btn btn-block">Add Article</button>
        </form>
      </div>
    </div>
  );
};

export default AddArticles;
