import React, { useState } from "react";
import logo from "../assets/img/LOGOPHILORE.png";
import letter from "../assets/img/letterhead.png";
import footer from "../assets/img/footer.jpg";
import DatePicker from "react-date-picker";

import {
  PDFDownloadLink,
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Image,
  Font,
} from "@react-pdf/renderer";

// Define your custom font
Font.register({
  family: "Roboto",
  src: "https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-light-webfont.ttf",
});

// Define your styles
const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
  },
  section: {
    marginBottom: 10,
    padding: 10,
    backgroundColor: "#ffffff", // Background color for the section
  },
  text: {
    fontSize: 14,
    color: "black",
    marginBottom: 5, // Apply custom font
  },
  boldText: {
    fontWeight: "bold", // Make all text bold
  },
  label: {
    color: "black", // Set label text color to black
    marginBottom: 5,
    fontWeight: "bold", // Make the label text bold
  },
  pictureContainer: {
    position: "absolute",
    top: 45,
    right: 20,
  },
  picture: {
    width: 100,
    height: 100,
  },
  logo: {
    width: 300,
    height: 151,
    paddingBottom: 45, // Add padding to the bottom of the logo
  },
  sectionHeader: {
    marginBottom: 10, // Add margin-bottom for section headers
    marginTop: 20, // Add margin-top for section headers
    fontSize: 24, // Adjust font size for section headers
    fontWeight: "bold", // Make the section headers bold
  },
});

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
    employerName: "",
    bedCapacity: "",
    areaOfExposure: "",
    position: "",
    duration: "",
    responsibilities: "",
    awards: "",
    certificates: "",
  });
  const [picture, setPicture] = useState(null);
  const [unfilledLabels, setUnfilledLabels] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
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
          <div className="grid grid-cols-1 font-bold my-10 gap-2 mt-10 text-[20px] p-2 items-start">
            <label htmlFor="fullName" className={`${styles.label}`}>
              Full Name
            </label>
            <input
              type="text"
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
              <span className="font-thin ml-4 " font>
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
            <label htmlFor="dateOfBirth" className={`${styles.label}`}>
              Date Of Birth
            </label>
            <input
              type="text"
              id="dateOfBirth"
              name="dateOfBirth" // Adjusted to match the id
              value={formData.dateOfBirth}
              onChange={handleInputChange}
              required
            />

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
            <label htmlFor="graduationDate" className={`${styles.label}`}>
              Graduation Date
            </label>
            <input
              type="text"
              id="graduationDate"
              name="graduationDate" // Adjusted to match the id
              value={formData.graduationDate}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="flex flex-col font-bold my-10 gap-2 mt-10 text-[20px] p-2">
            <h1 className="text-[30px]">EXPERIENCE SUMMARY</h1>
            <label htmlFor="employerName" className={`${styles.label}`}>
              Employer Name
            </label>
            <input
              type="text"
              id="employerName"
              name="employerName" // Adjusted to match the id
              value={formData.employerName}
              onChange={handleInputChange}
              required
            />
            <label htmlFor="bedCapacity" className={`${styles.label}`}>
              Bed Capacity{" "}
              <span className="font-thin ml-4 " font>
                (Applicable for Nurses only)
              </span>
            </label>
            <input
              type="text"
              id="bedCapacity"
              name="bedCapacity" // Adjusted to match the id
              value={formData.bedCapacity}
              onChange={handleInputChange}
              required
            />
            <label htmlFor="areaOfExposure" className={`${styles.label}`}>
              Area of Exposure
              <span className="font-thin ml-4 " font>
                (Applicable for Nurses only)
              </span>
            </label>
            <input
              type="text"
              id="areaOfExposure"
              name="areaOfExposure" // Adjusted to match the id
              value={formData.areaOfExposure}
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
            <label htmlFor="duration" className={`${styles.label}`}>
              Duration
            </label>
            <input
              type="text"
              id="duration"
              name="duration" // Adjusted to match the id
              value={formData.duration}
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
          <div className="flex flex-col font-bold my-10 gap-2 mt-10 text-[20px] p-2">
            <h1 className="text-[30px]">SKILLS</h1>
            <label htmlFor="awards" className={`${styles.label}`}>
              Awards
            </label>
            <input
              type="text"
              id="awards"
              name="awards" // Adjusted to match the id
              value={formData.awards}
              onChange={handleInputChange}
              required
            />
            <label htmlFor="certificates" className={`${styles.label}`}>
              Certificates
            </label>
            <input
              type="text"
              id="certificates"
              name="certificates" // Adjusted to match the id
              value={formData.certificates}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="flex flex-col my-10 text-[20px] ml-2 font-bold">
            {/* Add a new input field for uploading the picture */}
            <label htmlFor="picture" className={`${styles.label}`}>
              Picture
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
        {/* All text elements with bold styling and proper alignment */}
        <Text style={[styles.text, styles.boldText, { marginBottom: 10 }]}>
          {formData.fullName}
        </Text>
        <Text style={[styles.text, styles.boldText, { marginBottom: 10 }]}>
          {formData.phoneNumber}
        </Text>
        <Text style={[styles.text, styles.boldText, { marginBottom: 10 }]}>
          {formData.emailAddress}
        </Text>
        <Text style={[styles.text, styles.boldText, { marginBottom: 10 }]}>
          {formData.objective}
        </Text>
        <Text style={[styles.text, styles.boldText, styles.sectionHeader]}>
          PERSONAL DETAILS
        </Text>
        <Text style={[styles.text, styles.boldText, { marginBottom: 10 }]}>
          {formData.dateOfBirth}
        </Text>
        <Text style={[styles.text, styles.boldText, { marginBottom: 10 }]}>
          {formData.nationality}
        </Text>
        <Text style={[styles.text, styles.boldText, { marginBottom: 10 }]}>
          {formData.gender}
        </Text>
        <Text style={[styles.text, styles.boldText, { marginBottom: 10 }]}>
          {formData.maritalStatus}
        </Text>
        <Text style={[styles.text, styles.boldText, { marginBottom: 10 }]}>
          {formData.religion}
        </Text>
        <Text style={[styles.text, styles.boldText, { marginBottom: 10 }]}>
          {formData.height}
        </Text>
        <Text style={[styles.text, styles.boldText, { marginBottom: 10 }]}>
          {formData.weight}
        </Text>
        <Text style={[styles.text, styles.boldText, { marginBottom: 10 }]}>
          {formData.permanentAddress}
        </Text>
        <Text style={[styles.text, styles.boldText, { marginBottom: 10 }]}>
          {formData.languageSkills}
        </Text>
        <Text style={[styles.text, styles.boldText, styles.sectionHeader]}>
          EDUCATIONAL DETAILS
        </Text>
        <Text style={[styles.text, styles.boldText, { marginBottom: 10 }]}>
          {formData.institutionAttended}
        </Text>
        <Text style={[styles.text, styles.boldText, { marginBottom: 10 }]}>
          {formData.degreesEarned}
        </Text>
        <Text style={[styles.text, styles.boldText, { marginBottom: 10 }]}>
          {formData.graduationDate}
        </Text>
        <Text style={[styles.text, styles.boldText, styles.sectionHeader]}>
          EXPERIENCE SUMMARY
        </Text>
        <Text style={[styles.text, styles.boldText, { marginBottom: 10 }]}>
          {formData.employerName}
        </Text>
        <Text style={[styles.text, styles.boldText, { marginBottom: 10 }]}>
          {formData.bedCapacity}
        </Text>
        <Text style={[styles.text, styles.boldText, { marginBottom: 10 }]}>
          {formData.areaOfExposure}
        </Text>
        <Text style={[styles.text, styles.boldText, { marginBottom: 10 }]}>
          {formData.position}
        </Text>
        <Text style={[styles.text, styles.boldText, { marginBottom: 10 }]}>
          {formData.duration}
        </Text>
        <Text style={[styles.text, styles.boldText, { marginBottom: 10 }]}>
          {formData.responsibilities}
        </Text>
        <Text style={[styles.text, styles.boldText, styles.sectionHeader]}>
          SKILLS
        </Text>
        <Text style={[styles.text, styles.boldText, { marginBottom: 10 }]}>
          {formData.awards}
        </Text>
        <Text style={[styles.text, styles.boldText, { marginBottom: 10 }]}>
          {formData.certificates}
        </Text>

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
