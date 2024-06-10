import Project from "./project";
import Hello from "./hello";
import Reachout from "./reachout";

function App() {
  return (
    <div>
      <Hello />
      <Project id={1} />
      <Reachout />
    </div>
  );
}

export default App;
