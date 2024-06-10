import Hello from "./hello";
import Project from "./project";
import Reachout from "./reachout";

const Main = () => {
    return (
        <div>
        <Hello />
        <Project id={1} />
        <Reachout />
        </div>
    );
    }

export default Main;