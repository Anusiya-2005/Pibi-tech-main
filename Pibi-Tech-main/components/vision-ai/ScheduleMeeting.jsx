"use client";

import { useState } from "react";

export default function ConsultationForm() {
    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        phoneNo: "",
        email: "",
        company: "",
        interest: "",
        comments: "",
        fromDate: "",
        fromTime: "",
    });

    const HandleReponse = async (e) => {
        e.preventDefault();

        if (!form.email || !form.fromDate || !form.fromTime) {
            alert("Please fill all required fields including date & time");
            return;
        }

        try {
            const response = await fetch("/api/scheduleMeet", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(form),
            });

            const data = await response.json();

            if (response.ok) {
                alert(`Meeting scheduled successfully!
                Zoom Link:
                ${data.meetLink}`);
            } else {
                alert(data.message || "Something went wrong");
            }
        } catch (error) {
            console.error(error);
            alert("Error connecting to server.");
        }
    };

    const HandleFields = (field, value) => {
        setForm((prev) => ({
            ...prev,
            [field]: value,
        }));
    };

    return (
        <section className="w-full py-16">
            <div className="container mx-auto max-w-7xl px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div>
                        <h2 className="text-[35px] font-bold leading-10.5 text-[#248BB3] mb-6">
                            Book a One Hour Session with Our Experts
                        </h2>
                        <p className="text-md md:text-lg font-medium my-2">
                            Ready to transform your business with intelligent AI solutions?
                            Book a meeting with our team to discuss your specific needs and
                            goals.
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
                                        required
                                        value={form.firstName || ""}
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
                                        required
                                        value={form.lastName || ""}
                                        onChange={(e) => HandleFields("lastName", e.target.value)}
                                        placeholder="Enter last name"
                                        className="w-full px-3 py-3 rounded-lg border border-gray-300 bg-blue-50  text-md focus:outline-none focus:border-blue-50"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-base font-bold text-[#111] mb-2">
                                        Phone Number *
                                    </label>
                                    <input
                                        type="tel"
                                        required
                                        value={form.phoneNo || ""}
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
                                        required
                                        value={form.email || ""}
                                        onChange={(e) => HandleFields("email", e.target.value)}
                                        placeholder="gmail, outlook...."
                                        className="w-full px-3 py-3 rounded-lg border border-gray-300 bg-blue-50  text-md focus:outline-none focus:border-blue-50"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-base font-bold text-[#111] mb-2">
                                        Company *
                                    </label>
                                    <input
                                        type="text"
                                        required
                                        value={form.company || ""}
                                        onChange={(e) => HandleFields("company", e.target.value)}
                                        placeholder="Type your company"
                                        className="w-full px-3 py-3 rounded-lg border border-gray-300 bg-blue-50  text-md focus:outline-none focus:border-blue-50"
                                    />
                                </div>
                                <div>
                                    <label className="block text-base font-bold text-[#111] mb-2">
                                        Consultation Interest *
                                    </label>
                                    <select
                                        required
                                        value={form.interest || ""}
                                        onChange={(e) => HandleFields("interest", e.target.value)}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-blue-50  text-base focus:outline-none focus:border-blue-50"
                                    >
                                        <option value="">Select interest</option>
                                        <option value="web">Web Development</option>
                                        <option value="ai">AI Solutions</option>
                                        <option value="cloud">Cloud Consulting</option>
                                    </select>
                                </div>
                            </div>

                            <div>
                                <h3 className="block text-xl font-bold text-[#111] mb-4">
                                    Desired date and time for consultation
                                </h3>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-bold text-[#111] mb-2">
                                            Date *
                                        </label>
                                        <input
                                            type="date"
                                            required
                                            value={form.fromDate || ""}
                                            onChange={(e) => HandleFields("fromDate", e.target.value)}
                                            className="w-full px-3 py-3 rounded-lg border border-gray-300 bg-blue-50 text-md focus:outline-none focus:border-blue-50"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-bold text-[#111] mb-2">
                                            Time *
                                        </label>
                                        <input
                                            type="time"
                                            required
                                            value={form.fromTime || ""}
                                            onChange={(e) => HandleFields("fromTime", e.target.value)}
                                            className="w-full px-3 py-3 rounded-lg border border-gray-300 bg-blue-50 text-md focus:outline-none focus:border-blue-50"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div>
                                <label className="block text-base font-bold text-[#111] mb-2">
                                    Additional Information / Comments
                                </label>
                                <textarea
                                    value={form.comments || ""}
                                    onChange={(e) => HandleFields("comments", e.target.value)}
                                    placeholder="Description"
                                    rows={3}
                                    className="w-full px-5 py-4 rounded-lg border border-gray-300 bg-blue-50  text-md focus:outline-none focus:border-blue-50 resize-none"
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full py-3 bg-blue-400 text-white  text-md font-bold rounded hover:opacity-90 transition-opacity"
                            >
                                Book consultation
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
