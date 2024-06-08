import { Link } from "react-router-dom";
import { todos } from "../dummy";
import Card from "../components/Card";

export default function Home() {
  return (
    <main className="my-10">
      <div className="container mx-auto">
        <div className="cards border border-neutral-300 py-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4 rounded-lg">
          {todos.map((todo) => (
            <Card heading={todo.heading} text={todo.text} />
          ))}
          <Link
            to="/add"
            className="text-7xl card bg-gray-200 flex items-center justify-center hover:bg-gray-300 transition-all duration-150 ease"
          >
            +
          </Link>
        </div>
      </div>
    </main>
  );
}