import React, { useState } from "react";
import logo from "../assets/img/LOGOPHILORE.png";
import letter from "../assets/img/letterhead.png";
import footer from "../assets/img/footer.jpg";
import design from "../assets/img/design.jpg";
import { CiCalendarDate } from "react-icons/ci";

import {
  PDFDownloadLink,
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Image,
} from "@react-pdf/renderer";

// Define your styles
const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    position: "relative",
    minHeight: "100vh",
  },
  section: {
    marginBottom: 10,
    padding: 10,
    margin: "0 2px 2px",
  },
  text: {
    fontSize: 8,
    marginBottom: 10, // Apply custom font
  },
  boldText: {
    fontWeight: "bold", // Make all text bold
  },
  label: {
    color: "black", // Set label text color to black
    marginBottom: 2,
    fontWeight: "bold", // Make the label text bold
  },
  pictureContainer: {
    position: "absolute",
    top: -5,
    right: 1,
  },
  picture: {
    position: "absolute",
    width: 90,
    height: 100,
    bottom: -175,
    right: 50,
    objectFit: "cover", // Prevent stretching
  },
  logo: {
    width: 350,
    height: 150,
    paddingBottom: 70, // Add padding to the bottom of the logo
  },
  sectionHeader: {
    marginBottom: 5, // Add margin-bottom for section headers
    marginTop: 10, // Add margin-top for section headers
    fontSize: 24, // Adjust font size for section headers
    fontWeight: "bold", // Make the section headers bold
  },
  footerImage: {
    position: "absolute",
    right: -1,
    bottom: -148, // Adjusted to place the footer at the bottom
    width: "105%",
    height: "auto", // Ensure aspect ratio is maintained
    zIndex: -1,
  },
  designImage: {
    position: "absolute",
    right: -5,
    top: -70,
    width: "50%",
    height: "auto",
    zIndex: -1, // Set a lower z-index value to send it to the back
  },
});

const originalWidth = 350; // Width of the original image
const originalHeight = 244; // Height of the original image
const desiredHeight = 40; // Desired height

// Calculate aspect ratio
const aspectRatio = originalWidth / originalHeight;

