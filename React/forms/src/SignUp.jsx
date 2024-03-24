import { useState } from "react";

export default function SignUp() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    password: "",
  });
  const handleChange = (e) => {
    const changedField = e.target.name;
    const newValue = e.target.value;
    setFormData((currData) => {
      // currData[changedField] = newValue;
      // return { ...currData };
      return {
        ...currData,
        [changedField]: newValue,
      };
    });
  };

  const handleSubmit = () => {
    console.log(`Hey there, ${formData.firstname + " " + formData.lastname}`);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <label htmlFor="firstname">Enter First Name</label>
      <input
        type="text"
        id="firstname"
        value={formData.firstname}
        name="firstname"
        placeholder="first name"
        onChange={handleChange}
      />
      <label htmlFor="lastname">Enter Last Name</label>
      <input
        type="text"
        id="lastname"
        placeholder="last name"
        value={formData.lastname}
        name="lastname"
        onChange={handleChange}
      />
      <label htmlFor="password">Enter Password</label>
      <input
        type="password"
        id="password"
        placeholder="password"
        value={formData.password}
        name="password"
        onChange={handleChange}
      />
      <button type="submit" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
}
