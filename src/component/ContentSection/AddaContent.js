import React, { useContext, useState } from "react";
import ProjectContext from "../context/ProjectContext";
import EditNoteIcon from "@mui/icons-material/EditNote";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import UpdateIcon from "@mui/icons-material/Update";
import DoneIcon from "@mui/icons-material/Done";

function AddaContent() {
  const {
    content,
    onAddContentChange,
    setContent,
    contents,
    setEditContent,
    editContent,
    handleEditClick,
    handleEditChange,
    handleDeleteContent,
    handleUpdateContent,
    setContents,
    checkWhileAddingSubContent,
    checkWhileAddingContent,
    handleAddContent,
    showContentForm,
    setShowContentForm,
  } = useContext(ProjectContext);

  return (
    <>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Edit details
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={() => setEditContent(null)}
              ></button>
            </div>
            <div className="modal-body">
              {editContent && (
                <form>
                  <div className="mb-3">
                    <label htmlFor="editSubContent" className="form-label">
                      Sub Content
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="editSubContent"
                      name="subContent"
                      value={editContent.subContent}
                      onChange={handleEditChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="editTopicName" className="form-label">
                      Content
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="editTopicName"
                      name="topicName"
                      value={editContent.topicName}
                      onChange={handleEditChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="editLink" className="form-label">
                      Content Link
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="editLink"
                      name="link"
                      value={editContent.link}
                      onChange={handleEditChange}
                    />
                  </div>
             
                  <button
                      type="button"
                      className="btn btn-outline-warning"
                      onClick={handleUpdateContent}
                      data-bs-dismiss="modal"
                    >
                      <UpdateIcon /> Update
                    </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <h1 className="text-center mt-5">Add your content Here</h1>
          <div className="col-lg-2"></div>
          <div className="col-lg-7">
            <form id="form" className="mt-3">
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  placeholder="enter email"
                  aria-describedby="emailHelp"
                  onChange={onAddContentChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="mainSubject" className="form-label">
                  Main Subject
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter the name of your subject"
                  id="mainSubject"
                  name="mainSubject"
                  onChange={onAddContentChange}
                />
              </div>

              <hr />
              {showContentForm && (
                <div className="mb-3">
                  <div className="row">
                    <div className="col-lg-4">
                      <label htmlFor="subContent" className="form-label">
                        Sub Content
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="subContent"
                        placeholder="Enter sub content"
                        name="subContent"
                        value={content.subContent}
                        onChange={onAddContentChange}
                      />
                    </div>
                    <div className="col-lg-4">
                      <label htmlFor="topicname" className="form-label">
                        Topic Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="newtopicname"
                        placeholder="Enter topic name"
                        name="newtopicname"
                        onChange={onAddContentChange}
                      />
                    </div>
                    <div className="col-lg-4">
                      <label htmlFor="link" className="form-label">
                        Document/Video Link
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="newlink"
                        placeholder="Provide required link"
                        name="newlink"
                        value={content.newlink}
                        onChange={onAddContentChange}
                      />
                    </div>
                  </div>

                  <br />

                  <div className="updateButton">
                  
                  <button
                    type="button"
                    className="btn btn-outline-secondary"
                    onClick={(e) => {
                      e.preventDefault();
                      checkWhileAddingSubContent(
                        content.subContent,
                        content.newtopicname,
                        content.newlink
                      );
                    }}
                  >
                    <ControlPointIcon /> Add
                  </button>
                  </div>
                </div>
              )}

              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Sr. No</th>
                    <th scope="col">Sub Content</th>
                    <th scope="col">Content</th>
                    <th scope="col">Content Link</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {contents.map((content, index) => (
                    <tr key={index}>
                      <th scope="row">{index + 1}</th>
                      <td>{content.subContent}</td>
                      <td>{content.topicName}</td>
                      <td>{content.link}</td>
                      <td>
                        <EditNoteIcon
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal"
                          className="editicon"
                          onClick={() => handleEditClick(content, index)}
                        />{" "}
                        <DeleteOutlineIcon
                          className="deleteicon"
                          onClick={() => handleDeleteContent(index)}
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <div className="submit_buttons">
                <button
                  type="button"
                  className="btn btn-outline-primary"
                  onClick={() => setShowContentForm(true)}
                >
                  <ControlPointIcon /> Add Content
                </button>

                <button
                  type="submit"
                  onClick={(e) => {
                    e.preventDefault();
                    checkWhileAddingContent(
                      localStorage.getItem("email"),
                      localStorage.getItem("mainSubject"),
                      contents
                    );
                  }}
                  className="btn btn-outline-success"
                >
                  <DoneIcon /> Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddaContent;
