(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/lib/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn,
    "formatPrice",
    ()=>formatPrice,
    "slugify",
    ()=>slugify
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
function formatPrice(price) {
    return `PKR ${price.toLocaleString("en-PK")}`;
}
function slugify(text) {
    return text.toLowerCase().replace(/[^\w\s-]/g, "").replace(/\s+/g, "-").replace(/--+/g, "-").trim();
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
;
/**
 * Button component with AYAN Cosmetics brand styling
 * Primary green (#00b140) for main actions like "Order on WhatsApp"
 */ const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
    variants: {
        variant: {
            // Primary green button - Use for WhatsApp order buttons
            default: "bg-primary text-primary-foreground hover:bg-primary-600 shadow-lg hover:shadow-xl transition-all duration-300",
            destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
            outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
            secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground",
            link: "text-primary underline-offset-4 hover:underline",
            // Gold accent button - Use for premium highlights
            gold: "bg-gold text-black hover:bg-gold-600 shadow-gold transition-all duration-300",
            // WhatsApp green button - Specific for WhatsApp actions
            whatsapp: "bg-[#25D366] text-white hover:bg-[#128C7E] shadow-lg hover:shadow-xl transition-all duration-300",
            // Glassmorphism button
            glass: "bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition-all duration-300"
        },
        size: {
            default: "h-10 px-4 py-2",
            sm: "h-9 rounded-md px-3",
            lg: "h-11 rounded-md px-8",
            xl: "h-14 rounded-lg px-10 text-lg font-semibold",
            icon: "h-10 w-10"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
const Button = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c = ({ className, variant, size, asChild = false, ...props }, ref)=>{
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : "button";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ref: ref,
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/button.tsx",
        lineNumber: 61,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
});
_c1 = Button;
Button.displayName = "Button";
;
var _c, _c1;
__turbopack_context__.k.register(_c, "Button$React.forwardRef");
__turbopack_context__.k.register(_c1, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/CartContext.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CartProvider",
    ()=>CartProvider,
    "useCart",
    ()=>useCart
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
const CartContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
function CartProvider({ children }) {
    _s();
    const [items, setItems] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Load cart from localStorage on mount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CartProvider.useEffect": ()=>{
            try {
                const saved = localStorage.getItem("ayan-cart");
                if (saved) {
                    setItems(JSON.parse(saved));
                }
            } catch  {
            // ignore parse errors
            }
        }
    }["CartProvider.useEffect"], []);
    // Save cart to localStorage on change
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CartProvider.useEffect": ()=>{
            localStorage.setItem("ayan-cart", JSON.stringify(items));
        }
    }["CartProvider.useEffect"], [
        items
    ]);
    const addToCart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "CartProvider.useCallback[addToCart]": (product)=>{
            setItems({
                "CartProvider.useCallback[addToCart]": (prev)=>{
                    const existing = prev.find({
                        "CartProvider.useCallback[addToCart].existing": (item)=>item.product.id === product.id
                    }["CartProvider.useCallback[addToCart].existing"]);
                    if (existing) {
                        return prev.map({
                            "CartProvider.useCallback[addToCart]": (item)=>item.product.id === product.id ? {
                                    ...item,
                                    quantity: item.quantity + 1
                                } : item
                        }["CartProvider.useCallback[addToCart]"]);
                    }
                    return [
                        ...prev,
                        {
                            product,
                            quantity: 1
                        }
                    ];
                }
            }["CartProvider.useCallback[addToCart]"]);
            setIsOpen(true);
        }
    }["CartProvider.useCallback[addToCart]"], []);
    const removeFromCart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "CartProvider.useCallback[removeFromCart]": (productId)=>{
            setItems({
                "CartProvider.useCallback[removeFromCart]": (prev)=>prev.filter({
                        "CartProvider.useCallback[removeFromCart]": (item)=>item.product.id !== productId
                    }["CartProvider.useCallback[removeFromCart]"])
            }["CartProvider.useCallback[removeFromCart]"]);
        }
    }["CartProvider.useCallback[removeFromCart]"], []);
    const updateQuantity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "CartProvider.useCallback[updateQuantity]": (productId, quantity)=>{
            if (quantity <= 0) {
                setItems({
                    "CartProvider.useCallback[updateQuantity]": (prev)=>prev.filter({
                            "CartProvider.useCallback[updateQuantity]": (item)=>item.product.id !== productId
                        }["CartProvider.useCallback[updateQuantity]"])
                }["CartProvider.useCallback[updateQuantity]"]);
                return;
            }
            setItems({
                "CartProvider.useCallback[updateQuantity]": (prev)=>prev.map({
                        "CartProvider.useCallback[updateQuantity]": (item)=>item.product.id === productId ? {
                                ...item,
                                quantity
                            } : item
                    }["CartProvider.useCallback[updateQuantity]"])
            }["CartProvider.useCallback[updateQuantity]"]);
        }
    }["CartProvider.useCallback[updateQuantity]"], []);
    const clearCart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "CartProvider.useCallback[clearCart]": ()=>{
            setItems([]);
        }
    }["CartProvider.useCallback[clearCart]"], []);
    const totalItems = items.reduce((sum, item)=>sum + item.quantity, 0);
    const toggleCart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "CartProvider.useCallback[toggleCart]": ()=>setIsOpen({
                "CartProvider.useCallback[toggleCart]": (prev)=>!prev
            }["CartProvider.useCallback[toggleCart]"])
    }["CartProvider.useCallback[toggleCart]"], []);
    const closeCart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "CartProvider.useCallback[closeCart]": ()=>setIsOpen(false)
    }["CartProvider.useCallback[closeCart]"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CartContext.Provider, {
        value: {
            items,
            addToCart,
            removeFromCart,
            updateQuantity,
            clearCart,
            totalItems,
            isOpen,
            toggleCart,
            closeCart
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/lib/CartContext.tsx",
        lineNumber: 87,
        columnNumber: 5
    }, this);
}
_s(CartProvider, "EoWW0a+MwPVrWR+tpqGx/hBVeu4=");
_c = CartProvider;
function useCart() {
    _s1();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(CartContext);
    if (!context) {
        throw new Error("useCart must be used within CartProvider");
    }
    return context;
}
_s1(useCart, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
var _c;
__turbopack_context__.k.register(_c, "CartProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Navbar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Navbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/menu.js [app-client] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$bag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingBag$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shopping-bag.js [app-client] (ecmascript) <export default as ShoppingBag>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/phone.js [app-client] (ecmascript) <export default as Phone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$cart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingCart$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shopping-cart.js [app-client] (ecmascript) <export default as ShoppingCart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$CartContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/CartContext.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
const navLinks = [
    {
        href: "/",
        label: "Home"
    },
    {
        href: "/shop",
        label: "Shop"
    },
    {
        href: "/about",
        label: "About Us"
    },
    {
        href: "/contact",
        label: "Contact"
    }
];
function Navbar() {
    _s();
    const [isMenuOpen, setIsMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isScrolled, setIsScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const { totalItems, toggleCart } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$CartContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCart"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Navbar.useEffect": ()=>{
            const handleScroll = {
                "Navbar.useEffect.handleScroll": ()=>{
                    setIsScrolled(window.scrollY > 20);
                }
            }["Navbar.useEffect.handleScroll"];
            window.addEventListener("scroll", handleScroll);
            return ({
                "Navbar.useEffect": ()=>window.removeEventListener("scroll", handleScroll)
            })["Navbar.useEffect"];
        }
    }["Navbar.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("fixed top-0 left-0 right-0 z-50 transition-all duration-300", // Dono colors ko #00B140 kar diya hai taake logo blend ho jaye
        isScrolled ? "bg-[#00B140]/95 backdrop-blur-md shadow-lg py-2" : "bg-[#00B140] py-4"),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container mx-auto px-4 sm:px-6 lg:px-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between h-16 md:h-20",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/",
                            className: "flex items-center group",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    src: "/images/products/logo.png",
                                    alt: "AYAN Cosmetics Logo",
                                    width: 160,
                                    height: 60,
                                    className: "h-12 md:h-16 w-auto object-contain",
                                    priority: true
                                }, void 0, false, {
                                    fileName: "[project]/components/Navbar.tsx",
                                    lineNumber: 47,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/Navbar.tsx",
                                lineNumber: 46,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/Navbar.tsx",
                            lineNumber: 45,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "hidden md:flex items-center space-x-8",
                            children: [
                                navLinks.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: link.href,
                                        className: "text-sm font-bold text-white transition-colors hover:text-black/70",
                                        children: link.label
                                    }, link.href, false, {
                                        fileName: "[project]/components/Navbar.tsx",
                                        lineNumber: 61,
                                        columnNumber: 15
                                    }, this)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/deals",
                                    className: "relative inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-sm font-bold text-white transition-all hover:scale-105 hover:brightness-110",
                                    style: {
                                        background: "linear-gradient(135deg, #ff3b3b 0%, #cc0000 100%)",
                                        boxShadow: "0 2px 14px rgba(220,0,0,0.45)"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "absolute inset-0 rounded-full animate-ping opacity-20 pointer-events-none",
                                            style: {
                                                background: "#ff3b3b"
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/components/Navbar.tsx",
                                            lineNumber: 73,
                                            columnNumber: 15
                                        }, this),
                                        "🔥 Deals"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Navbar.tsx",
                                    lineNumber: 71,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Navbar.tsx",
                            lineNumber: 59,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "hidden md:flex items-center space-x-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "tel:0333-2304145",
                                    className: "flex items-center gap-2 text-sm font-bold text-white hover:text-black/70 transition-colors",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                                            className: "h-4 w-4"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Navbar.tsx",
                                            lineNumber: 84,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "0333-2304145"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Navbar.tsx",
                                            lineNumber: 85,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Navbar.tsx",
                                    lineNumber: 80,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/shop",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        variant: "ghost",
                                        size: "icon",
                                        className: "text-white hover:bg-white/20",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                            className: "h-5 w-5"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Navbar.tsx",
                                            lineNumber: 94,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/Navbar.tsx",
                                        lineNumber: 89,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/Navbar.tsx",
                                    lineNumber: 88,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: toggleCart,
                                    className: "relative p-2 text-white hover:bg-white/20 rounded-full transition-colors",
                                    "aria-label": "Open cart",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$cart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingCart$3e$__["ShoppingCart"], {
                                            className: "h-5 w-5"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Navbar.tsx",
                                            lineNumber: 104,
                                            columnNumber: 15
                                        }, this),
                                        totalItems > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "absolute -top-1 -right-1 bg-[#e60012] text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center",
                                            children: totalItems
                                        }, void 0, false, {
                                            fileName: "[project]/components/Navbar.tsx",
                                            lineNumber: 106,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Navbar.tsx",
                                    lineNumber: 99,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/shop",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        className: "bg-white text-[#00B140] hover:bg-black hover:text-white font-bold rounded-full gap-2 transition-all shadow-lg border-none",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$bag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingBag$3e$__["ShoppingBag"], {
                                                className: "h-4 w-4"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Navbar.tsx",
                                                lineNumber: 116,
                                                columnNumber: 17
                                            }, this),
                                            "Shop Now"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Navbar.tsx",
                                        lineNumber: 113,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/Navbar.tsx",
                                    lineNumber: 112,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Navbar.tsx",
                            lineNumber: 79,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setIsMenuOpen(!isMenuOpen),
                            className: "md:hidden p-2 rounded-lg text-white hover:bg-white/10 transition-colors",
                            "aria-label": "Toggle menu",
                            children: isMenuOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                className: "h-6 w-6"
                            }, void 0, false, {
                                fileName: "[project]/components/Navbar.tsx",
                                lineNumber: 128,
                                columnNumber: 27
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                                className: "h-6 w-6"
                            }, void 0, false, {
                                fileName: "[project]/components/Navbar.tsx",
                                lineNumber: 128,
                                columnNumber: 55
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/Navbar.tsx",
                            lineNumber: 123,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Navbar.tsx",
                    lineNumber: 43,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("md:hidden overflow-hidden transition-all duration-300 bg-[#00B140] rounded-b-2xl shadow-2xl", isMenuOpen ? "max-h-96 pb-6" : "max-h-0"),
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col space-y-2 pt-4 border-t border-white/20",
                        children: [
                            navLinks.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: link.href,
                                    onClick: ()=>setIsMenuOpen(false),
                                    className: "px-4 py-3 text-white font-bold hover:bg-white/10 rounded-lg transition-colors",
                                    children: link.label
                                }, link.href, false, {
                                    fileName: "[project]/components/Navbar.tsx",
                                    lineNumber: 141,
                                    columnNumber: 15
                                }, this)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/deals",
                                onClick: ()=>setIsMenuOpen(false),
                                className: "mx-4 py-3 rounded-xl text-center text-white font-bold transition-all hover:brightness-110",
                                style: {
                                    background: "linear-gradient(135deg, #ff3b3b 0%, #cc0000 100%)",
                                    boxShadow: "0 2px 10px rgba(220,0,0,0.4)"
                                },
                                children: "🔥 Deals — Limited Time Offers"
                            }, void 0, false, {
                                fileName: "[project]/components/Navbar.tsx",
                                lineNumber: 152,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "px-4 py-3 border-t border-white/10 mt-2",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "tel:0333-2304145",
                                    className: "flex items-center gap-2 text-white font-bold",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                                            className: "h-4 w-4"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Navbar.tsx",
                                            lineNumber: 160,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "0333-2304145"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Navbar.tsx",
                                            lineNumber: 161,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Navbar.tsx",
                                    lineNumber: 159,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/Navbar.tsx",
                                lineNumber: 158,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "px-4 py-2",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>{
                                        toggleCart();
                                        setIsMenuOpen(false);
                                    },
                                    className: "w-full flex items-center justify-between px-4 py-3 bg-white/10 hover:bg-white/20 rounded-lg transition-colors text-white font-bold",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$cart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingCart$3e$__["ShoppingCart"], {
                                                    className: "h-5 w-5"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Navbar.tsx",
                                                    lineNumber: 172,
                                                    columnNumber: 19
                                                }, this),
                                                "Cart"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/Navbar.tsx",
                                            lineNumber: 171,
                                            columnNumber: 17
                                        }, this),
                                        totalItems > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "bg-[#e60012] text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center",
                                            children: totalItems
                                        }, void 0, false, {
                                            fileName: "[project]/components/Navbar.tsx",
                                            lineNumber: 176,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Navbar.tsx",
                                    lineNumber: 167,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/Navbar.tsx",
                                lineNumber: 166,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "pt-2 px-4",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/shop",
                                    onClick: ()=>setIsMenuOpen(false),
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        className: "w-full bg-white text-[#00B140] hover:bg-black hover:text-white font-bold rounded-full gap-2 shadow-md border-none",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$bag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingBag$3e$__["ShoppingBag"], {
                                                className: "h-4 w-4"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Navbar.tsx",
                                                lineNumber: 186,
                                                columnNumber: 19
                                            }, this),
                                            "Shop Now"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Navbar.tsx",
                                        lineNumber: 185,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/Navbar.tsx",
                                    lineNumber: 184,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/Navbar.tsx",
                                lineNumber: 183,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Navbar.tsx",
                        lineNumber: 139,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/Navbar.tsx",
                    lineNumber: 133,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/Navbar.tsx",
            lineNumber: 42,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/Navbar.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
