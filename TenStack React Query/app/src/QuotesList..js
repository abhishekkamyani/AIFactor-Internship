import { useState, useEffect } from "react";
import Quote from "./Quote";
import { axiosInstance } from "./utils/axiosInstance";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

export default function QuotesList() {
  // console.log('App');
  const [quotes, setQuotes] = useState([]);

  const getQuotes = async () => {
    try {
      const res = await axiosInstance.get("/");
      // setQuotes(res.data);
      return res.data;
    } catch (error) {
      throw error;
    }
  };

  const info = useQuery({
    queryKey: ["quotes"],
    queryFn: getQuotes,
    refetchOnWindowFocus: false,
    staleTime: 10000,
    // retry: 3,
    // retryDelay: 1000,
  });

  // useEffect(() => {
  //   getQuotes();
  // }, [])

  const handleDelete = async (id) => {
    const res = await axiosInstance.delete(`/${id}`);
    console.log(res.data);
    if (res.data._id) {
      setQuotes(quotes.filter((quote) => quote._id !== id));
      alert("deleted");
    } else {
      console.log(res);
    }
  };

  const handleChange = async (id, updatedQuote) => {
    const res = await axiosInstance.patch(`/${id}`, updatedQuote);

    if (res.data._id) {
      setQuotes(
        quotes.map((quote) => {
          if (quote._id === id) {
            // return updatedQuote; //or
            return res.data;
          } else {
            return quote;
          }
        })
      );
    }
  };

  if (info.isError) {
    console.log(info.error.message);
    return <h2>{info.error.message}</h2>;
  }

  if (info.isPending) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="p-4 d-flex flex-column">
      <Link
        to="/add"
        className="bg-primary text-white text-decoration-none px-4 py-2 rounded ms-auto"
      >
        Create New
      </Link>
      <div className="m-2 row row-cols-1 row-cols-md-2 row-cols-lg-4 gx-2 gy-3">
        {info.data.map((quote) => {
          return (
            <Quote
              key={quote._id}
              quote={quote}
              handleDelete={handleDelete}
              handleChange={handleChange}
            />
          );
        })}
      </div>
    </div>
  );
}
