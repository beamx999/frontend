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
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [isAuthenticated, setIsAuthenticated] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [lastUpdate, setLastUpdate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    // ฟังก์ชันเช็ค authentication
    const checkAuth = ()=>{
        try {
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            const token = sessionStorage.getItem('token');
            if (!token) {
                console.log('No token found, redirecting to login');
                router.push('/Login');
                return false;
            }
            setIsAuthenticated(true);
            return true;
        } catch (err) {
            console.error('Error checking auth:', err);
            router.push('/Login');
            return false;
        }
    };
    // ฟังก์ชันดึงข้อมูล users
    const fetchUsers = async function() {
        let showLoading = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false;
        try {
            if (showLoading) setLoading(true);
            setError(null);
            // เช็ค window object
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            // เช็ค internet connection
            if (!navigator.onLine) {
                throw new Error('No internet connection');
            }
            const token = sessionStorage.getItem('token');
            if (!token) {
                console.log('No token found during fetch');
                router.push('/Login');
                return;
            }
            console.log('Fetching users from API...');
            // สร้าง AbortController สำหรับ timeout
            const controller = new AbortController();
            const timeoutId = setTimeout(()=>controller.abort(), 10000);
            const response = await fetch('https://backend-nextjs-virid.vercel.app/api/users', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                signal: controller.signal,
                cache: 'no-cache'
            });
            clearTimeout(timeoutId);
            console.log('API Response status:', response.status);
            // ตรวจสอบ authentication errors
            if (response.status === 401 || response.status === 403) {
                console.log('Authentication failed, clearing session');
                sessionStorage.clear();
                router.push('/Login');
                return;
            }
            if (!response.ok) {
                throw new Error("HTTP ".concat(response.status, ": ").concat(response.statusText));
            }
            const data = await response.json();
            console.log('Users data received:', (data === null || data === void 0 ? void 0 : data.length) || 0, 'items');
            if (Array.isArray(data)) {
                setItems(data);
                setLastUpdate(new Date());
            } else if (data && typeof data === 'object' && data.users) {
                setItems(data.users);
                setLastUpdate(new Date());
            } else {
                console.warn('Unexpected data format:', data);
                setItems([]);
                setLastUpdate(new Date());
            }
        } catch (err) {
            console.error('Error fetching users:', err);
            setError(err.message);
            // จัดการ error types
            if (err.name === 'AbortError') {
                setError('Request timeout - server response too slow');
            } else if (err.message.includes('Failed to fetch')) {
                setError('Network error - cannot connect to server');
            } else if (err.message.includes('No internet connection')) {
                setError('No internet connection');
            }
            // ถ้า error เกี่ยวกับ auth
            if (err.message.includes('401') || err.message.includes('403')) {
                sessionStorage.clear();
                router.push('/Login');
                return;
            }
        } finally{
            if (showLoading) setLoading(false);
        }
    };
    // Effect แรก - ตรวจสอบ auth และโหลดข้อมูลครั้งแรก
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Page.useEffect": ()=>{
            console.log('Component mounted, checking authentication...');
            if (checkAuth()) {
                console.log('Authentication passed, fetching initial data...');
                fetchUsers(true);
            }
        }
    }["Page.useEffect"], []);
    // Effect ที่สอง - Auto refresh (แยกออกมา)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Page.useEffect": ()=>{
            if (!isAuthenticated) return;
            console.log('Setting up auto-refresh...');
            const interval = setInterval({
                "Page.useEffect.interval": ()=>{
                    console.log('Auto-refresh triggered');
                    // เช็คสถานะก่อนรีเฟรช
                    if ("object" !== 'undefined' && navigator.onLine) {
                        const token = sessionStorage.getItem('token');
                        if (token) {
                            fetchUsers(false); // ไม่แสดง loading
                        } else {
                            console.log('No token in auto-refresh, redirecting');
                            clearInterval(interval);
                            router.push('/Login');
                        }
                    } else {
                        console.log('Offline or window undefined, skipping refresh');
                    }
                }
            }["Page.useEffect.interval"], 15000); // 15 วินาที
            return ({
                "Page.useEffect": ()=>{
                    console.log('Clearing auto-refresh interval');
                    clearInterval(interval);
                }
            })["Page.useEffect"];
        }
    }["Page.useEffect"], [
        isAuthenticated
    ]);
    // ฟังก์ชันลบ user
    const handleDelete = async (id)=>{
        if (!confirm('Are you sure you want to delete this user?')) {
            return;
        }
        try {
            const token = sessionStorage.getItem('token');
            if (!token) {
                router.push('/Login');
                return;
            }
            console.log('Deleting user ID:', id);
            const controller = new AbortController();
            const timeoutId = setTimeout(()=>controller.abort(), 10000);
            const response = await fetch("https://backend-nextjs-virid.vercel.app/api/users/".concat(id), {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },
                signal: controller.signal
            });
            clearTimeout(timeoutId);
            if (response.status === 401 || response.status === 403) {
                sessionStorage.clear();
                router.push('/Login');
                return;
            }
            if (!response.ok) {
                throw new Error("Failed to delete: HTTP ".concat(response.status));
            }
            console.log('User deleted successfully');
            alert('User deleted successfully!');
            // รีเฟรชข้อมูลหลังลบ
            setTimeout(()=>fetchUsers(false), 1000);
        } catch (err) {
            console.error('Error deleting user:', err);
            if (err.name === 'AbortError') {
                alert('Delete request timeout. Please try again.');
            } else {
                alert("Failed to delete user: ".concat(err.message));
            }
        }
    };
    // แสดง loading screen
    if (loading || !isAuthenticated) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                background: 'linear-gradient(135deg, #1a1a1a 0%, #2d1b2d 50%, #1a1a1a 100%)',
                color: '#ffffff'
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    textAlign: 'center',
                    padding: '40px',
                    background: 'rgba(0, 0, 0, 0.4)',
                    borderRadius: '15px',
                    backdropFilter: 'blur(10px)',
                    border: '2px solid rgba(220, 38, 38, 0.4)'
                },
                className: "jsx-7b580fbd0b64e6d5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'inline-block',
                            width: '40px',
                            height: '40px',
                            border: '4px solid #dc2626',
                            borderTop: '4px solid transparent',
                            borderRadius: '50%',
                            animation: 'spin 1s linear infinite',
                            marginBottom: '20px'
                        },
                        className: "jsx-7b580fbd0b64e6d5"
                    }, void 0, false, {
                        fileName: "[project]/app/admin/users/page.js",
                        lineNumber: 245,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "jsx-7b580fbd0b64e6d5",
                        children: "Loading Users Management..."
                    }, void 0, false, {
                        fileName: "[project]/app/admin/users/page.js",
                        lineNumber: 255,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "jsx-7b580fbd0b64e6d5",
                        children: "Please wait while we authenticate and load data"
                    }, void 0, false, {
                        fileName: "[project]/app/admin/users/page.js",
                        lineNumber: 256,
                        columnNumber: 11
                    }, this),
                    error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            color: '#ff6b6b',
                            marginTop: '15px',
                            padding: '10px',
                            background: 'rgba(255, 107, 107, 0.1)',
                            borderRadius: '5px',
                            border: '1px solid rgba(255, 107, 107, 0.3)'
                        },
                        className: "jsx-7b580fbd0b64e6d5",
                        children: [
                            "Error: ",
                            error,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {
                                className: "jsx-7b580fbd0b64e6d5"
                            }, void 0, false, {
                                fileName: "[project]/app/admin/users/page.js",
                                lineNumber: 267,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>fetchUsers(true),
                                style: {
                                    marginTop: '10px',
                                    padding: '8px 16px',
                                    background: '#dc2626',
                                    color: 'white',
                                    border: 'none',
                                    borderRadius: '5px',
                                    cursor: 'pointer'
                                },
                                className: "jsx-7b580fbd0b64e6d5",
                                children: "Retry"
                            }, void 0, false, {
                                fileName: "[project]/app/admin/users/page.js",
                                lineNumber: 268,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/admin/users/page.js",
                        lineNumber: 258,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        id: "7b580fbd0b64e6d5",
                        children: "@keyframes spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}"
                    }, void 0, false, void 0, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/admin/users/page.js",
                lineNumber: 237,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/admin/users/page.js",
            lineNumber: 229,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                id: "b36dda1b747f8081",
                children: 'body.jsx-b36dda1b747f8081{color:#fff;background:linear-gradient(135deg,#1a1a1a 0%,#2d1b2d 50%,#1a1a1a 100%);min-height:100vh;font-family:Segoe UI,Tahoma,Geneva,Verdana,sans-serif}.container.jsx-b36dda1b747f8081{-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);background:rgba(0,0,0,.4);border-radius:15px;max-width:100%;margin:0 auto;padding:25px;overflow-x:auto;box-shadow:0 8px 32px rgba(220,38,38,.2)}.card.jsx-b36dda1b747f8081{background:linear-gradient(145deg,#2a2a2a,#1a1a1a);border:2px solid rgba(220,38,38,.4);border-radius:15px;overflow:hidden;box-shadow:0 4px 25px rgba(0,0,0,.6),inset 0 1px rgba(220,38,38,.2)}.card-header.jsx-b36dda1b747f8081{color:#fff;text-align:center;text-shadow:2px 2px 4px rgba(0,0,0,.7);background:linear-gradient(90deg,#dc2626,#991b1b,#7f1d1d);border-bottom:3px solid rgba(220,38,38,.6);padding:20px;font-size:1.8rem;font-weight:700;position:relative}.card-header.jsx-b36dda1b747f8081:before{content:"";background:linear-gradient(90deg,transparent,rgba(255,255,255,.3),transparent);width:100%;height:100%;animation:3s infinite shine;position:absolute;top:0;left:-100%}@keyframes shine{0%{left:-100%}to{left:100%}}.card-body.jsx-b36dda1b747f8081{background:rgba(20,20,20,.95);padding:25px}.top-actions.jsx-b36dda1b747f8081{background:rgba(30,30,30,.8);border:1px solid rgba(220,38,38,.3);border-radius:10px;flex-wrap:wrap;justify-content:space-between;align-items:center;gap:10px;margin-bottom:20px;padding:15px;display:flex}.user-info.jsx-b36dda1b747f8081{color:#dc2626;font-weight:600}.btn-logout.jsx-b36dda1b747f8081,.btn-refresh.jsx-b36dda1b747f8081{color:#fff;cursor:pointer;background:linear-gradient(135deg,#991b1b,#7f1d1d);border:none;border-radius:8px;margin:0 5px;padding:8px 16px;font-weight:600;transition:all .3s}.btn-logout.jsx-b36dda1b747f8081:hover,.btn-refresh.jsx-b36dda1b747f8081:hover{background:linear-gradient(135deg,#7f1d1d,#450a0a);transform:translateY(-2px)}.table-container.jsx-b36dda1b747f8081{border-radius:10px;overflow-x:auto;box-shadow:inset 0 2px 15px rgba(0,0,0,.4)}.table.jsx-b36dda1b747f8081{background:rgba(35,35,35,.9);border-radius:10px;width:100%;min-width:1200px;margin-bottom:0;font-size:.95rem;overflow:hidden}.table.jsx-b36dda1b747f8081 thead.jsx-b36dda1b747f8081 th.jsx-b36dda1b747f8081{color:#fff;text-shadow:2px 2px 3px rgba(0,0,0,.8);white-space:nowrap;text-align:center;background:linear-gradient(135deg,#7f1d1d,#991b1b,#dc2626);border:none;padding:18px 12px;font-size:1rem;font-weight:700;position:relative}.table.jsx-b36dda1b747f8081 thead.jsx-b36dda1b747f8081 th.jsx-b36dda1b747f8081:after{content:"";opacity:.8;background:linear-gradient(90deg,#dc2626,#fca5a5,#dc2626);height:3px;position:absolute;bottom:0;left:0;right:0}.table.jsx-b36dda1b747f8081 tbody.jsx-b36dda1b747f8081 tr.jsx-b36dda1b747f8081{background:linear-gradient(rgba(45,45,45,.9),rgba(35,35,35,.95));border-bottom:1px solid rgba(220,38,38,.2);transition:all .3s}.table.jsx-b36dda1b747f8081 tbody.jsx-b36dda1b747f8081 tr.jsx-b36dda1b747f8081:hover{background:linear-gradient(rgba(127,29,29,.4),rgba(153,27,27,.3));transform:scale(1.002);box-shadow:0 4px 20px rgba(220,38,38,.3)}.table.jsx-b36dda1b747f8081 tbody.jsx-b36dda1b747f8081 td.jsx-b36dda1b747f8081{color:#000;vertical-align:middle;text-shadow:1px 1px 2px rgba(0,0,0,.6);text-overflow:ellipsis;white-space:nowrap;border:none;max-width:150px;padding:15px 12px;font-size:.9rem;font-weight:500;overflow:hidden}.table-striped.jsx-b36dda1b747f8081 tbody.jsx-b36dda1b747f8081 tr.jsx-b36dda1b747f8081:nth-child(odd){background:linear-gradient(rgba(50,50,50,.7),rgba(40,40,40,.8))}.col-id.jsx-b36dda1b747f8081{width:60px;min-width:60px}.col-name.jsx-b36dda1b747f8081{width:120px;min-width:120px}.col-username.jsx-b36dda1b747f8081{width:110px;min-width:110px}.col-password.jsx-b36dda1b747f8081{width:200px;min-width:200px}.col-address.jsx-b36dda1b747f8081{width:150px;min-width:150px}.col-sex.jsx-b36dda1b747f8081{width:70px;min-width:70px}.col-birthday.jsx-b36dda1b747f8081{width:120px;min-width:120px}.col-action.jsx-b36dda1b747f8081{width:90px;min-width:90px}.btn.jsx-b36dda1b747f8081{text-shadow:1px 1px 2px rgba(0,0,0,.6);cursor:pointer;border:none;border-radius:8px;margin:2px;padding:10px 16px;font-size:.85rem;font-weight:600;text-decoration:none;transition:all .3s;display:inline-block;position:relative;overflow:hidden}.btn.jsx-b36dda1b747f8081:before{content:"";background:linear-gradient(90deg,transparent,rgba(255,255,255,.3),transparent);width:100%;height:100%;transition:left .5s;position:absolute;top:0;left:-100%}.btn.jsx-b36dda1b747f8081:hover:before{left:100%}.btn-warning.jsx-b36dda1b747f8081{color:#fff;background:linear-gradient(135deg,#f59e0b,#d97706);box-shadow:0 4px 12px rgba(245,158,11,.4)}.btn-warning.jsx-b36dda1b747f8081:hover{color:#fff;background:linear-gradient(135deg,#d97706,#b45309);text-decoration:none;transform:translateY(-2px);box-shadow:0 6px 20px rgba(245,158,11,.6)}.btn-danger.jsx-b36dda1b747f8081{color:#fff;background:linear-gradient(135deg,#dc2626,#991b1b);box-shadow:0 4px 12px rgba(220,38,38,.4)}.btn-danger.jsx-b36dda1b747f8081:hover{background:linear-gradient(135deg,#991b1b,#7f1d1d);transform:translateY(-2px);box-shadow:0 6px 20px rgba(220,38,38,.6)}.text-center.jsx-b36dda1b747f8081{text-align:center;font-weight:700}.empty-state.jsx-b36dda1b747f8081{text-align:center;color:rgba(255,255,255,.7);padding:60px 20px}.empty-state.jsx-b36dda1b747f8081 h3.jsx-b36dda1b747f8081{color:#dc2626;margin-bottom:10px}.status-bar.jsx-b36dda1b747f8081{borderRadius:8px;fontSize:.85rem;color:rgba(255,255,255,.7);background:rgba(30,30,30,.6);flex-wrap:wrap;justify-content:space-between;align-items:center;gap:10px;margin-top:15px;padding:10px;display:flex}.error-message.jsx-b36dda1b747f8081{color:#ff6b6b;text-align:center;background:rgba(255,107,107,.1);border:1px solid rgba(255,107,107,.3);border-radius:8px;margin:15px 0;padding:15px}::-webkit-scrollbar{width:12px;height:12px}::-webkit-scrollbar-track{background:rgba(30,30,30,.8);border-radius:6px}::-webkit-scrollbar-thumb{background:linear-gradient(45deg,#dc2626,#991b1b);border:2px solid rgba(30,30,30,.8);border-radius:6px}.jsx-b36dda1b747f8081::-webkit-scrollbar-thumb:hover{background:linear-gradient(45deg,#991b1b,#7f1d1d)}.card.jsx-b36dda1b747f8081{position:relative}.card.jsx-b36dda1b747f8081:before{content:"";z-index:-1;opacity:.6;filter:blur(2px);background:linear-gradient(45deg,#dc2626,transparent,#dc2626,transparent,#dc2626);border-radius:18px;position:absolute;top:-3px;bottom:-3px;left:-3px;right:-3px}@media (max-width:768px){.container.jsx-b36dda1b747f8081{padding:15px}.table.jsx-b36dda1b747f8081{font-size:.8rem}.btn.jsx-b36dda1b747f8081{padding:8px 12px;font-size:.75rem}.top-actions.jsx-b36dda1b747f8081,.status-bar.jsx-b36dda1b747f8081{text-align:center;flex-direction:column}}'
            }, void 0, false, void 0, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {
                className: "jsx-b36dda1b747f8081"
            }, void 0, false, {
                fileName: "[project]/app/admin/users/page.js",
                lineNumber: 638,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {
                className: "jsx-b36dda1b747f8081"
            }, void 0, false, {
                fileName: "[project]/app/admin/users/page.js",
                lineNumber: 638,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {
                className: "jsx-b36dda1b747f8081"
            }, void 0, false, {
                fileName: "[project]/app/admin/users/page.js",
                lineNumber: 638,
                columnNumber: 19
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {
                className: "jsx-b36dda1b747f8081"
            }, void 0, false, {
                fileName: "[project]/app/admin/users/page.js",
                lineNumber: 638,
                columnNumber: 25
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-b36dda1b747f8081" + " " + "container",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "jsx-b36dda1b747f8081" + " " + "card",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-b36dda1b747f8081" + " " + "card-header",
                            children: "Users Management System"
                        }, void 0, false, {
                            fileName: "[project]/app/admin/users/page.js",
                            lineNumber: 641,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-b36dda1b747f8081" + " " + "card-body",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-b36dda1b747f8081" + " " + "top-actions",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-b36dda1b747f8081" + " " + "user-info",
                                            children: [
                                                "Welcome, Admin! (",
                                                items.length,
                                                " users found)"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/admin/users/page.js",
                                            lineNumber: 646,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-b36dda1b747f8081",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>fetchUsers(true),
                                                className: "jsx-b36dda1b747f8081" + " " + "btn-refresh",
                                                children: "🔄 Refresh"
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/users/page.js",
                                                lineNumber: 650,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/users/page.js",
                                            lineNumber: 649,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/admin/users/page.js",
                                    lineNumber: 645,
                                    columnNumber: 13
                                }, this),
                                error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-b36dda1b747f8081" + " " + "error-message",
                                    children: [
                                        "⚠️ ",
                                        error,
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {
                                            className: "jsx-b36dda1b747f8081"
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/users/page.js",
                                            lineNumber: 662,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>fetchUsers(true),
                                            style: {
                                                marginTop: '10px'
                                            },
                                            className: "jsx-b36dda1b747f8081" + " " + "btn btn-warning",
                                            children: "🔄 Try Again"
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/users/page.js",
                                            lineNumber: 663,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/admin/users/page.js",
                                    lineNumber: 660,
                                    columnNumber: 15
                                }, this),
                                items.length === 0 && !error ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-b36dda1b747f8081" + " " + "empty-state",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "jsx-b36dda1b747f8081",
                                            children: "No Users Found"
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/users/page.js",
                                            lineNumber: 675,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "jsx-b36dda1b747f8081",
                                            children: "There are no users in the system yet, or data is still loading."
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/users/page.js",
                                            lineNumber: 676,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>fetchUsers(true),
                                            style: {
                                                marginTop: '10px'
                                            },
                                            className: "jsx-b36dda1b747f8081" + " " + "btn btn-warning",
                                            children: "🔄 Load Data"
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/users/page.js",
                                            lineNumber: 677,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/admin/users/page.js",
                                    lineNumber: 674,
                                    columnNumber: 15
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-b36dda1b747f8081" + " " + "table-container",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                        className: "jsx-b36dda1b747f8081" + " " + "table table-striped table-hover",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                                className: "jsx-b36dda1b747f8081",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                    className: "jsx-b36dda1b747f8081",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "jsx-b36dda1b747f8081" + " " + "col-id text-center",
                                                            children: "Nunber"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/admin/users/page.js",
                                                            lineNumber: 690,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "jsx-b36dda1b747f8081" + " " + "col-name",
                                                            children: "Firstname"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/admin/users/page.js",
                                                            lineNumber: 691,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "jsx-b36dda1b747f8081" + " " + "col-name",
                                                            children: "Fullname"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/admin/users/page.js",
                                                            lineNumber: 692,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "jsx-b36dda1b747f8081" + " " + "col-name",
                                                            children: "Lastname"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/admin/users/page.js",
                                                            lineNumber: 693,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "jsx-b36dda1b747f8081" + " " + "col-username",
                                                            children: "Username"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/admin/users/page.js",
                                                            lineNumber: 694,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "jsx-b36dda1b747f8081" + " " + "col-password",
                                                            children: "Password"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/admin/users/page.js",
                                                            lineNumber: 695,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "jsx-b36dda1b747f8081" + " " + "col-address",
                                                            children: "Address"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/admin/users/page.js",
                                                            lineNumber: 696,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "jsx-b36dda1b747f8081" + " " + "col-sex",
                                                            children: "Sex"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/admin/users/page.js",
                                                            lineNumber: 697,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "jsx-b36dda1b747f8081" + " " + "col-birthday",
                                                            children: "Birthday"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/admin/users/page.js",
                                                            lineNumber: 698,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "jsx-b36dda1b747f8081" + " " + "col-action",
                                                            children: "Edit"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/admin/users/page.js",
                                                            lineNumber: 699,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "jsx-b36dda1b747f8081" + " " + "col-action",
                                                            children: "Delete"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/admin/users/page.js",
                                                            lineNumber: 700,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/admin/users/page.js",
                                                    lineNumber: 689,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/users/page.js",
                                                lineNumber: 688,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                className: "jsx-b36dda1b747f8081",
                                                children: items.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                        className: "jsx-b36dda1b747f8081",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "jsx-b36dda1b747f8081" + " " + "text-center",
                                                                children: item.id || index + 1
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/admin/users/page.js",
                                                                lineNumber: 706,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                title: item.firstname || '-',
                                                                className: "jsx-b36dda1b747f8081",
                                                                children: item.firstname || '-'
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/admin/users/page.js",
                                                                lineNumber: 707,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                title: item.fullname || '-',
                                                                className: "jsx-b36dda1b747f8081",
                                                                children: item.fullname || '-'
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/admin/users/page.js",
                                                                lineNumber: 708,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                title: item.lastname || '-',
                                                                className: "jsx-b36dda1b747f8081",
                                                                children: item.lastname || '-'
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/admin/users/page.js",
                                                                lineNumber: 709,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                title: item.username || '-',
                                                                className: "jsx-b36dda1b747f8081",
                                                                children: item.username || '-'
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/admin/users/page.js",
                                                                lineNumber: 710,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                title: item.password || '-',
                                                                className: "jsx-b36dda1b747f8081",
                                                                children: item.password ? '••••••••••••' : '-'
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/admin/users/page.js",
                                                                lineNumber: 711,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                title: item.address || '-',
                                                                className: "jsx-b36dda1b747f8081",
                                                                children: item.address || '-'
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/admin/users/page.js",
                                                                lineNumber: 714,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "jsx-b36dda1b747f8081" + " " + "text-center",
                                                                children: item.sex || '-'
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/admin/users/page.js",
                                                                lineNumber: 715,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "jsx-b36dda1b747f8081",
                                                                children: item.birthday || '-'
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/admin/users/page.js",
                                                                lineNumber: 716,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "jsx-b36dda1b747f8081",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                    href: "/admin/users/edit/".concat(item.id || index),
                                                                    className: "btn btn-warning",
                                                                    children: "Edit"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/admin/users/page.js",
                                                                    lineNumber: 718,
                                                                    columnNumber: 27
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/admin/users/page.js",
                                                                lineNumber: 717,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "jsx-b36dda1b747f8081",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    type: "button",
                                                                    onClick: ()=>handleDelete(item.id || index),
                                                                    className: "jsx-b36dda1b747f8081" + " " + "btn btn-danger",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                            className: "jsx-b36dda1b747f8081" + " " + "fa fa-trash"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/admin/users/page.js",
                                                                            lineNumber: 728,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        " Del"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/admin/users/page.js",
                                                                    lineNumber: 723,
                                                                    columnNumber: 27
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/admin/users/page.js",
                                                                lineNumber: 722,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, item.id || index, true, {
                                                        fileName: "[project]/app/admin/users/page.js",
                                                        lineNumber: 705,
                                                        columnNumber: 23
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/users/page.js",
                                                lineNumber: 703,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/admin/users/page.js",
                                        lineNumber: 687,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/admin/users/page.js",
                                    lineNumber: 686,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-b36dda1b747f8081" + " " + "status-bar",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "jsx-b36dda1b747f8081",
                                            children: [
                                                "Connection: ",
                                                typeof navigator !== 'undefined' && navigator.onLine ? '🟢 Online' : '🔴 Offline'
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/admin/users/page.js",
                                            lineNumber: 740,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "jsx-b36dda1b747f8081",
                                            children: [
                                                "Last updated: ",
                                                lastUpdate ? lastUpdate.toLocaleTimeString() : 'Never'
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/admin/users/page.js",
                                            lineNumber: 743,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "jsx-b36dda1b747f8081",
                                            children: "Auto-refresh: ⚡ Every 15 seconds"
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/users/page.js",
                                            lineNumber: 746,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/admin/users/page.js",
                                    lineNumber: 739,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/admin/users/page.js",
                            lineNumber: 644,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/admin/users/page.js",
                    lineNumber: 640,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/admin/users/page.js",
                lineNumber: 639,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {
                className: "jsx-b36dda1b747f8081"
            }, void 0, false, {
                fileName: "[project]/app/admin/users/page.js",
                lineNumber: 753,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {
                className: "jsx-b36dda1b747f8081"
            }, void 0, false, {
                fileName: "[project]/app/admin/users/page.js",
                lineNumber: 753,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true);
}
_s(Page, "CyS1NUC7OzZaYcENcL3Jyy5HOV8=", false, function() {
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

//# sourceMappingURL=_204f048a._.js.map