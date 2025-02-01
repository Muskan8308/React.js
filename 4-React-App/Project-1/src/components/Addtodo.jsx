function Addtodo()
{
    return (
        <div class="container text-center">
          <div class="row">
            <div class="col-6">
              <input type="text" placeholder= "Enter your todo"></input>
            </div>
            <div class="col-4">
              <input type="date" placeholder= "Enter your todo"></input>
            </div>
            <div class="col-2">
              <button type="button" class="btn btn-success">Add</button>
            </div>
          </div>
        </div>
    )
}

export default Addtodo;
