(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/Login/page.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Page
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function Page() {
    _s();
    const [username, setUsername] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [password, setPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [petals, setPetals] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    // ตรวจสอบว่าผู้ใช้ล็อกอินแล้วหรือไม่
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Page.useEffect": ()=>{
            if ("TURBOPACK compile-time truthy", 1) {
                const token = sessionStorage.getItem('token');
                if (token) {
                    // ถ้ามี token แล้ว redirect ไปหน้า admin
                    router.push('/admin/users');
                }
            }
        }
    }["Page.useEffect"], [
        router
    ]);
    // Generate petals on client side only
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Page.useEffect": ()=>{
            const generatedPetals = [
                ...Array(30)
            ].map({
                "Page.useEffect.generatedPetals": (_, i)=>{
                    const sizes = [
                        'size-small',
                        'size-medium',
                        'size-large'
                    ];
                    const colors = [
                        'color-light',
                        'color-pink',
                        'color-deep'
                    ];
                    const randomSize = sizes[Math.floor(Math.random() * sizes.length)];
                    const randomColor = colors[Math.floor(Math.random() * colors.length)];
                    return {
                        id: i,
                        size: randomSize,
                        color: randomColor
                    };
                }
            }["Page.useEffect.generatedPetals"]);
            setPetals(generatedPetals);
        }
    }["Page.useEffect"], []);
    // SweetAlert2 Functions
    const showSuccessAlert = ()=>{
        if ("object" !== 'undefined' && window.Swal) {
            window.Swal.fire({
                icon: 'success',
                title: '🌸 ようこそ! 🌸',
                text: 'Login Successfully!',
                background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)',
                color: '#e91e63',
                confirmButtonColor: '#e91e63',
                confirmButtonText: 'Enter Garden ✨',
                timer: 3000,
                timerProgressBar: true,
                showClass: {
                    popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                    popup: 'animate__animated animate__fadeOutUp'
                },
                customClass: {
                    popup: 'sakura-popup',
                    title: 'sakura-title',
                    content: 'sakura-content'
                }
            });
        }
    };
    const showErrorAlert = (message)=>{
        if ("object" !== 'undefined' && window.Swal) {
            window.Swal.fire({
                icon: 'error',
                title: '🚫 Login Failed!',
                text: message || 'Invalid Username or Password',
                background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)',
                color: '#ff6b6b',
                confirmButtonColor: '#ff6b6b',
                confirmButtonText: 'Try Again 🔄',
                footer: '<span style="color: #ff6b6b;">Please check your credentials</span>',
                showClass: {
                    popup: 'animate__animated animate__shakeX'
                },
                customClass: {
                    popup: 'sakura-popup-error',
                    title: 'sakura-title-error',
                    content: 'sakura-content'
                }
            });
        }
    };
    const handleLogin = async (e)=>{
        e.preventDefault();
        // ป้องกันการส่งซ้ำ
        if (isLoading) return;
        setIsLoading(true);
        try {
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
            console.log("username:", username);
            console.log("login response:", data);
            console.log("response status:", res.status);
            // ตรวจสอบ response status
            if (!res.ok) {
                throw new Error(data.message || 'Login failed');
            }
            if (data.token) {
                // เก็บ token และข้อมูลผู้ใช้
                if ("TURBOPACK compile-time truthy", 1) {
                    sessionStorage.setItem('token', data.token);
                    // เก็บข้อมูลเพิ่มเติมถ้ามี
                    if (data.user) {
                        sessionStorage.setItem('user', JSON.stringify(data.user));
                    }
                }
                // แสดงข้อความสำเร็จด้วย SweetAlert2
                showSuccessAlert();
                // Navigate หลังจาก 3 วินาที (ตาม timer ของ SweetAlert)
                setTimeout(()=>{
                    router.push('/admin/users');
                }, 3000);
            } else {
                throw new Error("No token returned from server");
            }
        } catch (error) {
            console.error("Login error:", error);
            // แสดงข้อความ error ด้วย SweetAlert2
            showErrorAlert("🌸 失敗 - Failed: ".concat(error.message || 'Login Failed!'));
            // ล้างข้อมูลฟอร์ม
            setPassword('');
        } finally{
            setIsLoading(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("link", {
                href: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css",
                rel: "stylesheet"
            }, void 0, false, {
                fileName: "[project]/app/Login/page.js",
                lineNumber: 153,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("link", {
                rel: "stylesheet",
                href: "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.0/font/bootstrap-icons.css"
            }, void 0, false, {
                fileName: "[project]/app/Login/page.js",
                lineNumber: 157,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("script", {
                src: "https://cdn.jsdelivr.net/npm/sweetalert2@11"
            }, void 0, false, {
                fileName: "[project]/app/Login/page.js",
                lineNumber: 163,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                dangerouslySetInnerHTML: {
                    __html: "\n          /* 🌸 Sakura Background with Trees */\n          body {\n            margin: 0;\n            padding: 0;\n            min-height: 100vh;\n            background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 30%, #2d1b1b 70%, #3d2f2f 100%) !important;\n            position: relative;\n            overflow-x: hidden;\n            font-family: 'Georgia', serif;\n          }\n          \n          /* Sakura Tree Silhouettes */\n          body::before {\n            content: '';\n            position: fixed;\n            top: 0;\n            left: 0;\n            width: 100%;\n            height: 100%;\n            background: \n              /* Tree silhouettes */\n              radial-gradient(ellipse 300px 400px at 10% 100%, rgba(30, 30, 30, 0.8) 0%, transparent 70%),\n              radial-gradient(ellipse 250px 350px at 90% 100%, rgba(30, 30, 30, 0.7) 0%, transparent 70%),\n              radial-gradient(ellipse 200px 300px at 25% 100%, rgba(35, 35, 35, 0.6) 0%, transparent 70%),\n              radial-gradient(ellipse 180px 280px at 75% 100%, rgba(35, 35, 35, 0.5) 0%, transparent 70%),\n              /* Sakura blossoms on trees */\n              radial-gradient(circle at 10% 70%, rgba(255, 182, 193, 0.3) 0%, transparent 40%),\n              radial-gradient(circle at 90% 65%, rgba(255, 192, 203, 0.25) 0%, transparent 40%),\n              radial-gradient(circle at 25% 75%, rgba(255, 182, 193, 0.2) 0%, transparent 35%),\n              radial-gradient(circle at 75% 70%, rgba(255, 192, 203, 0.2) 0%, transparent 35%),\n              /* Mountain silhouette */\n              linear-gradient(to bottom, transparent 60%, rgba(20, 20, 25, 0.4) 70%, rgba(25, 25, 30, 0.6) 85%, rgba(30, 30, 35, 0.8) 100%),\n              /* Ambient sakura glow */\n              radial-gradient(circle at 50% 30%, rgba(255, 182, 193, 0.08) 0%, transparent 60%);\n            pointer-events: none;\n            z-index: -2;\n          }\n          \n          /* Additional tree branches */\n          body::after {\n            content: '';\n            position: fixed;\n            top: 0;\n            left: 0;\n            width: 100%;\n            height: 100%;\n            background: \n              /* Tree branches */\n              linear-gradient(135deg, transparent 0%, rgba(40, 30, 30, 0.3) 15%, transparent 16%),\n              linear-gradient(45deg, transparent 0%, rgba(40, 30, 30, 0.2) 25%, transparent 26%),\n              linear-gradient(-45deg, transparent 0%, rgba(35, 25, 25, 0.25) 35%, transparent 36%),\n              /* More sakura clusters */\n              radial-gradient(circle at 15% 60%, rgba(255, 182, 193, 0.15) 0%, transparent 25%),\n              radial-gradient(circle at 85% 55%, rgba(255, 192, 203, 0.12) 0%, transparent 25%),\n              radial-gradient(circle at 30% 65%, rgba(255, 182, 193, 0.1) 0%, transparent 20%),\n              radial-gradient(circle at 70% 58%, rgba(255, 192, 203, 0.1) 0%, transparent 20%);\n            pointer-events: none;\n            z-index: -1;\n          }\n          \n          /* 🌸 Floating Sakura Petals */\n          .sakura-container {\n            position: fixed;\n            top: 0;\n            left: 0;\n            width: 100%;\n            height: 100%;\n            pointer-events: none;\n            z-index: 2;\n            overflow: hidden;\n          }\n          \n          .sakura-petal {\n            position: absolute;\n            border-radius: 50% 0 50% 0;\n            opacity: 0.8;\n            animation: sakuraFall linear infinite;\n          }\n          \n          /* Different sizes and colors */\n          .sakura-petal.size-small {\n            width: 8px;\n            height: 8px;\n            background: linear-gradient(45deg, #ffb6c1, #ffc0cb);\n          }\n          \n          .sakura-petal.size-medium {\n            width: 12px;\n            height: 12px;\n            background: linear-gradient(45deg, #ffa0b4, #ffb6c1);\n          }\n          \n          .sakura-petal.size-large {\n            width: 16px;\n            height: 16px;\n            background: linear-gradient(45deg, #ff91a4, #ffa0b4);\n          }\n          \n          .sakura-petal.color-light {\n            background: linear-gradient(45deg, #ffe4e6, #ffc0cb);\n            opacity: 0.6;\n          }\n          \n          .sakura-petal.color-pink {\n            background: linear-gradient(45deg, #ffb6c1, #ff91a4);\n            opacity: 0.8;\n          }\n          \n          .sakura-petal.color-deep {\n            background: linear-gradient(45deg, #ff91a4, #e91e63);\n            opacity: 0.7;\n          }\n          \n          /* Animation variations */\n          .sakura-petal:nth-child(1) { animation-duration: 12s; animation-delay: 0s; left: 5%; }\n          .sakura-petal:nth-child(2) { animation-duration: 15s; animation-delay: 1s; left: 15%; }\n          .sakura-petal:nth-child(3) { animation-duration: 18s; animation-delay: 2s; left: 25%; }\n          .sakura-petal:nth-child(4) { animation-duration: 14s; animation-delay: 0.5s; left: 35%; }\n          .sakura-petal:nth-child(5) { animation-duration: 16s; animation-delay: 1.5s; left: 45%; }\n          .sakura-petal:nth-child(6) { animation-duration: 13s; animation-delay: 2.5s; left: 55%; }\n          .sakura-petal:nth-child(7) { animation-duration: 17s; animation-delay: 3s; left: 65%; }\n          .sakura-petal:nth-child(8) { animation-duration: 11s; animation-delay: 0.8s; left: 75%; }\n          .sakura-petal:nth-child(9) { animation-duration: 19s; animation-delay: 1.8s; left: 85%; }\n          .sakura-petal:nth-child(10) { animation-duration: 14s; animation-delay: 2.8s; left: 95%; }\n          .sakura-petal:nth-child(11) { animation-duration: 16s; animation-delay: 3.5s; left: 8%; }\n          .sakura-petal:nth-child(12) { animation-duration: 12s; animation-delay: 4s; left: 18%; }\n          .sakura-petal:nth-child(13) { animation-duration: 20s; animation-delay: 0.3s; left: 28%; }\n          .sakura-petal:nth-child(14) { animation-duration: 15s; animation-delay: 4.5s; left: 38%; }\n          .sakura-petal:nth-child(15) { animation-duration: 13s; animation-delay: 1.2s; left: 48%; }\n          .sakura-petal:nth-child(16) { animation-duration: 17s; animation-delay: 5s; left: 58%; }\n          .sakura-petal:nth-child(17) { animation-duration: 14s; animation-delay: 2.2s; left: 68%; }\n          .sakura-petal:nth-child(18) { animation-duration: 18s; animation-delay: 5.5s; left: 78%; }\n          .sakura-petal:nth-child(19) { animation-duration: 11s; animation-delay: 3.2s; left: 88%; }\n          .sakura-petal:nth-child(20) { animation-duration: 16s; animation-delay: 6s; left: 12%; }\n          .sakura-petal:nth-child(21) { animation-duration: 13s; animation-delay: 4.2s; left: 22%; }\n          .sakura-petal:nth-child(22) { animation-duration: 19s; animation-delay: 6.5s; left: 32%; }\n          .sakura-petal:nth-child(23) { animation-duration: 15s; animation-delay: 5.2s; left: 42%; }\n          .sakura-petal:nth-child(24) { animation-duration: 12s; animation-delay: 7s; left: 52%; }\n          .sakura-petal:nth-child(25) { animation-duration: 17s; animation-delay: 6.2s; left: 62%; }\n          .sakura-petal:nth-child(26) { animation-duration: 14s; animation-delay: 7.5s; left: 72%; }\n          .sakura-petal:nth-child(27) { animation-duration: 16s; animation-delay: 8s; left: 82%; }\n          .sakura-petal:nth-child(28) { animation-duration: 18s; animation-delay: 7.2s; left: 92%; }\n          .sakura-petal:nth-child(29) { animation-duration: 13s; animation-delay: 8.5s; left: 6%; }\n          .sakura-petal:nth-child(30) { animation-duration: 20s; animation-delay: 9s; left: 16%; }\n          \n          @keyframes sakuraFall {\n            0% {\n              transform: translateY(-20px) rotate(0deg) translateX(0px);\n              opacity: 0;\n            }\n            10% {\n              opacity: 1;\n            }\n            20% {\n              transform: translateY(20vh) rotate(90deg) translateX(30px);\n              opacity: 0.9;\n            }\n            40% {\n              transform: translateY(40vh) rotate(180deg) translateX(-20px);\n              opacity: 0.8;\n            }\n            60% {\n              transform: translateY(60vh) rotate(270deg) translateX(40px);\n              opacity: 0.6;\n            }\n            80% {\n              transform: translateY(80vh) rotate(360deg) translateX(-10px);\n              opacity: 0.4;\n            }\n            90% {\n              opacity: 0.2;\n            }\n            100% {\n              transform: translateY(110vh) rotate(450deg) translateX(20px);\n              opacity: 0;\n            }\n          }\n          \n          /* 🎌 Main Container */\n          .main-container {\n            min-height: 100vh;\n            display: flex;\n            align-items: center;\n            justify-content: center;\n            padding: 20px 0;\n          }\n          \n          /* Override Bootstrap link styles */\n          .sakura-links .sakura-link {\n            color: #e91e63 !important;\n            text-decoration: none !important;\n            font-weight: 600 !important;\n            font-size: clamp(14px, 2vw, 16px) !important;\n            transition: all 0.3s ease !important;\n            position: relative !important;\n            display: inline-block !important;\n            padding: 8px 12px !important;\n            border-radius: 8px !important;\n            border: 2px solid transparent !important;\n            white-space: nowrap !important;\n            background-color: transparent !important;\n          }\n          \n          .sakura-links .sakura-link:hover {\n            color: #ffffff !important;\n            background-color: #e91e63 !important;\n            text-decoration: none !important;\n            border: 2px solid #e91e63 !important;\n            transform: translateY(-2px) !important;\n            box-shadow: 0 5px 15px rgba(233, 30, 99, 0.5) !important;\n          }\n          \n          .sakura-links .sakura-link:visited,\n          .sakura-links .sakura-link:focus,\n          .sakura-links .sakura-link:active {\n            color: #f8bbd9 !important;\n            background-color: transparent !important;\n            outline: none !important;\n            border: 2px solid transparent !important;\n            transform: none !important;\n            box-shadow: none !important;\n          }\n          \n          .sakura-links .sakura-link:focus:not(:hover) {\n            color: #e91e63 !important;\n            background-color: transparent !important;\n            border: 2px solid transparent !important;\n            transform: none !important;\n            box-shadow: none !important;\n          }\n          \n          /* 🌸 Card Styling */\n          .sakura-card {\n            background: rgba(13, 13, 13, 0.95) !important;\n            border: 3px solid #e91e63 !important;\n            border-radius: 20px !important;\n            box-shadow: \n              0 0 30px rgba(233, 30, 99, 0.4), \n              inset 0 1px 0 rgba(255, 255, 255, 0.1),\n              0 20px 40px rgba(0, 0, 0, 0.3) !important;\n            backdrop-filter: blur(15px);\n            animation: sakuraCardPulse 4s ease-in-out infinite alternate;\n            width: 100%;\n            max-width: 500px;\n            margin: 0 auto;\n          }\n          \n          @keyframes sakuraCardPulse {\n            0% { \n              box-shadow: \n                0 0 30px rgba(233, 30, 99, 0.4), \n                inset 0 1px 0 rgba(255, 255, 255, 0.1),\n                0 20px 40px rgba(0, 0, 0, 0.3); \n            }\n            100% { \n              box-shadow: \n                0 0 50px rgba(233, 30, 99, 0.7), \n                inset 0 1px 0 rgba(255, 255, 255, 0.1),\n                0 25px 50px rgba(0, 0, 0, 0.4); \n            }\n          }\n          \n          .sakura-header {\n            background: linear-gradient(135deg, #e91e63 0%, #ad1457 100%) !important;\n            color: white !important;\n            text-align: center !important;\n            font-family: 'Georgia', serif !important;\n            font-weight: bold !important;\n            font-size: clamp(1.2rem, 4vw, 1.6rem) !important;\n            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8) !important;\n            position: relative !important;\n            padding: clamp(20px, 5vw, 30px) !important;\n            border-radius: 17px 17px 0 0 !important;\n          }\n          \n          .sakura-body {\n            background: rgba(20, 20, 20, 0.95) !important;\n            padding: clamp(20px, 5vw, 40px) !important;\n            border-radius: 0 0 17px 17px !important;\n          }\n          \n          .sakura-label {\n            color: #e91e63 !important;\n            font-weight: bold !important;\n            font-family: 'Georgia', serif !important;\n            text-transform: uppercase !important;\n            letter-spacing: 1px !important;\n            font-size: clamp(12px, 2.5vw, 14px) !important;\n            margin-bottom: 8px !important;\n          }\n          \n          .sakura-input-group .input-group-text {\n            background: linear-gradient(135deg, #e91e63 0%, #ad1457 100%) !important;\n            border: 2px solid #e91e63 !important;\n            color: white !important;\n            font-weight: bold !important;\n            min-width: 50px !important;\n            display: flex !important;\n            align-items: center !important;\n            justify-content: center !important;\n          }\n          \n          .sakura-input {\n            background: rgba(10, 10, 10, 0.9) !important;\n            border: 2px solid #555 !important;\n            border-left: none !important;\n            color: #fff !important;\n            font-size: clamp(14px, 3vw, 16px) !important;\n            padding: clamp(10px, 3vw, 15px) !important;\n          }\n          \n          .sakura-input:focus {\n            background: rgba(10, 10, 10, 0.95) !important;\n            border-color: #e91e63 !important;\n            color: #fff !important;\n            box-shadow: 0 0 15px rgba(233, 30, 99, 0.4) !important;\n            outline: none !important;\n          }\n          \n          .sakura-input::placeholder {\n            color: #999 !important;\n            font-style: italic;\n          }\n          \n          .sakura-btn {\n            background: linear-gradient(135deg, #e91e63 0%, #ad1457 100%) !important;\n            border: 3px solid #e91e63 !important;\n            color: white !important;\n            padding: clamp(12px, 3vw, 18px) clamp(20px, 5vw, 30px) !important;\n            font-family: 'Georgia', serif !important;\n            font-weight: bold !important;\n            text-transform: uppercase !important;\n            letter-spacing: 2px !important;\n            font-size: clamp(14px, 3vw, 16px) !important;\n            border-radius: 12px !important;\n            width: 100% !important;\n            transition: all 0.3s ease !important;\n            position: relative;\n          }\n          \n          .sakura-btn:hover:not(:disabled) {\n            background: linear-gradient(135deg, #f06292 0%, #c2185b 100%) !important;\n            transform: translateY(-3px) !important;\n            box-shadow: 0 8px 25px rgba(233, 30, 99, 0.6) !important;\n            border-color: #f06292 !important;\n            color: white !important;\n          }\n          \n          .sakura-btn:disabled {\n            opacity: 0.7 !important;\n            cursor: not-allowed !important;\n            transform: none !important;\n            box-shadow: none !important;\n          }\n          \n          .loading-spinner {\n            display: inline-block;\n            width: 20px;\n            height: 20px;\n            border: 2px solid #ffffff;\n            border-radius: 50%;\n            border-top-color: transparent;\n            animation: spin 1s ease-in-out infinite;\n            margin-right: 10px;\n          }\n          \n          @keyframes spin {\n            to { transform: rotate(360deg); }\n          }\n          \n          .divider-sakura {\n            color: #e91e63 !important;\n            font-weight: bold !important;\n            font-size: clamp(8px, 2vw, 15px) !important;\n            text-shadow: 0 0 10px rgba(233, 30, 99, 0.6);\n            display: inline-block;\n          }\n          \n          .sakura-subtitle {\n            position: absolute;\n            top: -8px;\n            right: 20px;\n            font-size: clamp(10px, 2vw, 14px) !important;\n            color: rgba(255,255,255,0.7);\n          }\n          \n          /* 🍃 SweetAlert2 Custom Styles */\n          .sakura-popup {\n            border-radius: 20px !important;\n            border: 3px solid #e91e63 !important;\n            box-shadow: 0 0 40px rgba(233, 30, 99, 0.6) !important;\n          }\n          \n          .sakura-popup-error {\n            border-radius: 20px !important;\n            border: 3px solid #ff6b6b !important;\n            box-shadow: 0 0 40px rgba(255, 107, 107, 0.6) !important;\n          }\n          \n          .sakura-title {\n            font-family: 'Georgia', serif !important;\n            font-weight: bold !important;\n            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5) !important;\n          }\n          \n          .sakura-title-error {\n            font-family: 'Georgia', serif !important;\n            font-weight: bold !important;\n            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5) !important;\n          }\n          \n          .sakura-content {\n            font-family: 'Georgia', serif !important;\n          }\n          \n          /* 📱 Responsive Adjustments */\n          @media (max-width: 768px) {\n            .main-container {\n              padding: 15px;\n            }\n            \n            .sakura-card {\n              margin: 0 10px;\n              border-radius: 15px;\n            }\n            \n            .sakura-header {\n              border-radius: 12px 12px 0 0 !important;\n            }\n            \n            .sakura-body {\n              border-radius: 0 0 12px 12px !important;\n            }\n            \n            .sakura-links {\n              flex-direction: column;\n              gap: 15px;\n            }\n            \n            .sakura-links .sakura-link {\n              display: block !important;\n              text-align: center !important;\n              margin: 5px 0 !important;\n              padding: 12px 20px !important;\n            }\n            \n            .divider-sakura {\n              display: none;\n            }\n          }\n          \n          @media (max-width: 480px) {\n            .sakura-input-group .input-group-text {\n              min-width: 45px !important;\n              font-size: 14px;\n            }\n            \n            .sakura-subtitle {\n              display: none;\n            }\n          }\n          \n          /* Link Container Responsive */\n          .sakura-links {\n            display: flex;\n            flex-wrap: wrap;\n            justify-content: center;\n            align-items: center;\n            gap: 10px;\n          }\n          \n          @media (min-width: 769px) {\n            .sakura-links {\n              flex-direction: row;\n            }\n          }\n        "
                }
            }, void 0, false, {
                fileName: "[project]/app/Login/page.js",
                lineNumber: 165,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "sakura-container",
                children: petals.map((petal)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "sakura-petal ".concat(petal.size, " ").concat(petal.color)
                    }, petal.id, false, {
                        fileName: "[project]/app/Login/page.js",
                        lineNumber: 649,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/Login/page.js",
                lineNumber: 647,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "main-container",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container-fluid",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "row justify-content-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "card sakura-card",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "card-header sakura-header",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "sakura-subtitle",
                                                children: "ありがとう"
                                            }, void 0, false, {
                                                fileName: "[project]/app/Login/page.js",
                                                lineNumber: 662,
                                                columnNumber: 19
                                            }, this),
                                            "🌸 LOGIN SYSTEM 🌸"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/Login/page.js",
                                        lineNumber: 661,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "card-body sakura-body",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                            className: "row g-3 g-md-4",
                                            onSubmit: handleLogin,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "col-12",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "form-label sakura-label",
                                                            children: "🎌 Username"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/Login/page.js",
                                                            lineNumber: 670,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "input-group sakura-input-group",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "input-group-text",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                        className: "bi bi-person-circle"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/Login/page.js",
                                                                        lineNumber: 675,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/Login/page.js",
                                                                    lineNumber: 674,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "text",
                                                                    className: "form-control sakura-input",
                                                                    placeholder: "Enter Username",
                                                                    value: username,
                                                                    onChange: (e)=>setUsername(e.target.value),
                                                                    disabled: isLoading,
                                                                    required: true
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/Login/page.js",
                                                                    lineNumber: 677,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/Login/page.js",
                                                            lineNumber: 673,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/Login/page.js",
                                                    lineNumber: 669,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "col-12",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "form-label sakura-label",
                                                            children: "🔐 Password"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/Login/page.js",
                                                            lineNumber: 690,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "input-group sakura-input-group",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "input-group-text",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                        className: "bi bi-key"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/Login/page.js",
                                                                        lineNumber: 695,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/Login/page.js",
                                                                    lineNumber: 694,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "password",
                                                                    className: "form-control sakura-input",
                                                                    placeholder: "Enter Password",
                                                                    value: password,
                                                                    onChange: (e)=>setPassword(e.target.value),
                                                                    disabled: isLoading,
                                                                    required: true
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/Login/page.js",
                                                                    lineNumber: 697,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/Login/page.js",
                                                            lineNumber: 693,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/Login/page.js",
                                                    lineNumber: 689,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "col-12 mt-3 mt-md-4",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "submit",
                                                        className: "btn sakura-btn",
                                                        disabled: isLoading,
                                                        children: isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "loading-spinner"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/Login/page.js",
                                                                    lineNumber: 717,
                                                                    columnNumber: 29
                                                                }, this),
                                                                "🌸 Enter To the Site... 🌸"
                                                            ]
                                                        }, void 0, true) : '🏯 Entering To Login 🏯'
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/Login/page.js",
                                                        lineNumber: 710,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/Login/page.js",
                                                    lineNumber: 709,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "col-12 mt-3 mt-md-4",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-center sakura-links",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                href: "/Register",
                                                                className: "sakura-link",
                                                                children: "🌸 Create Account"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/Login/page.js",
                                                                lineNumber: 728,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "divider-sakura",
                                                                children: "🌸"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/Login/page.js",
                                                                lineNumber: 735,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                href: "/",
                                                                className: "sakura-link",
                                                                children: "🔑 Forgot Password"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/Login/page.js",
                                                                lineNumber: 737,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/Login/page.js",
                                                        lineNumber: 727,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/Login/page.js",
                                                    lineNumber: 726,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/Login/page.js",
                                            lineNumber: 667,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/Login/page.js",
                                        lineNumber: 666,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/Login/page.js",
                                lineNumber: 660,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/Login/page.js",
                            lineNumber: 659,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/Login/page.js",
                        lineNumber: 658,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/Login/page.js",
                    lineNumber: 657,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/Login/page.js",
                lineNumber: 656,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(Page, "PyjWsdlg2W+Sn2q1bq9a4VaS9u0=", false, function() {
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

//# sourceMappingURL=app_Login_page_6ed94672.js.map