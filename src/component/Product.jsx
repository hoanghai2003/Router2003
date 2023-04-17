import React from "react";
import { useNavigate } from "react-router-dom";

function Product() {
  const navigate = useNavigate();
  return (
    <div>
      <h3>this is product</h3>
      <button
        onClick={() => {
          navigate("/about");
        }}
      >
        click
      </button>

      {/*  */}
      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        back
      </button>

      {/*  */}
      <button
        onClick={() => {
          navigate("/about", { replace: true });
        }}
      >
        Go to Replace
      </button>

      {/* sử dụng useNavigate để truyền từ component này đên scomponent khác  */}

      <button
        onClick={() => {
          navigate("/about", { state: { course: "ReactJS", company: "RA" } });
        }}
      >
        data
      </button>
    </div>
  );
}

export default Product;
