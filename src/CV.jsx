function displayEducation(eduList) {
  return eduList.map((object) => {
    return (
      <div key={object.id} style={{ display: "flex", gap: "5rem" }}>
        <p style={{ fontSize: "0.8rem" }}>
          <span style={{ fontWeight: "bold" }}>{object.schoolStart}</span> -{" "}
          <span style={{ fontWeight: "bold" }}>{object.schoolEnd}</span>
        </p>
        <p>
          <span style={{ fontWeight: "bold" }}>{object.schoolName}</span> <br />
          <span style={{ fontSize: "0.8rem" }}>{object.courseName}</span>
        </p>
      </div>
    );
  });
}

function displayExperience(experienceList) {
  return experienceList.map((object) => {
    return (
      <>
        <div key={object.id} style={{ display: "flex", gap: "5rem" }}>
          <p style={{ fontSize: "0.8rem" }}>
            <span style={{ fontWeight: "bold" }}>{object.startDate}</span> -{" "}
            <span style={{ fontWeight: "bold" }}>{object.endDate}</span>
          </p>
          <p>
            <span style={{ fontWeight: "bold" }}>{object.companyName}</span>{" "}
            <br />
            <span style={{ fontSize: "0.8rem" }}>{object.position}</span>
          </p>
        </div>
        <p style={{ fontSize: "0.8rem" }}>{object.responsibilities}</p>
      </>
    );
  });
}

export default function CV({ inputValues, eduList, experienceList }) {
  return (
    <div id="cv-wrapper">
      <section id="general-cv">
        <h1 style={{ textAlign: "center" }}>{inputValues.fullName}</h1>
        <p style={{ paddingLeft: "1rem" }}>
          <span style={{ fontWeight: "bold", paddingRight: "3rem" }}>
            Email:{" "}
          </span>
          {inputValues.email}
        </p>
        <p style={{ paddingLeft: "1rem" }}>
          <span style={{ fontWeight: "bold", paddingRight: "3rem" }}>
            Phone:{" "}
          </span>
          {inputValues.phone}
        </p>
      </section>
      <hr />
      <section id="education-cv">
        <h2 style={{ textDecoration: "underline" }}>Education</h2>
        {displayEducation(eduList)}
        {console.log(eduList)}
      </section>
      <hr />

      <section id="experience-cv">
        <h2 style={{ textDecoration: "underline" }}>Experience</h2>
        {displayExperience(experienceList)}
      </section>
    </div>
  );
}
