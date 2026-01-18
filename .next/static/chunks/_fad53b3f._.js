(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/Services/page.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>JapaneseRestaurant
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function JapaneseRestaurant() {
    _s();
    const [selectedMenu, setSelectedMenu] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const menus = [
        {
            id: 1,
            title: '🍱 เซ็ตอาหารกลางวัน',
            description: 'Bento Set, Teriyaki Chicken, Salmon Shioyaki, Tempura Set',
            price: '฿180 - ฿350',
            icon: '🍱',
            features: [
                'Bento Set',
                'Teriyaki Chicken',
                'Salmon Shioyaki',
                'Tempura Set'
            ],
            color: 'linear-gradient(135deg, #ff6b9d, #c44569)'
        },
        {
            id: 2,
            title: '🍣 ซูชิและซาชิมิ',
            description: 'Salmon Sushi, Tuna Sashimi, Special Roll, Omakase Set',
            price: '฿250 - ฿1,200',
            icon: '🍣',
            features: [
                'Salmon Sushi',
                'Tuna Sashimi',
                'Special Roll',
                'Omakase Set'
            ],
            color: 'linear-gradient(135deg, #a8edea, #fed6e3)'
        },
        {
            id: 3,
            title: '🍜 ราเมนและอุด้ง',
            description: 'Tonkotsu Ramen, Shoyu Ramen, Tempura Udon, Yaki Udon',
            price: '฿180 - ฿420',
            icon: '🍜',
            features: [
                'Tonkotsu Ramen',
                'Shoyu Ramen',
                'Tempura Udon',
                'Yaki Udon'
            ],
            color: 'linear-gradient(135deg, #fbc2eb, #a6c1ee)'
        },
        {
            id: 4,
            title: '🍖 ย่างและทอด',
            description: 'Yakitori, Tonkatsu, Chicken Karaage, Gyoza',
            price: '฿120 - ฿480',
            icon: '🍖',
            features: [
                'Yakitori',
                'Tonkatsu',
                'Chicken Karaage',
                'Gyoza'
            ],
            color: 'linear-gradient(135deg, #ffecd2, #fcb69f)'
        },
        {
            id: 5,
            title: '🍛 ข้าวและโดนบุริ',
            description: 'Katsu Curry, Gyudon, Oyakodon, Unagi Don',
            price: '฿160 - ฿550',
            icon: '🍛',
            features: [
                'Katsu Curry',
                'Gyudon',
                'Oyakodon',
                'Unagi Don'
            ],
            color: 'linear-gradient(135deg, #a8caba, #5d4e75)'
        },
        {
            id: 6,
            title: '🍰 ของหวานและเครื่องดื่ม',
            description: 'Matcha Ice Cream, Mochi, Green Tea, Sake Selection',
            price: '฿80 - ฿380',
            icon: '🍰',
            features: [
                'Matcha Ice Cream',
                'Mochi',
                'Green Tea',
                'Sake Selection'
            ],
            color: 'linear-gradient(135deg, #f093fb, #f5576c)'
        }
    ];
    const handleMenuClick = (menu)=>{
        setSelectedMenu((selectedMenu === null || selectedMenu === void 0 ? void 0 : selectedMenu.id) === menu.id ? null : menu);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                id: "15fffb5004c24949",
                children: '@import "https://fonts.googleapis.com/css2?family=Noto+Sans+Thai:wght@300;400;500;600;700&display=swap";.sakura-container.jsx-15fffb5004c24949{background:linear-gradient(135deg,#ffeef8 0%,#fff0f5 25%,#ffe4e1 50%,#fdf2f8 75%,#fef7ff 100%);min-height:100vh;position:relative;overflow-x:hidden}.sakura-petals.jsx-15fffb5004c24949{z-index:1;width:100%;height:100%;position:absolute;overflow:hidden}.petal.jsx-15fffb5004c24949{opacity:.7;background:linear-gradient(45deg,#ffb3d9,#f9c);border-radius:50% 10px;width:20px;height:20px;animation:linear infinite fall;position:absolute}.petal.jsx-15fffb5004c24949:first-child{animation-duration:8s;animation-delay:0s;left:10%}.petal.jsx-15fffb5004c24949:nth-child(2){animation-duration:12s;animation-delay:2s;left:20%}.petal.jsx-15fffb5004c24949:nth-child(3){animation-duration:10s;animation-delay:1s;left:30%}.petal.jsx-15fffb5004c24949:nth-child(4){animation-duration:14s;animation-delay:3s;left:40%}.petal.jsx-15fffb5004c24949:nth-child(5){animation-duration:9s;animation-delay:.5s;left:50%}.petal.jsx-15fffb5004c24949:nth-child(6){animation-duration:11s;animation-delay:4s;left:60%}.petal.jsx-15fffb5004c24949:nth-child(7){animation-duration:13s;animation-delay:1.5s;left:70%}.petal.jsx-15fffb5004c24949:nth-child(8){animation-duration:15s;animation-delay:2.5s;left:80%}.petal.jsx-15fffb5004c24949:nth-child(9){animation-duration:7s;animation-delay:3.5s;left:90%}@keyframes fall{0%{opacity:.7;transform:translateY(-100px)rotate(0)}50%{opacity:1}to{opacity:0;transform:translateY(100vh)rotate(360deg)}}.floating-sakura.jsx-15fffb5004c24949{z-index:2;font-size:24px;animation:6s ease-in-out infinite float;position:absolute}.floating-sakura.jsx-15fffb5004c24949:nth-child(2){animation-delay:0s;top:10%;left:5%}.floating-sakura.jsx-15fffb5004c24949:nth-child(3){animation-delay:2s;top:20%;right:5%}.floating-sakura.jsx-15fffb5004c24949:nth-child(4){animation-delay:4s;bottom:10%;left:8%}.floating-sakura.jsx-15fffb5004c24949:nth-child(5){animation-delay:1s;bottom:20%;right:8%}@keyframes float{0%,to{transform:translateY(0)rotate(0)}33%{transform:translateY(-20px)rotate(5deg)}66%{transform:translateY(-10px)rotate(-5deg)}}.main-content.jsx-15fffb5004c24949{z-index:10;padding:40px 0;font-family:Noto Sans Thai,sans-serif;position:relative}.title-gradient.jsx-15fffb5004c24949{-webkit-text-fill-color:transparent;text-shadow:0 4px 8px rgba(214,51,132,.2);background:linear-gradient(135deg,#d63384,#6f42c1,#d63384);-webkit-background-clip:text;background-clip:text;font-weight:700}.service-card.jsx-15fffb5004c24949{-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);cursor:pointer;background:rgba(255,255,255,.95);border:2px solid rgba(255,182,193,.3);border-radius:20px;margin-bottom:20px;transition:all .4s;position:relative;overflow:hidden}.service-card.jsx-15fffb5004c24949:before{content:"";background:linear-gradient(90deg,transparent,rgba(255,255,255,.3),transparent);width:100%;height:100%;transition:left .5s;position:absolute;top:0;left:-100%}.service-card.jsx-15fffb5004c24949:hover:before{left:100%}.service-card.jsx-15fffb5004c24949:hover{border-color:#d63384;transform:translateY(-10px)scale(1.02);box-shadow:0 20px 40px rgba(255,182,193,.3)}.service-icon.jsx-15fffb5004c24949{margin-bottom:15px;font-size:3rem;animation:2s infinite bounce;display:inline-block}@keyframes bounce{0%,20%,50%,80%,to{transform:translateY(0)}40%{transform:translateY(-10px)}60%{transform:translateY(-5px)}}.service-title.jsx-15fffb5004c24949{color:#d63384;margin-bottom:15px;font-size:1.4rem;font-weight:600}.service-description.jsx-15fffb5004c24949{color:#6c757d;margin-bottom:15px;font-size:.95rem;line-height:1.6}.service-price.jsx-15fffb5004c24949{-webkit-text-fill-color:transparent;background:linear-gradient(135deg,#d63384,#6f42c1);-webkit-background-clip:text;background-clip:text;margin-bottom:15px;font-size:1.2rem;font-weight:700}.feature-badge.jsx-15fffb5004c24949{color:#d63384;background:rgba(214,51,132,.1);border:1px solid rgba(214,51,132,.2);border-radius:15px;margin:2px;padding:4px 12px;font-size:.8rem;transition:all .3s;display:inline-block}.feature-badge.jsx-15fffb5004c24949:hover{background:rgba(214,51,132,.2);transform:scale(1.05)}.expanded-card.jsx-15fffb5004c24949{transform:scale(1.02);border-color:#d63384!important;box-shadow:0 25px 50px rgba(214,51,132,.2)!important}.expanded-content.jsx-15fffb5004c24949{opacity:1;max-height:200px;transition:all .4s;overflow:hidden}.collapsed-content.jsx-15fffb5004c24949{opacity:0;max-height:0;transition:all .4s;overflow:hidden}.cta-button.jsx-15fffb5004c24949{color:#fff;background:linear-gradient(135deg,#d63384,#6f42c1);border:none;border-radius:15px;padding:12px 25px;font-size:14px;font-weight:600;transition:all .3s;box-shadow:0 8px 16px rgba(214,51,132,.3)}.cta-button.jsx-15fffb5004c24949:hover{color:#fff;transform:translateY(-2px);box-shadow:0 12px 24px rgba(214,51,132,.4)}.hero-section.jsx-15fffb5004c24949{text-align:center;-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);background:rgba(255,255,255,.1);border-radius:25px;margin:20px;padding:60px 0}.hero-subtitle.jsx-15fffb5004c24949{color:#6f42c1;margin-bottom:30px;font-size:1.2rem;font-weight:500}.stats-container.jsx-15fffb5004c24949{justify-content:center;gap:40px;margin-top:30px;display:flex}.stat-item.jsx-15fffb5004c24949{text-align:center}.stat-number.jsx-15fffb5004c24949{-webkit-text-fill-color:transparent;background:linear-gradient(135deg,#d63384,#6f42c1);-webkit-background-clip:text;background-clip:text;font-size:2.5rem;font-weight:700}.stat-label.jsx-15fffb5004c24949{color:#6c757d;margin-top:5px;font-size:.9rem}@media (max-width:768px){.stats-container.jsx-15fffb5004c24949{flex-direction:column;gap:20px}.hero-section.jsx-15fffb5004c24949{padding:40px 20px}.service-card.jsx-15fffb5004c24949{margin:10px}}'
            }, void 0, false, void 0, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-15fffb5004c24949" + " " + "sakura-container",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-15fffb5004c24949" + " " + "sakura-petals",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-15fffb5004c24949" + " " + "petal"
                            }, void 0, false, {
                                fileName: "[project]/app/Services/page.js",
                                lineNumber: 342,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-15fffb5004c24949" + " " + "petal"
                            }, void 0, false, {
                                fileName: "[project]/app/Services/page.js",
                                lineNumber: 343,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-15fffb5004c24949" + " " + "petal"
                            }, void 0, false, {
                                fileName: "[project]/app/Services/page.js",
                                lineNumber: 344,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-15fffb5004c24949" + " " + "petal"
                            }, void 0, false, {
                                fileName: "[project]/app/Services/page.js",
                                lineNumber: 345,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-15fffb5004c24949" + " " + "petal"
                            }, void 0, false, {
                                fileName: "[project]/app/Services/page.js",
                                lineNumber: 346,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-15fffb5004c24949" + " " + "petal"
                            }, void 0, false, {
                                fileName: "[project]/app/Services/page.js",
                                lineNumber: 347,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-15fffb5004c24949" + " " + "petal"
                            }, void 0, false, {
                                fileName: "[project]/app/Services/page.js",
                                lineNumber: 348,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-15fffb5004c24949" + " " + "petal"
                            }, void 0, false, {
                                fileName: "[project]/app/Services/page.js",
                                lineNumber: 349,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-15fffb5004c24949" + " " + "petal"
                            }, void 0, false, {
                                fileName: "[project]/app/Services/page.js",
                                lineNumber: 350,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/Services/page.js",
                        lineNumber: 341,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-15fffb5004c24949" + " " + "floating-sakura",
                        children: "🌸"
                    }, void 0, false, {
                        fileName: "[project]/app/Services/page.js",
                        lineNumber: 353,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-15fffb5004c24949" + " " + "floating-sakura",
                        children: "🍣"
                    }, void 0, false, {
                        fileName: "[project]/app/Services/page.js",
                        lineNumber: 354,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-15fffb5004c24949" + " " + "floating-sakura",
                        children: "🌸"
                    }, void 0, false, {
                        fileName: "[project]/app/Services/page.js",
                        lineNumber: 355,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-15fffb5004c24949" + " " + "floating-sakura",
                        children: "🍱"
                    }, void 0, false, {
                        fileName: "[project]/app/Services/page.js",
                        lineNumber: 356,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-15fffb5004c24949" + " " + "main-content",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-15fffb5004c24949" + " " + "container",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-15fffb5004c24949" + " " + "hero-section",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                            style: {
                                                fontSize: '3.5rem'
                                            },
                                            className: "jsx-15fffb5004c24949" + " " + "title-gradient mb-3",
                                            children: "🌸 Sakura Japanese Restaurant 🌸"
                                        }, void 0, false, {
                                            fileName: "[project]/app/Services/page.js",
                                            lineNumber: 362,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "jsx-15fffb5004c24949" + " " + "hero-subtitle",
                                            children: [
                                                "สัมผัสรสชาติอาหารญี่ปุ่นต้นตำรับ ในบรรยากาศสไตล์ญี่ปุ่นแท้",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {
                                                    className: "jsx-15fffb5004c24949"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/Services/page.js",
                                                    lineNumber: 366,
                                                    columnNumber: 75
                                                }, this),
                                                "วัตถุดิบคุณภาพ ความสดใหม่ทุกเมนู ด้วยฝีมือเชฟมืออาชีพ"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/Services/page.js",
                                            lineNumber: 365,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-15fffb5004c24949" + " " + "stats-container",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-15fffb5004c24949" + " " + "stat-item",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "jsx-15fffb5004c24949" + " " + "stat-number",
                                                            children: "15+"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/Services/page.js",
                                                            lineNumber: 372,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "jsx-15fffb5004c24949" + " " + "stat-label",
                                                            children: "ปีประสบการณ์"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/Services/page.js",
                                                            lineNumber: 373,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/Services/page.js",
                                                    lineNumber: 371,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-15fffb5004c24949" + " " + "stat-item",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "jsx-15fffb5004c24949" + " " + "stat-number",
                                                            children: "100+"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/Services/page.js",
                                                            lineNumber: 376,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "jsx-15fffb5004c24949" + " " + "stat-label",
                                                            children: "เมนูพิเศษ"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/Services/page.js",
                                                            lineNumber: 377,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/Services/page.js",
                                                    lineNumber: 375,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-15fffb5004c24949" + " " + "stat-item",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "jsx-15fffb5004c24949" + " " + "stat-number",
                                                            children: "★ 4.8"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/Services/page.js",
                                                            lineNumber: 380,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "jsx-15fffb5004c24949" + " " + "stat-label",
                                                            children: "คะแนนรีวิว"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/Services/page.js",
                                                            lineNumber: 381,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/Services/page.js",
                                                    lineNumber: 379,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/Services/page.js",
                                            lineNumber: 370,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/Services/page.js",
                                    lineNumber: 361,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-15fffb5004c24949" + " " + "row",
                                    children: menus.map((menu)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-15fffb5004c24949" + " " + "col-lg-6 col-md-6 col-sm-12 mb-4",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                onClick: ()=>handleMenuClick(menu),
                                                style: {
                                                    boxShadow: (selectedMenu === null || selectedMenu === void 0 ? void 0 : selectedMenu.id) === menu.id ? '0 25px 50px rgba(214, 51, 132, 0.2)' : '0 10px 20px rgba(255, 182, 193, 0.2)'
                                                },
                                                className: "jsx-15fffb5004c24949" + " " + "service-card p-4 h-100 ".concat((selectedMenu === null || selectedMenu === void 0 ? void 0 : selectedMenu.id) === menu.id ? 'expanded-card' : ''),
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-15fffb5004c24949" + " " + "text-center",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "jsx-15fffb5004c24949" + " " + "service-icon",
                                                                children: menu.icon
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/Services/page.js",
                                                                lineNumber: 400,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                className: "jsx-15fffb5004c24949" + " " + "service-title",
                                                                children: menu.title
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/Services/page.js",
                                                                lineNumber: 401,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "jsx-15fffb5004c24949" + " " + "service-description",
                                                                children: menu.description
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/Services/page.js",
                                                                lineNumber: 402,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "jsx-15fffb5004c24949" + " " + "service-price",
                                                                children: menu.price
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/Services/page.js",
                                                                lineNumber: 403,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/Services/page.js",
                                                        lineNumber: 399,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-15fffb5004c24949" + " " + (((selectedMenu === null || selectedMenu === void 0 ? void 0 : selectedMenu.id) === menu.id ? 'expanded-content' : 'collapsed-content') || ""),
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("hr", {
                                                                style: {
                                                                    border: '1px solid rgba(214, 51, 132, 0.2)',
                                                                    margin: '20px 0'
                                                                },
                                                                className: "jsx-15fffb5004c24949"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/Services/page.js",
                                                                lineNumber: 407,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "jsx-15fffb5004c24949" + " " + "mb-3",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h6", {
                                                                        style: {
                                                                            color: '#d63384',
                                                                            fontWeight: '600',
                                                                            marginBottom: '10px'
                                                                        },
                                                                        className: "jsx-15fffb5004c24949",
                                                                        children: "🍽️ เมนูแนะนำ:"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/Services/page.js",
                                                                        lineNumber: 409,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "jsx-15fffb5004c24949",
                                                                        children: menu.features.map((feature, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "jsx-15fffb5004c24949" + " " + "feature-badge",
                                                                                children: feature
                                                                            }, index, false, {
                                                                                fileName: "[project]/app/Services/page.js",
                                                                                lineNumber: 414,
                                                                                columnNumber: 29
                                                                            }, this))
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/Services/page.js",
                                                                        lineNumber: 412,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/Services/page.js",
                                                                lineNumber: 408,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "jsx-15fffb5004c24949" + " " + "text-center mt-3",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    className: "jsx-15fffb5004c24949" + " " + "cta-button",
                                                                    children: "🍱 สั่งเลย"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/Services/page.js",
                                                                    lineNumber: 422,
                                                                    columnNumber: 25
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/Services/page.js",
                                                                lineNumber: 421,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/Services/page.js",
                                                        lineNumber: 406,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-15fffb5004c24949" + " " + "text-center mt-3",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                            style: {
                                                                color: '#6c757d'
                                                            },
                                                            className: "jsx-15fffb5004c24949",
                                                            children: (selectedMenu === null || selectedMenu === void 0 ? void 0 : selectedMenu.id) === menu.id ? '👆 คลิกเพื่อปิด' : '👆 คลิกเพื่อดูรายละเอียด'
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/Services/page.js",
                                                            lineNumber: 429,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/Services/page.js",
                                                        lineNumber: 428,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/Services/page.js",
                                                lineNumber: 390,
                                                columnNumber: 19
                                            }, this)
                                        }, menu.id, false, {
                                            fileName: "[project]/app/Services/page.js",
                                            lineNumber: 389,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/app/Services/page.js",
                                    lineNumber: 387,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-15fffb5004c24949" + " " + "text-center mt-5",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            padding: '40px'
                                        },
                                        className: "jsx-15fffb5004c24949" + " " + "hero-section",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                style: {
                                                    fontSize: '2.5rem'
                                                },
                                                className: "jsx-15fffb5004c24949" + " " + "title-gradient mb-3",
                                                children: "🌺 พร้อมลิ้มรสอาหารญี่ปุ่นแท้? 🌺"
                                            }, void 0, false, {
                                                fileName: "[project]/app/Services/page.js",
                                                lineNumber: 441,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                style: {
                                                    color: '#6f42c1',
                                                    fontSize: '1.1rem',
                                                    marginBottom: '30px'
                                                },
                                                className: "jsx-15fffb5004c24949",
                                                children: "จองโต๊ะวันนี้ หรือสั่งอาหารเดลิเวอรี่ถึงบ้าน"
                                            }, void 0, false, {
                                                fileName: "[project]/app/Services/page.js",
                                                lineNumber: 444,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: 'flex',
                                                    justifyContent: 'center',
                                                    gap: '15px',
                                                    flexWrap: 'wrap'
                                                },
                                                className: "jsx-15fffb5004c24949",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        style: {
                                                            padding: '15px 30px',
                                                            fontSize: '16px'
                                                        },
                                                        className: "jsx-15fffb5004c24949" + " " + "cta-button",
                                                        children: "📞 จองโต๊ะ"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/Services/page.js",
                                                        lineNumber: 448,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        style: {
                                                            padding: '15px 30px',
                                                            fontSize: '16px'
                                                        },
                                                        className: "jsx-15fffb5004c24949" + " " + "cta-button",
                                                        children: "🛵 เดลิเวอรี่"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/Services/page.js",
                                                        lineNumber: 451,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        style: {
                                                            padding: '15px 30px',
                                                            fontSize: '16px'
                                                        },
                                                        className: "jsx-15fffb5004c24949" + " " + "cta-button",
                                                        children: "🎁 โปรโมชั่น"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/Services/page.js",
                                                        lineNumber: 454,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/Services/page.js",
                                                lineNumber: 447,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/Services/page.js",
                                        lineNumber: 440,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/Services/page.js",
                                    lineNumber: 439,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/Services/page.js",
                            lineNumber: 359,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/Services/page.js",
                        lineNumber: 358,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/Services/page.js",
                lineNumber: 340,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(JapaneseRestaurant, "Vl6Ykyr3RPjolRsRnCee+Z0qLu4=");
_c = JapaneseRestaurant;
var _c;
__turbopack_context__.k.register(_c, "JapaneseRestaurant");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
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

//# sourceMappingURL=_fad53b3f._.js.map