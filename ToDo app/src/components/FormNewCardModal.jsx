import { useEffect } from "react";
import { Ripple, Input, initTWE } from "tw-elements";

export default function FormNewCardModal() {
  useEffect(() => {
    initTWE({ Ripple, Input });
  }, []);

  return (
    <div
      data-twe-modal-init=""
      className="fixed left-0 top-0 z-[1055] hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none"
      id="newCardForm"
      data-twe-backdrop="static"
      data-twe-keyboard="false"
      tabIndex={-1}
      aria-labelledby="newCardFormLabel"
      aria-hidden="true"
    >
      <div
        data-twe-modal-dialog-ref=""
        className="pointer-events-none relative w-auto translate-y-[-50px] opacity-0 transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:max-w-[500px]"
      >
        <div className="pointer-events-auto relative flex w-full flex-col rounded-md border-none bg-primary bg-clip-padding text-current shadow-4 outline-none">
          <div className="flex flex-shrink-0 items-center justify-between rounded-t-md border-b-2 border-neutral-100 p-4 dark:border-white/10">
            {/*Modal title*/}
            <h5
              className="text-xl font-medium leading-normal text-white"
              id="exampleModalLabel"
            >
              Modal title
            </h5>
            {/* Close button */}
            <button
              type="button"
              className="box-content rounded-none border-none text-neutral-500 hover:text-neutral-800 hover:no-underline focus:text-neutral-800 focus:opacity-100 focus:shadow-none focus:outline-none dark:text-neutral-400 dark:hover:text-neutral-300 dark:focus:text-neutral-300"
              data-twe-modal-dismiss=""
              aria-label="Close"
            >
              <span className="[&>svg]:h-6 [&>svg]:w-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </span>
            </button>
          </div>
          {/* Modal body */}

          <div
            className="bg-primary-500 p-6 shadow-4"
            data-twe-modal-body-ref=""
          >
            <form>
              {/*Name input*/}
              <div className="relative mb-6" data-twe-input-wrapper-init="">
                <input
                  type="text"
                  className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-2 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
                  id="heading"
                  placeholder="Name"
                />
                <label
                  htmlFor="heading"
                  className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-white text-lg transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-white peer-data-[twe-input-state-active]:-translate-y-[0.9rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-300 dark:peer-focus:text-primary"
                >
                  Heading
                </label>
              </div>

              {/*Message textarea*/}
              <div className="relative mb-6" data-twe-input-wrapper-init="">
                <textarea
                  className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
                  id="exampleFormControlTextarea13"
                  rows={3}
                  placeholder="Message"
                  defaultValue={""}
                />
                <label
                  htmlFor="exampleFormControlTextarea13"
                  className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-white text-lg transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-white peer-data-[twe-input-state-active]:-translate-y-[0.9rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-300 dark:peer-focus:text-primary"
                >
                  Text
                </label>
              </div>
              {/*Submit button*/}
              <button
                type="submit"
                className="inline-block w-full rounded bg-primary px-6 pb-2 pt-2.5 text-md font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
                data-twe-ripple-init=""
                data-twe-ripple-color="light"
              >
                Add
              </button>
            </form>
          </div>

          {/* Modal footer */}
          <div className="flex flex-shrink-0 flex-wrap items-center justify-end rounded-b-md border-t-2 border-neutral-100 p-4 dark:border-white/10">
            <button
              type="button"
              className="inline-block rounded bg-primary-100 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:bg-primary-accent-200 focus:bg-primary-accent-200 focus:outline-none focus:ring-0 active:bg-primary-accent-200 dark:bg-primary-300 dark:hover:bg-primary-400 dark:focus:bg-primary-400 dark:active:bg-primary-400"
              data-twe-modal-dismiss=""
              data-twe-ripple-init=""
              data-twe-ripple-color="light"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
