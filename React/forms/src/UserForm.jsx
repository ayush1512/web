import { useState } from "react";

export default function UserForm() {
  //   const [username, setUsername] = useState("ayush");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const updateFirstname = (e) => {
    setFirstname(e.target.value);
  };
  const updateLastname = (e) => {
    setLastname(e.target.value);
  };
  const handleSubmit = () => {
    console.log(`Hey there, ${firstname + " " + lastname}`);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <label htmlFor="firstname">Enter First Name</label>
      <input
        type="text"
        id="firstname"
        value={firstname}
        onChange={updateFirstname}
      />
      <label htmlFor="lastname">Enter Last Name</label>
      <input
        type="text"
        id="lastname"
        value={lastname}
        onChange={updateLastname}
      />
      <button type="submit" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
}
