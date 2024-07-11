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

    setExperienceValues({
      id: uuidv4(),
      companyName: "",
      position: "",
      responsibilities: "",
      startDate: "",
      endDate: "",
    });
  }

  function removeEduFromList(id) {
    const newArr = eduList.filter((object) => {
      return object.id !== id;
    });

    return setEduList(newArr);
  }

  function removeExperienceFromList(id) {
    const newArr = experienceList.filter((object) => {
      return object.id !== id;
    });

    return setExperienceList(newArr);
  }

  function displayActiveEdu() {
    return eduList.map((object) => {
      return (
        <div
          key={object.id}
          style={{ display: "flex", alignItems: "center", gap: "1rem" }}
        >
          <p>{object.schoolName}</p>{" "}
          <button
            style={{ height: "max-content" }}
            onClick={() => removeEduFromList(object.id)}
          >
            Remove
          </button>
        </div>
      );
    });
  }

  function displayActiveExperience() {
    return experienceList.map((object) => {
      return (
        <div
          key={object.id}
          style={{ display: "flex", alignItems: "center", gap: "1rem" }}
        >
          <p>{object.companyName}</p>{" "}
          <button
            style={{ height: "max-content" }}
            onClick={() => removeExperienceFromList(object.id)}
          >
            Remove
          </button>
        </div>
      );
    });
  }

  return (
    <>
      <form action="#" onSubmit={(event) => event.preventDefault}>
        <h2>General Information: </h2>
        <General generalInfo={inputValues} setGeneralInfo={setInputValues} />
        <hr />

        <h2>School Information: </h2>
        {displayActiveEdu()}
        <Education schoolInfo={eduValues} setSchoolInfo={setEduValues} />
        <button onClick={addToEduList}>Add</button>
        <hr />
        <h2>Experience: </h2>
        {displayActiveExperience()}
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
