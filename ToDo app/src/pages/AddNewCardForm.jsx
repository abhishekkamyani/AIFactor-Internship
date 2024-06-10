import { Link } from "react-router-dom";

export default function AddNewCardFrom() {
  return (
    <div className="max-w-xl mx-auto mt-8 flex w-full flex-col border rounded-lg bg-gray-300 p-8">
      <h2 className="mb-1 text-lg font-medium text-gray-900">
        Add New Item
      </h2>
      <div className="mb-4">
        <label htmlFor="heading" className="text-sm leading-7 text-gray-600">
          Heading
        </label>
        <input
          type="text"
          id="heading"
          name="heading"
          className="w-full rounded border border-gray-300 font-bold bg-white py-1 px-3 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500"
          placeholder="Heading..."
        />
      </div>
      <div className="mb-4">
        <label htmlFor="text" className="text-sm leading-7 text-gray-600">
          Text
        </label>
        <textarea
          id="text"
          name="text"
          className="h-32 w-full resize-none rounded border border-gray-300 bg-white py-1 px-3 text-base leading-6 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500"
          placeholder="Text..."
        />
      </div>
      <div className="flex items-center justify-between gap-x-16">
        <button className="rounded border-0 w-full text-center bg-indigo-500 py-2 text-lg text-white hover:bg-indigo-600">
          Add
        </button>
        <Link
          to="/todos"
          className="rounded border-0 w-full text-center bg-red-500 py-2 text-lg text-white hover:bg-red-600"
        >
          Cancel
        </Link>
      </div>
      <p className="mt-3 text-xs text-gray-500">
        Feel free to add new items in ToDo
      </p>
    </div>
  );
}
