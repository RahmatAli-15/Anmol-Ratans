import React from "react";

function Shipping() {
  const myStyle = {
    color: "white",
    backgroundColor: "#072440",
    padding: "10px",
    fontFamily: "Sans-Serif",
    textAlign: "center", // Centering the text
    margin: "20px auto", // Adding margin with auto for centering
    borderRadius: "10px",
  };
  const myStyle2 = {
    color: "white",
    backgroundColor: "#000000FF",
    padding: "10px",
    margin: "10px,",
    fontFamily: "Sans-Serif",
    textAlign: "center", // Centering the text
    margin: "20px auto", // Adding margin with auto for centering
    borderRadius: "10px",
  };
  return (
    <div>
      <div>
        <h1 style={myStyle}>Shipping Policy</h1>
        <h3 style={myStyle2}>
          <br />
          <br />
          1. Processing Time
          <br />
          All orders are processed within 1-2 business days (excluding weekends
          and holidays) after receiving your order confirmation email.
          <br />
          You will receive another notification when your order has shipped.
          <br />
          <br />
          2.Shipping to P.O. Boxes
          <br />
          We currently do not ship to P.O. boxes. Please provide a physical
          address for delivery.
          <br />
          <br />
          3. Return Shipping Costs
          <br />
          Customers are responsible for return shipping costs, except in cases
          of damaged or incorrect items.
          <br />
          We recommend using a trackable shipping service or purchasing shipping
          insurance. <br />
          We are not responsible for items lost in transit.
          <br />
          <br />
          4. 6. Delays
          <br />
          While we strive to meet our shipping timelines, please note that
          delays can occur due to unforeseen circumstances such as severe
          weather, natural disasters, or holidays.
          <br />
          We are not responsible for shipping delays caused by these external
          factors.
          <br />
          <br />
          8. Lost or Damaged Packages <br />
          If your package is lost or damaged in transit, <br />
          please contact us immediately at [rahmatali2526@gmail.com] or
          +91-7983900475. <br />
          We will work with the shipping carrier to resolve the issue as quickly
          as possible.
          <br />
          <br />
          6.Contact Us For any questions or concerns about our Shipping policy,{" "}
          <br />
          please contact us at: <br />
          Email: [rahmatali2526@gmail.com] <br />
          Phone: +91-7983900475
        </h3>
      </div>
    </div>
  );
}

export default Shipping;
