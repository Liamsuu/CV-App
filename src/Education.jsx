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
  function handleSchoolDate(e) {
    setSchoolInfo({ ...schoolInfo, date: e.target.value });
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
        Date
        <input
          type="date"
          value={schoolInfo.date}
          onChange={handleSchoolDate}
        />
      </label>
    </div>
  );
}
