import { useEffect } from 'react';
import { X } from 'lucide-react';

/**
 * Full-screen modal for legal content (Privacy, Terms, Refund).
 * Closes on Escape, click-outside, or X button.
 * Locks body scroll while open.
 */
export default function LegalModal({ open, onClose, title, lastUpdated, children }) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-stretch justify-center bg-navy-900/80 backdrop-blur-sm sm:items-center sm:p-6"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="legal-modal-title"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative flex h-full w-full max-w-4xl flex-col overflow-hidden rounded-none bg-white shadow-card-xl sm:h-[90vh] sm:rounded-2xl"
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-navy-100 bg-gradient-to-r from-white to-brand-bg px-6 py-5 sm:px-8">
          <div>
            <h2
              id="legal-modal-title"
              className="font-display text-2xl font-bold text-navy-900 sm:text-3xl"
            >
              {title}
            </h2>
            {lastUpdated && (
              <p className="mt-1 text-xs text-navy-500">
                Last updated: {lastUpdated}
              </p>
            )}
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-navy-200 bg-white text-navy-700 transition hover:border-navy-900 hover:bg-navy-900 hover:text-white"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto px-6 py-6 sm:px-8 sm:py-8">
          <div className="prose-legal max-w-none text-base leading-relaxed text-navy-700">
            {children}
          </div>
        </div>

        {/* Footer with disclaimer */}
        <div className="border-t border-navy-100 bg-navy-50 px-6 py-3 text-center sm:px-8">
          <p className="text-[11px] text-navy-500">
            This document is provided for transparency. For legally binding
            terms applicable to your institution, please refer to the signed
            Service Agreement.
          </p>
        </div>
      </div>
    </div>
  );
}
