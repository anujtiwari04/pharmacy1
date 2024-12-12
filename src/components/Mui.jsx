import React, { useState } from "react";
import { TextField, Button, Checkbox, FormControlLabel, MenuItem } from "@mui/material";
import ReactWorldFlags from "react-world-flags";
import icon from "../assets/Frame 401.png"; // Adjust path if needed
import image from "../assets/Frame 436.png";
import { Link } from "react-router-dom";

const countryOptions = [
  { code: "US", dialCode: "+1", label: "United States" },
  { code: "GB", dialCode: "+44", label: "United Kingdom" },
  { code: "IN", dialCode: "+91", label: "India" },
  { code: "FR", dialCode: "+33", label: "France" },
  { code: "DE", dialCode: "+49", label: "Germany" },
  { code: "JP", dialCode: "+81", label: "Japan" },
  { code: "AU", dialCode: "+61", label: "Australia" },
  { code: "CN", dialCode: "+86", label: "China" },
  { code: "IT", dialCode: "+39", label: "Italy" },
  { code: "ES", dialCode: "+34", label: "Spain" },
];

const Mui = () => {
  const [selectedCountry, setSelectedCountry] = useState("FR");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
  };

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen items-center justify-center gap-6 p-4">
      {/* Left Section with Image */}
      <div className="md:w-2/5 w-full flex items-center justify-center">
        <img
          src={image} 
          alt="Logo"
          className="w-full h-auto rounded-lg"
        />
      </div>

      {/* Right Section with Form */}
      <div className="bg-white py-8 px-6 md:px-12 rounded-lg md:w-2/5 w-full">
        {/* Top Icon */}
        <img src={icon} alt="Icon" className="mx-auto mb-4 h-12" />

        {/* Form Title */}
        <h1 className="text-2xl font-semibold text-center mb-6">Holder Information</h1>

        {/* Name Input */}
        <div className="my-2">
          <p className="my-2">Last Name</p>
          <TextField label="Last Name" variant="outlined" fullWidth required />
        </div>
        <div className="my-2">
          <p className="my-2">First Name</p>
          <TextField label="First Name" variant="outlined" fullWidth required />
        </div>

        {/* Date of Birth Input */}
        <div className="my-2">
          <p className="my-2">Date of Birth</p>
          <TextField
            label="Date of Birth"
            variant="outlined"
            type="date"
            fullWidth
            required
            InputLabelProps={{ shrink: true }}
          />
        </div>

        {/* Professional ID Input */}
        <div className="my-2">
          <p className="my-2">Professional ID</p>
          <TextField label="Pharmacist Professional Number" variant="outlined" fullWidth required />
        </div>

        {/* SIRET Input */}
        <div className="my-2">
          <p className="my-2">SIRET</p>
          <TextField label="SIRET" variant="outlined" fullWidth required />
        </div>

        {/* Phone Number Input with Country Code */}
        <div className="my-2">
          <div className="flex flex-col md:flex-row items-center gap-4">
            <TextField
              select
              label="Code"
              value={selectedCountry}
              onChange={handleCountryChange}
              className="md:w-1/3 w-full"
              variant="outlined"
            >
              {countryOptions.map((country) => (
                <MenuItem key={country.code} value={country.code}>
                  <div className="flex items-center gap-2">
                    <ReactWorldFlags code={country.code} className="w-6 h-4" />
                    {country.dialCode}
                  </div>
                </MenuItem>
              ))}
            </TextField>
            <TextField
              label="Phone Number"
              variant="outlined"
              fullWidth
              value={phoneNumber}
              onChange={handlePhoneNumberChange}
              required
            />
          </div>
        </div>

        {/* Terms and Conditions */}
        <div className="mt-4">
          <FormControlLabel
            control={<Checkbox required />}
            label={
              <span>
                I accept the <b>General Terms of Use</b>, the {" "}
                <a
                  href="/payment-terms"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  Payment Service Terms of Use
                </a>
                , and I acknowledge that I have read the {" "}
                <b>Privacy Policy</b>.
              </span>
            }
          />
        </div>

        {/* Submit Button */}
        <Link to="/page2">
            <Button variant="contained" color="primary" fullWidth className="mt-4">
                Accept and Continue
            </Button>
        </Link>
        
      </div>
    </div>
  );
};

export default Mui;
