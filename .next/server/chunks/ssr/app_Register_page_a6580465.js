module.exports = [
"[project]/app/Register/page.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Page
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sweetalert2$2f$dist$2f$sweetalert2$2e$esm$2e$all$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sweetalert2/dist/sweetalert2.esm.all.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
function Page() {
    const [username, setUsername] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [password, setPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const handleLogin = async (e)=>{
        e.preventDefault();
        const res = await fetch('https://backend-nextjs-virid.vercel.app/api/auth/login', {
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
            // Use in-memory storage instead of localStorage for this demo
            sessionStorage.setItem('token', data.token);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sweetalert2$2f$dist$2f$sweetalert2$2e$esm$2e$all$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].fire({
                icon: 'success',
                title: '<h3 style="color: #dc3545; font-family: \'Cinzel\', serif;">戦士の帰還 - Warrior\'s Return</h3>',
                html: '<p style="color: #6c757d;">Login Successfully!</p>',
                background: '#1a1a1a',
                showConfirmButton: false,
                timer: 2000
            }).then(function() {
                router.push('/admin/users');
            });
        } else {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sweetalert2$2f$dist$2f$sweetalert2$2e$esm$2e$all$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].fire({
                icon: 'warning',
                title: '<h3 style="color: #dc3545; font-family: \'Cinzel\', serif;">失敗 - Failed</h3>',
                html: '<p style="color: #6c757d;">Login Failed!</p>',
                background: '#1a1a1a',
                showConfirmButton: false,
                timer: 2000
            }).then(function() {
                router.push('/signin');
            });
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                id: "97765255f56ced6d",
                children: '@import "https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700&family=Noto+Sans+JP:wght@300;400;500&display=swap";body.jsx-97765255f56ced6d{background:linear-gradient(135deg,#0a0a0a 0%,#1a1a1a 50%,#2d1b1b 100%);min-height:100vh;font-family:Noto Sans JP,sans-serif;overflow-x:hidden}.samurai-bg.jsx-97765255f56ced6d{z-index:-2;background:radial-gradient(circle at 20%,#dc35451a 0%,#0000 50%),radial-gradient(circle at 80% 20%,#dc35450d 0%,#0000 50%),radial-gradient(circle at 40% 80%,#dc354514 0%,#0000 50%),linear-gradient(135deg,#0a0a0a 0%,#1a1a1a 50%,#2d1b1b 100%);width:100%;height:100%;position:fixed;top:0;left:0}.samurai-pattern.jsx-97765255f56ced6d{z-index:-1;background-image:repeating-linear-gradient(45deg,#0000,#0000 100px,#dc354503 100px 101px);width:100%;height:100%;animation:20s ease-in-out infinite drift;position:fixed;top:0;left:0}@keyframes drift{0%,to{transform:translate(0)translateY(0)}25%{transform:translate(10px)translateY(-5px)}50%{transform:translate(-5px)translateY(10px)}75%{transform:translate(-10px)translateY(-5px)}}.container.jsx-97765255f56ced6d{z-index:1;position:relative}.samurai-card.jsx-97765255f56ced6d{backdrop-filter:blur(10px);background:#0d0d0df2;border:2px solid #dc3545;border-radius:15px;animation:3s ease-in-out infinite alternate cardGlow;position:relative;overflow:hidden;box-shadow:0 0 30px #dc35454d,inset 0 1px #ffffff1a}@keyframes cardGlow{0%{box-shadow:0 0 30px #dc35454d,inset 0 1px #ffffff1a}to{box-shadow:0 0 40px #dc354580,inset 0 1px #ffffff1a}}.samurai-card.jsx-97765255f56ced6d:before{content:"";z-index:-1;background:linear-gradient(45deg,#dc3545,#000,#dc3545,#000);border-radius:15px;animation:4s linear infinite borderRotate;position:absolute;inset:-2px}@keyframes borderRotate{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.card-header-samurai.jsx-97765255f56ced6d{color:#fff;text-align:center;text-shadow:2px 2px 4px #000000b3;background:linear-gradient(135deg,#dc3545 0%,#a71e2a 100%);border-radius:13px 13px 0 0;padding:20px;font-family:Cinzel,serif;font-size:1.5rem;font-weight:700;position:relative}.card-header-samurai.jsx-97765255f56ced6d:after{content:"⚔️";font-size:1.2rem;animation:2s ease-in-out infinite swordGlint;position:absolute;top:50%;right:20px;transform:translateY(-50%)}@keyframes swordGlint{0%,to{opacity:.7;transform:translateY(-50%)rotate(0)}50%{opacity:1;transform:translateY(-50%)rotate(5deg)}}.card-body-samurai.jsx-97765255f56ced6d{background:#1a1a1ae6;border-radius:0 0 13px 13px;padding:30px}.form-label-samurai.jsx-97765255f56ced6d{color:#dc3545;text-transform:uppercase;letter-spacing:1px;margin-bottom:10px;font-family:Cinzel,serif;font-weight:600}.input-group-samurai.jsx-97765255f56ced6d{margin-bottom:25px}.input-group-text-samurai.jsx-97765255f56ced6d{color:#fff;background:linear-gradient(135deg,#dc3545 0%,#a71e2a 100%);border:2px solid #dc3545;border-radius:8px 0 0 8px;justify-content:center;align-items:center;min-width:50px;display:flex}.form-control-samurai.jsx-97765255f56ced6d{color:#fff;background:#0d0d0dcc;border:2px solid #444;border-left:none;border-radius:0 8px 8px 0;padding:12px 15px;font-family:Noto Sans JP,sans-serif;transition:all .3s}.form-control-samurai.jsx-97765255f56ced6d:focus{color:#fff;background:#0d0d0de6;border-color:#dc3545;box-shadow:0 0 15px #dc35454d}.form-control-samurai.jsx-97765255f56ced6d::placeholder{color:#888;font-style:italic}.btn-samurai.jsx-97765255f56ced6d{color:#fff;text-transform:uppercase;letter-spacing:2px;background:linear-gradient(135deg,#dc3545 0%,#a71e2a 100%);border:2px solid #dc3545;border-radius:8px;width:100%;padding:12px 30px;font-family:Cinzel,serif;font-weight:600;transition:all .3s;position:relative;overflow:hidden}.btn-samurai.jsx-97765255f56ced6d:before{content:"";background:linear-gradient(90deg,#0000,#fff3,#0000);width:100%;height:100%;transition:left .5s;position:absolute;top:0;left:-100%}.btn-samurai.jsx-97765255f56ced6d:hover:before{left:100%}.btn-samurai.jsx-97765255f56ced6d:hover{background:linear-gradient(135deg,#e63946 0%,#b71c2c 100%);transform:translateY(-2px);box-shadow:0 5px 20px #dc354566}.samurai-links.jsx-97765255f56ced6d{text-align:center;margin-top:20px}.samurai-link.jsx-97765255f56ced6d{color:#dc3545;font-family:Cinzel,serif;font-weight:500;text-decoration:none;transition:all .3s;position:relative}.samurai-link.jsx-97765255f56ced6d:after{content:"";background:#dc3545;width:0;height:2px;transition:all .3s;position:absolute;bottom:-2px;left:50%}.samurai-link.jsx-97765255f56ced6d:hover{color:#e63946;text-shadow:0 0 8px #dc354580}.samurai-link.jsx-97765255f56ced6d:hover:after{width:100%;left:0}.divider.jsx-97765255f56ced6d{color:#666;margin:0 10px}.japanese-text.jsx-97765255f56ced6d{color:#dc354599;font-family:Noto Sans JP,sans-serif;font-size:.9rem;font-weight:300;position:absolute;top:-10px;right:20px}@media (width<=768px){.samurai-card.jsx-97765255f56ced6d{margin:10px}.card-header-samurai.jsx-97765255f56ced6d{padding:15px;font-size:1.2rem}.card-body-samurai.jsx-97765255f56ced6d{padding:20px}}'
            }, void 0, false, void 0, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-97765255f56ced6d" + " " + "samurai-bg"
            }, void 0, false, {
                fileName: "[project]/app/Register/page.js",
                lineNumber: 329,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-97765255f56ced6d" + " " + "samurai-pattern"
            }, void 0, false, {
                fileName: "[project]/app/Register/page.js",
                lineNumber: 330,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    paddingTop: '100px',
                    paddingBottom: '50px',
                    minHeight: '100vh'
                },
                className: "jsx-97765255f56ced6d",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "jsx-97765255f56ced6d" + " " + "container",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-97765255f56ced6d" + " " + "row justify-content-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-97765255f56ced6d" + " " + "col-md-6 col-lg-5",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-97765255f56ced6d" + " " + "card samurai-card",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-97765255f56ced6d" + " " + "card-header card-header-samurai",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "jsx-97765255f56ced6d" + " " + "japanese-text",
                                                children: "武士の道"
                                            }, void 0, false, {
                                                fileName: "[project]/app/Register/page.js",
                                                lineNumber: 338,
                                                columnNumber: 19
                                            }, this),
                                            "侍 Login Portal"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/Register/page.js",
                                        lineNumber: 337,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-97765255f56ced6d" + " " + "card-body card-body-samurai",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                            onSubmit: handleLogin,
                                            className: "jsx-97765255f56ced6d" + " " + "row g-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-97765255f56ced6d" + " " + "col-12",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "jsx-97765255f56ced6d" + " " + "form-label form-label-samurai",
                                                            children: "⚔️ Username"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/Register/page.js",
                                                            lineNumber: 344,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "jsx-97765255f56ced6d" + " " + "input-group input-group-samurai",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "jsx-97765255f56ced6d" + " " + "input-group-text input-group-text-samurai",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                        style: {
                                                                            fontSize: '1.1rem'
                                                                        },
                                                                        className: "jsx-97765255f56ced6d" + " " + "bi bi-person-vcard"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/Register/page.js",
                                                                        lineNumber: 347,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/Register/page.js",
                                                                    lineNumber: 346,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "text",
                                                                    placeholder: "Enter your warrior name",
                                                                    value: username,
                                                                    onChange: (e)=>setUsername(e.target.value),
                                                                    className: "jsx-97765255f56ced6d" + " " + "form-control form-control-samurai"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/Register/page.js",
                                                                    lineNumber: 349,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/Register/page.js",
                                                            lineNumber: 345,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/Register/page.js",
                                                    lineNumber: 343,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-97765255f56ced6d" + " " + "col-12",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "jsx-97765255f56ced6d" + " " + "form-label form-label-samurai",
                                                            children: "🗡️ Password"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/Register/page.js",
                                                            lineNumber: 360,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "jsx-97765255f56ced6d" + " " + "input-group input-group-samurai",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "jsx-97765255f56ced6d" + " " + "input-group-text input-group-text-samurai",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                        style: {
                                                                            fontSize: '1.1rem'
                                                                        },
                                                                        className: "jsx-97765255f56ced6d" + " " + "bi bi-shield-lock"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/Register/page.js",
                                                                        lineNumber: 363,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/Register/page.js",
                                                                    lineNumber: 362,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "password",
                                                                    placeholder: "Enter your secret code",
                                                                    value: password,
                                                                    onChange: (e)=>setPassword(e.target.value),
                                                                    className: "jsx-97765255f56ced6d" + " " + "form-control form-control-samurai"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/Register/page.js",
                                                                    lineNumber: 365,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/Register/page.js",
                                                            lineNumber: 361,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/Register/page.js",
                                                    lineNumber: 359,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-97765255f56ced6d" + " " + "col-12",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "submit",
                                                        className: "jsx-97765255f56ced6d" + " " + "btn btn-samurai",
                                                        children: "Enter the Dojo"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/Register/page.js",
                                                        lineNumber: 376,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/Register/page.js",
                                                    lineNumber: 375,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-97765255f56ced6d" + " " + "col-12 samurai-links",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                            href: "/register",
                                                            className: "samurai-link",
                                                            children: "Create Account"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/Register/page.js",
                                                            lineNumber: 382,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "jsx-97765255f56ced6d" + " " + "divider",
                                                            children: "|"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/Register/page.js",
                                                            lineNumber: 383,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                            href: "/",
                                                            className: "samurai-link",
                                                            children: "Forget Password"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/Register/page.js",
                                                            lineNumber: 384,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/Register/page.js",
                                                    lineNumber: 381,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/Register/page.js",
                                            lineNumber: 342,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/Register/page.js",
                                        lineNumber: 341,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/Register/page.js",
                                lineNumber: 336,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/Register/page.js",
                            lineNumber: 335,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/Register/page.js",
                        lineNumber: 334,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/Register/page.js",
                    lineNumber: 333,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/Register/page.js",
                lineNumber: 332,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
}),
];

//# sourceMappingURL=app_Register_page_a6580465.js.map