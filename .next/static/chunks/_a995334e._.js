(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/Contact/page.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Contact
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function Contact() {
    _s();
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        service: ''
    });
    const handleInputChange = (e)=>{
        const { name, value } = e.target;
        setFormData((prev)=>({
                ...prev,
                [name]: value
            }));
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        try {
            // Simulate API call
            await new Promise((resolve)=>setTimeout(resolve, 1500));
            alert('🌸 ส่งข้อความสำเร็จ! 🌸\nเราจะติดต่อกลับภายใน 24 ชั่วโมง\nขอบคุณที่ไว้วางใจในบริการของเรา');
            // Reset form
            setFormData({
                name: '',
                email: '',
                phone: '',
                subject: '',
                message: '',
                service: ''
            });
        } catch (error) {
            alert('❌ เกิดข้อผิดพลาด กรุณาลองใหม่อีกครั้ง');
        }
    };
    const contactInfo = [
        {
            icon: '📍',
            title: 'ที่อยู่สำนักงาน',
            content: '123 Sakura Street, Shibuya<br/>Tokyo, Japan 150-0041',
            color: '#d63384'
        },
        {
            icon: '📞',
            title: 'โทรศัพท์',
            content: '+66 2-123-4567<br/>+81 3-1234-5678',
            color: '#6f42c1'
        },
        {
            icon: '📧',
            title: 'อีเมล',
            content: 'info@sakuratravel.com<br/>support@sakuratravel.com',
            color: '#e83e8c'
        }
    ];
    const socialMedia = [
        {
            icon: '📘',
            name: 'Facebook',
            color: '#3b5998',
            url: '#'
        },
        {
            icon: '📷',
            name: 'Instagram',
            color: '#e4405f',
            url: '#'
        },
        {
            icon: '🐦',
            name: 'Twitter',
            color: '#1da1f2',
            url: '#'
        },
        {
            icon: '📺',
            name: 'YouTube',
            color: '#ff0000',
            url: '#'
        },
        {
            icon: '💼',
            name: 'LinkedIn',
            color: '#0077b5',
            url: '#'
        },
        {
            icon: '📱',
            name: 'Line',
            color: '#00b900',
            url: '#'
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                id: "7ec702f051cb65f0",
                children: '@import "https://fonts.googleapis.com/css2?family=Noto+Sans+Thai:wght@300;400;500;600;700&display=swap";.sakura-container.jsx-7ec702f051cb65f0{background:linear-gradient(135deg,#ffeef8 0%,#fff0f5 25%,#ffe4e1 50%,#fdf2f8 75%,#fef7ff 100%);padding-bottom:0;position:relative;overflow-x:hidden}.sakura-petals.jsx-7ec702f051cb65f0{z-index:1;width:100%;height:100%;position:absolute;overflow:hidden}.petal.jsx-7ec702f051cb65f0{opacity:.7;background:linear-gradient(45deg,#ffb3d9,#f9c);border-radius:50% 10px;width:20px;height:20px;animation:linear infinite fall;position:absolute}.petal.jsx-7ec702f051cb65f0:first-child{animation-duration:8s;animation-delay:0s;left:10%}.petal.jsx-7ec702f051cb65f0:nth-child(2){animation-duration:12s;animation-delay:2s;left:20%}.petal.jsx-7ec702f051cb65f0:nth-child(3){animation-duration:10s;animation-delay:1s;left:30%}.petal.jsx-7ec702f051cb65f0:nth-child(4){animation-duration:14s;animation-delay:3s;left:40%}.petal.jsx-7ec702f051cb65f0:nth-child(5){animation-duration:9s;animation-delay:.5s;left:50%}.petal.jsx-7ec702f051cb65f0:nth-child(6){animation-duration:11s;animation-delay:4s;left:60%}.petal.jsx-7ec702f051cb65f0:nth-child(7){animation-duration:13s;animation-delay:1.5s;left:70%}.petal.jsx-7ec702f051cb65f0:nth-child(8){animation-duration:15s;animation-delay:2.5s;left:80%}.petal.jsx-7ec702f051cb65f0:nth-child(9){animation-duration:7s;animation-delay:3.5s;left:90%}@keyframes fall{0%{opacity:.7;transform:translateY(-100px)rotate(0)}50%{opacity:1}to{opacity:0;transform:translateY(100vh)rotate(360deg)}}.floating-sakura.jsx-7ec702f051cb65f0{z-index:2;font-size:24px;animation:6s ease-in-out infinite float;position:absolute}.floating-sakura.jsx-7ec702f051cb65f0:nth-child(2){animation-delay:0s;top:10%;left:5%}.floating-sakura.jsx-7ec702f051cb65f0:nth-child(3){animation-delay:2s;top:20%;right:5%}.floating-sakura.jsx-7ec702f051cb65f0:nth-child(4){animation-delay:4s;bottom:10%;left:8%}.floating-sakura.jsx-7ec702f051cb65f0:nth-child(5){animation-delay:1s;bottom:20%;right:8%}.floating-sakura.jsx-7ec702f051cb65f0:nth-child(6){animation-delay:3s;top:50%;left:2%}.floating-sakura.jsx-7ec702f051cb65f0:nth-child(7){animation-delay:5s;top:60%;right:2%}@keyframes float{0%,to{transform:translateY(0)rotate(0)}33%{transform:translateY(-20px)rotate(5deg)}66%{transform:translateY(-10px)rotate(-5deg)}}.main-content.jsx-7ec702f051cb65f0{z-index:10;padding:40px 0;font-family:Noto Sans Thai,sans-serif;position:relative}.title-gradient.jsx-7ec702f051cb65f0{-webkit-text-fill-color:transparent;text-shadow:0 4px 8px rgba(214,51,132,.2);background:linear-gradient(135deg,#d63384,#6f42c1,#d63384);-webkit-background-clip:text;background-clip:text;font-weight:700}.contact-card.jsx-7ec702f051cb65f0{-webkit-backdrop-filter:blur(15px);backdrop-filter:blur(15px);background:rgba(255,255,255,.95);border:2px solid rgba(255,182,193,.3);border-radius:25px;transition:all .4s;position:relative;overflow:hidden;box-shadow:0 20px 40px rgba(255,182,193,.2)}.contact-card.jsx-7ec702f051cb65f0:before{content:"";z-index:-1;background:linear-gradient(45deg,#ffb3d9,#f9c,#ffb3d9);border-radius:25px;position:absolute;top:-2px;bottom:-2px;left:-2px;right:-2px}.contact-card.jsx-7ec702f051cb65f0:hover{transform:translateY(-5px);box-shadow:0 30px 60px rgba(255,182,193,.3)}.form-input.jsx-7ec702f051cb65f0{background:rgba(255,240,245,.8);border:2px solid rgba(255,182,193,.3);border-radius:15px;padding:15px 20px;font-family:Noto Sans Thai,sans-serif;font-size:16px;transition:all .3s;box-shadow:0 4px 8px rgba(255,182,193,.1)}.form-input.jsx-7ec702f051cb65f0:focus{background:#fff0f5;border-color:#d63384;outline:none;transform:translateY(-2px);box-shadow:0 0 20px rgba(214,51,132,.2)}.form-input.jsx-7ec702f051cb65f0::placeholder{color:#d63384;font-weight:400}.submit-btn.jsx-7ec702f051cb65f0{color:#fff;cursor:pointer;background:linear-gradient(135deg,#d63384,#6f42c1);border:none;border-radius:20px;padding:18px 40px;font-family:Noto Sans Thai,sans-serif;font-size:18px;font-weight:600;transition:all .4s;position:relative;overflow:hidden;box-shadow:0 10px 20px rgba(214,51,132,.3)}.submit-btn.jsx-7ec702f051cb65f0:before{content:"";background:linear-gradient(90deg,transparent,rgba(255,255,255,.3),transparent);width:100%;height:100%;transition:left .5s;position:absolute;top:0;left:-100%}.submit-btn.jsx-7ec702f051cb65f0:hover:before{left:100%}.submit-btn.jsx-7ec702f051cb65f0:hover{transform:translateY(-3px);box-shadow:0 15px 30px rgba(214,51,132,.4)}.contact-info-card.jsx-7ec702f051cb65f0{-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);text-align:center;background:rgba(255,255,255,.9);border:2px solid rgba(255,182,193,.2);border-radius:20px;height:100%;margin-bottom:20px;padding:30px 20px;transition:all .3s;position:relative;overflow:hidden}.contact-info-card.jsx-7ec702f051cb65f0:before{content:"";background:linear-gradient(90deg,transparent,rgba(255,255,255,.3),transparent);width:100%;height:100%;transition:left .5s;position:absolute;top:0;left:-100%}.contact-info-card.jsx-7ec702f051cb65f0:hover:before{left:100%}.contact-info-card.jsx-7ec702f051cb65f0:hover{border-color:#d63384;transform:translateY(-8px)scale(1.02);box-shadow:0 20px 40px rgba(255,182,193,.3)}.contact-icon.jsx-7ec702f051cb65f0{margin-bottom:15px;font-size:2.8rem;animation:2s infinite bounce;display:inline-block}@keyframes bounce{0%,20%,50%,80%,to{transform:translateY(0)}40%{transform:translateY(-10px)}60%{transform:translateY(-5px)}}.contact-title.jsx-7ec702f051cb65f0{color:#d63384;margin-bottom:12px;font-size:1.2rem;font-weight:600}.contact-content.jsx-7ec702f051cb65f0{color:#6c757d;font-size:.9rem;line-height:1.6}.social-media-container.jsx-7ec702f051cb65f0{flex-wrap:wrap;justify-content:center;gap:15px;margin-top:30px;display:flex}.social-btn.jsx-7ec702f051cb65f0{color:#fff;border-radius:50%;justify-content:center;align-items:center;width:60px;height:60px;font-size:1.5rem;text-decoration:none;transition:all .3s;display:flex;position:relative;overflow:hidden}.social-btn.jsx-7ec702f051cb65f0:before{content:"";background:rgba(255,255,255,.2);border-radius:50%;width:100%;height:100%;transition:transform .3s;position:absolute;top:0;left:0;transform:scale(0)}.social-btn.jsx-7ec702f051cb65f0:hover:before{transform:scale(1)}.social-btn.jsx-7ec702f051cb65f0:hover{transform:translateY(-5px)scale(1.1);box-shadow:0 10px 20px rgba(0,0,0,.3)}.hero-section.jsx-7ec702f051cb65f0{text-align:center;-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);background:rgba(255,255,255,.1);border-radius:25px;margin:20px 20px 40px;padding:80px 0 60px;position:relative;overflow:hidden}.hero-section.jsx-7ec702f051cb65f0:before{content:"";background:url("data:image/svg+xml,<svg xmlns=\\"http://www.w3.org/2000/svg\\" viewBox=\\"0 0 100 100\\"><circle cx=\\"20\\" cy=\\"20\\" r=\\"2\\" fill=\\"%23ff99cc\\" opacity=\\"0.3\\"/><circle cx=\\"80\\" cy=\\"40\\" r=\\"1.5\\" fill=\\"%23ffb3d9\\" opacity=\\"0.4\\"/><circle cx=\\"40\\" cy=\\"80\\" r=\\"1\\" fill=\\"%23ff99cc\\" opacity=\\"0.3\\"/><circle cx=\\"70\\" cy=\\"70\\" r=\\"2.5\\" fill=\\"%23ffb3d9\\" opacity=\\"0.2\\"/></svg>");width:100%;height:100%;animation:3s ease-in-out infinite sparkle;position:absolute;top:0;left:0}@keyframes sparkle{0%,to{opacity:.3}50%{opacity:.8}}.working-hours-banner.jsx-7ec702f051cb65f0{color:#fff;text-align:center;background:linear-gradient(135deg,#20c997,#17a2b8);border-radius:50px;margin:20px auto;padding:15px 30px;font-weight:600;animation:2s ease-in-out infinite pulse;display:inline-block;box-shadow:0 8px 20px rgba(32,201,151,.3)}@keyframes pulse{0%,to{transform:scale(1)}50%{transform:scale(1.05)}}@media (max-width:768px){.hero-section.jsx-7ec702f051cb65f0{margin:10px;padding:60px 20px 40px}.contact-card.jsx-7ec702f051cb65f0{border-radius:20px;margin:10px}.social-media-container.jsx-7ec702f051cb65f0{gap:10px}.social-btn.jsx-7ec702f051cb65f0{width:50px;height:50px;font-size:1.3rem}.working-hours-banner.jsx-7ec702f051cb65f0{padding:12px 20px;font-size:.9rem}}.loading-animation.jsx-7ec702f051cb65f0{border:3px solid rgba(255,255,255,.3);border-top-color:#fff;border-radius:50%;width:20px;height:20px;animation:1s ease-in-out infinite spin;display:inline-block}@keyframes spin{to{transform:rotate(360deg)}}.contact-grid.jsx-7ec702f051cb65f0{flex-direction:column;height:100%;display:flex}.contact-info-section.jsx-7ec702f051cb65f0{flex-direction:column;flex:1;height:100%;display:flex}.contact-info-wrapper.jsx-7ec702f051cb65f0{flex-direction:column;gap:15px;height:100%;display:flex}'
            }, void 0, false, void 0, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-7ec702f051cb65f0" + " " + "sakura-container",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-7ec702f051cb65f0" + " " + "sakura-petals",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-7ec702f051cb65f0" + " " + "petal"
                            }, void 0, false, {
                                fileName: "[project]/app/Contact/page.js",
                                lineNumber: 468,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-7ec702f051cb65f0" + " " + "petal"
                            }, void 0, false, {
                                fileName: "[project]/app/Contact/page.js",
                                lineNumber: 469,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-7ec702f051cb65f0" + " " + "petal"
                            }, void 0, false, {
                                fileName: "[project]/app/Contact/page.js",
                                lineNumber: 470,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-7ec702f051cb65f0" + " " + "petal"
                            }, void 0, false, {
                                fileName: "[project]/app/Contact/page.js",
                                lineNumber: 471,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-7ec702f051cb65f0" + " " + "petal"
                            }, void 0, false, {
                                fileName: "[project]/app/Contact/page.js",
                                lineNumber: 472,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-7ec702f051cb65f0" + " " + "petal"
                            }, void 0, false, {
                                fileName: "[project]/app/Contact/page.js",
                                lineNumber: 473,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-7ec702f051cb65f0" + " " + "petal"
                            }, void 0, false, {
                                fileName: "[project]/app/Contact/page.js",
                                lineNumber: 474,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-7ec702f051cb65f0" + " " + "petal"
                            }, void 0, false, {
                                fileName: "[project]/app/Contact/page.js",
                                lineNumber: 475,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-7ec702f051cb65f0" + " " + "petal"
                            }, void 0, false, {
                                fileName: "[project]/app/Contact/page.js",
                                lineNumber: 476,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/Contact/page.js",
                        lineNumber: 467,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-7ec702f051cb65f0" + " " + "floating-sakura",
                        children: "🌸"
                    }, void 0, false, {
                        fileName: "[project]/app/Contact/page.js",
                        lineNumber: 479,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-7ec702f051cb65f0" + " " + "floating-sakura",
                        children: "🌺"
                    }, void 0, false, {
                        fileName: "[project]/app/Contact/page.js",
                        lineNumber: 480,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-7ec702f051cb65f0" + " " + "floating-sakura",
                        children: "🌸"
                    }, void 0, false, {
                        fileName: "[project]/app/Contact/page.js",
                        lineNumber: 481,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-7ec702f051cb65f0" + " " + "floating-sakura",
                        children: "🌺"
                    }, void 0, false, {
                        fileName: "[project]/app/Contact/page.js",
                        lineNumber: 482,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-7ec702f051cb65f0" + " " + "floating-sakura",
                        children: "🌸"
                    }, void 0, false, {
                        fileName: "[project]/app/Contact/page.js",
                        lineNumber: 483,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-7ec702f051cb65f0" + " " + "floating-sakura",
                        children: "🌺"
                    }, void 0, false, {
                        fileName: "[project]/app/Contact/page.js",
                        lineNumber: 484,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-7ec702f051cb65f0" + " " + "main-content",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                maxWidth: '1200px',
                                margin: '0 auto',
                                padding: '0 20px'
                            },
                            className: "jsx-7ec702f051cb65f0",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-7ec702f051cb65f0" + " " + "hero-section",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                            style: {
                                                fontSize: '4rem'
                                            },
                                            className: "jsx-7ec702f051cb65f0" + " " + "title-gradient mb-4",
                                            children: "🌸 ติดต่อเรา 🌸"
                                        }, void 0, false, {
                                            fileName: "[project]/app/Contact/page.js",
                                            lineNumber: 490,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            style: {
                                                color: '#6f42c1',
                                                fontSize: '1.3rem',
                                                fontWeight: '500',
                                                lineHeight: '1.8'
                                            },
                                            className: "jsx-7ec702f051cb65f0",
                                            children: [
                                                "เรายินดีที่จะช่วยเหลือและให้คำปรึกษาเกี่ยวกับการเดินทางไปญี่ปุ่น",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {
                                                    className: "jsx-7ec702f051cb65f0"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/Contact/page.js",
                                                    lineNumber: 494,
                                                    columnNumber: 81
                                                }, this),
                                                "ติดต่อเราได้ทุกช่องทาง เรามีทีมงานพร้อมให้บริการ 24/7"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/Contact/page.js",
                                            lineNumber: 493,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-7ec702f051cb65f0" + " " + "working-hours-banner",
                                            children: "⏰ เวลาทำการ: จันทร์-ศุกร์ 9:00-18:00 | เสาร์-อาทิตย์ 10:00-16:00"
                                        }, void 0, false, {
                                            fileName: "[project]/app/Contact/page.js",
                                            lineNumber: 499,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-7ec702f051cb65f0" + " " + "social-media-container",
                                            children: socialMedia.map((social, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: social.url,
                                                    style: {
                                                        backgroundColor: social.color
                                                    },
                                                    title: social.name,
                                                    className: "jsx-7ec702f051cb65f0" + " " + "social-btn",
                                                    children: social.icon
                                                }, index, false, {
                                                    fileName: "[project]/app/Contact/page.js",
                                                    lineNumber: 505,
                                                    columnNumber: 19
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/app/Contact/page.js",
                                            lineNumber: 503,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/Contact/page.js",
                                    lineNumber: 489,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: 'flex',
                                        gap: '30px',
                                        flexWrap: 'wrap'
                                    },
                                    className: "jsx-7ec702f051cb65f0",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                flex: '2',
                                                minWidth: '300px'
                                            },
                                            className: "jsx-7ec702f051cb65f0",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-7ec702f051cb65f0" + " " + "contact-card p-5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                        style: {
                                                            fontSize: '2.5rem',
                                                            textAlign: 'center'
                                                        },
                                                        className: "jsx-7ec702f051cb65f0" + " " + "title-gradient mb-4",
                                                        children: "💌 ส่งข้อความหาเรา"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/Contact/page.js",
                                                        lineNumber: 522,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        onSubmit: handleSubmit,
                                                        className: "jsx-7ec702f051cb65f0",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    display: 'grid',
                                                                    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                                                                    gap: '20px',
                                                                    marginBottom: '20px'
                                                                },
                                                                className: "jsx-7ec702f051cb65f0",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        type: "text",
                                                                        name: "name",
                                                                        placeholder: "🌸 ชื่อ-นามสกุล",
                                                                        value: formData.name,
                                                                        onChange: handleInputChange,
                                                                        required: true,
                                                                        className: "jsx-7ec702f051cb65f0" + " " + "form-input"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/Contact/page.js",
                                                                        lineNumber: 528,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        type: "email",
                                                                        name: "email",
                                                                        placeholder: "📧 อีเมล",
                                                                        value: formData.email,
                                                                        onChange: handleInputChange,
                                                                        required: true,
                                                                        className: "jsx-7ec702f051cb65f0" + " " + "form-input"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/Contact/page.js",
                                                                        lineNumber: 537,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/Contact/page.js",
                                                                lineNumber: 527,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    display: 'grid',
                                                                    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                                                                    gap: '20px',
                                                                    marginBottom: '20px'
                                                                },
                                                                className: "jsx-7ec702f051cb65f0",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        type: "tel",
                                                                        name: "phone",
                                                                        placeholder: "📞 เบอร์โทรศัพท์",
                                                                        value: formData.phone,
                                                                        onChange: handleInputChange,
                                                                        required: true,
                                                                        className: "jsx-7ec702f051cb65f0" + " " + "form-input"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/Contact/page.js",
                                                                        lineNumber: 549,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                        name: "service",
                                                                        value: formData.service,
                                                                        onChange: handleInputChange,
                                                                        required: true,
                                                                        className: "jsx-7ec702f051cb65f0" + " " + "form-input",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                value: "",
                                                                                className: "jsx-7ec702f051cb65f0",
                                                                                children: "🌺 เลือกบริการที่สนใจ"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/Contact/page.js",
                                                                                lineNumber: 565,
                                                                                columnNumber: 25
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                value: "translation",
                                                                                className: "jsx-7ec702f051cb65f0",
                                                                                children: "แปลและล่าม"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/Contact/page.js",
                                                                                lineNumber: 566,
                                                                                columnNumber: 25
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                value: "accommodation",
                                                                                className: "jsx-7ec702f051cb65f0",
                                                                                children: "จองที่พัก"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/Contact/page.js",
                                                                                lineNumber: 567,
                                                                                columnNumber: 25
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                value: "transport",
                                                                                className: "jsx-7ec702f051cb65f0",
                                                                                children: "การขนส่ง"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/Contact/page.js",
                                                                                lineNumber: 568,
                                                                                columnNumber: 25
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                value: "guide",
                                                                                className: "jsx-7ec702f051cb65f0",
                                                                                children: "ไกด์ท้องถิ่น"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/Contact/page.js",
                                                                                lineNumber: 569,
                                                                                columnNumber: 25
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                value: "visa",
                                                                                className: "jsx-7ec702f051cb65f0",
                                                                                children: "วีซ่าและเอกสาร"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/Contact/page.js",
                                                                                lineNumber: 570,
                                                                                columnNumber: 25
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                value: "activities",
                                                                                className: "jsx-7ec702f051cb65f0",
                                                                                children: "กิจกรรมพิเศษ"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/Contact/page.js",
                                                                                lineNumber: 571,
                                                                                columnNumber: 25
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/Contact/page.js",
                                                                        lineNumber: 558,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/Contact/page.js",
                                                                lineNumber: 548,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "jsx-7ec702f051cb65f0" + " " + "mb-4",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "text",
                                                                    name: "subject",
                                                                    placeholder: "🌸 หัวข้อเรื่อง",
                                                                    value: formData.subject,
                                                                    onChange: handleInputChange,
                                                                    style: {
                                                                        width: '100%'
                                                                    },
                                                                    required: true,
                                                                    className: "jsx-7ec702f051cb65f0" + " " + "form-input"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/Contact/page.js",
                                                                    lineNumber: 576,
                                                                    columnNumber: 23
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/Contact/page.js",
                                                                lineNumber: 575,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "jsx-7ec702f051cb65f0" + " " + "mb-4",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                                    name: "message",
                                                                    placeholder: "💭 ข้อความของคุณ...",
                                                                    value: formData.message,
                                                                    onChange: handleInputChange,
                                                                    rows: "5",
                                                                    required: true,
                                                                    style: {
                                                                        resize: 'vertical',
                                                                        width: '100%'
                                                                    },
                                                                    className: "jsx-7ec702f051cb65f0" + " " + "form-input"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/Contact/page.js",
                                                                    lineNumber: 589,
                                                                    columnNumber: 23
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/Contact/page.js",
                                                                lineNumber: 588,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    textAlign: 'center'
                                                                },
                                                                className: "jsx-7ec702f051cb65f0",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    type: "submit",
                                                                    onClick: handleSubmit,
                                                                    className: "jsx-7ec702f051cb65f0" + " " + "submit-btn",
                                                                    children: "🌸 ส่งข้อความ 🌸"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/Contact/page.js",
                                                                    lineNumber: 602,
                                                                    columnNumber: 23
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/Contact/page.js",
                                                                lineNumber: 601,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/Contact/page.js",
                                                        lineNumber: 526,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/Contact/page.js",
                                                lineNumber: 521,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/Contact/page.js",
                                            lineNumber: 520,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                flex: '1',
                                                minWidth: '280px'
                                            },
                                            className: "jsx-7ec702f051cb65f0",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-7ec702f051cb65f0" + " " + "contact-info-wrapper",
                                                children: contactInfo.map((info, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            flex: '1'
                                                        },
                                                        className: "jsx-7ec702f051cb65f0" + " " + "contact-info-card",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    color: info.color
                                                                },
                                                                className: "jsx-7ec702f051cb65f0" + " " + "contact-icon",
                                                                children: info.icon
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/Contact/page.js",
                                                                lineNumber: 615,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                className: "jsx-7ec702f051cb65f0" + " " + "contact-title",
                                                                children: info.title
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/Contact/page.js",
                                                                lineNumber: 618,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                dangerouslySetInnerHTML: {
                                                                    __html: info.content
                                                                },
                                                                className: "jsx-7ec702f051cb65f0" + " " + "contact-content"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/Contact/page.js",
                                                                lineNumber: 619,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, index, true, {
                                                        fileName: "[project]/app/Contact/page.js",
                                                        lineNumber: 614,
                                                        columnNumber: 21
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/app/Contact/page.js",
                                                lineNumber: 612,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/Contact/page.js",
                                            lineNumber: 611,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/Contact/page.js",
                                    lineNumber: 518,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        marginTop: '50px'
                                    },
                                    className: "jsx-7ec702f051cb65f0",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-7ec702f051cb65f0" + " " + "contact-card p-5 text-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                style: {
                                                    fontSize: '2.2rem'
                                                },
                                                className: "jsx-7ec702f051cb65f0" + " " + "title-gradient mb-4",
                                                children: "🌺 ทำไมต้องเลือกเรา? 🌺"
                                            }, void 0, false, {
                                                fileName: "[project]/app/Contact/page.js",
                                                lineNumber: 632,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: 'grid',
                                                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                                                    gap: '30px'
                                                },
                                                className: "jsx-7ec702f051cb65f0",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-7ec702f051cb65f0",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    fontSize: '3rem',
                                                                    marginBottom: '10px'
                                                                },
                                                                className: "jsx-7ec702f051cb65f0",
                                                                children: "⚡"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/Contact/page.js",
                                                                lineNumber: 637,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                                style: {
                                                                    color: '#d63384'
                                                                },
                                                                className: "jsx-7ec702f051cb65f0",
                                                                children: "ตอบกลับเร็ว"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/Contact/page.js",
                                                                lineNumber: 638,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                style: {
                                                                    color: '#6c757d',
                                                                    fontSize: '0.9rem'
                                                                },
                                                                className: "jsx-7ec702f051cb65f0",
                                                                children: "ตอบกลับภายใน 1 ชั่วโมง"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/Contact/page.js",
                                                                lineNumber: 639,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/Contact/page.js",
                                                        lineNumber: 636,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-7ec702f051cb65f0",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    fontSize: '3rem',
                                                                    marginBottom: '10px'
                                                                },
                                                                className: "jsx-7ec702f051cb65f0",
                                                                children: "🎌"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/Contact/page.js",
                                                                lineNumber: 642,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                                style: {
                                                                    color: '#d63384'
                                                                },
                                                                className: "jsx-7ec702f051cb65f0",
                                                                children: "ผู้เชี่ยวชาญ"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/Contact/page.js",
                                                                lineNumber: 643,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                style: {
                                                                    color: '#6c757d',
                                                                    fontSize: '0.9rem'
                                                                },
                                                                className: "jsx-7ec702f051cb65f0",
                                                                children: "15+ ปี ประสบการณ์ญี่ปุ่น"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/Contact/page.js",
                                                                lineNumber: 644,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/Contact/page.js",
                                                        lineNumber: 641,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-7ec702f051cb65f0",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    fontSize: '3rem',
                                                                    marginBottom: '10px'
                                                                },
                                                                className: "jsx-7ec702f051cb65f0",
                                                                children: "💯"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/Contact/page.js",
                                                                lineNumber: 647,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                                style: {
                                                                    color: '#d63384'
                                                                },
                                                                className: "jsx-7ec702f051cb65f0",
                                                                children: "คุณภาพ"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/Contact/page.js",
                                                                lineNumber: 648,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                style: {
                                                                    color: '#6c757d',
                                                                    fontSize: '0.9rem'
                                                                },
                                                                className: "jsx-7ec702f051cb65f0",
                                                                children: "บริการระดับพรีเมียม"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/Contact/page.js",
                                                                lineNumber: 649,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/Contact/page.js",
                                                        lineNumber: 646,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-7ec702f051cb65f0",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    fontSize: '3rem',
                                                                    marginBottom: '10px'
                                                                },
                                                                className: "jsx-7ec702f051cb65f0",
                                                                children: "🤝"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/Contact/page.js",
                                                                lineNumber: 652,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                                style: {
                                                                    color: '#d63384'
                                                                },
                                                                className: "jsx-7ec702f051cb65f0",
                                                                children: "ไว้วางใจ"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/Contact/page.js",
                                                                lineNumber: 653,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                style: {
                                                                    color: '#6c757d',
                                                                    fontSize: '0.9rem'
                                                                },
                                                                className: "jsx-7ec702f051cb65f0",
                                                                children: "2000+ ลูกค้าพึงพอใจ"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/Contact/page.js",
                                                                lineNumber: 654,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/Contact/page.js",
                                                        lineNumber: 651,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/Contact/page.js",
                                                lineNumber: 635,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/Contact/page.js",
                                        lineNumber: 631,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/Contact/page.js",
                                    lineNumber: 630,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/Contact/page.js",
                            lineNumber: 487,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/Contact/page.js",
                        lineNumber: 486,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/Contact/page.js",
                lineNumber: 466,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(Contact, "z4vnoyZoBIudqTkMGGwwJ8LzvSQ=");
_c = Contact;
var _c;
__turbopack_context__.k.register(_c, "Contact");
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

//# sourceMappingURL=_a995334e._.js.map