import "../node_modules/react-grid-layout/css/styles.css";
import "../node_modules/react-resizable/css/styles.css";
import AddRemoveLayout from "./components/AddRemoveLayout";
import MyFirstGrid from "./components/MyFirstGrid";
import MyResponsiveGrid from "./components/MyResponsiveGrid";
import LocalStorageLayout from "./components/LocalStorageLayout";
import MyResponsiveGridLayout from "./components/ResponsiveLocalStorageLayout";

export default function App() {
  return (
    <>
      {/* <h1 className="text-3xl font-bold underline">Hello world!</h1> */}
      {/* <MyFirstGrid /> */}
      {/* <MyResponsiveGrid /> */}
      <AddRemoveLayout className="layout bg-neutral-500" rowHeight={100} />
      {/* <LocalStorageLayout /> */}
      <MyResponsiveGridLayout />
    </>
  );
}
