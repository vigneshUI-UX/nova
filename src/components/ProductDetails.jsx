import React from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ProductDetails({ product }) {
  return (
    <div className="product-details">
      <AnimatePresence mode="wait">
        <motion.div
          key={product.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
        >
          <h2 className="product-title">{product.title}</h2>
          <p className="product-description">{product.description}</p>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}