(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/components/Login.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
const Login = ()=>{
    _s();
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        username: '',
        password: '',
        remember: false
    });
    const [errors, setErrors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        username: '',
        password: ''
    });
    const handleInputChange = (e)=>{
        const { name, value, type, checked } = e.target;
        setFormData((prev)=>({
                ...prev,
                [name]: type === 'checkbox' ? checked : value
            }));
        // Clear error when user starts typing
        if (errors[name]) {
            setErrors((prev)=>({
                    ...prev,
                    [name]: ''
                }));
        }
    };
    const handleSubmit = (e)=>{
        e.preventDefault();
        let newErrors = {};
        // Validate username
        if (!formData.username.trim()) {
            newErrors.username = 'กรุณากรอกชื่อผู้ใช้งาน';
        } else if (formData.username.length < 3) {
            newErrors.username = 'ชื่อผู้ใช้งานต้องมีอย่างน้อย 3 ตัวอักษร';
        }
        // Validate password
        if (!formData.password.trim()) {
            newErrors.password = 'กรุณากรอกรหัสผ่าน';
        } else if (formData.password.length < 6) {
            newErrors.password = 'รหัสผ่านต้องมีอย่างน้อย 6 ตัวอักษร';
        }
        setErrors(newErrors);
        // If no errors, proceed with login
        if (Object.keys(newErrors).length === 0) {
            console.log('Login data:', formData);
            // Handle login logic here
            alert('เข้าสู่ระบบสำเร็จ!');
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'linear-gradient(135deg, #1a0000 0%, #4d0000 25%, #800000 50%, #660000 75%, #330000 100%)',
            fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
            padding: '2rem'
        },
        className: "jsx-465638ea953a53a5",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("link", {
                href: "https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/css/bootstrap.min.css",
                rel: "stylesheet",
                className: "jsx-465638ea953a53a5"
            }, void 0, false, {
                fileName: "[project]/app/components/Login.js",
                lineNumber: 73,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                id: "465638ea953a53a5",
                children: ".login-card.jsx-465638ea953a53a5{-webkit-backdrop-filter:blur(15px);backdrop-filter:blur(15px);background:rgba(20,0,0,.9);border:1px solid rgba(139,0,0,.3);border-radius:20px;transition:all .4s;overflow:hidden;box-shadow:0 25px 50px rgba(139,0,0,.3),inset 0 1px rgba(255,255,255,.1)}.login-card.jsx-465638ea953a53a5:hover{transform:translateY(-8px);box-shadow:0 35px 60px rgba(139,0,0,.4),inset 0 1px rgba(255,255,255,.1)}.login-header.jsx-465638ea953a53a5{color:#fff;text-align:center;background:linear-gradient(135deg,#8b0000 0%,#dc143c 30%,red 70%,#b22222 100%);padding:2rem;box-shadow:inset 0 -1px rgba(0,0,0,.2)}.login-header.jsx-465638ea953a53a5 h2.jsx-465638ea953a53a5{text-shadow:2px 2px 4px rgba(0,0,0,.5);margin:0;font-size:1.8rem;font-weight:600}.login-header.jsx-465638ea953a53a5 p.jsx-465638ea953a53a5{opacity:.9;text-shadow:1px 1px 2px rgba(0,0,0,.3);margin:.5rem 0 0;font-size:.95rem}.form-control.jsx-465638ea953a53a5{color:#fff;background:rgba(40,0,0,.7);border:2px solid rgba(139,0,0,.4);border-radius:12px;padding:.75rem 1rem;font-size:1rem;transition:all .3s;box-shadow:inset 2px 2px 5px rgba(0,0,0,.3)}.form-control.jsx-465638ea953a53a5::placeholder{color:rgba(255,255,255,.6)}.form-control.jsx-465638ea953a53a5:focus{background:rgba(50,0,0,.8);border-color:#dc143c;box-shadow:0 0 0 .2rem rgba(220,20,60,.25),inset 2px 2px 5px rgba(0,0,0,.3)}.form-label.jsx-465638ea953a53a5{color:#fff;text-shadow:1px 1px 2px rgba(0,0,0,.5);margin-bottom:.5rem;font-weight:500}.btn-login.jsx-465638ea953a53a5{color:#fff;text-shadow:1px 1px 2px rgba(0,0,0,.5);background:linear-gradient(135deg,#8b0000 0%,#dc143c 50%,red 100%);border:none;border-radius:12px;width:100%;padding:.75rem 2rem;font-size:1rem;font-weight:600;transition:all .3s;box-shadow:0 5px 15px rgba(139,0,0,.4),inset 0 1px rgba(255,255,255,.2)}.btn-login.jsx-465638ea953a53a5:hover{background:linear-gradient(135deg,#a00000 0%,#ff1493 50%,#ff4500 100%);transform:translateY(-3px);box-shadow:0 8px 25px rgba(139,0,0,.6),inset 0 1px rgba(255,255,255,.2)}.form-check-input.jsx-465638ea953a53a5{background-color:rgba(40,0,0,.7);border:2px solid rgba(139,0,0,.4);border-radius:6px;box-shadow:inset 1px 1px 3px rgba(0,0,0,.3)}.form-check-input.jsx-465638ea953a53a5:checked{background-color:#dc143c;border-color:#dc143c;box-shadow:0 2px 5px rgba(220,20,60,.4),inset 1px 1px 3px rgba(0,0,0,.3)}.form-check-label.jsx-465638ea953a53a5{color:#fff;text-shadow:1px 1px 2px rgba(0,0,0,.5);font-size:.9rem}.links.jsx-465638ea953a53a5{text-align:center;margin-top:1.5rem}.links.jsx-465638ea953a53a5 a.jsx-465638ea953a53a5{color:#ff6b6b;text-shadow:1px 1px 2px rgba(0,0,0,.5);font-size:.9rem;text-decoration:none;transition:all .3s}.links.jsx-465638ea953a53a5 a.jsx-465638ea953a53a5:hover{color:#f44;text-shadow:1px 1px 3px rgba(255,68,68,.5);text-decoration:underline}.links.jsx-465638ea953a53a5 span.jsx-465638ea953a53a5{color:rgba(255,255,255,.6)}.icon.jsx-465638ea953a53a5{text-shadow:2px 2px 4px rgba(0,0,0,.5);margin-bottom:1rem;font-size:3rem}.input-group.jsx-465638ea953a53a5{position:relative}.input-icon.jsx-465638ea953a53a5{color:rgba(255,255,255,.7);z-index:10;text-shadow:1px 1px 2px rgba(0,0,0,.5);position:absolute;top:50%;left:1rem;transform:translateY(-50%)}.form-control.with-icon.jsx-465638ea953a53a5{padding-left:2.5rem}.error-message.jsx-465638ea953a53a5{color:#ff6b6b;text-shadow:1px 1px 2px rgba(0,0,0,.5);margin-top:.25rem;font-size:.875rem}.form-control.is-invalid.jsx-465638ea953a53a5{background:rgba(60,0,0,.7);border-color:#f44;box-shadow:inset 2px 2px 5px rgba(0,0,0,.4)}.form-control.is-invalid.jsx-465638ea953a53a5:focus{border-color:#f44;box-shadow:0 0 0 .2rem rgba(255,68,68,.25),inset 2px 2px 5px rgba(0,0,0,.4)}.card-body.jsx-465638ea953a53a5{background:rgba(30,0,0,.5)}"
            }, void 0, false, void 0, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-465638ea953a53a5" + " " + "container",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "jsx-465638ea953a53a5" + " " + "row justify-content-center",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-465638ea953a53a5" + " " + "col-md-6 col-lg-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-465638ea953a53a5" + " " + "card login-card",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-465638ea953a53a5" + " " + "login-header",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-465638ea953a53a5" + " " + "icon",
                                            children: "🔐"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/Login.js",
                                            lineNumber: 273,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "jsx-465638ea953a53a5",
                                            children: "เข้าสู่ระบบ"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/Login.js",
                                            lineNumber: 274,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "jsx-465638ea953a53a5",
                                            children: "ยินดีต้อนรับกลับมา!"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/Login.js",
                                            lineNumber: 275,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/Login.js",
                                    lineNumber: 272,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-465638ea953a53a5" + " " + "card-body p-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            onSubmit: handleSubmit,
                                            className: "jsx-465638ea953a53a5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-465638ea953a53a5" + " " + "mb-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            htmlFor: "username",
                                                            className: "jsx-465638ea953a53a5" + " " + "form-label",
                                                            children: "ชื่อผู้ใช้งาน"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/Login.js",
                                                            lineNumber: 281,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "jsx-465638ea953a53a5" + " " + "input-group",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "jsx-465638ea953a53a5" + " " + "input-icon",
                                                                    children: "👤"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/components/Login.js",
                                                                    lineNumber: 285,
                                                                    columnNumber: 23
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "text",
                                                                    id: "username",
                                                                    name: "username",
                                                                    value: formData.username,
                                                                    onChange: handleInputChange,
                                                                    placeholder: "กรอกชื่อผู้ใช้งาน",
                                                                    className: "jsx-465638ea953a53a5" + " " + "form-control with-icon ".concat(errors.username ? 'is-invalid' : '')
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/components/Login.js",
                                                                    lineNumber: 286,
                                                                    columnNumber: 23
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/components/Login.js",
                                                            lineNumber: 284,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        errors.username && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "jsx-465638ea953a53a5" + " " + "error-message",
                                                            children: errors.username
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/Login.js",
                                                            lineNumber: 296,
                                                            columnNumber: 41
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/components/Login.js",
                                                    lineNumber: 280,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-465638ea953a53a5" + " " + "mb-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            htmlFor: "password",
                                                            className: "jsx-465638ea953a53a5" + " " + "form-label",
                                                            children: "รหัสผ่าน"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/Login.js",
                                                            lineNumber: 300,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "jsx-465638ea953a53a5" + " " + "input-group",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "jsx-465638ea953a53a5" + " " + "input-icon",
                                                                    children: "🔒"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/components/Login.js",
                                                                    lineNumber: 304,
                                                                    columnNumber: 23
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "password",
                                                                    id: "password",
                                                                    name: "password",
                                                                    value: formData.password,
                                                                    onChange: handleInputChange,
                                                                    placeholder: "กรอกรหัสผ่าน",
                                                                    className: "jsx-465638ea953a53a5" + " " + "form-control with-icon ".concat(errors.password ? 'is-invalid' : '')
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/components/Login.js",
                                                                    lineNumber: 305,
                                                                    columnNumber: 23
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/components/Login.js",
                                                            lineNumber: 303,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        errors.password && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "jsx-465638ea953a53a5" + " " + "error-message",
                                                            children: errors.password
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/Login.js",
                                                            lineNumber: 315,
                                                            columnNumber: 41
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/components/Login.js",
                                                    lineNumber: 299,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-465638ea953a53a5" + " " + "mb-3 form-check",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "checkbox",
                                                            id: "remember",
                                                            name: "remember",
                                                            checked: formData.remember,
                                                            onChange: handleInputChange,
                                                            className: "jsx-465638ea953a53a5" + " " + "form-check-input"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/Login.js",
                                                            lineNumber: 319,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            htmlFor: "remember",
                                                            className: "jsx-465638ea953a53a5" + " " + "form-check-label",
                                                            children: "จำฉันไว้"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/Login.js",
                                                            lineNumber: 327,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/components/Login.js",
                                                    lineNumber: 318,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: handleSubmit,
                                                    className: "jsx-465638ea953a53a5" + " " + "btn btn-primary btn-login",
                                                    children: "🔑เข้าสู่ระบบ"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/Login.js",
                                                    lineNumber: 332,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/Login.js",
                                            lineNumber: 279,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-465638ea953a53a5" + " " + "links",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: "/Register",
                                                    className: "jsx-465638ea953a53a5",
                                                    children: "สมัครสมาชิก"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/Login.js",
                                                    lineNumber: 338,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "jsx-465638ea953a53a5" + " " + "mx-2",
                                                    children: "|"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/Login.js",
                                                    lineNumber: 339,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: "/forgot-password",
                                                    className: "jsx-465638ea953a53a5",
                                                    children: "ลืมรหัสผ่าน"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/Login.js",
                                                    lineNumber: 340,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/Login.js",
                                            lineNumber: 337,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/Login.js",
                                    lineNumber: 278,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/Login.js",
                            lineNumber: 271,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/app/components/Login.js",
                        lineNumber: 270,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/app/components/Login.js",
                    lineNumber: 269,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/app/components/Login.js",
                lineNumber: 268,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/Login.js",
        lineNumber: 63,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Login, "X3hzmoRCz1wYDI7DGszDV5JDfBM=");
_c = Login;
const __TURBOPACK__default__export__ = Login;
var _c;
__turbopack_context__.k.register(_c, "Login");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=app_components_Login_236643f0.js.map