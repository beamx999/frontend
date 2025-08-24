module.exports = [
"[project]/app/Login/page.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Page
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
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
function Page() {
    const [username, setUsername] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [password, setPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [petals, setPetals] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    // ตรวจสอบว่าผู้ใช้ล็อกอินแล้วหรือไม่
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
    }, [
        router
    ]);
    // Generate petals on client side only
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const generatedPetals = [
            ...Array(30)
        ].map((_, i)=>{
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
        });
        setPetals(generatedPetals);
    }, []);
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
                if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
                ;
                await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sweetalert2$2f$dist$2f$sweetalert2$2e$esm$2e$all$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].fire({
                    icon: 'success',
                    title: '<h3 style="color: #dc3545; font-family: serif;">戦士の帰還 - Warrior\'s Return</h3>',
                    html: '<p style="color: #6c757d;">Login Successfully!</p>',
                    background: '#1a1a1a',
                    showConfirmButton: false,
                    timer: 2000
                });
                // Navigate หลังจาก SweetAlert ปิด
                router.push('/admin/users');
            } else {
                throw new Error("No token returned from server");
            }
        } catch (error) {
            console.error("Login error:", error);
            await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sweetalert2$2f$dist$2f$sweetalert2$2e$esm$2e$all$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].fire({
                icon: 'error',
                title: '<h3 style="color: #dc3545; font-family: serif;">失敗 - Failed</h3>',
                html: `<p style="color: #6c757d;">${error.message || 'Login Failed!'}</p>`,
                background: '#1a1a1a',
                showConfirmButton: false,
                timer: 3000
            });
            // ล้างข้อมูลฟอร์ม
            setPassword('');
        } finally{
            setIsLoading(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("link", {
                href: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css",
                rel: "stylesheet"
            }, void 0, false, {
                fileName: "[project]/app/Login/page.js",
                lineNumber: 113,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("link", {
                rel: "stylesheet",
                href: "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.0/font/bootstrap-icons.css"
            }, void 0, false, {
                fileName: "[project]/app/Login/page.js",
                lineNumber: 117,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                dangerouslySetInnerHTML: {
                    __html: `
          /* Sakura Background with Trees */
          body {
            margin: 0;
            padding: 0;
            min-height: 100vh;
            background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 30%, #2d1b1b 70%, #3d2f2f 100%) !important;
            position: relative;
            overflow-x: hidden;
            font-family: 'Georgia', serif;
          }
          
          /* Sakura Tree Silhouettes */
          body::before {
            content: '';
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: 
              /* Tree silhouettes */
              radial-gradient(ellipse 300px 400px at 10% 100%, rgba(30, 30, 30, 0.8) 0%, transparent 70%),
              radial-gradient(ellipse 250px 350px at 90% 100%, rgba(30, 30, 30, 0.7) 0%, transparent 70%),
              radial-gradient(ellipse 200px 300px at 25% 100%, rgba(35, 35, 35, 0.6) 0%, transparent 70%),
              radial-gradient(ellipse 180px 280px at 75% 100%, rgba(35, 35, 35, 0.5) 0%, transparent 70%),
              /* Sakura blossoms on trees */
              radial-gradient(circle at 10% 70%, rgba(255, 182, 193, 0.3) 0%, transparent 40%),
              radial-gradient(circle at 90% 65%, rgba(255, 192, 203, 0.25) 0%, transparent 40%),
              radial-gradient(circle at 25% 75%, rgba(255, 182, 193, 0.2) 0%, transparent 35%),
              radial-gradient(circle at 75% 70%, rgba(255, 192, 203, 0.2) 0%, transparent 35%),
              /* Mountain silhouette */
              linear-gradient(to bottom, transparent 60%, rgba(20, 20, 25, 0.4) 70%, rgba(25, 25, 30, 0.6) 85%, rgba(30, 30, 35, 0.8) 100%),
              /* Ambient sakura glow */
              radial-gradient(circle at 50% 30%, rgba(255, 182, 193, 0.08) 0%, transparent 60%);
            pointer-events: none;
            z-index: -2;
          }
          
          /* Additional tree branches */
          body::after {
            content: '';
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: 
              /* Tree branches */
              linear-gradient(135deg, transparent 0%, rgba(40, 30, 30, 0.3) 15%, transparent 16%),
              linear-gradient(45deg, transparent 0%, rgba(40, 30, 30, 0.2) 25%, transparent 26%),
              linear-gradient(-45deg, transparent 0%, rgba(35, 25, 25, 0.25) 35%, transparent 36%),
              /* More sakura clusters */
              radial-gradient(circle at 15% 60%, rgba(255, 182, 193, 0.15) 0%, transparent 25%),
              radial-gradient(circle at 85% 55%, rgba(255, 192, 203, 0.12) 0%, transparent 25%),
              radial-gradient(circle at 30% 65%, rgba(255, 182, 193, 0.1) 0%, transparent 20%),
              radial-gradient(circle at 70% 58%, rgba(255, 192, 203, 0.1) 0%, transparent 20%);
            pointer-events: none;
            z-index: -1;
          }
          
          /* Floating Sakura Petals - More and Varied */
          .sakura-container {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: 2;
            overflow: hidden;
          }
          
          .sakura-petal {
            position: absolute;
            border-radius: 50% 0 50% 0;
            opacity: 0.8;
            animation: sakuraFall linear infinite;
          }
          
          /* Different sizes and colors */
          .sakura-petal.size-small {
            width: 8px;
            height: 8px;
            background: linear-gradient(45deg, #ffb6c1, #ffc0cb);
          }
          
          .sakura-petal.size-medium {
            width: 12px;
            height: 12px;
            background: linear-gradient(45deg, #ffa0b4, #ffb6c1);
          }
          
          .sakura-petal.size-large {
            width: 16px;
            height: 16px;
            background: linear-gradient(45deg, #ff91a4, #ffa0b4);
          }
          
          .sakura-petal.color-light {
            background: linear-gradient(45deg, #ffe4e6, #ffc0cb);
            opacity: 0.6;
          }
          
          .sakura-petal.color-pink {
            background: linear-gradient(45deg, #ffb6c1, #ff91a4);
            opacity: 0.8;
          }
          
          .sakura-petal.color-deep {
            background: linear-gradient(45deg, #ff91a4, #e91e63);
            opacity: 0.7;
          }
          
          /* Animation variations */
          .sakura-petal:nth-child(1) { animation-duration: 12s; animation-delay: 0s; left: 5%; }
          .sakura-petal:nth-child(2) { animation-duration: 15s; animation-delay: 1s; left: 15%; }
          .sakura-petal:nth-child(3) { animation-duration: 18s; animation-delay: 2s; left: 25%; }
          .sakura-petal:nth-child(4) { animation-duration: 14s; animation-delay: 0.5s; left: 35%; }
          .sakura-petal:nth-child(5) { animation-duration: 16s; animation-delay: 1.5s; left: 45%; }
          .sakura-petal:nth-child(6) { animation-duration: 13s; animation-delay: 2.5s; left: 55%; }
          .sakura-petal:nth-child(7) { animation-duration: 17s; animation-delay: 3s; left: 65%; }
          .sakura-petal:nth-child(8) { animation-duration: 11s; animation-delay: 0.8s; left: 75%; }
          .sakura-petal:nth-child(9) { animation-duration: 19s; animation-delay: 1.8s; left: 85%; }
          .sakura-petal:nth-child(10) { animation-duration: 14s; animation-delay: 2.8s; left: 95%; }
          .sakura-petal:nth-child(11) { animation-duration: 16s; animation-delay: 3.5s; left: 8%; }
          .sakura-petal:nth-child(12) { animation-duration: 12s; animation-delay: 4s; left: 18%; }
          .sakura-petal:nth-child(13) { animation-duration: 20s; animation-delay: 0.3s; left: 28%; }
          .sakura-petal:nth-child(14) { animation-duration: 15s; animation-delay: 4.5s; left: 38%; }
          .sakura-petal:nth-child(15) { animation-duration: 13s; animation-delay: 1.2s; left: 48%; }
          .sakura-petal:nth-child(16) { animation-duration: 17s; animation-delay: 5s; left: 58%; }
          .sakura-petal:nth-child(17) { animation-duration: 14s; animation-delay: 2.2s; left: 68%; }
          .sakura-petal:nth-child(18) { animation-duration: 18s; animation-delay: 5.5s; left: 78%; }
          .sakura-petal:nth-child(19) { animation-duration: 11s; animation-delay: 3.2s; left: 88%; }
          .sakura-petal:nth-child(20) { animation-duration: 16s; animation-delay: 6s; left: 12%; }
          .sakura-petal:nth-child(21) { animation-duration: 13s; animation-delay: 4.2s; left: 22%; }
          .sakura-petal:nth-child(22) { animation-duration: 19s; animation-delay: 6.5s; left: 32%; }
          .sakura-petal:nth-child(23) { animation-duration: 15s; animation-delay: 5.2s; left: 42%; }
          .sakura-petal:nth-child(24) { animation-duration: 12s; animation-delay: 7s; left: 52%; }
          .sakura-petal:nth-child(25) { animation-duration: 17s; animation-delay: 6.2s; left: 62%; }
          .sakura-petal:nth-child(26) { animation-duration: 14s; animation-delay: 7.5s; left: 72%; }
          .sakura-petal:nth-child(27) { animation-duration: 16s; animation-delay: 8s; left: 82%; }
          .sakura-petal:nth-child(28) { animation-duration: 18s; animation-delay: 7.2s; left: 92%; }
          .sakura-petal:nth-child(29) { animation-duration: 13s; animation-delay: 8.5s; left: 6%; }
          .sakura-petal:nth-child(30) { animation-duration: 20s; animation-delay: 9s; left: 16%; }
          
          @keyframes sakuraFall {
            0% {
              transform: translateY(-20px) rotate(0deg) translateX(0px);
              opacity: 0;
            }
            10% {
              opacity: 1;
            }
            20% {
              transform: translateY(20vh) rotate(90deg) translateX(30px);
              opacity: 0.9;
            }
            40% {
              transform: translateY(40vh) rotate(180deg) translateX(-20px);
              opacity: 0.8;
            }
            60% {
              transform: translateY(60vh) rotate(270deg) translateX(40px);
              opacity: 0.6;
            }
            80% {
              transform: translateY(80vh) rotate(360deg) translateX(-10px);
              opacity: 0.4;
            }
            90% {
              opacity: 0.2;
            }
            100% {
              transform: translateY(110vh) rotate(450deg) translateX(20px);
              opacity: 0;
            }
          }
          
          /* Main Container */
          .main-container {
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 20px 0;
          }
          
          /* Override Bootstrap link styles */
          .samurai-links .samurai-link {
            color: #dc3545 !important;
            text-decoration: none !important;
            font-weight: 600 !important;
            font-size: clamp(14px, 2vw, 16px) !important;
            transition: all 0.3s ease !important;
            position: relative !important;
            display: inline-block !important;
            padding: 8px 12px !important;
            border-radius: 8px !important;
            border: 2px solid transparent !important;
            white-space: nowrap !important;
            background-color: transparent !important;
          }
          
          .samurai-links .samurai-link:hover {
            color: #ffffff !important;
            background-color: #dc3545 !important;
            text-decoration: none !important;
            border: 2px solid #dc3545 !important;
            transform: translateY(-2px) !important;
            box-shadow: 0 5px 15px rgba(220, 53, 69, 0.4) !important;
          }
          
          .samurai-links .samurai-link:visited,
          .samurai-links .samurai-link:focus,
          .samurai-links .samurai-link:active {
            color: #fdb3b3ff !important;
            background-color: transparent !important;
            outline: none !important;
            border: 2px solid transparent !important;
            transform: none !important;
            box-shadow: none !important;
          }
          
          .samurai-links .samurai-link:focus:not(:hover) {
            color: #dc3545 !important;
            background-color: transparent !important;
            border: 2px solid transparent !important;
            transform: none !important;
            box-shadow: none !important;
          }
          
          /* Card Styling */
          .samurai-card {
            background: rgba(13, 13, 13, 0.95) !important;
            border: 3px solid #dc3545 !important;
            border-radius: 20px !important;
            box-shadow: 
              0 0 30px rgba(220, 53, 69, 0.3), 
              inset 0 1px 0 rgba(255, 255, 255, 0.1),
              0 20px 40px rgba(0, 0, 0, 0.3) !important;
            backdrop-filter: blur(15px);
            animation: cardPulse 4s ease-in-out infinite alternate;
            width: 100%;
            max-width: 500px;
            margin: 0 auto;
          }
          
          @keyframes cardPulse {
            0% { 
              box-shadow: 
                0 0 30px rgba(220, 53, 69, 0.3), 
                inset 0 1px 0 rgba(255, 255, 255, 0.1),
                0 20px 40px rgba(0, 0, 0, 0.3); 
            }
            100% { 
              box-shadow: 
                0 0 50px rgba(220, 53, 69, 0.6), 
                inset 0 1px 0 rgba(255, 255, 255, 0.1),
                0 25px 50px rgba(0, 0, 0, 0.4); 
            }
          }
          
          .samurai-header {
            background: linear-gradient(135deg, #dc3545 0%, #a71e2a 100%) !important;
            color: white !important;
            text-align: center !important;
            font-family: 'Georgia', serif !important;
            font-weight: bold !important;
            font-size: clamp(1.2rem, 4vw, 1.6rem) !important;
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8) !important;
            position: relative !important;
            padding: clamp(20px, 5vw, 30px) !important;
            border-radius: 17px 17px 0 0 !important;
          }
          
          .samurai-body {
            background: rgba(20, 20, 20, 0.95) !important;
            padding: clamp(20px, 5vw, 40px) !important;
            border-radius: 0 0 17px 17px !important;
          }
          
          .samurai-label {
            color: #dc3545 !important;
            font-weight: bold !important;
            font-family: 'Georgia', serif !important;
            text-transform: uppercase !important;
            letter-spacing: 1px !important;
            font-size: clamp(12px, 2.5vw, 14px) !important;
            margin-bottom: 8px !important;
          }
          
          .samurai-input-group .input-group-text {
            background: linear-gradient(135deg, #dc3545 0%, #a71e2a 100%) !important;
            border: 2px solid #dc3545 !important;
            color: white !important;
            font-weight: bold !important;
            min-width: 50px !important;
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
          }
          
          .samurai-input {
            background: rgba(10, 10, 10, 0.9) !important;
            border: 2px solid #555 !important;
            border-left: none !important;
            color: #fff !important;
            font-size: clamp(14px, 3vw, 16px) !important;
            padding: clamp(10px, 3vw, 15px) !important;
          }
          
          .samurai-input:focus {
            background: rgba(10, 10, 10, 0.95) !important;
            border-color: #dc3545 !important;
            color: #fff !important;
            box-shadow: 0 0 15px rgba(220, 53, 69, 0.3) !important;
            outline: none !important;
          }
          
          .samurai-input::placeholder {
            color: #999 !important;
            font-style: italic;
          }
          
          .samurai-btn {
            background: linear-gradient(135deg, #dc3545 0%, #a71e2a 100%) !important;
            border: 3px solid #dc3545 !important;
            color: white !important;
            padding: clamp(12px, 3vw, 18px) clamp(20px, 5vw, 30px) !important;
            font-family: 'Georgia', serif !important;
            font-weight: bold !important;
            text-transform: uppercase !important;
            letter-spacing: 2px !important;
            font-size: clamp(14px, 3vw, 16px) !important;
            border-radius: 12px !important;
            width: 100% !important;
            transition: all 0.3s ease !important;
            position: relative;
          }
          
          .samurai-btn:hover:not(:disabled) {
            background: linear-gradient(135deg, #e63946 0%, #b71c2c 100%) !important;
            transform: translateY(-3px) !important;
            box-shadow: 0 8px 25px rgba(220, 53, 69, 0.5) !important;
            border-color: #e63946 !important;
            color: white !important;
          }
          
          .samurai-btn:disabled {
            opacity: 0.7 !important;
            cursor: not-allowed !important;
            transform: none !important;
            box-shadow: none !important;
          }
          
          .loading-spinner {
            display: inline-block;
            width: 20px;
            height: 20px;
            border: 2px solid #ffffff;
            border-radius: 50%;
            border-top-color: transparent;
            animation: spin 1s ease-in-out infinite;
            margin-right: 10px;
          }
          
          @keyframes spin {
            to { transform: rotate(360deg); }
          }
          
          .divider-samurai {
            color: #dc3545 !important;
            font-weight: bold !important;
            font-size: clamp(8px, 2vw, 15px) !important;
            text-shadow: 0 0 10px rgba(220, 53, 69, 0.5);
            display: inline-block;
          }
          
          .samurai-subtitle {
            position: absolute;
            top: -8px;
            right: 20px;
            font-size: clamp(10px, 2vw, 14px) !important;
            color: rgba(255,255,255,0.7);
          }
          
          /* Responsive Adjustments */
          @media (max-width: 768px) {
            .main-container {
              padding: 15px;
            }
            
            .samurai-card {
              margin: 0 10px;
              border-radius: 15px;
            }
            
            .samurai-header {
              border-radius: 12px 12px 0 0 !important;
            }
            
            .samurai-body {
              border-radius: 0 0 12px 12px !important;
            }
            
            .samurai-links {
              flex-direction: column;
              gap: 15px;
            }
            
            .samurai-links .samurai-link {
              display: block !important;
              text-align: center !important;
              margin: 5px 0 !important;
              padding: 12px 20px !important;
            }
            
            .divider-samurai {
              display: none;
            }
          }
          
          @media (max-width: 480px) {
            .samurai-input-group .input-group-text {
              min-width: 45px !important;
              font-size: 14px;
            }
            
            .samurai-subtitle {
              display: none;
            }
          }
          
          /* Link Container Responsive */
          .samurai-links {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
            gap: 10px;
          }
          
          @media (min-width: 769px) {
            .samurai-links {
              flex-direction: row;
            }
          }
        `
                }
            }, void 0, false, {
                fileName: "[project]/app/Login/page.js",
                lineNumber: 122,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "sakura-container",
                children: petals.map((petal)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `sakura-petal ${petal.size} ${petal.color}`
                    }, petal.id, false, {
                        fileName: "[project]/app/Login/page.js",
                        lineNumber: 577,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/Login/page.js",
                lineNumber: 575,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "main-container",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container-fluid",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "row justify-content-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "card samurai-card",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "card-header samurai-header",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "samurai-subtitle",
                                                children: "ありがとう"
                                            }, void 0, false, {
                                                fileName: "[project]/app/Login/page.js",
                                                lineNumber: 590,
                                                columnNumber: 19
                                            }, this),
                                            "⚔️ Login Portal ⚔️"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/Login/page.js",
                                        lineNumber: 589,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "card-body samurai-body",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                            className: "row g-3 g-md-4",
                                            onSubmit: handleLogin,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "col-12",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "form-label samurai-label",
                                                            children: "⚔️ Username"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/Login/page.js",
                                                            lineNumber: 598,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "input-group samurai-input-group",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "input-group-text",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                        className: "bi bi-person-vcard"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/Login/page.js",
                                                                        lineNumber: 603,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/Login/page.js",
                                                                    lineNumber: 602,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "text",
                                                                    className: "form-control samurai-input",
                                                                    placeholder: "Enter your warrior name",
                                                                    value: username,
                                                                    onChange: (e)=>setUsername(e.target.value),
                                                                    disabled: isLoading,
                                                                    required: true
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/Login/page.js",
                                                                    lineNumber: 605,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/Login/page.js",
                                                            lineNumber: 601,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/Login/page.js",
                                                    lineNumber: 597,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "col-12",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "form-label samurai-label",
                                                            children: "🗡️ Password"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/Login/page.js",
                                                            lineNumber: 618,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "input-group samurai-input-group",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "input-group-text",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                        className: "bi bi-shield-lock"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/Login/page.js",
                                                                        lineNumber: 623,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/Login/page.js",
                                                                    lineNumber: 622,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "password",
                                                                    className: "form-control samurai-input",
                                                                    placeholder: "Enter your secret code",
                                                                    value: password,
                                                                    onChange: (e)=>setPassword(e.target.value),
                                                                    disabled: isLoading,
                                                                    required: true
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/Login/page.js",
                                                                    lineNumber: 625,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/Login/page.js",
                                                            lineNumber: 621,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/Login/page.js",
                                                    lineNumber: 617,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "col-12 mt-3 mt-md-4",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "submit",
                                                        className: "btn samurai-btn",
                                                        disabled: isLoading,
                                                        children: isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "loading-spinner"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/Login/page.js",
                                                                    lineNumber: 645,
                                                                    columnNumber: 29
                                                                }, this),
                                                                "🏯 Entering Dojo... 🏯"
                                                            ]
                                                        }, void 0, true) : '🏯 Enter the Dojo 🏯'
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/Login/page.js",
                                                        lineNumber: 638,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/Login/page.js",
                                                    lineNumber: 637,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "col-12 mt-3 mt-md-4",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-center samurai-links",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                href: "/Register",
                                                                className: "samurai-link",
                                                                children: "🛡️ Create Account"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/Login/page.js",
                                                                lineNumber: 656,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "divider-samurai",
                                                                children: "⚔️"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/Login/page.js",
                                                                lineNumber: 663,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                href: "/",
                                                                className: "samurai-link",
                                                                children: "🔑 Forgot Password"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/Login/page.js",
                                                                lineNumber: 665,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/Login/page.js",
                                                        lineNumber: 655,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/Login/page.js",
                                                    lineNumber: 654,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/Login/page.js",
                                            lineNumber: 595,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/Login/page.js",
                                        lineNumber: 594,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/Login/page.js",
                                lineNumber: 588,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/Login/page.js",
                            lineNumber: 587,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/Login/page.js",
                        lineNumber: 586,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/Login/page.js",
                    lineNumber: 585,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/Login/page.js",
                lineNumber: 584,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
}),
];

//# sourceMappingURL=app_Login_page_fa24a2cb.js.map