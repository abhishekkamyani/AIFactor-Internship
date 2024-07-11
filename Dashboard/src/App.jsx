import "../node_modules/react-grid-layout/css/styles.css";
import "../node_modules/react-resizable/css/styles.css";;
import Dashboard from "./components/grids/Dashboard";
import Temp from "./components/Temp";

export default function App() {
  return (
    <div>
      {/* <Dashboard /> */}
      <Temp />
    </div>
  );
}
