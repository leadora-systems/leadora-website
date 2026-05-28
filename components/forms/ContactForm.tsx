"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { serviceOptions, budgetOptionsUSD, budgetOptionsINR, timelineOptions } from "@/content/site";
import { contactSchema, type ContactFormData } from "@/lib/validations";
import { Toast, useToast } from "./Toast";

export function ContactForm() {
  const { message, show } = useToast();
  const [submitting, setSubmitting] = useState(false);
  const [currency, setCurrency] = useState<"USD" | "INR">("USD");

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const activeBudgetOptions = currency === "USD" ? budgetOptionsUSD : budgetOptionsINR;

  const handleCurrencyChange = (newCurrency: "USD" | "INR") => {
    setCurrency(newCurrency);
    // Reset the budget selection when currency changes so they select from the new range
    setValue("budget", "");
  };

  const onSubmit = async (data: ContactFormData) => {
    setSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error ?? "Failed to send");
      show("✓ Message sent! We'll respond within 1 business day.");
      reset();
    } catch {
      show("Something went wrong. Please try again or email us directly.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="font-sans">
      <form onSubmit={handleSubmit(onSubmit)} className="apply-form !mt-0">
        <h3 className="mb-6 font-montserrat text-xl font-bold">Send a Message</h3>
        <div className="form-grid">
          <div className="form-group flex flex-col gap-2">
            <label className="font-montserrat font-bold text-xs uppercase tracking-wide opacity-80">Full Name *</label>
            <input
              className="form-input font-sans"
              placeholder="Your name"
              {...register("name")}
            />
            {errors.name && (
              <span className="text-xs text-orange font-sans">{errors.name.message}</span>
            )}
          </div>
          <div className="form-group flex flex-col gap-2">
            <label className="font-montserrat font-bold text-xs uppercase tracking-wide opacity-80">Email *</label>
            <input
              className="form-input font-sans"
              type="email"
              placeholder="your@email.com"
              {...register("email")}
            />
            {errors.email && (
              <span className="text-xs text-orange font-sans">{errors.email.message}</span>
            )}
          </div>
          <div className="form-group flex flex-col gap-2">
            <label className="font-montserrat font-bold text-xs uppercase tracking-wide opacity-80">Company</label>
            <input
              className="form-input font-sans"
              placeholder="Your company name"
              {...register("company")}
            />
          </div>
          <div className="form-group flex flex-col gap-2">
            <label className="font-montserrat font-bold text-xs uppercase tracking-wide opacity-80">Service Interest</label>
            <select className="form-input font-sans" {...register("service")}>
              <option value="">Select a service</option>
              {serviceOptions.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group flex flex-col gap-2 justify-between">
            <div className="flex items-center justify-between h-[24px]">
              <label className="font-montserrat font-bold text-xs uppercase tracking-wide opacity-80">Estimated Budget</label>
              <div className="flex items-center gap-1 rounded-md bg-lightgray p-0.5 border border-glass-border text-[10px] font-sans shrink-0">
                <button
                  type="button"
                  onClick={() => handleCurrencyChange("USD")}
                  className={`px-1.5 py-0.5 rounded transition-all font-semibold ${
                    currency === "USD"
                      ? "bg-blue text-white shadow-sm"
                      : "text-muted hover:text-navy"
                  }`}
                >
                  USD ($)
                </button>
                <button
                  type="button"
                  onClick={() => handleCurrencyChange("INR")}
                  className={`px-1.5 py-0.5 rounded transition-all font-semibold ${
                    currency === "INR"
                      ? "bg-blue text-white shadow-sm"
                      : "text-muted hover:text-navy"
                  }`}
                >
                  INR (₹)
                </button>
              </div>
            </div>
            <select className="form-input font-sans" {...register("budget")}>
              <option value="">Select range ({currency})</option>
              {activeBudgetOptions.map((b) => (
                <option key={b} value={b}>
                  {b}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group flex flex-col gap-2 justify-between">
            <div className="flex items-center h-[24px]">
              <label className="font-montserrat font-bold text-xs uppercase tracking-wide opacity-80">Project Timeline</label>
            </div>
            <select className="form-input font-sans" {...register("timeline")}>
              <option value="">Select a timeline</option>
              {timelineOptions.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group form-full flex flex-col gap-2">
            <label className="font-montserrat font-bold text-xs uppercase tracking-wide opacity-80">Message *</label>
            <textarea
              className="form-input font-sans"
              rows={5}
              placeholder="Describe your project, requirements, or question..."
              {...register("message")}
            />
            {errors.message && (
              <span className="text-xs text-orange font-sans">
                {errors.message.message}
              </span>
            )}
          </div>
        </div>
        <button
          type="submit"
          className="btn-primary mt-6 w-full justify-center py-3.5 font-montserrat font-bold text-[14px] uppercase tracking-wider"
          disabled={submitting}
        >
          {submitting ? "Sending…" : "Send Message →"}
        </button>
        <p className="mt-3.5 text-center text-xs text-muted font-sans">
          We typically respond within 1 business day.
        </p>
      </form>
      <Toast message={message} />
    </div>
  );
}
