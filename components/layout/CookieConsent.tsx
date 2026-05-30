"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie, Shield, BarChart3, Target, Check, Settings2 } from "lucide-react";

type CookieSettings = {
  essential: boolean;
  analytics: boolean;
  marketing: boolean;
};

export function CookieConsent() {
  const [mounted, setMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [settings, setSettings] = useState<CookieSettings>({
    essential: true,
    analytics: true,
    marketing: true,
  });

  useEffect(() => {
    setMounted(true);
    const consent = sessionStorage.getItem("leadora-cookie-consent");
    
    // For local testing & development, always show the popup.
    // In production, respect the sessionStorage setting.
    const isDev = process.env.NODE_ENV === "development";
    
    if (!consent || isDev) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1200);
      return () => clearTimeout(timer);
    } else {
      try {
        const savedSettings = JSON.parse(consent);
        setSettings(savedSettings);
      } catch (e) {
        // Fallback
      }
    }
  }, []);

  const handleAcceptAll = () => {
    const allSettings = { essential: true, analytics: true, marketing: true };
    setSettings(allSettings);
    sessionStorage.setItem("leadora-cookie-consent", JSON.stringify(allSettings));
    setIsVisible(false);
  };

  const handleRejectAll = () => {
    const minSettings = { essential: true, analytics: false, marketing: false };
    setSettings(minSettings);
    sessionStorage.setItem("leadora-cookie-consent", JSON.stringify(minSettings));
    setIsVisible(false);
  };

  const handleSavePreferences = () => {
    sessionStorage.setItem("leadora-cookie-consent", JSON.stringify(settings));
    setIsVisible(false);
    setShowPreferences(false);
  };

  const toggleSetting = (key: keyof CookieSettings) => {
    if (key === "essential") return;
    setSettings((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  if (!mounted) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          role="dialog"
          aria-modal="true"
          initial={{ y: 24, opacity: 0, scale: 0.98 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          exit={{ y: 16, opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-6 right-6 left-6 md:left-auto w-auto md:w-[410px] z-[120] rounded-xl border border-slate-200/80 dark:border-zinc-800/80 bg-white/95 dark:bg-zinc-950/95 p-6 shadow-[0_20px_48px_rgba(0,0,0,0.1)] dark:shadow-[0_20px_48px_rgba(0,0,0,0.45)] backdrop-blur-md"
        >
          {!showPreferences ? (
            // Linear-Style Compact Main View
            <div className="flex flex-col gap-5">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-slate-700 dark:bg-zinc-900 dark:text-zinc-300">
                  <Cookie className="h-5 w-5" />
                </div>
                <div className="space-y-1.5">
                  <h3 className="font-montserrat text-[14px] font-bold text-slate-900 dark:text-zinc-100 tracking-tight">
                    We use cookies
                  </h3>
                  <p className="font-inter text-[12px] leading-relaxed text-slate-500 dark:text-zinc-400">
                    To enhance experience, analyze performance, and serve content. See our{" "}
                    <Link
                      href="/cookies"
                      className="font-medium text-slate-900 hover:text-blue dark:text-zinc-200 dark:hover:text-blue underline underline-offset-2 transition-colors"
                    >
                      Cookie Policy
                    </Link>
                    .
                  </p>
                </div>
              </div>

              {/* Minimal Action Row */}
              <div className="flex flex-col gap-2 pt-1">
                <div className="grid grid-cols-2 gap-2.5">
                  <button
                    onClick={() => setShowPreferences(true)}
                    className="flex items-center justify-center gap-1.5 rounded-lg border border-slate-200 dark:border-zinc-800 bg-transparent px-3 py-2.5 font-montserrat text-[11px] font-bold text-slate-600 dark:text-zinc-400 hover:bg-slate-50 dark:hover:bg-zinc-900/60 transition-colors"
                  >
                    <Settings2 className="h-3.5 w-3.5" />
                    Preferences
                  </button>
                  <button
                    onClick={handleRejectAll}
                    className="rounded-lg border border-slate-200 dark:border-zinc-800 bg-transparent px-3 py-2.5 font-montserrat text-[11px] font-bold text-slate-600 dark:text-zinc-400 hover:bg-slate-50 dark:hover:bg-zinc-900/60 transition-colors"
                  >
                    Reject
                  </button>
                </div>
                <button
                  onClick={handleAcceptAll}
                  className="w-full rounded-lg bg-zinc-950 dark:bg-white text-white dark:text-zinc-950 px-3 py-2.5 font-montserrat text-[11px] font-extrabold hover:bg-zinc-800 dark:hover:bg-zinc-100 transition-colors shadow-sm"
                >
                  Accept All
                </button>
              </div>
            </div>
          ) : (
            // Linear-Style Clean Preferences Editor
            <div className="flex flex-col gap-3.5">
              <div className="flex items-center justify-between border-b border-slate-100 dark:border-zinc-900 pb-2.5">
                <div className="flex items-center gap-2">
                  <Shield className="h-3.5 w-3.5 text-slate-800 dark:text-zinc-200" />
                  <h4 className="font-montserrat text-xs font-bold text-slate-900 dark:text-zinc-100 tracking-tight">
                    Preferences
                  </h4>
                </div>
              </div>

              {/* Minimal Toggles */}
              <div className="space-y-2.5">
                {/* Essential */}
                <div className="flex items-center justify-between rounded-lg bg-slate-50/50 dark:bg-zinc-900/20 p-2.5 border border-slate-100/50 dark:border-zinc-900/30">
                  <div className="space-y-0.5 max-w-[80%]">
                    <span className="font-montserrat text-[10px] font-bold text-slate-800 dark:text-zinc-200 block">
                      Strictly Essential
                    </span>
                    <p className="font-inter text-[9.5px] leading-relaxed text-slate-450 dark:text-zinc-500">
                      Required for basic website features and consent logging.
                    </p>
                  </div>
                  <span className="font-montserrat text-[9px] font-bold text-slate-400 dark:text-zinc-500">
                    Always On
                  </span>
                </div>

                {/* Analytics */}
                <div className="flex items-center justify-between rounded-lg bg-slate-50/50 dark:bg-zinc-900/20 p-2.5 border border-slate-100/50 dark:border-zinc-900/30">
                  <div className="space-y-0.5 max-w-[80%]">
                    <span className="font-montserrat text-[10px] font-bold text-slate-800 dark:text-zinc-200 block">
                      Analytics & Performance
                    </span>
                    <p className="font-inter text-[9.5px] leading-relaxed text-slate-450 dark:text-zinc-500">
                      Anonymously tracks usage statistics to optimize page speed.
                    </p>
                  </div>
                  <button
                    onClick={() => toggleSetting("analytics")}
                    className="relative inline-flex items-center cursor-pointer focus:outline-none"
                    aria-label="Toggle analytics cookies"
                  >
                    <div
                      className={`flex h-4 w-7.5 items-center rounded-full p-0.5 transition-colors duration-150 ${
                        settings.analytics ? "bg-slate-900 dark:bg-white" : "bg-slate-200 dark:bg-zinc-800"
                      }`}
                    >
                      <div
                        className={`h-3 w-3 rounded-full bg-white dark:bg-zinc-950 shadow-sm transition-transform duration-150 ${
                          settings.analytics ? "translate-x-3.5" : "translate-x-0"
                        }`}
                      />
                    </div>
                  </button>
                </div>

                {/* Marketing */}
                <div className="flex items-center justify-between rounded-lg bg-slate-50/50 dark:bg-zinc-900/20 p-2.5 border border-slate-100/50 dark:border-zinc-900/30">
                  <div className="space-y-0.5 max-w-[80%]">
                    <span className="font-montserrat text-[10px] font-bold text-slate-800 dark:text-zinc-200 block">
                      Marketing & Targeting
                    </span>
                    <p className="font-inter text-[9.5px] leading-relaxed text-slate-450 dark:text-zinc-500">
                      Customizes advertisements and records promotional campaign feedback.
                    </p>
                  </div>
                  <button
                    onClick={() => toggleSetting("marketing")}
                    className="relative inline-flex items-center cursor-pointer focus:outline-none"
                    aria-label="Toggle marketing cookies"
                  >
                    <div
                      className={`flex h-4 w-7.5 items-center rounded-full p-0.5 transition-colors duration-150 ${
                        settings.marketing ? "bg-slate-900 dark:bg-white" : "bg-slate-200 dark:bg-zinc-800"
                      }`}
                    >
                      <div
                        className={`h-3 w-3 rounded-full bg-white dark:bg-zinc-950 shadow-sm transition-transform duration-150 ${
                          settings.marketing ? "translate-x-3.5" : "translate-x-0"
                        }`}
                      />
                    </div>
                  </button>
                </div>
              </div>

              {/* Preferences Action Footer */}
              <div className="flex items-center justify-between border-t border-slate-100 dark:border-zinc-900 pt-3">
                <button
                  onClick={() => setShowPreferences(false)}
                  className="font-montserrat text-[9.5px] font-bold text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSavePreferences}
                  className="flex items-center gap-1 rounded-lg bg-zinc-950 dark:bg-white text-white dark:text-zinc-950 px-3.5 py-1.5 font-montserrat text-[10px] font-extrabold hover:bg-zinc-800 dark:hover:bg-zinc-100 transition-colors shadow-sm"
                >
                  <Check className="h-3 w-3" />
                  Save Settings
                </button>
              </div>
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
