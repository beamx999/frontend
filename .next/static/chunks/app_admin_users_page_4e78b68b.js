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
]);

//# sourceMappingURL=app_admin_users_page_4e78b68b.js.map