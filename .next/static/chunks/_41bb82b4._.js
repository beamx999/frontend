(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
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
"[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            case REACT_ACTIVITY_TYPE:
                return "Activity";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_CONTEXT_TYPE:
                return type.displayName || "Context";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        try {
            testStringCoercion(value);
            var JSCompiler_inline_result = !1;
        } catch (e) {
            JSCompiler_inline_result = !0;
        }
        if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
            return testStringCoercion(value);
        }
    }
    function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE) return "<...>";
        try {
            var name = getComponentNameFromType(type);
            return name ? "<" + name + ">" : "<...>";
        } catch (x) {
            return "<...>";
        }
    }
    function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
    }
    function UnknownOwner() {
        return Error("react-stack-top-frame");
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
        }
        warnAboutAccessingKey.isReactWarning = !0;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
        });
    }
    function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, props, owner, debugStack, debugTask) {
        var refProp = props.ref;
        type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner
        };
        null !== (void 0 !== refProp ? refProp : null) ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", {
            enumerable: !1,
            value: null
        });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null
        });
        Object.defineProperty(type, "_debugStack", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStack, debugTask) {
        var children = config.children;
        if (void 0 !== children) if (isStaticChildren) if (isArrayImpl(children)) {
            for(isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)validateChildKeys(children[isStaticChildren]);
            Object.freeze && Object.freeze(children);
        } else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else validateChildKeys(children);
        if (hasOwnProperty.call(config, "key")) {
            children = getComponentNameFromType(type);
            var keys = Object.keys(config).filter(function(k) {
                return "key" !== k;
            });
            isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
            didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = !0);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        if ("key" in config) {
            maybeKey = {};
            for(var propName in config)"key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && defineKeyPropWarningGetter(maybeKey, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
        return ReactElement(type, children, maybeKey, getOwner(), debugStack, debugTask);
    }
    function validateChildKeys(node) {
        "object" === typeof node && null !== node && node.$$typeof === REACT_ELEMENT_TYPE && node._store && (node._store.validated = 1);
    }
    var React = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
        return null;
    };
    React = {
        react_stack_bottom_frame: function(callStackForError) {
            return callStackForError();
        }
    };
    var specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var unknownOwnerDebugStack = React.react_stack_bottom_frame.bind(React, UnknownOwner)();
    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
    var didWarnAboutKeySpread = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsxDEV = function(type, config, maybeKey, isStaticChildren) {
        var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        return jsxDEVImpl(type, config, maybeKey, isStaticChildren, trackActualOwner ? Error("react-stack-top-frame") : unknownOwnerDebugStack, trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
    };
}();
}),
"[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)");
}
}),
"[project]/node_modules/next/navigation.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/navigation.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=_41bb82b4._.js.map