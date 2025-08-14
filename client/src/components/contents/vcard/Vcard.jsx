import React from "react";
import vcardStyle from "./vcard.module.css";

function Vcard() {
  return (
    <div className={vcardStyle.container}>
      <h1>Vcard Qr Code:</h1>
      <form>
        <div className={vcardStyle.nameContainer}>
          <label htmlFor="nameId">Your Name:</label>
          <div>
            <input type="text" placeholder="first name" id="nameId" />
            <input type="text" placeholder="last name" />
          </div>
        </div>
        <div className={vcardStyle.contactContainer}>
          <label htmlFor="phoneId">Contact:</label>
          <div>
            <input type="number" placeholder="phone" id="phoneId" />
            <input type="number" placeholder="fax" />
          </div>
        </div>
        <div className={vcardStyle.emailContainer}>
          <label htmlFor="emailId">Email:</label>
          <input type="email" placeholder="example@gmail.com" id="emailId" />
        </div>
        <div className={vcardStyle.companyContainer}>
          <label htmlFor="companyId">Company:</label>
          <div>
            <input type="text" placeholder="company name" id="companyId" />
            <input type="text" placeholder="your job" />
          </div>
        </div>
        <div className={vcardStyle.streetContainer}>
          <label htmlFor="streetId">Street:</label>
          <input type="text" placeholder="street name" id="streetId" />
        </div>
        <div className={vcardStyle.cityContainer}>
          <label htmlFor="cityId">City:</label>
          <div>
            <input type="text" placeholder="city" id="cityId" />
            <input type="number" placeholder="zip" />
          </div>
        </div>
        <div className={vcardStyle.stateContainer}>
          <label htmlFor="stateId">State:</label>
          <input type="text" placeholder="state" id="stateId" />
        </div>
        <div className={vcardStyle.countryContainer}>
          <label htmlFor="countryId">Country:</label>
          <input type="text" placeholder="country" id="countryId" />
        </div>
        <div className={vcardStyle.websiteContainer}>
          <label htmlFor="websiteId">Website:</label>
          <input type="url" placeholder="website" id="websiteId" />
        </div>
        <button>GENERATE QR CODE</button>
      </form>
    </div>
  );
}

export default Vcard;
