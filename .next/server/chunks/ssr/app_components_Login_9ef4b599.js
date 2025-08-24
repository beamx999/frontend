module.exports = [
"[project]/app/components/Login.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Login
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sweetalert2$2f$dist$2f$sweetalert2$2e$esm$2e$all$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sweetalert2/dist/sweetalert2.esm.all.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
function Login() {
    const [username, setUsername] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [password, setPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [remember, setRemember] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const handleLogin = async (e)=>{
        e.preventDefault();
        // Validation
        if (!username.trim()) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sweetalert2$2f$dist$2f$sweetalert2$2e$esm$2e$all$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].fire({
                title: 'ข้อมูลไม่ถูกต้อง!',
                text: 'กรุณากรอกชื่อผู้ใช้งาน',
                icon: 'error',
                confirmButtonText: 'ตกลง',
                confirmButtonColor: '#DC143C',
                background: 'rgba(20, 0, 0, 0.95)',
                color: '#ffffff',
                customClass: {
                    popup: 'swal-dark-theme'
                }
            });
            return;
        }
        if (username.length < 3) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sweetalert2$2f$dist$2f$sweetalert2$2e$esm$2e$all$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].fire({
                title: 'ข้อมูลไม่ถูกต้อง!',
                text: 'ชื่อผู้ใช้งานต้องมีอย่างน้อย 3 ตัวอักษร',
                icon: 'error',
                confirmButtonText: 'ตกลง',
                confirmButtonColor: '#DC143C',
                background: 'rgba(20, 0, 0, 0.95)',
                color: '#ffffff',
                customClass: {
                    popup: 'swal-dark-theme'
                }
            });
            return;
        }
        if (!password.trim()) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sweetalert2$2f$dist$2f$sweetalert2$2e$esm$2e$all$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].fire({
                title: 'ข้อมูลไม่ถูกต้อง!',
                text: 'กรุณากรอกรหัสผ่าน',
                icon: 'error',
                confirmButtonText: 'ตกลง',
                confirmButtonColor: '#DC143C',
                background: 'rgba(20, 0, 0, 0.95)',
                color: '#ffffff',
                customClass: {
                    popup: 'swal-dark-theme'
                }
            });
            return;
        }
        try {
            const res = await fetch('http://itdev.cmtc.ac.th:3000/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username,
                    password
                })
            });
            const data = await res.json();
            console.log(username);
            if (data.token) {
                localStorage.setItem('token', data.token);
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sweetalert2$2f$dist$2f$sweetalert2$2e$esm$2e$all$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].fire({
                    title: 'สำเร็จ!',
                    text: 'เข้าสู่ระบบสำเร็จ!',
                    icon: 'success',
                    confirmButtonText: 'ตกลง',
                    confirmButtonColor: '#DC143C',
                    background: 'rgba(20, 0, 0, 0.95)',
                    color: '#ffffff',
                    showConfirmButton: false,
                    timer: 2000,
                    customClass: {
                        popup: 'swal-dark-theme'
                    }
                }).then(function() {
                    window.location.href = "/admin/users";
                });
            } else {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sweetalert2$2f$dist$2f$sweetalert2$2e$esm$2e$all$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].fire({
                    title: 'เข้าสู่ระบบไม่สำเร็จ!',
                    text: 'ชื่อผู้ใช้งานหรือรหัสผ่านไม่ถูกต้อง',
                    icon: 'warning',
                    confirmButtonText: 'ตกลง',
                    confirmButtonColor: '#DC143C',
                    background: 'rgba(20, 0, 0, 0.95)',
                    color: '#ffffff',
                    showConfirmButton: false,
                    timer: 2000,
                    customClass: {
                        popup: 'swal-dark-theme'
                    }
                }).then(function() {
                    router.push('/signin');
                });
            }
        } catch (error) {
            console.error('Login error:', error);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sweetalert2$2f$dist$2f$sweetalert2$2e$esm$2e$all$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].fire({
                title: 'เกิดข้อผิดพลาด!',
                text: 'ไม่สามารถเชื่อมต่อกับเซิร์ฟเวอร์ได้',
                icon: 'error',
                confirmButtonText: 'ตกลง',
                confirmButtonColor: '#DC143C',
                background: 'rgba(20, 0, 0, 0.95)',
                color: '#ffffff',
                customClass: {
                    popup: 'swal-dark-theme'
                }
            });
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'linear-gradient(135deg, #1a0000 0%, #4d0000 25%, #800000 50%, #660000 75%, #330000 100%)',
            fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
            padding: '2rem'
        },
        className: "jsx-1abdb95f399bf7c1",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("link", {
                href: "https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/css/bootstrap.min.css",
                rel: "stylesheet",
                className: "jsx-1abdb95f399bf7c1"
            }, void 0, false, {
                fileName: "[project]/app/components/Login.js",
                lineNumber: 143,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                id: "1abdb95f399bf7c1",
                children: ".login-card.jsx-1abdb95f399bf7c1{backdrop-filter:blur(15px);background:#140000e6;border:1px solid #8b00004d;border-radius:20px;transition:all .4s;overflow:hidden;box-shadow:0 25px 50px #8b00004d,inset 0 1px #ffffff1a}.login-card.jsx-1abdb95f399bf7c1:hover{transform:translateY(-8px);box-shadow:0 35px 60px #8b000066,inset 0 1px #ffffff1a}.login-header.jsx-1abdb95f399bf7c1{color:#fff;text-align:center;background:linear-gradient(135deg,#8b0000 0%,#dc143c 30%,red 70%,#b22222 100%);padding:2rem;box-shadow:inset 0 -1px #0003}.login-header.jsx-1abdb95f399bf7c1 h2.jsx-1abdb95f399bf7c1{text-shadow:2px 2px 4px #00000080;margin:0;font-size:1.8rem;font-weight:600}.login-header.jsx-1abdb95f399bf7c1 p.jsx-1abdb95f399bf7c1{opacity:.9;text-shadow:1px 1px 2px #0000004d;margin:.5rem 0 0;font-size:.95rem}.form-control.jsx-1abdb95f399bf7c1{color:#fff;background:#280000b3;border:2px solid #8b000066;border-radius:12px;padding:.75rem 1rem;font-size:1rem;transition:all .3s;box-shadow:inset 2px 2px 5px #0000004d}.form-control.jsx-1abdb95f399bf7c1::placeholder{color:#fff9}.form-control.jsx-1abdb95f399bf7c1:focus{background:#320000cc;border-color:#dc143c;box-shadow:0 0 0 .2rem #dc143c40,inset 2px 2px 5px #0000004d}.form-label.jsx-1abdb95f399bf7c1{color:#fff;text-shadow:1px 1px 2px #00000080;margin-bottom:.5rem;font-weight:500}.btn-login.jsx-1abdb95f399bf7c1{color:#fff;text-shadow:1px 1px 2px #00000080;background:linear-gradient(135deg,#8b0000 0%,#dc143c 50%,red 100%);border:none;border-radius:12px;width:100%;padding:.75rem 2rem;font-size:1rem;font-weight:600;transition:all .3s;box-shadow:0 5px 15px #8b000066,inset 0 1px #fff3}.btn-login.jsx-1abdb95f399bf7c1:hover{background:linear-gradient(135deg,#a00000 0%,#ff1493 50%,#ff4500 100%);transform:translateY(-3px);box-shadow:0 8px 25px #8b000099,inset 0 1px #fff3}.form-check-input.jsx-1abdb95f399bf7c1{background-color:#280000b3;border:2px solid #8b000066;border-radius:6px;box-shadow:inset 1px 1px 3px #0000004d}.form-check-input.jsx-1abdb95f399bf7c1:checked{background-color:#dc143c;border-color:#dc143c;box-shadow:0 2px 5px #dc143c66,inset 1px 1px 3px #0000004d}.form-check-label.jsx-1abdb95f399bf7c1{color:#fff;text-shadow:1px 1px 2px #00000080;font-size:.9rem}.links.jsx-1abdb95f399bf7c1{text-align:center;margin-top:1.5rem}.links.jsx-1abdb95f399bf7c1 a.jsx-1abdb95f399bf7c1{color:#ff6b6b;text-shadow:1px 1px 2px #00000080;font-size:.9rem;text-decoration:none;transition:all .3s}.links.jsx-1abdb95f399bf7c1 a.jsx-1abdb95f399bf7c1:hover{color:#f44;text-shadow:1px 1px 3px #ff444480;text-decoration:underline}.links.jsx-1abdb95f399bf7c1 span.jsx-1abdb95f399bf7c1{color:#fff9}.icon.jsx-1abdb95f399bf7c1{text-shadow:2px 2px 4px #00000080;margin-bottom:1rem;font-size:3rem}.input-group.jsx-1abdb95f399bf7c1{position:relative}.input-icon.jsx-1abdb95f399bf7c1{color:#ffffffb3;z-index:10;text-shadow:1px 1px 2px #00000080;position:absolute;top:50%;left:1rem;transform:translateY(-50%)}.form-control.with-icon.jsx-1abdb95f399bf7c1{padding-left:2.5rem}.card-body.jsx-1abdb95f399bf7c1{background:#1e000080}.swal-dark-theme{border:2px solid #8b000080!important;border-radius:15px!important;box-shadow:0 20px 40px #8b000066!important}.swal2-popup.swal-dark-theme .swal2-title{color:#fff!important;text-shadow:1px 1px 2px #000000b3!important}.swal2-popup.swal-dark-theme .swal2-html-container{color:#fff!important;text-shadow:1px 1px 2px #00000080!important}"
            }, void 0, false, void 0, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-1abdb95f399bf7c1" + " " + "container",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "jsx-1abdb95f399bf7c1" + " " + "row justify-content-center",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-1abdb95f399bf7c1" + " " + "col-md-6 col-lg-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-1abdb95f399bf7c1" + " " + "card login-card",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-1abdb95f399bf7c1" + " " + "login-header",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-1abdb95f399bf7c1" + " " + "icon",
                                            children: "🔐"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/Login.js",
                                            lineNumber: 340,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "jsx-1abdb95f399bf7c1",
                                            children: "เข้าสู่ระบบ"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/Login.js",
                                            lineNumber: 341,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "jsx-1abdb95f399bf7c1",
                                            children: "ยินดีต้อนรับกลับมา!"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/Login.js",
                                            lineNumber: 342,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/Login.js",
                                    lineNumber: 339,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-1abdb95f399bf7c1" + " " + "card-body p-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                            onSubmit: handleLogin,
                                            className: "jsx-1abdb95f399bf7c1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-1abdb95f399bf7c1" + " " + "mb-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            htmlFor: "username",
                                                            className: "jsx-1abdb95f399bf7c1" + " " + "form-label",
                                                            children: "ชื่อผู้ใช้งาน"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/Login.js",
                                                            lineNumber: 348,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "jsx-1abdb95f399bf7c1" + " " + "input-group",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "jsx-1abdb95f399bf7c1" + " " + "input-icon",
                                                                    children: "👤"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/components/Login.js",
                                                                    lineNumber: 352,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "text",
                                                                    id: "username",
                                                                    name: "username",
                                                                    value: username,
                                                                    onChange: (e)=>setUsername(e.target.value),
                                                                    placeholder: "กรอกชื่อผู้ใช้งาน",
                                                                    className: "jsx-1abdb95f399bf7c1" + " " + "form-control with-icon"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/components/Login.js",
                                                                    lineNumber: 353,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/components/Login.js",
                                                            lineNumber: 351,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/components/Login.js",
                                                    lineNumber: 347,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-1abdb95f399bf7c1" + " " + "mb-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            htmlFor: "password",
                                                            className: "jsx-1abdb95f399bf7c1" + " " + "form-label",
                                                            children: "รหัสผ่าน"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/Login.js",
                                                            lineNumber: 366,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "jsx-1abdb95f399bf7c1" + " " + "input-group",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "jsx-1abdb95f399bf7c1" + " " + "input-icon",
                                                                    children: "🔒"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/components/Login.js",
                                                                    lineNumber: 370,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "password",
                                                                    id: "password",
                                                                    name: "password",
                                                                    value: password,
                                                                    onChange: (e)=>setPassword(e.target.value),
                                                                    placeholder: "กรอกรหัสผ่าน",
                                                                    className: "jsx-1abdb95f399bf7c1" + " " + "form-control with-icon"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/components/Login.js",
                                                                    lineNumber: 371,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/components/Login.js",
                                                            lineNumber: 369,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/components/Login.js",
                                                    lineNumber: 365,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-1abdb95f399bf7c1" + " " + "mb-3 form-check",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "checkbox",
                                                            id: "remember",
                                                            name: "remember",
                                                            checked: remember,
                                                            onChange: (e)=>setRemember(e.target.checked),
                                                            className: "jsx-1abdb95f399bf7c1" + " " + "form-check-input"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/Login.js",
                                                            lineNumber: 384,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            htmlFor: "remember",
                                                            className: "jsx-1abdb95f399bf7c1" + " " + "form-check-label",
                                                            children: "จำฉันไว้"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/Login.js",
                                                            lineNumber: 392,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/components/Login.js",
                                                    lineNumber: 383,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "submit",
                                                    className: "jsx-1abdb95f399bf7c1" + " " + "btn btn-primary btn-login",
                                                    children: "🔑 เข้าสู่ระบบ"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/Login.js",
                                                    lineNumber: 397,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/Login.js",
                                            lineNumber: 346,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-1abdb95f399bf7c1" + " " + "links",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "/register",
                                                    children: "สมัครสมาชิก"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/Login.js",
                                                    lineNumber: 403,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "jsx-1abdb95f399bf7c1" + " " + "mx-2",
                                                    children: "|"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/Login.js",
                                                    lineNumber: 404,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "/forgot-password",
                                                    children: "ลืมรหัสผ่าน"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/Login.js",
                                                    lineNumber: 405,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/Login.js",
                                            lineNumber: 402,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/Login.js",
                                    lineNumber: 345,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/Login.js",
                            lineNumber: 338,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/components/Login.js",
                        lineNumber: 337,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/components/Login.js",
                    lineNumber: 336,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/components/Login.js",
                lineNumber: 335,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/Login.js",
        lineNumber: 133,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=app_components_Login_9ef4b599.js.map