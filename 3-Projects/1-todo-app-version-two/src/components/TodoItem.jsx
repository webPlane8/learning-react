function TodoItem({ todoName, todoDate }) {
  return (
    <div className="container">
      <div className="row kg-row">
        <div className="col-6">
          <h6>{todoName}</h6>
        </div>
        <div className="col-4">
          <h6>{todoDate}</h6>
        </div>
        <div className="col-2">
          <button type="button" className="btn btn-danger kg-btn">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
