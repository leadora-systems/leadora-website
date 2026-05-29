"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState, useRef, type DragEvent } from "react";
import { useForm } from "react-hook-form";
import { 
  User, 
  Mail, 
  Phone, 
  Briefcase, 
  MessageSquare, 
  UploadCloud, 
  FileText, 
  CheckCircle, 
  X, 
  Lock, 
  Clock, 
  ShieldCheck, 
  ArrowRight,
  Send,
  RefreshCw
} from "lucide-react";
import { enrichedJobs } from "@/components/careers/OpenRoles";
import { careersSchema, type CareersFormData } from "@/lib/validations";
import { Toast, useToast } from "./Toast";
import Link from "next/link";

const jobTitles = enrichedJobs.map((job) => job.title);

export function CareersForm() {
  const { message: toastMessage, show: showToast } = useToast();
  const [submitting, setSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [isDragActive, setIsDragActive] = useState(false);
  
  const fileInputRef = useRef<HTMLInputElement>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CareersFormData>({
    resolver: zodResolver(careersSchema),
  });

  // Drag and drop handlers
  const handleDrag = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setIsDragActive(true);
    } else if (e.type === "dragleave") {
      setIsDragActive(false);
    }
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      // Restrict to PDF or Word documents
      if (
        file.type === "application/pdf" || 
        file.type === "application/msword" || 
        file.type === "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
      ) {
        setResumeFile(file);
      } else {
        showToast("⚠️ Please upload only PDF or Word documents (.doc/.docx)");
      }
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setResumeFile(file);
    }
  };

  const triggerFileSelect = () => {
    fileInputRef.current?.click();
  };

  const removeResumeFile = (e: React.MouseEvent) => {
    e.stopPropagation();
    setResumeFile(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const onSubmit = async (data: CareersFormData) => {
    setSubmitting(true);
    try {
      if (!resumeFile) {
        showToast("⚠️ Please upload your resume (PDF/DOC/DOCX, max 5MB).");
        return;
      }

      const allowedTypes = new Set([
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      ]);
      const maxBytes = 5 * 1024 * 1024;

      if (!allowedTypes.has(resumeFile.type)) {
        showToast("⚠️ Please upload only PDF or Word documents (.doc/.docx)");
        return;
      }
      if (resumeFile.size > maxBytes) {
        showToast("⚠️ Resume must be 5MB or smaller.");
        return;
      }

      const form = new FormData();
      form.set("name", data.name);
      form.set("email", data.email);
      if (data.phone) form.set("phone", data.phone);
      form.set("position", data.position);
      if (data.message) form.set("message", data.message);
      form.set("resume", resumeFile, resumeFile.name);

      const res = await fetch("/api/careers", {
        method: "POST",
        body: form,
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error ?? "Failed to submit");
      
      setIsSuccess(true);
      reset();
      setResumeFile(null);
    } catch {
      showToast("Something went wrong. Please try again or email us directly.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      {isSuccess ? (
        /* Success Overlay Pop-up Animation - Adapted for Light Theme */
        <div className="fade-up-2 flex flex-col items-center justify-center text-center p-8 py-14 rounded-2xl border border-emerald-100 bg-white shadow-xl shadow-emerald-500/[0.04]">
          <div className="relative mb-6 flex h-20 w-20 items-center justify-center rounded-full border border-emerald-100 bg-emerald-50 shadow-[0_0_20px_rgba(16,185,129,0.1)]">
            <CheckCircle className="w-10 h-10 text-emerald-500" />
          </div>
          <h3 className="font-montserrat text-2xl font-bold text-slate-800">
            Application Received!
          </h3>
          <p className="max-w-[420px] text-slate-500 mt-3 text-sm leading-relaxed">
            Thank you for applying to Leadora Systems. Our recruitment squad has logged your credentials and will reach out within 48 hours.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 w-full justify-center">
            <button
              onClick={() => setIsSuccess(false)}
              className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-montserrat text-xs font-bold uppercase tracking-wider border border-slate-200 bg-white text-slate-600 hover:text-slate-800 hover:border-slate-300 transition-all duration-300"
            >
              <RefreshCw className="w-3.5 h-3.5" /> Submit Another
            </button>
            <Link
              href="/"
              className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-montserrat text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-blue to-cyan text-white shadow-md shadow-blue-500/20 hover:shadow-lg transition-all duration-300"
            >
              Back to Home <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      ) : (
        /* Futuristic Form Container - Adapted for Light Theme */
        <div className="w-full">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" id="apply">
            <div className="grid gap-5 sm:grid-cols-2">
              
              {/* Full Name Input */}
              <div className="flex flex-col gap-1.5 relative">
                <label className="text-[11px] font-bold text-slate-600 tracking-wider uppercase font-sans">
                  Full Name <span className="text-cyan-500">*</span>
                </label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-slate-400" />
                  <input
                    className="w-full pl-11 pr-4 py-2.5 text-sm rounded-xl border border-slate-200 bg-slate-50 text-slate-800 outline-none transition-all duration-300 placeholder-slate-400 focus:border-cyan-500 focus:bg-white focus:ring-2 focus:ring-cyan-500/5"
                    placeholder="Your full name"
                    {...register("name")}
                  />
                </div>
                {errors.name && (
                  <span className="text-xs text-orange font-medium flex items-center gap-1 mt-0.5">
                    <X className="w-3.5 h-3.5" /> {errors.name.message}
                  </span>
                )}
              </div>

              {/* Email Address Input */}
              <div className="flex flex-col gap-1.5 relative">
                <label className="text-[11px] font-bold text-slate-600 tracking-wider uppercase font-sans">
                  Email Address <span className="text-cyan-500">*</span>
                </label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-slate-400" />
                  <input
                    className="w-full pl-11 pr-4 py-2.5 text-sm rounded-xl border border-slate-200 bg-slate-50 text-slate-800 outline-none transition-all duration-300 placeholder-slate-400 focus:border-cyan-500 focus:bg-white focus:ring-2 focus:ring-cyan-500/5"
                    type="email"
                    placeholder="your@email.com"
                    {...register("email")}
                  />
                </div>
                {errors.email && (
                  <span className="text-xs text-orange font-medium flex items-center gap-1 mt-0.5">
                    <X className="w-3.5 h-3.5" /> {errors.email.message}
                  </span>
                )}
              </div>

              {/* Phone Number Input */}
              <div className="flex flex-col gap-1.5 relative">
                <label className="text-[11px] font-bold text-slate-600 tracking-wider uppercase font-sans">
                  Phone Number
                </label>
                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-slate-400" />
                  <input
                    className="w-full pl-11 pr-4 py-2.5 text-sm rounded-xl border border-slate-200 bg-slate-50 text-slate-800 outline-none transition-all duration-300 placeholder-slate-400 focus:border-cyan-500 focus:bg-white focus:ring-2 focus:ring-cyan-500/5"
                    type="tel"
                    placeholder="+91 XXXXX XXXXX"
                    {...register("phone")}
                  />
                </div>
              </div>

              {/* Applying For Select Input */}
              <div className="flex flex-col gap-1.5 relative">
                <label className="text-[11px] font-bold text-slate-600 tracking-wider uppercase font-sans">
                  Applying For <span className="text-cyan-500">*</span>
                </label>
                <div className="relative">
                  <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-slate-400 pointer-events-none" />
                  <select 
                    className="w-full pl-11 pr-4 py-2.5 text-sm rounded-xl border border-slate-200 bg-slate-50 text-slate-800 outline-none transition-all duration-300 appearance-none focus:border-cyan-500 focus:bg-white focus:ring-2 focus:ring-cyan-500/5 cursor-pointer" 
                    {...register("position")}
                  >
                    <option value="" className="text-slate-400 bg-white">Select a position</option>
                    {jobTitles.map((title) => (
                      <option key={title} value={title} className="text-slate-800 bg-white">
                        {title}
                      </option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-slate-400">
                    <ArrowRight className="w-3.5 h-3.5 rotate-90" />
                  </div>
                </div>
                {errors.position && (
                  <span className="text-xs text-orange font-medium flex items-center gap-1 mt-0.5">
                    <X className="w-3.5 h-3.5" /> {errors.position.message}
                  </span>
                )}
              </div>

              {/* Drag & Drop Resume Upload Component */}
              <div className="sm:col-span-2 flex flex-col gap-1.5 relative">
                <label className="text-[11px] font-bold text-slate-600 tracking-wider uppercase font-sans">
                  Upload Resume <span className="text-cyan-500">*</span>
                </label>
                
                <div
                  className={`relative flex flex-col items-center justify-center p-6 border border-dashed rounded-xl cursor-pointer transition-all duration-300 overflow-hidden ${
                    isDragActive 
                      ? "border-cyan-500 bg-cyan-50/30 shadow-sm" 
                      : resumeFile
                        ? "border-emerald-500/40 bg-emerald-50/20 hover:bg-emerald-50/40"
                        : "border-slate-200 bg-slate-50/50 hover:border-slate-300 hover:bg-slate-50"
                  }`}
                  onDragEnter={handleDrag}
                  onDragOver={handleDrag}
                  onDragLeave={handleDrag}
                  onDrop={handleDrop}
                  onClick={triggerFileSelect}
                >
                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleFileChange}
                    accept=".pdf,.doc,.docx"
                    className="hidden"
                  />

                  {resumeFile ? (
                    /* Uploaded File Panel */
                    <div className="flex items-center gap-4 w-full justify-between">
                      <div className="flex items-center gap-3">
                        <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-emerald-200 bg-emerald-50">
                          <FileText className="w-5 h-5 text-emerald-500" />
                        </div>
                        <div className="text-left">
                          <p className="text-slate-800 text-xs font-bold truncate max-w-[280px] sm:max-w-[400px]">
                            {resumeFile.name}
                          </p>
                          <p className="text-[10px] text-emerald-600 font-medium">
                            {(resumeFile.size / 1024 / 1024).toFixed(2)} MB • Uploaded
                          </p>
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={removeResumeFile}
                        className="flex h-7 w-7 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-400 hover:text-slate-600 hover:border-slate-300 transition-all duration-300"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  ) : (
                    /* Standard Upload Instructions */
                    <div className="flex flex-col items-center text-center">
                      <UploadCloud className={`w-8 h-8 mb-2.5 transition-colors duration-300 ${isDragActive ? 'text-cyan-500' : 'text-slate-400'}`} />
                      <p className="text-slate-700 text-xs font-bold font-sans">
                        Drag & Drop your resume or <span className="text-cyan-500 hover:underline">browse files</span>
                      </p>
                      <p className="text-[10px] text-slate-400 font-medium mt-1">
                        Supports PDF, DOC, DOCX up to 5MB
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* Cover Letter / Message Input */}
              <div className="sm:col-span-2 flex flex-col gap-1.5 relative">
                <label className="text-[11px] font-bold text-slate-600 tracking-wider uppercase font-sans">
                  Cover Letter / Message
                </label>
                <div className="relative">
                  <MessageSquare className="absolute left-4 top-4.5 w-4.5 h-4.5 text-slate-400" />
                  <textarea
                    className="w-full pl-11 pr-4 py-3 text-sm rounded-xl border border-slate-200 bg-slate-50 text-slate-800 outline-none transition-all duration-300 placeholder-slate-400 focus:border-cyan-500 focus:bg-white focus:ring-2 focus:ring-cyan-500/5"
                    rows={4}
                    placeholder="Tell us about yourself, your experience, and why you'd like to join Leadora Systems..."
                    {...register("message")}
                  />
                </div>
              </div>
            </div>

            {/* Form Trust & Security Banner */}
            <div className="flex flex-wrap gap-4 items-center justify-between p-3 rounded-xl border border-slate-100 bg-slate-50/60">
              <span className="inline-flex items-center gap-1.5 text-[11px] font-medium text-slate-500">
                <Lock className="w-3.5 h-3.5 text-cyan-500" /> Secure Connection
              </span>
              <span className="inline-flex items-center gap-1.5 text-[11px] font-medium text-slate-500">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" /> Privacy Protected
              </span>
              <span className="inline-flex items-center gap-1.5 text-[11px] font-medium text-slate-500">
                <Clock className="w-3.5 h-3.5 text-orange-500" /> 48-Hour Response Time
              </span>
            </div>

            {/* Submit Action Button */}
            <button
              type="submit"
              className="group relative flex w-full justify-center items-center gap-2 py-3 rounded-xl font-montserrat text-xs font-bold uppercase tracking-wider overflow-hidden bg-gradient-to-r from-blue to-cyan text-white shadow-md shadow-blue-500/10 hover:shadow-lg disabled:opacity-50 transition-all duration-300 cursor-pointer"
              disabled={submitting}
            >
              {submitting ? (
                <span className="flex items-center gap-2">
                  <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  Processing...
                </span>
              ) : (
                <span className="relative z-10 flex items-center justify-center gap-1.5">
                  Send Application <Send className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              )}
            </button>
          </form>
        </div>
      )}
      <Toast message={toastMessage} />
    </>
  );
}
