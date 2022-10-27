import React, { useState } from "react";

const ArticlesComments = () => {
  const [showReplayInput, setShowReplayInput] = useState(false);
  return (
    <div className="antialiased  max-w-screen-sm">
      <h3 className="mb-4 text-lg font-semibold text-gray-900">Comments</h3>

      <div className="space-y-4">
        <div className="flex">
          <div className="shrink-0 mr-3">
            <img
              className="mt-2 rounded-full w-8 h-8 sm:w-10 sm:h-10"
              src="https://images.unsplash.com/photo-1604426633861-11b2faead63c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80"
              alt=""
            />
          </div>
          <div className="flex-1 border-2 rounded-lg px-4 py-2 sm:px-6 sm:py-4 leading-relaxed">
            <strong>Sarah</strong>{" "}
            <span className="text-xs text-gray-400">3:34 PM</span>
            <p className="text-sm">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua.
            </p>
            {!showReplayInput ? (
              <button
                className="text-sm text-gray-500 font-semibold mt-2"
                onClick={() => setShowReplayInput(true)}
              >
                Reply
              </button>
            ) : (
              <div className="mt-3 ">
                <input
                  type="text"
                  className="w-8/12 bg-gray-100 rounded px-2 py-1 border focus:outline-none focus:border-blue-500"
                />{" "}
                <div className="mt-3 space-x-3">
                  {" "}
                  <button
                    type="button"
                    className="btn bg-gray-200 hover:bg-gray-300 px-4 py-1 font-medium rounded"
                  >
                    Submit
                  </button>
                  <button
                    type="button"
                    className="btn bg-gray-200 hover:bg-gray-300 px-4 py-1 font-medium rounded"
                    onClick={() => setShowReplayInput(false)}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="flex">
          <div className="shrink-0 mr-3">
            <img
              className="mt-2 rounded-full w-8 h-8 sm:w-10 sm:h-10"
              src="https://images.unsplash.com/photo-1604426633861-11b2faead63c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80"
              alt=""
            />
          </div>
          <div className="flex-1 border-2 rounded-lg px-4 py-2 sm:px-6 sm:py-4 leading-relaxed">
            <strong>Sarah</strong>{" "}
            <span className="text-xs text-gray-400">3:34 PM</span>
            <p className="text-sm">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua.
            </p>
            <h4 className="my-5 uppercase tracking-wide text-gray-400 font-bold text-xs">
              Replies
            </h4>
            <div className="space-y-4">
              <div className="flex">
                <div className="shrink-0 mr-3">
                  <img
                    className="mt-3 rounded-full w-6 h-6 sm:w-8 sm:h-8"
                    src="https://images.unsplash.com/photo-1604426633861-11b2faead63c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80"
                    alt=""
                  />
                </div>
                <div className="flex-1 bg-gray-100 border rounded-lg px-4 py-2 sm:px-6 sm:py-4 leading-relaxed">
                  <strong>Sarah</strong>{" "}
                  <span className="text-xs text-gray-400">3:34 PM</span>
                  <p className="text-xs sm:text-sm">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua.
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className="shrink-0 mr-3">
                  <img
                    className="mt-3 rounded-full w-6 h-6 sm:w-8 sm:h-8"
                    src="https://images.unsplash.com/photo-1604426633861-11b2faead63c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80"
                    alt=""
                  />
                </div>
                <div className="flex-1 bg-gray-100 border  rounded-lg px-4 py-2 sm:px-6 sm:py-4 leading-relaxed">
                  <strong>Sarah</strong>{" "}
                  <span className="text-xs text-gray-400">3:34 PM</span>
                  <p className="text-xs sm:text-sm">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticlesComments;
