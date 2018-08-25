import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

const App = () => {
  return (
    <div className="card">
      <h1 className="Title">CREDIT CARD</h1>
      <img
        className="puce"
        src="http://www.yim778.com/data/out/78/899298.png"
      />
      <h2 className="cardNumber">7253 3256 7895 1245</h2>
      <div className="credit-card-id">
        <h4 className="code">5422 </h4>
        <h5 className="date">11/5</h5>
      </div>
      <h2 className="type">CARDHOLDER</h2>
      <img
        className="MasterCard"
        src="https://i.ebayimg.com/images/g/B7MAAMXQgJRRBDvt/s-l300.jpg"
      />
    </div>
  );
};
ReactDOM.render(<App />, document.querySelector("#root"));