_s(Navbar, "TPXeRK/WrYewGGpGtFmAcW5XGAo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$CartContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCart"]
    ];
});
_c = Navbar;
var _c;
__turbopack_context__.k.register(_c, "Navbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/whatsapp.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * WhatsApp Integration Utilities for AYAN Cosmetics
 */ // 1. ORDER Number (Used for Add to Cart / Buy Now)
// Is number par product ka order jaye ga
__turbopack_context__.s([
    "CONTACT_NUMBER",
    ()=>CONTACT_NUMBER,
    "ORDER_NUMBER",
    ()=>ORDER_NUMBER,
    "SHOP_CONTACT",
    ()=>SHOP_CONTACT,
    "generateGeneralWhatsAppLink",
    ()=>generateGeneralWhatsAppLink,
    "generateInquiryLink",
    ()=>generateInquiryLink,
    "generateWhatsAppLink",
    ()=>generateWhatsAppLink
]);
const ORDER_NUMBER = "923242162485";
const CONTACT_NUMBER = "923332304145";
const SHOP_CONTACT = {
    name: "Rehan bhai",
    phone: "0333-2304145",
    whatsapp: CONTACT_NUMBER,
    instagram: "@AYANCOSMETICS.OFFICIAL"
};
function generateWhatsAppLink(productName, price) {
    const priceText = price ? ` for Rs. ${price}` : "";
    const message = `Assalam-o-Alaikum AYAN Cosmetics, I want to order: ${productName}${priceText}`;
    const encodedMessage = encodeURIComponent(message);
    return `https://wa.me/${ORDER_NUMBER}?text=${encodedMessage}`;
}
function generateGeneralWhatsAppLink() {
    const message = "Assalam-o-Alaikum AYAN Cosmetics! I'm interested in your products.";
    const encodedMessage = encodeURIComponent(message);
    return `https://wa.me/${CONTACT_NUMBER}?text=${encodedMessage}`;
}
function generateInquiryLink(productName) {
    const message = `Hi AYAN Cosmetics! I have a question about ${productName}. Is it available?`;
    const encodedMessage = encodeURIComponent(message);
    return `https://wa.me/${CONTACT_NUMBER}?text=${encodedMessage}`;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/WhatsAppButton.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>WhatsAppButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/message-circle.js [app-client] (ecmascript) <export default as MessageCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$whatsapp$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/whatsapp.ts [app-client] (ecmascript)");
"use client";
;
;
;
function WhatsAppButton() {
    const whatsappLink = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$whatsapp$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateGeneralWhatsAppLink"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
        href: whatsappLink,
        target: "_blank",
        rel: "noopener noreferrer",
        className: "fixed bottom-6 right-6 z-50 group",
        "aria-label": "Contact us on WhatsApp",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "absolute right-full mr-3 top-1/2 -translate-y-1/2 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none",
                children: [
                    "Chat with us!",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "absolute top-1/2 -translate-y-1/2 -right-2 border-8 border-transparent border-l-gray-900"
                    }, void 0, false, {
                        fileName: "[project]/components/WhatsAppButton.tsx",
                        lineNumber: 35,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/WhatsAppButton.tsx",
                lineNumber: 32,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25"
                    }, void 0, false, {
                        fileName: "[project]/components/WhatsAppButton.tsx",
                        lineNumber: 41,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#128C7E] rounded-full shadow-lg whatsapp-pulse transition-all duration-300 hover:scale-110",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__["MessageCircle"], {
                            className: "h-7 w-7 text-white",
                            fill: "white"
                        }, void 0, false, {
                            fileName: "[project]/components/WhatsAppButton.tsx",
                            lineNumber: 45,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/WhatsAppButton.tsx",
                        lineNumber: 44,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/WhatsAppButton.tsx",
                lineNumber: 39,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/WhatsAppButton.tsx",
        lineNumber: 24,
        columnNumber: 5
    }, this);
}
_c = WhatsAppButton;
var _c;
__turbopack_context__.k.register(_c, "WhatsAppButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/CookieConsent.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CookieConsent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cookie$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cookie$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/cookie.js [app-client] (ecmascript) <export default as Cookie>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function CookieConsent() {
    _s();
    const [showBanner, setShowBanner] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Check if user has already made a choice
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CookieConsent.useEffect": ()=>{
            const consent = localStorage.getItem("ayan-cookie-consent");
            if (!consent) {
                // Small delay before showing for better UX
                const timer = setTimeout({
                    "CookieConsent.useEffect.timer": ()=>setShowBanner(true)
                }["CookieConsent.useEffect.timer"], 1500);
                return ({
                    "CookieConsent.useEffect": ()=>clearTimeout(timer)
                })["CookieConsent.useEffect"];
            }
        }
    }["CookieConsent.useEffect"], []);
    // Handle user consent choice
    const handleConsent = (accepted)=>{
        localStorage.setItem("ayan-cookie-consent", JSON.stringify({
            accepted,
            timestamp: new Date().toISOString()
        }));
        setShowBanner(false);
    };
    // Don't render if banner shouldn't be shown
    if (!showBanner) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed bottom-0 left-0 right-0 z-40 p-4 transition-transform duration-500",
        style: {
            transform: showBanner ? "translateY(0)" : "translateY(100%)"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-4xl mx-auto",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white rounded-xl shadow-xl border border-gray-100 p-4 md:p-5",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col md:flex-row items-start md:items-center gap-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-start gap-3 flex-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-2 bg-primary/10 rounded-lg flex-shrink-0",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cookie$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cookie$3e$__["Cookie"], {
                                        className: "h-5 w-5 text-primary"
                                    }, void 0, false, {
                                        fileName: "[project]/components/CookieConsent.tsx",
                                        lineNumber: 61,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/CookieConsent.tsx",
                                    lineNumber: 60,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "font-medium text-gray-900 mb-1",
                                            children: "We use cookies"
                                        }, void 0, false, {
                                            fileName: "[project]/components/CookieConsent.tsx",
                                            lineNumber: 64,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-gray-600 leading-relaxed",
                                            children: 'We use cookies to enhance your browsing experience and analyze our traffic. By clicking "Accept All", you consent to our use of cookies.'
                                        }, void 0, false, {
                                            fileName: "[project]/components/CookieConsent.tsx",
                                            lineNumber: 67,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/CookieConsent.tsx",
                                    lineNumber: 63,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/CookieConsent.tsx",
                            lineNumber: 59,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3 w-full md:w-auto",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "outline",
                                    size: "sm",
                                    onClick: ()=>handleConsent(false),
                                    className: "flex-1 md:flex-none",
                                    children: "Reject All"
                                }, void 0, false, {
                                    fileName: "[project]/components/CookieConsent.tsx",
                                    lineNumber: 77,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    size: "sm",
                                    onClick: ()=>handleConsent(true),
                                    className: "flex-1 md:flex-none",
                                    children: "Accept All"
                                }, void 0, false, {
                                    fileName: "[project]/components/CookieConsent.tsx",
                                    lineNumber: 85,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setShowBanner(false),
                                    className: "p-1 hover:bg-gray-100 rounded-full transition-colors",
                                    "aria-label": "Close cookie banner",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                        className: "h-5 w-5 text-gray-400"
                                    }, void 0, false, {
                                        fileName: "[project]/components/CookieConsent.tsx",
                                        lineNumber: 99,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/CookieConsent.tsx",
                                    lineNumber: 94,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/CookieConsent.tsx",
                            lineNumber: 76,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/CookieConsent.tsx",
                    lineNumber: 57,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/CookieConsent.tsx",
                lineNumber: 56,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/CookieConsent.tsx",
            lineNumber: 55,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/CookieConsent.tsx",
        lineNumber: 49,
        columnNumber: 5
    }, this);
}
_s(CookieConsent, "1grwDPkfvitbAJm4HZFczy8eoqw=");
_c = CookieConsent;
var _c;
__turbopack_context__.k.register(_c, "CookieConsent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/FloatingCart.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FloatingCart
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$minus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Minus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/minus.js [app-client] (ecmascript) <export default as Minus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$cart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingCart$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shopping-cart.js [app-client] (ecmascript) <export default as ShoppingCart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$CartContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/CartContext.tsx [app-client] (ecmascript)");
// Yahan humne purana WHATSAPP_NUMBER hata kar ORDER_NUMBER import kiya hai
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$whatsapp$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/whatsapp.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function FloatingCart() {
    _s();
    const { items, isOpen, toggleCart, closeCart, updateQuantity, removeFromCart } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$CartContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCart"])();
    const handleCheckout = ()=>{
        if (items.length === 0) return;
        let message = "*🛍️ New Order from AYAN Cosmetics*\n\n";
        items.forEach((item, index)=>{
            message += `${index + 1}. *${item.product.name}*\n`;
            message += `    Qty: ${item.quantity}\n\n`;
        });
        message += `───────────────\n`;
        message += `Please confirm prices and availability. Thank you!`;
        const encoded = encodeURIComponent(message);
        // Yahan ORDER_NUMBER use ho raha hai jo export ho chuka hai
        window.open(`https://wa.me/${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$whatsapp$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ORDER_NUMBER"]}?text=${encoded}`, "_blank");
    };
    if (items.length === 0 && !isOpen) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            !isOpen && items.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: toggleCart,
                className: "fixed bottom-6 right-6 z-50 bg-[#00b140] text-white p-4 rounded-full shadow-2xl hover:bg-[#009936] transition-all hover:scale-110",
                "aria-label": "Open cart",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$cart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingCart$3e$__["ShoppingCart"], {
                        className: "h-6 w-6"
                    }, void 0, false, {
                        fileName: "[project]/components/FloatingCart.tsx",
                        lineNumber: 40,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "absolute -top-1 -right-1 bg-[#e60012] text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center",
                        children: items.reduce((sum, item)=>sum + item.quantity, 0)
                    }, void 0, false, {
                        fileName: "[project]/components/FloatingCart.tsx",
                        lineNumber: 41,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/FloatingCart.tsx",
                lineNumber: 35,
                columnNumber: 9
            }, this),
            isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "fixed inset-0 bg-black/50 z-40",
                        onClick: closeCart
                    }, void 0, false, {
                        fileName: "[project]/components/FloatingCart.tsx",
                        lineNumber: 51,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl z-50 flex flex-col",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between p-6 border-b border-[#00b140]/20",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-xl font-bold text-gray-900",
                                        children: [
                                            "Shopping Cart (",
                                            items.length,
                                            ")"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/FloatingCart.tsx",
                                        lineNumber: 57,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: closeCart,
                                        className: "p-2 hover:bg-gray-100 rounded-full",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                            className: "h-5 w-5"
                                        }, void 0, false, {
                                            fileName: "[project]/components/FloatingCart.tsx",
                                            lineNumber: 59,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/FloatingCart.tsx",
                                        lineNumber: 58,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/FloatingCart.tsx",
                                lineNumber: 56,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1 overflow-y-auto p-6 space-y-4",
                                children: items.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex gap-4 p-4 bg-[#f7fff9] rounded-xl border border-[#00b140]/20",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0 bg-gray-100",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    src: item.product.image,
                                                    alt: item.product.name,
                                                    fill: true,
                                                    className: "object-cover"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/FloatingCart.tsx",
                                                    lineNumber: 69,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/FloatingCart.tsx",
                                                lineNumber: 68,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex-1 min-w-0",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "font-semibold text-gray-900 text-sm truncate",
                                                        children: item.product.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/FloatingCart.tsx",
                                                        lineNumber: 74,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-3 mt-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>updateQuantity(item.product.id, item.quantity - 1),
                                                                className: "p-1 hover:bg-white rounded transition-colors",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$minus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Minus$3e$__["Minus"], {
                                                                    className: "h-4 w-4"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/FloatingCart.tsx",
                                                                    lineNumber: 82,
                                                                    columnNumber: 25
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/FloatingCart.tsx",
                                                                lineNumber: 78,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-bold text-sm w-6 text-center",
                                                                children: item.quantity
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/FloatingCart.tsx",
                                                                lineNumber: 84,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>updateQuantity(item.product.id, item.quantity + 1),
                                                                className: "p-1 hover:bg-white rounded transition-colors",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                                    className: "h-4 w-4"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/FloatingCart.tsx",
                                                                    lineNumber: 89,
                                                                    columnNumber: 25
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/FloatingCart.tsx",
                                                                lineNumber: 85,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>removeFromCart(item.product.id),
                                                                className: "ml-auto p-1 text-[#e60012] hover:bg-white rounded transition-colors",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                                    className: "h-4 w-4"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/FloatingCart.tsx",
                                                                    lineNumber: 95,
                                                                    columnNumber: 25
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/FloatingCart.tsx",
                                                                lineNumber: 91,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/FloatingCart.tsx",
                                                        lineNumber: 77,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/FloatingCart.tsx",
                                                lineNumber: 73,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, item.product.id, true, {
                                        fileName: "[project]/components/FloatingCart.tsx",
                                        lineNumber: 66,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/FloatingCart.tsx",
                                lineNumber: 64,
                                columnNumber: 13
                            }, this),
                            items.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-6 border-t border-[#00b140]/20 space-y-4 bg-white",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-sm font-medium text-gray-600",
                                            children: "Prices will be confirmed on WhatsApp"
                                        }, void 0, false, {
                                            fileName: "[project]/components/FloatingCart.tsx",
                                            lineNumber: 107,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/FloatingCart.tsx",
                                        lineNumber: 106,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: handleCheckout,
                                        className: "w-full bg-[#00b140] text-white font-black py-4 rounded-xl hover:bg-[#009936] transition-all shadow-lg uppercase tracking-widest text-sm",
                                        children: "Checkout via WhatsApp 💬"
                                    }, void 0, false, {
                                        fileName: "[project]/components/FloatingCart.tsx",
                                        lineNumber: 109,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/FloatingCart.tsx",
                                lineNumber: 105,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/FloatingCart.tsx",
                        lineNumber: 54,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true)
        ]
    }, void 0, true);
}
_s(FloatingCart, "LqUAWJtDjR5jFG41FSbpeqCNjOw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$CartContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCart"]
    ];
});
_c = FloatingCart;
var _c;
__turbopack_context__.k.register(_c, "FloatingCart");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/chatbot.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "INITIAL_QUICK_REPLIES",
    ()=>INITIAL_QUICK_REPLIES,
    "WHATSAPP_CONTACT",
    ()=>WHATSAPP_CONTACT,
    "getBotResponse",
    ()=>getBotResponse
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$whatsapp$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/whatsapp.ts [app-client] (ecmascript)");
;
const WHATSAPP_CONTACT = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$whatsapp$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CONTACT_NUMBER"];
const INITIAL_QUICK_REPLIES = [
    "💄 Lipsticks & Shades",
    "🌸 Perfumes",
    "🎨 Palettes & Eye Makeup",
    "🎁 Gift / Beauty Box",
    "📦 Order karna hai",
    "📍 Shop ka Address"
];
function getBotResponse(input) {
    const msg = input.toLowerCase().trim();
    // ── Greetings ──────────────────────────────────────────────────────────────
    if (/\b(hi|hello|salam|assalam|hey|aoa|helo|walaikum|good morning|good evening|good afternoon|namaste)\b/.test(msg)) {
        return {
            text: "Assalam-o-Alaikum! 💄✨ Welcome to **AYAN Cosmetics**!\n\nMain hoon **Ayan AI** — aapka personal beauty consultant aur AYAN ka virtual manager.\n\nAaj main aapki kya madad kar sakta hoon? 😊",
            quickReplies: INITIAL_QUICK_REPLIES
        };
    }
    // ── Shades / Colors / Swatches ─────────────────────────────────────────────
    if (/shade|swatch|colour|color|rang|tone|fair|medium|dusky|dark|undertone|warm|cool|neutral/.test(msg)) {
        return {
            text: "💄 **Shade Matching — Hamari Specialty!**\n\nBilkul sahi jagah aaye hain! Screen par rang kabhi kabhi mislead karta hai — isiliye hum **Real Swatches (asli photos)** bhejte hain! 📸\n\nAap ki thodi help chahiye:\n\n• **Kaunsa product** chahiye? _(Lipstick / Foundation / Concealer / Palette)_\n• **Skin tone** kya hai? _(Fair / Medium / Dusky / Dark)_\n• **Finish** pasand hai? _(Matte / Satin / Glossy / Shimmer)_\n\nYeh batayein ya seedha WhatsApp pe message karein — Rehan bhai personally **exact shade match** karwayenge! ✅",
            quickReplies: [
                "💋 Lipstick shade chahiye",
                "🟤 Foundation match",
                "🎨 Palette shades",
                "📱 WhatsApp pe bata deta/deti hoon"
            ],
            whatsappCTA: true
        };
    }
    // ── Lipstick ───────────────────────────────────────────────────────────────
    if (/lipstick|lip color|lip colour|lippie|\blip\b/.test(msg)) {
        return {
            text: "💋 **Lipsticks — AYAN ki Jaan!**\n\nHamre paas kamal ki range hai:\n\n• **Brands:** Charlotte Tilbury, MAC, Huda Beauty, NYX, NARS & more\n• **Shades:** Nudes, Reds, Pinks, Mauves, Berries, Corals\n• **Finishes:** Matte • Satin • Glossy • Metallic • Velvet\n• **100% Original** — guaranteed ✅\n\n📸 Aapki skin tone batayein — hum specific shades ki **real swatch photos** WhatsApp pe bhejte hain!\n\n*Kya aap kisi event ke liye le rahe hain ya daily use ke liye?*",
            quickReplies: [
                "🌙 Event / Party ke liye",
                "☀️ Daily use",
                "💰 Price range poochni hai",
                "📸 Swatches dekhne hain"
            ],
            whatsappCTA: true
        };
    }
    // ── Foundation / Base ──────────────────────────────────────────────────────
    if (/foundation|base makeup|coverage|bb cream|cc cream|primer/.test(msg)) {
        return {
            text: "🌟 **Foundations & Base Products:**\n\n• Full Coverage, Medium, Sheer — sab options\n• **Skin tones covered:** Fair, Medium, Dusky, Dark ✅\n• **Finishes:** Matte, Dewy, Satin\n• **Brands:** NYX, Huda Beauty, L'Oreal, Maybelline & more\n\n💡 *Pro Tip:* Foundation ke sath hum **Concealer + Beauty Blender** bhi suggest karte hain for a flawless finish — ek complete base set!\n\n📸 Exact shade match ke liye skin tone batayein — real swatches WhatsApp pe bhejte hain! 🎯",
            quickReplies: [
                "🎨 Full coverage chahiye",
                "✨ Dewy finish",
                "💡 Complete base set",
                "📸 Shade match karna hai"
            ],
            whatsappCTA: true
        };
    }
    // ── Complete base set cross-sell ────────────────────────────────────────────
    if (/complete base|base set|full face|combo|bundle/.test(msg)) {
        return {
            text: "✨ **Complete Base Set — Best Value!**\n\nHamara suggested **Full Face Base Bundle:**\n\n1. 🟤 Foundation (shade matched)\n2. 🎯 Concealer (under-eyes + spots)\n3. 🥚 Beauty Blender / Sponge\n4. ✨ Setting Powder / Spray\n\nSab original branded! Bundle mein thoda discount bhi milta hai — WhatsApp pe final quote lo! 💬\n\n**0333-2304145** pe message karo — Rehan bhai best deal karwayenge! 👑",
            whatsappCTA: true
        };
    }
    // ── Perfume / Fragrance ────────────────────────────────────────────────────
    if (/perfume|fragrance|scent|attar|spray|body mist|cologne|خوشبو|mehek/.test(msg)) {
        return {
            text: "🌸 **Perfumes & Fragrances — Premium Selection!**\n\nHamre paas shandar collection hai:\n\n• **Types:** Floral 🌺 • Woody 🪵 • Oud 🕌 • Fresh 🌊 • Oriental 🌙\n• **Longevity:** Long-lasting formulas\n• **100% Designer Branded** — koi duplicate nahi ✅\n• **Gift Wrapping** available 🎁\n\nKya aap apne liye le rahe hain ya gift ke liye? 🎀\n\n*Occasion ya mood batayein — main perfect scent suggest karta hoon!*",
            quickReplies: [
                "👤 Apne liye",
                "🎁 Gift ke liye",
                "🌺 Floral scent",
                "🌙 Oud / Oriental",
                "📦 Order karna hai"
            ],
            whatsappCTA: true
        };
    }
    // ── Palette / Eye makeup ───────────────────────────────────────────────────
    if (/palette|eyeshadow|eye shadow|smokey|eye makeup|highlighter|blush|contour/.test(msg)) {
        return {
            text: "🎨 **Eye & Face Palettes:**\n\n• **Brands:** Huda Beauty, Morphe, NYX, Charlotte Tilbury\n• **Finishes:** Matte + Shimmer combos\n• **Looks:** Everyday Neutral • Smokey • Glam • Bridal\n• Highly pigmented, long-lasting formula 💪\n\n💡 *Pro Tip:* Palette ke sath **Makeup Brushes Set** bhi available hai — perfect blend ke liye!\n\n📸 Real swatches WhatsApp pe dekhne hain? Batayein kaunsa look chahiye — hum best option suggest karenge! ✨",
            quickReplies: [
                "🌟 Everyday neutral",
                "🎭 Smokey / Glam",
                "💍 Bridal palette",
                "🖌️ Brushes bhi chahiye"
            ],
            whatsappCTA: true
        };
    }
    // ── Skincare ───────────────────────────────────────────────────────────────
    if (/skincare|skin care|moisturizer|serum|toner|face wash|cleanser|sunscreen|spf|mask|acne|glow/.test(msg)) {
        return {
            text: "🌿 **Skincare — Glow Se Shuru Hota Hai Sab!**\n\nHamri skincare range:\n\n• Face Wash & Cleansers\n• Moisturizers (Normal / Dry / Oily)\n• Brightening Serums ✨\n• Sunscreen SPF 30 & 50\n• Sheet Masks\n• All branded & original! ✅\n\nApni **skin type** aur **main concern** batayein:\n_(Glow / Acne / Dryness / Dark spots / Anti-aging)_\n\nMain aapke liye **customized skincare routine** suggest karta hoon! 💬",
            quickReplies: [
                "✨ Glow chahiye",
                "🔴 Acne problem",
                "💧 Dry skin",
                "🛡️ Sunscreen chahiye",
                "📱 WhatsApp pe detail poochni hai"
            ],
            whatsappCTA: true
        };
    }
    // ── Gift / Beauty Box ──────────────────────────────────────────────────────
    if (/gift|beauty box|bride|bridal|birthday|wedding|dawat|shaadi|barat|present|hamper|anniversary/.test(msg)) {
        return {
            text: "🎁 **Customized Beauty Boxes — Bilkul Aapke Hisaab Se!**\n\nSabse pehle kuch quick sawal — taake hum ek **perfect, personalized box** banayein:\n\n• **1. Yeh kiske liye hai?** _(Bride / Birthday girl / Friend / Maa / Behen)_\n• **2. Budget kya hai?** _(PKR mein rough idea)_\n• **3. Uski skin type ya favorite colors?** _(Optional but helpful!)_\n\nInn details se hum ek **signature box concept** banate hain — jaise *\"The Bridal Glow Box\"* ya *\"The Daily Glam Set\"* 👑\n\nAbhi batayein ya WhatsApp pe message karein! 💬",
            quickReplies: [
                "💍 Bride ke liye",
                "🎂 Birthday gift",
                "💐 Dawat / Event",
                "💰 Budget batana hai",
                "📱 WhatsApp pe discuss karna hai"
            ],
            whatsappCTA: true
        };
    }
    // ── Bridal box ─────────────────────────────────────────────────────────────
    if (/bride|bridal|dulhan|shadi ka|nikkah/.test(msg)) {
        return {
            text: "💍 **The Bridal Glow Box — Our Signature!**\n\nDulhan ke liye hum banate hain:\n\n✨ **Full Face Base:** Foundation + Concealer + Setting Spray\n💋 **Lip Collection:** 2-3 premium shades (nudes + bold)\n🎨 **Eye Palette:** Bridal-worthy shimmer & matte combo\n🌸 **Signature Fragrance:** Long-lasting designer perfume\n🌿 **Glow Skincare:** Serum + Moisturizer\n🎀 **Premium Gift Packaging** with ribbon\n\n**Range:** 5,000 - 15,000+ PKR depending on brands\n\nBudget aur dulhan ki skin tone batayein — hum ek special quote tayyar karte hain! 👑",
            quickReplies: [
                "💰 Budget batana hai",
                "📱 WhatsApp pe full detail"
            ],
            whatsappCTA: true
        };
    }
    // ── Budget ranges ──────────────────────────────────────────────────────────
    if (/1[,.]?000.*3[,.]?000|budget.*1k|budget.*2k|budget.*3k|1000.*3000|under 3000|1k.?2k|2k.?3k/.test(msg)) {
        return {
            text: "💝 **Starter Glam Box — 1,000 to 3,000 PKR**\n\n✅ Yeh aa sakta hai:\n• 💋 1 Premium Lipstick (shade matched)\n• 🌸 Mini Perfume ya Body Mist\n• 👁️ Mascara ya Kajal\n• 🎀 Cute branded packaging\n\nYeh ek **pyara, thoughtful gift** hai jo budget mein perfectly fit ho jata hai!\n\n_Main abhi is box ki detail Rehan bhai se confirm karta hoon — aap tab tak hamara Instagram check karen: **@ayancosmetics.official** 📱_\n\nFinal karne ke liye WhatsApp karein! 💬",
            whatsappCTA: true
        };
    }
    if (/3[,.]?000.*7[,.]?000|budget.*[45]k|budget.*6k|budget.*7k|3000.*7000|3k.?7k/.test(msg)) {
        return {
            text: "✨ **The Complete Glam Box — 3,000 to 7,000 PKR**\n\n✅ Yeh aa sakta hai:\n• 💄 2 Premium Lipsticks (nude + bold)\n• 🟤 Foundation (skin tone matched)\n• 🎨 Mini Eyeshadow Palette\n• 🌸 Designer Perfume / Fragrance\n• 🎁 Beautiful branded gift box\n\nYeh ek **complete head-to-toe glam package** hai — perfect for birthdays aur dawat events!\n\nCustomize karne ke liye WhatsApp pe message karein — skin tone + preference batayein! 💬",
            whatsappCTA: true
        };
    }
    if (/7[,.]?000|budget.*[89]k|budget.*10k|luxury|premium box|above 7|7k\+/.test(msg)) {
        return {
            text: "👑 **The Luxury Beauty Box — 7,000+ PKR**\n\n✅ Yeh aa sakta hai:\n• 💄 2-3 Premium Branded Lipsticks\n• 🟤 Full Coverage Foundation\n• 🎨 Full-size Eyeshadow Palette\n• 🌸 Designer Perfume (full size)\n• 🌿 Skincare mini set (Serum + Moisturizer)\n• 🎀 **Premium ribbon packaging** — gift-ready\n\nBridal sets aur corporate gifting ke liye **bulk orders** bhi available hain!\n\nYeh ek **premium, unforgettable gift** hoga! WhatsApp pe full consultation lein: 💬",
            whatsappCTA: true
        };
    }
    // ── Price ──────────────────────────────────────────────────────────────────
    if (/price|kitna|cost|rate|how much|keemat|qeemat|afford|budget/.test(msg)) {
        return {
            text: "💰 **Pricing — Competitive & Fair!**\n\nHamari rough ranges:\n\n• 💋 Lipsticks: **800 – 4,500 PKR** (brand by brand)\n• 🟤 Foundations: **1,200 – 5,000 PKR**\n• 🌸 Perfumes: **1,500 – 8,000+ PKR**\n• 🎨 Palettes: **1,500 – 6,000 PKR**\n• 🎁 Beauty Boxes: **1,000 PKR se shuru**\n\n_Note: Prices updated regularly — exact rate ke liye WhatsApp pe confirm zaroor karein!_\n\nKaunsa product mein interested hain? 😊",
            quickReplies: [
                "💋 Lipstick price",
                "🌸 Perfume price",
                "🎨 Palette price",
                "🎁 Gift box price"
            ],
            whatsappCTA: true
        };
    }
    // ── Order ──────────────────────────────────────────────────────────────────
    if (/order|buy|kharid|chahiye|lena hai|purchase|mangwana|book|confirm/.test(msg)) {
        return {
            text: "📦 **Order Karna — Bilkul Asaan Hai!**\n\n**3 simple steps:**\n\n1️⃣ Jo product chahiye uska naam batayein\n2️⃣ WhatsApp pe **0333-2304145** pe message karein\n3️⃣ Rehan bhai confirm kar ke **fast dispatch** karenge!\n\n🚀 **Delivery:**\n• 🏙️ Karachi: Same day / Next day\n• 🇵🇰 Nationwide: 2-3 business days, tracking available\n\n💳 **Payment:** Easy Paisa / JazzCash / Bank Transfer / COD (Karachi)\n\nAbhi WhatsApp karein — hum intezaar mein hain! 💬",
            whatsappCTA: true
        };
    }
    // ── Hesitation / thinking ──────────────────────────────────────────────────
    if (/soch|thinking|decide|not sure|pata nahi|samajh nahi|confused|kaun sa|which one/.test(msg)) {
        return {
            text: "Bilkul sahi hai — beauty mein sahi choice important hoti hai! 😊\n\n_Main abhi is beauty selection ki **customized detail** banakar Rehan bhai se confirm karta hoon._\n\nAap tab tak hamara **Instagram** check karein — wahan real product photos aur customer looks mil jayenge:\n\n📱 **@ayancosmetics.official**\n\nPhir hum sath mil ke decide karte hain — koi jaldi nahi! 💕\n\nYa seedha WhatsApp pe puchein — Rehan bhai personally guide karenge! 💬",
            quickReplies: [
                "📸 Instagram dekh leti/leta hoon",
                "📱 WhatsApp pe poochna hai",
                "💄 Product suggest karo"
            ],
            whatsappCTA: true
        };
    }
    // ── Delivery ───────────────────────────────────────────────────────────────
    if (/delivery|ship|courier|kitne din|how long|jaldi|dispatch|track/.test(msg)) {
        return {
            text: "🚀 **Delivery Information:**\n\n📍 **Karachi:** Same day ya next day delivery!\n\n🇵🇰 **Nationwide (All Cities):**\n• TCS / Leopards / Post Ex\n• **2-3 business days**\n• Tracking number order ke baad WhatsApp pe milega\n\n💳 **Payment Options:**\n• Easy Paisa / JazzCash\n• Bank Transfer\n• COD — Karachi mein available!\n\nKisi bhi query ke liye: **0333-2304145** 📞",
            whatsappCTA: true
        };
    }
    // ── Address / Location ─────────────────────────────────────────────────────
    if (/address|kahan|location|shop|store|visit|aana|where|mall|find you/.test(msg)) {
        return {
            text: "📍 **AYAN Cosmetics — Visit Us!**\n\n🏪 **Shop No G-16**\nSaima Shopping Mall\nMain Rashid Minhas Road, Karachi\n\n🕐 In-store experience mein aake directly products try kar sakte hain!\n\n📞 **Call / WhatsApp:**\n• **0333-2304145** (Primary)\n• **0340-1808907** (Alt)\n\n📧 **Email:** ayan.cosmeticspk@gmail.com\n\n🗺️ Google Maps: *\"Saima Shopping Mall Rashid Minhas Road Karachi\"*",
            quickReplies: [
                "📱 Pehle WhatsApp pe confirm karna hai",
                "📦 Online order prefer karta/karti hoon"
            ],
            whatsappCTA: true
        };
    }
    // ── Contact ────────────────────────────────────────────────────────────────
    if (/contact|number|phone|call|reach|helpline|email|connect/.test(msg)) {
        return {
            text: "📞 **AYAN Cosmetics — Hum Yahan Hain!**\n\n💬 **WhatsApp / Call:**\n• **0333-2304145** — Primary (Rehan Khan)\n• **0340-1808907** — Alternate\n\n📧 **Email:** ayan.cosmeticspk@gmail.com\n\n🌐 **Website:** www.ayan-cosmetics.com\n\n📱 **Social:**\n• Instagram: **@ayancosmetics.official**\n• Facebook: **@ayancosmetics.official**\n\n_WhatsApp pe sabse fast response milti hai — 5-10 min mein!_ ⚡",
            whatsappCTA: true
        };
    }
    // ── Social media ───────────────────────────────────────────────────────────
    if (/instagram|facebook|social|insta|fb|@ayan|follow/.test(msg)) {
        return {
            text: "📱 **Follow Us — @ayancosmetics.official**\n\nHamari feed mein milega:\n\n✨ New arrivals — sab se pehle\n💄 Real makeup looks & tutorials\n🎁 Giveaways & special offers\n📸 Honest product swatches\n⭐ Customer reviews & unboxings\n\n**Instagram + Facebook:** @ayancosmetics.official\n\nFollow karo aur miss mat karo — beauty deals aati rehti hain! 🔔💕",
            quickReplies: [
                "📦 Order karna hai",
                "🎁 Gift box chahiye",
                "💄 Products dekhne hain"
            ]
        };
    }
    // ── Original / authentic ───────────────────────────────────────────────────
    if (/original|asli|authentic|fake|replica|genuine|duplicate|imported/.test(msg)) {
        return {
            text: "✅ **100% Original — AYAN Ka Wada!**\n\n🏆 Hum sirf **genuine branded products** deal karte hain:\n\n• ❌ Koi replica nahi\n• ❌ Koi duplicate nahi — kabhi bhi\n• ✅ Direct sourced branded items\n• ✅ Har product pe authenticity guarantee\n• ✅ Rehan bhai personally quality check karte hain\n\n_Koi doubt ho toh WhatsApp pe puchein — product verification photos aur receipts share kar sakte hain!_ 📸\n\nYahi hamari **reputation** aur **trust** hai — 100% original ya kuch nahi! 💪",
            quickReplies: [
                "📦 Order karna hai",
                "💄 Products browse karna hai"
            ],
            whatsappCTA: true
        };
    }
    // ── Return / Exchange ──────────────────────────────────────────────────────
    if (/return|exchange|refund|wapas|replace|damaged|broken/.test(msg)) {
        return {
            text: "🔄 **Returns & Exchange Policy:**\n\nHamari policy customer-first hai:\n\n• **Damaged product** mila? — Seedha WhatsApp pe photo bhejein, replacement arrange karenge\n• **Wrong item** aaya? — Hum responsible hain, fix karenge\n• **General exchange** — case by case basis pe Rehan bhai handle karte hain\n\n_Koi bhi issue ho, seedha **0333-2304145** pe message karein — hum solution dhundhenge!_ 💬\n\nAapki satisfaction hamari priority hai! 🙏",
            whatsappCTA: true
        };
    }
    // ── Mascara / Eyeliner / specific products ─────────────────────────────────
    if (/mascara|eyeliner|kajal|kohl/.test(msg)) {
        return {
            text: "👁️ **Eye Products — Drama Eyes Ready!**\n\n• **Mascaras:** Volumizing, Lengthening, Waterproof\n• **Eyeliners:** Felt tip, Gel, Pencil, Liquid\n• **Kajal / Kohl:** Intense black, smudge-proof\n• Brands: Huda Beauty, NYX, Maybelline & more\n\n💡 *Pro Tip:* Palette ke sath ek **good eyeliner + mascara combo** lete hain toh look complete hota hai — bundle mein better value milti hai!\n\nOrder ya inquiry ke liye WhatsApp karein! 💬",
            quickReplies: [
                "🎨 Palette bhi chahiye",
                "📦 Order karna hai"
            ],
            whatsappCTA: true
        };
    }
    // ── Default fallback ───────────────────────────────────────────────────────
    return {
        text: "Shukriya aapke message ke liye! 😊\n\nMain thoda aur samajhna chahta hoon — kya aap in mein se select kar sakte hain?\n\nYa seedha **Rehan bhai** se WhatsApp pe baat karein — woh personally aapki poori madad karenge:\n\n📞 **0333-2304145**",
        quickReplies: INITIAL_QUICK_REPLIES,
        whatsappCTA: true
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/AyanAIChat.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AyanAIChat
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/send.js [app-client] (ecmascript) <export default as Send>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$minus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Minus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/minus.js [app-client] (ecmascript) <export default as Minus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$chatbot$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/chatbot.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
// ── Skin tone flow helpers ────────────────────────────────────────────────────
const SHADE_TRIGGER_RE = /💋.*lipstick shade|🟤.*foundation|🎨.*palette shade|shade dekhne|swatches dekhne|shade match|foundation match|lipstick shade chahiye|palette shades/i;
function extractProduct(text) {
    const t = text.toLowerCase();
    if (t.includes("foundation") || t.includes("🟤")) return "Foundation";
    if (t.includes("lipstick") || t.includes("💋")) return "Lipstick";
    if (t.includes("palette") || t.includes("🎨")) return "Eye Palette";
    if (t.includes("concealer")) return "Concealer";
    return "Product";
}
function buildSkinToneMsg(skinTone, product) {
    const clean = skinTone.replace(/[☀️🌤️🌙🌑❓]/gu, "").trim();
    const unsure = /pata nahi|help|unsure|don't know/i.test(skinTone);
    const waMsg = unsure ? `Assalam-o-Alaikum AYAN Cosmetics! ${product} ke liye shade match chahiye — skin tone identify karne mein bhi help karein! Asli swatches dekhna chahta/chahti hoon.` : `Assalam-o-Alaikum AYAN Cosmetics! ${product} ke liye shade matching chahiye. Meri skin tone ${clean} hai — kya aap matching real swatches WhatsApp pe bhej sakte hain? Shukriya!`;
    const text = unsure ? `Koi baat nahi! 😊 Skin tone identify karna thoda tricky hota hai.\n\nRehan bhai personally aapki help karenge — simply WhatsApp pe apni ek **selfie ya hand photo** bhejein:\n\n📸 Woh aapke exact skin ke liye best **${product}** shades suggest karenge!\n\nBilkul personal service — ekdum accurate match guaranteed! ✨` : `✅ **${clean} Skin Tone — Note kar liya!**\n\nRehan bhai aapki **${clean}** skin ke liye best **${product}** shades ki **real swatch photos** personally WhatsApp pe bhejenge!\n\n📸 Screen pe rang alag dikhta hai — hum aapko asli cheez dikhate hain. 100% accurate match! ✨\n\nAbhi message karein: 💬`;
    return {
        id: `b-${Date.now()}`,
        role: "bot",
        text,
        whatsappCTA: true,
        whatsappMessage: waMsg
    };
}
// ── Welcome message ───────────────────────────────────────────────────────────
const WELCOME = {
    id: "welcome",
    role: "bot",
    text: "Assalam-o-Alaikum! 💄✨ Welcome to **AYAN Cosmetics**!\n\nMain hoon **Ayan AI** — aapka personal beauty consultant aur AYAN ka virtual manager.\n\nMain aapki help kar sakta hoon:\n• 💄 Shade matching & real swatch photos\n• 🎁 Customized beauty boxes\n• 📦 Orders & fast Karachi delivery\n• ✅ 100% original branded products\n\nAaj kya chahiye aapko? 😊",
    quickReplies: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$chatbot$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["INITIAL_QUICK_REPLIES"]
};
// ── Sub-components ────────────────────────────────────────────────────────────
function renderText(text) {
    return text.split("\n").map((line, i, arr)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            children: [
                line.split(/(\*\*[^*]+\*\*)/).map((part, j)=>part.startsWith("**") && part.endsWith("**") ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                        children: part.slice(2, -2)
                    }, j, false, {
                        fileName: "[project]/components/AyanAIChat.tsx",
                        lineNumber: 63,
                        columnNumber: 11
                    }, this) : part),
                i < arr.length - 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                    fileName: "[project]/components/AyanAIChat.tsx",
                    lineNumber: 68,
                    columnNumber: 30
                }, this)
            ]
        }, i, true, {
            fileName: "[project]/components/AyanAIChat.tsx",
            lineNumber: 60,
            columnNumber: 5
        }, this));
}
function WhatsAppIcon() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        className: "w-3.5 h-3.5 fill-current flex-shrink-0",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
        }, void 0, false, {
            fileName: "[project]/components/AyanAIChat.tsx",
            lineNumber: 76,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/AyanAIChat.tsx",
        lineNumber: 75,
        columnNumber: 5
    }, this);
}
_c = WhatsAppIcon;
function TypingIndicator() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex justify-start items-end gap-2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-7 h-7 rounded-full flex items-center justify-center text-xs flex-shrink-0",
                style: {
                    background: "#00b140"
                },
                children: "💄"
            }, void 0, false, {
                fileName: "[project]/components/AyanAIChat.tsx",
                lineNumber: 84,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-4 py-3 rounded-2xl rounded-bl-sm",
                style: {
                    background: "rgba(255,255,255,0.9)",
                    border: "1px solid rgba(255,255,255,0.6)",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.06)"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex gap-1 items-center",
                    children: [
                        0,
                        150,
                        300
                    ].map((d)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "w-2 h-2 rounded-full bg-gray-400 animate-bounce",
                            style: {
                                animationDelay: `${d}ms`
                            }
                        }, d, false, {
                            fileName: "[project]/components/AyanAIChat.tsx",
                            lineNumber: 100,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/components/AyanAIChat.tsx",
                    lineNumber: 98,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/AyanAIChat.tsx",
                lineNumber: 90,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/AyanAIChat.tsx",
        lineNumber: 83,
        columnNumber: 5
    }, this);
}
_c1 = TypingIndicator;
function AyanAIChat() {
    _s();
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isMinimized, setIsMinimized] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [messages, setMessages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([
        WELCOME
    ]);
    const [input, setInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [isTyping, setIsTyping] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [hasUnread, setHasUnread] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [convoStep, setConvoStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("idle");
    const [pendingProduct, setPendingProduct] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const messagesEndRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const inputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AyanAIChat.useEffect": ()=>{
            if (isOpen && !isMinimized) {
                messagesEndRef.current?.scrollIntoView({
                    behavior: "smooth"
                });
            }
        }
    }["AyanAIChat.useEffect"], [
        messages,
        isTyping,
        isOpen,
        isMinimized
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AyanAIChat.useEffect": ()=>{
            if (isOpen && !isMinimized) {
                setHasUnread(false);
                setTimeout({
                    "AyanAIChat.useEffect": ()=>inputRef.current?.focus()
                }["AyanAIChat.useEffect"], 100);
            }
        }
    }["AyanAIChat.useEffect"], [
        isOpen,
        isMinimized
    ]);
    const openWhatsApp = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AyanAIChat.useCallback[openWhatsApp]": (customMsg)=>{
            const msg = customMsg ?? "Assalamualaikum! AYAN Cosmetics se rabta karna chahta/chahti hoon.";
            window.open(`https://wa.me/${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$chatbot$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WHATSAPP_CONTACT"]}?text=${encodeURIComponent(msg)}`, "_blank");
        }
    }["AyanAIChat.useCallback[openWhatsApp]"], []);
    const sendMessage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AyanAIChat.useCallback[sendMessage]": (text)=>{
            if (!text.trim()) return;
            const userMsg = {
                id: `u-${Date.now()}`,
                role: "user",
                text: text.trim()
            };
            setMessages({
                "AyanAIChat.useCallback[sendMessage]": (prev)=>[
                        ...prev,
                        userMsg
                    ]
            }["AyanAIChat.useCallback[sendMessage]"]);
            setInput("");
            setIsTyping(true);
            const delay = 700 + Math.random() * 500;
            // ── Step 2: user is answering skin tone question ──
            if (convoStep === "awaiting_skin_tone") {
                setTimeout({
                    "AyanAIChat.useCallback[sendMessage]": ()=>{
                        setMessages({
                            "AyanAIChat.useCallback[sendMessage]": (prev)=>[
                                    ...prev,
                                    buildSkinToneMsg(text.trim(), pendingProduct)
                                ]
                        }["AyanAIChat.useCallback[sendMessage]"]);
                        setIsTyping(false);
                        setConvoStep("idle");
                        setPendingProduct("");
                    }
                }["AyanAIChat.useCallback[sendMessage]"], delay);
                return;
            }
            // ── Step 1: shade quick reply → inject skin tone question ──
            if (SHADE_TRIGGER_RE.test(text)) {
                const product = extractProduct(text);
                setPendingProduct(product);
                setTimeout({
                    "AyanAIChat.useCallback[sendMessage]": ()=>{
                        const skinToneQ = {
                            id: `b-${Date.now()}`,
                            role: "bot",
                            text: `💄 Perfect! Sahi **${product}** shade match ke liye ek quick sawal:\n\n**Aapki skin tone kya hai?**\n\n_(Screen pe rang alag dikhta hai — isliye hum **asli swatch photos** personally bhejte hain!)_ 📸`,
                            quickReplies: [
                                "☀️ Fair",
                                "🌤️ Medium",
                                "🌙 Dusky",
                                "🌑 Dark",
                                "❓ Pata nahi / Help chahiye"
                            ]
                        };
                        setMessages({
                            "AyanAIChat.useCallback[sendMessage]": (prev)=>[
                                    ...prev,
                                    skinToneQ
                                ]
                        }["AyanAIChat.useCallback[sendMessage]"]);
                        setIsTyping(false);
                        setConvoStep("awaiting_skin_tone");
                    }
                }["AyanAIChat.useCallback[sendMessage]"], delay);
                return;
            }
            // ── Normal flow ──
            setTimeout({
                "AyanAIChat.useCallback[sendMessage]": ()=>{
                    const response = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$chatbot$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBotResponse"])(text);
                    setMessages({
                        "AyanAIChat.useCallback[sendMessage]": (prev)=>[
                                ...prev,
                                {
                                    id: `b-${Date.now()}`,
                                    role: "bot",
                                    ...response
                                }
                            ]
                    }["AyanAIChat.useCallback[sendMessage]"]);
                    setIsTyping(false);
                    if (!isOpen || isMinimized) setHasUnread(true);
                }
            }["AyanAIChat.useCallback[sendMessage]"], delay);
        }
    }["AyanAIChat.useCallback[sendMessage]"], [
        convoStep,
        isOpen,
        isMinimized,
        pendingProduct
    ]);
    const handleSubmit = (e)=>{
        e.preventDefault();
        sendMessage(input);
    };
    const toggleOpen = ()=>{
        if (!isOpen) {
            setIsOpen(true);
            setIsMinimized(false);
            setHasUnread(false);
        } else {
            setIsOpen(false);
        }
    };
    // Glassmorphism styles
    const glassWindow = {
        background: "rgba(255, 255, 255, 0.88)",
        backdropFilter: "blur(24px)",
        WebkitBackdropFilter: "blur(24px)",
        border: "1px solid rgba(255, 255, 255, 0.5)",
        boxShadow: "0 20px 60px rgba(0,177,64,0.18), 0 4px 20px rgba(0,0,0,0.08)"
    };
    const glassMsgs = {
        background: "rgba(241, 245, 249, 0.65)"
    };
    const glassBotBubble = {
        background: "rgba(255, 255, 255, 0.92)",
        border: "1px solid rgba(255, 255, 255, 0.7)",
        boxShadow: "0 2px 10px rgba(0,0,0,0.06)"
    };
    const glassInput = {
        background: "rgba(255, 255, 255, 0.92)",
        borderTop: "1px solid rgba(0,177,64,0.12)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)"
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed z-50 left-3 sm:left-4 rounded-2xl flex flex-col overflow-hidden transition-all duration-300",
                style: {
                    // 16px (bottom-4 toggle) + 56px (h-14 toggle) + 16px gap = 88px
                    bottom: "88px",
                    width: "min(calc(100vw - 24px), 420px)",
                    height: isMinimized ? "56px" : "560px",
                    maxHeight: "calc(100vh - 110px)",
                    ...glassWindow
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between px-4 py-3 flex-shrink-0 cursor-pointer select-none",
                        style: {
                            background: "linear-gradient(135deg, #00b140 0%, #008a30 100%)",
                            borderRadius: isMinimized ? "inherit" : "16px 16px 0 0"
                        },
                        onClick: ()=>setIsMinimized((v)=>!v),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-9 h-9 rounded-full bg-white/20 flex items-center justify-center text-lg flex-shrink-0 shadow-inner",
                                        children: "💄"
                                    }, void 0, false, {
                                        fileName: "[project]/components/AyanAIChat.tsx",
                                        lineNumber: 276,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-white font-semibold text-sm leading-none tracking-wide",
                                                children: "Ayan AI"
                                            }, void 0, false, {
                                                fileName: "[project]/components/AyanAIChat.tsx",
                                                lineNumber: 280,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-1.5 mt-0.5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "w-1.5 h-1.5 rounded-full bg-green-300 animate-pulse"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/AyanAIChat.tsx",
                                                        lineNumber: 284,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-green-100 text-xs",
                                                        children: "AYAN Cosmetics  •  Online"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/AyanAIChat.tsx",
                                                        lineNumber: 285,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/AyanAIChat.tsx",
                                                lineNumber: 283,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/AyanAIChat.tsx",
                                        lineNumber: 279,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/AyanAIChat.tsx",
                                lineNumber: 275,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-0.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: (e)=>{
                                            e.stopPropagation();
                                            setIsMinimized((v)=>!v);
                                        },
                                        className: "text-white/70 hover:text-white hover:bg-white/10 p-1.5 rounded-lg transition-all",
                                        "aria-label": "Minimize",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$minus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Minus$3e$__["Minus"], {
                                            size: 14
                                        }, void 0, false, {
                                            fileName: "[project]/components/AyanAIChat.tsx",
                                            lineNumber: 297,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/AyanAIChat.tsx",
                                        lineNumber: 292,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: (e)=>{
                                            e.stopPropagation();
                                            setIsOpen(false);
                                        },
                                        className: "text-white/70 hover:text-white hover:bg-white/10 p-1.5 rounded-lg transition-all",
                                        "aria-label": "Close",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                            size: 14
                                        }, void 0, false, {
                                            fileName: "[project]/components/AyanAIChat.tsx",
                                            lineNumber: 304,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/AyanAIChat.tsx",
                                        lineNumber: 299,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/AyanAIChat.tsx",
                                lineNumber: 291,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/AyanAIChat.tsx",
                        lineNumber: 267,
                        columnNumber: 11
                    }, this),
                    !isMinimized && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1 overflow-y-auto p-3 space-y-3",
                                style: glassMsgs,
                                children: [
                                    messages.map((msg)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `flex ${msg.role === "user" ? "justify-end" : "justify-start"} items-end gap-2`,
                                            children: [
                                                msg.role === "bot" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-7 h-7 rounded-full flex items-center justify-center text-xs flex-shrink-0",
                                                    style: {
                                                        background: "#00b140"
                                                    },
                                                    children: "💄"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/AyanAIChat.tsx",
                                                    lineNumber: 322,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "max-w-[85%] space-y-1.5",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: `px-3 py-2.5 rounded-2xl text-sm leading-relaxed ${msg.role === "user" ? "text-white rounded-br-sm" : "text-gray-800 rounded-bl-sm"}`,
                                                            style: msg.role === "user" ? {
                                                                background: "#00b140"
                                                            } : glassBotBubble,
                                                            children: renderText(msg.text)
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/AyanAIChat.tsx",
                                                            lineNumber: 332,
                                                            columnNumber: 23
                                                        }, this),
                                                        msg.quickReplies && msg.quickReplies.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex flex-wrap gap-1.5 pt-0.5",
                                                            children: msg.quickReplies.map((reply)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: ()=>sendMessage(reply),
                                                                    className: "text-xs px-2.5 py-1 rounded-full border transition-all duration-150",
                                                                    style: {
                                                                        borderColor: "#00b140",
                                                                        color: "#00b140",
                                                                        background: "rgba(255,255,255,0.85)"
                                                                    },
                                                                    onMouseEnter: (e)=>{
                                                                        e.currentTarget.style.background = "#00b140";
                                                                        e.currentTarget.style.color = "white";
                                                                    },
                                                                    onMouseLeave: (e)=>{
                                                                        e.currentTarget.style.background = "rgba(255,255,255,0.85)";
                                                                        e.currentTarget.style.color = "#00b140";
                                                                    },
                                                                    children: reply
                                                                }, reply, false, {
                                                                    fileName: "[project]/components/AyanAIChat.tsx",
                                                                    lineNumber: 351,
                                                                    columnNumber: 29
                                                                }, this))
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/AyanAIChat.tsx",
                                                            lineNumber: 349,
                                                            columnNumber: 25
                                                        }, this),
                                                        msg.whatsappCTA && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>openWhatsApp(msg.whatsappMessage),
                                                            className: "flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold text-white transition-all hover:opacity-90 hover:scale-[1.02] mt-1 shadow-sm",
                                                            style: {
                                                                background: "#25D366"
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(WhatsAppIcon, {}, void 0, false, {
                                                                    fileName: "[project]/components/AyanAIChat.tsx",
                                                                    lineNumber: 383,
                                                                    columnNumber: 27
                                                                }, this),
                                                                "WhatsApp pe Order Karen"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/AyanAIChat.tsx",
                                                            lineNumber: 378,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/AyanAIChat.tsx",
                                                    lineNumber: 330,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, msg.id, true, {
                                            fileName: "[project]/components/AyanAIChat.tsx",
                                            lineNumber: 317,
                                            columnNumber: 19
                                        }, this)),
                                    isTyping && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TypingIndicator, {}, void 0, false, {
                                        fileName: "[project]/components/AyanAIChat.tsx",
                                        lineNumber: 391,
                                        columnNumber: 30
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        ref: messagesEndRef
                                    }, void 0, false, {
                                        fileName: "[project]/components/AyanAIChat.tsx",
                                        lineNumber: 392,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/AyanAIChat.tsx",
                                lineNumber: 312,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                onSubmit: handleSubmit,
                                className: "p-3 flex gap-2 flex-shrink-0",
                                style: glassInput,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        ref: inputRef,
                                        type: "text",
                                        value: input,
                                        onChange: (e)=>setInput(e.target.value),
                                        placeholder: convoStep === "awaiting_skin_tone" ? "Skin tone batayein ya chip select karein..." : "Message karein...",
                                        className: "flex-1 text-sm border border-gray-200 rounded-full px-4 py-2 outline-none focus:border-green-500 transition-colors",
                                        style: {
                                            background: "rgba(249,250,251,0.8)"
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/components/AyanAIChat.tsx",
                                        lineNumber: 401,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "submit",
                                        disabled: !input.trim() || isTyping,
                                        className: "w-9 h-9 rounded-full flex items-center justify-center text-white disabled:opacity-40 transition-all hover:opacity-90 hover:scale-105 flex-shrink-0 shadow-sm",
                                        style: {
                                            background: "#00b140"
                                        },
                                        "aria-label": "Send",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__["Send"], {
                                            size: 14
                                        }, void 0, false, {
                                            fileName: "[project]/components/AyanAIChat.tsx",
                                            lineNumber: 421,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/AyanAIChat.tsx",
                                        lineNumber: 414,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/AyanAIChat.tsx",
                                lineNumber: 396,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true)
                ]
            }, void 0, true, {
                fileName: "[project]/components/AyanAIChat.tsx",
                lineNumber: 255,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: toggleOpen,
                className: "fixed bottom-4 left-3 sm:left-4 z-50 w-14 h-14 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95",
                style: {
                    background: isOpen ? "#374151" : "linear-gradient(135deg, #00b140 0%, #008a30 100%)",
                    boxShadow: isOpen ? "0 4px 20px rgba(0,0,0,0.25)" : "0 4px 20px rgba(0,177,64,0.4)"
                },
                "aria-label": "Chat with Ayan AI",
                children: [
                    isOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                        size: 22,
                        className: "text-white"
                    }, void 0, false, {
                        fileName: "[project]/components/AyanAIChat.tsx",
                        lineNumber: 444,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-2xl leading-none",
                        children: "💄"
                    }, void 0, false, {
                        fileName: "[project]/components/AyanAIChat.tsx",
                        lineNumber: 446,
                        columnNumber: 11
                    }, this),
                    hasUnread && !isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "absolute -top-1 -right-1 w-4 h-4 rounded-full bg-red-500 border-2 border-white shadow"
                    }, void 0, false, {
                        fileName: "[project]/components/AyanAIChat.tsx",
                        lineNumber: 450,
                        columnNumber: 11
                    }, this),
                    !isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "absolute inset-0 rounded-full animate-ping opacity-20 pointer-events-none",
                        style: {
                            background: "#00b140"
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/AyanAIChat.tsx",
                        lineNumber: 454,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/AyanAIChat.tsx",
                lineNumber: 430,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(AyanAIChat, "mqlrLb9fxv6reljPKPXBL4sLQlo=");
_c2 = AyanAIChat;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "WhatsAppIcon");
__turbopack_context__.k.register(_c1, "TypingIndicator");
__turbopack_context__.k.register(_c2, "AyanAIChat");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_0shtuk-._.js.map