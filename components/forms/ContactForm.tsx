"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { serviceOptions } from "@/content/site";
import { contactSchema, type ContactFormData } from "@/lib/validations";
import { Toast, useToast } from "./Toast";

export function ContactForm() {
  const { message, show } = useToast();
  const [submitting, setSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

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
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="apply-form !mt-0">
        <h3 className="mb-6 font-montserrat text-xl font-bold">Send a Message</h3>
        <div className="form-grid">
          <div className="form-group flex flex-col gap-2">
            <label>Full Name *</label>
            <input
              className="form-input"
              placeholder="Your name"
              {...register("name")}
            />
            {errors.name && (
              <span className="text-xs text-orange">{errors.name.message}</span>
            )}
          </div>
          <div className="form-group flex flex-col gap-2">
            <label>Email *</label>
            <input
              className="form-input"
              type="email"
              placeholder="your@email.com"
              {...register("email")}
            />
            {errors.email && (
              <span className="text-xs text-orange">{errors.email.message}</span>
            )}
          </div>
          <div className="form-group flex flex-col gap-2">
            <label>Company</label>
            <input
              className="form-input"
              placeholder="Your company name"
              {...register("company")}
            />
          </div>
          <div className="form-group flex flex-col gap-2">
            <label>Service Interest</label>
            <select className="form-input" {...register("service")}>
              <option value="">Select a service</option>
              {serviceOptions.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group form-full flex flex-col gap-2">
            <label>Message *</label>
            <textarea
              className="form-input"
              rows={5}
              placeholder="Describe your project, requirements, or question..."
              {...register("message")}
            />
            {errors.message && (
              <span className="text-xs text-orange">
                {errors.message.message}
              </span>
            )}
          </div>
        </div>
        <button
          type="submit"
          className="btn-primary mt-6 w-full justify-center py-3.5"
          disabled={submitting}
        >
          {submitting ? "Sending…" : "Send Message →"}
        </button>
        <p className="mt-3.5 text-center text-xs text-muted">
          We typically respond within 1 business day.
        </p>
      </form>
      <Toast message={message} />
    </>
  );
}
