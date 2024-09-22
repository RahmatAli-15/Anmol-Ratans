import React from "react";

function Terms() {
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
      <h1 style={myStyle}>Terms and Conditions</h1>
      <h3 style={myStyle2}>
        <br />
        <br />
        1. Introduction
        <br />
        Welcome, By using our website, you agree to these terms and conditions
        <br />
        <br />
        2. Use of Website
        <br />
        You must be at least 18 years old to use our website. You agree to
        provide accurate and complete information when creating an account or
        making a purchase.
        <br />
        <br />
        3. Products and Orders
        <br />
        We strive to display our products accurately but cannot guarantee colors
        and details. We reserve the right to refuse or cancel orders for any
        reason, including pricing errors.
        <br />
        <br />
        4. Payment
        <br />
        Payment must be made at the time of purchase using accepted payment
        methods. Prices are subject to change without notice.
        <br />
        <br />
        5. Shipping and Delivery
        <br />
        Shipping costs and delivery times vary based on location and shipping
        method. We are not responsible for delays caused by shipping carriers.
        <br />
        <br />
        6. Intellectual Property
        <br />
        All content on our website, including images and text, is owned by us or
        our licensors. You may not use our content without permission.
        <br />
        <br />
        7. Privacy
        <br />
        We handle your personal information according to our Privacy Policy.
        <br />
        <br />
        10. Changes to Terms
        <br />
        We may update these terms and conditions. Changes will be posted on our
        website.
        <br />
        <br />
        8. Contact Information For any questions about these terms, contact us
        at [+91-7983900475].
      </h3>
    </div>
  );
}

export default Terms;
