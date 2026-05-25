"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { jobTitles } from "@/content/site";
import { careersSchema, type CareersFormData } from "@/lib/validations";
import { Toast, useToast } from "./Toast";

export function CareersForm() {
  const { message, show } = useToast();
  const [submitting, setSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CareersFormData>({
    resolver: zodResolver(careersSchema),
  });

  const onSubmit = async (data: CareersFormData) => {
    setSubmitting(true);
    try {
      const res = await fetch("/api/careers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error ?? "Failed to submit");
      show("✓ Application submitted! We'll review and get back to you.");
      reset();
    } catch {
      show("Something went wrong. Please try again or email us directly.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="apply-form" id="apply">
        <div className="form-grid">
          <div className="form-group flex flex-col gap-2">
            <label>Full Name *</label>
            <input
              className="form-input"
              placeholder="Your full name"
              {...register("name")}
            />
            {errors.name && (
              <span className="text-xs text-orange">{errors.name.message}</span>
            )}
          </div>
          <div className="form-group flex flex-col gap-2">
            <label>Email Address *</label>
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
            <label>Phone Number</label>
            <input
              className="form-input"
              type="tel"
              placeholder="+91 XXXXX XXXXX"
              {...register("phone")}
            />
          </div>
          <div className="form-group flex flex-col gap-2">
            <label>Applying For *</label>
            <select className="form-input" {...register("position")}>
              <option value="">Select a position</option>
              {jobTitles.map((title) => (
                <option key={title} value={title}>
                  {title}
                </option>
              ))}
            </select>
            {errors.position && (
              <span className="text-xs text-orange">
                {errors.position.message}
              </span>
            )}
          </div>
          <div className="form-group form-full flex flex-col gap-2">
            <label>Cover Letter / Message</label>
            <textarea
              className="form-input"
              rows={5}
              placeholder="Tell us about yourself, your experience, and why you'd like to join Leadora Systems..."
              {...register("message")}
            />
          </div>
        </div>
        <button
          type="submit"
          className="btn-primary mt-6 w-full justify-center py-3.5"
          disabled={submitting}
        >
          {submitting ? "Submitting…" : "Submit Application →"}
        </button>
      </form>
      <Toast message={message} />
    </>
  );
}
