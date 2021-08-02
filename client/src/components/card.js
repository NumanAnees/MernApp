import React from "react";

const card = (props) => {
  return (
    <>
      <div className="card">
        <div class="card text-left">
          <img class="card-img-top" src="" alt="" />
          <div class="card-body">
            <h4 class="card-title">{props.name}</h4>
            <p class="card-text">{props.data}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default card;
