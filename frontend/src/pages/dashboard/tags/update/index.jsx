import { Button } from "@windmill/react-ui";
import { default as React, useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import PageTitle from "../../../../components/dashboard/Typography/PageTitle";
import InputGroup from "../../../../components/shared/input/Input";
import Error from "../../../../components/shared/ui/Error";
import {
  useGetTagQuery,
  useUpdateTagMutation,
} from "../../../../features/tag/tagsApi";
import { selectEditTag } from "../../../../features/tag/tagSelector";
import { successNotify } from "../../../../hooks/toast/Toast";
import { tagInitialValue } from "../../../../utils/validator/formValidator";
import Form from "../../../auth/ui/Form";

const UpdateTag = () => {
  const { tagId } = useParams();
  const [formState, setFormState] = useState({ ...tagInitialValue });
  const [submitError, setSubmitError] = useState({ name: "", description: "" });

  // input handleChange
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };
  // fetch category
  useGetTagQuery(tagId);
  // get category from state
  const editTag = useSelector(selectEditTag);

  // update input value
  useEffect(() => {
    setFormState((prev) => ({
      ...prev,
      name: editTag?.name,
      description: editTag?.description,
    }));
  }, [editTag]);

  // update category
  const [updateTag, { error, isSuccess }] = useUpdateTagMutation();
  const { name, description } = formState;
  const fromError = {};
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      setSubmitError({
        ...submitError,
        name: "Please provide tag name",
      });
    }
    if (!description) {
      setSubmitError({
        ...submitError,
        description: "Please provide tag description",
      });
    }
    if (Object.keys(fromError).length === 0) {
      updateTag({
        id: tagId,
        data: {
          name,
          description,
        },
      });
    } else {
      alert("Invalid");
      return;
    }
  };
  useEffect(() => {
    if (isSuccess) {
      successNotify("Tag Updated successfully");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSuccess]);

  return (
    <div>
      {/* header */}
      <Toaster />
      <div className="flex justify-between items-center">
        <PageTitle className="">Update Tag</PageTitle>
        <Link to="/dashboard/tags">
          <Button>All Tag</Button>
        </Link>
      </div>
      {/* form */}
      <Form onSubmit={(e) => handleSubmit(e, formState)}>
        <InputGroup
          type="text"
          name="name"
          placeholder="This is name"
          id="name"
          label="Updated Name"
          value={name}
          onChange={handleChange}
          required={true}
        />
        <InputGroup
          type="text"
          name="description"
          placeholder="This is description"
          id="description"
          label="Updated description"
          value={description}
          onChange={handleChange}
          required={true}
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

export default UpdateTag;
