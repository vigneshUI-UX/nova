import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ShoppingBag } from "lucide-react";

export default function ComingSoonModal({ isOpen, onClose, product }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="modal-overlay">
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 15 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="modal-card"
            style={{ backgroundColor: product.modalBgColor }}
          >
            <button onClick={onClose} className="close-btn" aria-label="Close modal">
              <X size={18} />
            </button>

            <div className="modal-icon-box">
              <ShoppingBag size={22} />
            </div>

            <h3 className="modal-title">Coming Soon</h3>
            <p className="modal-text">
              The <strong>{product.flavor}</strong> will be available for purchase
              very soon! Stay tuned.
            </p>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}