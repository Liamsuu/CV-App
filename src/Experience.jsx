export default function Experience({ experience, setExperience }) {
  //   const [experience, setExperience] = useState({
  //     companyName: "",
  //     position: "",
  //     responsibilities: "",
  //     startDate: 0,
  //     endDate: 0,
  //   });
  return (
    <div style={{ display: "grid", gap: "0.3rem" }}>
      <input
        type="text"
        value={experience.companyName}
        onChange={(e) =>
          setExperience({ ...experience, companyName: e.target.value })
        }
        placeholder="Amazon"
      />
      <input
        type="text"
        value={experience.position}
        onChange={(e) =>
          setExperience({ ...experience, position: e.target.value })
        }
        placeholder="Software Engineer"
      />
      <textarea
        value={experience.responsibilities}
        onChange={(e) =>
          setExperience({ ...experience, responsibilities: e.target.value })
        }
        rows={5}
      ></textarea>
      <label>
        Start Date:
        <input
          type="date"
          value={experience.startDate}
          onChange={(e) =>
            setExperience({ ...experience, startDate: e.target.value })
          }
        />
      </label>
      <label style={{ marginBottom: "0.5rem" }}>
        End Date:
        <input
          type="date"
          value={experience.endDate}
          onChange={(e) =>
            setExperience({ ...experience, endDate: e.target.value })
          }
        />
      </label>
    </div>
  );
}
