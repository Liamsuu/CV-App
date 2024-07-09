import { useState } from "react";
import "./App.css";
import General from "./General";
import Education from "./Education";
function App() {
  return (
    <form action="get">
      <h2>General Information: </h2>
      <General />
      <hr />
      <h2>School Information: </h2>
      <Education />
      <hr />

      <button type="submit">Submit</button>
    </form>
  );
}

export default App;
