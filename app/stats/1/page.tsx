import React from 'react';

const StatsSection = () => {
    const stats = [
        {
            data: "35K",
            title: "Customers"
        },
        {
            data: "10K+",
            title: "Students"
        },
        {
            data: "10+",
            title: "Branches"
        },
        {
            data: "30+",
            title: "Total countries"
        },
    ];

    return (
        <section className="py-14 ">
            <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
                <div className="max-w-2xl mx-auto text-center">
                    <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                        Our students are always happy
                    </h3>
                    <p className=" text-sm md:text-base mt-3">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi venenatis sollicitudin quam ut tincidunt.
                    </p>
                </div>
                <div className="mt-4 md:mt-12">
                    <ul className="flex flex-col items-center justify-center gap-y-10 sm:flex-row sm:flex-wrap lg:divide-x">
                        {stats.map((item, idx) => (
                            <li key={idx} className="text-center px-10 md:px-12">
                                <h4 className="text-2xl md:text-4xl text-orange-600 font-semibold">{item.data}</h4>
                                <p className=" text-sm md:text-base mt-1 md:mt-3 font-medium">{item.title}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default StatsSection;
