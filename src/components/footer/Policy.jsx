import React from 'react'

function Policy() {
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
    <h1 style={myStyle}>Privacy Policy</h1>
    <h3 style={myStyle2}>
    <br />
    
    <br />

1. Information Collection<br />
   We collect your name, email, address, phone number, payment details.
<br />
<br />
2. Use of Information<br />
   Process and fulfill orders
   Communicate with you about orders and inquiries
   Personalize your shopping experience
   Send promotional offers
   Improve our website and services
   Ensure security and prevent fraud
   <br />
   <br />
3. Information Sharing<br />
   We do not sell or rent your personal information.
   We may share information with:
   Service providers (e.g., payment processors, shipping companies)
   Legal authorities if required
   <br />
   <br />
4. Data Security<br />
   We implement security measures such as encryption and secure payment gateways to protect your information.
   <br />
   <br />
5. User Choices<br />
  You can access and update your personal information.
  You can opt-out of marketing communications.
  You can request the deletion of your personal information.
  You can manage cookies through your browser settings.
  <br />
  <br />

7. Policy Updates<br />
   We may update our privacy policies. Significant changes will be posted on our website.
   <br />
   <br />

8. Contact Information<br />
   For any questions or concerns about our privacy policies, contact us at [+91-7983900475].
    </h3>
    
    
    </div>
  )
}

export default Policy;