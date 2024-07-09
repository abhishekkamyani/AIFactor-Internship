import React from "react";

export default function PricingCards() {
  return (
    <div>
      <section className="relative overflow-hidden">
        {/* <div
          className="absolute top-0 left-0 w-full h-[20px] bg-black"
          style={{ transform: "skewY(-6deg)", transformOrigin: "top" }} 
        ></div> */}
        <div className="bg-white border-b-8 border-black w-[102vw] -left-6 h-36 absolute rotate-[-4deg] top-[-9%]">

        </div>
        <div className="bg-cyan-500 ">
          <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-32 lg:px-6">
            <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
              <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white text-white">
                Pricing Plans
              </h2>
              <p className="mb-5 font-light text-white sm:text-xl dark:text-gray-400">
                Here at InsureGuard, our focus is to provide flexible insurance
                options tailored to your needs.
              </p>
            </div>
            <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0 ">
              <div className="flex flex-col p-20 mx-auto max-w-3xl w-4/5 h-90 text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-10 dark:bg-gray-800 dark:text-white">
                <h3 className="mb-1 text-3xl font-semibold">Standard</h3>
                <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">up to 20 users</p>
                <hr className="my-4 border-gray-200 dark:border-gray-600" />
                <div className="flex flex-col justify-center items-center my-8">
                  <span className="text-5xl font-extrabold">$19</span>
                  <span className="text-sm font-light text-gray-500 dark:text-gray-400">per month</span>
                </div>
                <button
                  type="submit"
                  className="px-20 py-3 border border-black bg-sky-600 text-white rounded hover:bg-blue-600"
                >
                  Order
                </button>
              </div>
              <div className="flex flex-col p-8 mx-auto max-w-3xl w-4/5 h-90 text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-10 dark:bg-gray-800 dark:text-white">
                <h3 className="mb-1 text-2xl font-semibold">Standard</h3>
                <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">up to 20 users</p>
                <hr className="my-4 border-gray-200 dark:border-gray-600" />
                <div className="flex flex-col justify-center items-center my-8">
                  <span className="text-5xl font-extrabold">$39</span>
                  <span className="text-sm font-light text-gray-500 dark:text-gray-400">per month</span>
                </div>
                <button
                  type="submit"
                  className="px-20 py-3 border border-black bg-sky-600 text-white rounded hover:bg-blue-600"
                >
                  Order
                </button>
              </div>
              <div className="flex flex-col p-8 mx-auto max-w-3xl w-4/5 h-90 text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-10 dark:bg-gray-800 dark:text-white">
                <h3 className="mb-1 text-2xl font-semibold">Standard</h3>
                <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">up to 20 users</p>
                <hr className="my-4 border-gray-200 dark:border-gray-600" />
                <div className="flex flex-col justify-center items-center my-8">
                  <span className="text-5xl font-extrabold">$69</span>
                  <span className="text-sm font-light text-gray-500 dark:text-gray-400">per month</span>
                </div>
                <button
                  type="submit"
                  className="px-20 py-3 border border-black bg-sky-600 text-white rounded hover:bg-blue-600"
                >
                  Order
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}