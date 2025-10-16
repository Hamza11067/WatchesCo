import { useEffect, useState } from "react";

export default function WhatsAppButton() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <a
      href="https://wa.me/447405918231"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-6 z-50 animate-bounce"
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
        alt="WhatsApp"
        className="w-14 h-14 rounded-full shadow-lg transition-transform duration-300 hover:scale-110"
      />
    </a>
  );
}
