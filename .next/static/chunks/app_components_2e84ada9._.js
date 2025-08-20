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
    const images = [
        {
            src: "https://img.lovepik.com/background/20211020/medium/lovepik-global-information-technology-background-image_400060087.jpg",
            alt: "01"
        },
        {
            src: "https://plus.unsplash.com/premium_photo-1661877737564-3dfd7282efcb?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            alt: "02"
        },
        {
            src: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                id: "58eb15c7b597de17",
                children: 'body,html{background:linear-gradient(135deg,#1a0000 0%,#300 50%,#000 100%);min-height:100vh;margin:0;padding:0;font-family:Segoe UI,Tahoma,Geneva,Verdana,sans-serif}.carousel-container{width:100vw;height:100vh;position:relative;overflow:hidden}.carousel-slide{opacity:0;width:100%;height:100%;transition:opacity .8s ease-in-out;position:absolute;top:0;left:0}.carousel-slide.active{opacity:1}.carousel-slide img{object-fit:cover;filter:brightness(.8)contrast(1.1);width:100%;height:100%}.carousel-slide:before{content:"";z-index:1;background:linear-gradient(45deg,rgba(0,0,0,.3) 0%,rgba(139,0,0,.2) 50%,rgba(0,0,0,.4) 100%);position:absolute;top:0;bottom:0;left:0;right:0}.nav-button{z-index:10;cursor:pointer;color:#fff;background:linear-gradient(135deg,rgba(139,0,0,.8) 0%,rgba(0,0,0,.9) 100%);border:2px solid rgba(220,20,60,.6);border-radius:50%;justify-content:center;align-items:center;width:80px;height:80px;font-size:24px;transition:all .3s;animation:3s ease-in-out infinite glow;display:flex;position:absolute;top:50%;transform:translateY(-50%);box-shadow:0 0 20px rgba(220,20,60,.4),0 0 40px rgba(139,0,0,.3),inset 0 0 20px rgba(0,0,0,.3)}.nav-button:hover{color:#fff;background:linear-gradient(135deg,rgba(220,20,60,.9) 0%,#8b0000 100%);border-color:rgba(255,69,0,.8);transform:translateY(-50%)scale(1.1);box-shadow:0 0 30px rgba(255,69,0,.6),0 0 60px rgba(220,20,60,.4),inset 0 0 25px rgba(0,0,0,.2)}.nav-button.prev{left:30px}.nav-button.next{right:30px}.custom-indicators{z-index:10;gap:16px;display:flex;position:absolute;bottom:30px;left:50%;transform:translate(-50%)}.indicator{cursor:pointer;background:rgba(255,255,255,.3);border:2px solid rgba(220,20,60,.5);border-radius:50%;width:15px;height:15px;transition:all .3s;box-shadow:0 0 15px rgba(0,0,0,.5),inset 0 0 10px rgba(139,0,0,.3)}.indicator.active{background:linear-gradient(135deg,#dc143c 0%,rgba(255,69,0,.8) 100%);border-color:rgba(255,255,255,.8);transform:scale(1.2);box-shadow:0 0 20px rgba(220,20,60,.8),0 0 40px rgba(255,69,0,.4),inset 0 0 10px rgba(0,0,0,.2)}.indicator:hover:not(.active){background:rgba(220,20,60,.6);border-color:rgba(255,69,0,.7);transform:scale(1.1);box-shadow:0 0 15px rgba(220,20,60,.6),inset 0 0 8px rgba(139,0,0,.4)}@keyframes glow{0%{box-shadow:0 0 20px rgba(220,20,60,.4),0 0 40px rgba(139,0,0,.3),inset 0 0 20px rgba(0,0,0,.3)}50%{box-shadow:0 0 30px rgba(220,20,60,.6),0 0 60px rgba(139,0,0,.4),inset 0 0 25px rgba(0,0,0,.2)}to{box-shadow:0 0 20px rgba(220,20,60,.4),0 0 40px rgba(139,0,0,.3),inset 0 0 20px rgba(0,0,0,.3)}}@media (max-width:768px){.nav-button{width:60px;height:60px;font-size:18px}.nav-button.prev{left:15px}.nav-button.next{right:15px}.indicator{width:12px;height:12px}.custom-indicators{gap:10px}}'
            }, void 0, false, void 0, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                onMouseEnter: handleMouseEnter,
                onMouseLeave: handleMouseLeave,
                className: "jsx-58eb15c7b597de17" + " " + "carousel-container",
                children: [
                    images.map((image, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-58eb15c7b597de17" + " " + "carousel-slide ".concat(index === currentSlide ? 'active' : ''),
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: image.src,
                                alt: image.alt,
                                className: "jsx-58eb15c7b597de17"
                            }, void 0, false, {
                                fileName: "[project]/app/components/Carousel.js",
                                lineNumber: 262,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, index, false, {
                            fileName: "[project]/app/components/Carousel.js",
                            lineNumber: 258,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: goToPrevSlide,
                        "aria-label": "Previous slide",
                        className: "jsx-58eb15c7b597de17" + " " + "nav-button prev",
                        children: "‹"
                    }, void 0, false, {
                        fileName: "[project]/app/components/Carousel.js",
                        lineNumber: 267,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: goToNextSlide,
                        "aria-label": "Next slide",
                        className: "jsx-58eb15c7b597de17" + " " + "nav-button next",
                        children: "›"
                    }, void 0, false, {
                        fileName: "[project]/app/components/Carousel.js",
                        lineNumber: 275,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-58eb15c7b597de17" + " " + "custom-indicators",
                        children: images.map((_, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>goToSlide(index),
                                "aria-label": "Go to slide ".concat(index + 1),
                                className: "jsx-58eb15c7b597de17" + " " + "indicator ".concat(index === currentSlide ? 'active' : '')
                            }, index, false, {
                                fileName: "[project]/app/components/Carousel.js",
                                lineNumber: 286,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/app/components/Carousel.js",
                        lineNumber: 284,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/Carousel.js",
                lineNumber: 251,
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
"use client";
;
;
const Card = ()=>{
    // ข้อมูล mock สำหรับการแสดงผล
    const cardData = [
        {
            id: 1,
            image: "https://images.carexpert.com.au/resize/960/-/app/uploads/2021/10/Bugatti-Chiron-Super-Sport-300-1.jpg",
            title: "  ",
            description: "ซูเปอร์ไฮเปอร์คาร์ เครื่องยนต์ W16 ความเร็วสูงสุดกว่า 400 กม./ชม."
        },
        {
            id: 2,
            image: "https://hips.hearstapps.com/autoweek/assets/s3fs-public/2019-06/luxuryandexpensive_koenigsegg_jesko_26.jpg?resize=980:*",
            title: "Koenigsegg Jesko",
            description: "ขุมพลัง V8 เทอร์โบคู่ 1600 แรงม้า จากสวีเดน"
        },
        {
            id: 3,
            image: "https://hips.hearstapps.com/hmg-prod/images/pagani-huayra-bc-roadster-121-1564501509.jpg?crop=0.746xw:0.686xh;0.135xw,0.263xh&resize=2048:*",
            title: "Pagani Huayra",
            description: "งานศิลป์บนยานยนต์ ผสมผสานเทคโนโลยีและดีไซน์หรูหรา"
        },
        {
            id: 4,
            image: "https://www.9carthai.com/wp-content/uploads/2020/01/Lamborghini-Veneno-Roadster.jpg",
            title: "Lamborghini Veneno",
            description: "รถที่ผลิตจำนวนจำกัด 9 คันในโลก มาพร้อมกับดีไซน์ดุดันสะกดทุกสายตา"
        },
        {
            id: 5,
            image: "https://www.thedrive.com/wp-content/uploads/images-by-url-td/content/2019/01/laferrari01.jpg?quality=85&w=1920",
            title: "Ferrari LaFerrari",
            description: "สุดยอด Hypercar Hybrid เครื่อง V12 บวกพลังงานไฟฟ้า"
        },
        {
            id: 6,
            image: "https://media.drive.com.au/obj/tx_q:70,rs:auto:1600:900:1/driveau/private/ca-s3/2012/09/McLaren-P1-front-side-625x418",
            title: "McLaren P1",
            description: "ไฮเปอร์คาร์ไฮบริดแห่งอังกฤษ ความแรงผสมเทคโนโลยีล้ำสมัย"
        },
        {
            id: 7,
            image: "https://www.usnews.com/object/image/00000182-a52f-dc41-a1db-a56f72f10000/1-aston_martin_valkyrie_amr_pro_-288513566_10159401306513355_5212586076109830894_n_Cropped.jpg?update-time=&size=responsive970",
            title: "Aston Martin Valkyrie",
            description: "เทคโนโลยีจาก Formula 1 สู่ถนนจริง"
        },
        {
            id: 8,
            image: "https://www.moveelectric.com/sites/default/files/styles/slideshow_slide/public/2024-08/00-Rimac%20Nevera%20R-Rimac_2.jpg?itok=nGoedCq8",
            title: "Rimac Nevera",
            description: "Hypercar พลังไฟฟ้าเต็มรูปแบบ แรงที่สุดในโลก"
        },
        {
            id: 9,
            image: "https://cdn.motor1.com/images/mgl/8ApmLW/s3/valtteri-bottas-mercedes-amg-one.webp",
            title: "Mercedes-AMG One",
            description: "เครื่องยนต์จาก F1 Hybrid กว่า 1000 แรงม้า"
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
            }, ("TURBOPACK compile-time value", void 0)),
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
                                    }, ("TURBOPACK compile-time value", void 0)),
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
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/Card.js",
                                lineNumber: 80,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/app/components/Card.js",
                            lineNumber: 79,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
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
                                            boxShadow: "\n                      0 8px 32px rgba(220, 20, 60, 0.15),\n                      0 4px 16px rgba(0, 0, 0, 0.8),\n                      inset 0 1px 2px rgba(255, 255, 255, 0.1),\n                      inset 0 -1px 2px rgba(0, 0, 0, 0.8)\n                    ",
                                            border: '1px solid rgba(220, 20, 60, 0.2)',
                                            borderRadius: '15px',
                                            overflow: 'hidden',
                                            position: 'relative'
                                        },
                                        onMouseEnter: (e)=>{
                                            e.currentTarget.style.transform = 'translateY(-15px) scale(1.02)';
                                            e.currentTarget.style.boxShadow = "\n                      0 20px 60px rgba(220, 20, 60, 0.4),\n                      0 10px 40px rgba(220, 20, 60, 0.3),\n                      0 5px 20px rgba(0, 0, 0, 0.9),\n                      inset 0 1px 3px rgba(255, 255, 255, 0.2),\n                      inset 0 -1px 3px rgba(0, 0, 0, 0.9),\n                      0 0 0 1px rgba(220, 20, 60, 0.5)\n                    ";
                                            e.currentTarget.style.background = 'linear-gradient(145deg, #333333, #252525)';
                                        },
                                        onMouseLeave: (e)=>{
                                            e.currentTarget.style.transform = 'translateY(0) scale(1)';
                                            e.currentTarget.style.boxShadow = "\n                      0 8px 32px rgba(220, 20, 60, 0.15),\n                      0 4px 16px rgba(0, 0, 0, 0.8),\n                      inset 0 1px 2px rgba(255, 255, 255, 0.1),\n                      inset 0 -1px 2px rgba(0, 0, 0, 0.8)\n                    ";
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
                                                    }, ("TURBOPACK compile-time value", void 0)),
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
                                                    }, ("TURBOPACK compile-time value", void 0)),
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
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/components/Card.js",
                                                lineNumber: 146,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
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
                                                    }, ("TURBOPACK compile-time value", void 0)),
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
                                                    }, ("TURBOPACK compile-time value", void 0)),
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
                                                    }, ("TURBOPACK compile-time value", void 0)),
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
                                                                boxShadow: "\n                            0 4px 15px rgba(220, 20, 60, 0.3),\n                            inset 0 1px 2px rgba(255, 255, 255, 0.2),\n                            inset 0 -1px 2px rgba(0, 0, 0, 0.8)\n                          ",
                                                                textShadow: '1px 1px 2px rgba(0,0,0,0.8)'
                                                            },
                                                            onMouseEnter: (e)=>{
                                                                e.currentTarget.style.transform = 'scale(1.05) translateY(-2px)';
                                                                e.currentTarget.style.background = 'linear-gradient(45deg, #ff1744, #b71c1c)';
                                                                e.currentTarget.style.boxShadow = "\n                            0 8px 25px rgba(220, 20, 60, 0.5),\n                            0 4px 15px rgba(255, 23, 68, 0.4),\n                            inset 0 1px 3px rgba(255, 255, 255, 0.3),\n                            inset 0 -1px 3px rgba(0, 0, 0, 0.9)\n                          ";
                                                            },
                                                            onMouseLeave: (e)=>{
                                                                e.currentTarget.style.transform = 'scale(1) translateY(0)';
                                                                e.currentTarget.style.background = 'linear-gradient(45deg, #dc143c, #8b0000)';
                                                                e.currentTarget.style.boxShadow = "\n                            0 4px 15px rgba(220, 20, 60, 0.3),\n                            inset 0 1px 2px rgba(255, 255, 255, 0.2),\n                            inset 0 -1px 2px rgba(0, 0, 0, 0.8)\n                          ";
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
                                                                }, ("TURBOPACK compile-time value", void 0)),
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
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/components/Card.js",
                                                            lineNumber: 224,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/Card.js",
                                                        lineNumber: 223,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/components/Card.js",
                                                lineNumber: 190,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/Card.js",
                                        lineNumber: 106,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, card.id, false, {
                                    fileName: "[project]/app/components/Card.js",
                                    lineNumber: 105,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)))
                        }, void 0, false, {
                            fileName: "[project]/app/components/Card.js",
                            lineNumber: 103,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/Card.js",
                    lineNumber: 78,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/app/components/Card.js",
                lineNumber: 71,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("script", {
                src: "https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/js/bootstrap.bundle.min.js"
            }, void 0, false, {
                fileName: "[project]/app/components/Card.js",
                lineNumber: 283,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true);
};
_c = Card;
const __TURBOPACK__default__export__ = Card;
var _c;
__turbopack_context__.k.register(_c, "Card");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=app_components_2e84ada9._.js.map