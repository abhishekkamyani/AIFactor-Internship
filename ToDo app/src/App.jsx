import { Route, Routes } from "react-router-dom";
import Cards from "./pages/Home";
import Navbar from "./components/Navbar";
import AddNewCardFrom from "./pages/AddNewCardForm";
import { useEffect } from "react";


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
      <Navbar />
      <Routes>
        <Route path="/" element={<Cards />}></Route>
        <Route path="/add" element={<AddNewCardFrom />} />
      </Routes>
    </>
  );
}
