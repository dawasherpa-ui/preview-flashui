"use client";
import React from "react";

export default function Servicessection() {
  return (
    <div className="grid grid-cols-1 items-center bg-fixed bg-top bg-cover bg-blend-multiply bg-gray-700 bg-opacity-60 bg-no-repeat px-4 sm:px-6 md:px-10 lg:px-28 xl:px-36 py-24 h-auto sm:h-[974px] text-white" style={{ backgroundImage: 'url(https://res.cloudinary.com/dpb8r7bqq/image/upload/v1721837633/hero-slider-1-img_iopzxw.webp)' }}>
      <div>
        <p className="text-center text-sm mt-0 font-bold empTitle">
          HOW CAN I ASSIST YOU?
        </p>
        <p className="text-center text-md font-sans md:px-20">
          {"Explore the consultancy services I offer. Reach out for further information."
            .split(" ")
            .map((char, id) => {
              return (
                <span key={id} className="inline-block pr-1 emppara">
                  {char}
                </span>
              );
            })}
        </p>
      </div>
      <div>
        <section className="grid grid-cols-1 gap-6 p-4 md:grid-cols-2 lg:grid-cols-3 2xl:px-24 md:p-6">
          {service?.map((e, index: number) => (
            <div className="w-full p-4 rounded-2xl border" key={index}>
              <div>
                <div className="text-md font-bold text-slate-200">{e.title}</div>
                <p className="text-sm text-slate-300">{e.description}</p>
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}

const service = [
  {
    "title": "Consultation & Diagnosis",
    "description": "Comprehensive evaluations to diagnose various issues and create personalized strategies."
  },
  {
    "title": "Customized Treatment Plans",
    "description": "Specialized in developing tailored treatment plans to address specific needs effectively."
  },
  {
    "title": "Educational Workshops",
    "description": "Workshops designed to educate clients and their families on relevant topics and treatment options."
  },
  {
    "title": "Long-term Counseling Programs",
    "description": "Extended counseling programs focused on delivering sustained support and development."
  },
  {
    "title": "Diagnostic Assessments",
    "description": "Providing detailed diagnostic assessments to aid in the understanding and treatment of conditions."
  },
  {
    "title": "Advanced Therapeutic Techniques",
    "description": "Utilizing advanced techniques like EEG and ECT for comprehensive care and management."
  }
];
