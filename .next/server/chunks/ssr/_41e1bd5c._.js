module.exports = [
"[project]/app/components/Carousel.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
;
const Carousel = ()=>{
    const [currentSlide, setCurrentSlide] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isPlaying, setIsPlaying] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    // 🌸 Japanese/Sakura themed images
    const images = [
        {
            src: "https://as2.ftcdn.net/v2/jpg/14/06/43/57/1000_F_1406435706_eat3rjfyhGnmiSGFRHd1gJPCYXDqdSXi.jpg",
            alt: "🌸 Beautiful Sakura Blossoms",
            title: "伝統的な寺院"
        },
        {
            src: "https://as1.ftcdn.net/v2/jpg/14/64/69/96/1000_F_1464699632_gerJww4AXPi5XkKiMNUnTlI3aqJfkxKJ.jpg",
            alt: "🏯 Traditional Japanese Temple",
            title: "美しい桜の花"
        },
        {
            src: "https://as1.ftcdn.net/v2/jpg/12/90/20/98/1000_F_1290209869_T0Gb4k8j1hfvX3DpH66saHF1dyt5T4gR.jpg",
            alt: "🗾 Mount Fuji Landscape",
            title: "富士山の風景"
        },
        {
            src: "https://as1.ftcdn.net/v2/jpg/10/13/41/96/1000_F_1013419666_D5aeSOZL5pQIaXmR95fa7JvB2eJIAZDQ.jpg",
            alt: "🏮 Traditional Japanese Street",
            title: "伝統的な日本の街"
        },
        {
            src: "https://as1.ftcdn.net/v2/jpg/06/39/16/68/1000_F_639166865_WlooSQrFG5Xx3P0T9fr6rxZMHxIvEfc5.jpg",
            alt: "🌸 Sakura Garden Path",
            title: "桜の庭園小道"
        }
    ];
    // Auto-slide every 4 seconds
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!isPlaying) return;
        const interval = setInterval(()=>{
            setCurrentSlide((prev)=>(prev + 1) % images.length);
        }, 3000);
        return ()=>clearInterval(interval);
    }, [
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("link", {
                href: "https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/css/bootstrap.min.css",
                rel: "stylesheet",
                className: "jsx-ce134b24c87a8ff1"
            }, void 0, false, {
                fileName: "[project]/app/components/Carousel.js",
                lineNumber: 71,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                id: "ce134b24c87a8ff1",
                children: 'body,html{background:linear-gradient(135deg,#0a0a0a 0%,#1a1a1a 30%,#2d1b1b 70%,#3d2f2f 100%);min-height:100vh;margin:0;padding:0;font-family:Georgia,serif;overflow-x:hidden}body:before{content:"";pointer-events:none;z-index:0;background:radial-gradient(circle at 10% 20%,#ffb6c11a 0%,#0000 50%),radial-gradient(circle at 80% 30%,#ffc0cb14 0%,#0000 50%),radial-gradient(circle at 40% 70%,#ffb6c10f 0%,#0000 50%),radial-gradient(circle at 90% 80%,#ffc0cb0d 0%,#0000 50%);width:100%;height:100%;position:fixed;top:0;left:0}.carousel-container{z-index:1;width:100vw;height:100vh;position:relative;overflow:hidden}.carousel-slide{opacity:0;width:100%;height:100%;transition:all 1.2s ease-in-out;position:absolute;top:0;left:0;transform:scale(1.05)}.carousel-slide.active{opacity:1;transform:scale(1)}.carousel-slide img{object-fit:cover;filter:brightness(.85)contrast(1.15)saturate(1.1);width:100%;height:100%}.carousel-slide:before{content:"";z-index:1;background:linear-gradient(135deg,#e91e6326 0%,#0000004d 30%,#ffb6c11a 70%,#0006 100%);position:absolute;inset:0}.slide-title{z-index:5;color:#e91e63;text-align:center;backdrop-filter:blur(10px);background:#000000b3;border:2px solid #e91e63;border-radius:15px;padding:15px 25px;font-family:Georgia,serif;font-size:18px;font-weight:700;animation:3s ease-in-out infinite alternate titleGlow;position:absolute;bottom:80px;left:50%;transform:translate(-50%);box-shadow:0 0 20px #e91e6366,inset 0 1px #ffffff1a}@keyframes titleGlow{0%{text-shadow:0 0 10px #e91e6399;box-shadow:0 0 20px #e91e6366,inset 0 1px #ffffff1a}to{text-shadow:0 0 20px #e91e63cc;box-shadow:0 0 30px #e91e6399,inset 0 1px #ffffff26}}.nav-button{z-index:10;cursor:pointer;color:#fff;backdrop-filter:blur(10px);background:linear-gradient(135deg,#e91e63cc 0%,#ad1457e6 100%);border:3px solid #e91e6399;border-radius:50%;justify-content:center;align-items:center;width:80px;height:80px;font-size:28px;font-weight:700;transition:all .4s;animation:4s ease-in-out infinite sakuraGlow;display:flex;position:absolute;top:50%;transform:translateY(-50%);box-shadow:0 0 25px #e91e6380,0 0 50px #e91e634d,inset 0 1px #fff3}.nav-button:hover{color:#fff;background:linear-gradient(135deg,#e91e63 0%,#f06292f2 100%);border-color:#f06292cc;transform:translateY(-50%)scale(1.15);box-shadow:0 0 40px #f06292b3,0 0 80px #e91e6380,inset 0 2px #ffffff4d}.nav-button.prev{left:40px}.nav-button.next{right:40px}.nav-button:before{content:"🌸";opacity:.8;font-size:16px;animation:6s ease-in-out infinite petalFloat;position:absolute;top:-10px;right:-10px}@keyframes petalFloat{0%,to{opacity:.8;transform:translateY(0)rotate(0)}50%{opacity:1;transform:translateY(-8px)rotate(180deg)}}.custom-indicators{z-index:10;backdrop-filter:blur(15px);background:#0000004d;border:2px solid #e91e634d;border-radius:25px;gap:20px;padding:15px 25px;display:flex;position:absolute;bottom:30px;left:50%;transform:translate(-50%)}.indicator{cursor:pointer;background:#fff3;border:2px solid #e91e6366;border-radius:50%;width:18px;height:18px;transition:all .4s;position:relative;box-shadow:0 0 15px #00000080,inset 0 1px #ffffff1a}.indicator:before{content:"🌸";opacity:0;font-size:10px;transition:all .3s;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}.indicator.active{background:linear-gradient(135deg,#e91e63 0%,#f06292e6 100%);border-color:#fffc;transform:scale(1.3);box-shadow:0 0 25px #e91e63cc,0 0 50px #f0629266,inset 0 1px #ffffff4d}.indicator.active:before{opacity:1;font-size:12px}.indicator:hover:not(.active){background:#e91e6399;border-color:#f06292b3;transform:scale(1.15);box-shadow:0 0 20px #e91e6399,inset 0 1px #fff3}.indicator:hover:not(.active):before{opacity:.7;font-size:11px}@keyframes sakuraGlow{0%{box-shadow:0 0 25px #e91e6380,0 0 50px #e91e634d,inset 0 1px #fff3}50%{box-shadow:0 0 35px #e91e63b3,0 0 70px #e91e6366,inset 0 2px #ffffff40}to{box-shadow:0 0 25px #e91e6380,0 0 50px #e91e634d,inset 0 1px #fff3}}.sakura-petals{pointer-events:none;z-index:3;width:100%;height:100%;position:absolute;top:0;left:0;overflow:hidden}.floating-petal{color:#ffb6c1b3;opacity:.8;font-size:20px;animation:15s linear infinite floatDown;position:absolute}.floating-petal:first-child{animation-duration:12s;animation-delay:0s;left:10%}.floating-petal:nth-child(2){animation-duration:14s;animation-delay:2s;left:20%}.floating-petal:nth-child(3){animation-duration:16s;animation-delay:4s;left:30%}.floating-petal:nth-child(4){animation-duration:13s;animation-delay:1s;left:40%}.floating-petal:nth-child(5){animation-duration:15s;animation-delay:3s;left:50%}.floating-petal:nth-child(6){animation-duration:11s;animation-delay:5s;left:60%}.floating-petal:nth-child(7){animation-duration:17s;animation-delay:2.5s;left:70%}.floating-petal:nth-child(8){animation-duration:12.5s;animation-delay:4.5s;left:80%}.floating-petal:nth-child(9){animation-duration:14.5s;animation-delay:1.5s;left:90%}.floating-petal:nth-child(10){animation-duration:13.5s;animation-delay:6s;left:5%}@keyframes floatDown{0%{opacity:0;transform:translateY(-100px)rotate(0)}10%{opacity:1}90%{opacity:1}to{opacity:0;transform:translateY(calc(100vh + 100px))rotate(360deg)}}@media (width<=768px){.nav-button{width:60px;height:60px;font-size:22px}.nav-button.prev{left:20px}.nav-button.next{right:20px}.indicator{width:15px;height:15px}.custom-indicators{gap:15px;padding:12px 20px}.slide-title{padding:12px 20px;font-size:16px;bottom:70px}.floating-petal{font-size:16px}}@media (width<=480px){.nav-button{width:50px;height:50px;font-size:18px}.nav-button.prev{left:15px}.nav-button.next{right:15px}.slide-title{padding:10px 15px;font-size:14px;bottom:60px}.custom-indicators{gap:12px;padding:10px 15px}.floating-petal{font-size:14px}}'
            }, void 0, false, void 0, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                onMouseEnter: handleMouseEnter,
                onMouseLeave: handleMouseLeave,
                className: "jsx-ce134b24c87a8ff1" + " " + "carousel-container",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-ce134b24c87a8ff1" + " " + "sakura-petals",
                        children: [
                            ...Array(10)
                        ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                    images.map((image, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-ce134b24c87a8ff1" + " " + `carousel-slide ${index === currentSlide ? 'active' : ''}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: image.src,
                                    alt: image.alt,
                                    className: "jsx-ce134b24c87a8ff1"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/Carousel.js",
                                    lineNumber: 480,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-ce134b24c87a8ff1" + " " + "slide-title",
                                    children: [
                                        image.title,
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {
                                            className: "jsx-ce134b24c87a8ff1"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/Carousel.js",
                                            lineNumber: 483,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: goToPrevSlide,
                        "aria-label": "Previous slide",
                        className: "jsx-ce134b24c87a8ff1" + " " + "nav-button prev",
                        children: "‹"
                    }, void 0, false, {
                        fileName: "[project]/app/components/Carousel.js",
                        lineNumber: 490,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: goToNextSlide,
                        "aria-label": "Next slide",
                        className: "jsx-ce134b24c87a8ff1" + " " + "nav-button next",
                        children: "›"
                    }, void 0, false, {
                        fileName: "[project]/app/components/Carousel.js",
                        lineNumber: 498,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-ce134b24c87a8ff1" + " " + "custom-indicators",
                        children: images.map((_, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>goToSlide(index),
                                "aria-label": `Go to slide ${index + 1}`,
                                className: "jsx-ce134b24c87a8ff1" + " " + `indicator ${index === currentSlide ? 'active' : ''}`
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
const __TURBOPACK__default__export__ = Carousel;
}),
"[project]/node_modules/next/dist/compiled/client-only/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

}),
"[project]/node_modules/styled-jsx/dist/index/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

__turbopack_context__.r("[project]/node_modules/next/dist/compiled/client-only/index.js [app-ssr] (ecmascript)");
var React = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
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
var isProd = typeof process !== "undefined" && process.env && ("TURBOPACK compile-time value", "development") === "production";
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
        var node = "undefined" !== "undefined" && document.querySelector('meta[property="csp-nonce"]');
        this._nonce = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : null;
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
        if ("undefined" !== "undefined" && this._optimizeForSpeed) //TURBOPACK unreachable
        ;
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
        if ("TURBOPACK compile-time truthy", 1) {
            if (typeof index !== "number") {
                index = this._serverSheet.cssRules.length;
            }
            this._serverSheet.insertRule(rule, index);
            return this._rulesCount++;
        }
        //TURBOPACK unreachable
        ;
        var sheet;
        var insertionPoint;
    };
    _proto.replaceRule = function replaceRule(index, rule) {
        if (this._optimizeForSpeed || "undefined" === "undefined") {
            var sheet = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : this._serverSheet;
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
        } else //TURBOPACK unreachable
        {
            var tag;
        }
        return index;
    };
    _proto.deleteRule = function deleteRule(index) {
        if ("TURBOPACK compile-time truthy", 1) {
            this._serverSheet.deleteRule(index);
            return;
        }
        //TURBOPACK unreachable
        ;
        var tag;
    };
    _proto.flush = function flush() {
        this._injected = false;
        this._rulesCount = 0;
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        else {
            // simpler on server
            this._serverSheet.cssRules = [];
        }
    };
    _proto.cssRules = function cssRules() {
        var _this = this;
        if ("TURBOPACK compile-time truthy", 1) {
            return this._serverSheet.cssRules;
        }
        //TURBOPACK unreachable
        ;
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
    if ("TURBOPACK compile-time truthy", 1) {
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
        if ("undefined" !== "undefined" && !this._fromServer) //TURBOPACK unreachable
        ;
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
    var ref = React.useState(function() {
        return rootRegistry || configuredRegistry || createStyleRegistry();
    }), registry = ref[0];
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
var defaultRegistry = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : undefined;
function JSXStyle(props) {
    var registry = defaultRegistry ? defaultRegistry : useStyleRegistry();
    // If `registry` does not exist, we do nothing here.
    if (!registry) {
        return null;
    }
    if ("TURBOPACK compile-time truthy", 1) {
        registry.add(props);
        return null;
    }
    //TURBOPACK unreachable
    ;
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
"[project]/node_modules/styled-jsx/style.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = __turbopack_context__.r("[project]/node_modules/styled-jsx/dist/index/index.js [app-ssr] (ecmascript)").style;
}),
];

//# sourceMappingURL=_41e1bd5c._.js.map