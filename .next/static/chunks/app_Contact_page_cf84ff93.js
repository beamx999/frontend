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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sweetalert2$2f$dist$2f$sweetalert2$2e$all$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sweetalert2/dist/sweetalert2.all.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
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
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sweetalert2$2f$dist$2f$sweetalert2$2e$all$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].fire({
                icon: 'success',
                title: '<div style="color: #d63384; font-family: \'Noto Sans Thai\', sans-serif;"><h3>🌸 ส่งข้อความสำเร็จ! 🌸</h3></div>',
                html: '<p style="color: #6f42c1; font-family: \'Noto Sans Thai\', sans-serif;">เราจะติดต่อกลับภายใน 24 ชั่วโมง<br/>ขอบคุณที่ไว้วางใจในบริการของเรา</p>',
                showConfirmButton: false,
                timer: 4000,
                background: 'linear-gradient(135deg, #ffeef8 0%, #fff0f5 100%)',
                customClass: {
                    popup: 'sakura-popup'
                }
            });
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
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sweetalert2$2f$dist$2f$sweetalert2$2e$all$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].fire({
                icon: 'error',
                title: '<div style="color: #dc3545; font-family: \'Noto Sans Thai\', sans-serif;"><h3>❌ เกิดข้อผิดพลาด</h3></div>',
                html: '<p style="color: #6c757d; font-family: \'Noto Sans Thai\', sans-serif;">กรุณาลองใหม่อีกครั้ง</p>',
                confirmButtonText: 'ตกลง',
                confirmButtonColor: '#dc3545'
            });
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
        },
        {
            icon: '⏰',
            title: 'เวลาทำการ',
            content: 'จันทร์ - ศุกร์: 9:00-18:00<br/>เสาร์ - อาทิตย์: 10:00-16:00',
            color: '#20c997'
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
                id: "8fc30236e0610d91",
                children: '@import "https://fonts.googleapis.com/css2?family=Noto+Sans+Thai:wght@300;400;500;600;700&display=swap";.sakura-container.jsx-8fc30236e0610d91{background:linear-gradient(135deg,#ffeef8 0%,#fff0f5 25%,#ffe4e1 50%,#fdf2f8 75%,#fef7ff 100%);min-height:100vh;position:relative;overflow-x:hidden}.sakura-petals.jsx-8fc30236e0610d91{z-index:1;width:100%;height:100%;position:absolute;overflow:hidden}.petal.jsx-8fc30236e0610d91{opacity:.7;background:linear-gradient(45deg,#ffb3d9,#f9c);border-radius:50% 10px;width:20px;height:20px;animation:linear infinite fall;position:absolute}.petal.jsx-8fc30236e0610d91:first-child{animation-duration:8s;animation-delay:0s;left:10%}.petal.jsx-8fc30236e0610d91:nth-child(2){animation-duration:12s;animation-delay:2s;left:20%}.petal.jsx-8fc30236e0610d91:nth-child(3){animation-duration:10s;animation-delay:1s;left:30%}.petal.jsx-8fc30236e0610d91:nth-child(4){animation-duration:14s;animation-delay:3s;left:40%}.petal.jsx-8fc30236e0610d91:nth-child(5){animation-duration:9s;animation-delay:.5s;left:50%}.petal.jsx-8fc30236e0610d91:nth-child(6){animation-duration:11s;animation-delay:4s;left:60%}.petal.jsx-8fc30236e0610d91:nth-child(7){animation-duration:13s;animation-delay:1.5s;left:70%}.petal.jsx-8fc30236e0610d91:nth-child(8){animation-duration:15s;animation-delay:2.5s;left:80%}.petal.jsx-8fc30236e0610d91:nth-child(9){animation-duration:7s;animation-delay:3.5s;left:90%}@keyframes fall{0%{opacity:.7;transform:translateY(-100px)rotate(0)}50%{opacity:1}to{opacity:0;transform:translateY(100vh)rotate(360deg)}}.floating-sakura.jsx-8fc30236e0610d91{z-index:2;font-size:24px;animation:6s ease-in-out infinite float;position:absolute}.floating-sakura.jsx-8fc30236e0610d91:nth-child(2){animation-delay:0s;top:10%;left:5%}.floating-sakura.jsx-8fc30236e0610d91:nth-child(3){animation-delay:2s;top:20%;right:5%}.floating-sakura.jsx-8fc30236e0610d91:nth-child(4){animation-delay:4s;bottom:10%;left:8%}.floating-sakura.jsx-8fc30236e0610d91:nth-child(5){animation-delay:1s;bottom:20%;right:8%}.floating-sakura.jsx-8fc30236e0610d91:nth-child(6){animation-delay:3s;top:50%;left:2%}.floating-sakura.jsx-8fc30236e0610d91:nth-child(7){animation-delay:5s;top:60%;right:2%}@keyframes float{0%,to{transform:translateY(0)rotate(0)}33%{transform:translateY(-20px)rotate(5deg)}66%{transform:translateY(-10px)rotate(-5deg)}}.main-content.jsx-8fc30236e0610d91{z-index:10;padding:40px 0;font-family:Noto Sans Thai,sans-serif;position:relative}.title-gradient.jsx-8fc30236e0610d91{-webkit-text-fill-color:transparent;text-shadow:0 4px 8px rgba(214,51,132,.2);background:linear-gradient(135deg,#d63384,#6f42c1,#d63384);-webkit-background-clip:text;background-clip:text;font-weight:700}.contact-card.jsx-8fc30236e0610d91{-webkit-backdrop-filter:blur(15px);backdrop-filter:blur(15px);background:rgba(255,255,255,.95);border:2px solid rgba(255,182,193,.3);border-radius:25px;transition:all .4s;position:relative;overflow:hidden;box-shadow:0 20px 40px rgba(255,182,193,.2)}.contact-card.jsx-8fc30236e0610d91:before{content:"";z-index:-1;background:linear-gradient(45deg,#ffb3d9,#f9c,#ffb3d9);border-radius:25px;position:absolute;top:-2px;bottom:-2px;left:-2px;right:-2px}.contact-card.jsx-8fc30236e0610d91:hover{transform:translateY(-5px);box-shadow:0 30px 60px rgba(255,182,193,.3)}.form-input.jsx-8fc30236e0610d91{background:rgba(255,240,245,.8);border:2px solid rgba(255,182,193,.3);border-radius:15px;padding:15px 20px;font-family:Noto Sans Thai,sans-serif;font-size:16px;transition:all .3s;box-shadow:0 4px 8px rgba(255,182,193,.1)}.form-input.jsx-8fc30236e0610d91:focus{background:#fff0f5;border-color:#d63384;outline:none;transform:translateY(-2px);box-shadow:0 0 20px rgba(214,51,132,.2)}.form-input.jsx-8fc30236e0610d91::placeholder{color:#d63384;font-weight:400}.submit-btn.jsx-8fc30236e0610d91{color:#fff;cursor:pointer;background:linear-gradient(135deg,#d63384,#6f42c1);border:none;border-radius:20px;padding:18px 40px;font-family:Noto Sans Thai,sans-serif;font-size:18px;font-weight:600;transition:all .4s;position:relative;overflow:hidden;box-shadow:0 10px 20px rgba(214,51,132,.3)}.submit-btn.jsx-8fc30236e0610d91:before{content:"";background:linear-gradient(90deg,transparent,rgba(255,255,255,.3),transparent);width:100%;height:100%;transition:left .5s;position:absolute;top:0;left:-100%}.submit-btn.jsx-8fc30236e0610d91:hover:before{left:100%}.submit-btn.jsx-8fc30236e0610d91:hover{transform:translateY(-3px);box-shadow:0 15px 30px rgba(214,51,132,.4)}.contact-info-card.jsx-8fc30236e0610d91{-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);text-align:center;background:rgba(255,255,255,.9);border:2px solid rgba(255,182,193,.2);border-radius:20px;height:100%;padding:25px;transition:all .3s;position:relative;overflow:hidden}.contact-info-card.jsx-8fc30236e0610d91:before{content:"";background:linear-gradient(90deg,transparent,rgba(255,255,255,.3),transparent);width:100%;height:100%;transition:left .5s;position:absolute;top:0;left:-100%}.contact-info-card.jsx-8fc30236e0610d91:hover:before{left:100%}.contact-info-card.jsx-8fc30236e0610d91:hover{border-color:#d63384;transform:translateY(-8px)scale(1.02);box-shadow:0 20px 40px rgba(255,182,193,.3)}.contact-icon.jsx-8fc30236e0610d91{margin-bottom:15px;font-size:3rem;animation:2s infinite bounce;display:inline-block}@keyframes bounce{0%,20%,50%,80%,to{transform:translateY(0)}40%{transform:translateY(-10px)}60%{transform:translateY(-5px)}}.contact-title.jsx-8fc30236e0610d91{color:#d63384;margin-bottom:10px;font-size:1.3rem;font-weight:600}.contact-content.jsx-8fc30236e0610d91{color:#6c757d;font-size:.95rem;line-height:1.6}.social-media-container.jsx-8fc30236e0610d91{flex-wrap:wrap;justify-content:center;gap:15px;margin-top:30px;display:flex}.social-btn.jsx-8fc30236e0610d91{color:#fff;border-radius:50%;justify-content:center;align-items:center;width:60px;height:60px;font-size:1.5rem;text-decoration:none;transition:all .3s;display:flex;position:relative;overflow:hidden}.social-btn.jsx-8fc30236e0610d91:before{content:"";background:rgba(255,255,255,.2);border-radius:50%;width:100%;height:100%;transition:transform .3s;position:absolute;top:0;left:0;transform:scale(0)}.social-btn.jsx-8fc30236e0610d91:hover:before{transform:scale(1)}.social-btn.jsx-8fc30236e0610d91:hover{transform:translateY(-5px)scale(1.1);box-shadow:0 10px 20px rgba(0,0,0,.3)}.hero-section.jsx-8fc30236e0610d91{text-align:center;-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);background:rgba(255,255,255,.1);border-radius:25px;margin:20px 20px 40px;padding:80px 0 60px;position:relative;overflow:hidden}.hero-section.jsx-8fc30236e0610d91:before{content:"";background:url("data:image/svg+xml,<svg xmlns=\\"http://www.w3.org/2000/svg\\" viewBox=\\"0 0 100 100\\"><circle cx=\\"20\\" cy=\\"20\\" r=\\"2\\" fill=\\"%23ff99cc\\" opacity=\\"0.3\\"/><circle cx=\\"80\\" cy=\\"40\\" r=\\"1.5\\" fill=\\"%23ffb3d9\\" opacity=\\"0.4\\"/><circle cx=\\"40\\" cy=\\"80\\" r=\\"1\\" fill=\\"%23ff99cc\\" opacity=\\"0.3\\"/><circle cx=\\"70\\" cy=\\"70\\" r=\\"2.5\\" fill=\\"%23ffb3d9\\" opacity=\\"0.2\\"/></svg>");width:100%;height:100%;animation:3s ease-in-out infinite sparkle;position:absolute;top:0;left:0}@keyframes sparkle{0%,to{opacity:.3}50%{opacity:.8}}.map-container.jsx-8fc30236e0610d91{background:rgba(255,255,255,.9);border:2px solid rgba(255,182,193,.2);border-radius:20px;justify-content:center;align-items:center;height:300px;margin-top:30px;padding:20px;display:flex;position:relative;overflow:hidden}.map-placeholder.jsx-8fc30236e0610d91{color:#d63384;text-align:center;font-size:1.2rem}@media (max-width:768px){.hero-section.jsx-8fc30236e0610d91{margin:10px;padding:60px 20px 40px}.contact-card.jsx-8fc30236e0610d91{border-radius:20px;margin:10px}.social-media-container.jsx-8fc30236e0610d91{gap:10px}.social-btn.jsx-8fc30236e0610d91{width:50px;height:50px;font-size:1.3rem}}.loading-animation.jsx-8fc30236e0610d91{border:3px solid rgba(255,255,255,.3);border-top-color:#fff;border-radius:50%;width:20px;height:20px;animation:1s ease-in-out infinite spin;display:inline-block}@keyframes spin{to{transform:rotate(360deg)}}'
            }, void 0, false, void 0, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-8fc30236e0610d91" + " " + "sakura-container",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-8fc30236e0610d91" + " " + "sakura-petals",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-8fc30236e0610d91" + " " + "petal"
                            }, void 0, false, {
                                fileName: "[project]/app/Contact/page.js",
                                lineNumber: 467,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-8fc30236e0610d91" + " " + "petal"
                            }, void 0, false, {
                                fileName: "[project]/app/Contact/page.js",
                                lineNumber: 468,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-8fc30236e0610d91" + " " + "petal"
                            }, void 0, false, {
                                fileName: "[project]/app/Contact/page.js",
                                lineNumber: 469,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-8fc30236e0610d91" + " " + "petal"
                            }, void 0, false, {
                                fileName: "[project]/app/Contact/page.js",
                                lineNumber: 470,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-8fc30236e0610d91" + " " + "petal"
                            }, void 0, false, {
                                fileName: "[project]/app/Contact/page.js",
                                lineNumber: 471,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-8fc30236e0610d91" + " " + "petal"
                            }, void 0, false, {
                                fileName: "[project]/app/Contact/page.js",
                                lineNumber: 472,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-8fc30236e0610d91" + " " + "petal"
                            }, void 0, false, {
                                fileName: "[project]/app/Contact/page.js",
                                lineNumber: 473,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-8fc30236e0610d91" + " " + "petal"
                            }, void 0, false, {
                                fileName: "[project]/app/Contact/page.js",
                                lineNumber: 474,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-8fc30236e0610d91" + " " + "petal"
                            }, void 0, false, {
                                fileName: "[project]/app/Contact/page.js",
                                lineNumber: 475,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/Contact/page.js",
                        lineNumber: 466,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-8fc30236e0610d91" + " " + "floating-sakura",
                        children: "🌸"
                    }, void 0, false, {
                        fileName: "[project]/app/Contact/page.js",
                        lineNumber: 478,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-8fc30236e0610d91" + " " + "floating-sakura",
                        children: "🌺"
                    }, void 0, false, {
                        fileName: "[project]/app/Contact/page.js",
                        lineNumber: 479,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-8fc30236e0610d91" + " " + "floating-sakura",
                        children: "🌸"
                    }, void 0, false, {
                        fileName: "[project]/app/Contact/page.js",
                        lineNumber: 480,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-8fc30236e0610d91" + " " + "floating-sakura",
                        children: "🌺"
                    }, void 0, false, {
                        fileName: "[project]/app/Contact/page.js",
                        lineNumber: 481,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-8fc30236e0610d91" + " " + "floating-sakura",
                        children: "🌸"
                    }, void 0, false, {
                        fileName: "[project]/app/Contact/page.js",
                        lineNumber: 482,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-8fc30236e0610d91" + " " + "floating-sakura",
                        children: "🌺"
                    }, void 0, false, {
                        fileName: "[project]/app/Contact/page.js",
                        lineNumber: 483,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-8fc30236e0610d91" + " " + "main-content",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-8fc30236e0610d91" + " " + "container",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-8fc30236e0610d91" + " " + "hero-section",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                            style: {
                                                fontSize: '4rem'
                                            },
                                            className: "jsx-8fc30236e0610d91" + " " + "title-gradient mb-4",
                                            children: "🌸 ติดต่อเรา 🌸"
                                        }, void 0, false, {
                                            fileName: "[project]/app/Contact/page.js",
                                            lineNumber: 489,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            style: {
                                                color: '#6f42c1',
                                                fontSize: '1.3rem',
                                                fontWeight: '500',
                                                lineHeight: '1.8'
                                            },
                                            className: "jsx-8fc30236e0610d91",
                                            children: [
                                                "เรายินดีที่จะช่วยเหลือและให้คำปรึกษาเกี่ยวกับการเดินทางไปญี่ปุ่น",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {
                                                    className: "jsx-8fc30236e0610d91"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/Contact/page.js",
                                                    lineNumber: 493,
                                                    columnNumber: 81
                                                }, this),
                                                "ติดต่อเราได้ทุกช่องทาง เรามีทีมงานพร้อมให้บริการ 24/7"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/Contact/page.js",
                                            lineNumber: 492,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-8fc30236e0610d91" + " " + "social-media-container",
                                            children: socialMedia.map((social, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: social.url,
                                                    style: {
                                                        backgroundColor: social.color
                                                    },
                                                    title: social.name,
                                                    className: "jsx-8fc30236e0610d91" + " " + "social-btn",
                                                    children: social.icon
                                                }, index, false, {
                                                    fileName: "[project]/app/Contact/page.js",
                                                    lineNumber: 499,
                                                    columnNumber: 19
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/app/Contact/page.js",
                                            lineNumber: 497,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/Contact/page.js",
                                    lineNumber: 488,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-8fc30236e0610d91" + " " + "row",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-8fc30236e0610d91" + " " + "col-lg-8 col-md-12 mb-4",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-8fc30236e0610d91" + " " + "contact-card p-5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                        style: {
                                                            fontSize: '2.5rem',
                                                            textAlign: 'center'
                                                        },
                                                        className: "jsx-8fc30236e0610d91" + " " + "title-gradient mb-4",
                                                        children: "💌 ส่งข้อความหาเรา"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/Contact/page.js",
                                                        lineNumber: 516,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                                        onSubmit: handleSubmit,
                                                        className: "jsx-8fc30236e0610d91",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "jsx-8fc30236e0610d91" + " " + "row mb-4",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "jsx-8fc30236e0610d91" + " " + "col-md-6",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                            type: "text",
                                                                            name: "name",
                                                                            placeholder: "🌸 ชื่อ-นามสกุล",
                                                                            value: formData.name,
                                                                            onChange: handleInputChange,
                                                                            required: true,
                                                                            className: "jsx-8fc30236e0610d91" + " " + "form-control form-input w-100"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/Contact/page.js",
                                                                            lineNumber: 523,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/Contact/page.js",
                                                                        lineNumber: 522,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "jsx-8fc30236e0610d91" + " " + "col-md-6 mt-3 mt-md-0",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                            type: "email",
                                                                            name: "email",
                                                                            placeholder: "📧 อีเมล",
                                                                            value: formData.email,
                                                                            onChange: handleInputChange,
                                                                            required: true,
                                                                            className: "jsx-8fc30236e0610d91" + " " + "form-control form-input w-100"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/Contact/page.js",
                                                                            lineNumber: 534,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/Contact/page.js",
                                                                        lineNumber: 533,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/Contact/page.js",
                                                                lineNumber: 521,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "jsx-8fc30236e0610d91" + " " + "row mb-4",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "jsx-8fc30236e0610d91" + " " + "col-md-6",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                            type: "tel",
                                                                            name: "phone",
                                                                            placeholder: "📞 เบอร์โทรศัพท์",
                                                                            value: formData.phone,
                                                                            onChange: handleInputChange,
                                                                            required: true,
                                                                            className: "jsx-8fc30236e0610d91" + " " + "form-control form-input w-100"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/Contact/page.js",
                                                                            lineNumber: 548,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/Contact/page.js",
                                                                        lineNumber: 547,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "jsx-8fc30236e0610d91" + " " + "col-md-6 mt-3 mt-md-0",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                            name: "service",
                                                                            value: formData.service,
                                                                            onChange: handleInputChange,
                                                                            required: true,
                                                                            className: "jsx-8fc30236e0610d91" + " " + "form-control form-input w-100",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                    value: "",
                                                                                    className: "jsx-8fc30236e0610d91",
                                                                                    children: "🌺 เลือกบริการที่สนใจ"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/Contact/page.js",
                                                                                    lineNumber: 566,
                                                                                    columnNumber: 27
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                    value: "translation",
                                                                                    className: "jsx-8fc30236e0610d91",
                                                                                    children: "แปลและล่าม"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/Contact/page.js",
                                                                                    lineNumber: 567,
                                                                                    columnNumber: 27
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                    value: "accommodation",
                                                                                    className: "jsx-8fc30236e0610d91",
                                                                                    children: "จองที่พัก"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/Contact/page.js",
                                                                                    lineNumber: 568,
                                                                                    columnNumber: 27
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                    value: "transport",
                                                                                    className: "jsx-8fc30236e0610d91",
                                                                                    children: "การขนส่ง"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/Contact/page.js",
                                                                                    lineNumber: 569,
                                                                                    columnNumber: 27
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                    value: "guide",
                                                                                    className: "jsx-8fc30236e0610d91",
                                                                                    children: "ไกด์ท้องถิ่น"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/Contact/page.js",
                                                                                    lineNumber: 570,
                                                                                    columnNumber: 27
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                    value: "visa",
                                                                                    className: "jsx-8fc30236e0610d91",
                                                                                    children: "วีซ่าและเอกสาร"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/Contact/page.js",
                                                                                    lineNumber: 571,
                                                                                    columnNumber: 27
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                    value: "activities",
                                                                                    className: "jsx-8fc30236e0610d91",
                                                                                    children: "กิจกรรมพิเศษ"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/Contact/page.js",
                                                                                    lineNumber: 572,
                                                                                    columnNumber: 27
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/app/Contact/page.js",
                                                                            lineNumber: 559,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/Contact/page.js",
                                                                        lineNumber: 558,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/Contact/page.js",
                                                                lineNumber: 546,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "jsx-8fc30236e0610d91" + " " + "mb-4",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "text",
                                                                    name: "subject",
                                                                    placeholder: "🌸 หัวข้อเรื่อง",
                                                                    value: formData.subject,
                                                                    onChange: handleInputChange,
                                                                    required: true,
                                                                    className: "jsx-8fc30236e0610d91" + " " + "form-control form-input w-100"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/Contact/page.js",
                                                                    lineNumber: 578,
                                                                    columnNumber: 23
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/Contact/page.js",
                                                                lineNumber: 577,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "jsx-8fc30236e0610d91" + " " + "mb-4",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                                    name: "message",
                                                                    placeholder: "💭 ข้อความของคุณ...",
                                                                    value: formData.message,
                                                                    onChange: handleInputChange,
                                                                    rows: "5",
                                                                    required: true,
                                                                    style: {
                                                                        resize: 'vertical'
                                                                    },
                                                                    className: "jsx-8fc30236e0610d91" + " " + "form-control form-input w-100"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/Contact/page.js",
                                                                    lineNumber: 590,
                                                                    columnNumber: 23
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/Contact/page.js",
                                                                lineNumber: 589,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "jsx-8fc30236e0610d91" + " " + "text-center",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    type: "submit",
                                                                    className: "jsx-8fc30236e0610d91" + " " + "submit-btn",
                                                                    children: "🌸 ส่งข้อความ 🌸"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/Contact/page.js",
                                                                    lineNumber: 603,
                                                                    columnNumber: 23
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/Contact/page.js",
                                                                lineNumber: 602,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/Contact/page.js",
                                                        lineNumber: 520,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/Contact/page.js",
                                                lineNumber: 515,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/Contact/page.js",
                                            lineNumber: 514,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-8fc30236e0610d91" + " " + "col-lg-4 col-md-12",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-8fc30236e0610d91" + " " + "row",
                                                    children: contactInfo.map((info, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "jsx-8fc30236e0610d91" + " " + "col-lg-12 col-md-6 col-sm-12 mb-4",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "jsx-8fc30236e0610d91" + " " + "contact-info-card",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        style: {
                                                                            color: info.color
                                                                        },
                                                                        className: "jsx-8fc30236e0610d91" + " " + "contact-icon",
                                                                        children: info.icon
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/Contact/page.js",
                                                                        lineNumber: 617,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                        className: "jsx-8fc30236e0610d91" + " " + "contact-title",
                                                                        children: info.title
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/Contact/page.js",
                                                                        lineNumber: 620,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        dangerouslySetInnerHTML: {
                                                                            __html: info.content
                                                                        },
                                                                        className: "jsx-8fc30236e0610d91" + " " + "contact-content"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/Contact/page.js",
                                                                        lineNumber: 621,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/Contact/page.js",
                                                                lineNumber: 616,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, index, false, {
                                                            fileName: "[project]/app/Contact/page.js",
                                                            lineNumber: 615,
                                                            columnNumber: 21
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/app/Contact/page.js",
                                                    lineNumber: 613,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-8fc30236e0610d91" + " " + "map-container",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-8fc30236e0610d91" + " " + "map-placeholder",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    fontSize: '3rem',
                                                                    marginBottom: '15px'
                                                                },
                                                                className: "jsx-8fc30236e0610d91",
                                                                children: "🗾"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/Contact/page.js",
                                                                lineNumber: 633,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "jsx-8fc30236e0610d91",
                                                                children: "Interactive Map"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/Contact/page.js",
                                                                lineNumber: 634,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                                style: {
                                                                    color: '#6c757d'
                                                                },
                                                                className: "jsx-8fc30236e0610d91",
                                                                children: "Google Maps Integration"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/Contact/page.js",
                                                                lineNumber: 635,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/Contact/page.js",
                                                        lineNumber: 632,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/Contact/page.js",
                                                    lineNumber: 631,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/Contact/page.js",
                                            lineNumber: 612,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/Contact/page.js",
                                    lineNumber: 512,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-8fc30236e0610d91" + " " + "row mt-5",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-8fc30236e0610d91" + " " + "col-12",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-8fc30236e0610d91" + " " + "contact-card p-5 text-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    style: {
                                                        fontSize: '2.2rem'
                                                    },
                                                    className: "jsx-8fc30236e0610d91" + " " + "title-gradient mb-4",
                                                    children: "🌺 ทำไมต้องเลือกเรา? 🌺"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/Contact/page.js",
                                                    lineNumber: 645,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-8fc30236e0610d91" + " " + "row",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "jsx-8fc30236e0610d91" + " " + "col-md-3 col-sm-6 mb-3",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    style: {
                                                                        fontSize: '3rem',
                                                                        marginBottom: '10px'
                                                                    },
                                                                    className: "jsx-8fc30236e0610d91",
                                                                    children: "⚡"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/Contact/page.js",
                                                                    lineNumber: 650,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                                    style: {
                                                                        color: '#d63384'
                                                                    },
                                                                    className: "jsx-8fc30236e0610d91",
                                                                    children: "ตอบกลับเร็ว"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/Contact/page.js",
                                                                    lineNumber: 651,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    style: {
                                                                        color: '#6c757d',
                                                                        fontSize: '0.9rem'
                                                                    },
                                                                    className: "jsx-8fc30236e0610d91",
                                                                    children: "ตอบกลับภายใน 1 ชั่วโมง"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/Contact/page.js",
                                                                    lineNumber: 652,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/Contact/page.js",
                                                            lineNumber: 649,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "jsx-8fc30236e0610d91" + " " + "col-md-3 col-sm-6 mb-3",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    style: {
                                                                        fontSize: '3rem',
                                                                        marginBottom: '10px'
                                                                    },
                                                                    className: "jsx-8fc30236e0610d91",
                                                                    children: "🎌"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/Contact/page.js",
                                                                    lineNumber: 655,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                                    style: {
                                                                        color: '#d63384'
                                                                    },
                                                                    className: "jsx-8fc30236e0610d91",
                                                                    children: "ผู้เชี่ยวชาญ"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/Contact/page.js",
                                                                    lineNumber: 656,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    style: {
                                                                        color: '#6c757d',
                                                                        fontSize: '0.9rem'
                                                                    },
                                                                    className: "jsx-8fc30236e0610d91",
                                                                    children: "15+ ปี ประสบการณ์ญี่ปุ่น"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/Contact/page.js",
                                                                    lineNumber: 657,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/Contact/page.js",
                                                            lineNumber: 654,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "jsx-8fc30236e0610d91" + " " + "col-md-3 col-sm-6 mb-3",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    style: {
                                                                        fontSize: '3rem',
                                                                        marginBottom: '10px'
                                                                    },
                                                                    className: "jsx-8fc30236e0610d91",
                                                                    children: "💯"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/Contact/page.js",
                                                                    lineNumber: 660,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                                    style: {
                                                                        color: '#d63384'
                                                                    },
                                                                    className: "jsx-8fc30236e0610d91",
                                                                    children: "คุณภาพ"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/Contact/page.js",
                                                                    lineNumber: 661,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    style: {
                                                                        color: '#6c757d',
                                                                        fontSize: '0.9rem'
                                                                    },
                                                                    className: "jsx-8fc30236e0610d91",
                                                                    children: "บริการระดับพรีเมียม"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/Contact/page.js",
                                                                    lineNumber: 662,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/Contact/page.js",
                                                            lineNumber: 659,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "jsx-8fc30236e0610d91" + " " + "col-md-3 col-sm-6 mb-3",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    style: {
                                                                        fontSize: '3rem',
                                                                        marginBottom: '10px'
                                                                    },
                                                                    className: "jsx-8fc30236e0610d91",
                                                                    children: "🤝"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/Contact/page.js",
                                                                    lineNumber: 665,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                                    style: {
                                                                        color: '#d63384'
                                                                    },
                                                                    className: "jsx-8fc30236e0610d91",
                                                                    children: "ไว้วางใจ"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/Contact/page.js",
                                                                    lineNumber: 666,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    style: {
                                                                        color: '#6c757d',
                                                                        fontSize: '0.9rem'
                                                                    },
                                                                    className: "jsx-8fc30236e0610d91",
                                                                    children: "2000+ ลูกค้าพึงพอใจ"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/Contact/page.js",
                                                                    lineNumber: 667,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/Contact/page.js",
                                                            lineNumber: 664,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/Contact/page.js",
                                                    lineNumber: 648,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/Contact/page.js",
                                            lineNumber: 644,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/Contact/page.js",
                                        lineNumber: 643,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/Contact/page.js",
                                    lineNumber: 642,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/Contact/page.js",
                            lineNumber: 486,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/Contact/page.js",
                        lineNumber: 485,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/Contact/page.js",
                lineNumber: 465,
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
]);

//# sourceMappingURL=app_Contact_page_cf84ff93.js.map