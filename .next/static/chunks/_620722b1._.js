(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/components/Carousel.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
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
    // 🍱 Japanese Food themed images
    const images = [
        {
            src: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=1200",
            alt: "🍣 Fresh Sushi Selection",
            title: "新鮮な寿司"
        },
        {
            src: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=1200",
            alt: "🍜 Authentic Ramen Bowl",
            title: "本格的なラーメン"
        },
        {
            src: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=1200",
            alt: "🍤 Crispy Tempura",
            title: "サクサク天ぷら"
        },
        {
            src: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=1200",
            alt: "🍢 Yakitori Skewers",
            title: "焼き鳥串"
        },
        {
            src: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=1200",
            alt: "🍱 Tonkatsu Set Meal",
            title: "とんかつ定食"
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
                className: "jsx-ce134b24c87a8ff1"
            }, void 0, false, {
                fileName: "[project]/app/components/Carousel.js",
                lineNumber: 71,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                id: "ce134b24c87a8ff1",
                children: 'body,html{background:linear-gradient(135deg,#0a0a0a 0%,#1a1a1a 30%,#2d1b1b 70%,#3d2f2f 100%);min-height:100vh;margin:0;padding:0;font-family:Georgia,serif;overflow-x:hidden}body:before{content:"";pointer-events:none;z-index:0;background:radial-gradient(circle at 10% 20%,rgba(255,182,193,.1) 0%,transparent 50%),radial-gradient(circle at 80% 30%,rgba(255,192,203,.08) 0%,transparent 50%),radial-gradient(circle at 40% 70%,rgba(255,182,193,.06) 0%,transparent 50%),radial-gradient(circle at 90% 80%,rgba(255,192,203,.05) 0%,transparent 50%);width:100%;height:100%;position:fixed;top:0;left:0}.carousel-container{z-index:1;width:100vw;height:100vh;position:relative;overflow:hidden}.carousel-slide{opacity:0;width:100%;height:100%;transition:all 1.2s ease-in-out;position:absolute;top:0;left:0;transform:scale(1.05)}.carousel-slide.active{opacity:1;transform:scale(1)}.carousel-slide img{object-fit:cover;filter:brightness(.85)contrast(1.15)saturate(1.1);width:100%;height:100%}.carousel-slide:before{content:"";z-index:1;background:linear-gradient(135deg,rgba(233,30,99,.15) 0%,rgba(0,0,0,.3) 30%,rgba(255,182,193,.1) 70%,rgba(0,0,0,.4) 100%);position:absolute;top:0;bottom:0;left:0;right:0}.slide-title{z-index:5;color:#e91e63;text-align:center;-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);background:rgba(0,0,0,.7);border:2px solid #e91e63;border-radius:15px;padding:15px 25px;font-family:Georgia,serif;font-size:18px;font-weight:700;animation:3s ease-in-out infinite alternate titleGlow;position:absolute;bottom:80px;left:50%;transform:translate(-50%);box-shadow:0 0 20px rgba(233,30,99,.4),inset 0 1px rgba(255,255,255,.1)}@keyframes titleGlow{0%{text-shadow:0 0 10px rgba(233,30,99,.6);box-shadow:0 0 20px rgba(233,30,99,.4),inset 0 1px rgba(255,255,255,.1)}to{text-shadow:0 0 20px rgba(233,30,99,.8);box-shadow:0 0 30px rgba(233,30,99,.6),inset 0 1px rgba(255,255,255,.15)}}.nav-button{z-index:10;cursor:pointer;color:#fff;-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);background:linear-gradient(135deg,rgba(233,30,99,.8) 0%,rgba(173,20,87,.9) 100%);border:3px solid rgba(233,30,99,.6);border-radius:50%;justify-content:center;align-items:center;width:80px;height:80px;font-size:28px;font-weight:700;transition:all .4s;animation:4s ease-in-out infinite sakuraGlow;display:flex;position:absolute;top:50%;transform:translateY(-50%);box-shadow:0 0 25px rgba(233,30,99,.5),0 0 50px rgba(233,30,99,.3),inset 0 1px rgba(255,255,255,.2)}.nav-button:hover{color:#fff;background:linear-gradient(135deg,#e91e63 0%,rgba(240,98,146,.95) 100%);border-color:rgba(240,98,146,.8);transform:translateY(-50%)scale(1.15);box-shadow:0 0 40px rgba(240,98,146,.7),0 0 80px rgba(233,30,99,.5),inset 0 2px rgba(255,255,255,.3)}.nav-button.prev{left:40px}.nav-button.next{right:40px}.nav-button:before{content:"🌸";opacity:.8;font-size:16px;animation:6s ease-in-out infinite petalFloat;position:absolute;top:-10px;right:-10px}@keyframes petalFloat{0%,to{opacity:.8;transform:translateY(0)rotate(0)}50%{opacity:1;transform:translateY(-8px)rotate(180deg)}}.custom-indicators{z-index:10;-webkit-backdrop-filter:blur(15px);backdrop-filter:blur(15px);background:rgba(0,0,0,.3);border:2px solid rgba(233,30,99,.3);border-radius:25px;gap:20px;padding:15px 25px;display:flex;position:absolute;bottom:30px;left:50%;transform:translate(-50%)}.indicator{cursor:pointer;background:rgba(255,255,255,.2);border:2px solid rgba(233,30,99,.4);border-radius:50%;width:18px;height:18px;transition:all .4s;position:relative;box-shadow:0 0 15px rgba(0,0,0,.5),inset 0 1px rgba(255,255,255,.1)}.indicator:before{content:"🌸";opacity:0;font-size:10px;transition:all .3s;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}.indicator.active{background:linear-gradient(135deg,#e91e63 0%,rgba(240,98,146,.9) 100%);border-color:rgba(255,255,255,.8);transform:scale(1.3);box-shadow:0 0 25px rgba(233,30,99,.8),0 0 50px rgba(240,98,146,.4),inset 0 1px rgba(255,255,255,.3)}.indicator.active:before{opacity:1;font-size:12px}.indicator:hover:not(.active){background:rgba(233,30,99,.6);border-color:rgba(240,98,146,.7);transform:scale(1.15);box-shadow:0 0 20px rgba(233,30,99,.6),inset 0 1px rgba(255,255,255,.2)}.indicator:hover:not(.active):before{opacity:.7;font-size:11px}@keyframes sakuraGlow{0%{box-shadow:0 0 25px rgba(233,30,99,.5),0 0 50px rgba(233,30,99,.3),inset 0 1px rgba(255,255,255,.2)}50%{box-shadow:0 0 35px rgba(233,30,99,.7),0 0 70px rgba(233,30,99,.4),inset 0 2px rgba(255,255,255,.25)}to{box-shadow:0 0 25px rgba(233,30,99,.5),0 0 50px rgba(233,30,99,.3),inset 0 1px rgba(255,255,255,.2)}}.sakura-petals{pointer-events:none;z-index:3;width:100%;height:100%;position:absolute;top:0;left:0;overflow:hidden}.floating-petal{color:rgba(255,182,193,.7);opacity:.8;font-size:20px;animation:15s linear infinite floatDown;position:absolute}.floating-petal:first-child{animation-duration:12s;animation-delay:0s;left:10%}.floating-petal:nth-child(2){animation-duration:14s;animation-delay:2s;left:20%}.floating-petal:nth-child(3){animation-duration:16s;animation-delay:4s;left:30%}.floating-petal:nth-child(4){animation-duration:13s;animation-delay:1s;left:40%}.floating-petal:nth-child(5){animation-duration:15s;animation-delay:3s;left:50%}.floating-petal:nth-child(6){animation-duration:11s;animation-delay:5s;left:60%}.floating-petal:nth-child(7){animation-duration:17s;animation-delay:2.5s;left:70%}.floating-petal:nth-child(8){animation-duration:12.5s;animation-delay:4.5s;left:80%}.floating-petal:nth-child(9){animation-duration:14.5s;animation-delay:1.5s;left:90%}.floating-petal:nth-child(10){animation-duration:13.5s;animation-delay:6s;left:5%}@keyframes floatDown{0%{opacity:0;transform:translateY(-100px)rotate(0)}10%{opacity:1}90%{opacity:1}to{opacity:0;transform:translateY(calc(100vh + 100px))rotate(360deg)}}@media (max-width:768px){.nav-button{width:60px;height:60px;font-size:22px}.nav-button.prev{left:20px}.nav-button.next{right:20px}.indicator{width:15px;height:15px}.custom-indicators{gap:15px;padding:12px 20px}.slide-title{padding:12px 20px;font-size:16px;bottom:70px}.floating-petal{font-size:16px}}@media (max-width:480px){.nav-button{width:50px;height:50px;font-size:18px}.nav-button.prev{left:15px}.nav-button.next{right:15px}.slide-title{padding:10px 15px;font-size:14px;bottom:60px}.custom-indicators{gap:12px;padding:10px 15px}.floating-petal{font-size:14px}}'
            }, void 0, false, void 0, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                onMouseEnter: handleMouseEnter,
                onMouseLeave: handleMouseLeave,
                className: "jsx-ce134b24c87a8ff1" + " " + "carousel-container",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-ce134b24c87a8ff1" + " " + "sakura-petals",
                        children: [
                            ...Array(10)
                        ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-ce134b24c87a8ff1" + " " + "floating-petal",
                                children: "🌸"
                            }, i, false, {
                                fileName: "[project]/app/components/Carousel.js",
                                lineNumber: 470,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/app/components/Carousel.js",
                        lineNumber: 468,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    images.map((image, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-ce134b24c87a8ff1" + " " + "carousel-slide ".concat(index === currentSlide ? 'active' : ''),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: image.src,
                                    alt: image.alt,
                                    className: "jsx-ce134b24c87a8ff1"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/Carousel.js",
                                    lineNumber: 480,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-ce134b24c87a8ff1" + " " + "slide-title",
                                    children: [
                                        image.title,
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {
                                            className: "jsx-ce134b24c87a8ff1"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/Carousel.js",
                                            lineNumber: 483,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                            style: {
                                                fontSize: '14px',
                                                opacity: '0.8'
                                            },
                                            className: "jsx-ce134b24c87a8ff1",
                                            children: image.alt
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/Carousel.js",
                                            lineNumber: 484,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/Carousel.js",
                                    lineNumber: 481,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, index, true, {
                            fileName: "[project]/app/components/Carousel.js",
                            lineNumber: 476,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: goToPrevSlide,
                        "aria-label": "Previous slide",
                        className: "jsx-ce134b24c87a8ff1" + " " + "nav-button prev",
                        children: "‹"
                    }, void 0, false, {
                        fileName: "[project]/app/components/Carousel.js",
                        lineNumber: 490,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: goToNextSlide,
                        "aria-label": "Next slide",
                        className: "jsx-ce134b24c87a8ff1" + " " + "nav-button next",
                        children: "›"
                    }, void 0, false, {
                        fileName: "[project]/app/components/Carousel.js",
                        lineNumber: 498,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-ce134b24c87a8ff1" + " " + "custom-indicators",
                        children: images.map((_, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>goToSlide(index),
                                "aria-label": "Go to slide ".concat(index + 1),
                                className: "jsx-ce134b24c87a8ff1" + " " + "indicator ".concat(index === currentSlide ? 'active' : '')
                            }, index, false, {
                                fileName: "[project]/app/components/Carousel.js",
                                lineNumber: 509,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/app/components/Carousel.js",
                        lineNumber: 507,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/Carousel.js",
                lineNumber: 462,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true);
};
_s(Carousel, "1Kx3cfdvMnC0mCeLJm+LW/p9PPU=");
_c = Carousel;
const __TURBOPACK__default__export__ = Carousel;
var _c;
__turbopack_context__.k.register(_c, "Carousel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/Card.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const Card = ()=>{
    _s();
    const [selectedPlace, setSelectedPlace] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(null);
    const [showModal, setShowModal] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(false);
    // ข้อมูลร้านอาหารญี่ปุ่น
    const cardData = [
        {
            id: 1,
            image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=800",
            title: "Sushi Masterpiece",
            description: "ซูชิชั้นเลิศจากเชฟมากประสบการณ์ ด้วยวัตถุดิบสดใหม่จากญี่ปุ่น",
            details: {
                location: "โตเกียว สไตล์",
                bestTime: "มื้อกลางวัน - มื้อเย็น",
                activities: [
                    "Omakase",
                    "Nigiri",
                    "Sashimi",
                    "Maki Roll"
                ],
                entrance: "฿800 - ฿3,000",
                highlights: "ซูชิสดใหม่ทำด้วยมือโดยเชฟผู้เชี่ยวชาญ ข้าวญี่ปุ่นคุณภาพสูง และปลาดิบคัดสรรพิเศษ บรรยากาศสไตล์ญี่ปุ่นแท้"
            }
        },
        {
            id: 2,
            image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=800",
            title: "Ramen Heaven",
            description: "ราเมงต้นตำรับ น้ำซุปเข้มข้นเคี่ยวยาวนาน บะหมี่เส้นสดทำใหม่ทุกวัน",
            details: {
                location: "ฮอกไกโด สไตล์",
                bestTime: "ทุกมื้อ",
                activities: [
                    "Tonkotsu Ramen",
                    "Miso Ramen",
                    "Shoyu Ramen",
                    "Spicy Ramen"
                ],
                entrance: "฿280 - ฿450",
                highlights: "น้ำซุปกระดูกหมูเคี่ยว 18 ชั่วโมง เส้นบะหมี่ทำเองทุกวัน ชาชูหมูนุ่มละมุน และไข่ออนเซนแท้"
            }
        },
        {
            id: 3,
            image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=800",
            title: "Tempura Excellence",
            description: "เทมปุระทอดกรอบนอกนุ่มใน พร้อมซอสเด็ดและผักสดใหม่",
            details: {
                location: "เกียวโต สไตล์",
                bestTime: "มื้อกลางวัน",
                activities: [
                    "กุ้งเทมปุระ",
                    "ผักเทมปุระ",
                    "ปลาเทมปุระ",
                    "เทมปุระมิกซ์"
                ],
                entrance: "฿350 - ฿800",
                highlights: "แป้งทอดสูตรพิเศษเบาบาง ทอดด้วยน้ำมันคุณภาะสูง เสิร์ฟร้อนๆ พร้อมซอสเทนสึยุแท้"
            }
        },
        {
            id: 4,
            image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800",
            title: "Yakitori Grill House",
            description: "ไก่ย่างเสียบไม้สไตล์ญี่ปุ่น หมักด้วยซอสพิเศษย่างบนถ่าน",
            details: {
                location: "โอซาก้า สไตล์",
                bestTime: "มื้อเย็น",
                activities: [
                    "ไก่ย่าง",
                    "หนังไก่กรอบ",
                    "ตับไก่",
                    "ผักย่าง"
                ],
                entrance: "฿200 - ฿600",
                highlights: "ย่างบนเตาถ่านแบบดั้งเดิม ไก่สดคุณภาพดี เสิร์ฟร้อนๆ บรรยากาศอบอุ่นสไตล์อิซากายะ"
            }
        },
        {
            id: 5,
            image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=800",
            title: "Tonkatsu Paradise",
            description: "หมูทอดกรอบสไตล์ญี่ปุ่น เสิร์ฟพร้อมกะหล่ำปลีฝอยและซอสโทงคัทสึ",
            details: {
                location: "โตเกียว สไตล์",
                bestTime: "มื้อกลางวัน - มื้อเย็น",
                activities: [
                    "Hire Katsu",
                    "Rosu Katsu",
                    "Chicken Katsu",
                    "Cheese Katsu"
                ],
                entrance: "฿280 - ฿550",
                highlights: "หมูคุณภาะดีเลือกส่วน เคลือบเกล็ดขนมปังญี่ปุ่น ทอดกรอบนุ่ม เสิร์ฟพร้อมซอสโทงคัทสึแท้"
            }
        },
        {
            id: 6,
            image: "https://images.unsplash.com/photo-1563612116625-3012372fccce?w=800",
            title: "Shabu Shabu & Sukiyaki",
            description: "ชาบูชาบูและสุกี้ยากี้ญี่ปุ่นแท้ เนื้อบางสไลด์คุณภาพพรีเมียม",
            details: {
                location: "เกียวโต สไตล์",
                bestTime: "มื้อเย็น",
                activities: [
                    "Wagyu Shabu",
                    "Pork Shabu",
                    "Sukiyaki Set",
                    "Seafood Shabu"
                ],
                entrance: "฿450 - ฿1,500",
                highlights: "เนื้อวากิวสไลด์บางเฉือนสด น้ำซุปคุณภาพสูง ผักสดพร้อมซอสโพนสึและโกมะแท้"
            }
        },
        {
            id: 7,
            image: "https://images.unsplash.com/photo-1617093727343-374698b1b08d?w=800",
            title: "Okonomiyaki Spot",
            description: "โอโคโนมิยากิแป้งญี่ปุ่น ทำสดใหม่ต่อหน้าลูกค้า",
            details: {
                location: "ฮิโรชิมา สไตล์",
                bestTime: "มื้อกลางวัน - มื้อเย็น",
                activities: [
                    "Hiroshima Style",
                    "Osaka Style",
                    "Seafood Mix",
                    "Pork & Cheese"
                ],
                entrance: "฿250 - ฿450",
                highlights: "ทำสดใหม่บนเหล็กร้อน เติมไส้มากมาย ราดซอสโอโคโนมิยากิและมายองเนสญี่ปุ่น โรยโบนิโตะ"
            }
        },
        {
            id: 8,
            image: "https://images.unsplash.com/photo-1608039829572-78524f79c4c7?w=800",
            title: "Udon & Soba House",
            description: "อุด้งและโซบะเส้นทำมือ น้ำซุปกัตสึโอบูชิแท้",
            details: {
                location: "คางาวะ สไตล์",
                bestTime: "ทุกมื้อ",
                activities: [
                    "Kake Udon",
                    "Tempura Udon",
                    "Cold Soba",
                    "Hot Soba"
                ],
                entrance: "฿180 - ฿350",
                highlights: "เส้นอุด้งเหนียวนุ่มทำมือ เส้นโซบะจากแป้งบัควีทแท้ น้ำซุปใสหอมกลิ่นกัตสึโอบุชิ"
            }
        },
        {
            id: 9,
            image: "https://www.asiantemple.cz/wp-content/uploads/2022/07/TEPPAN-06-scaled.jpg",
            title: "Teppanyaki Show",
            description: "เทปปันยากิสดๆ ร้อนๆ ปรุงต่อหน้าด้วยเชฟมากทักษะ",
            details: {
                location: "โตเกียว สไตล์",
                bestTime: "มื้อเย็น",
                activities: [
                    "Wagyu Steak",
                    "Seafood Mix",
                    "Fried Rice",
                    "Garlic Rice"
                ],
                entrance: "฿800 - ฿2,500",
                highlights: "โชว์การปรุงสุดพิเศษจากเชฟ เนื้อวากิวชั้นดี ซีฟู้ดสด ปรุงบนเหล็กร้อนต่อหน้า"
            }
        }
    ];
    const handleShowDetails = (place)=>{
        setSelectedPlace(place);
        setShowModal(true);
    };
    const handleCloseModal = ()=>{
        setShowModal(false);
        setSelectedPlace(null);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                id: "6ed28960f6499e2f",
                children: "@keyframes float{0%,to{transform:translateY(0)rotate(15deg)}50%{transform:translateY(-20px)rotate(15deg)}}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}@keyframes slideIn{0%{opacity:0;transform:scale(.8)translateY(-50px)}to{opacity:1;transform:scale(1)translateY(0)}}@keyframes bounce{0%,20%,50%,80%,to{transform:translateY(0)}40%{transform:translateY(-10px)}60%{transform:translateY(-5px)}}"
            }, void 0, false, void 0, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("link", {
                href: "https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/css/bootstrap.min.css",
                rel: "stylesheet",
                className: "jsx-6ed28960f6499e2f"
            }, void 0, false, {
                fileName: "[project]/app/components/Card.js",
                lineNumber: 164,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    background: 'linear-gradient(135deg, #fce4ec 0%, #f8bbd9 25%, #e1bee7 50%, #c8a2c8 75%, #ffcdd2 100%)',
                    minHeight: '100vh',
                    position: 'relative',
                    overflow: 'hidden'
                },
                className: "jsx-6ed28960f6499e2f" + " " + "container-fluid py-5",
                children: [
                    [
                        '10%|10%|2rem|0.4',
                        '20%|5%|1.5rem|0.5',
                        '85%|20%|1.8rem|0.3',
                        '75%|15%|1.3rem|0.6'
                    ].map((item, idx)=>{
                        const [top, left, size, opacity] = item.split('|');
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                top: top,
                                left: left,
                                fontSize: size,
                                color: "rgba(255, 182, 193, ".concat(opacity, ")"),
                                zIndex: 0,
                                animation: "float ".concat(6 + idx, "s ease-in-out infinite ").concat(idx % 2 === 0 ? '' : 'reverse'),
                                transform: "rotate(".concat(idx % 2 === 0 ? 15 : -10, "deg)")
                            },
                            className: "jsx-6ed28960f6499e2f" + " " + "position-absolute",
                            children: "🌸"
                        }, idx, false, {
                            fileName: "[project]/app/components/Card.js",
                            lineNumber: 182,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0));
                    }),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            zIndex: 1
                        },
                        className: "jsx-6ed28960f6499e2f" + " " + "container position-relative",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-6ed28960f6499e2f" + " " + "row text-center mb-5",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-6ed28960f6499e2f" + " " + "col-12",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            style: {
                                                color: '#d81b60',
                                                textShadow: '3px 3px 10px rgba(216, 27, 96, 0.3), 0 0 25px rgba(255, 182, 193, 0.4)',
                                                filter: 'drop-shadow(0 0 15px rgba(216, 27, 96, 0.2))',
                                                fontFamily: 'serif'
                                            },
                                            className: "jsx-6ed28960f6499e2f" + " " + "display-4 fw-bold mb-3",
                                            children: "🍱 Japanese Restaurant Guide 🍣"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/Card.js",
                                            lineNumber: 203,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            style: {
                                                color: '#8e24aa',
                                                textShadow: '2px 2px 6px rgba(255,255,255,0.8)',
                                                fontWeight: '500'
                                            },
                                            className: "jsx-6ed28960f6499e2f" + " " + "lead mb-3",
                                            children: "สัมผัสรสชาติแท้จากแดนอาทิตย์อุทัย อาหารญี่ปุ่นต้นตำรับ"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/Card.js",
                                            lineNumber: 214,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/Card.js",
                                    lineNumber: 202,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/app/components/Card.js",
                                lineNumber: 201,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-6ed28960f6499e2f" + " " + "row g-4",
                                children: cardData.map((card)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-6ed28960f6499e2f" + " " + "col-lg-4 col-md-6 col-sm-12",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                background: 'linear-gradient(145deg, rgba(255,255,255,0.95), rgba(252,228,236,0.9))',
                                                transition: 'all 0.4s ease',
                                                cursor: 'pointer',
                                                borderRadius: '20px',
                                                overflow: 'hidden',
                                                boxShadow: '0 10px 30px rgba(216, 27, 96, 0.15)'
                                            },
                                            onClick: ()=>handleShowDetails(card),
                                            onMouseEnter: (e)=>e.currentTarget.style.transform = 'translateY(-10px) scale(1.02)',
                                            onMouseLeave: (e)=>e.currentTarget.style.transform = 'translateY(0) scale(1)',
                                            className: "jsx-6ed28960f6499e2f" + " " + "card h-100 border-0",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    src: card.image,
                                                    alt: card.title,
                                                    style: {
                                                        height: '250px',
                                                        objectFit: 'cover'
                                                    },
                                                    className: "jsx-6ed28960f6499e2f" + " " + "card-img-top"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/Card.js",
                                                    lineNumber: 245,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-6ed28960f6499e2f" + " " + "card-body",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                            className: "jsx-6ed28960f6499e2f" + " " + "card-title fw-bold",
                                                            children: card.title
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/Card.js",
                                                            lineNumber: 252,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "jsx-6ed28960f6499e2f" + " " + "card-text",
                                                            children: card.description
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/Card.js",
                                                            lineNumber: 253,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/components/Card.js",
                                                    lineNumber: 251,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/Card.js",
                                            lineNumber: 231,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, card.id, false, {
                                        fileName: "[project]/app/components/Card.js",
                                        lineNumber: 230,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)))
                            }, void 0, false, {
                                fileName: "[project]/app/components/Card.js",
                                lineNumber: 228,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/Card.js",
                        lineNumber: 200,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    showModal && selectedPlace && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            zIndex: 9999,
                            backgroundColor: 'rgba(0,0,0,0.8)',
                            backdropFilter: 'blur(8px)',
                            animation: 'fadeIn 0.3s ease-in-out'
                        },
                        onClick: handleCloseModal,
                        className: "jsx-6ed28960f6499e2f" + " " + "position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                maxWidth: '600px',
                                width: '90%',
                                maxHeight: '80vh',
                                background: 'linear-gradient(145deg, rgba(255,255,255,0.98), rgba(255,240,245,0.95))',
                                borderRadius: '25px',
                                overflowY: 'auto',
                                animation: 'slideIn 0.4s ease'
                            },
                            onClick: (e)=>e.stopPropagation(),
                            className: "jsx-6ed28960f6499e2f" + " " + "position-relative",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleCloseModal,
                                    style: {
                                        position: 'absolute',
                                        top: '20px',
                                        right: '20px',
                                        zIndex: 10,
                                        background: 'linear-gradient(45deg, #d81b60, #e91e63)',
                                        border: 'none',
                                        borderRadius: '50%',
                                        width: '35px',
                                        height: '35px',
                                        color: '#fff',
                                        fontSize: '1.2rem',
                                        cursor: 'pointer'
                                    },
                                    className: "jsx-6ed28960f6499e2f",
                                    children: "×"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/Card.js",
                                    lineNumber: 287,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-6ed28960f6499e2f" + " " + "p-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: selectedPlace.image,
                                            alt: selectedPlace.title,
                                            style: {
                                                maxHeight: '250px',
                                                objectFit: 'cover',
                                                width: '100%'
                                            },
                                            className: "jsx-6ed28960f6499e2f" + " " + "img-fluid mb-3 rounded"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/Card.js",
                                            lineNumber: 308,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "jsx-6ed28960f6499e2f" + " " + "fw-bold mb-3 text-center",
                                            children: selectedPlace.title
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/Card.js",
                                            lineNumber: 314,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "jsx-6ed28960f6499e2f" + " " + "mb-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    className: "jsx-6ed28960f6499e2f",
                                                    children: "📍 สไตล์:"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/Card.js",
                                                    lineNumber: 315,
                                                    columnNumber: 37
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                " ",
                                                selectedPlace.details.location
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/Card.js",
                                            lineNumber: 315,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "jsx-6ed28960f6499e2f" + " " + "mb-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    className: "jsx-6ed28960f6499e2f",
                                                    children: "🕐 เวลาแนะนำ:"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/Card.js",
                                                    lineNumber: 316,
                                                    columnNumber: 37
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                " ",
                                                selectedPlace.details.bestTime
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/Card.js",
                                            lineNumber: 316,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "jsx-6ed28960f6499e2f" + " " + "mb-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    className: "jsx-6ed28960f6499e2f",
                                                    children: "💰 ราคา:"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/Card.js",
                                                    lineNumber: 317,
                                                    columnNumber: 37
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                " ",
                                                selectedPlace.details.entrance
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/Card.js",
                                            lineNumber: 317,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "jsx-6ed28960f6499e2f" + " " + "mb-3",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                className: "jsx-6ed28960f6499e2f",
                                                children: "✨ ไฮไลท์:"
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/Card.js",
                                                lineNumber: 318,
                                                columnNumber: 37
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/Card.js",
                                            lineNumber: 318,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "jsx-6ed28960f6499e2f" + " " + "mb-4",
                                            children: selectedPlace.details.highlights
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/Card.js",
                                            lineNumber: 319,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-6ed28960f6499e2f" + " " + "text-center",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>alert('กำลังเปิดระบบสั่งอาหาร...'),
                                                style: {
                                                    background: 'linear-gradient(45deg, #d81b60, #e91e63)',
                                                    border: 'none',
                                                    borderRadius: '50px',
                                                    padding: '15px 40px',
                                                    color: '#fff',
                                                    fontSize: '1.1rem',
                                                    fontWeight: 'bold',
                                                    cursor: 'pointer',
                                                    boxShadow: '0 5px 20px rgba(216, 27, 96, 0.4)',
                                                    transition: 'all 0.3s ease',
                                                    display: 'inline-flex',
                                                    alignItems: 'center',
                                                    gap: '10px'
                                                },
                                                onMouseEnter: (e)=>{
                                                    e.currentTarget.style.transform = 'scale(1.05)';
                                                    e.currentTarget.style.boxShadow = '0 8px 30px rgba(216, 27, 96, 0.6)';
                                                },
                                                onMouseLeave: (e)=>{
                                                    e.currentTarget.style.transform = 'scale(1)';
                                                    e.currentTarget.style.boxShadow = '0 5px 20px rgba(216, 27, 96, 0.4)';
                                                },
                                                className: "jsx-6ed28960f6499e2f",
                                                children: "🍱 สั่งอาหาร"
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/Card.js",
                                                lineNumber: 323,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/Card.js",
                                            lineNumber: 322,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/Card.js",
                                    lineNumber: 307,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/Card.js",
                            lineNumber: 273,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/app/components/Card.js",
                        lineNumber: 263,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/Card.js",
                lineNumber: 169,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("script", {
                src: "https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/js/bootstrap.bundle.min.js",
                className: "jsx-6ed28960f6499e2f"
            }, void 0, false, {
                fileName: "[project]/app/components/Card.js",
                lineNumber: 359,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true);
};
_s(Card, "zVBNfzIHe17IvHVfBCp5ok+30Wo=");
_c = Card;
const __TURBOPACK__default__export__ = Card;
var _c;
__turbopack_context__.k.register(_c, "Card");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            case REACT_ACTIVITY_TYPE:
                return "Activity";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_CONTEXT_TYPE:
                return type.displayName || "Context";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        try {
            testStringCoercion(value);
            var JSCompiler_inline_result = !1;
        } catch (e) {
            JSCompiler_inline_result = !0;
        }
        if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
            return testStringCoercion(value);
        }
    }
    function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE) return "<...>";
        try {
            var name = getComponentNameFromType(type);
            return name ? "<" + name + ">" : "<...>";
        } catch (x) {
            return "<...>";
        }
    }
    function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
    }
    function UnknownOwner() {
        return Error("react-stack-top-frame");
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
        }
        warnAboutAccessingKey.isReactWarning = !0;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
        });
    }
    function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, props, owner, debugStack, debugTask) {
        var refProp = props.ref;
        type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner
        };
        null !== (void 0 !== refProp ? refProp : null) ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", {
            enumerable: !1,
            value: null
        });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null
        });
        Object.defineProperty(type, "_debugStack", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStack, debugTask) {
        var children = config.children;
        if (void 0 !== children) if (isStaticChildren) if (isArrayImpl(children)) {
            for(isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)validateChildKeys(children[isStaticChildren]);
            Object.freeze && Object.freeze(children);
        } else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else validateChildKeys(children);
        if (hasOwnProperty.call(config, "key")) {
            children = getComponentNameFromType(type);
            var keys = Object.keys(config).filter(function(k) {
                return "key" !== k;
            });
            isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
            didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = !0);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        if ("key" in config) {
            maybeKey = {};
            for(var propName in config)"key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && defineKeyPropWarningGetter(maybeKey, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
        return ReactElement(type, children, maybeKey, getOwner(), debugStack, debugTask);
    }
    function validateChildKeys(node) {
        "object" === typeof node && null !== node && node.$$typeof === REACT_ELEMENT_TYPE && node._store && (node._store.validated = 1);
    }
    var React = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
        return null;
    };
    React = {
        react_stack_bottom_frame: function(callStackForError) {
            return callStackForError();
        }
    };
    var specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var unknownOwnerDebugStack = React.react_stack_bottom_frame.bind(React, UnknownOwner)();
    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
    var didWarnAboutKeySpread = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsxDEV = function(type, config, maybeKey, isStaticChildren) {
        var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        return jsxDEVImpl(type, config, maybeKey, isStaticChildren, trackActualOwner ? Error("react-stack-top-frame") : unknownOwnerDebugStack, trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
    };
}();
}),
"[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)");
}
}),
"[project]/node_modules/next/dist/compiled/client-only/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

}),
"[project]/node_modules/styled-jsx/dist/index/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
__turbopack_context__.r("[project]/node_modules/next/dist/compiled/client-only/index.js [app-client] (ecmascript)");
var React = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
function _interopDefaultLegacy(e) {
    return e && typeof e === 'object' && 'default' in e ? e : {
        'default': e
    };
}
var React__default = /*#__PURE__*/ _interopDefaultLegacy(React);
/*
Based on Glamor's sheet
https://github.com/threepointone/glamor/blob/667b480d31b3721a905021b26e1290ce92ca2879/src/sheet.js
*/ function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
var isProd = typeof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] !== "undefined" && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env && ("TURBOPACK compile-time value", "development") === "production";
var isString = function(o) {
    return Object.prototype.toString.call(o) === "[object String]";
};
var StyleSheet = /*#__PURE__*/ function() {
    function StyleSheet(param) {
        var ref = param === void 0 ? {} : param, _name = ref.name, name = _name === void 0 ? "stylesheet" : _name, _optimizeForSpeed = ref.optimizeForSpeed, optimizeForSpeed = _optimizeForSpeed === void 0 ? isProd : _optimizeForSpeed;
        invariant$1(isString(name), "`name` must be a string");
        this._name = name;
        this._deletedRulePlaceholder = "#" + name + "-deleted-rule____{}";
        invariant$1(typeof optimizeForSpeed === "boolean", "`optimizeForSpeed` must be a boolean");
        this._optimizeForSpeed = optimizeForSpeed;
        this._serverSheet = undefined;
        this._tags = [];
        this._injected = false;
        this._rulesCount = 0;
        var node = typeof window !== "undefined" && document.querySelector('meta[property="csp-nonce"]');
        this._nonce = node ? node.getAttribute("content") : null;
    }
    var _proto = StyleSheet.prototype;
    _proto.setOptimizeForSpeed = function setOptimizeForSpeed(bool) {
        invariant$1(typeof bool === "boolean", "`setOptimizeForSpeed` accepts a boolean");
        invariant$1(this._rulesCount === 0, "optimizeForSpeed cannot be when rules have already been inserted");
        this.flush();
        this._optimizeForSpeed = bool;
        this.inject();
    };
    _proto.isOptimizeForSpeed = function isOptimizeForSpeed() {
        return this._optimizeForSpeed;
    };
    _proto.inject = function inject() {
        var _this = this;
        invariant$1(!this._injected, "sheet already injected");
        this._injected = true;
        if (typeof window !== "undefined" && this._optimizeForSpeed) {
            this._tags[0] = this.makeStyleTag(this._name);
            this._optimizeForSpeed = "insertRule" in this.getSheet();
            if (!this._optimizeForSpeed) {
                if ("TURBOPACK compile-time truthy", 1) {
                    console.warn("StyleSheet: optimizeForSpeed mode not supported falling back to standard mode.");
                }
                this.flush();
                this._injected = true;
            }
            return;
        }
        this._serverSheet = {
            cssRules: [],
            insertRule: function(rule, index) {
                if (typeof index === "number") {
                    _this._serverSheet.cssRules[index] = {
                        cssText: rule
                    };
                } else {
                    _this._serverSheet.cssRules.push({
                        cssText: rule
                    });
                }
                return index;
            },
            deleteRule: function(index) {
                _this._serverSheet.cssRules[index] = null;
            }
        };
    };
    _proto.getSheetForTag = function getSheetForTag(tag) {
        if (tag.sheet) {
            return tag.sheet;
        }
        // this weirdness brought to you by firefox
        for(var i = 0; i < document.styleSheets.length; i++){
            if (document.styleSheets[i].ownerNode === tag) {
                return document.styleSheets[i];
            }
        }
    };
    _proto.getSheet = function getSheet() {
        return this.getSheetForTag(this._tags[this._tags.length - 1]);
    };
    _proto.insertRule = function insertRule(rule, index) {
        invariant$1(isString(rule), "`insertRule` accepts only strings");
        if (typeof window === "undefined") {
            if (typeof index !== "number") {
                index = this._serverSheet.cssRules.length;
            }
            this._serverSheet.insertRule(rule, index);
            return this._rulesCount++;
        }
        if (this._optimizeForSpeed) {
            var sheet = this.getSheet();
            if (typeof index !== "number") {
                index = sheet.cssRules.length;
            }
            // this weirdness for perf, and chrome's weird bug
            // https://stackoverflow.com/questions/20007992/chrome-suddenly-stopped-accepting-insertrule
            try {
                sheet.insertRule(rule, index);
            } catch (error) {
                if ("TURBOPACK compile-time truthy", 1) {
                    console.warn("StyleSheet: illegal rule: \n\n" + rule + "\n\nSee https://stackoverflow.com/q/20007992 for more info");
                }
                return -1;
            }
        } else {
            var insertionPoint = this._tags[index];
            this._tags.push(this.makeStyleTag(this._name, rule, insertionPoint));
        }
        return this._rulesCount++;
    };
    _proto.replaceRule = function replaceRule(index, rule) {
        if (this._optimizeForSpeed || typeof window === "undefined") {
            var sheet = typeof window !== "undefined" ? this.getSheet() : this._serverSheet;
            if (!rule.trim()) {
                rule = this._deletedRulePlaceholder;
            }
            if (!sheet.cssRules[index]) {
                // @TBD Should we throw an error?
                return index;
            }
            sheet.deleteRule(index);
            try {
                sheet.insertRule(rule, index);
            } catch (error) {
                if ("TURBOPACK compile-time truthy", 1) {
                    console.warn("StyleSheet: illegal rule: \n\n" + rule + "\n\nSee https://stackoverflow.com/q/20007992 for more info");
                }
                // In order to preserve the indices we insert a deleteRulePlaceholder
                sheet.insertRule(this._deletedRulePlaceholder, index);
            }
        } else {
            var tag = this._tags[index];
            invariant$1(tag, "old rule at index `" + index + "` not found");
            tag.textContent = rule;
        }
        return index;
    };
    _proto.deleteRule = function deleteRule(index) {
        if (typeof window === "undefined") {
            this._serverSheet.deleteRule(index);
            return;
        }
        if (this._optimizeForSpeed) {
            this.replaceRule(index, "");
        } else {
            var tag = this._tags[index];
            invariant$1(tag, "rule at index `" + index + "` not found");
            tag.parentNode.removeChild(tag);
            this._tags[index] = null;
        }
    };
    _proto.flush = function flush() {
        this._injected = false;
        this._rulesCount = 0;
        if (typeof window !== "undefined") {
            this._tags.forEach(function(tag) {
                return tag && tag.parentNode.removeChild(tag);
            });
            this._tags = [];
        } else {
            // simpler on server
            this._serverSheet.cssRules = [];
        }
    };
    _proto.cssRules = function cssRules() {
        var _this = this;
        if (typeof window === "undefined") {
            return this._serverSheet.cssRules;
        }
        return this._tags.reduce(function(rules, tag) {
            if (tag) {
                rules = rules.concat(Array.prototype.map.call(_this.getSheetForTag(tag).cssRules, function(rule) {
                    return rule.cssText === _this._deletedRulePlaceholder ? null : rule;
                }));
            } else {
                rules.push(null);
            }
            return rules;
        }, []);
    };
    _proto.makeStyleTag = function makeStyleTag(name, cssString, relativeToTag) {
        if (cssString) {
            invariant$1(isString(cssString), "makeStyleTag accepts only strings as second parameter");
        }
        var tag = document.createElement("style");
        if (this._nonce) tag.setAttribute("nonce", this._nonce);
        tag.type = "text/css";
        tag.setAttribute("data-" + name, "");
        if (cssString) {
            tag.appendChild(document.createTextNode(cssString));
        }
        var head = document.head || document.getElementsByTagName("head")[0];
        if (relativeToTag) {
            head.insertBefore(tag, relativeToTag);
        } else {
            head.appendChild(tag);
        }
        return tag;
    };
    _createClass(StyleSheet, [
        {
            key: "length",
            get: function get() {
                return this._rulesCount;
            }
        }
    ]);
    return StyleSheet;
}();
function invariant$1(condition, message) {
    if (!condition) {
        throw new Error("StyleSheet: " + message + ".");
    }
}
function hash(str) {
    var _$hash = 5381, i = str.length;
    while(i){
        _$hash = _$hash * 33 ^ str.charCodeAt(--i);
    }
    /* JavaScript does bitwise operations (like XOR, above) on 32-bit signed
   * integers. Since we want the results to be always positive, convert the
   * signed int to an unsigned by doing an unsigned bitshift. */ return _$hash >>> 0;
}
var stringHash = hash;
var sanitize = function(rule) {
    return rule.replace(/\/style/gi, "\\/style");
};
var cache = {};
/**
 * computeId
 *
 * Compute and memoize a jsx id from a basedId and optionally props.
 */ function computeId(baseId, props) {
    if (!props) {
        return "jsx-" + baseId;
    }
    var propsToString = String(props);
    var key = baseId + propsToString;
    if (!cache[key]) {
        cache[key] = "jsx-" + stringHash(baseId + "-" + propsToString);
    }
    return cache[key];
}
/**
 * computeSelector
 *
 * Compute and memoize dynamic selectors.
 */ function computeSelector(id, css) {
    var selectoPlaceholderRegexp = /__jsx-style-dynamic-selector/g;
    // Sanitize SSR-ed CSS.
    // Client side code doesn't need to be sanitized since we use
    // document.createTextNode (dev) and the CSSOM api sheet.insertRule (prod).
    if (typeof window === "undefined") {
        css = sanitize(css);
    }
    var idcss = id + css;
    if (!cache[idcss]) {
        cache[idcss] = css.replace(selectoPlaceholderRegexp, id);
    }
    return cache[idcss];
}
function mapRulesToStyle(cssRules, options) {
    if (options === void 0) options = {};
    return cssRules.map(function(args) {
        var id = args[0];
        var css = args[1];
        return /*#__PURE__*/ React__default["default"].createElement("style", {
            id: "__" + id,
            // Avoid warnings upon render with a key
            key: "__" + id,
            nonce: options.nonce ? options.nonce : undefined,
            dangerouslySetInnerHTML: {
                __html: css
            }
        });
    });
}
var StyleSheetRegistry = /*#__PURE__*/ function() {
    function StyleSheetRegistry(param) {
        var ref = param === void 0 ? {} : param, _styleSheet = ref.styleSheet, styleSheet = _styleSheet === void 0 ? null : _styleSheet, _optimizeForSpeed = ref.optimizeForSpeed, optimizeForSpeed = _optimizeForSpeed === void 0 ? false : _optimizeForSpeed;
        this._sheet = styleSheet || new StyleSheet({
            name: "styled-jsx",
            optimizeForSpeed: optimizeForSpeed
        });
        this._sheet.inject();
        if (styleSheet && typeof optimizeForSpeed === "boolean") {
            this._sheet.setOptimizeForSpeed(optimizeForSpeed);
            this._optimizeForSpeed = this._sheet.isOptimizeForSpeed();
        }
        this._fromServer = undefined;
        this._indices = {};
        this._instancesCounts = {};
    }
    var _proto = StyleSheetRegistry.prototype;
    _proto.add = function add(props) {
        var _this = this;
        if (undefined === this._optimizeForSpeed) {
            this._optimizeForSpeed = Array.isArray(props.children);
            this._sheet.setOptimizeForSpeed(this._optimizeForSpeed);
            this._optimizeForSpeed = this._sheet.isOptimizeForSpeed();
        }
        if (typeof window !== "undefined" && !this._fromServer) {
            this._fromServer = this.selectFromServer();
            this._instancesCounts = Object.keys(this._fromServer).reduce(function(acc, tagName) {
                acc[tagName] = 0;
                return acc;
            }, {});
        }
        var ref = this.getIdAndRules(props), styleId = ref.styleId, rules = ref.rules;
        // Deduping: just increase the instances count.
        if (styleId in this._instancesCounts) {
            this._instancesCounts[styleId] += 1;
            return;
        }
        var indices = rules.map(function(rule) {
            return _this._sheet.insertRule(rule);
        }) // Filter out invalid rules
        .filter(function(index) {
            return index !== -1;
        });
        this._indices[styleId] = indices;
        this._instancesCounts[styleId] = 1;
    };
    _proto.remove = function remove(props) {
        var _this = this;
        var styleId = this.getIdAndRules(props).styleId;
        invariant(styleId in this._instancesCounts, "styleId: `" + styleId + "` not found");
        this._instancesCounts[styleId] -= 1;
        if (this._instancesCounts[styleId] < 1) {
            var tagFromServer = this._fromServer && this._fromServer[styleId];
            if (tagFromServer) {
                tagFromServer.parentNode.removeChild(tagFromServer);
                delete this._fromServer[styleId];
            } else {
                this._indices[styleId].forEach(function(index) {
                    return _this._sheet.deleteRule(index);
                });
                delete this._indices[styleId];
            }
            delete this._instancesCounts[styleId];
        }
    };
    _proto.update = function update(props, nextProps) {
        this.add(nextProps);
        this.remove(props);
    };
    _proto.flush = function flush() {
        this._sheet.flush();
        this._sheet.inject();
        this._fromServer = undefined;
        this._indices = {};
        this._instancesCounts = {};
    };
    _proto.cssRules = function cssRules() {
        var _this = this;
        var fromServer = this._fromServer ? Object.keys(this._fromServer).map(function(styleId) {
            return [
                styleId,
                _this._fromServer[styleId]
            ];
        }) : [];
        var cssRules = this._sheet.cssRules();
        return fromServer.concat(Object.keys(this._indices).map(function(styleId) {
            return [
                styleId,
                _this._indices[styleId].map(function(index) {
                    return cssRules[index].cssText;
                }).join(_this._optimizeForSpeed ? "" : "\n")
            ];
        }) // filter out empty rules
        .filter(function(rule) {
            return Boolean(rule[1]);
        }));
    };
    _proto.styles = function styles(options) {
        return mapRulesToStyle(this.cssRules(), options);
    };
    _proto.getIdAndRules = function getIdAndRules(props) {
        var css = props.children, dynamic = props.dynamic, id = props.id;
        if (dynamic) {
            var styleId = computeId(id, dynamic);
            return {
                styleId: styleId,
                rules: Array.isArray(css) ? css.map(function(rule) {
                    return computeSelector(styleId, rule);
                }) : [
                    computeSelector(styleId, css)
                ]
            };
        }
        return {
            styleId: computeId(id),
            rules: Array.isArray(css) ? css : [
                css
            ]
        };
    };
    /**
   * selectFromServer
   *
   * Collects style tags from the document with id __jsx-XXX
   */ _proto.selectFromServer = function selectFromServer() {
        var elements = Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]'));
        return elements.reduce(function(acc, element) {
            var id = element.id.slice(2);
            acc[id] = element;
            return acc;
        }, {});
    };
    return StyleSheetRegistry;
}();
function invariant(condition, message) {
    if (!condition) {
        throw new Error("StyleSheetRegistry: " + message + ".");
    }
}
var StyleSheetContext = /*#__PURE__*/ React.createContext(null);
StyleSheetContext.displayName = "StyleSheetContext";
function createStyleRegistry() {
    return new StyleSheetRegistry();
}
function StyleRegistry(param) {
    var configuredRegistry = param.registry, children = param.children;
    var rootRegistry = React.useContext(StyleSheetContext);
    var ref = React.useState({
        "StyleRegistry.useState[ref]": function() {
            return rootRegistry || configuredRegistry || createStyleRegistry();
        }
    }["StyleRegistry.useState[ref]"]), registry = ref[0];
    return /*#__PURE__*/ React__default["default"].createElement(StyleSheetContext.Provider, {
        value: registry
    }, children);
}
function useStyleRegistry() {
    return React.useContext(StyleSheetContext);
}
// Opt-into the new `useInsertionEffect` API in React 18, fallback to `useLayoutEffect`.
// https://github.com/reactwg/react-18/discussions/110
var useInsertionEffect = React__default["default"].useInsertionEffect || React__default["default"].useLayoutEffect;
var defaultRegistry = typeof window !== "undefined" ? createStyleRegistry() : undefined;
function JSXStyle(props) {
    var registry = defaultRegistry ? defaultRegistry : useStyleRegistry();
    // If `registry` does not exist, we do nothing here.
    if (!registry) {
        return null;
    }
    if (typeof window === "undefined") {
        registry.add(props);
        return null;
    }
    useInsertionEffect({
        "JSXStyle.useInsertionEffect": function() {
            registry.add(props);
            return ({
                "JSXStyle.useInsertionEffect": function() {
                    registry.remove(props);
                }
            })["JSXStyle.useInsertionEffect"];
        // props.children can be string[], will be striped since id is identical
        }
    }["JSXStyle.useInsertionEffect"], [
        props.id,
        String(props.dynamic)
    ]);
    return null;
}
JSXStyle.dynamic = function(info) {
    return info.map(function(tagInfo) {
        var baseId = tagInfo[0];
        var props = tagInfo[1];
        return computeId(baseId, props);
    }).join(" ");
};
exports.StyleRegistry = StyleRegistry;
exports.createStyleRegistry = createStyleRegistry;
exports.style = JSXStyle;
exports.useStyleRegistry = useStyleRegistry;
}),
"[project]/node_modules/styled-jsx/style.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = __turbopack_context__.r("[project]/node_modules/styled-jsx/dist/index/index.js [app-client] (ecmascript)").style;
}),
]);

//# sourceMappingURL=_620722b1._.js.map