const Home = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    emailAddress: "",
    objective: "",
    dateOfBirth: "",
    nationality: "",
    gender: "",
    maritalStatus: "",
    religion: "",
    height: "",
    weight: "",
    permanentAddress: "",
    languageSkills: "",
    institutionAttend: "",
    degreesEarned: "",
    graduationDate: "",
    CompanyName: "",
    companyAddress: "",
    position: "",
    lengthService: "",
    responsibilities: "",
    awards: "",
    certificates: "",
  });
  const [picture, setPicture] = useState(null);
  const [unfilledLabels, setUnfilledLabels] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    let transformedValue = value;

    // If the input is "Awards" or "Certificates" and the last character typed is a "-", replace it with a bullet point
    if ((name === "awards" || name === "certificates") && value.endsWith("-")) {
      transformedValue = value.replace(/-$/, "• ");
    }

    // Update the form data with the transformed value
    setFormData((prevData) => ({
      ...prevData,
      [name]: transformedValue,
    }));
  };

  const handlePictureChange = (e) => {
    const file = e.target.files[0];
    setPicture(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Check for unfilled labels
    const unfilled = Object.keys(formData).filter(
      (label) => formData[label] === ""
    );
    setUnfilledLabels(unfilled);
    if (unfilled.length === 0) {
      // Export PDF here using formData
    }
  };

  return (
    <div className="border solid max-w-7xl mx-auto p-5 text-black">
      <form className="" onSubmit={handleSubmit}>
        <div className="">
          <div>
            <img src={logo} alt="Logo" />
          </div>
          <div className="grid grid-cols-1 font-bold my-10 gap-2 mt-10 rounded-lg  text-[20px] p-2 items-start">
            <label htmlFor="fullName" className={`${styles.label}`}>
              Full Name
              <span className="font-thin ml-4 " font="true">
                (first name, Mi, surename)
              </span>
            </label>
            <input
              type="text"
              className="uppercase"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              required
            />
            <label htmlFor="phoneNumber" className={`${styles.label}`}>
              Phone Number
            </label>
            <input
              type="text"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              required
            />
            <label htmlFor="emailAddress" className={`${styles.label}`}>
              Email Address
            </label>
            <input
              type="text"
              id="emailAddress"
              name="emailAddress"
              value={formData.emailAddress}
              onChange={handleInputChange}
              required
            />
            <label htmlFor="objective" className={`${styles.label}`}>
              Objective{" "}
              <span className="font-thin ml-4 " font="true">
                (Optional)
              </span>
            </label>
            <textarea
              id="objective"
              name="objective"
              value={formData.objective}
              onChange={handleInputChange}
              className="resize-none h-40" // Adjust the height here as needed
              required
            />
          </div>
          <div className="flex flex-col font-bold my-10 gap-2 mt-10 text-[20px] p-2">
            <h1 className="text-[30px]">PERSONAL DETAILS</h1>
            <label
              htmlFor="dateOfBirth"
              className={`${styles.label} flex items-center`}
            >
              Date Of Birth
            </label>
            <div className="flex items-center">
              <input
                type="date"
                id="dateOfBirth"
                name="dateOfBirth"
                value={formData.dateOfBirth}
                onChange={handleInputChange}
                required
              />
            </div>
            <label htmlFor="nationality" className={`${styles.label}`}>
              Nationality
            </label>
            <input
              type="text"
              id="nationality"
              name="nationality" // Adjusted to match the id
              value={formData.nationality}
              onChange={handleInputChange}
              required
            />
            <label htmlFor="gender" className={`${styles.label}`}>
              Gender
            </label>
            <input
              type="text"
              id="gender"
              name="gender" // Adjusted to match the id
              value={formData.gender}
              onChange={handleInputChange}
              required
            />
            <label htmlFor="maritalStatus" className={`${styles.label}`}>
              Marital Status
            </label>
            <input
              type="text"
              id="maritalStatus"
              name="maritalStatus" // Adjusted to match the id
              value={formData.maritalStatus}
              onChange={handleInputChange}
              required
            />
            <label htmlFor="religion" className={`${styles.label}`}>
              Religion
            </label>
            <input
              type="text"
              id="religion"
              name="religion" // Adjusted to match the id
              value={formData.religion}
              onChange={handleInputChange}
              required
            />
            <label htmlFor="height" className={`${styles.label}`}>
              Height
            </label>
            <input
              type="text"
              id="height"
              name="height" // Adjusted to match the id
              value={formData.height}
              onChange={handleInputChange}
              required
            />
            <label htmlFor="weight" className={`${styles.label}`}>
              Weight
            </label>
            <input
              type="text"
              id="weight"
              name="weight" // Adjusted to match the id
              value={formData.weight}
              onChange={handleInputChange}
              required
            />
            <label htmlFor="permanentAddress" className={`${styles.label}`}>
              Permanent Address
            </label>
            <input
              type="text"
              id="permanentAddress"
              name="permanentAddress" // Adjusted to match the id
              value={formData.permanentAddress}
              onChange={handleInputChange}
              required
            />
            <label htmlFor="languageSkills" className={`${styles.label}`}>
              Language Skills
            </label>
            <input
              type="text"
              id="languageSkills"
              name="languageSkills" // Adjusted to match the id
              value={formData.languageSkills}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="flex flex-col font-bold my-10 gap-2 mt-10 text-[20px] p-2">
            <h1 className="text-[30px]">EDUCATIONAL DETAILS</h1>
            <label htmlFor="institutionAttended" className={`${styles.label}`}>
              Institution Attended
            </label>
            <input
              type="text"
              id="institutionAttended"
              name="institutionAttended" // Adjusted to match the id
              value={formData.institutionAttended}
              onChange={handleInputChange}
              required
            />
            <label htmlFor="degreesEarned" className={`${styles.label}`}>
              Degrees Earned
            </label>
            <input
              type="text"
              id="degreesEarned"
              name="degreesEarned" // Adjusted to match the id
              value={formData.degreesEarned}
              onChange={handleInputChange}
              required
            />
            <label
              htmlFor="graduationDate"
              className={`${styles.label} flex items-center`}
            >
              Graduation Date
            </label>
            <div className="flex items-center">
              <input
                type="date"
                id="graduationDate"
                name="graduationDate"
                value={formData.graduationDate}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
          <div className="flex flex-col font-bold my-10 gap-2 mt-10 text-[20px] p-2">
            <h1 className="text-[30px]">EXPERIENCE SUMMARY</h1>
            <label htmlFor="CompanyName" className={`${styles.label}`}>
              Company Name
            </label>
            <input
              type="text"
              id="CompanyName"
              name="CompanyName" // Adjusted to match the id
              value={formData.CompanyName}
              onChange={handleInputChange}
              required
            />
            <label htmlFor="companyAddress" className={`${styles.label}`}>
              Company Address{" "}
            </label>
            <input
              type="text"
              id="companyAddress"
              name="companyAddress" // Adjusted to match the id
              value={formData.companyAddress}
              onChange={handleInputChange}
              required
            />

            <label htmlFor="position" className={`${styles.label}`}>
              Position
            </label>
            <input
              type="text"
              id="position"
              name="position" // Adjusted to match the id
              value={formData.position}
              onChange={handleInputChange}
              required
            />
            <label htmlFor="lengthService" className={`${styles.label}`}>
              Length of Service
            </label>
            <input
              type="text"
              id="lengthService"
              name="lengthService" // Adjusted to match the id
              value={formData.lengthService}
              onChange={handleInputChange}
              required
            />
            <label htmlFor="responsibilities" className={`${styles.label}`}>
              Duties and Responsibilities
            </label>
            <input
              type="text"
              id="responsibilities"
              name="responsibilities" // Adjusted to match the id
              value={formData.responsibilities}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="grid grid-cols-1 font-bold my-10 gap-2 mt-10 rounded-lg text-[20px] p-2 items-start">
            <h1 className="text-[30px]">SKILLS</h1>
            <label htmlFor="awards" className={`${styles.label}`}>
              Awards
            </label>
            <textarea
              id="awards"
              name="awards"
              value={formData.awards}
              onChange={handleInputChange}
              className="resize-none"
              required
              rows={3} // Adjust the number of rows as needed
            />
            <label htmlFor="certificates" className={`${styles.label}`}>
              Certificates
            </label>
            <textarea
              id="certificates"
              name="certificates"
              value={formData.certificates}
              onChange={handleInputChange}
              className="resize-none"
              required
              rows={3} // Adjust the number of rows as needed
            />
          </div>
          <div className="flex flex-col my-10 text-[20px] ml-2  font-bold">
            {/* Add a new input field for uploading the picture */}
            <label htmlFor="picture" className={`${styles.label}`}>
              Upload your 1x1 picture here
            </label>
            <input
              type="file"
              id="picture"
              name="picture"
              onChange={handlePictureChange}
            />
          </div>
        </div>
      </form>

      {/* PDF Download Link */}
      {unfilledLabels.length > 0 && (
        <div className="text-red-500">
          Fill up the following labels: {unfilledLabels.join(", ")}
        </div>
      )}

      <PDFDownloadLink
        className="bg-red-600 hover:bg-red-700 font-bold text-white p-4 ml-2 rounded-[10px]"
        document={<MyDocument formData={formData} picture={picture} />}
        fileName="PHILORERESUME.pdf"
        disabled={unfilledLabels.length > 0} // Disable download link if labels are unfilled
      >
        {({ loading }) => (loading ? "Loading document..." : "Download PDF")}
      </PDFDownloadLink>
    </div>
  );
};

