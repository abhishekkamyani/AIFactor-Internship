import "../node_modules/react-grid-layout/css/styles.css";
import "../node_modules/react-resizable/css/styles.css";
import AddRemoveLayout from "./components/grids/AddRemoveLayout";
import MyFirstGrid from "./components/grids/MyFirstGrid";
import MyResponsiveGrid from "./components/grids/MyResponsiveGrid";
import LocalStorageLayout from "./components/grids/LocalStorageLayout";
import MyResponsiveGridLayout from "./components/grids/ResponsiveLocalStorageLayout";
import AddRemoveWithLS from "./components/grids/AddRemoveWithLS";
import DragDropGridLayout from "./components/grids/DragDropGridLayout";
import Histogram from "./components/charts/Histogram";
import LayoutChartsLS from "./components/grids/LayoutChartsLS";

export default function App() {
  return (
    <div>
      {/* <h1 className="text-3xl font-bold underline">Hello world!</h1> */}
      {/* <MyFirstGrid /> */}
      {/* <MyResponsiveGrid /> */}
      {/* <AddRemoveLayout className="layout bg-neutral-500" rowHeight={100} /> */}
      {/* <LocalStorageLayout /> */}
      {/* <MyResponsiveGridLayout /> */}
      {/* <AddRemoveWithLS /> */}
      {/* <DragDropGridLayout /> */}
      {/* <div className="h-[80vh] w-full mt-10 px-32">
      <Histogram />
      </div> */}

      <LayoutChartsLS />
    </div>
  );
}
