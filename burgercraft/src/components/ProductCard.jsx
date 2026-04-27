import { useState, useEffect, useRef } from "react";

export default function ProductCard({ product, index, whatsappNumber }) {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setTimeout(() => setVisible(true), index * 60); obs.disconnect(); } },
      { threshold: 0.1 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [index]);

  const openWhatsApp = (productName, price) => {
    const msg = `¡Hola! Me gustaría pedir *${productName}* que vi en su catálogo online. El precio es $${price.toLocaleString("es-AR")}.`;
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank");
  };

  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(28px)",
        transition: "opacity 0.45s ease, transform 0.45s ease",
      }}
      className="bg-white rounded-2xl overflow-hidden shadow-[0_2px_12px_rgba(0,0,0,0.08)] flex flex-col cursor-pointer transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.15)] hover:-translate-y-1 group"
    >
      <div className="relative pb-[68%] overflow-hidden bg-bg-card">
        <img
          src={product.img}
          alt={product.name}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-400 group-hover:scale-[1.07]"
        />
        {product.badge && (
          <span className="absolute top-2.5 left-2.5 bg-white/92 backdrop-blur-[4px] rounded-full py-[3px] px-2.5 text-[11px] font-bold text-dark shadow-[0_2px_6px_rgba(0,0,0,0.12)] tracking-[0.02em]">
            {product.badge}
          </span>
        )}
      </div>
      <div className="p-3 flex-1 flex flex-col gap-1.5">
        <h3 className="m-0 text-[14px] font-bold text-dark leading-[1.2] font-playfair">
          {product.name}
        </h3>
        <p className="m-0 text-[11px] text-[#888] leading-[1.5] flex-1">
          {product.desc}
        </p>
        <div className="flex items-center justify-between mt-2 gap-2">
          <span className="text-[17px] font-extrabold text-brand font-playfair">
            ${product.price.toLocaleString("es-AR")}
          </span>
          <button
            onClick={() => openWhatsApp(product.name, product.price)}
            className="brand-gradient text-white border-none rounded-[10px] py-[7px] px-3 text-[11px] font-bold cursor-pointer whitespace-nowrap transition-all duration-150 shadow-[0_3px_10px_rgba(255,75,31,0.35)] hover:scale-105 hover:shadow-[0_5px_16px_rgba(255,75,31,0.5)]"
          >
            Pedir →
          </button>
        </div>
      </div>
    </div>
  );
}
