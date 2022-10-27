import DeleteModal from "./DeleteModal";

function Card(props) {

  return (
    <div
      className="card col-12 col-sm-6 col-md-6 col-lg-4 col-xxl-3 shadow-sm"
      id={props.id}
    >
      <div className="card-body">
        <h2>{props.title}</h2>
        <div className="actions d-flex justify-content-end">
          <button
            className="btn btn-outline-danger"
            data-bs-toggle="modal"
            data-bs-target={"#delete-modal-" + props.id}
          >
            Delete
          </button>
        </div>
      </div>
      <DeleteModal id={props.id} />
    </div>
  );
}

export default Card;
