export const categories = [
  { id: "all", label: "Todo", emoji: "🍽️" },
  { id: "burgers", label: "Hamburguesas", emoji: "🍔" },
  { id: "pizzas", label: "Pizzas", emoji: "🍕" },
  { id: "sides", label: "Acompañamientos", emoji: "🍟" },
  { id: "drinks", label: "Bebidas", emoji: "🥤" },
  { id: "desserts", label: "Postres", emoji: "🍰" },
];

export const products = [
  {
    id: 1, category: "burgers", name: "Burger Clásica", price: 2500,
    desc: "Medallón angus 200g, cheddar derretido, lechuga, tomate, cebolla y nuestra salsa secreta",
    img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80",
    badge: "🔥 Favorita",
  },
  {
    id: 2, category: "burgers", name: "Doble BBQ", price: 3200,
    desc: "Doble medallón 400g, bacon crocante, aros de cebolla, queso suizo y salsa BBQ artesanal",
    img: "https://api-middleware-mcd.mcdonaldscupones.com/media/image/product$kQXnpmyG/200/200/original?country=ar",
    badge: "⭐ Premium",
  },
  {
    id: 3, category: "burgers", name: "Mushroom Swiss", price: 2900,
    desc: "Medallón angus, hongos salteados al ajo, queso suizo fundido y rúcula fresca",
    img: "https://images.unsplash.com/photo-1586816001966-79b736744398?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4, category: "burgers", name: "Crispy Chicken", price: 2700,
    desc: "Pechuga apanada crocante, coleslaw casero, pepinillos y mayo de limón",
    img: "https://images.unsplash.com/photo-1606755962773-d324e0a13086?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 5, category: "pizzas", name: "Margherita", price: 3000,
    desc: "Salsa pomodoro, mozzarella fior di latte, albahaca fresca y aceite de oliva virgen",
    img: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=800&q=80",
    badge: "🌿 Vegetariana",
  },
  {
    id: 6, category: "pizzas", name: "4 Quesos", price: 3500,
    desc: "Mozzarella, gorgonzola, parmesano y brie sobre base de crema de ajo",
    img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80",
    badge: "⭐ Premium",
  },
  {
    id: 7, category: "pizzas", name: "BBQ Pollo", price: 3200,
    desc: "Pollo grillado, cebolla morada, mozzarella, jalapeños y salsa BBQ casera",
    img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 8, category: "pizzas", name: "Pepperoni", price: 3100,
    desc: "Doble pepperoni, mozzarella extra, orégano y toques de ají molido",
    img: "https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=800&q=80",
    badge: "🔥 Favorita",
  },
  {
    id: 9, category: "sides", name: "Papas Rústicas", price: 900,
    desc: "Papas con cáscara, sazonadas con herbs & spices y sal marina en escamas",
    img: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 10, category: "sides", name: "Aros de Cebolla", price: 950,
    desc: "Cebolla dulce, rebozado crocante de cerveza, con dip de ranch casero",
    img: "https://images.unsplash.com/photo-1639024471283-03518883512d?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 11, category: "sides", name: "Nuggets x8", price: 1100,
    desc: "Nuggets de pechuga artesanal, apanado crujiente con salsas a elección",
    img: "https://images.unsplash.com/photo-1562802378-063ec186a863?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 12, category: "drinks", name: "Limonada Natural", price: 700,
    desc: "Limón exprimido al momento, menta fresca, azúcar de caña y soda bien fría",
    img: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 13, category: "drinks", name: "Milkshake Oreo", price: 1200,
    desc: "Helado de vainilla, Oreo triturada, leche entera y crema montada",
    img: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=800&q=80",
    badge: "🔥 Favorita",
  },
  {
    id: 14, category: "drinks", name: "Gaseosas", price: 500,
    desc: "Coca-Cola, Sprite, Fanta o agua mineral — fría y lista",
    img: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 15, category: "desserts", name: "Brownie Fundente", price: 1100,
    desc: "Brownie caliente de chocolate 70%, bola de helado de vainilla y caramelo salado",
    img: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=800&q=80",
    badge: "⭐ Premium",
  },
  {
    id: 16, category: "desserts", name: "Cheesecake Frutos", price: 1000,
    desc: "Base de galleta, relleno cremoso de queso y coulis de frutos rojos frescos",
    img: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=800&q=80",
  },
];
