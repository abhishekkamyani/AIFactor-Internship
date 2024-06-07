import Cards from "./components/Cards";
import FormNewCardModal from "./components/FormNewCardModal";

export default function App() {
  return (
    <>
      <header>
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
      <FormNewCardModal />
    </>
  );
}