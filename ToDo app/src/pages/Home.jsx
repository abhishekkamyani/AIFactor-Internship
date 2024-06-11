import { Link } from "react-router-dom";
import Card from "../components/Card";
import axios from "axios";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import CardsLoader from "../components/CardsLoader";
import { useEffect } from "react";

export default function Home() {
  const fetchTodos = async () => {
    const res = await axios.get("/api/v1/todos/get");
    return res.data;
  };

  const { isPending, isSuccess, isError, isStale, isFetched, data, error } =
    useQuery({
      queryKey: ["todos"],
      queryFn: fetchTodos,
      refetchOnWindowFocus: false,
      // staleTime: 1000 * 60 * 5,
      staleTime: 5000,
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

      // refresh/ refetch data after interval
      // refetchInterval: 8000,
    });

  console.log(isSuccess);

  if (isError) {
    return (
      <h1 className="text-center text-red-800 text-3xl font-extrabold">
        Error: {error.message}
      </h1>
    );
  }

  const queryClient = useQueryClient();
  useEffect(() => {
    if (isStale && isFetched) {
      if (
        window.confirm("The data might be outdated. Would you like to refresh?")
      ) {
        queryClient.invalidateQueries("todos");
      }
    }
  }, [isStale]);

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
