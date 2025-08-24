(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/components/Navbar.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Page
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sweetalert2$2f$dist$2f$sweetalert2$2e$all$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sweetalert2/dist/sweetalert2.all.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function Page() {
    _s();
    const [username, setUsername] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [password, setPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [petals, setPetals] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
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
            sessionStorage.setItem('token', data.token);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sweetalert2$2f$dist$2f$sweetalert2$2e$all$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].fire({
                icon: 'success',
                title: '<h3 style="color: #dc3545; font-family: serif;">戦士の帰還 - Warrior\'s Return</h3>',
                html: '<p style="color: #6c757d;">Login Successfully!</p>',
                background: '#1a1a1a',
                showConfirmButton: false,
                timer: 2000
            }).then(function() {
                router.push('/admin/users');
            });
        } else {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sweetalert2$2f$dist$2f$sweetalert2$2e$all$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].fire({
                icon: 'warning',
                title: '<h3 style="color: #dc3545; font-family: serif;">失敗 - Failed</h3>',
                html: '<p style="color: #6c757d;">Login Failed!</p>',
                background: '#1a1a1a',
                showConfirmButton: false,
                timer: 2000
            }).then(function() {
                router.push('/Login');
            });
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("link", {
                href: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css",
                rel: "stylesheet"
            }, void 0, false, {
                fileName: "[project]/app/components/Navbar.js",
                lineNumber: 69,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("link", {
                rel: "stylesheet",
                href: "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.0/font/bootstrap-icons.css"
            }, void 0, false, {
                fileName: "[project]/app/components/Navbar.js",
                lineNumber: 73,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                dangerouslySetInnerHTML: {
                    __html: "\n          /* Sakura Background with Trees */\n          body {\n            margin: 0;\n            padding: 0;\n            min-height: 100vh;\n            background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 30%, #2d1b1b 70%, #3d2f2f 100%) !important;\n            position: relative;\n            overflow-x: hidden;\n            font-family: 'Georgia', serif;\n          }\n          \n          /* Sakura Tree Silhouettes */\n          body::before {\n            content: '';\n            position: fixed;\n            top: 0;\n            left: 0;\n            width: 100%;\n            height: 100%;\n            background: \n              /* Tree silhouettes */\n              radial-gradient(ellipse 300px 400px at 10% 100%, rgba(30, 30, 30, 0.8) 0%, transparent 70%),\n              radial-gradient(ellipse 250px 350px at 90% 100%, rgba(30, 30, 30, 0.7) 0%, transparent 70%),\n              radial-gradient(ellipse 200px 300px at 25% 100%, rgba(35, 35, 35, 0.6) 0%, transparent 70%),\n              radial-gradient(ellipse 180px 280px at 75% 100%, rgba(35, 35, 35, 0.5) 0%, transparent 70%),\n              /* Sakura blossoms on trees */\n              radial-gradient(circle at 10% 70%, rgba(255, 182, 193, 0.3) 0%, transparent 40%),\n              radial-gradient(circle at 90% 65%, rgba(255, 192, 203, 0.25) 0%, transparent 40%),\n              radial-gradient(circle at 25% 75%, rgba(255, 182, 193, 0.2) 0%, transparent 35%),\n              radial-gradient(circle at 75% 70%, rgba(255, 192, 203, 0.2) 0%, transparent 35%),\n              /* Mountain silhouette */\n              linear-gradient(to bottom, transparent 60%, rgba(20, 20, 25, 0.4) 70%, rgba(25, 25, 30, 0.6) 85%, rgba(30, 30, 35, 0.8) 100%),\n              /* Ambient sakura glow */\n              radial-gradient(circle at 50% 30%, rgba(255, 182, 193, 0.08) 0%, transparent 60%);\n            pointer-events: none;\n            z-index: -2;\n          }\n          \n          /* Additional tree branches */\n          body::after {\n            content: '';\n            position: fixed;\n            top: 0;\n            left: 0;\n            width: 100%;\n            height: 100%;\n            background: \n              /* Tree branches */\n              linear-gradient(135deg, transparent 0%, rgba(40, 30, 30, 0.3) 15%, transparent 16%),\n              linear-gradient(45deg, transparent 0%, rgba(40, 30, 30, 0.2) 25%, transparent 26%),\n              linear-gradient(-45deg, transparent 0%, rgba(35, 25, 25, 0.25) 35%, transparent 36%),\n              /* More sakura clusters */\n              radial-gradient(circle at 15% 60%, rgba(255, 182, 193, 0.15) 0%, transparent 25%),\n              radial-gradient(circle at 85% 55%, rgba(255, 192, 203, 0.12) 0%, transparent 25%),\n              radial-gradient(circle at 30% 65%, rgba(255, 182, 193, 0.1) 0%, transparent 20%),\n              radial-gradient(circle at 70% 58%, rgba(255, 192, 203, 0.1) 0%, transparent 20%);\n            pointer-events: none;\n            z-index: -1;\n          }\n          \n          /* Floating Sakura Petals - More and Varied */\n          .sakura-container {\n            position: fixed;\n            top: 0;\n            left: 0;\n            width: 100%;\n            height: 100%;\n            pointer-events: none;\n            z-index: 2;\n            overflow: hidden;\n          }\n          \n          .sakura-petal {\n            position: absolute;\n            border-radius: 50% 0 50% 0;\n            opacity: 0.8;\n            animation: sakuraFall linear infinite;\n          }\n          \n          /* Different sizes and colors */\n          .sakura-petal.size-small {\n            width: 8px;\n            height: 8px;\n            background: linear-gradient(45deg, #ffb6c1, #ffc0cb);\n          }\n          \n          .sakura-petal.size-medium {\n            width: 12px;\n            height: 12px;\n            background: linear-gradient(45deg, #ffa0b4, #ffb6c1);\n          }\n          \n          .sakura-petal.size-large {\n            width: 16px;\n            height: 16px;\n            background: linear-gradient(45deg, #ff91a4, #ffa0b4);\n          }\n          \n          .sakura-petal.color-light {\n            background: linear-gradient(45deg, #ffe4e6, #ffc0cb);\n            opacity: 0.6;\n          }\n          \n          .sakura-petal.color-pink {\n            background: linear-gradient(45deg, #ffb6c1, #ff91a4);\n            opacity: 0.8;\n          }\n          \n          .sakura-petal.color-deep {\n            background: linear-gradient(45deg, #ff91a4, #e91e63);\n            opacity: 0.7;\n          }\n          \n          /* Animation variations */\n          .sakura-petal:nth-child(1) { animation-duration: 12s; animation-delay: 0s; left: 5%; }\n          .sakura-petal:nth-child(2) { animation-duration: 15s; animation-delay: 1s; left: 15%; }\n          .sakura-petal:nth-child(3) { animation-duration: 18s; animation-delay: 2s; left: 25%; }\n          .sakura-petal:nth-child(4) { animation-duration: 14s; animation-delay: 0.5s; left: 35%; }\n          .sakura-petal:nth-child(5) { animation-duration: 16s; animation-delay: 1.5s; left: 45%; }\n          .sakura-petal:nth-child(6) { animation-duration: 13s; animation-delay: 2.5s; left: 55%; }\n          .sakura-petal:nth-child(7) { animation-duration: 17s; animation-delay: 3s; left: 65%; }\n          .sakura-petal:nth-child(8) { animation-duration: 11s; animation-delay: 0.8s; left: 75%; }\n          .sakura-petal:nth-child(9) { animation-duration: 19s; animation-delay: 1.8s; left: 85%; }\n          .sakura-petal:nth-child(10) { animation-duration: 14s; animation-delay: 2.8s; left: 95%; }\n          .sakura-petal:nth-child(11) { animation-duration: 16s; animation-delay: 3.5s; left: 8%; }\n          .sakura-petal:nth-child(12) { animation-duration: 12s; animation-delay: 4s; left: 18%; }\n          .sakura-petal:nth-child(13) { animation-duration: 20s; animation-delay: 0.3s; left: 28%; }\n          .sakura-petal:nth-child(14) { animation-duration: 15s; animation-delay: 4.5s; left: 38%; }\n          .sakura-petal:nth-child(15) { animation-duration: 13s; animation-delay: 1.2s; left: 48%; }\n          .sakura-petal:nth-child(16) { animation-duration: 17s; animation-delay: 5s; left: 58%; }\n          .sakura-petal:nth-child(17) { animation-duration: 14s; animation-delay: 2.2s; left: 68%; }\n          .sakura-petal:nth-child(18) { animation-duration: 18s; animation-delay: 5.5s; left: 78%; }\n          .sakura-petal:nth-child(19) { animation-duration: 11s; animation-delay: 3.2s; left: 88%; }\n          .sakura-petal:nth-child(20) { animation-duration: 16s; animation-delay: 6s; left: 12%; }\n          .sakura-petal:nth-child(21) { animation-duration: 13s; animation-delay: 4.2s; left: 22%; }\n          .sakura-petal:nth-child(22) { animation-duration: 19s; animation-delay: 6.5s; left: 32%; }\n          .sakura-petal:nth-child(23) { animation-duration: 15s; animation-delay: 5.2s; left: 42%; }\n          .sakura-petal:nth-child(24) { animation-duration: 12s; animation-delay: 7s; left: 52%; }\n          .sakura-petal:nth-child(25) { animation-duration: 17s; animation-delay: 6.2s; left: 62%; }\n          .sakura-petal:nth-child(26) { animation-duration: 14s; animation-delay: 7.5s; left: 72%; }\n          .sakura-petal:nth-child(27) { animation-duration: 16s; animation-delay: 8s; left: 82%; }\n          .sakura-petal:nth-child(28) { animation-duration: 18s; animation-delay: 7.2s; left: 92%; }\n          .sakura-petal:nth-child(29) { animation-duration: 13s; animation-delay: 8.5s; left: 6%; }\n          .sakura-petal:nth-child(30) { animation-duration: 20s; animation-delay: 9s; left: 16%; }\n          \n          @keyframes sakuraFall {\n            0% {\n              transform: translateY(-20px) rotate(0deg) translateX(0px);\n              opacity: 0;\n            }\n            10% {\n              opacity: 1;\n            }\n            20% {\n              transform: translateY(20vh) rotate(90deg) translateX(30px);\n              opacity: 0.9;\n            }\n            40% {\n              transform: translateY(40vh) rotate(180deg) translateX(-20px);\n              opacity: 0.8;\n            }\n            60% {\n              transform: translateY(60vh) rotate(270deg) translateX(40px);\n              opacity: 0.6;\n            }\n            80% {\n              transform: translateY(80vh) rotate(360deg) translateX(-10px);\n              opacity: 0.4;\n            }\n            90% {\n              opacity: 0.2;\n            }\n            100% {\n              transform: translateY(110vh) rotate(450deg) translateX(20px);\n              opacity: 0;\n            }\n          }\n          \n          /* Main Container */\n          .main-container {\n            min-height: 100vh;\n            display: flex;\n            align-items: center;\n            justify-content: center;\n            padding: 20px 0;\n          }\n          \n          /* Override Bootstrap link styles */\n          .samurai-links .samurai-link {\n            color: #dc3545 !important;\n            text-decoration: none !important;\n            font-weight: 600 !important;\n            font-size: clamp(14px, 2vw, 16px) !important;\n            transition: all 0.3s ease !important;\n            position: relative !important;\n            display: inline-block !important;\n            padding: 8px 12px !important;\n            border-radius: 8px !important;\n            border: 2px solid transparent !important;\n            white-space: nowrap !important;\n            background-color: transparent !important;\n          }\n          \n          .samurai-links .samurai-link:hover {\n            color: #ffffff !important;\n            background-color: #dc3545 !important;\n            text-decoration: none !important;\n            border: 2px solid #dc3545 !important;\n            transform: translateY(-2px) !important;\n            box-shadow: 0 5px 15px rgba(220, 53, 69, 0.4) !important;\n          }\n          \n          .samurai-links .samurai-link:visited,\n          .samurai-links .samurai-link:focus,\n          .samurai-links .samurai-link:active {\n            color: #dc3545 !important;\n            background-color: transparent !important;\n            outline: none !important;\n            border: 2px solid transparent !important;\n            transform: none !important;\n            box-shadow: none !important;\n          }\n          \n          .samurai-links .samurai-link:focus:not(:hover) {\n            color: #dc3545 !important;\n            background-color: transparent !important;\n            border: 2px solid transparent !important;\n            transform: none !important;\n            box-shadow: none !important;\n          }\n          \n          /* Card Styling */\n          .samurai-card {\n            background: rgba(13, 13, 13, 0.95) !important;\n            border: 3px solid #dc3545 !important;\n            border-radius: 20px !important;\n            box-shadow: \n              0 0 30px rgba(220, 53, 69, 0.3), \n              inset 0 1px 0 rgba(255, 255, 255, 0.1),\n              0 20px 40px rgba(0, 0, 0, 0.3) !important;\n            backdrop-filter: blur(15px);\n            animation: cardPulse 4s ease-in-out infinite alternate;\n            width: 100%;\n            max-width: 500px;\n            margin: 0 auto;\n          }\n          \n          @keyframes cardPulse {\n            0% { \n              box-shadow: \n                0 0 30px rgba(220, 53, 69, 0.3), \n                inset 0 1px 0 rgba(255, 255, 255, 0.1),\n                0 20px 40px rgba(0, 0, 0, 0.3); \n            }\n            100% { \n              box-shadow: \n                0 0 50px rgba(220, 53, 69, 0.6), \n                inset 0 1px 0 rgba(255, 255, 255, 0.1),\n                0 25px 50px rgba(0, 0, 0, 0.4); \n            }\n          }\n          \n          .samurai-header {\n            background: linear-gradient(135deg, #dc3545 0%, #a71e2a 100%) !important;\n            color: white !important;\n            text-align: center !important;\n            font-family: 'Georgia', serif !important;\n            font-weight: bold !important;\n            font-size: clamp(1.2rem, 4vw, 1.6rem) !important;\n            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8) !important;\n            position: relative !important;\n            padding: clamp(20px, 5vw, 30px) !important;\n            border-radius: 17px 17px 0 0 !important;\n          }\n          \n          .samurai-body {\n            background: rgba(20, 20, 20, 0.95) !important;\n            padding: clamp(20px, 5vw, 40px) !important;\n            border-radius: 0 0 17px 17px !important;\n          }\n          \n          .samurai-label {\n            color: #dc3545 !important;\n            font-weight: bold !important;\n            font-family: 'Georgia', serif !important;\n            text-transform: uppercase !important;\n            letter-spacing: 1px !important;\n            font-size: clamp(12px, 2.5vw, 14px) !important;\n            margin-bottom: 8px !important;\n          }\n          \n          .samurai-input-group .input-group-text {\n            background: linear-gradient(135deg, #dc3545 0%, #a71e2a 100%) !important;\n            border: 2px solid #dc3545 !important;\n            color: white !important;\n            font-weight: bold !important;\n            min-width: 50px !important;\n            display: flex !important;\n            align-items: center !important;\n            justify-content: center !important;\n          }\n          \n          .samurai-input {\n            background: rgba(10, 10, 10, 0.9) !important;\n            border: 2px solid #555 !important;\n            border-left: none !important;\n            color: #fff !important;\n            font-size: clamp(14px, 3vw, 16px) !important;\n            padding: clamp(10px, 3vw, 15px) !important;\n          }\n          \n          .samurai-input:focus {\n            background: rgba(10, 10, 10, 0.95) !important;\n            border-color: #dc3545 !important;\n            color: #fff !important;\n            box-shadow: 0 0 15px rgba(220, 53, 69, 0.3) !important;\n            outline: none !important;\n          }\n          \n          .samurai-input::placeholder {\n            color: #999 !important;\n            font-style: italic;\n          }\n          \n          .samurai-btn {\n            background: linear-gradient(135deg, #dc3545 0%, #a71e2a 100%) !important;\n            border: 3px solid #dc3545 !important;\n            color: white !important;\n            padding: clamp(12px, 3vw, 18px) clamp(20px, 5vw, 30px) !important;\n            font-family: 'Georgia', serif !important;\n            font-weight: bold !important;\n            text-transform: uppercase !important;\n            letter-spacing: 2px !important;\n            font-size: clamp(14px, 3vw, 16px) !important;\n            border-radius: 12px !important;\n            width: 100% !important;\n            transition: all 0.3s ease !important;\n          }\n          \n          .samurai-btn:hover {\n            background: linear-gradient(135deg, #e63946 0%, #b71c2c 100%) !important;\n            transform: translateY(-3px) !important;\n            box-shadow: 0 8px 25px rgba(220, 53, 69, 0.5) !important;\n            border-color: #e63946 !important;\n            color: white !important;\n          }\n          \n          .divider-samurai {\n            color: #dc3545 !important;\n            font-weight: bold !important;\n            font-size: clamp(16px, 4vw, 20px) !important;\n            margin: 0 clamp(10px, 3vw, 20px) !important;\n            text-shadow: 0 0 10px rgba(220, 53, 69, 0.5);\n            display: inline-block;\n          }\n          \n          .samurai-subtitle {\n            position: absolute;\n            top: -8px;\n            right: 20px;\n            font-size: clamp(10px, 2vw, 14px) !important;\n            color: rgba(255,255,255,0.7);\n          }\n          \n          /* Responsive Adjustments */\n          @media (max-width: 768px) {\n            .main-container {\n              padding: 15px;\n            }\n            \n            .samurai-card {\n              margin: 0 10px;\n              border-radius: 15px;\n            }\n            \n            .samurai-header {\n              border-radius: 12px 12px 0 0 !important;\n            }\n            \n            .samurai-body {\n              border-radius: 0 0 12px 12px !important;\n            }\n            \n            .samurai-links {\n              flex-direction: column;\n              gap: 15px;\n            }\n            \n            .samurai-links .samurai-link {\n              display: block !important;\n              text-align: center !important;\n              margin: 5px 0 !important;\n              padding: 12px 20px !important;\n            }\n            \n            .divider-samurai {\n              display: none;\n            }\n          }\n          \n          @media (max-width: 480px) {\n            .samurai-input-group .input-group-text {\n              min-width: 45px !important;\n              font-size: 14px;\n            }\n            \n            .samurai-subtitle {\n              display: none;\n            }\n          }\n          \n          /* Link Container Responsive */\n          .samurai-links {\n            display: flex;\n            flex-wrap: wrap;\n            justify-content: center;\n            align-items: center;\n            gap: 10px;\n          }\n          \n          @media (min-width: 769px) {\n            .samurai-links {\n              flex-direction: row;\n            }\n          }\n        "
                }
            }, void 0, false, {
                fileName: "[project]/app/components/Navbar.js",
                lineNumber: 78,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "sakura-container",
                children: petals.map((petal)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "sakura-petal ".concat(petal.size, " ").concat(petal.color)
                    }, petal.id, false, {
                        fileName: "[project]/app/components/Navbar.js",
                        lineNumber: 511,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/components/Navbar.js",
                lineNumber: 509,
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
                                className: "card samurai-card",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "card-header samurai-header",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "samurai-subtitle",
                                                children: "ありがとう"
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/Navbar.js",
                                                lineNumber: 524,
                                                columnNumber: 19
                                            }, this),
                                            "⚔️ Login Portal ⚔️"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/Navbar.js",
                                        lineNumber: 523,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "card-body samurai-body",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                            className: "row g-3 g-md-4",
                                            onSubmit: handleLogin,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "col-12",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "form-label samurai-label",
                                                            children: "⚔️ Username"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/Navbar.js",
                                                            lineNumber: 532,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "input-group samurai-input-group",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "input-group-text",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                        className: "bi bi-person-vcard"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/components/Navbar.js",
                                                                        lineNumber: 537,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/components/Navbar.js",
                                                                    lineNumber: 536,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "text",
                                                                    className: "form-control samurai-input",
                                                                    placeholder: "Enter your warrior name",
                                                                    value: username,
                                                                    onChange: (e)=>setUsername(e.target.value),
                                                                    required: true
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/components/Navbar.js",
                                                                    lineNumber: 539,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/components/Navbar.js",
                                                            lineNumber: 535,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/components/Navbar.js",
                                                    lineNumber: 531,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "col-12",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "form-label samurai-label",
                                                            children: "🗡️ Password"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/Navbar.js",
                                                            lineNumber: 551,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "input-group samurai-input-group",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "input-group-text",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                        className: "bi bi-shield-lock"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/components/Navbar.js",
                                                                        lineNumber: 556,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/components/Navbar.js",
                                                                    lineNumber: 555,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "password",
                                                                    className: "form-control samurai-input",
                                                                    placeholder: "Enter your secret code",
                                                                    value: password,
                                                                    onChange: (e)=>setPassword(e.target.value),
                                                                    required: true
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/components/Navbar.js",
                                                                    lineNumber: 558,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/components/Navbar.js",
                                                            lineNumber: 554,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/components/Navbar.js",
                                                    lineNumber: 550,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "col-12 mt-3 mt-md-4",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "submit",
                                                        className: "btn samurai-btn",
                                                        children: "🏯 Enter the Dojo 🏯"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/Navbar.js",
                                                        lineNumber: 570,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/Navbar.js",
                                                    lineNumber: 569,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "col-12 mt-3 mt-md-4",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-center samurai-links",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                href: "/Register",
                                                                className: "samurai-link",
                                                                children: "🛡️ Create Account"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/components/Navbar.js",
                                                                lineNumber: 577,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "divider-samurai",
                                                                children: "⚔️"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/components/Navbar.js",
                                                                lineNumber: 584,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                href: "/",
                                                                className: "samurai-link",
                                                                children: "🔑 Forget Password"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/components/Navbar.js",
                                                                lineNumber: 586,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/components/Navbar.js",
                                                        lineNumber: 576,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/Navbar.js",
                                                    lineNumber: 575,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/Navbar.js",
                                            lineNumber: 529,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/Navbar.js",
                                        lineNumber: 528,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/Navbar.js",
                                lineNumber: 522,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/components/Navbar.js",
                            lineNumber: 521,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/components/Navbar.js",
                        lineNumber: 520,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/components/Navbar.js",
                    lineNumber: 519,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/components/Navbar.js",
                lineNumber: 518,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(Page, "zRE7+Xet/h9AILRlmPuExVEdCQw=", false, function() {
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
"[project]/app/components/Footer.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Footer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function Footer() {
    _s();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    if (pathname === '/Contact') {
        return null;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("link", {
                href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css",
                rel: "stylesheet"
            }, void 0, false, {
                fileName: "[project]/app/components/Footer.js",
                lineNumber: 13,
                columnNumber: 3
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                dangerouslySetInnerHTML: {
                    __html: "\n        :root {\n            --primary-gradient: linear-gradient(135deg, #1a0000 0%, #330000 50%, #1a0000 100%);\n            --secondary-gradient: linear-gradient(135deg, #DC143C 0%, #8B0000 100%);\n            --accent-color: #DC143C;\n            --text-dark: #2d3436;\n            --text-light: #636e72;\n            --shadow-red: rgba(220, 20, 60, 0.3);\n            --glow-red: rgba(220, 20, 60, 0.6);\n        }\n\n        * {\n            font-family: 'Inter', sans-serif;\n        }\n\n        body {\n            overflow-x: hidden;\n        }\n\n        .hero-section {\n            background: var(--primary-gradient);\n            min-height: 60vh;\n            display: flex;\n            align-items: center;\n            position: relative;\n            color: white;\n        }\n\n        .hero-section::before {\n            content: '';\n            position: absolute;\n            top: 0;\n            left: 0;\n            right: 0;\n            bottom: 0;\n            background: url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 1000 100\" fill=\"none\"><path d=\"M0,0 C150,100 350,0 500,50 C650,100 850,0 1000,50 L1000,0 Z\" fill=\"rgba(255,255,255,0.1)\"/></svg>') no-repeat center bottom;\n            background-size: cover;\n        }\n\n        .hero-content {\n            position: relative;\n            z-index: 2;\n        }\n\n        .section-title {\n            position: relative;\n            margin-bottom: 3rem;\n        }\n\n        .section-title::after {\n            content: '';\n            position: absolute;\n            bottom: -10px;\n            left: 50%;\n            transform: translateX(-50%);\n            width: 60px;\n            height: 4px;\n            background: var(--accent-color);\n            border-radius: 2px;\n        }\n\n        .card-modern {\n            border: none;\n            border-radius: 20px;\n            box-shadow: 0 20px 40px rgba(0,0,0,0.1);\n            transition: all 0.3s ease;\n            overflow: hidden;\n            background: white;\n        }\n\n        .card-modern:hover {\n            transform: translateY(-10px);\n            box-shadow: 0 30px 60px rgba(0,0,0,0.15);\n        }\n\n        .stats-card {\n            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\n            color: white;\n            text-align: center;\n            padding: 2rem;\n            border-radius: 20px;\n            margin-bottom: 2rem;\n        }\n\n        .stats-number {\n            font-size: 3rem;\n            font-weight: 700;\n            display: block;\n        }\n\n        .team-card {\n            text-align: center;\n            padding: 2rem;\n        }\n\n        .team-avatar {\n            width: 120px;\n            height: 120px;\n            border-radius: 50%;\n            background: var(--secondary-gradient);\n            display: flex;\n            align-items: center;\n            justify-content: center;\n            margin: 0 auto 1rem;\n            font-size: 3rem;\n            color: white;\n        }\n\n        .values-icon {\n            width: 80px;\n            height: 80px;\n            background: var(--primary-gradient);\n            border-radius: 50%;\n            display: flex;\n            align-items: center;\n            justify-content: center;\n            margin: 0 auto 1rem;\n            font-size: 2rem;\n            color: white;\n        }\n\n        .floating-shapes {\n            position: absolute;\n            width: 100%;\n            height: 100%;\n            overflow: hidden;\n            z-index: 1;\n        }\n\n        .shape {\n            position: absolute;\n            opacity: 0.1;\n            animation: float 6s ease-in-out infinite;\n        }\n\n        .shape-1 {\n            top: 20%;\n            left: 10%;\n            animation-delay: 0s;\n        }\n\n        .shape-2 {\n            top: 60%;\n            right: 10%;\n            animation-delay: 2s;\n        }\n\n        .shape-3 {\n            bottom: 20%;\n            left: 20%;\n            animation-delay: 4s;\n        }\n\n        @keyframes float {\n            0%, 100% { transform: translateY(0px) rotate(0deg); }\n            50% { transform: translateY(-20px) rotate(10deg); }\n        }\n\n        .btn-modern {\n            background: var(--primary-gradient);\n            border: none;\n            border-radius: 50px;\n            padding: 12px 30px;\n            color: white;\n            font-weight: 500;\n            transition: all 0.3s ease;\n        }\n\n        .btn-modern:hover {\n            transform: translateY(-2px);\n            box-shadow: 0 10px 25px rgba(102, 126, 234, 0.3);\n            color: white;\n        }\n\n        .timeline {\n            position: relative;\n            padding: 2rem 0;\n        }\n\n        .timeline::before {\n            content: '';\n            position: absolute;\n            top: 0;\n            left: 50%;\n            width: 4px;\n            height: 100%;\n            background: var(--accent-color);\n            transform: translateX(-50%);\n        }\n\n        .timeline-item {\n            position: relative;\n            margin-bottom: 3rem;\n        }\n\n        .timeline-content {\n            background: white;\n            padding: 2rem;\n            border-radius: 15px;\n            box-shadow: 0 15px 35px rgba(0,0,0,0.1);\n            width: 45%;\n        }\n\n        .timeline-item:nth-child(odd) .timeline-content {\n            margin-left: auto;\n        }\n\n        .timeline-dot {\n            position: absolute;\n            top: 50%;\n            left: 50%;\n            width: 20px;\n            height: 20px;\n            background: var(--accent-color);\n            border-radius: 50%;\n            transform: translate(-50%, -50%);\n            border: 4px solid white;\n            box-shadow: 0 0 0 4px var(--accent-color);\n        }\n\n        @media (max-width: 768px) {\n            .timeline::before {\n                left: 20px;\n            }\n            \n            .timeline-content {\n                width: calc(100% - 60px);\n                margin-left: 60px !important;\n            }\n            \n            .timeline-dot {\n                left: 20px;\n            }\n        }\n\n        .section-padding {\n            padding: 80px 0;\n        }\n\n        /* Footer Dark Red Theme with Glow Effects */\n        .footer-dark-red {\n            background: var(--primary-gradient);\n            position: relative;\n            overflow: hidden;\n        }\n\n        .footer-dark-red::before {\n            content: '';\n            position: absolute;\n            top: 0;\n            left: 0;\n            right: 0;\n            bottom: 0;\n            background: radial-gradient(\n                ellipse at center,\n                rgba(220, 20, 60, 0.1) 0%,\n                rgba(139, 0, 0, 0.05) 50%,\n                rgba(0, 0, 0, 0.1) 100%\n            );\n            animation: pulse-bg 4s ease-in-out infinite;\n        }\n\n        .footer-content {\n            position: relative;\n            z-index: 2;\n        }\n\n        .footer-brand {\n            color:rgb(0, 255, 170);\n            font-weight: 700;\n            font-size: 1.5rem;\n            text-shadow: \n                0 0 10px var(--glow-red),\n                0 0 20px var(--shadow-red),\n                0 0 30px rgba(220, 20, 60, 0.2);\n            animation: glow-text 3s ease-in-out infinite alternate;\n        }\n\n        .footer-description {\n            color: rgba(255, 255, 255, 0.8);\n            text-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);\n            line-height: 1.6;\n        }\n\n        .social-links-modern {\n            display: flex;\n            gap: 1rem;\n            justify-content: flex-end;\n        }\n\n        .social-link-modern {\n            display: inline-flex;\n            align-items: center;\n            justify-content: center;\n            width: 50px;\n            height: 50px;\n            border-radius: 50%;\n            background: linear-gradient(135deg, rgba(220, 20, 60, 0.2) 0%, rgba(0, 0, 0, 0.8) 100%);\n            border: 2px solid rgba(220, 20, 60, 0.3);\n            color: #fff;\n            text-decoration: none;\n            font-size: 1.2rem;\n            transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);\n            position: relative;\n            box-shadow: \n                0 5px 15px rgba(0, 0, 0, 0.4),\n                inset 0 1px 0 rgba(255, 255, 255, 0.1);\n        }\n\n        .social-link-modern::before {\n            content: '';\n            position: absolute;\n            top: -2px;\n            left: -2px;\n            right: -2px;\n            bottom: -2px;\n            background: linear-gradient(45deg, transparent, var(--glow-red), transparent);\n            border-radius: 50%;\n            opacity: 0;\n            transition: opacity 0.3s ease;\n            animation: rotate-glow 3s linear infinite;\n        }\n\n        .social-link-modern:hover::before {\n            opacity: 1;\n        }\n\n        .social-link-modern:hover {\n            transform: translateY(-8px) scale(1.1);\n            color: #fff;\n            text-decoration: none;\n            box-shadow: \n                0 15px 35px rgba(0, 0, 0, 0.6),\n                0 0 25px var(--glow-red),\n                inset 0 1px 0 rgba(255, 255, 255, 0.2);\n        }\n\n        .social-link-modern.facebook:hover {\n            border-color: #1877F2;\n            background: linear-gradient(135deg, #1877F2 0%, rgba(0, 0, 0, 0.9) 100%);\n            box-shadow: \n                0 15px 35px rgba(0, 0, 0, 0.6),\n                0 0 25px rgba(24, 119, 242, 0.6),\n                inset 0 1px 0 rgba(255, 255, 255, 0.2);\n        }\n\n        .social-link-modern.twitter:hover {\n            border-color: #1DA1F2;\n            background: linear-gradient(135deg, #1DA1F2 0%, rgba(0, 0, 0, 0.9) 100%);\n            box-shadow: \n                0 15px 35px rgba(0, 0, 0, 0.6),\n                0 0 25px rgba(29, 161, 242, 0.6),\n                inset 0 1px 0 rgba(255, 255, 255, 0.2);\n        }\n\n        .social-link-modern.instagram:hover {\n            border-color: #E4405F;\n            background: linear-gradient(135deg, #E4405F 0%, rgba(0, 0, 0, 0.9) 100%);\n            box-shadow: \n                0 15px 35px rgba(0, 0, 0, 0.6),\n                0 0 25px rgba(228, 64, 95, 0.6),\n                inset 0 1px 0 rgba(255, 255, 255, 0.2);\n        }\n\n        .social-link-modern.email:hover {\n            border-color: #DC143C;\n            background: linear-gradient(135deg, #DC143C 0%, rgba(0, 0, 0, 0.9) 100%);\n            box-shadow: \n                0 15px 35px rgba(0, 0, 0, 0.6),\n                0 0 25px var(--glow-red),\n                inset 0 1px 0 rgba(255, 255, 255, 0.2);\n        }\n\n        .footer-divider {\n            height: 2px;\n            background: linear-gradient(90deg, transparent 0%, #DC143C 50%, transparent 100%);\n            margin: 2rem 0;\n            box-shadow: 0 0 10px var(--glow-red);\n            animation: glow-line 3s ease-in-out infinite;\n        }\n\n        .footer-copyright {\n            color: rgba(255, 255, 255, 0.7);\n            font-size: 0.9rem;\n            text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);\n        }\n\n        /* Animations */\n        @keyframes pulse-bg {\n            0%, 100% {\n                opacity: 0.3;\n            }\n            50% {\n                opacity: 0.6;\n            }\n        }\n\n        @keyframes glow-text {\n            from {\n                text-shadow: \n                    0 0 10px var(--glow-red),\n                    0 0 20px var(--shadow-red),\n                    0 0 30px rgba(220, 20, 60, 0.2);\n            }\n            to {\n                text-shadow: \n                    0 0 20px var(--glow-red),\n                    0 0 30px var(--shadow-red),\n                    0 0 40px rgba(220, 20, 60, 0.4);\n            }\n        }\n\n        @keyframes glow-line {\n            0%, 100% {\n                box-shadow: 0 0 10px var(--glow-red);\n            }\n            50% {\n                box-shadow: 0 0 20px var(--glow-red), 0 0 30px var(--shadow-red);\n            }\n        }\n\n        @keyframes rotate-glow {\n            from {\n                transform: rotate(0deg);\n            }\n            to {\n                transform: rotate(360deg);\n            }\n        }\n\n        /* Mobile Responsive */\n        @media (max-width: 768px) {\n            .social-links-modern {\n                justify-content: center;\n                margin: 2rem 0;\n            }\n\n            .footer-brand {\n                text-align: center;\n                margin-bottom: 1rem;\n            }\n\n            .footer-description {\n                text-align: center;\n            }\n\n            .footer-copyright {\n                text-align: center;\n                margin-top: 1rem;\n            }\n        }\n\n        @media (max-width: 576px) {\n            .social-link-modern {\n                width: 45px;\n                height: 45px;\n                font-size: 1rem;\n            }\n\n            .social-links-modern {\n                gap: 0.8rem;\n            }\n        }\n    "
                }
            }, void 0, false, {
                fileName: "[project]/app/components/Footer.js",
                lineNumber: 14,
                columnNumber: 3
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                className: "footer-dark-red text-white py-5",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container footer-content",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "row align-items-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "col-lg-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                            className: "footer-brand mb-3",
                                            children: "บริษัท เทคโนโลยี จำกัด"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/Footer.js",
                                            lineNumber: 19,
                                            columnNumber: 11
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "footer-description",
                                            children: [
                                                "สร้างสรรค์นวัตกรรมที่เปลี่ยนโลก",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                    fileName: "[project]/app/components/Footer.js",
                                                    lineNumber: 21,
                                                    columnNumber: 44
                                                }, this),
                                                "ด้วยเทคโนโลยีที่ทันสมัยและทีมงานมืออาชีพ"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/Footer.js",
                                            lineNumber: 20,
                                            columnNumber: 11
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/Footer.js",
                                    lineNumber: 18,
                                    columnNumber: 9
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "col-lg-6",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "social-links-modern",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "https://facebook.com",
                                                className: "social-link-modern facebook",
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                                "aria-label": "Facebook",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                    className: "fab fa-facebook-f"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/Footer.js",
                                                    lineNumber: 34,
                                                    columnNumber: 15
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/Footer.js",
                                                lineNumber: 27,
                                                columnNumber: 13
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "https://line.me",
                                                className: "social-link-modern line",
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                                "aria-label": "Line",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                    className: "fab fa-line"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/Footer.js",
                                                    lineNumber: 43,
                                                    columnNumber: 15
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/Footer.js",
                                                lineNumber: 36,
                                                columnNumber: 13
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "https://instagram.com",
                                                className: "social-link-modern instagram",
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                                "aria-label": "Instagram",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                    className: "fab fa-instagram"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/Footer.js",
                                                    lineNumber: 52,
                                                    columnNumber: 15
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/Footer.js",
                                                lineNumber: 45,
                                                columnNumber: 13
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "https://youtube.com",
                                                className: "social-link-modern youtube",
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                                "aria-label": "YouTube",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                    className: "fab fa-youtube"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/Footer.js",
                                                    lineNumber: 61,
                                                    columnNumber: 15
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/Footer.js",
                                                lineNumber: 54,
                                                columnNumber: 13
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "mailto:contact@example.com",
                                                className: "social-link-modern email",
                                                "aria-label": "Email",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                    className: "fas fa-envelope"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/Footer.js",
                                                    lineNumber: 68,
                                                    columnNumber: 15
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/Footer.js",
                                                lineNumber: 63,
                                                columnNumber: 13
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/Footer.js",
                                        lineNumber: 26,
                                        columnNumber: 11
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/components/Footer.js",
                                    lineNumber: 25,
                                    columnNumber: 9
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/Footer.js",
                            lineNumber: 17,
                            columnNumber: 7
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "footer-divider"
                        }, void 0, false, {
                            fileName: "[project]/app/components/Footer.js",
                            lineNumber: 74,
                            columnNumber: 7
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "row",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "col-12",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "footer-copyright text-center mb-0",
                                    children: "© 2025 All rights reserved. Made with ❤️"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/Footer.js",
                                    lineNumber: 78,
                                    columnNumber: 11
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/components/Footer.js",
                                lineNumber: 77,
                                columnNumber: 9
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/components/Footer.js",
                            lineNumber: 76,
                            columnNumber: 7
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/Footer.js",
                    lineNumber: 16,
                    columnNumber: 5
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/components/Footer.js",
                lineNumber: 15,
                columnNumber: 3
            }, this)
        ]
    }, void 0, true);
}
_s(Footer, "xbyQPtUVMO7MNj7WjJlpdWqRcTo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = Footer;
var _c;
__turbopack_context__.k.register(_c, "Footer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=app_components_bd265473._.js.map