export default function Experience({ experience, setExperience }) {
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
          onChange={(e) =>
            setExperience({
              ...experience,
              startDate: `${new Date(e.target.value).getDate()}/${
                new Date(e.target.value).getMonth() + 1
              }/${new Date(e.target.value).getFullYear()}`,
            })
          }
        />
      </label>
      <label style={{ marginBottom: "0.5rem" }}>
        End Date:
        <input
          type="date"
          onChange={(e) =>
            setExperience({
              ...experience,
              endDate: `${new Date(e.target.value).getDate()}/${
                new Date(e.target.value).getMonth() + 1
              }/${new Date(e.target.value).getFullYear()}`,
            })
          }
        />
      </label>
    </div>
  );
}
