import { useState } from "react";

export default function General() {
  const [generalInfo, setGeneralInfo] = useState({
    fullName: "",
    email: "",
    phone: 0,
  });

  function handleName(e) {
    setGeneralInfo({ ...generalInfo, fullName: e.target.value });
  }
  function handleEmail(e) {
    setGeneralInfo({ ...generalInfo, email: e.target.value });
  }
  function handlePhone(e) {
    setGeneralInfo({ ...generalInfo, phone: e.target.value });
  }
  return (
    <div style={{ display: "grid" }}>
      <label>
        Full Name:
        <input
          type="text"
          id="name"
          value={generalInfo.fullName}
          onChange={handleName}
        />
      </label>
      <label>
        Email Address(example@example.com) :
        <input
          type="email"
          id="email"
          value={generalInfo.email}
          onChange={handleEmail}
        />
      </label>
      <label>
        Phone number:
        <input
          type="tel"
          id="phone"
          value={generalInfo.phone}
          onChange={handlePhone}
        />
      </label>
    </div>
  );
}
