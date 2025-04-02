import { useDispatch } from "react-redux";
import { useRef } from "react";
function Controls() {
  // dispatch function
  const dispatch = useDispatch();

  const handleIncre = () => {
    dispatch({ type: "INCREMENT" });
  };

  const handleDecre = () => {
    dispatch({ type: "DECREMENT" });
  };

  const inputVal = useRef();
  const handleAdd = () => {
    dispatch({ type: "ADD", payload: { num: inputVal.current.value } });
    inputVal.current.value = "";
  };

  const handleSub = () => {
    dispatch({ type: "SUBSTRACT", payload: { num: inputVal.current.value } });
    inputVal.current.value = "";
  };

  const handleToggle = () => {
    dispatch({type : "PRIVACY_TOGGLE"});
  }

  return (
    <>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button
          onClick={handleIncre}
          type="button"
          className="btn btn-primary btn-lg px-4 gap-3"
        >
          Increment
        </button>
        <button
          onClick={handleDecre}
          type="button"
          className="btn btn-primary btn-lg px-4 gap-3"
        >
          Decrement
        </button>
        <button
          onClick={handleToggle}
          type="button"
          className="btn btn-primary btn-lg px-4 gap-3"
        >
          Privacy
        </button>
      </div>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center col-row">
        <input type="text" placeholder="Enter any number" ref={inputVal} />
        <button
          onClick={handleAdd}
          type="button"
          className="btn btn-primary btn-lg px-4 gap-3"
        >
          Increment
        </button>
        <button
          onClick={handleSub}
          type="button"
          className="btn btn-primary btn-lg px-4 gap-3"
        >
          Decrement
        </button>
      </div>
    </>
  );
}

export default Controls;
