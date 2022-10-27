function Card(props) {
  return (
    <div className="card col-12 col-sm-6 col-md-6 col-lg-4 col-xxl-3 shadow-sm">
      <div
        className="card-body w-100 btn btn-outline-primary border-0"
        data-bs-toggle="modal"
        data-bs-target="#create-modal-"
      >
        <h2 className="text-center m-0">
          <i className="bi bi-plus-lg"></i>
        </h2>
      </div>
    </div>
  );
}

export default Card;
