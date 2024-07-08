import "../node_modules/react-grid-layout/css/styles.css";
import "../node_modules/react-resizable/css/styles.css";
import AddRemoveLayout from "./components/AddRemoveLayout";
import MyFirstGrid from "./components/MyFirstGrid";
import MyResponsiveGrid from "./components/MyResponsiveGrid";

export default function App() {
  return (
    <>
      {/* <h1 className="text-3xl font-bold underline">Hello world!</h1> */}
      {/* <MyFirstGrid /> */}
      {/* <MyResponsiveGrid /> */}
      <AddRemoveLayout className="layout bg-neutral-500" rowHeight={100} />
    </>
  );
}
