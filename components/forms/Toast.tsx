"use client";

import { useEffect, useState } from "react";

export function useToast() {
  const [message, setMessage] = useState<string | null>(null);

  const show = (msg: string) => {
    setMessage(msg);
    setTimeout(() => setMessage(null), 3500);
  };

  return { message, show };
}

export function Toast({ message }: { message: string | null }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (message) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [message]);

  if (!message) return null;

  return (
    <div
      className="fixed bottom-8 right-8 z-[9999] rounded-[10px] bg-grad px-6 py-3.5 text-sm font-semibold text-white shadow-[0_8px_32px_rgba(30,111,255,0.4)] transition"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(10px)",
      }}
      role="status"
    >
      {message}
    </div>
  );
}
