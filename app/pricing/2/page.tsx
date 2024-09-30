import React from "react";

export default function PricingBasic() {
  return (
    <section className="p-4">
      <div className="flex flex-col items-center justify-center gap-8 py-10 md:flex-row">
        {/*<!-- Component: Basic Pricing Table --> */}
        <div className="w-full max-w-sm overflow-hidden bg-white rounded shadow-lg text-slate-500 shadow-slate-200">
          <div className="flex flex-col">
            <header className="flex flex-col gap-6 p-6 text-slate-400">
              <h3 className="text-xl font-bold text-slate-700">
                Basic
                <span className="block text-sm font-normal text-slate-400">
                  Ideal for individual developers.
                </span>
              </h3>
              <h4>
                <span className="text-3xl">$</span>
                <span className="text-5xl font-bold tracking-tighter transition-all duration-300 text-slate-700 lg:text-6xl">
                  15
                </span>
                <span className="text-sm">/month</span>
              </h4>
              <button className="inline-flex items-center justify-center w-full h-12 gap-2 px-6 text-sm font-medium tracking-wide text-white transition duration-300 rounded shadow-lg whitespace-nowrap bg-purple-500 shadow-purple-100 hover:bg-purple-600 hover:shadow-md hover:shadow-purple-100 focus:bg-purple-700 focus:shadow-md focus:shadow-purple-100 focus-visible:outline-none">
                <span>Try for free</span>
              </button>
            </header>
          </div>
        </div>
        <div className="w-full max-w-sm overflow-hidden rounded shadow-xl bg-purple-500 text-purple-100 shadow-purple-100">
          <div className="flex flex-col">
            <header className="flex flex-col gap-6 p-6 text-purple-200">
              <h3 className="text-xl font-bold text-purple-50">
                Team
                <span className="block text-sm font-normal text-purple-200">
                  Ideal for a small team.
                </span>
              </h3>
              <h4>
                <span className="text-3xl">$</span>
                <span className="text-5xl font-bold tracking-tighter transition-all duration-300 text-purple-50 lg:text-6xl">
                  25
                </span>
                <span className="text-sm">/month</span>
              </h4>
              <button className="inline-flex items-center justify-center w-full h-12 gap-2 px-6 text-sm font-medium tracking-wide transition duration-300 rounded shadow-lg whitespace-nowrap bg-purple-50 text-purple-500 shadow-purple-600 hover:text-purple-600 hover:shadow-md hover:shadow-purple-600 focus:text-purple-700 focus:shadow-md focus:shadow-purple-600 focus-visible:outline-none">
                <span>Try for free</span>
              </button>
            </header>
          </div>
        </div>
        <div className="w-full max-w-sm overflow-hidden bg-white rounded shadow-lg text-slate-500 shadow-slate-200">
          <div className="flex flex-col">
            <header className="flex flex-col gap-6 p-6 text-slate-400">
              <h3 className="text-xl font-bold text-slate-700">
                Premium
                <span className="block text-sm font-normal text-slate-400">
                  Ideal for organizations.
                </span>
              </h3>
              <h4>
                <span className="text-3xl">$</span>
                <span className="text-5xl font-bold tracking-tighter transition-all duration-300 text-slate-700 lg:text-6xl">
                  85
                </span>
                <span className="text-sm">/month</span>
              </h4>
              <button className="inline-flex items-center justify-center w-full h-12 gap-2 px-6 text-sm font-medium tracking-wide text-white transition duration-300 rounded shadow-lg whitespace-nowrap bg-purple-500 shadow-purple-100 hover:bg-purple-600 hover:shadow-md hover:shadow-purple-100 focus:bg-purple-700 focus:shadow-md focus:shadow-purple-200 focus-visible:outline-none">
                <span>Contact Us</span>
              </button>
            </header>
          </div>
        </div>
      </div>
      {/*<!-- End Basic Pricing Table --> */}
    </section>
  );
}