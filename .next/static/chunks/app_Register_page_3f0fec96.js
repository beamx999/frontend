(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/Register/page.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Register
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sweetalert2$2f$dist$2f$sweetalert2$2e$all$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sweetalert2/dist/sweetalert2.all.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function Register() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [firstname, setFirstname] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [fullname, setFullname] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [lastname, setLastname] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [username, setUsername] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [password, setPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [address, setAddress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [sex, setSex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [birthday, setBirthday] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const handleSubmit = async (e)=>{
        e.preventDefault();
        try {
            const res = await fetch('https://backend-nextjs-virid.vercel.app/api/users', {
                method: 'POST',
                headers: {
                    Accept: 'application/json'
                },
                body: JSON.stringify({
                    firstname,
                    fullname,
                    lastname,
                    username,
                    password,
                    address,
                    sex,
                    birthday
                })
            });
            const result = await res.json();
            console.log(result);
            if (res.ok) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sweetalert2$2f$dist$2f$sweetalert2$2e$all$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].fire({
                    icon: 'success',
                    title: '<div style="color: #d63384; font-family: \'Noto Sans Thai\', sans-serif;"><h3>🌸 บันทึกข้อมูลเรียบร้อยแล้ว 🌸</h3></div>',
                    html: '<p style="color: #6f42c1; font-family: \'Noto Sans Thai\', sans-serif;">ยินดีต้อนรับสู่ครอบครัวของเรา</p>',
                    showConfirmButton: false,
                    timer: 3000,
                    background: 'linear-gradient(135deg, #ffeef8 0%, #fff0f5 100%)',
                    customClass: {
                        popup: 'sakura-popup'
                    }
                }).then(function() {
                    router.push('/Login');
                });
                // Reset form
                setFirstname('');
                setFullname('');
                setLastname('');
                setUsername('');
                setPassword('');
                setAddress('');
                setSex('');
                setBirthday('');
            } else {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sweetalert2$2f$dist$2f$sweetalert2$2e$all$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].fire({
                    icon: 'error',
                    title: '<div style="color: #dc3545; font-family: \'Noto Sans Thai\', sans-serif;"><h3>❌ เกิดข้อผิดพลาด</h3></div>',
                    html: '<p style="color: #6c757d; font-family: \'Noto Sans Thai\', sans-serif;">กรุณาลองใหม่อีกครั้ง</p>',
                    confirmButtonText: 'ตกลง',
                    confirmButtonColor: '#dc3545',
                    background: 'linear-gradient(135deg, #fff5f5 0%, #ffe6e6 100%)',
                    customClass: {
                        popup: 'error-popup'
                    }
                });
            }
        } catch (error) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sweetalert2$2f$dist$2f$sweetalert2$2e$all$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].fire({
                icon: 'error',
                title: '<div style="color: #dc3545; font-family: \'Noto Sans Thai\', sans-serif;"><h3>🔌 ข้อผิดพลาดเครือข่าย</h3></div>',
                html: '<p style="color: #6c757d; font-family: \'Noto Sans Thai\', sans-serif;">ไม่สามารถเชื่อมต่อเซิร์ฟเวอร์ได้</p>',
                confirmButtonText: 'ลองใหม่',
                confirmButtonColor: '#dc3545',
                background: 'linear-gradient(135deg, #fff5f5 0%, #ffe6e6 100%)'
            });
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                id: "b30f24e11fca1696",
                children: '@import "https://fonts.googleapis.com/css2?family=Noto+Sans+Thai:wght@300;400;500;600;700&display=swap";.sakura-container.jsx-b30f24e11fca1696{background:linear-gradient(135deg,#ffeef8 0%,#fff0f5 25%,#ffe4e1 50%,#fdf2f8 75%,#fef7ff 100%);min-height:100vh;position:relative;overflow:hidden}.sakura-petals.jsx-b30f24e11fca1696{z-index:1;width:100%;height:100%;position:absolute;overflow:hidden}.petal.jsx-b30f24e11fca1696{opacity:.7;background:linear-gradient(45deg,#ffb3d9,#f9c);border-radius:50% 10px;width:20px;height:20px;animation:linear infinite fall;position:absolute}.petal.jsx-b30f24e11fca1696:first-child{animation-duration:8s;animation-delay:0s;left:10%}.petal.jsx-b30f24e11fca1696:nth-child(2){animation-duration:12s;animation-delay:2s;left:20%}.petal.jsx-b30f24e11fca1696:nth-child(3){animation-duration:10s;animation-delay:1s;left:30%}.petal.jsx-b30f24e11fca1696:nth-child(4){animation-duration:14s;animation-delay:3s;left:40%}.petal.jsx-b30f24e11fca1696:nth-child(5){animation-duration:9s;animation-delay:.5s;left:50%}.petal.jsx-b30f24e11fca1696:nth-child(6){animation-duration:11s;animation-delay:4s;left:60%}.petal.jsx-b30f24e11fca1696:nth-child(7){animation-duration:13s;animation-delay:1.5s;left:70%}.petal.jsx-b30f24e11fca1696:nth-child(8){animation-duration:15s;animation-delay:2.5s;left:80%}.petal.jsx-b30f24e11fca1696:nth-child(9){animation-duration:7s;animation-delay:3.5s;left:90%}@keyframes fall{0%{opacity:.7;transform:translateY(-100px)rotate(0)}50%{opacity:1}to{opacity:0;transform:translateY(100vh)rotate(360deg)}}.form-card.jsx-b30f24e11fca1696{-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);z-index:10;background:rgba(255,255,255,.95);border:2px solid rgba(255,182,193,.3);border-radius:25px;font-family:Noto Sans Thai,sans-serif;position:relative;box-shadow:0 20px 40px rgba(255,182,193,.2)}.form-card.jsx-b30f24e11fca1696:before{content:"";z-index:-1;background:linear-gradient(45deg,#ffb3d9,#f9c,#ffb3d9);border-radius:25px;position:absolute;top:-2px;bottom:-2px;left:-2px;right:-2px}.title-gradient.jsx-b30f24e11fca1696{-webkit-text-fill-color:transparent;text-shadow:0 4px 8px rgba(214,51,132,.2);background:linear-gradient(135deg,#d63384,#6f42c1,#d63384);-webkit-background-clip:text;background-clip:text;font-weight:700}.form-input.jsx-b30f24e11fca1696{background:rgba(255,240,245,.8);border:2px solid rgba(255,182,193,.3);border-radius:15px;padding:12px 18px;font-family:Noto Sans Thai,sans-serif;transition:all .3s;box-shadow:0 4px 8px rgba(255,182,193,.1)}.form-input.jsx-b30f24e11fca1696:focus{background:#fff0f5;border-color:#d63384;outline:none;transform:translateY(-2px);box-shadow:0 0 20px rgba(214,51,132,.2)}.form-input.jsx-b30f24e11fca1696::placeholder{color:#d63384;font-weight:400}.submit-btn.jsx-b30f24e11fca1696{color:#fff;background:linear-gradient(135deg,#d63384,#6f42c1);border:none;border-radius:15px;padding:15px 30px;font-family:Noto Sans Thai,sans-serif;font-size:16px;font-weight:600;transition:all .3s;position:relative;overflow:hidden;box-shadow:0 8px 16px rgba(214,51,132,.3)}.submit-btn.jsx-b30f24e11fca1696:before{content:"";background:linear-gradient(90deg,transparent,rgba(255,255,255,.2),transparent);width:100%;height:100%;transition:left .5s;position:absolute;top:0;left:-100%}.submit-btn.jsx-b30f24e11fca1696:hover:before{left:100%}.submit-btn.jsx-b30f24e11fca1696:hover{transform:translateY(-3px);box-shadow:0 12px 24px rgba(214,51,132,.4)}.submit-btn.jsx-b30f24e11fca1696:active{transform:translateY(-1px)}.floating-sakura.jsx-b30f24e11fca1696{font-size:24px;animation:6s ease-in-out infinite float;position:absolute}.floating-sakura.jsx-b30f24e11fca1696:first-child{animation-delay:0s;top:10%;left:5%}.floating-sakura.jsx-b30f24e11fca1696:nth-child(2){animation-delay:2s;top:20%;right:5%}.floating-sakura.jsx-b30f24e11fca1696:nth-child(3){animation-delay:4s;bottom:10%;left:8%}.floating-sakura.jsx-b30f24e11fca1696:nth-child(4){animation-delay:1s;bottom:20%;right:8%}@keyframes float{0%,to{transform:translateY(0)rotate(0)}33%{transform:translateY(-20px)rotate(5deg)}66%{transform:translateY(-10px)rotate(-5deg)}}.row.jsx-b30f24e11fca1696{gap:15px;display:flex}.col-md-6.jsx-b30f24e11fca1696{flex:1}@media (max-width:768px){.row.jsx-b30f24e11fca1696{flex-direction:column}}'
            }, void 0, false, void 0, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-b30f24e11fca1696" + " " + "sakura-container",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-b30f24e11fca1696" + " " + "sakura-petals",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-b30f24e11fca1696" + " " + "petal"
                            }, void 0, false, {
                                fileName: "[project]/app/Register/page.js",
                                lineNumber: 290,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-b30f24e11fca1696" + " " + "petal"
                            }, void 0, false, {
                                fileName: "[project]/app/Register/page.js",
                                lineNumber: 291,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-b30f24e11fca1696" + " " + "petal"
                            }, void 0, false, {
                                fileName: "[project]/app/Register/page.js",
                                lineNumber: 292,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-b30f24e11fca1696" + " " + "petal"
                            }, void 0, false, {
                                fileName: "[project]/app/Register/page.js",
                                lineNumber: 293,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-b30f24e11fca1696" + " " + "petal"
                            }, void 0, false, {
                                fileName: "[project]/app/Register/page.js",
                                lineNumber: 294,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-b30f24e11fca1696" + " " + "petal"
                            }, void 0, false, {
                                fileName: "[project]/app/Register/page.js",
                                lineNumber: 295,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-b30f24e11fca1696" + " " + "petal"
                            }, void 0, false, {
                                fileName: "[project]/app/Register/page.js",
                                lineNumber: 296,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-b30f24e11fca1696" + " " + "petal"
                            }, void 0, false, {
                                fileName: "[project]/app/Register/page.js",
                                lineNumber: 297,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-b30f24e11fca1696" + " " + "petal"
                            }, void 0, false, {
                                fileName: "[project]/app/Register/page.js",
                                lineNumber: 298,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/Register/page.js",
                        lineNumber: 289,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-b30f24e11fca1696" + " " + "floating-sakura",
                        children: "🌸"
                    }, void 0, false, {
                        fileName: "[project]/app/Register/page.js",
                        lineNumber: 301,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-b30f24e11fca1696" + " " + "floating-sakura",
                        children: "🌺"
                    }, void 0, false, {
                        fileName: "[project]/app/Register/page.js",
                        lineNumber: 302,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-b30f24e11fca1696" + " " + "floating-sakura",
                        children: "🌸"
                    }, void 0, false, {
                        fileName: "[project]/app/Register/page.js",
                        lineNumber: 303,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-b30f24e11fca1696" + " " + "floating-sakura",
                        children: "🌺"
                    }, void 0, false, {
                        fileName: "[project]/app/Register/page.js",
                        lineNumber: 304,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            minHeight: '100vh'
                        },
                        className: "jsx-b30f24e11fca1696" + " " + "container d-flex justify-content-center align-items-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                maxWidth: '600px',
                                width: '100%',
                                margin: '20px'
                            },
                            className: "jsx-b30f24e11fca1696" + " " + "form-card p-5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-b30f24e11fca1696" + " " + "text-center mb-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                            style: {
                                                fontSize: '2.5rem'
                                            },
                                            className: "jsx-b30f24e11fca1696" + " " + "title-gradient mb-3",
                                            children: "🌸 สมัครสมาชิก 🌸"
                                        }, void 0, false, {
                                            fileName: "[project]/app/Register/page.js",
                                            lineNumber: 309,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            style: {
                                                color: '#6f42c1',
                                                fontWeight: '500',
                                                fontSize: '1.1rem'
                                            },
                                            className: "jsx-b30f24e11fca1696",
                                            children: "เข้าร่วมกับเราในการเดินทางที่สวยงาม"
                                        }, void 0, false, {
                                            fileName: "[project]/app/Register/page.js",
                                            lineNumber: 312,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/Register/page.js",
                                    lineNumber: 308,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                    onSubmit: handleSubmit,
                                    className: "jsx-b30f24e11fca1696",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-b30f24e11fca1696" + " " + "mb-3",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                name: "firstname",
                                                onChange: (e)=>setFirstname(e.target.value),
                                                required: true,
                                                style: {
                                                    fontSize: '16px'
                                                },
                                                className: "jsx-b30f24e11fca1696" + " " + "form-control form-input w-100",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "",
                                                        className: "jsx-b30f24e11fca1696",
                                                        children: "🌸 เลือกคำนำหน้าชื่อ"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/Register/page.js",
                                                        lineNumber: 326,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "นาย",
                                                        className: "jsx-b30f24e11fca1696",
                                                        children: "นาย"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/Register/page.js",
                                                        lineNumber: 327,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "นาง",
                                                        className: "jsx-b30f24e11fca1696",
                                                        children: "นาง"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/Register/page.js",
                                                        lineNumber: 328,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "นางสาว",
                                                        className: "jsx-b30f24e11fca1696",
                                                        children: "นางสาว"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/Register/page.js",
                                                        lineNumber: 329,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/Register/page.js",
                                                lineNumber: 319,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/Register/page.js",
                                            lineNumber: 318,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-b30f24e11fca1696" + " " + "row mb-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-b30f24e11fca1696" + " " + "col-md-6",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "text",
                                                        placeholder: "🌺 ชื่อ",
                                                        value: fullname,
                                                        onChange: (e)=>setFullname(e.target.value),
                                                        required: true,
                                                        style: {
                                                            fontSize: '16px'
                                                        },
                                                        className: "jsx-b30f24e11fca1696" + " " + "form-control form-input w-100"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/Register/page.js",
                                                        lineNumber: 335,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/Register/page.js",
                                                    lineNumber: 334,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-b30f24e11fca1696" + " " + "col-md-6",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "text",
                                                        placeholder: "🌸 นามสกุล",
                                                        value: lastname,
                                                        onChange: (e)=>setLastname(e.target.value),
                                                        required: true,
                                                        style: {
                                                            fontSize: '16px'
                                                        },
                                                        className: "jsx-b30f24e11fca1696" + " " + "form-control form-input w-100"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/Register/page.js",
                                                        lineNumber: 346,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/Register/page.js",
                                                    lineNumber: 345,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/Register/page.js",
                                            lineNumber: 333,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-b30f24e11fca1696" + " " + "mb-3",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                name: "sex",
                                                onChange: (e)=>setSex(e.target.value),
                                                required: true,
                                                style: {
                                                    fontSize: '16px'
                                                },
                                                className: "jsx-b30f24e11fca1696" + " " + "form-control form-input w-100",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "",
                                                        className: "jsx-b30f24e11fca1696",
                                                        children: "🌺 เลือกเพศ"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/Register/page.js",
                                                        lineNumber: 366,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "ชาย",
                                                        className: "jsx-b30f24e11fca1696",
                                                        children: "ชาย"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/Register/page.js",
                                                        lineNumber: 367,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "หญิง",
                                                        className: "jsx-b30f24e11fca1696",
                                                        children: "หญิง"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/Register/page.js",
                                                        lineNumber: 368,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "อื่นๆ",
                                                        className: "jsx-b30f24e11fca1696",
                                                        children: "อื่นๆ"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/Register/page.js",
                                                        lineNumber: 369,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/Register/page.js",
                                                lineNumber: 359,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/Register/page.js",
                                            lineNumber: 358,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-b30f24e11fca1696" + " " + "mb-3",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "date",
                                                value: birthday,
                                                onChange: (e)=>setBirthday(e.target.value),
                                                required: true,
                                                style: {
                                                    fontSize: '16px'
                                                },
                                                className: "jsx-b30f24e11fca1696" + " " + "form-control form-input w-100"
                                            }, void 0, false, {
                                                fileName: "[project]/app/Register/page.js",
                                                lineNumber: 374,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/Register/page.js",
                                            lineNumber: 373,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-b30f24e11fca1696" + " " + "mb-3",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                placeholder: "🏠 ที่อยู่",
                                                value: address,
                                                onChange: (e)=>setAddress(e.target.value),
                                                rows: "3",
                                                required: true,
                                                style: {
                                                    fontSize: '16px',
                                                    resize: 'vertical'
                                                },
                                                className: "jsx-b30f24e11fca1696" + " " + "form-control form-input w-100"
                                            }, void 0, false, {
                                                fileName: "[project]/app/Register/page.js",
                                                lineNumber: 385,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/Register/page.js",
                                            lineNumber: 384,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-b30f24e11fca1696" + " " + "row mb-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-b30f24e11fca1696" + " " + "col-md-6",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "text",
                                                        placeholder: "👤 Username",
                                                        value: username,
                                                        onChange: (e)=>setUsername(e.target.value),
                                                        required: true,
                                                        style: {
                                                            fontSize: '16px'
                                                        },
                                                        className: "jsx-b30f24e11fca1696" + " " + "form-control form-input w-100"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/Register/page.js",
                                                        lineNumber: 398,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/Register/page.js",
                                                    lineNumber: 397,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-b30f24e11fca1696" + " " + "col-md-6",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "password",
                                                        placeholder: "🔐 Password",
                                                        value: password,
                                                        onChange: (e)=>setPassword(e.target.value),
                                                        required: true,
                                                        style: {
                                                            fontSize: '16px'
                                                        },
                                                        className: "jsx-b30f24e11fca1696" + " " + "form-control form-input w-100"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/Register/page.js",
                                                        lineNumber: 409,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/Register/page.js",
                                                    lineNumber: 408,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/Register/page.js",
                                            lineNumber: 396,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-b30f24e11fca1696" + " " + "text-center mt-4",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "submit",
                                                className: "jsx-b30f24e11fca1696" + " " + "submit-btn w-100",
                                                children: "🌸 สมัครสมาชิก 🌸"
                                            }, void 0, false, {
                                                fileName: "[project]/app/Register/page.js",
                                                lineNumber: 422,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/Register/page.js",
                                            lineNumber: 421,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/Register/page.js",
                                    lineNumber: 317,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-b30f24e11fca1696" + " " + "text-center mt-4",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        style: {
                                            color: '#6f42c1',
                                            fontSize: '14px'
                                        },
                                        className: "jsx-b30f24e11fca1696",
                                        children: [
                                            "มีบัญชีอยู่แล้ว?",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "/Login",
                                                style: {
                                                    color: '#d63384',
                                                    textDecoration: 'none',
                                                    fontWeight: '600',
                                                    marginLeft: '5px'
                                                },
                                                className: "jsx-b30f24e11fca1696",
                                                children: "เข้าสู่ระบบ"
                                            }, void 0, false, {
                                                fileName: "[project]/app/Register/page.js",
                                                lineNumber: 434,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/Register/page.js",
                                        lineNumber: 432,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/Register/page.js",
                                    lineNumber: 431,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/Register/page.js",
                            lineNumber: 307,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/Register/page.js",
                        lineNumber: 306,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/Register/page.js",
                lineNumber: 288,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(Register, "ypCaJLdPsLGDb3pkdybr3o3VoDU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = Register;
var _c;
__turbopack_context__.k.register(_c, "Register");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=app_Register_page_3f0fec96.js.map