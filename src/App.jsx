import { useState } from "react";
import "./App.css";
import General from "./General";
import Education from "./Education";
import Experience from "./Experience";
import CV from "./CV";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [inputValues, setInputValues] = useState({
    fullName: "",
    email: "",
    phone: 0,
  });

  const [eduValues, setEduValues] = useState({
    id: uuidv4(),
    schoolName: "",
    courseName: "",
    schoolStart: "",
    schoolEnd: "",
  });

  const [eduList, setEduList] = useState([]);

  function addToEduList() {
    setEduList((eduList) => [...eduList, { ...eduValues }]);
    // reset edu values for new data
    setEduValues({
      id: uuidv4(),
      schoolName: "",
      courseName: "",
      schoolStart: "",
      schoolEnd: "",
    });
  }

  const [experienceList, setExperienceList] = useState([]);

  const [experienceValues, setExperienceValues] = useState({
    id: uuidv4(),
    companyName: "",
    position: "",
    responsibilities: "",
    startDate: "",
    endDate: "",
  });

  function addToExperienceList() {
    setExperienceList((experienceList) => [
      ...experienceList,
      { ...experienceValues },
    ]);
    // reset edu values for new data
    setExperienceValues({
      id: uuidv4(),
      companyName: "",
      position: "",
      responsibilities: "",
      startDate: "",
      endDate: "",
    });
  }

  // console.log(eduList);
  return (
    <>
      <form action="#" onSubmit={(event) => event.preventDefault}>
        <h2>General Information: </h2>
        <General generalInfo={inputValues} setGeneralInfo={setInputValues} />
        <hr />
        <h2>School Information: </h2>
        <Education schoolInfo={eduValues} setSchoolInfo={setEduValues} />
        <button onClick={addToEduList}>Add</button>
        <hr />
        <h2>Experience: </h2>
        <div>
          <Experience
            experience={experienceValues}
            setExperience={setExperienceValues}
          />
          <button onClick={addToExperienceList}>Add</button>
        </div>
      </form>
      <CV
        inputValues={inputValues}
        eduList={eduList}
        experienceList={experienceList}
      />
    </>
  );
}

export default App;
