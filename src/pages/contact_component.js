import React, { Component, useState, useEffect } from "react";

import FooterComponent from "../components/footer";
import moment from "moment-timezone";
import Whatsapp_icon from "../components/whatsapp_icon";
import { Helmet } from 'react-helmet';
import Navbar from "../components/navbar";
import { first_img } from "./mls_constants";

const ContactComponent = (props) => {
  const [userData, setUserData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    program: "",
    timezone: "",
    message: "",
  });
  const btnStyle = {
    marginTop: '1%'
  }
  let name, value;
  const postUserData = (event) => {
    name = event.target.name;
    value = event.target.value;
    setUserData({ ...userData, [name]: value });
  };
  const allTimeZones = [
    "America/New York(EST)",
    "America/Chicago(CST)",
    "America/Denver(MST)",
    "America/Los Angeles(PST)",
    "America/Anchorage(AKST)",
    "America/Phoenix(MST)",
    "Pacific/Honolulu(HAST)",
    "Asia/Kolkata(IST)", // IST
  ];
  const submitData = async (event) => {
    event.preventDefault();
    const { firstname, lastname, email, phone, program, timezone, message } =
      userData;
    if (
      firstname &&
      lastname &&
      email &&
      phone &&
      program &&
      timezone &&
      message
    ) {
      const res = await fetch(
        "https://mlsclasses-default-rtdb.firebaseio.com/contactDetails.json",
        {
          method: "POST",
          Headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            firstname,
            lastname,
            email,
            phone,
            program,
            timezone,
            message,
          }),
        }
      );
      if (res) {
        setUserData({
          firstname: "",
          lastname: "",
          email: "",
          phone: "",
          program: "",
          timezone: "",
          message: "",
        });

        //sending email logic
        let data = {
          "firstname": firstname,
          "lastname": lastname,
          "email": email,
          "phone": phone,
          "program": program,
          "timezone": timezone,
          "message": message,
        }
        console.log('test', data);
        fetch('https://api.brevo.com/v3/smtp/email', {
          method: 'POST',
          headers: {
            'accept': 'application/json',
            "api-key": api_key,
            'content-type': 'application/json'
          },
          // body: '{  \n   "to":[  \n      {  \n         "email":"testmail@example.com",\n         "name":"John Doe"\n      }\n   ],\n   "templateId":8,\n   "params":{  \n      "name":"John",\n      "surname":"Doe"\n   },\n   "headers":{  \n      "X-Mailin-custom":"custom_header_1:custom_value_1|custom_header_2:custom_value_2|custom_header_3:custom_value_3",\n      "charset":"iso-8859-1"\n   }\n}',
          body: JSON.stringify({
            "sender": {
              "name": "Algo Ninjas",
              "email": "mls.classes.firebase@gmail.com"
            },
            'to': [
              {
                'email': 'james@mlsclasses.com',
                'name': 'James'
              },
              {
                'email': 'ritik@mlsclasses.com',
                'name': 'Ritik Mittal Learning '
              }
            ],
            "subject": "You got a new query from Algo Ninjas!",
            "htmlContent": `
            <h3 align="center">User Details</h3>
            <table border="1" width="100%" cellpadding="5" cellspacing="5">
                <tr>
                    <td width="30%">FirstName</td>
                    <td width="70%">${firstname}</td>
                </tr>
                <tr>
                <td width="30%">LastName</td>
                <td width="70%">${lastname}</td>
            </tr>
                <tr>
                    <td width="30%">Email</td>
                    <td width="70%">${email}</td>
                </tr>
                <tr>
                    <td width="30%">Phone</td>
                    <td width="70%">${phone}</td>
                </tr>
                <tr>
                <td width="30%">Program</td>
                <td width="70%">${program}</td>
            </tr>
            <tr>
                <td width="30%">TimeZone</td>
                <td width="70%">${timezone}</td>
            </tr>
               
                <tr>
                    <td width="30%">message</td>
                    <td width="70%">${message}</td>
                </tr>
            </table>`,
            // 'templateId': 1,
            // 'params': data,
          })
        });


        alert(
          "Your Feedback/Query would be shortly addressed by our team, keep an eye on your mail"
        );
      } else {
        alert("Please fill the data properly");
      }
    } else {
      alert("Please fill the data properly");
    }

  };


  useEffect(() => {
    // Fetch the list of time zones and update the userData with the first time zone from the list
    setUserData((prevUserData) => ({
      ...prevUserData,
      timezone: allTimeZones[0], // Set the first time zone as the default selected value
    }));
  }, []);


  return (
    <div className="flex-wrapper">
      <Navbar />
      <Helmet>
        <meta name="google-site-verification" content="bhOOEzJ-8aaGF_FM3O7nKH4GgUpXIhIk0kr_tPC9FTY" />
        <meta name="title" content="Contact us for a Free Demo & more details | Algo Ninjas" />
        <meta name="description" content="Contact with Algo Ninjas expert team & get every course details | Algo Ninjas" />
        <meta name="keywords" content="Algo Ninjas offers Live, Online Math, English, Science, Coding, SAT, ACT, AP, SSAT, STAAR, and AMC classes for students in grades 2-12. The programs of Algo Ninjas are specifically designed to accelerate your child's academic progress, programs, GUARANTEED.| Algo Ninjas
"/>
        <meta name="robots" content="index, follow" />
        <title>Contact us for a Free Demo & more details | Algo Ninjas</title>
      </Helmet>
      <Whatsapp_icon />
      <div class="f-template-contact">
        <img src={first_img} alt="first Template" />
      </div>

      <div class="contact">
        <div class="contact-sub" method="POST">
          <h1 class="contact-h">We're here to help you!</h1>
          <div class="contact-sub-h">
            Please share the required details below related to your inquiry.
          </div>

          <div class="contact-input">
            <div class="contact-sub-input">
              <label for="">
                First Name<span class="star-cl-red">*</span>
              </label>
              <input
                type="text"
                value={userData.firstname}
                name="firstname"
                id=""
                onChange={postUserData}
                placeholder="First Name"
              />
            </div>

            <div class="contact-sub-input">
              <label for="">
                Last Name<span class="star-cl-red">*</span>
              </label>
              <input
                type="text"
                value={userData.lastname}
                name="lastname"
                id=""
                onChange={postUserData}
                placeholder="Last Name"
              />
            </div>

            <div class="contact-sub-input">
              <label for="">
                E-mail<span class="star-cl-red">*</span>
              </label>
              <input
                type="text"
                value={userData.email}
                name="email"
                id=""
                onChange={postUserData}
                placeholder="Email"
              />
            </div>

            <div class="contact-sub-input">
              <label for="">
                Phone Number<span class="star-cl-red">*</span>
              </label>
              <input
                type="text"
                value={userData.phone}
                name="phone"
                id=""
                onChange={postUserData}
                placeholder="Phone"
              />
            </div>

            <div class="contact-sub-input">
              <label for="">Program</label>
              <input
                type="text"
                value={userData.program}
                name="program"
                id=""
                onChange={postUserData}
                placeholder="Program"
              />
            </div>

            <div class="contact-sub-input">
              <label for="">TimeZone</label>
              <select
                name="timezone"
                value={userData.timezone}
                id=""
                onChange={postUserData}
              >
                {allTimeZones.map((zone, index) => (
                  <option key={index} value={zone}>
                    {zone}
                  </option>
                ))}
              </select>
            </div>

            <div class="contact-sub-input">
              <label for="">Message</label>
              <textarea
                name="message"
                value={userData.message}
                id=""
                onChange={postUserData}
                cols="30"
                rows="10"
                placeholder="Enter Message"
              ></textarea>
            </div>
          </div>

          <div onClick={submitData} class="contact-btn" style={btnStyle}>
            <button>Submit</button>
          </div>
        </div>
      </div>
      <br /><br />
      <FooterComponent />
    </div >
  );
};
export default ContactComponent;
