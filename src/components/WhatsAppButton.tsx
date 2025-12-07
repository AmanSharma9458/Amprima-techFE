// src/components/WhatsAppButton.tsx

import { MessageCircle } from 'lucide-react';
import clsx from "clsx";

interface WhatsAppButtonProps {
  variant?: 'floating' | 'primary' | 'secondary';
  text?: string;
  className?: string;
}

const WhatsAppButton = ({ variant = 'floating', text, className = '' }: WhatsAppButtonProps) => {
  const WHATSAPP_GROUP_LINK = "https://chat.whatsapp.com/J6bIn10JjLjGmv4GevqCGG";

  if (variant === 'floating') {
    return (
      <a
        href={WHATSAPP_GROUP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-110 transition-all animate-bounce"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-7 h-7" />
      </a>
    );
  }

  if (variant === 'primary') {
    return (
      <a
        href={WHATSAPP_GROUP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className={clsx(
          "flex items-center justify-center gap-2 bg-green-500 text-white font-semibold rounded-xl px-6 py-3 shadow-md hover:bg-green-600 transition-all duration-200 text-lg",
          className,
          variant === "primary" && "w-full"
        )}
      >
        <MessageCircle className="w-5 h-5" />
        <span>Chat on WhatsApp</span>
      </a>
    );
  }

  return (
    <a
      href={WHATSAPP_GROUP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center space-x-2 px-6 py-3 border-2 border-green-500 text-green-600 rounded-lg hover:bg-green-50 transition-colors font-semibold ${className}`}
    >
      <MessageCircle className="w-5 h-5" />
      <span>{text || 'WhatsApp Us'}</span>
    </a>
  );
};

export default WhatsAppButton;