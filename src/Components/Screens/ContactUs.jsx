import React, { useState } from "react";
import "../../Styles/ContactUs.css";
import Faq from "../Faq";
import Faq_data from "../../Data/Faqs_main";
import { db } from "../../App";
import { getFirestore, collection, getDocs, addDoc } from "firebase/firestore";
import Button from "../Button";
function ContactUs() {
  const [name, setname] = useState("");
  const [college, setcollege] = useState("");
  const [email, setemail] = useState("");
  const [mobile, setmobile] = useState("");
  const [question, setquestion] = useState("");

  const submit = async () => {
    if (!(name && college && email && mobile && question)) {
      alert("All fields are mandatory");
    } else {
      try {
        const docRef = await addDoc(collection(db, "queries"), {
          name,
          email,
          mobile,
          question,
          college,
          replied: false,
        });

        // console.log("Document written with ID: ", docRef.id);
        alert("Success");
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    }
    // validations
  };
  return (
    <div className="support">
      <div className="support-container">
        <div></div>
        <h1 className="support-header">
          <div className="support-title">Support</div>
          <div
            className="mobile-container"
            style={{
              backgroundColor: "var(--fg-green)",
              width: "40px",
              height: "40px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "10px",
              borderRadius: "500px",
            }}
          >
            <a href="tel:+91 93631 95676">
              <i className="fa fa-phone"></i>
            </a>
          </div>
        </h1>
        <div className="support-content">
          <form action="#" method="post" onSubmit={submit}>
            <div className="form-group">
              <label htmlFor="username">Name:</label>
              <input
                type="text"
                id="username"
                name="username"
                value={name}
                onChange={(e) => setname(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="institution">Institution:</label>
              <input
                type="text"
                id="institution"
                name="institution"
                value={college}
                onChange={(e) => setcollege(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Mail id:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setemail(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="mobile">Mobile Number:</label>
              <input
                type="tel"
                id="mobile"
                name="mobile"
                pattern="[0-9]{10}"
                value={mobile}
                onChange={(e) => setmobile(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="queries">Queries:</label>
              <textarea
                id="queries"
                name="queries"
                rows="4"
                value={question}
                onChange={(e) => setquestion(e.target.value)}
                required
              ></textarea>
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                maxHeight: "200px",
                marginRight: "3vw"
              }}
            >
              <div class="submit-btn-event">
                <div style={{ padding: "0px" }}>
                  <button
                    type="submit"
                    class="submit"
                    style={{ width: "200px", height: "50px"}}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
