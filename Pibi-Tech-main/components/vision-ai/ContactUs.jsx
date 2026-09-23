"use client";

import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    phoneNo: "",
    email: "",
    industry: "",
    country: "",
    message: "",
  });

  const HandleReponse = async (e) => {
    e.preventDefault();
    await fetch("/api/sendEmail", {
      method: "POST",
      body: JSON.stringify(form),
    });
  };

  const HandleFields = (field, value) => {
    let data = form;
    data[field] = value;
    setForm(data);
  };

  return (
    <section className="w-full py-16">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-[35px] font-bold leading-10.5 text-[#248BB3] mb-6">
              Let’s Build Intelligent Systems for Your Business
            </h2>
            <p className="text-md md:text-lg font-medium my-2">
              Share your challenges with us. Our team will help you design,
              deploy, and scale AI and Agentic AI solutions that fit your
              enterprise goals.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="text-blue-50 text-xl"></span>
                <span className=" text-[18px] text-[#248BB3]/80">
                  (+91) 9597867340
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-blue-50 text-xl"></span>
                <span className=" text-[18px] text-[#248BB3]/80">
                  business@pibitech.com
                </span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-4xl border border-[#93B8FF] p-8">
            <form className="space-y-6" onSubmit={HandleReponse}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-base font-bold text-[#111] mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    onChange={(e) => HandleFields("firstName", e.target.value)}
                    placeholder="Enter first name"
                    className="w-full px-3 py-3 rounded-lg border border-gray-300 bg-blue-50  text-md focus:outline-none focus:border-blue-50"
                  />
                </div>
                <div>
                  <label className="block text-base font-bold text-[#111] mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    onChange={(e) => HandleFields("lastName", e.target.value)}
                    placeholder="Enter last name"
                    className="w-full px-3 py-3 rounded-lg border border-gray-300 bg-blue-50  text-md focus:outline-none focus:border-blue-50"
                  />
                </div>
              </div>

              <div>
                <label className="block text-base font-bold text-[#111] mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  onChange={(e) => HandleFields("phoneNo", e.target.value)}
                  placeholder="00000 00000"
                  className="w-full px-3 py-3 rounded-lg border border-gray-300 bg-blue-50  text-md focus:outline-none focus:border-blue-50"
                />
              </div>

              <div>
                <label className="block text-base font-bold text-[#111] mb-2">
                  Email ID *
                </label>
                <input
                  type="email"
                  onChange={(e) => HandleFields("email", e.target.value)}
                  placeholder="gmail, outlook...."
                  className="w-full px-3 py-3 rounded-lg border border-gray-300 bg-blue-50  text-md focus:outline-none focus:border-blue-50"
                />
              </div>

              <div>
                <label className="block text-base font-bold text-[#111] mb-2">
                  Industry *
                </label>
                <input
                  type="text"
                  onChange={(e) => HandleFields("industry", e.target.value)}
                  placeholder="Type your industry"
                  className="w-full px-3 py-3 rounded-lg border border-gray-300 bg-blue-50  text-md focus:outline-none focus:border-blue-50"
                />
              </div>

              <div>
                <label className="block text-base font-bold text-[#111] mb-2">
                  Country *
                </label>
                <select
                  onChange={(e) => HandleFields("country", e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-blue-50  text-base focus:outline-none focus:border-blue-50"
                >
                  <option>Select Country</option>
                  <option>United States</option>
                  <option>India</option>
                  <option>United Kingdom</option>
                </select>
              </div>

              <div>
                <label className="block text-base font-bold text-[#111] mb-2">
                  How can we help you *
                </label>
                <textarea
                  onChange={(e) => HandleFields("message", e.target.value)}
                  placeholder="Description"
                  rows={3}
                  className="w-full px-5 py-4 rounded-lg border border-gray-300 bg-blue-50  text-md focus:outline-none focus:border-blue-50 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-blue-400 text-white  text-md font-bold rounded hover:opacity-90 transition-opacity"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
