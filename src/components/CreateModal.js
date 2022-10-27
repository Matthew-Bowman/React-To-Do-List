function CreateModal(props) {
  return (
    <div
      className="modal fade"
      id="create-modal-"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabIndex={-1}
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5">Creat new item</h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <div className="mb-3">
              <label htmlFor="recipient-name" className="col-form-label">
                Name:
              </label>
              <input type="text" className="form-control" id="recipient-name" />
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-outline-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button
              type="button"
              className="btn btn-outline-success"
              data-bs-dismiss="modal"
            >
              Create
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateModal;
