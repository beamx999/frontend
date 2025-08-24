module.exports = [
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[project]/app/Register/page.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sweetalert2$2f$dist$2f$sweetalert2$2e$esm$2e$all$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sweetalert2/dist/sweetalert2.esm.all.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$bcryptjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/bcryptjs/index.js [app-ssr] (ecmascript)");
"use client";
;
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
    const [passwordStrength, setPasswordStrength] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        score: 0,
        feedback: '',
        color: '#ff4757',
        strengthText: ''
    });
    const validatePasswordStrength = (password)=>{
        if (!password) {
            setPasswordStrength({
                score: 0,
                feedback: '',
                color: '#ff4757',
                strengthText: ''
            });
            return;
        }
        // ลบตัวอักษรพิเศษออก
        const cleanedPassword = password.replace(/[^a-zA-Z0-9]/g, '');
        let score = 0;
        let feedback = [];
        // ความยาว
        if (cleanedPassword.length >= 6) score += 1;
        else feedback.push('อย่างน้อย 6 ตัวอักษร');
        // ตัวพิมพ์เล็ก
        if (/[a-z]/.test(cleanedPassword)) score += 1;
        else feedback.push('ตัวพิมพ์เล็ก');
        // ตัวพิมพ์ใหญ่
        if (/[A-Z]/.test(cleanedPassword)) score += 1;
        else feedback.push('ตัวพิมพ์ใหญ่');
        // ตัวเลข
        if (/[0-9]/.test(cleanedPassword)) score += 1;
        else feedback.push('ตัวเลข');
        // กำหนดข้อความและสี
        let strengthText = '';
        let color = '#ff4757';
        if (score <= 1) {
            strengthText = 'อ่อนมาก';
            color = '#ff4757';
        } else if (score === 2) {
            strengthText = 'ปานกลาง';
            color = '#ffa502';
        } else if (score === 3) {
            strengthText = 'แข็งแกร่ง';
            color = '#2ed573';
        } else if (score === 4) {
            strengthText = 'แข็งแกร่งมาก';
            color = '#1e90ff';
        }
        setPasswordStrength({
            score: score,
            feedback: feedback.length > 0 ? `ขาด: ${feedback.join(', ')}` : 'รหัสผ่านแข็งแกร่ง! (ไม่มีอักขระพิเศษ)',
            color: color,
            strengthText: strengthText
        });
    };
    const hashPassword = async (plainPassword)=>{
        try {
            const saltRounds = 12;
            const hashedPassword = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$bcryptjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].hash(plainPassword, saltRounds);
            return hashedPassword;
        } catch (error) {
            console.error('Error hashing password:', error);
            throw new Error('ไม่สามารถเข้ารหัสผ่านได้');
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
        } else if (formData.password.length < 6) {
            newErrors.password = 'รหัสผ่านต้องมีอย่างน้อย 6 ตัวอักษร';
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
        // Age validation - แก้ไขจาก const เป็น let
        if (formData.birthday) {
            const today = new Date();
            const birthday = new Date(formData.birthday);
            let age = today.getFullYear() - birthday.getFullYear(); // เปลี่ยนจาก const เป็น let
            const monthDiff = today.getMonth() - birthday.getMonth();
            if (monthDiff < 0 || monthDiff === 0 && today.getDate() < birthday.getDate()) {
                age--; // ตอนนี้ทำงานได้แล้วเพราะเป็น let
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
            color: '#ff4757',
            strengthText: ''
        });
        setShowPassword(false);
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        const isValid = validateForm();
        if (!isValid) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sweetalert2$2f$dist$2f$sweetalert2$2e$esm$2e$all$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].fire({
                icon: 'warning',
                title: 'ข้อมูลไม่ครบถ้วน!',
                text: 'กรุณากรอกข้อมูลให้ครบถ้วนและถูกต้อง',
                confirmButtonColor: '#ee5a52'
            });
            return;
        }
        // Check password strength one more time
        if (passwordStrength.score < 3) {
            const result = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sweetalert2$2f$dist$2f$sweetalert2$2e$esm$2e$all$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].fire({
                icon: 'warning',
                title: 'รหัสผ่านไม่ปลอดภัย',
                text: 'รหัสผ่านของคุณยังไม่ปลอดภัยเพียงพอ คุณต้องการดำเนินการต่อหรือไม่?',
                showCancelButton: true,
                confirmButtonText: 'ดำเนินการต่อ',
                cancelButtonText: 'แก้ไขรหัสผ่าน',
                confirmButtonColor: '#ffa502',
                cancelButtonColor: '#ee5a52'
            });
            if (!result.isConfirmed) {
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
            const response = await fetch('https://backend-nextjs-virid.vercel.app/api/users', {
                method: 'POST',
                headers: {
                    Accept: 'application/json'
                },
                body: JSON.stringify(requestData)
            });
            console.log('Response status:', response.status);
            const responseText = await response.text();
            console.log('Response received');
            let result;
            try {
                result = JSON.parse(responseText);
            } catch (parseError) {
                console.error('JSON parse error:', parseError);
                result = {
                    message: responseText
                };
            }
            if (!response.ok) {
                throw new Error(result.message || `HTTP error! status: ${response.status}`);
            }
            console.log('Registration successful');
            await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sweetalert2$2f$dist$2f$sweetalert2$2e$esm$2e$all$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].fire({
                icon: 'success',
                title: 'สมัครสมาชิกสำเร็จ!',
                text: 'คุณสามารถเข้าสู่ระบบได้แล้ว รหัสผ่านของคุณถูกเข้ารหัสอย่างปลอดภัยแล้ว',
                confirmButtonColor: '#ee5a52'
            });
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
            await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sweetalert2$2f$dist$2f$sweetalert2$2e$esm$2e$all$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].fire({
                icon: 'error',
                title: 'เกิดข้อผิดพลาด!',
                text: errorMessage,
                footer: `<small>รายละเอียด: ${error.message}</small>`,
                confirmButtonColor: '#ee5a52'
            });
        } finally{
            setIsLoading(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'linear-gradient(135deg, #1e1e1e 0%, #2d1b1b 25%, #8b0000 50%, #dc143c 75%, #1a1a1a 100%)',
            padding: '2rem',
            position: 'relative'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: `
          radial-gradient(circle at 20% 20%, rgba(220, 20, 60, 0.1) 0%, transparent 50%),
          radial-gradient(circle at 80% 80%, rgba(139, 0, 0, 0.1) 0%, transparent 50%),
          radial-gradient(circle at 40% 60%, rgba(255, 69, 0, 0.05) 0%, transparent 50%)
        `,
                    zIndex: 0
                }
            }, void 0, false, {
                fileName: "[project]/app/Register/page.js",
                lineNumber: 321,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container py-5",
                style: {
                    position: 'relative',
                    zIndex: 1
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "row justify-content-center",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "col-md-8 col-lg-6",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "card shadow-lg border-0",
                            style: {
                                borderRadius: '25px',
                                background: 'linear-gradient(145deg, rgba(30, 30, 30, 0.95), rgba(45, 27, 27, 0.9))',
                                backdropFilter: 'blur(15px)',
                                border: '1px solid rgba(220, 20, 60, 0.2)',
                                boxShadow: `
                0 25px 50px rgba(0, 0, 0, 0.5),
                0 0 0 1px rgba(220, 20, 60, 0.1),
                inset 0 1px 0 rgba(255, 255, 255, 0.1)
              `
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "card-header text-center border-0 pb-0",
                                    style: {
                                        background: 'transparent',
                                        borderRadius: '25px 25px 0 0'
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "py-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mb-3",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        fontSize: '3rem',
                                                        background: 'linear-gradient(45deg, #ff4757, #dc143c, #8b0000)',
                                                        WebkitBackgroundClip: 'text',
                                                        WebkitTextFillColor: 'transparent',
                                                        backgroundClip: 'text',
                                                        filter: 'drop-shadow(0 0 10px rgba(220, 20, 60, 0.5))'
                                                    },
                                                    children: "🌟"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/Register/page.js",
                                                    lineNumber: 355,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/app/Register/page.js",
                                                lineNumber: 354,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "mb-0",
                                                style: {
                                                    background: 'linear-gradient(45deg, #ff4757, #dc143c, #ee5a52)',
                                                    WebkitBackgroundClip: 'text',
                                                    WebkitTextFillColor: 'transparent',
                                                    backgroundClip: 'text',
                                                    fontWeight: 'bold',
                                                    textShadow: '0 0 20px rgba(220, 20, 60, 0.3)'
                                                },
                                                children: "สมัครสมาชิก"
                                            }, void 0, false, {
                                                fileName: "[project]/app/Register/page.js",
                                                lineNumber: 366,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mt-2",
                                                style: {
                                                    color: '#cccccc'
                                                },
                                                children: "กรอกข้อมูลเพื่อสร้างบัญชีใหม่"
                                            }, void 0, false, {
                                                fileName: "[project]/app/Register/page.js",
                                                lineNumber: 376,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/Register/page.js",
                                        lineNumber: 353,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/app/Register/page.js",
                                    lineNumber: 349,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "card-body px-5 py-4",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                        onSubmit: handleSubmit,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mb-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "form-label fw-bold",
                                                        style: {
                                                            color: '#ffffff'
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                className: "fas fa-user me-2",
                                                                style: {
                                                                    color: '#ee5a52'
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/Register/page.js",
                                                                lineNumber: 385,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            "ชื่อผู้ใช้"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/Register/page.js",
                                                        lineNumber: 384,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "text",
                                                        name: "username",
                                                        className: `form-control ${errors.username ? 'is-invalid' : ''}`,
                                                        value: formData.username,
                                                        onChange: handleChange,
                                                        placeholder: "กรอกชื่อผู้ใช้",
                                                        disabled: isLoading,
                                                        style: {
                                                            borderRadius: '12px',
                                                            border: '2px solid rgba(220, 20, 60, 0.3)',
                                                            padding: '12px 16px',
                                                            fontSize: '14px',
                                                            backgroundColor: 'rgba(45, 27, 27, 0.8)',
                                                            color: '#ffffff',
                                                            boxShadow: 'inset 0 2px 4px rgba(0, 0, 0, 0.3)',
                                                            transition: 'all 0.3s ease'
                                                        },
                                                        onFocus: (e)=>{
                                                            e.target.style.border = '2px solid #ee5a52';
                                                            e.target.style.boxShadow = '0 0 15px rgba(238, 90, 82, 0.3), inset 0 2px 4px rgba(0, 0, 0, 0.3)';
                                                        },
                                                        onBlur: (e)=>{
                                                            e.target.style.border = '2px solid rgba(220, 20, 60, 0.3)';
                                                            e.target.style.boxShadow = 'inset 0 2px 4px rgba(0, 0, 0, 0.3)';
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/Register/page.js",
                                                        lineNumber: 388,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    errors.username && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "invalid-feedback",
                                                        children: errors.username
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/Register/page.js",
                                                        lineNumber: 415,
                                                        columnNumber: 41
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/Register/page.js",
                                                lineNumber: 383,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mb-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "form-label fw-bold",
                                                        style: {
                                                            color: '#ffffff'
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                className: "fas fa-lock me-2",
                                                                style: {
                                                                    color: '#ee5a52'
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/Register/page.js",
                                                                lineNumber: 421,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            "รหัสผ่าน",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                                className: "text-danger ms-2",
                                                                children: "*จำเป็น"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/Register/page.js",
                                                                lineNumber: 423,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/Register/page.js",
                                                        lineNumber: 420,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "position-relative",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: showPassword ? 'text' : 'password',
                                                                name: "password",
                                                                className: `form-control ${errors.password ? 'is-invalid' : ''}`,
                                                                value: formData.password,
                                                                onChange: handleChange,
                                                                placeholder: "กรอกรหัสผ่าน (อย่างน้อย 8 ตัวอักษร)",
                                                                disabled: isLoading,
                                                                style: {
                                                                    borderRadius: '12px',
                                                                    border: '2px solid rgba(220, 20, 60, 0.3)',
                                                                    padding: '12px 45px 12px 16px',
                                                                    fontSize: '14px',
                                                                    backgroundColor: 'rgba(45, 27, 27, 0.8)',
                                                                    color: '#ffffff',
                                                                    boxShadow: 'inset 0 2px 4px rgba(0, 0, 0, 0.3)',
                                                                    transition: 'all 0.3s ease'
                                                                },
                                                                onFocus: (e)=>{
                                                                    e.target.style.border = '2px solid #ee5a52';
                                                                    e.target.style.boxShadow = '0 0 15px rgba(238, 90, 82, 0.3), inset 0 2px 4px rgba(0, 0, 0, 0.3)';
                                                                },
                                                                onBlur: (e)=>{
                                                                    e.target.style.border = '2px solid rgba(220, 20, 60, 0.3)';
                                                                    e.target.style.boxShadow = 'inset 0 2px 4px rgba(0, 0, 0, 0.3)';
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/Register/page.js",
                                                                lineNumber: 426,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "button",
                                                                className: "btn position-absolute",
                                                                onClick: ()=>setShowPassword(!showPassword),
                                                                disabled: isLoading,
                                                                style: {
                                                                    right: '10px',
                                                                    top: '50%',
                                                                    transform: 'translateY(-50%)',
                                                                    border: 'none',
                                                                    background: 'transparent',
                                                                    color: '#ee5a52',
                                                                    padding: '0 8px'
                                                                },
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                    className: `fas ${showPassword ? 'fa-eye-slash' : 'fa-eye'}`
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/Register/page.js",
                                                                    lineNumber: 468,
                                                                    columnNumber: 25
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/Register/page.js",
                                                                lineNumber: 453,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/Register/page.js",
                                                        lineNumber: 425,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    errors.password && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "invalid-feedback",
                                                        children: errors.password
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/Register/page.js",
                                                        lineNumber: 471,
                                                        columnNumber: 41
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    formData.password && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "mt-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "d-flex justify-content-between align-items-center mb-1",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                                        style: {
                                                                            color: '#cccccc'
                                                                        },
                                                                        children: "ความแข็งแกร่งของรหัสผ่าน:"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/Register/page.js",
                                                                        lineNumber: 477,
                                                                        columnNumber: 27
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                                        style: {
                                                                            color: passwordStrength.color,
                                                                            fontWeight: 'bold'
                                                                        },
                                                                        children: passwordStrength.strengthText
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/Register/page.js",
                                                                        lineNumber: 478,
                                                                        columnNumber: 27
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/Register/page.js",
                                                                lineNumber: 476,
                                                                columnNumber: 25
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "progress",
                                                                style: {
                                                                    height: '6px',
                                                                    borderRadius: '3px',
                                                                    backgroundColor: 'rgba(0, 0, 0, 0.3)',
                                                                    boxShadow: 'inset 0 1px 2px rgba(0, 0, 0, 0.5)'
                                                                },
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "progress-bar",
                                                                    style: {
                                                                        width: `${passwordStrength.score / 4 * 100}%`,
                                                                        background: `linear-gradient(90deg, ${passwordStrength.color}, ${passwordStrength.color}dd)`,
                                                                        transition: 'all 0.3s ease',
                                                                        boxShadow: `0 0 10px ${passwordStrength.color}33`
                                                                    }
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/Register/page.js",
                                                                    lineNumber: 488,
                                                                    columnNumber: 27
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/Register/page.js",
                                                                lineNumber: 482,
                                                                columnNumber: 25
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                                style: {
                                                                    color: '#cccccc'
                                                                },
                                                                className: "d-block mt-1",
                                                                children: passwordStrength.feedback
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/Register/page.js",
                                                                lineNumber: 498,
                                                                columnNumber: 25
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            passwordStrength.score >= 3 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                                style: {
                                                                    color: '#ee5a52'
                                                                },
                                                                className: "d-block mt-1",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                        className: "fas fa-check-circle me-1"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/Register/page.js",
                                                                        lineNumber: 503,
                                                                        columnNumber: 29
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    "รหัสผ่านมีความปลอดภัยเพียงพอ"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/Register/page.js",
                                                                lineNumber: 502,
                                                                columnNumber: 27
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/Register/page.js",
                                                        lineNumber: 475,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "mt-2",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                            style: {
                                                                color: '#ff6b6b'
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                    className: "fas fa-shield-alt me-1"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/Register/page.js",
                                                                    lineNumber: 512,
                                                                    columnNumber: 25
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                "รหัสผ่านจะถูกเข้ารหัสอย่างปลอดภัยก่อนบันทึก"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/Register/page.js",
                                                            lineNumber: 511,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/Register/page.js",
                                                        lineNumber: 510,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/Register/page.js",
                                                lineNumber: 419,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "row mb-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "col-md-4",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "form-label fw-bold",
                                                                style: {
                                                                    color: '#ffffff'
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                        className: "fas fa-crown me-2",
                                                                        style: {
                                                                            color: '#ee5a52'
                                                                        }
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/Register/page.js",
                                                                        lineNumber: 522,
                                                                        columnNumber: 25
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    "คำนำหน้าชื่อ"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/Register/page.js",
                                                                lineNumber: 521,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                name: "firstname",
                                                                className: `form-select ${errors.firstname ? 'is-invalid' : ''}`,
                                                                value: formData.firstname,
                                                                onChange: handleChange,
                                                                disabled: isLoading,
                                                                style: {
                                                                    borderRadius: '12px',
                                                                    border: '2px solid rgba(220, 20, 60, 0.3)',
                                                                    padding: '12px 16px',
                                                                    fontSize: '14px',
                                                                    backgroundColor: 'rgba(45, 27, 27, 0.8)',
                                                                    color: '#ffffff',
                                                                    boxShadow: 'inset 0 2px 4px rgba(0, 0, 0, 0.3)',
                                                                    transition: 'all 0.3s ease'
                                                                },
                                                                onFocus: (e)=>{
                                                                    e.target.style.border = '2px solid #ee5a52';
                                                                    e.target.style.boxShadow = '0 0 15px rgba(238, 90, 82, 0.3), inset 0 2px 4px rgba(0, 0, 0, 0.3)';
                                                                },
                                                                onBlur: (e)=>{
                                                                    e.target.style.border = '2px solid rgba(220, 20, 60, 0.3)';
                                                                    e.target.style.boxShadow = 'inset 0 2px 4px rgba(0, 0, 0, 0.3)';
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: "",
                                                                        children: "เลือก"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/Register/page.js",
                                                                        lineNumber: 550,
                                                                        columnNumber: 25
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: "นาย",
                                                                        children: "นาย"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/Register/page.js",
                                                                        lineNumber: 551,
                                                                        columnNumber: 25
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: "นาง",
                                                                        children: "นาง"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/Register/page.js",
                                                                        lineNumber: 552,
                                                                        columnNumber: 25
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: "นางสาว",
                                                                        children: "นางสาว"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/Register/page.js",
                                                                        lineNumber: 553,
                                                                        columnNumber: 25
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/Register/page.js",
                                                                lineNumber: 525,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            errors.firstname && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "invalid-feedback",
                                                                children: errors.firstname
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/Register/page.js",
                                                                lineNumber: 555,
                                                                columnNumber: 44
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/Register/page.js",
                                                        lineNumber: 520,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "col-md-4",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "form-label fw-bold",
                                                                style: {
                                                                    color: '#ffffff'
                                                                },
                                                                children: "ชื่อ"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/Register/page.js",
                                                                lineNumber: 559,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "text",
                                                                name: "fullname",
                                                                className: `form-control ${errors.fullname ? 'is-invalid' : ''}`,
                                                                value: formData.fullname,
                                                                onChange: handleChange,
                                                                placeholder: "ชื่อ",
                                                                disabled: isLoading,
                                                                style: {
                                                                    borderRadius: '12px',
                                                                    border: '2px solid rgba(220, 20, 60, 0.3)',
                                                                    padding: '12px 16px',
                                                                    fontSize: '14px',
                                                                    backgroundColor: 'rgba(45, 27, 27, 0.8)',
                                                                    color: '#ffffff',
                                                                    boxShadow: 'inset 0 2px 4px rgba(0, 0, 0, 0.3)',
                                                                    transition: 'all 0.3s ease'
                                                                },
                                                                onFocus: (e)=>{
                                                                    e.target.style.border = '2px solid #ee5a52';
                                                                    e.target.style.boxShadow = '0 0 15px rgba(238, 90, 82, 0.3), inset 0 2px 4px rgba(0, 0, 0, 0.3)';
                                                                },
                                                                onBlur: (e)=>{
                                                                    e.target.style.border = '2px solid rgba(220, 20, 60, 0.3)';
                                                                    e.target.style.boxShadow = 'inset 0 2px 4px rgba(0, 0, 0, 0.3)';
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/Register/page.js",
                                                                lineNumber: 560,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            errors.fullname && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "invalid-feedback",
                                                                children: errors.fullname
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/Register/page.js",
                                                                lineNumber: 587,
                                                                columnNumber: 43
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/Register/page.js",
                                                        lineNumber: 558,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "col-md-4",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "form-label fw-bold",
                                                                style: {
                                                                    color: '#ffffff'
                                                                },
                                                                children: "นามสกุล"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/Register/page.js",
                                                                lineNumber: 591,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "text",
                                                                name: "lastname",
                                                                className: `form-control ${errors.lastname ? 'is-invalid' : ''}`,
                                                                value: formData.lastname,
                                                                onChange: handleChange,
                                                                placeholder: "นามสกุล",
                                                                disabled: isLoading,
                                                                style: {
                                                                    borderRadius: '12px',
                                                                    border: '2px solid rgba(220, 20, 60, 0.3)',
                                                                    padding: '12px 16px',
                                                                    fontSize: '14px',
                                                                    backgroundColor: 'rgba(45, 27, 27, 0.8)',
                                                                    color: '#ffffff',
                                                                    boxShadow: 'inset 0 2px 4px rgba(0, 0, 0, 0.3)',
                                                                    transition: 'all 0.3s ease'
                                                                },
                                                                onFocus: (e)=>{
                                                                    e.target.style.border = '2px solid #ee5a52';
                                                                    e.target.style.boxShadow = '0 0 15px rgba(238, 90, 82, 0.3), inset 0 2px 4px rgba(0, 0, 0, 0.3)';
                                                                },
                                                                onBlur: (e)=>{
                                                                    e.target.style.border = '2px solid rgba(220, 20, 60, 0.3)';
                                                                    e.target.style.boxShadow = 'inset 0 2px 4px rgba(0, 0, 0, 0.3)';
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/Register/page.js",
                                                                lineNumber: 592,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            errors.lastname && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "invalid-feedback",
                                                                children: errors.lastname
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/Register/page.js",
                                                                lineNumber: 619,
                                                                columnNumber: 43
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/Register/page.js",
                                                        lineNumber: 590,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/Register/page.js",
                                                lineNumber: 519,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mb-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "form-label fw-bold",
                                                        style: {
                                                            color: '#ffffff'
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                className: "fas fa-map-marker-alt me-2",
                                                                style: {
                                                                    color: '#ee5a52'
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/Register/page.js",
                                                                lineNumber: 626,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            "ที่อยู่"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/Register/page.js",
                                                        lineNumber: 625,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                        name: "address",
                                                        className: `form-control ${errors.address ? 'is-invalid' : ''}`,
                                                        value: formData.address,
                                                        onChange: handleChange,
                                                        placeholder: "กรอกที่อยู่",
                                                        rows: "3",
                                                        disabled: isLoading,
                                                        style: {
                                                            borderRadius: '12px',
                                                            border: '2px solid rgba(220, 20, 60, 0.3)',
                                                            padding: '12px 16px',
                                                            fontSize: '14px',
                                                            resize: 'vertical',
                                                            backgroundColor: 'rgba(45, 27, 27, 0.8)',
                                                            color: '#ffffff',
                                                            boxShadow: 'inset 0 2px 4px rgba(0, 0, 0, 0.3)',
                                                            transition: 'all 0.3s ease'
                                                        },
                                                        onFocus: (e)=>{
                                                            e.target.style.border = '2px solid #ee5a52';
                                                            e.target.style.boxShadow = '0 0 15px rgba(238, 90, 82, 0.3), inset 0 2px 4px rgba(0, 0, 0, 0.3)';
                                                        },
                                                        onBlur: (e)=>{
                                                            e.target.style.border = '2px solid rgba(220, 20, 60, 0.3)';
                                                            e.target.style.boxShadow = 'inset 0 2px 4px rgba(0, 0, 0, 0.3)';
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/Register/page.js",
                                                        lineNumber: 629,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    errors.address && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "invalid-feedback",
                                                        children: errors.address
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/Register/page.js",
                                                        lineNumber: 657,
                                                        columnNumber: 40
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/Register/page.js",
                                                lineNumber: 624,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "row mb-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "col-md-6",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "form-label fw-bold",
                                                                style: {
                                                                    color: '#ffffff'
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                        className: "fas fa-venus-mars me-2",
                                                                        style: {
                                                                            color: '#ee5a52'
                                                                        }
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/Register/page.js",
                                                                        lineNumber: 664,
                                                                        columnNumber: 25
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    "เพศ"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/Register/page.js",
                                                                lineNumber: 663,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "mt-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "form-check form-check-inline",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                className: "form-check-input",
                                                                                type: "radio",
                                                                                name: "sex",
                                                                                value: "male",
                                                                                checked: formData.sex === 'male',
                                                                                onChange: handleChange,
                                                                                disabled: isLoading,
                                                                                style: {
                                                                                    borderColor: '#ee5a52',
                                                                                    transform: 'scale(1.1)',
                                                                                    accentColor: '#ee5a52'
                                                                                }
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/Register/page.js",
                                                                                lineNumber: 669,
                                                                                columnNumber: 27
                                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                className: "form-check-label",
                                                                                style: {
                                                                                    color: '#ffffff'
                                                                                },
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                                        className: "fas fa-mars me-1",
                                                                                        style: {
                                                                                            color: '#ff6b6b'
                                                                                        }
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/Register/page.js",
                                                                                        lineNumber: 684,
                                                                                        columnNumber: 29
                                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                                    "ชาย"
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/app/Register/page.js",
                                                                                lineNumber: 683,
                                                                                columnNumber: 27
                                                                            }, ("TURBOPACK compile-time value", void 0))
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/Register/page.js",
                                                                        lineNumber: 668,
                                                                        columnNumber: 25
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "form-check form-check-inline",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                className: "form-check-input",
                                                                                type: "radio",
                                                                                name: "sex",
                                                                                value: "female",
                                                                                checked: formData.sex === 'female',
                                                                                onChange: handleChange,
                                                                                disabled: isLoading,
                                                                                style: {
                                                                                    borderColor: '#ee5a52',
                                                                                    transform: 'scale(1.1)',
                                                                                    accentColor: '#ee5a52'
                                                                                }
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/Register/page.js",
                                                                                lineNumber: 689,
                                                                                columnNumber: 27
                                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                className: "form-check-label",
                                                                                style: {
                                                                                    color: '#ffffff'
                                                                                },
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                                        className: "fas fa-venus me-1",
                                                                                        style: {
                                                                                            color: '#ff4757'
                                                                                        }
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/Register/page.js",
                                                                                        lineNumber: 704,
                                                                                        columnNumber: 29
                                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                                    "หญิง"
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/app/Register/page.js",
                                                                                lineNumber: 703,
                                                                                columnNumber: 27
                                                                            }, ("TURBOPACK compile-time value", void 0))
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/Register/page.js",
                                                                        lineNumber: 688,
                                                                        columnNumber: 25
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/Register/page.js",
                                                                lineNumber: 667,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            errors.sex && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-danger mt-1",
                                                                style: {
                                                                    fontSize: '0.875rem'
                                                                },
                                                                children: errors.sex
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/Register/page.js",
                                                                lineNumber: 709,
                                                                columnNumber: 38
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/Register/page.js",
                                                        lineNumber: 662,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "col-md-6",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "form-label fw-bold",
                                                                style: {
                                                                    color: '#ffffff'
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                        className: "fas fa-birthday-cake me-2",
                                                                        style: {
                                                                            color: '#ee5a52'
                                                                        }
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/Register/page.js",
                                                                        lineNumber: 714,
                                                                        columnNumber: 25
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    "วันเกิด"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/Register/page.js",
                                                                lineNumber: 713,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "date",
                                                                name: "birthday",
                                                                className: `form-control ${errors.birthday ? 'is-invalid' : ''}`,
                                                                value: formData.birthday,
                                                                onChange: handleChange,
                                                                disabled: isLoading,
                                                                style: {
                                                                    borderRadius: '12px',
                                                                    border: '2px solid rgba(220, 20, 60, 0.3)',
                                                                    padding: '12px 16px',
                                                                    fontSize: '14px',
                                                                    backgroundColor: 'rgba(45, 27, 27, 0.8)',
                                                                    color: '#ffffff',
                                                                    boxShadow: 'inset 0 2px 4px rgba(0, 0, 0, 0.3)',
                                                                    transition: 'all 0.3s ease',
                                                                    colorScheme: 'dark'
                                                                },
                                                                onFocus: (e)=>{
                                                                    e.target.style.border = '2px solid #ee5a52';
                                                                    e.target.style.boxShadow = '0 0 15px rgba(238, 90, 82, 0.3), inset 0 2px 4px rgba(0, 0, 0, 0.3)';
                                                                },
                                                                onBlur: (e)=>{
                                                                    e.target.style.border = '2px solid rgba(220, 20, 60, 0.3)';
                                                                    e.target.style.boxShadow = 'inset 0 2px 4px rgba(0, 0, 0, 0.3)';
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/Register/page.js",
                                                                lineNumber: 717,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            errors.birthday && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "invalid-feedback",
                                                                children: errors.birthday
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/Register/page.js",
                                                                lineNumber: 744,
                                                                columnNumber: 43
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/Register/page.js",
                                                        lineNumber: 712,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/Register/page.js",
                                                lineNumber: 661,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mb-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "form-check",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                className: "form-check-input",
                                                                type: "checkbox",
                                                                name: "acceptTerms",
                                                                checked: formData.acceptTerms,
                                                                onChange: handleChange,
                                                                disabled: isLoading,
                                                                style: {
                                                                    borderColor: '#ee5a52',
                                                                    transform: 'scale(1.1)',
                                                                    accentColor: '#ee5a52'
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/Register/page.js",
                                                                lineNumber: 751,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "form-check-label",
                                                                style: {
                                                                    color: '#ffffff'
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                        className: "fas fa-shield-alt me-2",
                                                                        style: {
                                                                            color: '#ee5a52'
                                                                        }
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/Register/page.js",
                                                                        lineNumber: 765,
                                                                        columnNumber: 25
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    "ฉันยอมรับ ",
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                        href: "#",
                                                                        style: {
                                                                            color: '#ff6b6b',
                                                                            textDecoration: 'none'
                                                                        },
                                                                        children: "เงื่อนไขการใช้งาน"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/Register/page.js",
                                                                        lineNumber: 766,
                                                                        columnNumber: 35
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    " และ ",
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                        href: "#",
                                                                        style: {
                                                                            color: '#ff6b6b',
                                                                            textDecoration: 'none'
                                                                        },
                                                                        children: "นโยบายความเป็นส่วนตัว"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/Register/page.js",
                                                                        lineNumber: 766,
                                                                        columnNumber: 124
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/Register/page.js",
                                                                lineNumber: 764,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/Register/page.js",
                                                        lineNumber: 750,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    errors.acceptTerms && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-danger mt-1",
                                                        style: {
                                                            fontSize: '0.875rem'
                                                        },
                                                        children: errors.acceptTerms
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/Register/page.js",
                                                        lineNumber: 769,
                                                        columnNumber: 44
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/Register/page.js",
                                                lineNumber: 749,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "alert",
                                                style: {
                                                    backgroundColor: 'rgba(238, 90, 82, 0.15)',
                                                    border: '1px solid rgba(238, 90, 82, 0.3)',
                                                    borderRadius: '12px',
                                                    color: '#ffffff',
                                                    boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "d-flex align-items-center",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                            className: "fas fa-info-circle me-2",
                                                            style: {
                                                                color: '#ee5a52'
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/Register/page.js",
                                                            lineNumber: 781,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                            className: "mb-0",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                    children: "ความปลอดภัย:"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/Register/page.js",
                                                                    lineNumber: 783,
                                                                    columnNumber: 25
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                " ข้อมูลทั้งหมดจะถูกเข้ารหัสก่อนจัดเก็บ และเราจะไม่เปิดเผยข้อมูลส่วนบุคคลของคุณแก่บุคคลที่สาม"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/Register/page.js",
                                                            lineNumber: 782,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/Register/page.js",
                                                    lineNumber: 780,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/app/Register/page.js",
                                                lineNumber: 773,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "d-grid",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "submit",
                                                    className: "btn btn-lg",
                                                    disabled: isLoading,
                                                    style: {
                                                        background: isLoading ? 'linear-gradient(45deg, #666666, #444444)' : 'linear-gradient(45deg, #ff4757, #dc143c, #8b0000)',
                                                        border: 'none',
                                                        borderRadius: '15px',
                                                        color: 'white',
                                                        padding: '15px 0',
                                                        fontSize: '16px',
                                                        fontWeight: 'bold',
                                                        boxShadow: isLoading ? '0 4px 15px rgba(0, 0, 0, 0.3)' : '0 8px 25px rgba(220, 20, 60, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.1)',
                                                        transition: 'all 0.3s ease',
                                                        cursor: isLoading ? 'not-allowed' : 'pointer',
                                                        position: 'relative',
                                                        overflow: 'hidden'
                                                    },
                                                    onMouseOver: (e)=>{
                                                        if (!isLoading) {
                                                            e.target.style.transform = 'translateY(-2px)';
                                                            e.target.style.boxShadow = '0 12px 35px rgba(220, 20, 60, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.2)';
                                                            e.target.style.background = 'linear-gradient(45deg, #ff6b6b, #ee5a52, #dc143c)';
                                                        }
                                                    },
                                                    onMouseOut: (e)=>{
                                                        if (!isLoading) {
                                                            e.target.style.transform = 'translateY(0)';
                                                            e.target.style.boxShadow = '0 8px 25px rgba(220, 20, 60, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.1)';
                                                            e.target.style.background = 'linear-gradient(45deg, #ff4757, #dc143c, #8b0000)';
                                                        }
                                                    },
                                                    children: isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                className: "fas fa-spinner fa-spin me-2"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/Register/page.js",
                                                                lineNumber: 829,
                                                                columnNumber: 27
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            "กำลังสมัครสมาชิก..."
                                                        ]
                                                    }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                className: "fas fa-user-plus me-2"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/Register/page.js",
                                                                lineNumber: 834,
                                                                columnNumber: 27
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            "สมัครสมาชิก"
                                                        ]
                                                    }, void 0, true)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/Register/page.js",
                                                    lineNumber: 790,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/app/Register/page.js",
                                                lineNumber: 789,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/Register/page.js",
                                        lineNumber: 381,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/app/Register/page.js",
                                    lineNumber: 380,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "card-footer text-center border-0 bg-transparent",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mb-0",
                                        style: {
                                            color: '#cccccc'
                                        },
                                        children: [
                                            "มีบัญชีอยู่แล้ว? ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "/Login",
                                                style: {
                                                    color: '#ff6b6b',
                                                    textDecoration: 'none',
                                                    fontWeight: 'bold'
                                                },
                                                children: "เข้าสู่ระบบ"
                                            }, void 0, false, {
                                                fileName: "[project]/app/Register/page.js",
                                                lineNumber: 845,
                                                columnNumber: 36
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/Register/page.js",
                                        lineNumber: 844,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/app/Register/page.js",
                                    lineNumber: 843,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/Register/page.js",
                            lineNumber: 338,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/app/Register/page.js",
                        lineNumber: 337,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/app/Register/page.js",
                    lineNumber: 336,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/app/Register/page.js",
                lineNumber: 335,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("link", {
                href: "https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/css/bootstrap.min.css",
                rel: "stylesheet"
            }, void 0, false, {
                fileName: "[project]/app/Register/page.js",
                lineNumber: 854,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("link", {
                href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css",
                rel: "stylesheet"
            }, void 0, false, {
                fileName: "[project]/app/Register/page.js",
                lineNumber: 859,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
        ::placeholder {
          color: #999999 !important;
          opacity: 1;
        }
        
        .form-control:focus::placeholder {
          color: #666666 !important;
        }
        
        .form-select option {
          background-color: #2d1b1b;
          color: #ffffff;
        }
        
        .form-check-input:checked {
          background-color: #ee5a52;
          border-color: #ee5a52;
        }
        
        .progress {
          background-color: rgba(0, 0, 0, 0.3) !important;
        }
        
        /* Custom scrollbar for textarea */
        textarea::-webkit-scrollbar {
          width: 8px;
        }
        
        textarea::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.2);
          border-radius: 4px;
        }
        
        textarea::-webkit-scrollbar-thumb {
          background: rgba(238, 90, 82, 0.6);
          border-radius: 4px;
        }
        
        textarea::-webkit-scrollbar-thumb:hover {
          background: rgba(238, 90, 82, 0.8);
        }
      `
            }, void 0, false, {
                fileName: "[project]/app/Register/page.js",
                lineNumber: 864,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/app/Register/page.js",
        lineNumber: 310,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = Register;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__ca4cb70e._.js.map