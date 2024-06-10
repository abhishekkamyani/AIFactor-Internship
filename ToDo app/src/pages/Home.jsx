import { Link } from "react-router-dom";
import Card from "../components/Card";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import CardsLoader from "../components/CardsLoader";

export default function Home() {
  const fetchTodos = async () => {
    const res = await axios.get("/api/v1/todos/get");
    return res.data;
  };

  const { isPending, isSuccess, isError, data, error } = useQuery({
    queryKey: ["todos"],
    queryFn: fetchTodos,
    refetchOnWindowFocus: false,
    staleTime: 1000 * 60 * 5,
    // retry: 3,
    // retryDelay: 1000,

    // the dummy data during loading
    // placeholderData: [
    //   {
    //     id: 1,
    //     heading: "Loading...",
    //     text: "Please wait...",
    //     completed: false,
    //   },
    // ],

    // refresh after interval
    // refetchInterval: 10000,
  });

  if (isError) {
    return <h1 className="text-center text-red-800 text-3xl font-extrabold">Error: {error.message}</h1>;
  }

  return (
    <main className="py-10">
      <div className="container mx-auto">
        <div className="cards-container">
          {isPending ? (
            <CardsLoader />
          ) : (
            <>
              {data?.map((todo) => (
                <Card heading={todo.heading} text={todo.text} key={todo.id} />
              ))}
              <Link
                to="/add"
                className="text-7xl card bg-gray-200 flex items-center justify-center hover:bg-gray-300 transition-all duration-150 ease"
              >
                +
              </Link>
            </>
          )}
        </div>
      </div>
    </main>
  );
}
