import { useState } from "react";
import "./App.css";
import General from "./General";
import Education from "./Education";
import Experience from "./Experience";
import CV from "./CV";
function App() {
  const [inputValues, setInputValues] = useState({
    fullName: "",
    email: "",
    phone: 0,
    companyName: "",
    position: "",
    responsibilities: "",
    startDate: "",
    endDate: "",
    schoolName: "",
    courseName: "",
    schoolStart: "",
    schoolEnd: "",
  });

  return (
    <>
      <form action="#" onSubmit={(event) => event.preventDefault}>
        <h2>General Information: </h2>
        <General generalInfo={inputValues} setGeneralInfo={setInputValues} />
        <hr />
        <h2>School Information: </h2>
        <Education schoolInfo={inputValues} setSchoolInfo={setInputValues} />
        <hr />
        <h2>Experience: </h2>
        <div>
          <Experience experience={inputValues} setExperience={setInputValues} />
        </div>
      </form>
      <CV userInfo={inputValues} />
    </>
  );
}

export default App;
