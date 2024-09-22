import React from "react";

function Return() {
  const myStyle = {
   
    color: "white",
    backgroundColor: "#072440",
    padding: "10px",
    fontFamily: "Sans-Serif",
    textAlign: "center", // Centering the text
    margin: "20px auto", // Adding margin with auto for centering
      borderRadius: "10px",
  }
  const myStyle2 = {
   color: "white",
   backgroundColor: "#000000FF",
   padding: "10px",
   margin:"10px,",
   fontFamily: "Sans-Serif",
   textAlign: "center", // Centering the text
   margin: "20px auto", // Adding margin with auto for centering
     borderRadius: "10px",
   
 }
  return (
    <div>
      <div>
        <h1 style={myStyle}>Return Policy</h1>
        <h3 style={myStyle2}>
          <br />
          <br />
          1. Eligibility for Returns Items must be returned within 7 days of
          delivery.
          <br />
          Items must be in their original condition, unworn, and with all
          original tags and packaging intact.
          <br />
          Customized or engraved items are not eligible for returns.
          <br />
          <br />
          2. Return Process Initiate a Return: <br />
          Contact our customer service at [rahmatali2526@gmail.com] or call
        +91-7983900475 to initiate a return.  <br />Please provide your order number and
          reason for return.
          <br />
          Receive Return Authorization:
          <br />
          Once your return request is approved, you will receive a return
          authorization number and instructions on how to send your item back.
          <br />
          Ship the Item: <br />
          Pack the item securely, including the return authorization number
          inside the package. Ship the item to:
          <br />
          j 3/58 <br />
          Khirkhi Extension Malviya Nagar <br />
          New Delhi
          <br />
          110017
          <br />
          <br />
          3. Return Shipping Costs
          <br />
          Customers are responsible for return shipping costs, except in cases
          of damaged or incorrect items.
          <br />
          We recommend using a trackable shipping service or purchasing shipping
          insurance.  <br />We are not responsible for items lost in transit.
          <br />
          <br />
          4. Refunds Once we receive and inspect the returned item, we will
          notify you of the approval or rejection of your refund.
          <br />
          Approved refunds will be processed and a credit will automatically be
          applied to your original method of payment within 7 days. <br /> Shipping
          costs are non-refundable.
          <br />
          <br />
          5.Non-Returnable Items <br />
          Gift cards <br />
          Customized or engraved jewelry <br />
          Items marked as final sale <br />
          <br />
          <br />
          6.Contact Us For any questions or concerns about our return policy, <br />
          please contact us at: <br />
          Email: [ rahmatali2526@gmail.com] <br />
          Phone: +91-7983900475
        </h3>
      </div>
    </div>
  );
}

export default Return;
