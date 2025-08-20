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
            src: "https://img.lovepik.com/background/20211020/medium/lovepik-global-information-technology-background-image_400060087.jpg",
            alt: "01"
        },
        {
            src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2832&q=80",
            alt: "02"
        },
        {
            src: "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2832&q=80",
            alt: "03"
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
                className: "jsx-58eb15c7b597de17"
            }, void 0, false, {
                fileName: "[project]/app/components/Carousel.js",
                lineNumber: 57,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                id: "58eb15c7b597de17",
                children: 'body,html{background:linear-gradient(135deg,#1a0000 0%,#300 50%,#000 100%);min-height:100vh;margin:0;padding:0;font-family:Segoe UI,Tahoma,Geneva,Verdana,sans-serif}.carousel-container{width:100vw;height:100vh;position:relative;overflow:hidden}.carousel-slide{opacity:0;width:100%;height:100%;transition:opacity .8s ease-in-out;position:absolute;top:0;left:0}.carousel-slide.active{opacity:1}.carousel-slide img{object-fit:cover;filter:brightness(.8)contrast(1.1);width:100%;height:100%}.carousel-slide:before{content:"";z-index:1;background:linear-gradient(45deg,#0000004d 0%,#8b000033 50%,#0006 100%);position:absolute;inset:0}.nav-button{z-index:10;cursor:pointer;color:#fff;background:linear-gradient(135deg,#8b0000cc 0%,#000000e6 100%);border:2px solid #dc143c99;border-radius:50%;justify-content:center;align-items:center;width:80px;height:80px;font-size:24px;transition:all .3s;animation:3s ease-in-out infinite glow;display:flex;position:absolute;top:50%;transform:translateY(-50%);box-shadow:0 0 20px #dc143c66,0 0 40px #8b00004d,inset 0 0 20px #0000004d}.nav-button:hover{color:#fff;background:linear-gradient(135deg,#dc143ce6 0%,#8b0000 100%);border-color:#ff4500cc;transform:translateY(-50%)scale(1.1);box-shadow:0 0 30px #ff450099,0 0 60px #dc143c66,inset 0 0 25px #0003}.nav-button.prev{left:30px}.nav-button.next{right:30px}.custom-indicators{z-index:10;gap:16px;display:flex;position:absolute;bottom:30px;left:50%;transform:translate(-50%)}.indicator{cursor:pointer;background:#ffffff4d;border:2px solid #dc143c80;border-radius:50%;width:15px;height:15px;transition:all .3s;box-shadow:0 0 15px #00000080,inset 0 0 10px #8b00004d}.indicator.active{background:linear-gradient(135deg,#dc143c 0%,#ff4500cc 100%);border-color:#fffc;transform:scale(1.2);box-shadow:0 0 20px #dc143ccc,0 0 40px #ff450066,inset 0 0 10px #0003}.indicator:hover:not(.active){background:#dc143c99;border-color:#ff4500b3;transform:scale(1.1);box-shadow:0 0 15px #dc143c99,inset 0 0 8px #8b000066}@keyframes glow{0%{box-shadow:0 0 20px #dc143c66,0 0 40px #8b00004d,inset 0 0 20px #0000004d}50%{box-shadow:0 0 30px #dc143c99,0 0 60px #8b000066,inset 0 0 25px #0003}to{box-shadow:0 0 20px #dc143c66,0 0 40px #8b00004d,inset 0 0 20px #0000004d}}@media (width<=768px){.nav-button{width:60px;height:60px;font-size:18px}.nav-button.prev{left:15px}.nav-button.next{right:15px}.indicator{width:12px;height:12px}.custom-indicators{gap:10px}}'
            }, void 0, false, void 0, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                onMouseEnter: handleMouseEnter,
                onMouseLeave: handleMouseLeave,
                className: "jsx-58eb15c7b597de17" + " " + "carousel-container",
                children: [
                    images.map((image, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-58eb15c7b597de17" + " " + `carousel-slide ${index === currentSlide ? 'active' : ''}`,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: image.src,
                                alt: image.alt,
                                className: "jsx-58eb15c7b597de17"
                            }, void 0, false, {
                                fileName: "[project]/app/components/Carousel.js",
                                lineNumber: 262,
                                columnNumber: 13
                            }, this)
                        }, index, false, {
                            fileName: "[project]/app/components/Carousel.js",
                            lineNumber: 258,
                            columnNumber: 11
                        }, this)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: goToPrevSlide,
                        "aria-label": "Previous slide",
                        className: "jsx-58eb15c7b597de17" + " " + "nav-button prev",
                        children: "‹"
                    }, void 0, false, {
                        fileName: "[project]/app/components/Carousel.js",
                        lineNumber: 267,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: goToNextSlide,
                        "aria-label": "Next slide",
                        className: "jsx-58eb15c7b597de17" + " " + "nav-button next",
                        children: "›"
                    }, void 0, false, {
                        fileName: "[project]/app/components/Carousel.js",
                        lineNumber: 275,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-58eb15c7b597de17" + " " + "custom-indicators",
                        children: images.map((_, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>goToSlide(index),
                                "aria-label": `Go to slide ${index + 1}`,
                                className: "jsx-58eb15c7b597de17" + " " + `indicator ${index === currentSlide ? 'active' : ''}`
                            }, index, false, {
                                fileName: "[project]/app/components/Carousel.js",
                                lineNumber: 286,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/components/Carousel.js",
                        lineNumber: 284,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/Carousel.js",
                lineNumber: 251,
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
"[project]/app/components/Card.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
"use client";
;
;
const Card = ()=>{
    // ข้อมูล mock สำหรับการแสดงผล
    const cardData = [
        {
            id: 1,
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
            title: "Web Development",
            description: "สร้างเว็บไซต์ที่ทันสมัยและตอบสนองต่อผู้ใช้งาน"
        },
        {
            id: 2,
            image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop",
            title: "Mobile App",
            description: "พัฒนาแอปพลิเคชันมือถือที่ใช้งานง่าย"
        },
        {
            id: 3,
            image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=300&fit=crop",
            title: "UI/UX Design",
            description: "ออกแบบส่วนติดต่อผู้ใช้ที่สวยงามและใช้งานง่าย"
        },
        {
            id: 4,
            image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=400&h=300&fit=crop",
            title: "Data Analytics",
            description: "วิเคราะห์ข้อมูลเพื่อหาข้อมูลเชิงลึกทางธุรกิจ"
        },
        {
            id: 5,
            image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=300&fit=crop",
            title: "Digital Marketing",
            description: "สร้างกลยุทธ์การตลาดออนไลน์ที่มีประสิทธิภาพ"
        },
        {
            id: 6,
            image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop",
            title: "Cloud Computing",
            description: "บริการคลาวด์ที่ปลอดภัยและมีประสิทธิภาพ"
        },
        {
            id: 7,
            image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=300&fit=crop",
            title: "AI & Machine Learning",
            description: "พัฒนาระบบ AI ที่ช่วยแก้ไขปัญหาธุรกิจ"
        },
        {
            id: 8,
            image: "https://images.unsplash.com/photo-1563206767-5b18f218e8de?w=400&h=300&fit=crop",
            title: "Cybersecurity",
            description: "ปกป้องข้อมูลและระบบจากภัยคุกคามทางไซเบอร์"
        },
        {
            id: 9,
            image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=300&fit=crop",
            title: "DevOps",
            description: "ปรับปรุงกระบวนการพัฒนาและปรับใช้ซอฟต์แวร์"
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("link", {
                href: "https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/css/bootstrap.min.css",
                rel: "stylesheet"
            }, void 0, false, {
                fileName: "[project]/app/components/Card.js",
                lineNumber: 66,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container-fluid py-5",
                style: {
                    background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 50%, #1a1a1a 100%)',
                    minHeight: '100vh'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "row text-center mb-5",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "col-12",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "display-4 fw-bold mb-3",
                                        style: {
                                            color: '#ffffff',
                                            textShadow: '2px 2px 8px rgba(220, 20, 60, 0.6), 0 0 20px rgba(220, 20, 60, 0.3)',
                                            filter: 'drop-shadow(0 0 10px rgba(220, 20, 60, 0.4))'
                                        },
                                        children: "Our Services"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/Card.js",
                                        lineNumber: 81,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "lead mb-3",
                                        style: {
                                            color: '#cccccc',
                                            textShadow: '1px 1px 4px rgba(0,0,0,0.8)'
                                        },
                                        children: "บริการที่เราให้กับลูกค้าอย่างมืออาชีพ"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/Card.js",
                                        lineNumber: 91,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/Card.js",
                                lineNumber: 80,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/components/Card.js",
                            lineNumber: 79,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "row g-4",
                            children: cardData.map((card)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "col-lg-4 col-md-6 col-sm-12",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "card h-100 border-0",
                                        style: {
                                            background: 'linear-gradient(145deg, #2a2a2a, #1e1e1e)',
                                            transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                                            cursor: 'pointer',
                                            boxShadow: `
                      0 8px 32px rgba(220, 20, 60, 0.15),
                      0 4px 16px rgba(0, 0, 0, 0.8),
                      inset 0 1px 2px rgba(255, 255, 255, 0.1),
                      inset 0 -1px 2px rgba(0, 0, 0, 0.8)
                    `,
                                            border: '1px solid rgba(220, 20, 60, 0.2)',
                                            borderRadius: '15px',
                                            overflow: 'hidden',
                                            position: 'relative'
                                        },
                                        onMouseEnter: (e)=>{
                                            e.currentTarget.style.transform = 'translateY(-15px) scale(1.02)';
                                            e.currentTarget.style.boxShadow = `
                      0 20px 60px rgba(220, 20, 60, 0.4),
                      0 10px 40px rgba(220, 20, 60, 0.3),
                      0 5px 20px rgba(0, 0, 0, 0.9),
                      inset 0 1px 3px rgba(255, 255, 255, 0.2),
                      inset 0 -1px 3px rgba(0, 0, 0, 0.9),
                      0 0 0 1px rgba(220, 20, 60, 0.5)
                    `;
                                            e.currentTarget.style.background = 'linear-gradient(145deg, #333333, #252525)';
                                        },
                                        onMouseLeave: (e)=>{
                                            e.currentTarget.style.transform = 'translateY(0) scale(1)';
                                            e.currentTarget.style.boxShadow = `
                      0 8px 32px rgba(220, 20, 60, 0.15),
                      0 4px 16px rgba(0, 0, 0, 0.8),
                      inset 0 1px 2px rgba(255, 255, 255, 0.1),
                      inset 0 -1px 2px rgba(0, 0, 0, 0.8)
                    `;
                                            e.currentTarget.style.background = 'linear-gradient(145deg, #2a2a2a, #1e1e1e)';
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "position-relative overflow-hidden",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "position-absolute top-0 start-0 w-100 h-100",
                                                        style: {
                                                            background: 'linear-gradient(45deg, rgba(220, 20, 60, 0.1), transparent, rgba(139, 0, 0, 0.1))',
                                                            zIndex: 1,
                                                            transition: 'opacity 0.4s ease'
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/Card.js",
                                                        lineNumber: 148,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                        src: card.image,
                                                        className: "card-img-top",
                                                        alt: card.title,
                                                        style: {
                                                            height: '250px',
                                                            objectFit: 'cover',
                                                            transition: 'all 0.4s ease',
                                                            filter: 'brightness(0.7) contrast(1.2) saturate(1.1)'
                                                        },
                                                        onMouseEnter: (e)=>{
                                                            e.currentTarget.style.transform = 'scale(1.15)';
                                                            e.currentTarget.style.filter = 'brightness(0.9) contrast(1.3) saturate(1.3)';
                                                            e.currentTarget.previousElementSibling.style.opacity = '0.3';
                                                        },
                                                        onMouseLeave: (e)=>{
                                                            e.currentTarget.style.transform = 'scale(1)';
                                                            e.currentTarget.style.filter = 'brightness(0.7) contrast(1.2) saturate(1.1)';
                                                            e.currentTarget.previousElementSibling.style.opacity = '1';
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/Card.js",
                                                        lineNumber: 157,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "position-absolute bottom-0 start-0 w-100",
                                                        style: {
                                                            height: '4px',
                                                            background: 'linear-gradient(90deg, transparent, rgba(220, 20, 60, 0.8), transparent)',
                                                            zIndex: 2
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/Card.js",
                                                        lineNumber: 180,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/components/Card.js",
                                                lineNumber: 146,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "card-body d-flex flex-column p-4",
                                                style: {
                                                    position: 'relative'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "position-absolute top-0 start-0 w-100 h-100",
                                                        style: {
                                                            background: 'radial-gradient(ellipse at center, rgba(220, 20, 60, 0.05) 0%, transparent 70%)',
                                                            pointerEvents: 'none',
                                                            borderRadius: '0 0 15px 15px'
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/Card.js",
                                                        lineNumber: 192,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                        className: "card-title fw-bold mb-3 position-relative",
                                                        style: {
                                                            color: '#ffffff',
                                                            fontSize: '1.25rem',
                                                            textShadow: '1px 1px 4px rgba(0,0,0,0.8), 0 0 8px rgba(220, 20, 60, 0.3)',
                                                            zIndex: 1
                                                        },
                                                        children: card.title
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/Card.js",
                                                        lineNumber: 201,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "card-text flex-grow-1 position-relative",
                                                        style: {
                                                            lineHeight: '1.6',
                                                            color: '#cccccc',
                                                            textShadow: '1px 1px 2px rgba(0,0,0,0.8)',
                                                            zIndex: 1
                                                        },
                                                        children: card.description
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/Card.js",
                                                        lineNumber: 212,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "mt-3 position-relative",
                                                        style: {
                                                            zIndex: 1
                                                        },
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            className: "btn btn-sm position-relative overflow-hidden",
                                                            style: {
                                                                background: 'linear-gradient(45deg, #dc143c, #8b0000)',
                                                                color: '#ffffff',
                                                                border: '1px solid rgba(220, 20, 60, 0.5)',
                                                                borderRadius: '25px',
                                                                padding: '10px 25px',
                                                                fontWeight: '600',
                                                                transition: 'all 0.4s ease',
                                                                boxShadow: `
                            0 4px 15px rgba(220, 20, 60, 0.3),
                            inset 0 1px 2px rgba(255, 255, 255, 0.2),
                            inset 0 -1px 2px rgba(0, 0, 0, 0.8)
                          `,
                                                                textShadow: '1px 1px 2px rgba(0,0,0,0.8)'
                                                            },
                                                            onMouseEnter: (e)=>{
                                                                e.currentTarget.style.transform = 'scale(1.05) translateY(-2px)';
                                                                e.currentTarget.style.background = 'linear-gradient(45deg, #ff1744, #b71c1c)';
                                                                e.currentTarget.style.boxShadow = `
                            0 8px 25px rgba(220, 20, 60, 0.5),
                            0 4px 15px rgba(255, 23, 68, 0.4),
                            inset 0 1px 3px rgba(255, 255, 255, 0.3),
                            inset 0 -1px 3px rgba(0, 0, 0, 0.9)
                          `;
                                                            },
                                                            onMouseLeave: (e)=>{
                                                                e.currentTarget.style.transform = 'scale(1) translateY(0)';
                                                                e.currentTarget.style.background = 'linear-gradient(45deg, #dc143c, #8b0000)';
                                                                e.currentTarget.style.boxShadow = `
                            0 4px 15px rgba(220, 20, 60, 0.3),
                            inset 0 1px 2px rgba(255, 255, 255, 0.2),
                            inset 0 -1px 2px rgba(0, 0, 0, 0.8)
                          `;
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    style: {
                                                                        position: 'relative',
                                                                        zIndex: 1
                                                                    },
                                                                    children: "เรียนรู้เพิ่มเติม"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/components/Card.js",
                                                                    lineNumber: 261,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "position-absolute top-0 start-0 w-100 h-100",
                                                                    style: {
                                                                        background: 'linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.1), transparent)',
                                                                        transform: 'translateX(-100%)',
                                                                        transition: 'transform 0.6s ease',
                                                                        borderRadius: '25px'
                                                                    }
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/components/Card.js",
                                                                    lineNumber: 263,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/components/Card.js",
                                                            lineNumber: 224,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/Card.js",
                                                        lineNumber: 223,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/components/Card.js",
                                                lineNumber: 190,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/Card.js",
                                        lineNumber: 106,
                                        columnNumber: 17
                                    }, this)
                                }, card.id, false, {
                                    fileName: "[project]/app/components/Card.js",
                                    lineNumber: 105,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/app/components/Card.js",
                            lineNumber: 103,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/Card.js",
                    lineNumber: 78,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/components/Card.js",
                lineNumber: 71,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("script", {
                src: "https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/js/bootstrap.bundle.min.js"
            }, void 0, false, {
                fileName: "[project]/app/components/Card.js",
                lineNumber: 283,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
};
_c = Card;
const __TURBOPACK__default__export__ = Card;
var _c;
__turbopack_context__.k.register(_c, "Card");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=app_components_2a7537cf._.js.map