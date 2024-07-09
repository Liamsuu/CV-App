import { useState } from "react";
import "./App.css";
import General from "./General";
import Education from "./Education";
import Experience from "./Experience";
function App() {
  return (
    <form action="#">
      <h2>General Information: </h2>
      <General />
      <hr />
      <h2>School Information: </h2>
      <Education />
      <hr />
      <h2>Experience: </h2>
      <div>
        <Experience />
        <button>Add more</button>
      </div>
      <hr />
      <button type="submit">Submit</button>
    </form>
  );
}

export default App;
