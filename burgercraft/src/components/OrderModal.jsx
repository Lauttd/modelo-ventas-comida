import { useState } from "react";

const DRINK_EXTRAS = [
  { id: "limonada", name: "Limonada Natural", price: 700 },
  { id: "milkshake", name: "Milkshake Oreo", price: 1200 },
  { id: "gaseosa", name: "Gaseosas", price: 500 },
];

const DELIVERY_OPTIONS = [
  { id: "pickup", label: "Retiro en local", emoji: "🏪" },
  { id: "delivery", label: "Envío a domicilio", emoji: "🛵" },
];

export default function OrderModal({ product, whatsappNumber, onClose }) {
  const [selectedDrink, setSelectedDrink] = useState(null);
  const [deliveryType, setDeliveryType] = useState(null);

  const total = product.price + (selectedDrink ? selectedDrink.price : 0);

  const handleOrder = () => {
    if (!deliveryType) return;

    let msg = `¡Hola! Me gustaría pedir *${product.name}* ($${product.price.toLocaleString("es-AR")})`;

    if (selectedDrink) {
      msg += `\n🥤 Extra: *${selectedDrink.name}* ($${selectedDrink.price.toLocaleString("es-AR")})`;
    }

    msg += `\n${deliveryType.emoji} Entrega: *${deliveryType.label}*`;
    msg += `\n\n💰 Total: *$${total.toLocaleString("es-AR")}*`;

    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank");
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-[300] flex items-center justify-center p-4 bg-black/50 backdrop-blur-[2px]"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className="bg-white rounded-2xl w-full max-w-[420px] max-h-[90vh] overflow-y-auto shadow-[0_20px_60px_rgba(0,0,0,0.3)]">
        <div className="relative">
          <img
            src={product.img}
            alt={product.name}
            className="w-full h-48 object-cover rounded-t-2xl"
          />
          <button
            onClick={onClose}
            className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 backdrop-blur-[4px] border-none cursor-pointer text-[18px] flex items-center justify-center shadow-[0_2px_8px_rgba(0,0,0,0.15)]"
          >
            ✕
          </button>
          {product.badge && (
            <span className="absolute top-3 left-3 bg-white/92 backdrop-blur-[4px] rounded-full py-[3px] px-2.5 text-[12px] font-bold text-dark shadow-[0_2px_6px_rgba(0,0,0,0.12)]">
              {product.badge}
            </span>
          )}
        </div>

        <div className="p-5">
          <h3 className="m-0 text-[20px] font-bold text-dark font-playfair">{product.name}</h3>
          <p className="mt-1 mb-4 text-[13px] text-[#888] leading-[1.5]">{product.desc}</p>

          <div className="mb-4">
            <h4 className="m-0 mb-2 text-[13px] font-bold text-dark">🥤 Extras — Bebidas</h4>
            <div className="flex flex-col gap-2">
              {DRINK_EXTRAS.map((drink) => (
                <button
                  key={drink.id}
                  onClick={() => setSelectedDrink(selectedDrink?.id === drink.id ? null : drink)}
                  className={`flex items-center justify-between p-3 rounded-xl border-[1.5px] border-solid cursor-pointer transition-all duration-200 text-left ${
                    selectedDrink?.id === drink.id
                      ? "border-brand bg-[#fff3ed]"
                      : "border-[#e8e6e0] bg-white hover:border-brand/50"
                  }`}
                >
                  <span className="text-[13px] font-semibold text-dark">{drink.name}</span>
                  <span className="text-[13px] font-bold text-brand">+${drink.price.toLocaleString("es-AR")}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="mb-5">
            <h4 className="m-0 mb-2 text-[13px] font-bold text-dark">📦 Tipo de entrega</h4>
            <div className="flex gap-2">
              {DELIVERY_OPTIONS.map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => setDeliveryType(opt)}
                  className={`flex-1 flex flex-col items-center gap-1 p-3 rounded-xl border-[1.5px] border-solid cursor-pointer transition-all duration-200 ${
                    deliveryType?.id === opt.id
                      ? "border-brand bg-[#fff3ed]"
                      : "border-[#e8e6e0] bg-white hover:border-brand/50"
                  }`}
                >
                  <span className="text-[20px]">{opt.emoji}</span>
                  <span className="text-[12px] font-semibold text-dark text-center">{opt.label}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-between mb-4 pt-3 border-t border-solid border-[#eee]">
            <span className="text-[13px] text-[#888]">Total</span>
            <span className="text-[22px] font-extrabold text-brand font-playfair">
              ${total.toLocaleString("es-AR")}
            </span>
          </div>

          <button
            onClick={handleOrder}
            disabled={!deliveryType}
            className={`w-full py-3 rounded-xl border-none text-[14px] font-bold cursor-pointer transition-all duration-200 flex items-center justify-center gap-2 ${
              deliveryType
                ? "brand-gradient text-white shadow-[0_4px_14px_rgba(255,75,31,0.35)] hover:scale-[1.02] hover:shadow-[0_6px_20px_rgba(255,75,31,0.5)]"
                : "bg-[#e8e6e0] text-[#aaa] cursor-not-allowed"
            }`}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            {deliveryType ? "Pedir por WhatsApp" : "Seleccioná tipo de entrega"}
          </button>
        </div>
      </div>
    </div>
  );
}
