(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/admin/users/page.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Page
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function Page() {
    _s();
    const [items, setItems] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true); // <-- เพิ่ม state loading
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Page.useEffect": ()=>{
            const token = localStorage.getItem('token');
            if (!token) {
                router.push('/Login');
                return;
            }
            async function getUsers() {
                try {
                    const res = await fetch('http://itdev.cmtc.ac.th:3000/api/users');
                    if (!res.ok) {
                        console.error('Failed to fetch data');
                        return;
                    }
                    const data = await res.json();
                    setItems(data);
                    setLoading(false); // <-- โหลดเสร็จแล้ว
                } catch (error) {
                    console.error('Error fetching data:', error);
                    setLoading(false);
                }
            }
            getUsers();
            const interval = setInterval(getUsers, 1000);
            return ({
                "Page.useEffect": ()=>clearInterval(interval)
            })["Page.useEffect"];
        }
    }["Page.useEffect"], []);
    const handleDelete = async (id)=>{
        try {
            const res = await fetch("http://itdev.cmtc.ac.th:3000/api/users/".concat(id), {
                method: 'DELETE',
                headers: {
                    Accept: 'application/json'
                }
            });
            const result = await res.json();
            console.log(result);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    // ถ้า loading ให้ return null หรือข้อความ loading
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                children: "Loading..."
            }, void 0, false, {
                fileName: "[project]/app/admin/users/page.js",
                lineNumber: 55,
                columnNumber: 39
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/admin/users/page.js",
            lineNumber: 55,
            columnNumber: 10
        }, this); // หรือ return null เพื่อไม่ให้ render อะไร
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                id: "bfd8f3f0f61b2a79",
                children: 'body.jsx-bfd8f3f0f61b2a79{color:#fff;background:linear-gradient(135deg,#1a1a1a 0%,#2d1b2d 50%,#1a1a1a 100%);min-height:100vh;font-family:Segoe UI,Tahoma,Geneva,Verdana,sans-serif}.container.jsx-bfd8f3f0f61b2a79{-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);background:rgba(0,0,0,.4);border-radius:15px;max-width:100%;margin:0 auto;padding:25px;overflow-x:auto;box-shadow:0 8px 32px rgba(220,38,38,.2)}.card.jsx-bfd8f3f0f61b2a79{background:linear-gradient(145deg,#2a2a2a,#1a1a1a);border:2px solid rgba(220,38,38,.4);border-radius:15px;overflow:hidden;box-shadow:0 4px 25px rgba(0,0,0,.6),inset 0 1px rgba(220,38,38,.2)}.card-header.jsx-bfd8f3f0f61b2a79{color:#fff;text-align:center;text-shadow:2px 2px 4px rgba(0,0,0,.7);background:linear-gradient(90deg,#dc2626,#991b1b,#7f1d1d);border-bottom:3px solid rgba(220,38,38,.6);padding:20px;font-size:1.8rem;font-weight:700;position:relative}.card-header.jsx-bfd8f3f0f61b2a79:before{content:"";background:linear-gradient(90deg,transparent,rgba(255,255,255,.3),transparent);width:100%;height:100%;animation:3s infinite shine;position:absolute;top:0;left:-100%}@keyframes shine{0%{left:-100%}to{left:100%}}.card-body.jsx-bfd8f3f0f61b2a79{background:rgba(20,20,20,.95);padding:25px}.table-container.jsx-bfd8f3f0f61b2a79{border-radius:10px;overflow-x:auto;box-shadow:inset 0 2px 15px rgba(0,0,0,.4)}.table.jsx-bfd8f3f0f61b2a79{background:rgba(35,35,35,.9);border-radius:10px;width:100%;min-width:1200px;margin-bottom:0;font-size:.95rem;overflow:hidden}.table.jsx-bfd8f3f0f61b2a79 thead.jsx-bfd8f3f0f61b2a79 th.jsx-bfd8f3f0f61b2a79{color:#fff;text-shadow:2px 2px 3px rgba(0,0,0,.8);white-space:nowrap;text-align:center;background:linear-gradient(135deg,#7f1d1d,#991b1b,#dc2626);border:none;padding:18px 12px;font-size:1rem;font-weight:700;position:relative}.table.jsx-bfd8f3f0f61b2a79 thead.jsx-bfd8f3f0f61b2a79 th.jsx-bfd8f3f0f61b2a79:after{content:"";opacity:.8;background:linear-gradient(90deg,#dc2626,#fca5a5,#dc2626);height:3px;position:absolute;bottom:0;left:0;right:0}.table.jsx-bfd8f3f0f61b2a79 tbody.jsx-bfd8f3f0f61b2a79 tr.jsx-bfd8f3f0f61b2a79{background:linear-gradient(rgba(45,45,45,.9),rgba(35,35,35,.95));border-bottom:1px solid rgba(220,38,38,.2);transition:all .3s}.table.jsx-bfd8f3f0f61b2a79 tbody.jsx-bfd8f3f0f61b2a79 tr.jsx-bfd8f3f0f61b2a79:hover{background:linear-gradient(rgba(127,29,29,.4),rgba(153,27,27,.3));transform:scale(1.005);box-shadow:0 4px 20px rgba(220,38,38,.3)}.table.jsx-bfd8f3f0f61b2a79 tbody.jsx-bfd8f3f0f61b2a79 td.jsx-bfd8f3f0f61b2a79{color:#000;vertical-align:middle;text-shadow:1px 1px 2px rgba(0,0,0,.6);text-overflow:ellipsis;white-space:nowrap;border:none;max-width:150px;padding:15px 12px;font-size:.9rem;font-weight:500;overflow:hidden}.table-striped.jsx-bfd8f3f0f61b2a79 tbody.jsx-bfd8f3f0f61b2a79 tr.jsx-bfd8f3f0f61b2a79:nth-child(odd){background:linear-gradient(rgba(50,50,50,.7),rgba(40,40,40,.8))}.col-id.jsx-bfd8f3f0f61b2a79{width:60px;min-width:60px}.col-name.jsx-bfd8f3f0f61b2a79{width:120px;min-width:120px}.col-username.jsx-bfd8f3f0f61b2a79{width:110px;min-width:110px}.col-password.jsx-bfd8f3f0f61b2a79{width:200px;min-width:200px}.col-address.jsx-bfd8f3f0f61b2a79{width:150px;min-width:150px}.col-sex.jsx-bfd8f3f0f61b2a79{width:70px;min-width:70px}.col-birthday.jsx-bfd8f3f0f61b2a79{width:120px;min-width:120px}.col-action.jsx-bfd8f3f0f61b2a79{width:90px;min-width:90px}.btn.jsx-bfd8f3f0f61b2a79{text-shadow:1px 1px 2px rgba(0,0,0,.6);border:none;border-radius:8px;margin:2px;padding:10px 16px;font-size:.85rem;font-weight:600;transition:all .3s;position:relative;overflow:hidden}.btn.jsx-bfd8f3f0f61b2a79:before{content:"";background:linear-gradient(90deg,transparent,rgba(255,255,255,.3),transparent);width:100%;height:100%;transition:left .5s;position:absolute;top:0;left:-100%}.btn.jsx-bfd8f3f0f61b2a79:hover:before{left:100%}.btn-warning.jsx-bfd8f3f0f61b2a79{color:#fff;background:linear-gradient(135deg,#f59e0b,#d97706);box-shadow:0 4px 12px rgba(245,158,11,.4)}.btn-warning.jsx-bfd8f3f0f61b2a79:hover{background:linear-gradient(135deg,#d97706,#b45309);transform:translateY(-2px);box-shadow:0 6px 20px rgba(245,158,11,.6)}.btn-danger.jsx-bfd8f3f0f61b2a79{color:#fff;background:linear-gradient(135deg,#dc2626,#991b1b);box-shadow:0 4px 12px rgba(220,38,38,.4)}.btn-danger.jsx-bfd8f3f0f61b2a79:hover{background:linear-gradient(135deg,#991b1b,#7f1d1d);transform:translateY(-2px);box-shadow:0 6px 20px rgba(220,38,38,.6)}.text-center.jsx-bfd8f3f0f61b2a79{text-align:center;font-weight:700}::-webkit-scrollbar{width:12px;height:12px}::-webkit-scrollbar-track{background:rgba(30,30,30,.8);border-radius:6px}::-webkit-scrollbar-thumb{background:linear-gradient(45deg,#dc2626,#991b1b);border:2px solid rgba(30,30,30,.8);border-radius:6px}.jsx-bfd8f3f0f61b2a79::-webkit-scrollbar-thumb:hover{background:linear-gradient(45deg,#991b1b,#7f1d1d)}.card.jsx-bfd8f3f0f61b2a79{position:relative}.card.jsx-bfd8f3f0f61b2a79:before{content:"";z-index:-1;opacity:.6;filter:blur(2px);background:linear-gradient(45deg,#dc2626,transparent,#dc2626,transparent,#dc2626);border-radius:18px;position:absolute;top:-3px;bottom:-3px;left:-3px;right:-3px}@media (max-width:768px){.container.jsx-bfd8f3f0f61b2a79{padding:15px}.table.jsx-bfd8f3f0f61b2a79{font-size:.8rem}.btn.jsx-bfd8f3f0f61b2a79{padding:8px 12px;font-size:.75rem}}'
            }, void 0, false, void 0, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {
                className: "jsx-bfd8f3f0f61b2a79"
            }, void 0, false, {
                fileName: "[project]/app/admin/users/page.js",
                lineNumber: 316,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {
                className: "jsx-bfd8f3f0f61b2a79"
            }, void 0, false, {
                fileName: "[project]/app/admin/users/page.js",
                lineNumber: 316,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {
                className: "jsx-bfd8f3f0f61b2a79"
            }, void 0, false, {
                fileName: "[project]/app/admin/users/page.js",
                lineNumber: 316,
                columnNumber: 19
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {
                className: "jsx-bfd8f3f0f61b2a79"
            }, void 0, false, {
                fileName: "[project]/app/admin/users/page.js",
                lineNumber: 316,
                columnNumber: 25
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-bfd8f3f0f61b2a79" + " " + "container",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "jsx-bfd8f3f0f61b2a79" + " " + "card",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-bfd8f3f0f61b2a79" + " " + "card-header",
                            children: "Users Management System"
                        }, void 0, false, {
                            fileName: "[project]/app/admin/users/page.js",
                            lineNumber: 319,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-bfd8f3f0f61b2a79" + " " + "card-body",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-bfd8f3f0f61b2a79" + " " + "table-container",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                    className: "jsx-bfd8f3f0f61b2a79" + " " + "table table-striped table-hover",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                            className: "jsx-bfd8f3f0f61b2a79",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                className: "jsx-bfd8f3f0f61b2a79",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "jsx-bfd8f3f0f61b2a79" + " " + "col-id text-center",
                                                        children: "#"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/admin/users/page.js",
                                                        lineNumber: 327,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "jsx-bfd8f3f0f61b2a79" + " " + "col-name",
                                                        children: "Firstname"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/admin/users/page.js",
                                                        lineNumber: 328,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "jsx-bfd8f3f0f61b2a79" + " " + "col-name",
                                                        children: "Fullname"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/admin/users/page.js",
                                                        lineNumber: 329,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "jsx-bfd8f3f0f61b2a79" + " " + "col-name",
                                                        children: "Lastname"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/admin/users/page.js",
                                                        lineNumber: 330,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "jsx-bfd8f3f0f61b2a79" + " " + "col-username",
                                                        children: "Username"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/admin/users/page.js",
                                                        lineNumber: 331,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "jsx-bfd8f3f0f61b2a79" + " " + "col-password",
                                                        children: "Password"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/admin/users/page.js",
                                                        lineNumber: 332,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "jsx-bfd8f3f0f61b2a79" + " " + "col-address",
                                                        children: "Address"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/admin/users/page.js",
                                                        lineNumber: 333,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "jsx-bfd8f3f0f61b2a79" + " " + "col-sex",
                                                        children: "Sex"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/admin/users/page.js",
                                                        lineNumber: 334,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "jsx-bfd8f3f0f61b2a79" + " " + "col-birthday",
                                                        children: "Birthday"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/admin/users/page.js",
                                                        lineNumber: 335,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "jsx-bfd8f3f0f61b2a79" + " " + "col-action",
                                                        children: "Edit"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/admin/users/page.js",
                                                        lineNumber: 336,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "jsx-bfd8f3f0f61b2a79" + " " + "col-action",
                                                        children: "Delete"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/admin/users/page.js",
                                                        lineNumber: 337,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/admin/users/page.js",
                                                lineNumber: 326,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/users/page.js",
                                            lineNumber: 325,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                            className: "jsx-bfd8f3f0f61b2a79",
                                            children: items.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                    className: "jsx-bfd8f3f0f61b2a79",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "jsx-bfd8f3f0f61b2a79" + " " + "text-center",
                                                            children: item.id
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/admin/users/page.js",
                                                            lineNumber: 343,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            title: item.firstname,
                                                            className: "jsx-bfd8f3f0f61b2a79",
                                                            children: item.firstname
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/admin/users/page.js",
                                                            lineNumber: 344,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            title: item.fullname,
                                                            className: "jsx-bfd8f3f0f61b2a79",
                                                            children: item.fullname
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/admin/users/page.js",
                                                            lineNumber: 345,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            title: item.lastname,
                                                            className: "jsx-bfd8f3f0f61b2a79",
                                                            children: item.lastname
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/admin/users/page.js",
                                                            lineNumber: 346,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            title: item.username,
                                                            className: "jsx-bfd8f3f0f61b2a79",
                                                            children: item.username
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/admin/users/page.js",
                                                            lineNumber: 347,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            title: item.password,
                                                            className: "jsx-bfd8f3f0f61b2a79",
                                                            children: item.password ? '••••••••••••' : '-'
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/admin/users/page.js",
                                                            lineNumber: 348,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            title: item.address,
                                                            className: "jsx-bfd8f3f0f61b2a79",
                                                            children: item.address
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/admin/users/page.js",
                                                            lineNumber: 351,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "jsx-bfd8f3f0f61b2a79" + " " + "text-center",
                                                            children: item.sex
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/admin/users/page.js",
                                                            lineNumber: 352,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "jsx-bfd8f3f0f61b2a79",
                                                            children: item.birthday
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/admin/users/page.js",
                                                            lineNumber: 353,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "jsx-bfd8f3f0f61b2a79",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                href: "/admin/users/edit/".concat(item.id),
                                                                className: "btn btn-warning",
                                                                children: "Edit"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/admin/users/page.js",
                                                                lineNumber: 355,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/admin/users/page.js",
                                                            lineNumber: 354,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "jsx-bfd8f3f0f61b2a79",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "button",
                                                                onClick: ()=>handleDelete(item.id),
                                                                className: "jsx-bfd8f3f0f61b2a79" + " " + "btn btn-danger",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                        className: "jsx-bfd8f3f0f61b2a79" + " " + "fa fa-trash"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/admin/users/page.js",
                                                                        lineNumber: 365,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    " Del"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/admin/users/page.js",
                                                                lineNumber: 360,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/admin/users/page.js",
                                                            lineNumber: 359,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, item.id, true, {
                                                    fileName: "[project]/app/admin/users/page.js",
                                                    lineNumber: 342,
                                                    columnNumber: 21
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/users/page.js",
                                            lineNumber: 340,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/admin/users/page.js",
                                    lineNumber: 324,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/admin/users/page.js",
                                lineNumber: 323,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/admin/users/page.js",
                            lineNumber: 322,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/admin/users/page.js",
                    lineNumber: 318,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/admin/users/page.js",
                lineNumber: 317,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {
                className: "jsx-bfd8f3f0f61b2a79"
            }, void 0, false, {
                fileName: "[project]/app/admin/users/page.js",
                lineNumber: 376,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {
                className: "jsx-bfd8f3f0f61b2a79"
            }, void 0, false, {
                fileName: "[project]/app/admin/users/page.js",
                lineNumber: 376,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true);
}
_s(Page, "E5OCSMEbMcm7XXU7JRbqV+YNQ8A=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = Page;
var _c;
__turbopack_context__.k.register(_c, "Page");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=app_admin_users_page_4e78b68b.js.map