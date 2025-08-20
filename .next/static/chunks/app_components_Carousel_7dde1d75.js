(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/app/components/Carousel.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const Carousel = ()=>{
    _s();
    const [currentSlide, setCurrentSlide] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isPlaying, setIsPlaying] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const images = [
        {
            src: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2832&q=80",
            alt: "Beautiful Mountain Landscape"
        },
        {
            src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2832&q=80",
            alt: "Stunning Ocean View"
        },
        {
            src: "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2832&q=80",
            alt: "Serene Forest Path"
        }
    ];
    // Auto-slide every 3 seconds
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Carousel.useEffect": ()=>{
            if (!isPlaying) return;
            const interval = setInterval({
                "Carousel.useEffect.interval": ()=>{
                    setCurrentSlide({
                        "Carousel.useEffect.interval": (prev)=>(prev + 1) % images.length
                    }["Carousel.useEffect.interval"]);
                }
            }["Carousel.useEffect.interval"], 3000);
            return ({
                "Carousel.useEffect": ()=>clearInterval(interval)
            })["Carousel.useEffect"];
        }
    }["Carousel.useEffect"], [
        isPlaying,
        images.length
    ]);
    const goToSlide = (index)=>{
        setCurrentSlide(index);
    };
    const goToPrevSlide = ()=>{
        setCurrentSlide((prev)=>(prev - 1 + images.length) % images.length);
    };
    const goToNextSlide = ()=>{
        setCurrentSlide((prev)=>(prev + 1) % images.length);
    };
    const handleMouseEnter = ()=>{
        setIsPlaying(false);
    };
    const handleMouseLeave = ()=>{
        setIsPlaying(true);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("link", {
                href: "https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/css/bootstrap.min.css",
                rel: "stylesheet",
                className: "jsx-f6392806088b47e8"
            }, void 0, false, {
                fileName: "[project]/app/components/Carousel.js",
                lineNumber: 57,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                id: "f6392806088b47e8",
                children: 'body,html{background:linear-gradient(135deg,#1a0000 0%,#300 50%,#000 100%);height:100vh;margin:0;padding:0;font-family:Segoe UI,Tahoma,Geneva,Verdana,sans-serif;overflow:hidden}.carousel-container{width:100vw;height:100vh;position:relative;overflow:hidden}.carousel-slide{opacity:0;width:100%;height:100%;transition:opacity .8s ease-in-out;position:absolute;top:0;left:0}.carousel-slide.active{opacity:1}.carousel-slide img{object-fit:cover;filter:brightness(.8)contrast(1.1);width:100%;height:100%}.carousel-slide:before{content:"";z-index:1;background:linear-gradient(45deg,#0000004d 0%,#8b000033 50%,#0006 100%);position:absolute;inset:0}.nav-button{z-index:10;cursor:pointer;color:#fff;background:linear-gradient(135deg,#8b0000cc 0%,#000000e6 100%);border:2px solid #dc143c99;border-radius:50%;justify-content:center;align-items:center;width:80px;height:80px;font-size:24px;transition:all .3s;animation:3s ease-in-out infinite glow;display:flex;position:absolute;top:50%;transform:translateY(-50%);box-shadow:0 0 20px #dc143c66,0 0 40px #8b00004d,inset 0 0 20px #0000004d}.nav-button:hover{color:#fff;background:linear-gradient(135deg,#dc143ce6 0%,#8b0000 100%);border-color:#ff4500cc;transform:translateY(-50%)scale(1.1);box-shadow:0 0 30px #ff450099,0 0 60px #dc143c66,inset 0 0 25px #0003}.nav-button.prev{left:30px}.nav-button.next{right:30px}.custom-indicators{z-index:10;gap:16px;display:flex;position:absolute;bottom:30px;left:50%;transform:translate(-50%)}.indicator{cursor:pointer;background:#ffffff4d;border:2px solid #dc143c80;border-radius:50%;width:15px;height:15px;transition:all .3s;box-shadow:0 0 15px #00000080,inset 0 0 10px #8b00004d}.indicator.active{background:linear-gradient(135deg,#dc143c 0%,#ff4500cc 100%);border-color:#fffc;transform:scale(1.2);box-shadow:0 0 20px #dc143ccc,0 0 40px #ff450066,inset 0 0 10px #0003}.indicator:hover:not(.active){background:#dc143c99;border-color:#ff4500b3;transform:scale(1.1);box-shadow:0 0 15px #dc143c99,inset 0 0 8px #8b000066}@keyframes glow{0%{box-shadow:0 0 20px #dc143c66,0 0 40px #8b00004d,inset 0 0 20px #0000004d}50%{box-shadow:0 0 30px #dc143c99,0 0 60px #8b000066,inset 0 0 25px #0003}to{box-shadow:0 0 20px #dc143c66,0 0 40px #8b00004d,inset 0 0 20px #0000004d}}@media (width<=768px){.nav-button{width:60px;height:60px;font-size:18px}.nav-button.prev{left:15px}.nav-button.next{right:15px}.indicator{width:12px;height:12px}.custom-indicators{gap:10px}}'
            }, void 0, false, void 0, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                onMouseEnter: handleMouseEnter,
                onMouseLeave: handleMouseLeave,
                className: "jsx-f6392806088b47e8" + " " + "carousel-container",
                children: [
                    images.map((image, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-f6392806088b47e8" + " " + `carousel-slide ${index === currentSlide ? 'active' : ''}`,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: image.src,
                                alt: image.alt,
                                className: "jsx-f6392806088b47e8"
                            }, void 0, false, {
                                fileName: "[project]/app/components/Carousel.js",
                                lineNumber: 263,
                                columnNumber: 13
                            }, this)
                        }, index, false, {
                            fileName: "[project]/app/components/Carousel.js",
                            lineNumber: 259,
                            columnNumber: 11
                        }, this)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: goToPrevSlide,
                        "aria-label": "Previous slide",
                        className: "jsx-f6392806088b47e8" + " " + "nav-button prev",
                        children: "‹"
                    }, void 0, false, {
                        fileName: "[project]/app/components/Carousel.js",
                        lineNumber: 268,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: goToNextSlide,
                        "aria-label": "Next slide",
                        className: "jsx-f6392806088b47e8" + " " + "nav-button next",
                        children: "›"
                    }, void 0, false, {
                        fileName: "[project]/app/components/Carousel.js",
                        lineNumber: 276,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-f6392806088b47e8" + " " + "custom-indicators",
                        children: images.map((_, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>goToSlide(index),
                                "aria-label": `Go to slide ${index + 1}`,
                                className: "jsx-f6392806088b47e8" + " " + `indicator ${index === currentSlide ? 'active' : ''}`
                            }, index, false, {
                                fileName: "[project]/app/components/Carousel.js",
                                lineNumber: 287,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/components/Carousel.js",
                        lineNumber: 285,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/Carousel.js",
                lineNumber: 252,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
};
_s(Carousel, "1Kx3cfdvMnC0mCeLJm+LW/p9PPU=");
_c = Carousel;
const __TURBOPACK__default__export__ = Carousel;
var _c;
__turbopack_context__.k.register(_c, "Carousel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=app_components_Carousel_7dde1d75.js.map