const MyDocument = ({ formData, picture }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Image src={letter} style={styles.logo} />
        <Image src={footer} style={styles.footerImage} />
        <Image src={design} style={styles.designImage} />

        {/* All text elements with bold styling and proper alignment */}

        <Text
          style={[
            styles.text,
            {
              marginBottom: 2,
              fontSize: 12,
              fontWeight: "bold",
              textTransform: "uppercase",
              marginTop: -40,
            },
          ]}
        >
          {formData.fullName}
        </Text>
        <Text
          style={[
            styles.text,
            { marginBottom: 2, fontSize: 12, fontWeight: "bold" },
          ]}
        >
          {formData.phoneNumber}
        </Text>
        <Text
          style={[
            styles.text,
            { marginBottom: 10, fontSize: 12, fontWeight: "bold" },
          ]}
        >
          {formData.emailAddress}
        </Text>
        <Text
          style={[
            styles.text,
            {
              marginBottom: 10,
              fontSize: 12,
              fontWeight: "bold",
              marginTop: 5,
              textAlign: "justify", // Add textAlign property for justify alignment
              marginRight: 18,
            },
          ]}
        >
          {formData.objective}
        </Text>
        <Text
          style={[
            styles.text,
            styles.sectionHeader,
            { fontSize: 12, fontWeight: "bold", marginTop: 5 },
          ]}
        >
          PERSONAL DETAILS
        </Text>
        <Text
          style={[
            styles.text,
            {
              marginBottom: 2,
              fontSize: 10,
              fontWeight: "bold",
            },
          ]}
        >
          <Text style={styles.label}>Date of Birth: </Text>
          {formData.dateOfBirth}
        </Text>
        <Text
          style={[
            styles.text,
            { marginBottom: 2, fontSize: 10, fontWeight: "bold" },
          ]}
        >
          <Text style={styles.label}>Nationality: </Text>
          {formData.nationality}
        </Text>
        <Text
          style={[
            styles.text,
            { marginBottom: 2, fontSize: 10, fontWeight: "bold" },
          ]}
        >
          <Text style={styles.label}>Gender: </Text>
          {formData.gender}
        </Text>
        <Text
          style={[
            styles.text,
            { marginBottom: 2, fontSize: 10, fontWeight: "bold" },
          ]}
        >
          <Text style={styles.label}>Marital Status: </Text>
          {formData.maritalStatus}
        </Text>
        <Text
          style={[
            styles.text,
            { marginBottom: 2, fontSize: 10, fontWeight: "bold" },
          ]}
        >
          <Text style={styles.label}>Religion: </Text>
          {formData.religion}
        </Text>
        <Text
          style={[
            styles.text,
            { marginBottom: 2, fontSize: 10, fontWeight: "bold" },
          ]}
        >
          <Text style={styles.label}>Height: </Text>
          {formData.height}
        </Text>
        <Text
          style={[
            styles.text,
            { marginBottom: 2, fontSize: 10, fontWeight: "bold" },
          ]}
        >
          <Text style={styles.label}>Weight: </Text>
          {formData.weight}
        </Text>
        <Text
          style={[
            styles.text,
            { marginBottom: 2, fontSize: 10, fontWeight: "bold" },
          ]}
        >
          <Text style={styles.label}>Permanent Address: </Text>
          {formData.permanentAddress}
        </Text>
        <Text
          style={[
            styles.text,
            {
              fontSize: 10,
              fontWeight: "bold",
              marginBottom: 5,
            },
          ]}
        >
          <Text style={styles.label}>Language Skills: </Text>
          {formData.languageSkills}
        </Text>
        <Text
          style={[
            styles.text,
            styles.sectionHeader,
            { fontSize: 12, fontWeight: "bold" },
          ]}
        >
          EDUCATIONAL DETAILS
        </Text>
        <Text
          style={[
            styles.text,
            {
              marginBottom: 2,
              fontSize: 10,
              fontWeight: "bold",
            },
          ]}
        >
          <Text style={styles.label}>Institution Attended: </Text>
          {formData.institutionAttended}
        </Text>
        <Text
          style={[
            styles.text,
            { marginBottom: 2, fontSize: 10, fontWeight: "bold" },
          ]}
        >
          <Text style={styles.label}>Degrees Earned: </Text>
          {formData.degreesEarned}
        </Text>
        <Text
          style={[
            styles.text,
            { marginBottom: 5, fontSize: 10, fontWeight: "bold" },
          ]}
        >
          <Text style={styles.label}>Graduation Date: </Text>
          {formData.graduationDate}
        </Text>
        <Text
          style={[
            styles.text,
            styles.sectionHeader,
            { fontSize: 12, fontWeight: "bold" },
          ]}
        >
          EXPERIENCE SUMMARY
        </Text>
        <Text
          style={[
            styles.text,
            { marginBottom: 2, fontSize: 10, fontWeight: "bold" },
          ]}
        >
          <Text style={styles.label}>Company Name: </Text>
          {formData.CompanyName}
        </Text>
        <Text
          style={[
            styles.text,
            { marginBottom: 2, fontSize: 10, fontWeight: "bold" },
          ]}
        >
          <Text style={styles.label}>Company Address: </Text>
          {formData.companyAddress}
        </Text>

        <Text
          style={[
            styles.text,
            { marginBottom: 2, fontSize: 10, fontWeight: "bold" },
          ]}
        >
          <Text style={styles.label}>Position: </Text>
          {formData.position}
        </Text>
        <Text
          style={[
            styles.text,
            { marginBottom: 2, fontSize: 10, fontWeight: "bold" },
          ]}
        >
          <Text style={styles.label}>Length of Service: </Text>
          {formData.lengthService}
        </Text>
        <Text
          style={[
            styles.text,
            { marginBottom: 2, fontSize: 10, fontWeight: "bold" },
          ]}
        >
          <Text style={styles.label}>Responsibilities: </Text>
          {formData.responsibilities}
        </Text>
        <Text
          style={[
            styles.text,
            styles.sectionHeader,
            { fontSize: 12, fontWeight: "bold" },
          ]}
        >
          SKILLS
        </Text>
        <Text
          style={[
            styles.text,
            { marginBottom: 2, fontSize: 10, fontWeight: "bold", marginTop: 1 }, // Adjusted marginTop here
          ]}
        >
          <Text style={styles.label}>Awards: </Text>
        </Text>
        {formData.awards &&
          formData.awards.split("\n").map((award, index) => (
            <Text
              key={index}
              style={[
                styles.text,
                {
                  marginBottom: 2,
                  fontSize: 10,
                  fontWeight: "bold",
                  // Adjusted marginLeft to create indentation
                },
              ]}
            >
              {award}
            </Text>
          ))}
        <Text
          style={[
            styles.text,
            { marginBottom: 2, fontSize: 10, fontWeight: "bold", marginTop: 1 }, // Adjusted marginTop here
          ]}
        >
          <Text style={styles.label}>Certificates: </Text>
        </Text>
        {formData.certificates &&
          formData.certificates.split("\n").map((certificate, index) => (
            <Text
              key={index}
              style={[
                styles.text,
                {
                  marginBottom: 2,
                  fontSize: 10,
                  fontWeight: "bold",
                  // Adjusted marginLeft to create indentation
                },
              ]}
            >
              {certificate}
            </Text>
          ))}
        {/* Add the picture container */}
        <View style={styles.pictureContainer}>
          {picture && (
            <Image src={URL.createObjectURL(picture)} style={styles.picture} />
          )}
        </View>
      </View>
    </Page>
  </Document>
);

export default Home;
