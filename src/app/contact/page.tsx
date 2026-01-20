"use client";

import { useState } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="bg-[#F2F3F1] min-h-screen pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-medium text-[#171a20] mb-6 tracking-tight">
          Contact Support
        </h1>
        <p className="text-lg text-[#393c41] leading-relaxed mb-10">
          For suitability questions, funding pathways, or order help, send a note and we will
          respond within one business day.
        </p>

        <div className="bg-white rounded-lg p-8 shadow-sm">
          {submitted ? (
            <div>
              <p className="text-sm text-[#171a20] font-semibold">Message received.</p>
              <p className="text-sm text-[#393c41] mt-2">
                This form is a demo in the prototype; no message is sent.
              </p>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              <label className="flex flex-col gap-2">
                <span className="text-xs font-bold uppercase tracking-widest text-[#393c41]">
                  Name
                </span>
                <input
                  required
                  name="name"
                  className="h-12 rounded-md border border-black/10 px-4 bg-white"
                  placeholder="Your name"
                />
              </label>

              <label className="flex flex-col gap-2">
                <span className="text-xs font-bold uppercase tracking-widest text-[#393c41]">
                  Email
                </span>
                <input
                  required
                  type="email"
                  name="email"
                  className="h-12 rounded-md border border-black/10 px-4 bg-white"
                  placeholder="you@example.com"
                />
              </label>

              <label className="flex flex-col gap-2 md:col-span-2">
                <span className="text-xs font-bold uppercase tracking-widest text-[#393c41]">
                  Message
                </span>
                <textarea
                  required
                  name="message"
                  className="min-h-32 rounded-md border border-black/10 p-4 bg-white"
                  placeholder="What can we help with?"
                />
              </label>

              <div className="md:col-span-2 flex items-center justify-end">
                <button
                  type="submit"
                  className="btn-primary"
                >
                  Send Message
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
