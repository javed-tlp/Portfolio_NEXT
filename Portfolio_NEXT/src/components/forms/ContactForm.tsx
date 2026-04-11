"use client";

import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { siteConfig } from "@/config/site";

export function ContactForm() {
  const [pending, setPending] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const email = formData.get("email") as string;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address.", { position: "top-center" });
      return;
    }

    setPending(true);
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        toast.success("Message sent. I’ll get back to you soon.", {
          position: "bottom-center",
        });
        form.reset();
      } else {
        toast.error("Could not send message. Try again later.", { position: "top-center" });
      }
    } catch {
      toast.error("Something went wrong. Please try again.", { position: "top-center" });
    } finally {
      setPending(false);
    }
  };

  return (
    <div className="mx-auto max-w-xl">
      <form
        onSubmit={handleSubmit}
        className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6 shadow-glow sm:p-8"
      >
        <input type="hidden" name="access_key" value={siteConfig.web3formsAccessKey} />

        <label className="block">
          <span className="text-sm font-medium text-slate-300">Name</span>
          <input
            type="text"
            name="name"
            required
            placeholder="Your name"
            className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-950/80 px-4 py-3 text-slate-200 placeholder:text-slate-600 focus:border-emerald-500/50 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
          />
        </label>

        <label className="mt-5 block">
          <span className="text-sm font-medium text-slate-300">Email</span>
          <input
            type="email"
            name="email"
            required
            placeholder="you@example.com"
            className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-950/80 px-4 py-3 text-slate-200 placeholder:text-slate-600 focus:border-emerald-500/50 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
          />
        </label>

        <label className="mt-5 block">
          <span className="text-sm font-medium text-slate-300">Message</span>
          <textarea
            name="message"
            required
            rows={5}
            placeholder="How can I help?"
            className="mt-2 w-full resize-y rounded-xl border border-slate-700 bg-slate-950/80 px-4 py-3 text-slate-200 placeholder:text-slate-600 focus:border-emerald-500/50 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
          />
        </label>

        <button
          type="submit"
          disabled={pending}
          className="mt-8 w-full rounded-xl bg-emerald-500 py-3.5 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-500/20 transition hover:bg-emerald-400 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {pending ? "Sending…" : "Send message"}
        </button>
      </form>
      <ToastContainer theme="dark" />
    </div>
  );
}
