import React from "react";
import vcardStyle from "./vcard.module.css";

function Vcard() {
  return (
    <div className={vcardStyle.container}>
      <form>
        <div className={vcardStyle.nameContainer}>
          <label htmlFor="name">Your name:</label>
          <div className={vcardStyle.fullName}>
            <input id="name" type="text" placeholder="Last name" />
            <input type="text" placeholder="First name" />
          </div>
        </div>
        <div className={vcardStyle.mobileContainer}>
          <label htmlFor="mobile">Mobile:</label>
          <input type="number" placeholder="Mobile" id="mobile" />
          <div className={vcardStyle.phone}>
            <input id="phone" type="number" placeholder="Phone" />
            <input type="number" placeholder="Fax" />
          </div>
        </div>
        <div className={vcardStyle.emailContainer}>
          <label htmlFor="email">Email:</label>
          <input type="email" placeholder="example@gmail.com" id="email" />
        </div>
        <div className={vcardStyle.companyContainer}>
          <label htmlFor="companyId">Company</label>
          <div className={vcardStyle.job}>
            <input type="text" placeholder="Company" id="companyId" />
            <input type="text" placeholder="Your Job" />
          </div>
        </div>
        <div className={vcardStyle.streetContainer}>
          <label htmlFor="streetId">Street:</label>
          <input type="text" placeholder="Street" id="streetId" />
        </div>
        <div className={vcardStyle.cityContainer}>
          <label htmlFor="cityId">City:</label>
          <div className={vcardStyle.city}>
            <input type="text" placeholder="City" id="cityId" />
            <input type="number" placeholder="ZipCode" />
          </div>
        </div>
        <div className={vcardStyle.stateContainer}>
          <label htmlFor="stateId">State:</label>
          <input type="text" placeholder="State" id="stateId" />
        </div>
        <div className={vcardStyle.countryContainer}>
          <label htmlFor="countryId">Country:</label>
          <input type="text" placeholder="Country" id="countryId" />
        </div>
        <div className={vcardStyle.websiteContainer}>
          <label htmlFor="websiteId">Website:</label>
          <input type="url" placeholder="Website" id="websiteId" />
        </div>
      </form>
    </div>
  );
}

export default Vcard;
