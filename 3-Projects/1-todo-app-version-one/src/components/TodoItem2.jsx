function TodoItem2() {
  let todoName = "Go to college";
  let todoDate = "4/10/2023";
  return (
    <div class="container">
      <div class="row kg-row">
        <div class="col-6">
          <h6>{todoName}</h6>
        </div>
        <div class="col-4">
          <h6>{todoDate}</h6>
        </div>
        <div class="col-2">
          <button type="button" class="btn btn-danger kg-btn">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
export default TodoItem2;
