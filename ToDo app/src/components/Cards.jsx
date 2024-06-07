import { todos } from "../dummy";
import AddNewCard from "./AddNewCard";
import Card from "./Card";

export default function Cards() {
  console.log(todos);
  return (
    <div className="cards border border-neutral-300 py-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4 rounded-lg">
      {todos.map((todo) => (
        <Card heading={todo.heading} text={todo.text} />
      ))}
      <AddNewCard />
    </div>
  );
}
