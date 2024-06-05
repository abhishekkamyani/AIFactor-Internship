import { useState, useEffect } from "react";
import Quote from "./Quote";
import axios from "axios";
import quotesData from "./data";
import { axiosInstance } from "./utils/axiosInstance";
import { Link } from "react-router-dom";

export default function QuotesList() {
  // console.log('App');
  const [quotes, setQuotes] = useState([]);

  const getQuotes = async () => {
    try {
      const res = await axiosInstance.get("/");
      console.log(res);
      setQuotes(res.data);
    } catch (error) {
      console.log("Error fetching quotes:", error);
    }
  };

  useEffect(() => {
    getQuotes();
  }, []);

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

  return (
    <div className="p-4 d-flex flex-column">
      <Link to="/add" className="bg-primary text-white text-decoration-none px-4 py-2 rounded ms-auto">Create New</Link>
      <div className="m-2 row row-cols-1 row-cols-md-2 row-cols-lg-4 gx-2 gy-3">
        {quotes.map((quote) => {
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
