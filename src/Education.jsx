export default function Education({ schoolInfo, setSchoolInfo }) {
  //   const [schoolInfo, setSchoolInfo] = useState({
  //     schoolName: "",
  //     courseName: "",
  //     date: 0,
  //   });

  function handleSchoolName(e) {
    setSchoolInfo({ ...schoolInfo, schoolName: e.target.value });
  }
  function handleCourseName(e) {
    setSchoolInfo({ ...schoolInfo, courseName: e.target.value });
  }
  function handleSchoolStart(e) {
    setSchoolInfo({
      ...schoolInfo,
      schoolStart: `${new Date(e.target.value).getDate()}/${
        new Date(e.target.value).getMonth() + 1
      }/${new Date(e.target.value).getFullYear()}`,
    });
  }
  function handleSchoolEnd(e) {
    setSchoolInfo({
      ...schoolInfo,
      schoolEnd: `${new Date(e.target.value).getDate()}/${
        new Date(e.target.value).getMonth() + 1
      }/${new Date(e.target.value).getFullYear()}`,
    });
  }

  return (
    <div style={{ display: "grid" }}>
      <label>
        School Name:
        <input
          type="text"
          value={schoolInfo.schoolName}
          onChange={handleSchoolName}
        />
      </label>
      <label>
        Course:
        <input
          type="text"
          value={schoolInfo.courseName}
          onChange={handleCourseName}
        />
      </label>
      <label>
        Start Date:
        <input type="date" onChange={handleSchoolStart} />
      </label>
      <label>
        End Date:
        <input type="date" onChange={handleSchoolEnd} />
      </label>
    </div>
  );
}
