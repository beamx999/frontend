module.exports = {

"[project]/app/components/Register.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
;
const Register = ()=>{
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        username: '',
        password: '',
        firstname: '',
        fullname: '',
        lastname: '',
        address: '',
        sex: '',
        birthday: '',
        acceptTerms: false
    });
    const [errors, setErrors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showPassword, setShowPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isClient, setIsClient] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [passwordStrength, setPasswordStrength] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        score: 0,
        feedback: '',
        color: '#dc2626',
        strengthText: ''
    });
    // Fix hydration mismatch by ensuring client-side rendering
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setIsClient(true);
    }, []);
    const validatePasswordStrength = (password)=>{
        if (!password) {
            setPasswordStrength({
                score: 0,
                feedback: '',
                color: '#dc2626',
                strengthText: ''
            });
            return;
        }
        let score = 0;
        let feedback = [];
        // Length check
        if (password.length >= 8) score += 1;
        else feedback.push('อย่างน้อย 8 ตัวอักษร');
        // Character variety checks
        if (/[a-z]/.test(password)) score += 1;
        else feedback.push('ตัวพิมพ์เล็ก');
        if (/[A-Z]/.test(password)) score += 1;
        else feedback.push('ตัวพิมพ์ใหญ่');
        if (/[0-9]/.test(password)) score += 1;
        else feedback.push('ตัวเลข');
        if (/[^A-Za-z0-9]/.test(password)) score += 1;
        else feedback.push('อักขระพิเศษ');
        let strengthText = '';
        let color = '#dc2626';
        if (score <= 2) {
            strengthText = 'อ่อนมาก';
            color = '#dc2626';
        } else if (score === 3) {
            strengthText = 'ปานกลาง';
            color = '#f59e0b';
        } else if (score === 4) {
            strengthText = 'ดี';
            color = '#ef4444';
        } else {
            strengthText = 'แข็งแกร่งมาก';
            color = '#10b981';
        }
        setPasswordStrength({
            score: score,
            feedback: feedback.length > 0 ? `ขาด: ${feedback.join(', ')}` : 'รหัสผ่านแข็งแกร่ง!',
            color: color,
            strengthText: strengthText
        });
    };
    const hashPassword = async (plainPassword)=>{
        try {
            // Using a simple hash for demo - in real app use proper bcrypt
            const encoder = new TextEncoder();
            const data = encoder.encode(plainPassword + 'salt123');
            const hashBuffer = await crypto.subtle.digest('SHA-256', data);
            const hashArray = Array.from(new Uint8Array(hashBuffer));
            const hashHex = hashArray.map((b)=>b.toString(16).padStart(2, '0')).join('');
            return hashHex;
        } catch (error) {
            console.error('Error hashing password:', error);
            throw new Error('ไม่สามารถเข้ารหัสรหัสผ่านได้');
        }
    };
    const handleChange = (e)=>{
        const { name, value, type, checked } = e.target;
        setFormData((prev)=>({
                ...prev,
                [name]: type === 'checkbox' ? checked : value
            }));
        // Special handling for password field
        if (name === 'password') {
            validatePasswordStrength(value);
        }
        // Clear error when user starts typing
        if (errors[name]) {
            setErrors((prev)=>({
                    ...prev,
                    [name]: ''
                }));
        }
    };
    const validateForm = ()=>{
        const newErrors = {};
        // Username validation
        if (!formData.username) {
            newErrors.username = 'กรุณากรอกชื่อผู้ใช้';
        } else if (formData.username.length < 3) {
            newErrors.username = 'ชื่อผู้ใช้ต้องมีอย่างน้อย 3 ตัวอักษร';
        }
        // Password validation - Enhanced for security
        if (!formData.password) {
            newErrors.password = 'กรุณากรอกรหัสผ่าน';
        } else if (formData.password.length < 8) {
            newErrors.password = 'รหัสผ่านต้องมีอย่างน้อย 8 ตัวอักษร';
        } else if (passwordStrength.score < 3) {
            newErrors.password = 'รหัสผ่านยังไม่ปลอดภัยเพียงพอ กรุณาใช้รหัสผ่านที่แข็งแกร่งขึ้น';
        }
        if (!formData.firstname) newErrors.firstname = 'กรุณาเลือกคำนำหน้าชื่อ';
        if (!formData.fullname) newErrors.fullname = 'กรุณากรอกชื่อ';
        if (!formData.lastname) newErrors.lastname = 'กรุณากรอกนามสกุล';
        if (!formData.address) newErrors.address = 'กรุณากรอกที่อยู่';
        if (!formData.sex) newErrors.sex = 'กรุณาเลือกเพศ';
        if (!formData.birthday) newErrors.birthday = 'กรุณาเลือกวันเกิด';
        if (!formData.acceptTerms) newErrors.acceptTerms = 'กรุณายอมรับเงื่อนไข';
        // Age validation
        if (formData.birthday) {
            const today = new Date();
            const birthday = new Date(formData.birthday);
            let age = today.getFullYear() - birthday.getFullYear();
            const monthDiff = today.getMonth() - birthday.getMonth();
            if (monthDiff < 0 || monthDiff === 0 && today.getDate() < birthday.getDate()) {
                age--;
            }
            if (age < 13) {
                newErrors.birthday = 'อายุต้องมากกว่า 13 ปี';
            }
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };
    const resetForm = ()=>{
        setFormData({
            username: '',
            password: '',
            firstname: '',
            fullname: '',
            lastname: '',
            address: '',
            sex: '',
            birthday: '',
            acceptTerms: false
        });
        setErrors({});
        setPasswordStrength({
            score: 0,
            feedback: '',
            color: '#dc2626',
            strengthText: ''
        });
        setShowPassword(false);
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        const isValid = validateForm();
        if (!isValid) {
            alert('ข้อมูลไม่ครบถ้วน! กรุณากรอกข้อมูลให้ครบถ้วนและถูกต้อง');
            return;
        }
        // Check password strength one more time
        if (passwordStrength.score < 3) {
            const confirm = window.confirm('รหัสผ่านของคุณยังไม่ปลอดภัยเพียงพอ คุณต้องการดำเนินการต่อหรือไม่?');
            if (!confirm) {
                return;
            }
        }
        setIsLoading(true);
        try {
            // Hash password before sending
            console.log('Hashing password...');
            const hashedPassword = await hashPassword(formData.password);
            console.log('Password hashed successfully');
            const requestData = {
                username: formData.username,
                password: hashedPassword,
                firstname: formData.firstname,
                fullname: formData.fullname,
                lastname: formData.lastname,
                address: formData.address,
                sex: formData.sex,
                birthday: formData.birthday
            };
            console.log('Request payload (password hidden for security):', {
                ...requestData,
                password: '[HASHED PASSWORD]'
            });
            // Simulate API call
            await new Promise((resolve)=>setTimeout(resolve, 2000));
            console.log('Registration successful');
            alert('สมัครสมาชิกสำเร็จ! คุณสามารถเข้าสู่ระบบได้แล้ว รหัสผ่านของคุณถูกเข้ารหัสอย่างปลอดภัยแล้ว');
            // Reset form after successful registration
            resetForm();
        } catch (error) {
            console.error('Registration error:', error);
            let errorMessage = 'ไม่สามารถสมัครสมาชิกได้ กรุณาลองใหม่อีกครั้ง';
            if (error.message.includes('duplicate') || error.message.includes('already exists')) {
                errorMessage = 'ชื่อผู้ใช้นี้มีอยู่แล้ว กรุณาเลือกชื่อผู้ใช้อื่น';
            } else if (error.message.includes('network') || error.message.includes('fetch')) {
                errorMessage = 'ไม่สามารถเชื่อมต่อกับเซิร์ฟเวอร์ได้ กรุณาตรวจสอบการเชื่อมต่ออินเทอร์เน็ต';
            } else if (error.message.includes('เข้ารหัสรหัสผ่าน')) {
                errorMessage = 'เกิดข้อผิดพลาดในการประมวลผลรหัสผ่าน กรุณาลองใหม่';
            }
            alert(`เกิดข้อผิดพลาด! ${errorMessage}`);
        } finally{
            setIsLoading(false);
        }
    };
    // Pre-defined particle positions to avoid hydration mismatch
    const particles = [
        {
            id: 1,
            left: '10%',
            top: '20%',
            size: 3,
            delay: 2.1,
            color: '#dc2626'
        },
        {
            id: 2,
            left: '25%',
            top: '15%',
            size: 2,
            delay: 3.2,
            color: '#ef4444'
        },
        {
            id: 3,
            left: '80%',
            top: '30%',
            size: 4,
            delay: 2.8,
            color: '#f87171'
        },
        {
            id: 4,
            left: '5%',
            top: '70%',
            size: 2,
            delay: 3.5,
            color: '#dc2626'
        },
        {
            id: 5,
            left: '90%',
            top: '60%',
            size: 3,
            delay: 2.3,
            color: '#ef4444'
        },
        {
            id: 6,
            left: '60%',
            top: '10%',
            size: 3,
            delay: 4.1,
            color: '#f87171'
        },
        {
            id: 7,
            left: '15%',
            top: '80%',
            size: 2,
            delay: 2.7,
            color: '#dc2626'
        },
        {
            id: 8,
            left: '75%',
            top: '75%',
            size: 4,
            delay: 3.8,
            color: '#ef4444'
        },
        {
            id: 9,
            left: '40%',
            top: '5%',
            size: 2,
            delay: 2.9,
            color: '#f87171'
        },
        {
            id: 10,
            left: '95%',
            top: '40%',
            size: 3,
            delay: 3.3,
            color: '#dc2626'
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            background: 'linear-gradient(135deg, #0c0c0c 0%, #1a1a1a 25%, #dc2626 50%, #991b1b 75%, #0f0f0f 100%)'
        },
        className: "jsx-5d3e906280f0f8b" + " " + "min-h-screen flex items-center justify-center p-8 relative",
        children: [
            isClient && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    zIndex: 1
                },
                className: "jsx-5d3e906280f0f8b" + " " + "absolute top-0 left-0 w-full h-full overflow-hidden",
                children: particles.map((particle)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            width: `${particle.size}px`,
                            height: `${particle.size}px`,
                            backgroundColor: particle.color,
                            left: particle.left,
                            top: particle.top,
                            animation: `float ${particle.delay}s ease-in-out infinite alternate`
                        },
                        className: "jsx-5d3e906280f0f8b" + " " + "absolute rounded-full opacity-60"
                    }, particle.id, false, {
                        fileName: "[project]/app/components/Register.js",
                        lineNumber: 287,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/components/Register.js",
                lineNumber: 285,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-5d3e906280f0f8b" + " " + "relative z-10 w-full max-w-2xl",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "jsx-5d3e906280f0f8b" + " " + "bg-gradient-to-br from-gray-900/95 to-gray-800/95 backdrop-blur-xl border border-red-600/30 rounded-3xl shadow-2xl shadow-red-600/20",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-5d3e906280f0f8b" + " " + "text-center p-8 pb-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-5d3e906280f0f8b" + " " + "text-6xl mb-4",
                                    children: "🔥"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/Register.js",
                                    lineNumber: 308,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "jsx-5d3e906280f0f8b" + " " + "text-4xl font-bold bg-gradient-to-r from-red-600 to-red-400 bg-clip-text text-transparent mb-2",
                                    children: "สมัครสมาชิก"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/Register.js",
                                    lineNumber: 309,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "jsx-5d3e906280f0f8b" + " " + "text-gray-300",
                                    children: "กรอกข้อมูลเพื่อสร้างบัญชีใหม่"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/Register.js",
                                    lineNumber: 312,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/Register.js",
                            lineNumber: 307,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-5d3e906280f0f8b" + " " + "px-8 pb-6",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                onSubmit: handleSubmit,
                                className: "jsx-5d3e906280f0f8b" + " " + "space-y-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-5d3e906280f0f8b",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "jsx-5d3e906280f0f8b" + " " + "block text-gray-200 font-semibold mb-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                        className: "jsx-5d3e906280f0f8b" + " " + "fas fa-user mr-2 text-red-600"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/Register.js",
                                                        lineNumber: 322,
                                                        columnNumber: 19
                                                    }, this),
                                                    "ชื่อผู้ใช้"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/components/Register.js",
                                                lineNumber: 321,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                name: "username",
                                                value: formData.username,
                                                onChange: handleChange,
                                                placeholder: "กรอกชื่อผู้ใช้",
                                                disabled: isLoading,
                                                className: "jsx-5d3e906280f0f8b" + " " + `w-full px-4 py-3 bg-gray-800/70 border-2 border-red-600/30 rounded-xl text-gray-200 placeholder-gray-400 focus:border-red-600 focus:outline-none transition-all ${errors.username ? 'border-red-500' : ''}`
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/Register.js",
                                                lineNumber: 325,
                                                columnNumber: 17
                                            }, this),
                                            errors.username && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-5d3e906280f0f8b" + " " + "text-red-400 text-sm mt-1",
                                                children: errors.username
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/Register.js",
                                                lineNumber: 336,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/Register.js",
                                        lineNumber: 320,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-5d3e906280f0f8b",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "jsx-5d3e906280f0f8b" + " " + "block text-gray-200 font-semibold mb-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                        className: "jsx-5d3e906280f0f8b" + " " + "fas fa-lock mr-2 text-red-600"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/Register.js",
                                                        lineNumber: 342,
                                                        columnNumber: 19
                                                    }, this),
                                                    "รหัสผ่าน ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "jsx-5d3e906280f0f8b" + " " + "text-red-400 text-sm",
                                                        children: "*จำเป็น"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/Register.js",
                                                        lineNumber: 343,
                                                        columnNumber: 28
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/components/Register.js",
                                                lineNumber: 341,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-5d3e906280f0f8b" + " " + "relative",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: showPassword ? 'text' : 'password',
                                                        name: "password",
                                                        value: formData.password,
                                                        onChange: handleChange,
                                                        placeholder: "กรอกรหัสผ่าน (อย่างน้อย 8 ตัวอักษร)",
                                                        disabled: isLoading,
                                                        className: "jsx-5d3e906280f0f8b" + " " + `w-full px-4 py-3 pr-12 bg-gray-800/70 border-2 border-red-600/30 rounded-xl text-gray-200 placeholder-gray-400 focus:border-red-600 focus:outline-none transition-all ${errors.password ? 'border-red-500' : ''}`
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/Register.js",
                                                        lineNumber: 346,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: ()=>setShowPassword(!showPassword),
                                                        disabled: isLoading,
                                                        className: "jsx-5d3e906280f0f8b" + " " + "absolute right-3 top-1/2 transform -translate-y-1/2 text-red-600 hover:text-red-400",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                            className: "jsx-5d3e906280f0f8b" + " " + `fas ${showPassword ? 'fa-eye-slash' : 'fa-eye'}`
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/Register.js",
                                                            lineNumber: 363,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/Register.js",
                                                        lineNumber: 357,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/components/Register.js",
                                                lineNumber: 345,
                                                columnNumber: 17
                                            }, this),
                                            errors.password && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-5d3e906280f0f8b" + " " + "text-red-400 text-sm mt-1",
                                                children: errors.password
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/Register.js",
                                                lineNumber: 366,
                                                columnNumber: 37
                                            }, this),
                                            formData.password && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-5d3e906280f0f8b" + " " + "mt-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-5d3e906280f0f8b" + " " + "flex justify-between items-center mb-1",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "jsx-5d3e906280f0f8b" + " " + "text-gray-400 text-sm",
                                                                children: "ความแข็งแกร่งของรหัสผ่าน:"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/components/Register.js",
                                                                lineNumber: 372,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                style: {
                                                                    color: passwordStrength.color
                                                                },
                                                                className: "jsx-5d3e906280f0f8b" + " " + "text-sm font-semibold",
                                                                children: passwordStrength.strengthText
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/components/Register.js",
                                                                lineNumber: 373,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/components/Register.js",
                                                        lineNumber: 371,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-5d3e906280f0f8b" + " " + "w-full bg-gray-800 rounded-full h-2",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                width: `${passwordStrength.score / 5 * 100}%`,
                                                                backgroundColor: passwordStrength.color
                                                            },
                                                            className: "jsx-5d3e906280f0f8b" + " " + "h-2 rounded-full transition-all duration-300"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/Register.js",
                                                            lineNumber: 378,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/Register.js",
                                                        lineNumber: 377,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-5d3e906280f0f8b" + " " + "text-gray-400 text-xs mt-1",
                                                        children: passwordStrength.feedback
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/Register.js",
                                                        lineNumber: 386,
                                                        columnNumber: 21
                                                    }, this),
                                                    passwordStrength.score >= 3 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-5d3e906280f0f8b" + " " + "text-green-400 text-xs mt-1",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                className: "jsx-5d3e906280f0f8b" + " " + "fas fa-check-circle mr-1"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/components/Register.js",
                                                                lineNumber: 391,
                                                                columnNumber: 25
                                                            }, this),
                                                            "รหัสผ่านมีความปลอดภัยเพียงพอ"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/components/Register.js",
                                                        lineNumber: 390,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/components/Register.js",
                                                lineNumber: 370,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-5d3e906280f0f8b" + " " + "text-blue-400 text-xs mt-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                        className: "jsx-5d3e906280f0f8b" + " " + "fas fa-shield-alt mr-1"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/Register.js",
                                                        lineNumber: 399,
                                                        columnNumber: 19
                                                    }, this),
                                                    "รหัสผ่านจะถูกเข้ารหัสอย่างปลอดภัยก่อนบันทึก"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/components/Register.js",
                                                lineNumber: 398,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/Register.js",
                                        lineNumber: 340,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-5d3e906280f0f8b" + " " + "grid grid-cols-1 md:grid-cols-3 gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-5d3e906280f0f8b",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "jsx-5d3e906280f0f8b" + " " + "block text-gray-200 font-semibold mb-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                className: "jsx-5d3e906280f0f8b" + " " + "fas fa-crown mr-2 text-red-600"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/components/Register.js",
                                                                lineNumber: 408,
                                                                columnNumber: 21
                                                            }, this),
                                                            "คำนำหน้าชื่อ"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/components/Register.js",
                                                        lineNumber: 407,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                        name: "firstname",
                                                        value: formData.firstname,
                                                        onChange: handleChange,
                                                        disabled: isLoading,
                                                        className: "jsx-5d3e906280f0f8b" + " " + `w-full px-4 py-3 bg-gray-800/70 border-2 border-red-600/30 rounded-xl text-gray-200 focus:border-red-600 focus:outline-none transition-all ${errors.firstname ? 'border-red-500' : ''}`,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "",
                                                                className: "jsx-5d3e906280f0f8b",
                                                                children: "เลือก"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/components/Register.js",
                                                                lineNumber: 420,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "นาย",
                                                                className: "jsx-5d3e906280f0f8b",
                                                                children: "นาย"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/components/Register.js",
                                                                lineNumber: 421,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "นาง",
                                                                className: "jsx-5d3e906280f0f8b",
                                                                children: "นาง"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/components/Register.js",
                                                                lineNumber: 422,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "นางสาว",
                                                                className: "jsx-5d3e906280f0f8b",
                                                                children: "นางสาว"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/components/Register.js",
                                                                lineNumber: 423,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/components/Register.js",
                                                        lineNumber: 411,
                                                        columnNumber: 19
                                                    }, this),
                                                    errors.firstname && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-5d3e906280f0f8b" + " " + "text-red-400 text-sm mt-1",
                                                        children: errors.firstname
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/Register.js",
                                                        lineNumber: 425,
                                                        columnNumber: 40
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/components/Register.js",
                                                lineNumber: 406,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-5d3e906280f0f8b",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "jsx-5d3e906280f0f8b" + " " + "block text-gray-200 font-semibold mb-2",
                                                        children: "ชื่อ"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/Register.js",
                                                        lineNumber: 429,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "text",
                                                        name: "fullname",
                                                        value: formData.fullname,
                                                        onChange: handleChange,
                                                        placeholder: "ชื่อ",
                                                        disabled: isLoading,
                                                        className: "jsx-5d3e906280f0f8b" + " " + `w-full px-4 py-3 bg-gray-800/70 border-2 border-red-600/30 rounded-xl text-gray-200 placeholder-gray-400 focus:border-red-600 focus:outline-none transition-all ${errors.fullname ? 'border-red-500' : ''}`
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/Register.js",
                                                        lineNumber: 430,
                                                        columnNumber: 19
                                                    }, this),
                                                    errors.fullname && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-5d3e906280f0f8b" + " " + "text-red-400 text-sm mt-1",
                                                        children: errors.fullname
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/Register.js",
                                                        lineNumber: 441,
                                                        columnNumber: 39
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/components/Register.js",
                                                lineNumber: 428,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-5d3e906280f0f8b",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "jsx-5d3e906280f0f8b" + " " + "block text-gray-200 font-semibold mb-2",
                                                        children: "นามสกุล"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/Register.js",
                                                        lineNumber: 445,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "text",
                                                        name: "lastname",
                                                        value: formData.lastname,
                                                        onChange: handleChange,
                                                        placeholder: "นามสกุล",
                                                        disabled: isLoading,
                                                        className: "jsx-5d3e906280f0f8b" + " " + `w-full px-4 py-3 bg-gray-800/70 border-2 border-red-600/30 rounded-xl text-gray-200 placeholder-gray-400 focus:border-red-600 focus:outline-none transition-all ${errors.lastname ? 'border-red-500' : ''}`
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/Register.js",
                                                        lineNumber: 446,
                                                        columnNumber: 19
                                                    }, this),
                                                    errors.lastname && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-5d3e906280f0f8b" + " " + "text-red-400 text-sm mt-1",
                                                        children: errors.lastname
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/Register.js",
                                                        lineNumber: 457,
                                                        columnNumber: 39
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/components/Register.js",
                                                lineNumber: 444,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/Register.js",
                                        lineNumber: 405,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-5d3e906280f0f8b",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "jsx-5d3e906280f0f8b" + " " + "block text-gray-200 font-semibold mb-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                        className: "jsx-5d3e906280f0f8b" + " " + "fas fa-map-marker-alt mr-2 text-red-600"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/Register.js",
                                                        lineNumber: 464,
                                                        columnNumber: 19
                                                    }, this),
                                                    "ที่อยู่"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/components/Register.js",
                                                lineNumber: 463,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                name: "address",
                                                value: formData.address,
                                                onChange: handleChange,
                                                placeholder: "กรอกที่อยู่",
                                                rows: "3",
                                                disabled: isLoading,
                                                className: "jsx-5d3e906280f0f8b" + " " + `w-full px-4 py-3 bg-gray-800/70 border-2 border-red-600/30 rounded-xl text-gray-200 placeholder-gray-400 focus:border-red-600 focus:outline-none transition-all resize-none ${errors.address ? 'border-red-500' : ''}`
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/Register.js",
                                                lineNumber: 467,
                                                columnNumber: 17
                                            }, this),
                                            errors.address && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-5d3e906280f0f8b" + " " + "text-red-400 text-sm mt-1",
                                                children: errors.address
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/Register.js",
                                                lineNumber: 478,
                                                columnNumber: 36
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/Register.js",
                                        lineNumber: 462,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-5d3e906280f0f8b" + " " + "grid grid-cols-1 md:grid-cols-2 gap-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-5d3e906280f0f8b",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "jsx-5d3e906280f0f8b" + " " + "block text-gray-200 font-semibold mb-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                className: "jsx-5d3e906280f0f8b" + " " + "fas fa-venus-mars mr-2 text-red-600"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/components/Register.js",
                                                                lineNumber: 485,
                                                                columnNumber: 21
                                                            }, this),
                                                            "เพศ"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/components/Register.js",
                                                        lineNumber: 484,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-5d3e906280f0f8b" + " " + "flex gap-6 mt-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "jsx-5d3e906280f0f8b" + " " + "flex items-center text-gray-200 cursor-pointer",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        type: "radio",
                                                                        name: "sex",
                                                                        value: "male",
                                                                        checked: formData.sex === 'male',
                                                                        onChange: handleChange,
                                                                        disabled: isLoading,
                                                                        className: "jsx-5d3e906280f0f8b" + " " + "mr-2 text-red-600 focus:ring-red-600"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/components/Register.js",
                                                                        lineNumber: 490,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                        className: "jsx-5d3e906280f0f8b" + " " + "fas fa-mars mr-1 text-blue-400"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/components/Register.js",
                                                                        lineNumber: 499,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    "ชาย"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/components/Register.js",
                                                                lineNumber: 489,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "jsx-5d3e906280f0f8b" + " " + "flex items-center text-gray-200 cursor-pointer",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        type: "radio",
                                                                        name: "sex",
                                                                        value: "female",
                                                                        checked: formData.sex === 'female',
                                                                        onChange: handleChange,
                                                                        disabled: isLoading,
                                                                        className: "jsx-5d3e906280f0f8b" + " " + "mr-2 text-red-600 focus:ring-red-600"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/components/Register.js",
                                                                        lineNumber: 503,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                        className: "jsx-5d3e906280f0f8b" + " " + "fas fa-venus mr-1 text-pink-400"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/components/Register.js",
                                                                        lineNumber: 512,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    "หญิง"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/components/Register.js",
                                                                lineNumber: 502,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/components/Register.js",
                                                        lineNumber: 488,
                                                        columnNumber: 19
                                                    }, this),
                                                    errors.sex && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-5d3e906280f0f8b" + " " + "text-red-400 text-sm mt-1",
                                                        children: errors.sex
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/Register.js",
                                                        lineNumber: 516,
                                                        columnNumber: 34
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/components/Register.js",
                                                lineNumber: 483,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-5d3e906280f0f8b",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "jsx-5d3e906280f0f8b" + " " + "block text-gray-200 font-semibold mb-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                className: "jsx-5d3e906280f0f8b" + " " + "fas fa-birthday-cake mr-2 text-red-600"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/components/Register.js",
                                                                lineNumber: 521,
                                                                columnNumber: 21
                                                            }, this),
                                                            "วันเกิด"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/components/Register.js",
                                                        lineNumber: 520,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "date",
                                                        name: "birthday",
                                                        value: formData.birthday,
                                                        onChange: handleChange,
                                                        disabled: isLoading,
                                                        style: {
                                                            colorScheme: 'dark'
                                                        },
                                                        className: "jsx-5d3e906280f0f8b" + " " + `w-full px-4 py-3 bg-gray-800/70 border-2 border-red-600/30 rounded-xl text-gray-200 focus:border-red-600 focus:outline-none transition-all ${errors.birthday ? 'border-red-500' : ''}`
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/Register.js",
                                                        lineNumber: 524,
                                                        columnNumber: 19
                                                    }, this),
                                                    errors.birthday && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-5d3e906280f0f8b" + " " + "text-red-400 text-sm mt-1",
                                                        children: errors.birthday
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/Register.js",
                                                        lineNumber: 535,
                                                        columnNumber: 39
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/components/Register.js",
                                                lineNumber: 519,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/Register.js",
                                        lineNumber: 482,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-5d3e906280f0f8b",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "jsx-5d3e906280f0f8b" + " " + "flex items-center text-gray-200 cursor-pointer",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "checkbox",
                                                        name: "acceptTerms",
                                                        checked: formData.acceptTerms,
                                                        onChange: handleChange,
                                                        disabled: isLoading,
                                                        className: "jsx-5d3e906280f0f8b" + " " + "mr-3 text-red-600 focus:ring-red-600 rounded"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/Register.js",
                                                        lineNumber: 542,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                        className: "jsx-5d3e906280f0f8b" + " " + "fas fa-shield-alt mr-2 text-red-600"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/Register.js",
                                                        lineNumber: 550,
                                                        columnNumber: 19
                                                    }, this),
                                                    "ฉันยอมรับ ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: "#",
                                                        className: "jsx-5d3e906280f0f8b" + " " + "text-red-400 hover:text-red-300 underline",
                                                        children: "เงื่อนไขการใช้งาน"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/Register.js",
                                                        lineNumber: 551,
                                                        columnNumber: 29
                                                    }, this),
                                                    " และ ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: "#",
                                                        className: "jsx-5d3e906280f0f8b" + " " + "text-red-400 hover:text-red-300 underline",
                                                        children: "นโยบายความเป็นส่วนตัว"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/Register.js",
                                                        lineNumber: 551,
                                                        columnNumber: 121
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/components/Register.js",
                                                lineNumber: 541,
                                                columnNumber: 17
                                            }, this),
                                            errors.acceptTerms && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-5d3e906280f0f8b" + " " + "text-red-400 text-sm mt-1",
                                                children: errors.acceptTerms
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/Register.js",
                                                lineNumber: 553,
                                                columnNumber: 40
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/Register.js",
                                        lineNumber: 540,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-5d3e906280f0f8b" + " " + "bg-red-600/15 border border-red-600/30 rounded-xl p-4",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-5d3e906280f0f8b" + " " + "flex items-start",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                    className: "jsx-5d3e906280f0f8b" + " " + "fas fa-info-circle text-red-600 mr-2 mt-0.5"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/Register.js",
                                                    lineNumber: 559,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-5d3e906280f0f8b" + " " + "text-gray-200 text-sm",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                            className: "jsx-5d3e906280f0f8b",
                                                            children: "ความปลอดภัย:"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/Register.js",
                                                            lineNumber: 561,
                                                            columnNumber: 21
                                                        }, this),
                                                        " ข้อมูลทั้งหมดจะถูกเข้ารหัสก่อนจัดเก็บ และเราจะไม่เปิดเผยข้อมูลส่วนบุคคลของคุณแก่บุคคลที่สาม"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/components/Register.js",
                                                    lineNumber: 560,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/Register.js",
                                            lineNumber: 558,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/Register.js",
                                        lineNumber: 557,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: handleSubmit,
                                        disabled: isLoading,
                                        className: "jsx-5d3e906280f0f8b" + " " + `w-full py-4 px-6 rounded-xl font-bold text-white text-lg transition-all duration-300 ${isLoading ? 'bg-gray-600 cursor-not-allowed' : 'bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 hover:shadow-lg hover:shadow-red-600/25 transform hover:-translate-y-0.5'}`,
                                        children: isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                    className: "jsx-5d3e906280f0f8b" + " " + "fas fa-spinner fa-spin mr-2"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/Register.js",
                                                    lineNumber: 579,
                                                    columnNumber: 21
                                                }, this),
                                                "กำลังสมัครสมาชิก..."
                                            ]
                                        }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                    className: "jsx-5d3e906280f0f8b" + " " + "fas fa-user-plus mr-2"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/Register.js",
                                                    lineNumber: 584,
                                                    columnNumber: 21
                                                }, this),
                                                "สมัครสมาชิก"
                                            ]
                                        }, void 0, true)
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/Register.js",
                                        lineNumber: 567,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/Register.js",
                                lineNumber: 317,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/components/Register.js",
                            lineNumber: 316,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-5d3e906280f0f8b" + " " + "text-center p-6 border-t border-gray-700/50",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "jsx-5d3e906280f0f8b" + " " + "text-gray-400",
                                children: [
                                    "มีบัญชีอยู่แล้ว? ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "/login",
                                        className: "jsx-5d3e906280f0f8b" + " " + "text-red-400 hover:text-red-300 font-semibold",
                                        children: "เข้าสู่ระบบ"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/Register.js",
                                        lineNumber: 595,
                                        columnNumber: 32
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/Register.js",
                                lineNumber: 594,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/components/Register.js",
                            lineNumber: 593,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/Register.js",
                    lineNumber: 304,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/components/Register.js",
                lineNumber: 303,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("link", {
                href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css",
                rel: "stylesheet",
                className: "jsx-5d3e906280f0f8b"
            }, void 0, false, {
                fileName: "[project]/app/components/Register.js",
                lineNumber: 602,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                id: "5d3e906280f0f8b",
                children: "@keyframes float{0%{transform:translateY(0)}to{transform:translateY(-20px)}}input.jsx-5d3e906280f0f8b:focus,select.jsx-5d3e906280f0f8b:focus,textarea.jsx-5d3e906280f0f8b:focus{outline:none!important}input.jsx-5d3e906280f0f8b::placeholder,textarea.jsx-5d3e906280f0f8b::placeholder{opacity:.8;color:#9ca3af!important}select.jsx-5d3e906280f0f8b option.jsx-5d3e906280f0f8b{color:#f3f4f6;background-color:#1f2937}input[type=date].jsx-5d3e906280f0f8b::-webkit-calendar-picker-indicator{filter:invert();cursor:pointer}"
            }, void 0, false, void 0, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/Register.js",
        lineNumber: 279,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = Register;
}}),

};

//# sourceMappingURL=app_components_Register_9c8b7d2d.js.map