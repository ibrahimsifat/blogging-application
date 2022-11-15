import { Button } from "@windmill/react-ui";
import Axios from "axios";
import { useEffect, useMemo, useState } from "react";
import { useDropzone } from "react-dropzone";
import ProcessBtn from "../components/shared/ui/Button/ProcessBtn";
import Error from "../components/shared/ui/Error";

const focusedStyle = {
  borderColor: "#2196f3",
};
const baseStyle = {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "20px",
  borderWidth: 2,
  borderRadius: 2,
  borderColor: "#343e4d",
  borderStyle: "dashed",
  backgroundColor: "#1F2937",
  color: "#bdbdbd",
  outline: "none",
  transition: "border .24s ease-in-out",
};
const acceptStyle = {
  borderColor: "#00e676",
};

const rejectStyle = {
  borderColor: "#ff1744",
};

function UseUpload({ selectImage, setSelectImage }) {
  const [invalidFileError, setInvalidFileError] = useState(null);
  const {
    acceptedFiles,
    fileRejections,
    getRootProps,
    getInputProps,
    isFocused,
    isDragAccept,
    isDragReject,
  } = useDropzone({
    accept: {
      "image/jpeg": [],
      "image/jpg": [],
      "image/png": [],
    },
  });

  useEffect(() => {
    setInvalidFileError(fileRejections[0]?.errors[0]?.code);
  }, [fileRejections]);
  const style = useMemo(
    () => ({
      ...baseStyle,
      ...(isFocused ? focusedStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
    }),
    [isFocused, isDragAccept, isDragReject]
  );
  // image upload

  const [photoLoading, setPhotoLoading] = useState(false);

  const uploadImage = () => {
    setPhotoLoading(true);
    const formData = new FormData();
    formData.append("file", acceptedFiles[0]);
    formData.append("upload_preset", "SerabuyImage");
    Axios.post(
      "https://api.cloudinary.com/v1_1/serabuy-com/image/upload",
      formData
    ).then((res) => {
      setSelectImage(res.data.secure_url);
      setPhotoLoading(false);
    });
  };
  return (
    <div className=" ">
      <div {...getRootProps({ style })}>
        <div class="flex flex-col justify-center text-center">
          {!selectImage ? (
            <div class="h-full w-full text-center flex flex-col justify-center items-center">
              <div>
                <svg
                  className="w-14 h-14"
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-10 h-10 text-blue-400 group-hover:text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                  />
                </svg>
              </div>

              <p class="pointer-none text-gray-500 ">
                <span class="text-sm">Drag and drop</span> files here <br /> or{" "}
                <span class="text-blue-600 hover:underline">select a file</span>{" "}
                from your computer
              </p>
            </div>
          ) : (
            selectImage && (
              <img
                src={selectImage}
                className="md:w-80 h-auto w-32 "
                alt="im"
              />
            )
          )}
          <input type="file" class="hidden" {...getInputProps()} />
        </div>
      </div>
      <Error>{invalidFileError && invalidFileError}</Error>
      <div>
        {photoLoading ? (
          <ProcessBtn>Uploading</ProcessBtn>
        ) : (
          !selectImage && (
            <Button layout="link" block onClick={uploadImage}>
              Upload
            </Button>
          )
        )}
        {/* update image btn */}
        {selectImage !== null && (
          <Button block onClick={() => setSelectImage(null)}>
            update Image
          </Button>
        )}
      </div>
    </div>
  );
}

export default UseUpload;
