import { Route, Routes } from "react-router-dom";
import Cards from "./pages/Home";
import Navbar from "./components/Navbar";
import AddNewCardFrom from "./pages/AddNewCardForm";
import PricingCards from "./pages/PricingCards";


export default function App() {
  return (
    <>
      {/* <header>
        <div className="container my-8">
          <h1 className="text-center text-4xl font-bold tracking-widest">
            ToDo App
          </h1>
        </div>
      </header>
      <main className="my-10">
        <div className="container mx-auto">
          <Cards />
        </div>
      </main>
      <FormNewCardModal /> */}
      {/* <Navbar /> */}
      {/* <div className="py-32"> */}
      <PricingCards />
      {/* </div> */}
      <Routes>
        <Route path="/todos" element={<Cards />}></Route>
        <Route path="/add" element={<AddNewCardFrom />} />
      </Routes>
    </>
  );
}
