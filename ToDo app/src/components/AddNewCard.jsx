import { useEffect } from "react";
import { Modal, Ripple, initTWE } from "tw-elements";

export default function AddNewCard() {
  useEffect(() => {
    initTWE({ Modal, Ripple });
  });

  return (
    <button
      className="text-7xl card bg-gray-200 flex items-center justify-center hover:bg-gray-300 transition-all duration-150 ease"
      data-twe-toggle="modal"
      data-twe-target="#newCardForm"
      data-twe-ripple-init=""
      data-twe-ripple-color="light"
    >
      +
    </button>
  );
}
