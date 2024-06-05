import { useState } from "react";

export default function Quote({ quote, handleDelete, handleChange }) {
    // console.log('Quote');
    const [isEdit, setIsEdit] = useState(false);
    const [data, setData] = useState(quote);

    const handleEdit = () => {
        setIsEdit(!isEdit);
        if (isEdit) {
            handleChange(quote._id, data);
        }
    }

    const handleOnChangeAuthor = (e) => {
        setData({ ...data, author: e.target.value });
    }

    const handleOnChangeQuote = (e) => {
        setData({ ...data, quote: e.target.value });
    }

    return (
        <div className="col position-relative">
            <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger z-3" style={{ cursor: 'pointer' }} onClick={() => handleDelete(data._id)}>
                X
            </span>
            <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger z-3" style={{ cursor: 'pointer' }} onClick={handleEdit}>
                🖊
            </span>
            <div className="card bg-info" style={{ height: '15rem' }}>
                <div className="card-body">
                    <h5 className="card-title">
                        {!isEdit ?
                            <p>{quote.author}</p> :
                            <input type="text" value={data.author} className="bg-info" onChange={handleOnChangeAuthor} />}
                    </h5>
                    {!isEdit ?
                        <p className="card-text">{quote.quote}</p> :
                        <textarea className="h-75 w-100 bg-info" type="text" value={data.quote} onChange={handleOnChangeQuote} />
                    }
                </div>
            </div>
        </div>
    );
}