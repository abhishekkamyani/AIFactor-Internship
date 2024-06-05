import { useState } from "react";
import { axiosInstance } from "./utils/axiosInstance";
import { useNavigate } from "react-router-dom";

export default function AddQuote() {
  const [data, setData] = useState({ quote: "", author: "" });
  const navigate = useNavigate();

  const handleOnChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addQuote(data);
  };

  const addQuote = async (quote) => {
    const res = await axiosInstance.post("/", quote);
    if (res.data._id) {
      alert("Added");
      navigate("/");
    } else {
      alert("Failed");
    }
  };

  return (
    <form className="container my-5" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="author" className="form-label">
          Author
        </label>
        <input
          type="text"
          className="form-control"
          id="author"
          name="author"
          placeholder="Abdul Kalam"
          value={data.author}
          onChange={handleOnChange}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="quote" className="form-label">
          Quote
        </label>
        <textarea
          type="text"
          className="form-control"
          id="quote"
          name="quote"
          placeholder="If you want to shine like a sun, first burn like a sun"
          value={data.quote}
          onChange={handleOnChange}
          required
        />
      </div>
      <div className="d-grid my-5">
        <button className="btn btn-primary" type="submit">
          Add
        </button>
      </div>
    </form>
  );
}
