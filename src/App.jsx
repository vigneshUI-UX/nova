import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PRODUCTS } from "./data/products";
import Header from "./components/Header";
import FloatingBubbles from "./components/FloatingBubbles";
import ProductDetails from "./components/ProductDetails";
import ProductSelector from "./components/ProductSelector";
import ComingSoonModal from "./components/ComingSoonModal";
import "./App.css";

export default function App() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const product = PRODUCTS[activeIndex];

  return (
    <div
      className="carousel-container"
      style={{ backgroundColor: product.bgColor }}
    >
      <FloatingBubbles accentColor={product.accentColor} />

      <Header flavor={product.flavor} />

      <main className="main-grid">
        <ProductDetails product={product} />

        <div className="center-column">
          <div className="bottle-wrapper">
            <AnimatePresence mode="wait">
              <motion.img
                key={product.id}
                src={product.image}
                alt={product.flavor}
                className="bottle-image"
                initial={{ opacity: 0, scale: 0.8, rotate: -8 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                exit={{ opacity: 0, scale: 0.8, rotate: 8 }}
                transition={{ duration: 0.45, ease: "easeOut" }}
              />
            </AnimatePresence>
          </div>
          <div className="price-tag">{product.price}</div>
        </div>

        <ProductSelector
          products={PRODUCTS}
          activeIndex={activeIndex}
          onSelect={(idx) => setActiveIndex(idx)}
          onBuyClick={() => setIsModalOpen(true)}
        />
      </main>

      <ComingSoonModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        product={product}
      />
    </div>
  );
}