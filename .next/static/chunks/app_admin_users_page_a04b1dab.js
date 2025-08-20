(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/app/admin/users/page.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Page)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function Page() {
    _s();
    const [items, setItems] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Page.useEffect": ()=>{
            async function getUsers() {
                try {
                    const res = await fetch('http://itdev.cmtc.ac.th:3000/api/users');
                    if (!res.ok) {
                        console.error('Failed to fetch data');
                        return;
                    }
                    const data = await res.json();
                    setItems(data);
                } catch (error) {
                    console.error('Error fetching data:', error);
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
            const res = await fetch(`http://itdev.cmtc.ac.th:3000/api/users/${id}`, {
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                id: "bfd8f3f0f61b2a79",
                children: 'body.jsx-bfd8f3f0f61b2a79{color:#fff;background:linear-gradient(135deg,#1a1a1a 0%,#2d1b2d 50%,#1a1a1a 100%);min-height:100vh;font-family:Segoe UI,Tahoma,Geneva,Verdana,sans-serif}.container.jsx-bfd8f3f0f61b2a79{backdrop-filter:blur(10px);background:#0006;border-radius:15px;max-width:100%;margin:0 auto;padding:25px;overflow-x:auto;box-shadow:0 8px 32px #dc262633}.card.jsx-bfd8f3f0f61b2a79{background:linear-gradient(145deg,#2a2a2a,#1a1a1a);border:2px solid #dc262666;border-radius:15px;overflow:hidden;box-shadow:0 4px 25px #0009,inset 0 1px #dc262633}.card-header.jsx-bfd8f3f0f61b2a79{color:#fff;text-align:center;text-shadow:2px 2px 4px #000000b3;background:linear-gradient(90deg,#dc2626,#991b1b,#7f1d1d);border-bottom:3px solid #dc262699;padding:20px;font-size:1.8rem;font-weight:700;position:relative}.card-header.jsx-bfd8f3f0f61b2a79:before{content:"";background:linear-gradient(90deg,#0000,#ffffff4d,#0000);width:100%;height:100%;animation:3s infinite shine;position:absolute;top:0;left:-100%}@keyframes shine{0%{left:-100%}to{left:100%}}.card-body.jsx-bfd8f3f0f61b2a79{background:#141414f2;padding:25px}.table-container.jsx-bfd8f3f0f61b2a79{border-radius:10px;overflow-x:auto;box-shadow:inset 0 2px 15px #0006}.table.jsx-bfd8f3f0f61b2a79{background:#232323e6;border-radius:10px;width:100%;min-width:1200px;margin-bottom:0;font-size:.95rem;overflow:hidden}.table.jsx-bfd8f3f0f61b2a79 thead.jsx-bfd8f3f0f61b2a79 th.jsx-bfd8f3f0f61b2a79{color:#fff;text-shadow:2px 2px 3px #000c;white-space:nowrap;text-align:center;background:linear-gradient(135deg,#7f1d1d,#991b1b,#dc2626);border:none;padding:18px 12px;font-size:1rem;font-weight:700;position:relative}.table.jsx-bfd8f3f0f61b2a79 thead.jsx-bfd8f3f0f61b2a79 th.jsx-bfd8f3f0f61b2a79:after{content:"";opacity:.8;background:linear-gradient(90deg,#dc2626,#fca5a5,#dc2626);height:3px;position:absolute;bottom:0;left:0;right:0}.table.jsx-bfd8f3f0f61b2a79 tbody.jsx-bfd8f3f0f61b2a79 tr.jsx-bfd8f3f0f61b2a79{background:linear-gradient(#2d2d2de6,#232323f2);border-bottom:1px solid #dc262633;transition:all .3s}.table.jsx-bfd8f3f0f61b2a79 tbody.jsx-bfd8f3f0f61b2a79 tr.jsx-bfd8f3f0f61b2a79:hover{background:linear-gradient(#7f1d1d66,#991b1b4d);transform:scale(1.005);box-shadow:0 4px 20px #dc26264d}.table.jsx-bfd8f3f0f61b2a79 tbody.jsx-bfd8f3f0f61b2a79 td.jsx-bfd8f3f0f61b2a79{color:#000;vertical-align:middle;text-shadow:1px 1px 2px #0009;text-overflow:ellipsis;white-space:nowrap;border:none;max-width:150px;padding:15px 12px;font-size:.9rem;font-weight:500;overflow:hidden}.table-striped.jsx-bfd8f3f0f61b2a79 tbody.jsx-bfd8f3f0f61b2a79 tr.jsx-bfd8f3f0f61b2a79:nth-child(odd){background:linear-gradient(#323232b3,#282828cc)}.col-id.jsx-bfd8f3f0f61b2a79{width:60px;min-width:60px}.col-name.jsx-bfd8f3f0f61b2a79{width:120px;min-width:120px}.col-username.jsx-bfd8f3f0f61b2a79{width:110px;min-width:110px}.col-password.jsx-bfd8f3f0f61b2a79{width:200px;min-width:200px}.col-address.jsx-bfd8f3f0f61b2a79{width:150px;min-width:150px}.col-sex.jsx-bfd8f3f0f61b2a79{width:70px;min-width:70px}.col-birthday.jsx-bfd8f3f0f61b2a79{width:120px;min-width:120px}.col-action.jsx-bfd8f3f0f61b2a79{width:90px;min-width:90px}.btn.jsx-bfd8f3f0f61b2a79{text-shadow:1px 1px 2px #0009;border:none;border-radius:8px;margin:2px;padding:10px 16px;font-size:.85rem;font-weight:600;transition:all .3s;position:relative;overflow:hidden}.btn.jsx-bfd8f3f0f61b2a79:before{content:"";background:linear-gradient(90deg,#0000,#ffffff4d,#0000);width:100%;height:100%;transition:left .5s;position:absolute;top:0;left:-100%}.btn.jsx-bfd8f3f0f61b2a79:hover:before{left:100%}.btn-warning.jsx-bfd8f3f0f61b2a79{color:#fff;background:linear-gradient(135deg,#f59e0b,#d97706);box-shadow:0 4px 12px #f59e0b66}.btn-warning.jsx-bfd8f3f0f61b2a79:hover{background:linear-gradient(135deg,#d97706,#b45309);transform:translateY(-2px);box-shadow:0 6px 20px #f59e0b99}.btn-danger.jsx-bfd8f3f0f61b2a79{color:#fff;background:linear-gradient(135deg,#dc2626,#991b1b);box-shadow:0 4px 12px #dc262666}.btn-danger.jsx-bfd8f3f0f61b2a79:hover{background:linear-gradient(135deg,#991b1b,#7f1d1d);transform:translateY(-2px);box-shadow:0 6px 20px #dc262699}.text-center.jsx-bfd8f3f0f61b2a79{text-align:center;font-weight:700}::-webkit-scrollbar{width:12px;height:12px}::-webkit-scrollbar-track{background:#1e1e1ecc;border-radius:6px}::-webkit-scrollbar-thumb{background:linear-gradient(45deg,#dc2626,#991b1b);border:2px solid #1e1e1ecc;border-radius:6px}.jsx-bfd8f3f0f61b2a79::-webkit-scrollbar-thumb:hover{background:linear-gradient(45deg,#991b1b,#7f1d1d)}.card.jsx-bfd8f3f0f61b2a79{position:relative}.card.jsx-bfd8f3f0f61b2a79:before{content:"";z-index:-1;opacity:.6;filter:blur(2px);background:linear-gradient(45deg,#dc2626,#0000,#dc2626,#0000,#dc2626);border-radius:18px;position:absolute;inset:-3px}@media (width<=768px){.container.jsx-bfd8f3f0f61b2a79{padding:15px}.table.jsx-bfd8f3f0f61b2a79{font-size:.8rem}.btn.jsx-bfd8f3f0f61b2a79{padding:8px 12px;font-size:.75rem}}'
            }, void 0, false, void 0, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {
                className: "jsx-bfd8f3f0f61b2a79"
            }, void 0, false, {
                fileName: "[project]/app/admin/users/page.js",
                lineNumber: 301,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {
                className: "jsx-bfd8f3f0f61b2a79"
            }, void 0, false, {
                fileName: "[project]/app/admin/users/page.js",
                lineNumber: 301,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {
                className: "jsx-bfd8f3f0f61b2a79"
            }, void 0, false, {
                fileName: "[project]/app/admin/users/page.js",
                lineNumber: 301,
                columnNumber: 19
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {
                className: "jsx-bfd8f3f0f61b2a79"
            }, void 0, false, {
                fileName: "[project]/app/admin/users/page.js",
                lineNumber: 301,
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
                            lineNumber: 304,
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
                                                        lineNumber: 312,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "jsx-bfd8f3f0f61b2a79" + " " + "col-name",
                                                        children: "Firstname"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/admin/users/page.js",
                                                        lineNumber: 313,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "jsx-bfd8f3f0f61b2a79" + " " + "col-name",
                                                        children: "Fullname"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/admin/users/page.js",
                                                        lineNumber: 314,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "jsx-bfd8f3f0f61b2a79" + " " + "col-name",
                                                        children: "Lastname"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/admin/users/page.js",
                                                        lineNumber: 315,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "jsx-bfd8f3f0f61b2a79" + " " + "col-username",
                                                        children: "Username"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/admin/users/page.js",
                                                        lineNumber: 316,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "jsx-bfd8f3f0f61b2a79" + " " + "col-password",
                                                        children: "Password"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/admin/users/page.js",
                                                        lineNumber: 317,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "jsx-bfd8f3f0f61b2a79" + " " + "col-address",
                                                        children: "Address"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/admin/users/page.js",
                                                        lineNumber: 318,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "jsx-bfd8f3f0f61b2a79" + " " + "col-sex",
                                                        children: "Sex"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/admin/users/page.js",
                                                        lineNumber: 319,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "jsx-bfd8f3f0f61b2a79" + " " + "col-birthday",
                                                        children: "Birthday"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/admin/users/page.js",
                                                        lineNumber: 320,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "jsx-bfd8f3f0f61b2a79" + " " + "col-action",
                                                        children: "Edit"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/admin/users/page.js",
                                                        lineNumber: 321,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "jsx-bfd8f3f0f61b2a79" + " " + "col-action",
                                                        children: "Delete"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/admin/users/page.js",
                                                        lineNumber: 322,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/admin/users/page.js",
                                                lineNumber: 311,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/users/page.js",
                                            lineNumber: 310,
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
                                                            lineNumber: 328,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            title: item.firstname,
                                                            className: "jsx-bfd8f3f0f61b2a79",
                                                            children: item.firstname
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/admin/users/page.js",
                                                            lineNumber: 329,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            title: item.fullname,
                                                            className: "jsx-bfd8f3f0f61b2a79",
                                                            children: item.fullname
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/admin/users/page.js",
                                                            lineNumber: 330,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            title: item.lastname,
                                                            className: "jsx-bfd8f3f0f61b2a79",
                                                            children: item.lastname
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/admin/users/page.js",
                                                            lineNumber: 331,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            title: item.username,
                                                            className: "jsx-bfd8f3f0f61b2a79",
                                                            children: item.username
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/admin/users/page.js",
                                                            lineNumber: 332,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            title: item.password,
                                                            className: "jsx-bfd8f3f0f61b2a79",
                                                            children: item.password ? '••••••••••••' : '-'
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/admin/users/page.js",
                                                            lineNumber: 333,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            title: item.address,
                                                            className: "jsx-bfd8f3f0f61b2a79",
                                                            children: item.address
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/admin/users/page.js",
                                                            lineNumber: 336,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "jsx-bfd8f3f0f61b2a79" + " " + "text-center",
                                                            children: item.sex
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/admin/users/page.js",
                                                            lineNumber: 337,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "jsx-bfd8f3f0f61b2a79",
                                                            children: item.birthday
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/admin/users/page.js",
                                                            lineNumber: 338,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "jsx-bfd8f3f0f61b2a79",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                href: `/admin/users/edit/${item.id}`,
                                                                className: "btn btn-warning",
                                                                children: "Edit"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/admin/users/page.js",
                                                                lineNumber: 340,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/admin/users/page.js",
                                                            lineNumber: 339,
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
                                                                        lineNumber: 350,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    " Del"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/admin/users/page.js",
                                                                lineNumber: 345,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/admin/users/page.js",
                                                            lineNumber: 344,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, item.id, true, {
                                                    fileName: "[project]/app/admin/users/page.js",
                                                    lineNumber: 327,
                                                    columnNumber: 21
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/users/page.js",
                                            lineNumber: 325,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/admin/users/page.js",
                                    lineNumber: 309,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/admin/users/page.js",
                                lineNumber: 308,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/admin/users/page.js",
                            lineNumber: 307,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/admin/users/page.js",
                    lineNumber: 303,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/admin/users/page.js",
                lineNumber: 302,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {
                className: "jsx-bfd8f3f0f61b2a79"
            }, void 0, false, {
                fileName: "[project]/app/admin/users/page.js",
                lineNumber: 361,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {
                className: "jsx-bfd8f3f0f61b2a79"
            }, void 0, false, {
                fileName: "[project]/app/admin/users/page.js",
                lineNumber: 361,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true);
}
_s(Page, "E85yb7BhBnl3/OpymRdjFiQJ97s=");
_c = Page;
var _c;
__turbopack_context__.k.register(_c, "Page");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=app_admin_users_page_a04b1dab.js.map