import React from "react";

function Contact() {
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
        <h1 style={myStyle}>Feel free to Contact</h1>
        <h3 style={myStyle2}>
          <br />
          <br />
          1. Email
          <br />
          rahmatali2526@gmail.com
          <br />
          <br />
          2. Phone
          <br />
          +91-7983900475
          <br />
          <br />
          3. Address
          <br />
          j 3/58 <br />
          Khirkhi Extension Malviya Nagar <br />
          New Delhi
          <br />
          110017
          <br />
          <br />
          4. Business Hours
          <br />
          Monday to Friday, 9 AM - 5 PM
          <br />
          <br />
        </h3>
      </div>
    </div>
  );
}

export default Contact;
