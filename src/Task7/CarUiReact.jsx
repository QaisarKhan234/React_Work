import React from "react";

const CarUiReact = (props) => {
  let { filterCar, comCar, cars, filterModel, modelCar, filterColor, carCol } =
    props;
  return (
    <>
      <div className="row">
        <div className="col-2 bg-light g-2 mx-3 shadow">
          <div className="menu-tabs container">
            <h2>Company</h2>
            <div className="menu-tab d-grid gap-2">
              {comCar.map((curElem, id) => {
                return (
                  <button
                    className="btn btn-dark"
                    key={id}
                    onClick={() => filterCar(curElem)}
                  >
                    {curElem}
                  </button>
                );
              })}
            </div>
          </div>
          <div className="menu-tabs container pt-3">
            <h2>Model</h2>
            <div className="menu-tab d-flex flex-wrap gap-2">
              {modelCar.map((curElem, id) => {
                return (
                  <button
                    className="btn btn-dark"
                    key={id}
                    onClick={() => filterModel(curElem)}
                  >
                    {curElem}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="menu-tabs container pt-3">
            <h2>Color</h2>
            <div className="menu-tab  d-flex flex-wrap gap-2 ">
              {carCol.map((curElem, id) => {
                return (
                  <button
                    className="btn btn-warning"
                    key={id}
                    onClick={() => filterColor(curElem)}
                  >
                    {curElem}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right side bar */}
        <div className="col-lg-9 col-md-12 col-12 d-flex flex-wrap gx-5 mx-5 ">
          {cars.map((elem) => {
            const { image, company, color, price, model } = elem;
            return (
              <>
                <div className="Item1 col-12 col-md-6 col-lg-4 my-2">
                  <div className="row Item-inside">
                    <div className="card shadow">
                      <img src={image} alt="Loading" className="img-fluid" />
                      <div className="col-lg-12 data-div">
                        <h3>{company}</h3>
                        <div className="col-12 d-flex justify-content-between">
                          <h6>Color: {color}</h6>
                          <h6>Price: ${price}</h6>
                        </div>
                      </div>
                      <h5>{model}</h5>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default CarUiReact;
