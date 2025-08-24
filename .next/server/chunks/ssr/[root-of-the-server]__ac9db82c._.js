module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[project]/app/components/Navbar.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
;
const Navbar = ()=>{
    const [isScrolled, setIsScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isMenuOpen, setIsMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [tokenState, setTokenState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    // โหลด token จาก sessionStorage
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const sync = ()=>{
            const token = sessionStorage.getItem("token");
            setTokenState(token);
        };
        sync();
        // ✅ sessionStorage ไม่ยิง event → ใช้ poll
        const interval = setInterval(sync, 1000);
        return ()=>clearInterval(interval);
    }, []);
    // ฟังก์ชัน logout
    const handleSignOut = ()=>{
        sessionStorage.removeItem("token");
        sessionStorage.removeItem("user");
        setTokenState(null);
        window.location.href = "/Login";
    };
    // ให้เรียกอัปเดต token ได้ทันที
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        window.updateNavbarToken = ()=>{
            const token = sessionStorage.getItem("token");
            setTokenState(token);
        };
        return ()=>delete window.updateNavbarToken;
    }, []);
    // scroll effect
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleScroll = ()=>setIsScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return ()=>window.removeEventListener("scroll", handleScroll);
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("link", {
                href: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css",
                rel: "stylesheet"
            }, void 0, false, {
                fileName: "[project]/app/components/Navbar.js",
                lineNumber: 50,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                dangerouslySetInnerHTML: {
                    __html: `
          /* Japanese Sakura Navbar Theme 🌸 */
          .navbar-custom {
            background: linear-gradient(135deg, 
              #2c1810 0%, 
              #4a2c20 15%, 
              #8b4a6b 35%, 
              #d4a5a5 50%, 
              #8b4a6b 65%, 
              #4a2c20 85%, 
              #2c1810 100%
            ) !important;
            backdrop-filter: blur(25px);
            border-bottom: 4px solid #ff69b4 !important;
            box-shadow: 
              0 15px 50px rgba(255, 105, 180, 0.4), 
              0 0 0 2px rgba(255, 182, 193, 0.3) inset,
              0 5px 25px rgba(139, 69, 19, 0.3) !important;
            transition: all 0.8s cubic-bezier(0.23, 1, 0.320, 1) !important;
            border-radius: 0 0 25px 25px !important;
            position: relative;
            animation: sakuraGlow 4s ease-in-out infinite alternate;
          }

          .navbar-custom::before {
            content: '🌸';
            position: absolute;
            font-size: 2rem;
            color: #ffb6c1;
            opacity: 0.3;
            animation: sakuraFloat 6s ease-in-out infinite;
            left: 10%;
            top: 50%;
            transform: translateY(-50%);
          }

          .navbar-custom::after {
            content: '🌸';
            position: absolute;
            font-size: 1.5rem;
            color: #ff69b4;
            opacity: 0.4;
            animation: sakuraFloat 8s ease-in-out infinite reverse;
            right: 15%;
            top: 30%;
          }

          .navbar-custom.scrolled {
            background: linear-gradient(135deg, 
              rgba(44, 24, 16, 0.98) 0%, 
              rgba(74, 44, 32, 0.98) 15%, 
              rgba(139, 74, 107, 0.98) 35%, 
              rgba(212, 165, 165, 0.98) 50%, 
              rgba(139, 74, 107, 0.98) 65%, 
              rgba(74, 44, 32, 0.98) 85%, 
              rgba(44, 24, 16, 0.98) 100%
            ) !important;
            box-shadow: 
              0 25px 70px rgba(255, 105, 180, 0.6), 
              0 0 0 3px rgba(255, 182, 193, 0.4) inset,
              0 8px 40px rgba(139, 69, 19, 0.4) !important;
            border-bottom: 5px solid #ff1493 !important;
            transform: translateY(-4px);
          }

          /* Logo Styles */
          .navbar-brand-custom {
            font-weight: 900 !important;
            font-size: 1.8rem !important;
            transition: all 0.6s ease !important;
            position: relative;
            color: #ffb6c1 !important;
          }

          .navbar-brand-custom::before {
            content: '⛩️';
            margin-right: 10px;
            font-size: 1.5rem;
            animation: torii 3s ease-in-out infinite;
          }

          .navbar-brand-custom:hover {
            transform: scale(1.15) rotateY(10deg);
            filter: drop-shadow(0 0 30px rgba(255, 105, 180, 0.9));
            color: #ff69b4 !important;
          }

          .logo-img {
            height: 60px;
            width: auto;
            max-width: 250px;
            transition: all 0.6s ease;
            filter: 
              drop-shadow(0 0 25px rgba(255, 105, 180, 0.6)) 
              drop-shadow(0 0 10px rgba(255, 182, 193, 0.4));
            border-radius: 15px;
            border: 2px solid rgba(255, 182, 193, 0.3);
          }

          .navbar-brand-custom:hover .logo-img {
            filter: 
              drop-shadow(0 0 40px rgba(255, 105, 180, 1)) 
              drop-shadow(0 0 20px rgba(255, 182, 193, 0.7));
            transform: rotateX(10deg) rotateZ(2deg);
            border-color: rgba(255, 105, 180, 0.6);
          }

          /* Japanese Style Navigation Links */
          .nav-link-custom {
            color: #ffb6c1 !important;
            font-weight: 700 !important;
            font-size: 1.1rem !important;
            position: relative;
            padding: 1.2rem 2rem !important;
            transition: all 0.6s cubic-bezier(0.23, 1, 0.320, 1) !important;
            text-decoration: none !important;
            border-radius: 40px !important;
            margin: 0 0.5rem !important;
            overflow: hidden;
            background: linear-gradient(135deg, 
              rgba(255, 182, 193, 0.15), 
              rgba(255, 105, 180, 0.1),
              rgba(139, 69, 19, 0.05)
            ) !important;
            border: 2px solid rgba(255, 182, 193, 0.4) !important;
            backdrop-filter: blur(20px);
            box-shadow: 
              0 6px 25px rgba(255, 182, 193, 0.3), 
              0 0 0 1px rgba(255, 255, 255, 0.1) inset !important;
            text-transform: uppercase;
            letter-spacing: 1.5px;
            font-family: 'Arial', sans-serif;
            text-shadow: 0 0 10px rgba(255, 182, 193, 0.5);
          }

          .nav-link-custom::before {
            content: "🌸";
            position: absolute;
            bottom: 10px;
            left: 50%;
            font-size: 0;
            opacity: 0;
            transition: all 0.6s ease;
            transform: translateX(-50%) translateY(10px);
          }

          .nav-link-custom::after {
            content: "";
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(
              90deg,
              transparent,
              rgba(255, 182, 193, 0.3),
              rgba(255, 105, 180, 0.2),
              transparent
            );
            transition: all 0.8s ease;
          }

          .nav-link-custom:hover {
            color: #ff1493 !important;
            transform: translateY(-8px) scale(1.1);
            text-shadow: 
              0 0 25px rgba(255, 20, 147, 0.9),
              0 0 35px rgba(255, 182, 193, 0.6);
            background: linear-gradient(135deg, 
              rgba(255, 105, 180, 0.3), 
              rgba(255, 182, 193, 0.2),
              rgba(255, 20, 147, 0.15)
            ) !important;
            border: 2px solid rgba(255, 105, 180, 0.7) !important;
            box-shadow: 
              0 15px 40px rgba(255, 105, 180, 0.6),
              0 0 40px rgba(255, 182, 193, 0.5),
              0 0 0 4px rgba(255, 105, 180, 0.3) inset,
              0 0 0 5px rgba(255, 255, 255, 0.15) inset !important;
          }

          .nav-link-custom:hover::before {
            font-size: 1.2rem;
            opacity: 1;
            transform: translateX(-50%) translateY(0);
          }

          .nav-link-custom:hover::after {
            left: 100%;
          }

          .nav-link-custom.active {
            color: #ff1493 !important;
            font-weight: 800 !important;
            background: linear-gradient(135deg, 
              rgba(255, 105, 180, 0.4), 
              rgba(255, 182, 193, 0.3),
              rgba(255, 20, 147, 0.2)
            ) !important;
            border: 3px solid rgba(255, 105, 180, 0.8) !important;
            box-shadow: 
              0 10px 30px rgba(255, 105, 180, 0.5),
              0 0 30px rgba(255, 105, 180, 0.4),
              0 0 0 4px rgba(255, 105, 180, 0.5) inset,
              0 0 0 6px rgba(255, 255, 255, 0.2) inset !important;
            transform: translateY(-4px);
            text-shadow: 
              0 0 20px rgba(255, 20, 147, 0.9),
              0 0 30px rgba(255, 182, 193, 0.5);
          }

          .nav-link-custom.active::before {
            font-size: 1.5rem;
            opacity: 1;
            color: #ff1493;
            animation: sakuraSpin 2s linear infinite;
          }

          /* Japanese Style Toggler */
          .navbar-toggler-custom {
            border: 3px solid rgba(255, 105, 180, 0.5) !important;
            padding: 12px 18px !important;
            background: linear-gradient(135deg, 
              rgba(255, 105, 180, 0.2), 
              rgba(255, 182, 193, 0.15),
              rgba(139, 69, 19, 0.1)
            ) !important;
            border-radius: 20px !important;
            transition: all 0.6s ease !important;
            position: relative;
            overflow: hidden;
          }

          .navbar-toggler-custom::before {
            content: '🌸';
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            font-size: 0;
            opacity: 0;
            transition: all 0.6s ease;
          }

          .navbar-toggler-custom:hover {
            background: linear-gradient(135deg, 
              rgba(255, 105, 180, 0.4), 
              rgba(255, 182, 193, 0.3),
              rgba(255, 20, 147, 0.2)
            ) !important;
            transform: scale(1.2) rotateZ(10deg);
            border-color: rgba(255, 105, 180, 0.8) !important;
            box-shadow: 
              0 0 30px rgba(255, 105, 180, 0.6),
              0 0 0 5px rgba(255, 105, 180, 0.3) !important;
          }

          .navbar-toggler-custom:hover::before {
            font-size: 1rem;
            opacity: 1;
          }

          .navbar-toggler-custom:focus {
            box-shadow: 0 0 0 0.5rem rgba(255, 105, 180, 0.6) !important;
          }

          .hamburger-line {
            width: 36px;
            height: 4px;
            background: linear-gradient(90deg, #ff69b4, #ffb6c1, #ff1493);
            margin: 6px 0;
            transition: all 0.6s cubic-bezier(0.23, 1, 0.320, 1);
            border-radius: 5px;
            box-shadow: 0 0 10px rgba(255, 105, 180, 0.5);
          }

          .hamburger-line.open:nth-child(1) {
            transform: rotate(-45deg) translate(-8px, 9px);
            background: linear-gradient(90deg, #ff1493, #ffb6c1);
          }
          .hamburger-line.open:nth-child(2) {
            opacity: 0;
            transform: scale(0) rotateZ(180deg);
          }
          .hamburger-line.open:nth-child(3) {
            transform: rotate(45deg) translate(-8px, -9px);
            background: linear-gradient(90deg, #ff1493, #ffb6c1);
          }

          /* Japanese Mobile Menu */
          .navbar-collapse.show {
            background: linear-gradient(135deg, 
              rgba(44, 24, 16, 0.98) 0%, 
              rgba(74, 44, 32, 0.98) 25%, 
              rgba(139, 74, 107, 0.98) 50%, 
              rgba(74, 44, 32, 0.98) 75%, 
              rgba(44, 24, 16, 0.98) 100%
            ) !important;
            border-radius: 25px !important;
            margin-top: 2.5rem !important;
            padding: 2.5rem !important;
            box-shadow: 
              0 25px 60px rgba(255, 105, 180, 0.5),
              0 0 0 2px rgba(255, 105, 180, 0.4) inset,
              0 0 0 4px rgba(255, 255, 255, 0.1) inset !important;
            border: 4px solid rgba(255, 105, 180, 0.5) !important;
            backdrop-filter: blur(30px);
            position: relative;
          }

          .navbar-collapse.show::before {
            content: '🌸 和 🌸';
            position: absolute;
            top: 10px;
            left: 50%;
            transform: translateX(-50%);
            color: #ffb6c1;
            font-size: 1.2rem;
            opacity: 0.7;
          }

          /* Japanese Style Buttons */
          .btn-cta,
          .btn-logout {
            background: linear-gradient(135deg, 
              #ff69b4, 
              #ff1493, 
              #ff69b4
            ) !important;
            border: 3px solid rgba(255, 182, 193, 0.5) !important;
            color: #ffffff !important;
            font-weight: 800 !important;
            padding: 1rem 3rem !important;
            border-radius: 40px !important;
            transition: all 0.6s cubic-bezier(0.23, 1, 0.320, 1) !important;
            box-shadow: 
              0 10px 30px rgba(255, 105, 180, 0.6),
              0 0 0 2px rgba(255, 255, 255, 0.2) inset !important;
            position: relative;
            overflow: hidden;
            text-transform: uppercase;
            letter-spacing: 2px;
            font-size: 1.1rem !important;
            text-shadow: 0 0 15px rgba(255, 255, 255, 0.5);
          }

          .btn-cta::before,
          .btn-logout::before {
            content: '🌸';
            position: absolute;
            top: 50%;
            left: 10px;
            transform: translateY(-50%);
            font-size: 0;
            opacity: 0;
            transition: all 0.6s ease;
          }

          .btn-cta::after,
          .btn-logout::after {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, 
              transparent, 
              rgba(255, 255, 255, 0.3), 
              transparent
            );
            transition: all 0.8s ease;
          }

          .btn-cta:hover,
          .btn-logout:hover {
            background: linear-gradient(135deg, 
              #ffb6c1, 
              #ff69b4, 
              #ffb6c1
            ) !important;
            transform: translateY(-6px) scale(1.1);
            box-shadow: 
              0 20px 50px rgba(255, 105, 180, 0.8),
              0 0 30px rgba(255, 182, 193, 0.6),
              0 0 0 4px rgba(255, 255, 255, 0.4) inset !important;
            color: #8b0045 !important;
            border-color: rgba(255, 105, 180, 0.7) !important;
            text-shadow: 0 0 20px rgba(139, 0, 69, 0.8);
          }

          .btn-cta:hover::before,
          .btn-logout:hover::before {
            font-size: 1.2rem;
            opacity: 1;
            animation: sakuraSpin 1s linear infinite;
          }

          .btn-cta:hover::after,
          .btn-logout:hover::after {
            left: 100%;
          }

          .btn-cta:active,
          .btn-logout:active {
            transform: translateY(-4px) scale(1.08) !important;
            transition: all 0.2s ease !important;
          }

          /* Floating Sakura Animation */
          @keyframes sakuraFloat {
            0%, 100% { 
              transform: translateY(-50%) rotate(0deg); 
              opacity: 0.3; 
            }
            25% { 
              transform: translateY(-70%) rotate(90deg); 
              opacity: 0.6; 
            }
            50% { 
              transform: translateY(-40%) rotate(180deg); 
              opacity: 0.4; 
            }
            75% { 
              transform: translateY(-60%) rotate(270deg); 
              opacity: 0.7; 
            }
          }

          @keyframes sakuraSpin {
            0% { transform: translateX(-50%) translateY(-50%) rotate(0deg); }
            100% { transform: translateX(-50%) translateY(-50%) rotate(360deg); }
          }

          @keyframes sakuraGlow {
            0% { 
              box-shadow: 
                0 15px 50px rgba(255, 105, 180, 0.4), 
                0 0 0 2px rgba(255, 182, 193, 0.3) inset,
                0 5px 25px rgba(139, 69, 19, 0.3);
            }
            100% { 
              box-shadow: 
                0 20px 60px rgba(255, 105, 180, 0.6), 
                0 0 0 3px rgba(255, 182, 193, 0.5) inset,
                0 8px 35px rgba(139, 69, 19, 0.4);
            }
          }

          @keyframes torii {
            0%, 100% { transform: scale(1) rotateZ(0deg); }
            50% { transform: scale(1.1) rotateZ(5deg); }
          }

          /* Responsive Design */
          @media (min-width: 992px) {
            .navbar-collapse.show {
              background: none !important;
              margin-top: 0 !important;
              padding: 0 !important;
              box-shadow: none !important;
              border: none !important;
              backdrop-filter: none !important;
            }
            
            .navbar-collapse.show::before {
              display: none;
            }
          }

          /* Additional Japanese Elements */
          .nav-item:nth-child(2n) .nav-link-custom::before {
            content: "🌺";
          }
          
          .nav-item:nth-child(3n) .nav-link-custom::before {
            content: "🌸";
          }
        `
                }
            }, void 0, false, {
                fileName: "[project]/app/components/Navbar.js",
                lineNumber: 56,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: `navbar navbar-expand-lg navbar-custom fixed-top ${isScrolled ? "scrolled" : ""}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            className: "navbar-brand navbar-brand-custom d-flex align-items-center",
                            href: "/",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: "/image/LOGO_TSX_WHITE.png",
                                    alt: "Company Logo",
                                    className: "logo-img",
                                    onError: (e)=>{
                                        e.target.style.display = "none";
                                        e.target.nextSibling.style.display = "block";
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/app/components/Navbar.js",
                                    lineNumber: 546,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "logo-placeholder d-none fw-bold",
                                    children: "和ロゴ"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/Navbar.js",
                                    lineNumber: 555,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/Navbar.js",
                            lineNumber: 545,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "navbar-toggler navbar-toggler-custom",
                            type: "button",
                            onClick: ()=>setIsMenuOpen(!isMenuOpen),
                            "aria-controls": "navbarNav",
                            "aria-expanded": isMenuOpen,
                            "aria-label": "Toggle navigation",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `hamburger-line ${isMenuOpen ? "open" : ""}`
                                }, void 0, false, {
                                    fileName: "[project]/app/components/Navbar.js",
                                    lineNumber: 568,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `hamburger-line ${isMenuOpen ? "open" : ""}`
                                }, void 0, false, {
                                    fileName: "[project]/app/components/Navbar.js",
                                    lineNumber: 569,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `hamburger-line ${isMenuOpen ? "open" : ""}`
                                }, void 0, false, {
                                    fileName: "[project]/app/components/Navbar.js",
                                    lineNumber: 570,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/Navbar.js",
                            lineNumber: 560,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `collapse navbar-collapse ${isMenuOpen ? "show" : ""}`,
                            id: "navbarNav",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "navbar-nav ms-auto align-items-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        className: "nav-item",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            className: "nav-link nav-link-custom active",
                                            href: "/",
                                            children: "หน้าแรก"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/Navbar.js",
                                            lineNumber: 579,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/Navbar.js",
                                        lineNumber: 578,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        className: "nav-item",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            className: "nav-link nav-link-custom",
                                            href: "/About",
                                            children: "เกี่ยวกับ"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/Navbar.js",
                                            lineNumber: 584,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/Navbar.js",
                                        lineNumber: 583,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        className: "nav-item",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            className: "nav-link nav-link-custom",
                                            href: "/Services",
                                            children: "บริการ"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/Navbar.js",
                                            lineNumber: 589,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/Navbar.js",
                                        lineNumber: 588,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        className: "nav-item",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            className: "nav-link nav-link-custom",
                                            href: "/Contact",
                                            children: "ติดต่อ"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/Navbar.js",
                                            lineNumber: 594,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/Navbar.js",
                                        lineNumber: 593,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        className: "nav-item ms-3",
                                        children: tokenState ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: handleSignOut,
                                            className: "btn btn-logout",
                                            children: "🚪 Logout"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/Navbar.js",
                                            lineNumber: 600,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            className: "nav-link p-0",
                                            href: "/Login",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "btn btn-cta",
                                                children: "🔐 Login"
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/Navbar.js",
                                                lineNumber: 609,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/Navbar.js",
                                            lineNumber: 608,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/Navbar.js",
                                        lineNumber: 598,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/Navbar.js",
                                lineNumber: 577,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/app/components/Navbar.js",
                            lineNumber: 573,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/Navbar.js",
                    lineNumber: 544,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/app/components/Navbar.js",
                lineNumber: 539,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("script", {
                src: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js",
                defer: true
            }, void 0, false, {
                fileName: "[project]/app/components/Navbar.js",
                lineNumber: 619,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true);
};
const __TURBOPACK__default__export__ = Navbar;
}),
"[project]/app/components/Footer.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Footer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
"use client";
;
;
function Footer() {
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    if (pathname === "/Contact") {
        return null;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("link", {
                href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css",
                rel: "stylesheet"
            }, void 0, false, {
                fileName: "[project]/app/components/Footer.js",
                lineNumber: 15,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                dangerouslySetInnerHTML: {
                    __html: `
        :root {
          --primary-gradient: linear-gradient(135deg, #310019ff 0%, #530623b9 30%, #ff4ba5a9 100%);
          --secondary-gradient: linear-gradient(135deg, #fa3f65ff 0%, #ff0077ff 100%);
          --accent-color: #ffffffff;
          --text-dark: #2d3436;
          --text-light: #637264ff;
          --shadow-red: rgba(255, 58, 133, 0.56);
          --glow-red: rgba(220, 20, 60, 0.6);
        }

        * {
          font-family: 'Inter', sans-serif;
        }

        body {
          overflow-x: hidden;
        }

        /* Hero Section */
        .hero-section {
          background: var(--primary-gradient);
          min-height: 60vh;
          display: flex;
          align-items: center;
          position: relative;
          color: white;
        }
        .hero-section::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" fill="none"><path d="M0,0 C150,100 350,0 500,50 C650,100 850,0 1000,50 L1000,0 Z" fill="rgba(255,255,255,0.1)"/></svg>') no-repeat center bottom;
          background-size: cover;
        }

        /* Section Title */
        .section-title {
          position: relative;
          margin-bottom: 3rem;
        }
        .section-title::after {
          content: '';
          position: absolute;
          bottom: -10px;
          left: 50%;
          transform: translateX(-50%);
          width: 60px;
          height: 4px;
          background: var(--accent-color);
          border-radius: 2px;
        }

        /* Card */
        .card-modern {
          border: none;
          border-radius: 20px;
          box-shadow: 0 20px 40px rgba(0,0,0,0.1);
          transition: all 0.3s ease;
          overflow: hidden;
          background: white;
        }
        .card-modern:hover {
          transform: translateY(-10px);
          box-shadow: 0 30px 60px rgba(0,0,0,0.15);
        }

        /* Stats */
        .stats-card {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          text-align: center;
          padding: 2rem;
          border-radius: 20px;
          margin-bottom: 2rem;
        }
        .stats-number {
          font-size: 3rem;
          font-weight: 700;
          display: block;
        }

        /* Team */
        .team-card { text-align: center; padding: 2rem; }
        .team-avatar {
          width: 120px; height: 120px; border-radius: 50%;
          background: var(--secondary-gradient);
          display: flex; align-items: center; justify-content: center;
          margin: 0 auto 1rem;
          font-size: 3rem; color: white;
        }

        /* Values */
        .values-icon {
          width: 80px; height: 80px; border-radius: 50%;
          background: var(--primary-gradient);
          display: flex; align-items: center; justify-content: center;
          margin: 0 auto 1rem;
          font-size: 2rem; color: white;
        }

        /* Floating shapes */
        .floating-shapes { position: absolute; width: 100%; height: 100%; overflow: hidden; z-index: 1; }
        .shape { position: absolute; opacity: 0.1; animation: float 6s ease-in-out infinite; }
        .shape-1 { top: 20%; left: 10%; animation-delay: 0s; }
        .shape-2 { top: 60%; right: 10%; animation-delay: 2s; }
        .shape-3 { bottom: 20%; left: 20%; animation-delay: 4s; }
        @keyframes float { 0%,100%{ transform:translateY(0) rotate(0)} 50%{transform:translateY(-20px) rotate(10deg)} }

        /* Button */
        .btn-modern {
          background: var(--primary-gradient);
          border: none;
          border-radius: 50px;
          padding: 12px 30px;
          color: white;
          font-weight: 500;
          transition: all 0.3s ease;
        }
        .btn-modern:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(102,126,234,0.3);
          color: white;
        }

        /* Timeline */
        .timeline { position: relative; padding: 2rem 0; }
        .timeline::before {
          content: ''; position: absolute; top: 0; left: 50%;
          width: 4px; height: 100%; background: var(--accent-color);
          transform: translateX(-50%);
        }
        .timeline-item { position: relative; margin-bottom: 3rem; }
        .timeline-content {
          background: white; padding: 2rem; border-radius: 15px;
          box-shadow: 0 15px 35px rgba(0,0,0,0.1);
          width: 45%;
        }
        .timeline-item:nth-child(odd) .timeline-content { margin-left: auto; }
        .timeline-dot {
          position: absolute; top: 50%; left: 50%;
          width: 20px; height: 20px;
          background: var(--accent-color);
          border-radius: 50%;
          transform: translate(-50%, -50%);
          border: 4px solid white;
          box-shadow: 0 0 0 4px var(--accent-color);
        }
        @media (max-width:768px) {
          .timeline::before { left: 20px; }
          .timeline-content { width: calc(100% - 60px); margin-left: 60px!important; }
          .timeline-dot { left: 20px; }
        }

        /* Footer */
        .footer-dark-red { background: var(--primary-gradient); position: relative; overflow: hidden; }
        .footer-dark-red::before {
          content:''; position:absolute; top:0; left:0; right:0; bottom:0;
          background: radial-gradient(ellipse at center, rgba(220,20,60,0.1) 0%, rgba(139,0,0,0.05) 50%, rgba(0,0,0,0.1) 100%);
          animation: pulse-bg 4s ease-in-out infinite;
        }
        .footer-content { position: relative; z-index: 2; }
        .footer-brand {
          color: rgba(255, 77, 187, 1); font-weight: 700; font-size: 1.5rem;
          text-shadow: 0 0 10px var(--glow-red), 0 0 20px var(--shadow-red), 0 0 30px rgba(255, 0, 51, 0.2);
          animation: glow-text 3s ease-in-out infinite alternate;
        }
        .footer-description { color: rgba(255,255,255,0.8); line-height: 1.6; text-shadow:0 1px 3px rgba(0,0,0,0.5); }
        .social-links-modern { display: flex; gap: 1rem; justify-content: flex-end; }

        /* Social links */
        .social-link-modern {
          display: inline-flex; align-items: center; justify-content: center;
          width: 50px; height: 50px; border-radius: 50%;
          background: linear-gradient(135deg, rgba(255, 0, 51, 0.53) 0%, rgba(255, 77, 137, 1) 100%);
          border: 2px solid rgba(121, 0, 46, 1);
          color: #fff; font-size: 1.2rem;
          transition: all 0.4s cubic-bezier(0.175,0.885,0.32,1.275);
          position: relative;
          box-shadow: 0 5px 15px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.1);
        }
        .social-link-modern::before {
          content:''; position:absolute; top:-2px; left:-2px; right:-2px; bottom:-2px;
          background: linear-gradient(45deg, transparent, var(--glow-red), transparent);
          border-radius: 50%; opacity:0; transition:opacity 0.3s ease;
          animation: rotate-glow 3s linear infinite;
        }
        .social-link-modern:hover::before { opacity:1; }
        .social-link-modern:hover {
          transform: translateY(-8px) scale(1.1); color:#fff;
          box-shadow: 0 15px 35px rgba(0,0,0,0.6), 0 0 25px var(--glow-red), inset 0 1px 0 rgba(255,255,255,0.2);
        }
        .social-link-modern.facebook:hover { border-color:#1877F2; background:linear-gradient(135deg,#1877F2 0%,rgba(0, 110, 255, 0.9) 100%); }
        .social-link-modern.line:hover { border-color:#1DA1F2; background:linear-gradient(135deg,#1DA1F2 0%,rgba(0, 255, 21, 0.9) 100%); }
        .social-link-modern.instagram:hover { border-color:#E4405F; background:linear-gradient(135deg,#feda75 20%,#fa7e1e 40%,#d62976 60%,#962fbf 80%,rgba(255, 0, 76, 0.9) 100%); }
        .social-link-modern.youtube:hover { border-color:#FF0000; background:linear-gradient(135deg,#FF0000 0%,rgba(0,0,0,0.9) 100%); }
        .social-link-modern.email:hover { border-color:#DC143C; background:linear-gradient(135deg,#DC143C 0%,rgba(255, 255, 255, 0.9) 100%); }

        /* Footer divider */
        .footer-divider {
          height: 2px;
          background: linear-gradient(90deg, transparent 0%, #ff0000ff 50%, transparent 100%);
          margin: 2rem 0;
          box-shadow: 0 0 10px var(--glow-red);
          animation: glow-line 3s ease-in-out infinite;
        }
        .footer-copyright {
          color: rgba(255,255,255,0.7);
          font-size: 0.9rem;
          text-shadow: 0 1px 2px rgba(0,0,0,0.5);
        }

        /* Animations */
        @keyframes pulse-bg { 0%,100%{opacity:0.3} 50%{opacity:0.6} }
        @keyframes glow-text { from{ text-shadow:0 0 10px var(--glow-red)} to{ text-shadow:0 0 40px var(--glow-red)} }
        @keyframes glow-line { 0%,100%{box-shadow:0 0 10px var(--glow-red)} 50%{box-shadow:0 0 30px var(--shadow-red)} }
        @keyframes rotate-glow { from{transform:rotate(0)} to{transform:rotate(360deg)} }

        /* Responsive */
        @media (max-width:768px) {
          .social-links-modern { justify-content:center; margin:2rem 0; }
          .footer-brand { text-align:center; margin-bottom:1rem; }
          .footer-description { text-align:center; }
          .footer-copyright { text-align:center; margin-top:1rem; }
        }
        @media (max-width:576px) {
          .social-link-modern { width:45px; height:45px; font-size:1rem; }
          .social-links-modern { gap:0.8rem; }
        }
      `
                }
            }, void 0, false, {
                fileName: "[project]/app/components/Footer.js",
                lineNumber: 21,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                className: "footer-dark-red text-white py-5",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container footer-content",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "row align-items-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "col-lg-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                            className: "footer-brand mb-3",
                                            children: "บริษัท เทคโนโลยี จำกัด"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/Footer.js",
                                            lineNumber: 261,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "footer-description",
                                            children: [
                                                "สร้างสรรค์นวัตกรรมที่เปลี่ยนโลก ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                    fileName: "[project]/app/components/Footer.js",
                                                    lineNumber: 263,
                                                    columnNumber: 49
                                                }, this),
                                                "ด้วยเทคโนโลยีที่ทันสมัยและทีมงานมืออาชีพ"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/Footer.js",
                                            lineNumber: 262,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/Footer.js",
                                    lineNumber: 260,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "col-lg-6",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "social-links-modern",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "https://facebook.com",
                                                className: "social-link-modern facebook",
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                                "aria-label": "Facebook",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                    className: "fab fa-facebook-f"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/Footer.js",
                                                    lineNumber: 276,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/Footer.js",
                                                lineNumber: 269,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "https://line.me",
                                                className: "social-link-modern line",
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                                "aria-label": "Line",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                    className: "fab fa-line"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/Footer.js",
                                                    lineNumber: 285,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/Footer.js",
                                                lineNumber: 278,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "https://instagram.com",
                                                className: "social-link-modern instagram",
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                                "aria-label": "Instagram",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                    className: "fab fa-instagram"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/Footer.js",
                                                    lineNumber: 294,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/Footer.js",
                                                lineNumber: 287,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "https://youtube.com",
                                                className: "social-link-modern youtube",
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                                "aria-label": "YouTube",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                    className: "fab fa-youtube"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/Footer.js",
                                                    lineNumber: 303,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/Footer.js",
                                                lineNumber: 296,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "mailto:contact@example.com",
                                                className: "social-link-modern email",
                                                "aria-label": "Email",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                    className: "fas fa-envelope"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/Footer.js",
                                                    lineNumber: 310,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/Footer.js",
                                                lineNumber: 305,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/Footer.js",
                                        lineNumber: 268,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/components/Footer.js",
                                    lineNumber: 267,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/Footer.js",
                            lineNumber: 259,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "footer-divider"
                        }, void 0, false, {
                            fileName: "[project]/app/components/Footer.js",
                            lineNumber: 316,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "row",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "col-12",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "footer-copyright text-center mb-0",
                                    children: "© 2025 All rights reserved. Made with ❤️"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/Footer.js",
                                    lineNumber: 320,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/components/Footer.js",
                                lineNumber: 319,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/components/Footer.js",
                            lineNumber: 318,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/Footer.js",
                    lineNumber: 258,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/components/Footer.js",
                lineNumber: 257,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__ac9db82c._.js.map