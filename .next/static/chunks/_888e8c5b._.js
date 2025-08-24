(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/admin/users/edit/[id]/page.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Page
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function Page(param) {
    let { params } = param;
    _s();
    const { id } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["use"])(params);
    const [items, setItems] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    // State สำหรับแต่ละ field
    const [username, setUsername] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [password, setPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [firstname, setFirstname] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [fullname, setFullname] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [lastname, setLastname] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [address, setAddress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [sex, setSex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [birthday, setBirthday] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [acceptTerms, setAcceptTerms] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [errors, setErrors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showPassword, setShowPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [passwordStrength, setPasswordStrength] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        score: 0,
        feedback: '',
        color: '#dc3545'
    });
    // Mock alert function for demonstration
    const showAlert = (type, title, message)=>{
        alert("".concat(type.toUpperCase(), ": ").concat(title, "\n").concat(message));
    };
    // ดึงข้อมูลผู้ใช้เมื่อ component mount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Page.useEffect": ()=>{
            const fetchUserData = {
                "Page.useEffect.fetchUserData": async ()=>{
                    try {
                        // Mock data for demonstration
                        const userData = {
                            username: 'john_doe',
                            firstname: 'นาย',
                            fullname: 'จอห์น',
                            lastname: 'โด',
                            address: '123 ถนนสุขุมวิท กรุงเทพฯ',
                            sex: 'ชาย',
                            birthday: '1990-05-15'
                        };
                        setItems([
                            userData
                        ]);
                        setUsername(userData.username || '');
                        setFirstname(userData.firstname || '');
                        setFullname(userData.fullname || '');
                        setLastname(userData.lastname || '');
                        setAddress(userData.address || '');
                        setSex(userData.sex || '');
                        setBirthday(userData.birthday ? userData.birthday.split('T')[0] : '');
                        setAcceptTerms(true);
                    } catch (error) {
                        console.error('Error fetching user data:', error);
                    }
                }
            }["Page.useEffect.fetchUserData"];
            if (id) {
                fetchUserData();
            }
        }
    }["Page.useEffect"], [
        id
    ]);
    const validateForm = ()=>{
        const newErrors = {};
        if (!username) newErrors.username = 'กรุณากรอกชื่อผู้ใช้';
        else if (username.length < 3) newErrors.username = 'ชื่อผู้ใช้ต้องมีอย่างน้อย 3 ตัวอักษร';
        if (password && password.length < 6) newErrors.password = 'รหัสผ่านต้องมีอย่างน้อย 6 ตัวอักษร';
        if (!firstname) newErrors.firstname = 'กรุณาเลือกคำนำหน้าชื่อ';
        if (!fullname) newErrors.fullname = 'กรุณากรอกชื่อ';
        if (!lastname) newErrors.lastname = 'กรุณากรอกนามสกุล';
        if (!address) newErrors.address = 'กรุณากรอกที่อยู่';
        if (!sex) newErrors.sex = 'กรุณาเลือกเพศ';
        if (!birthday) newErrors.birthday = 'กรุณาเลือกวันเกิด';
        if (!acceptTerms) newErrors.acceptTerms = 'กรุณายอมรับเงื่อนไข';
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };
    const validatePasswordStrength = (password)=>{
        if (!password) {
            setPasswordStrength({
                score: 0,
                feedback: '',
                color: '#dc3545'
            });
            return;
        }
        let score = 0;
        let feedback = [];
        if (password.length >= 8) score += 1;
        else feedback.push('อย่างน้อย 8 ตัวอักษร');
        if (/[a-z]/.test(password)) score += 1;
        else feedback.push('ตัวพิมพ์เล็ก');
        if (/[A-Z]/.test(password)) score += 1;
        else feedback.push('ตัวพิมพ์ใหญ่');
        if (/[0-9]/.test(password)) score += 1;
        else feedback.push('ตัวเลข');
        if (/[^A-Za-z0-9]/.test(password)) score += 1;
        else feedback.push('อักขระพิเศษ');
        let strengthText = '';
        let color = '#dc3545';
        if (score <= 2) {
            strengthText = 'อ่อนแอ';
            color = '#dc3545';
        } else if (score === 3) {
            strengthText = 'ปานกลาง';
            color = '#ffc107';
        } else if (score === 4) {
            strengthText = 'ดี';
            color = '#17a2b8';
        } else {
            strengthText = 'แข็งแกร่งมาก';
            color = '#28a745';
        }
        setPasswordStrength({
            score: score,
            feedback: feedback.length > 0 ? "ขาด: ".concat(feedback.join(', ')) : 'รหัสผ่านแข็งแกร่ง!',
            color: color,
            strengthText: strengthText
        });
    };
    const handleUpdateSubmit = async (e)=>{
        e.preventDefault();
        const isValid = validateForm();
        if (!isValid) {
            showAlert('warning', 'ข้อมูลไม่ครบถ้วน!', 'กรุณากรอกข้อมูลให้ครบถ้วนและถูกต้อง');
            return;
        }
        setIsLoading(true);
        try {
            // Simulate API call
            await new Promise((resolve)=>setTimeout(resolve, 2000));
            showAlert('success', 'แก้ไขข้อมูลสำเร็จ!', password ? 'ข้อมูลและรหัสผ่านของคุณถูกแก้ไขเรียบร้อยแล้ว' : 'ข้อมูลของคุณถูกแก้ไขเรียบร้อยแล้ว');
            setPassword('');
        } catch (error) {
            showAlert('error', 'เกิดข้อผิดพลาด!', 'ไม่สามารถแก้ไขข้อมูลได้ กรุณาลองใหม่อีกครั้ง');
        } finally{
            setIsLoading(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                id: "a10a7a1bd848055",
                children: '@import "https://fonts.googleapis.com/css2?family=Noto+Sans+Thai:wght@300;400;500;600;700&display=swap";.sakura-container.jsx-a10a7a1bd848055{background:linear-gradient(135deg,#ffeef8 0%,#fff0f5 25%,#ffe4e1 50%,#fdf2f8 75%,#fef7ff 100%);min-height:100vh;font-family:Noto Sans Thai,sans-serif;position:relative;overflow:hidden}.sakura-petals.jsx-a10a7a1bd848055{z-index:1;width:100%;height:100%;position:absolute;overflow:hidden}.petal.jsx-a10a7a1bd848055{opacity:.7;background:linear-gradient(45deg,#ffb3d9,#f9c);border-radius:50% 10px;width:20px;height:20px;animation:linear infinite fall;position:absolute}.petal.jsx-a10a7a1bd848055:first-child{animation-duration:8s;animation-delay:0s;left:10%}.petal.jsx-a10a7a1bd848055:nth-child(2){animation-duration:12s;animation-delay:2s;left:20%}.petal.jsx-a10a7a1bd848055:nth-child(3){animation-duration:10s;animation-delay:1s;left:30%}.petal.jsx-a10a7a1bd848055:nth-child(4){animation-duration:14s;animation-delay:3s;left:40%}.petal.jsx-a10a7a1bd848055:nth-child(5){animation-duration:9s;animation-delay:.5s;left:50%}.petal.jsx-a10a7a1bd848055:nth-child(6){animation-duration:11s;animation-delay:4s;left:60%}.petal.jsx-a10a7a1bd848055:nth-child(7){animation-duration:13s;animation-delay:1.5s;left:70%}.petal.jsx-a10a7a1bd848055:nth-child(8){animation-duration:15s;animation-delay:2.5s;left:80%}.petal.jsx-a10a7a1bd848055:nth-child(9){animation-duration:7s;animation-delay:3.5s;left:90%}@keyframes fall{0%{opacity:.7;transform:translateY(-100px)rotate(0)}50%{opacity:1}to{opacity:0;transform:translateY(100vh)rotate(360deg)}}.form-card.jsx-a10a7a1bd848055{-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);z-index:10;background:rgba(255,255,255,.95);border:2px solid rgba(255,182,193,.3);border-radius:25px;max-width:700px;margin:20px auto;font-family:Noto Sans Thai,sans-serif;position:relative;box-shadow:0 20px 40px rgba(255,182,193,.2)}.form-card.jsx-a10a7a1bd848055:before{content:"";z-index:-1;background:linear-gradient(45deg,#ffb3d9,#f9c,#ffb3d9);border-radius:25px;position:absolute;top:-2px;bottom:-2px;left:-2px;right:-2px}.title-gradient.jsx-a10a7a1bd848055{-webkit-text-fill-color:transparent;text-shadow:0 4px 8px rgba(214,51,132,.2);background:linear-gradient(135deg,#d63384,#6f42c1,#d63384);-webkit-background-clip:text;background-clip:text;font-weight:700}.form-input.jsx-a10a7a1bd848055{background:rgba(255,240,245,.8);border:2px solid rgba(255,182,193,.3);border-radius:15px;width:100%;padding:12px 18px;font-family:Noto Sans Thai,sans-serif;font-size:16px;transition:all .3s;box-shadow:0 4px 8px rgba(255,182,193,.1)}.form-input.jsx-a10a7a1bd848055:focus{background:#fff0f5;border-color:#d63384;outline:none;transform:translateY(-2px);box-shadow:0 0 20px rgba(214,51,132,.2)}.form-input.jsx-a10a7a1bd848055::placeholder{color:#d63384;font-weight:400}.form-input.is-invalid.jsx-a10a7a1bd848055{border-color:#ff6b6b;box-shadow:0 0 10px rgba(255,107,107,.3)}.password-input-container.jsx-a10a7a1bd848055{position:relative}.password-toggle-btn.jsx-a10a7a1bd848055{color:#d63384;cursor:pointer;background:0 0;border:none;padding:5px;font-size:18px;transition:color .3s;position:absolute;top:50%;right:15px;transform:translateY(-50%)}.password-toggle-btn.jsx-a10a7a1bd848055:hover{color:#6f42c1}.password-strength.jsx-a10a7a1bd848055{margin-top:8px}.strength-bar.jsx-a10a7a1bd848055{background:rgba(255,182,193,.3);border-radius:3px;height:6px;margin-top:4px;overflow:hidden}.strength-fill.jsx-a10a7a1bd848055{border-radius:3px;height:100%;transition:all .3s}.submit-btn.jsx-a10a7a1bd848055{color:#fff;cursor:pointer;background:linear-gradient(135deg,#d63384,#6f42c1);border:none;border-radius:15px;width:100%;padding:15px 30px;font-family:Noto Sans Thai,sans-serif;font-size:16px;font-weight:600;transition:all .3s;position:relative;overflow:hidden;box-shadow:0 8px 16px rgba(214,51,132,.3)}.submit-btn.jsx-a10a7a1bd848055:before{content:"";background:linear-gradient(90deg,transparent,rgba(255,255,255,.2),transparent);width:100%;height:100%;transition:left .5s;position:absolute;top:0;left:-100%}.submit-btn.jsx-a10a7a1bd848055:hover:before{left:100%}.submit-btn.jsx-a10a7a1bd848055:hover{transform:translateY(-3px);box-shadow:0 12px 24px rgba(214,51,132,.4)}.submit-btn.jsx-a10a7a1bd848055:active{transform:translateY(-1px)}.submit-btn.jsx-a10a7a1bd848055:disabled{cursor:not-allowed;background:linear-gradient(135deg,#ccc,#999);transform:none;box-shadow:0 4px 8px rgba(0,0,0,.1)}.floating-sakura.jsx-a10a7a1bd848055{font-size:24px;animation:6s ease-in-out infinite float;position:absolute}.floating-sakura.jsx-a10a7a1bd848055:first-child{animation-delay:0s;top:10%;left:5%}.floating-sakura.jsx-a10a7a1bd848055:nth-child(2){animation-delay:2s;top:20%;right:5%}.floating-sakura.jsx-a10a7a1bd848055:nth-child(3){animation-delay:4s;bottom:10%;left:8%}.floating-sakura.jsx-a10a7a1bd848055:nth-child(4){animation-delay:1s;bottom:20%;right:8%}@keyframes float{0%,to{transform:translateY(0)rotate(0)}33%{transform:translateY(-20px)rotate(5deg)}66%{transform:translateY(-10px)rotate(-5deg)}}.row.jsx-a10a7a1bd848055{gap:15px;margin-bottom:20px;display:flex}.col-md-4.jsx-a10a7a1bd848055,.col-md-6.jsx-a10a7a1bd848055{flex:1}.col-md-4.jsx-a10a7a1bd848055{flex:0 0 33.3333%}.form-check.jsx-a10a7a1bd848055{align-items:center;gap:10px;margin-bottom:10px;display:flex}.form-check.jsx-a10a7a1bd848055 input[type=radio].jsx-a10a7a1bd848055,.form-check.jsx-a10a7a1bd848055 input[type=checkbox].jsx-a10a7a1bd848055{accent-color:#d63384;width:20px;height:20px}.form-check.jsx-a10a7a1bd848055 label.jsx-a10a7a1bd848055{color:#6f42c1;cursor:pointer;align-items:center;gap:5px;font-weight:500;display:flex}.invalid-feedback.jsx-a10a7a1bd848055{color:#ff6b6b;margin-top:5px;font-size:14px;display:block}.loading-spinner.jsx-a10a7a1bd848055{border:2px solid #fff;border-top-color:transparent;border-radius:50%;width:20px;height:20px;margin-right:8px;animation:1s linear infinite spin;display:inline-block}@keyframes spin{to{transform:rotate(360deg)}}.text-muted.jsx-a10a7a1bd848055{color:#6f42c1;font-size:14px}.link-style.jsx-a10a7a1bd848055{color:#d63384;font-weight:600;text-decoration:none}.link-style.jsx-a10a7a1bd848055:hover{text-decoration:underline}@media (max-width:768px){.row.jsx-a10a7a1bd848055{flex-direction:column;gap:0}.col-md-4.jsx-a10a7a1bd848055,.col-md-6.jsx-a10a7a1bd848055{flex:none;margin-bottom:20px}.form-card.jsx-a10a7a1bd848055{margin:10px;padding:20px}}.container.jsx-a10a7a1bd848055{justify-content:center;align-items:center;min-height:100vh;padding:20px;display:flex}'
            }, void 0, false, void 0, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-a10a7a1bd848055" + " " + "sakura-container",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-a10a7a1bd848055" + " " + "sakura-petals",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-a10a7a1bd848055" + " " + "petal"
                            }, void 0, false, {
                                fileName: "[project]/app/admin/users/edit/[id]/page.js",
                                lineNumber: 509,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-a10a7a1bd848055" + " " + "petal"
                            }, void 0, false, {
                                fileName: "[project]/app/admin/users/edit/[id]/page.js",
                                lineNumber: 510,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-a10a7a1bd848055" + " " + "petal"
                            }, void 0, false, {
                                fileName: "[project]/app/admin/users/edit/[id]/page.js",
                                lineNumber: 511,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-a10a7a1bd848055" + " " + "petal"
                            }, void 0, false, {
                                fileName: "[project]/app/admin/users/edit/[id]/page.js",
                                lineNumber: 512,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-a10a7a1bd848055" + " " + "petal"
                            }, void 0, false, {
                                fileName: "[project]/app/admin/users/edit/[id]/page.js",
                                lineNumber: 513,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-a10a7a1bd848055" + " " + "petal"
                            }, void 0, false, {
                                fileName: "[project]/app/admin/users/edit/[id]/page.js",
                                lineNumber: 514,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-a10a7a1bd848055" + " " + "petal"
                            }, void 0, false, {
                                fileName: "[project]/app/admin/users/edit/[id]/page.js",
                                lineNumber: 515,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-a10a7a1bd848055" + " " + "petal"
                            }, void 0, false, {
                                fileName: "[project]/app/admin/users/edit/[id]/page.js",
                                lineNumber: 516,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-a10a7a1bd848055" + " " + "petal"
                            }, void 0, false, {
                                fileName: "[project]/app/admin/users/edit/[id]/page.js",
                                lineNumber: 517,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/admin/users/edit/[id]/page.js",
                        lineNumber: 508,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-a10a7a1bd848055" + " " + "floating-sakura",
                        children: "🌸"
                    }, void 0, false, {
                        fileName: "[project]/app/admin/users/edit/[id]/page.js",
                        lineNumber: 520,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-a10a7a1bd848055" + " " + "floating-sakura",
                        children: "🌺"
                    }, void 0, false, {
                        fileName: "[project]/app/admin/users/edit/[id]/page.js",
                        lineNumber: 521,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-a10a7a1bd848055" + " " + "floating-sakura",
                        children: "🌸"
                    }, void 0, false, {
                        fileName: "[project]/app/admin/users/edit/[id]/page.js",
                        lineNumber: 522,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-a10a7a1bd848055" + " " + "floating-sakura",
                        children: "🌺"
                    }, void 0, false, {
                        fileName: "[project]/app/admin/users/edit/[id]/page.js",
                        lineNumber: 523,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-a10a7a1bd848055" + " " + "container",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                padding: '40px'
                            },
                            className: "jsx-a10a7a1bd848055" + " " + "form-card",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        textAlign: 'center',
                                        marginBottom: '30px'
                                    },
                                    className: "jsx-a10a7a1bd848055",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                            style: {
                                                fontSize: '2.5rem',
                                                marginBottom: '15px'
                                            },
                                            className: "jsx-a10a7a1bd848055" + " " + "title-gradient",
                                            children: "🌸 แก้ไขข้อมูลสมาชิก 🌸"
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/users/edit/[id]/page.js",
                                            lineNumber: 528,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            style: {
                                                color: '#6f42c1',
                                                fontWeight: '500',
                                                fontSize: '1.1rem'
                                            },
                                            className: "jsx-a10a7a1bd848055",
                                            children: "ปรับปรุงข้อมูลของคุณให้เป็นปัจจุบัน"
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/users/edit/[id]/page.js",
                                            lineNumber: 531,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/admin/users/edit/[id]/page.js",
                                    lineNumber: 527,
                                    columnNumber: 13
                                }, this),
                                items.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        textAlign: 'center',
                                        padding: '40px'
                                    },
                                    className: "jsx-a10a7a1bd848055",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-a10a7a1bd848055" + " " + "loading-spinner"
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/users/edit/[id]/page.js",
                                            lineNumber: 538,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "jsx-a10a7a1bd848055" + " " + "text-muted",
                                            children: "กำลังโหลดข้อมูล..."
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/users/edit/[id]/page.js",
                                            lineNumber: 539,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/admin/users/edit/[id]/page.js",
                                    lineNumber: 537,
                                    columnNumber: 15
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                    onSubmit: handleUpdateSubmit,
                                    className: "jsx-a10a7a1bd848055",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                marginBottom: '20px'
                                            },
                                            className: "jsx-a10a7a1bd848055",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    value: username,
                                                    onChange: (e)=>setUsername(e.target.value),
                                                    placeholder: "👤 ชื่อผู้ใช้",
                                                    disabled: isLoading,
                                                    required: true,
                                                    className: "jsx-a10a7a1bd848055" + " " + "form-input ".concat(errors.username ? 'is-invalid' : '')
                                                }, void 0, false, {
                                                    fileName: "[project]/app/admin/users/edit/[id]/page.js",
                                                    lineNumber: 545,
                                                    columnNumber: 19
                                                }, this),
                                                errors.username && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-a10a7a1bd848055" + " " + "invalid-feedback",
                                                    children: errors.username
                                                }, void 0, false, {
                                                    fileName: "[project]/app/admin/users/edit/[id]/page.js",
                                                    lineNumber: 554,
                                                    columnNumber: 39
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/admin/users/edit/[id]/page.js",
                                            lineNumber: 544,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                marginBottom: '20px'
                                            },
                                            className: "jsx-a10a7a1bd848055",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-a10a7a1bd848055" + " " + "password-input-container",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: showPassword ? 'text' : 'password',
                                                            value: password,
                                                            onChange: (e)=>{
                                                                setPassword(e.target.value);
                                                                validatePasswordStrength(e.target.value);
                                                            },
                                                            placeholder: "🔐 รหัสผ่านใหม่ (เว้นว่างไว้หากไม่ต้องการเปลี่ยน)",
                                                            disabled: isLoading,
                                                            style: {
                                                                paddingRight: '50px'
                                                            },
                                                            className: "jsx-a10a7a1bd848055" + " " + "form-input ".concat(errors.password ? 'is-invalid' : '')
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/admin/users/edit/[id]/page.js",
                                                            lineNumber: 560,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "button",
                                                            onClick: ()=>setShowPassword(!showPassword),
                                                            disabled: isLoading,
                                                            className: "jsx-a10a7a1bd848055" + " " + "password-toggle-btn",
                                                            children: showPassword ? '👁️' : '🙈'
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/admin/users/edit/[id]/page.js",
                                                            lineNumber: 572,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/admin/users/edit/[id]/page.js",
                                                    lineNumber: 559,
                                                    columnNumber: 19
                                                }, this),
                                                errors.password && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-a10a7a1bd848055" + " " + "invalid-feedback",
                                                    children: errors.password
                                                }, void 0, false, {
                                                    fileName: "[project]/app/admin/users/edit/[id]/page.js",
                                                    lineNumber: 581,
                                                    columnNumber: 39
                                                }, this),
                                                password && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-a10a7a1bd848055" + " " + "password-strength",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                display: 'flex',
                                                                justifyContent: 'space-between',
                                                                alignItems: 'center',
                                                                marginBottom: '5px'
                                                            },
                                                            className: "jsx-a10a7a1bd848055",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                                    className: "jsx-a10a7a1bd848055" + " " + "text-muted",
                                                                    children: "ความแข็งแกร่งของรหัสผ่าน:"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/admin/users/edit/[id]/page.js",
                                                                    lineNumber: 586,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                                    style: {
                                                                        color: passwordStrength.color,
                                                                        fontWeight: 'bold'
                                                                    },
                                                                    className: "jsx-a10a7a1bd848055",
                                                                    children: passwordStrength.strengthText
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/admin/users/edit/[id]/page.js",
                                                                    lineNumber: 587,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/admin/users/edit/[id]/page.js",
                                                            lineNumber: 585,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "jsx-a10a7a1bd848055" + " " + "strength-bar",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    width: "".concat(passwordStrength.score / 5 * 100, "%"),
                                                                    backgroundColor: passwordStrength.color
                                                                },
                                                                className: "jsx-a10a7a1bd848055" + " " + "strength-fill"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/admin/users/edit/[id]/page.js",
                                                                lineNumber: 592,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/admin/users/edit/[id]/page.js",
                                                            lineNumber: 591,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                            style: {
                                                                display: 'block',
                                                                marginTop: '5px'
                                                            },
                                                            className: "jsx-a10a7a1bd848055" + " " + "text-muted",
                                                            children: passwordStrength.feedback
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/admin/users/edit/[id]/page.js",
                                                            lineNumber: 600,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/admin/users/edit/[id]/page.js",
                                                    lineNumber: 584,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/admin/users/edit/[id]/page.js",
                                            lineNumber: 558,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-a10a7a1bd848055" + " " + "row",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-a10a7a1bd848055" + " " + "col-md-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                            value: firstname,
                                                            onChange: (e)=>setFirstname(e.target.value),
                                                            disabled: isLoading,
                                                            required: true,
                                                            className: "jsx-a10a7a1bd848055" + " " + "form-input ".concat(errors.firstname ? 'is-invalid' : ''),
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "",
                                                                    className: "jsx-a10a7a1bd848055",
                                                                    children: "🌸 เลือกคำนำหน้าชื่อ"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/admin/users/edit/[id]/page.js",
                                                                    lineNumber: 617,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "นาย",
                                                                    className: "jsx-a10a7a1bd848055",
                                                                    children: "นาย"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/admin/users/edit/[id]/page.js",
                                                                    lineNumber: 618,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "นาง",
                                                                    className: "jsx-a10a7a1bd848055",
                                                                    children: "นาง"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/admin/users/edit/[id]/page.js",
                                                                    lineNumber: 619,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "นางสาว",
                                                                    className: "jsx-a10a7a1bd848055",
                                                                    children: "นางสาว"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/admin/users/edit/[id]/page.js",
                                                                    lineNumber: 620,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/admin/users/edit/[id]/page.js",
                                                            lineNumber: 610,
                                                            columnNumber: 21
                                                        }, this),
                                                        errors.firstname && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "jsx-a10a7a1bd848055" + " " + "invalid-feedback",
                                                            children: errors.firstname
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/admin/users/edit/[id]/page.js",
                                                            lineNumber: 622,
                                                            columnNumber: 42
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/admin/users/edit/[id]/page.js",
                                                    lineNumber: 609,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-a10a7a1bd848055" + " " + "col-md-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "text",
                                                            placeholder: "🌺 ชื่อ",
                                                            value: fullname,
                                                            onChange: (e)=>setFullname(e.target.value),
                                                            disabled: isLoading,
                                                            required: true,
                                                            className: "jsx-a10a7a1bd848055" + " " + "form-input ".concat(errors.fullname ? 'is-invalid' : '')
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/admin/users/edit/[id]/page.js",
                                                            lineNumber: 626,
                                                            columnNumber: 21
                                                        }, this),
                                                        errors.fullname && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "jsx-a10a7a1bd848055" + " " + "invalid-feedback",
                                                            children: errors.fullname
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/admin/users/edit/[id]/page.js",
                                                            lineNumber: 635,
                                                            columnNumber: 41
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/admin/users/edit/[id]/page.js",
                                                    lineNumber: 625,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-a10a7a1bd848055" + " " + "col-md-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "text",
                                                            placeholder: "🌸 นามสกุล",
                                                            value: lastname,
                                                            onChange: (e)=>setLastname(e.target.value),
                                                            disabled: isLoading,
                                                            required: true,
                                                            className: "jsx-a10a7a1bd848055" + " " + "form-input ".concat(errors.lastname ? 'is-invalid' : '')
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/admin/users/edit/[id]/page.js",
                                                            lineNumber: 639,
                                                            columnNumber: 21
                                                        }, this),
                                                        errors.lastname && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "jsx-a10a7a1bd848055" + " " + "invalid-feedback",
                                                            children: errors.lastname
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/admin/users/edit/[id]/page.js",
                                                            lineNumber: 648,
                                                            columnNumber: 41
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/admin/users/edit/[id]/page.js",
                                                    lineNumber: 638,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/admin/users/edit/[id]/page.js",
                                            lineNumber: 608,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                marginBottom: '20px'
                                            },
                                            className: "jsx-a10a7a1bd848055",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                    placeholder: "🏠 ที่อยู่",
                                                    value: address,
                                                    onChange: (e)=>setAddress(e.target.value),
                                                    rows: "3",
                                                    disabled: isLoading,
                                                    required: true,
                                                    style: {
                                                        resize: 'vertical'
                                                    },
                                                    className: "jsx-a10a7a1bd848055" + " " + "form-input ".concat(errors.address ? 'is-invalid' : '')
                                                }, void 0, false, {
                                                    fileName: "[project]/app/admin/users/edit/[id]/page.js",
                                                    lineNumber: 654,
                                                    columnNumber: 19
                                                }, this),
                                                errors.address && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-a10a7a1bd848055" + " " + "invalid-feedback",
                                                    children: errors.address
                                                }, void 0, false, {
                                                    fileName: "[project]/app/admin/users/edit/[id]/page.js",
                                                    lineNumber: 664,
                                                    columnNumber: 38
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/admin/users/edit/[id]/page.js",
                                            lineNumber: 653,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-a10a7a1bd848055" + " " + "row",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-a10a7a1bd848055" + " " + "col-md-6",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            marginBottom: '15px'
                                                        },
                                                        className: "jsx-a10a7a1bd848055",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                style: {
                                                                    color: '#6f42c1',
                                                                    fontWeight: '500',
                                                                    marginBottom: '10px'
                                                                },
                                                                className: "jsx-a10a7a1bd848055",
                                                                children: "🌺 เลือกเพศ"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/admin/users/edit/[id]/page.js",
                                                                lineNumber: 671,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "jsx-a10a7a1bd848055" + " " + "form-check",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        type: "radio",
                                                                        name: "sex",
                                                                        value: "ชาย",
                                                                        checked: sex === 'ชาย',
                                                                        onChange: (e)=>setSex(e.target.value),
                                                                        disabled: isLoading,
                                                                        className: "jsx-a10a7a1bd848055"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/admin/users/edit/[id]/page.js",
                                                                        lineNumber: 673,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                        className: "jsx-a10a7a1bd848055",
                                                                        children: "👨 ชาย"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/admin/users/edit/[id]/page.js",
                                                                        lineNumber: 681,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/admin/users/edit/[id]/page.js",
                                                                lineNumber: 672,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "jsx-a10a7a1bd848055" + " " + "form-check",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        type: "radio",
                                                                        name: "sex",
                                                                        value: "หญิง",
                                                                        checked: sex === 'หญิง',
                                                                        onChange: (e)=>setSex(e.target.value),
                                                                        disabled: isLoading,
                                                                        className: "jsx-a10a7a1bd848055"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/admin/users/edit/[id]/page.js",
                                                                        lineNumber: 684,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                        className: "jsx-a10a7a1bd848055",
                                                                        children: "👩 หญิง"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/admin/users/edit/[id]/page.js",
                                                                        lineNumber: 692,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/admin/users/edit/[id]/page.js",
                                                                lineNumber: 683,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "jsx-a10a7a1bd848055" + " " + "form-check",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        type: "radio",
                                                                        name: "sex",
                                                                        value: "อื่นๆ",
                                                                        checked: sex === 'อื่นๆ',
                                                                        onChange: (e)=>setSex(e.target.value),
                                                                        disabled: isLoading,
                                                                        className: "jsx-a10a7a1bd848055"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/admin/users/edit/[id]/page.js",
                                                                        lineNumber: 695,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                        className: "jsx-a10a7a1bd848055",
                                                                        children: "🌈 อื่นๆ"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/admin/users/edit/[id]/page.js",
                                                                        lineNumber: 703,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/admin/users/edit/[id]/page.js",
                                                                lineNumber: 694,
                                                                columnNumber: 23
                                                            }, this),
                                                            errors.sex && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "jsx-a10a7a1bd848055" + " " + "invalid-feedback",
                                                                children: errors.sex
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/admin/users/edit/[id]/page.js",
                                                                lineNumber: 705,
                                                                columnNumber: 38
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/admin/users/edit/[id]/page.js",
                                                        lineNumber: 670,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/admin/users/edit/[id]/page.js",
                                                    lineNumber: 669,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-a10a7a1bd848055" + " " + "col-md-6",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "date",
                                                            value: birthday,
                                                            onChange: (e)=>setBirthday(e.target.value),
                                                            disabled: isLoading,
                                                            required: true,
                                                            className: "jsx-a10a7a1bd848055" + " " + "form-input ".concat(errors.birthday ? 'is-invalid' : '')
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/admin/users/edit/[id]/page.js",
                                                            lineNumber: 710,
                                                            columnNumber: 21
                                                        }, this),
                                                        errors.birthday && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "jsx-a10a7a1bd848055" + " " + "invalid-feedback",
                                                            children: errors.birthday
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/admin/users/edit/[id]/page.js",
                                                            lineNumber: 718,
                                                            columnNumber: 41
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/admin/users/edit/[id]/page.js",
                                                    lineNumber: 709,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/admin/users/edit/[id]/page.js",
                                            lineNumber: 668,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                marginBottom: '30px'
                                            },
                                            className: "jsx-a10a7a1bd848055",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-a10a7a1bd848055" + " " + "form-check",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "checkbox",
                                                            checked: acceptTerms,
                                                            onChange: (e)=>setAcceptTerms(e.target.checked),
                                                            disabled: isLoading,
                                                            className: "jsx-a10a7a1bd848055"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/admin/users/edit/[id]/page.js",
                                                            lineNumber: 725,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "jsx-a10a7a1bd848055",
                                                            children: [
                                                                "🛡️ ฉันยอมรับ ",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                    href: "#",
                                                                    className: "jsx-a10a7a1bd848055" + " " + "link-style",
                                                                    children: "เงื่อนไขการใช้งาน"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/admin/users/edit/[id]/page.js",
                                                                    lineNumber: 732,
                                                                    columnNumber: 37
                                                                }, this),
                                                                " และ ",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                    href: "#",
                                                                    className: "jsx-a10a7a1bd848055" + " " + "link-style",
                                                                    children: "นโยบายความเป็นส่วนตัว"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/admin/users/edit/[id]/page.js",
                                                                    lineNumber: 732,
                                                                    columnNumber: 98
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/admin/users/edit/[id]/page.js",
                                                            lineNumber: 731,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/admin/users/edit/[id]/page.js",
                                                    lineNumber: 724,
                                                    columnNumber: 19
                                                }, this),
                                                errors.acceptTerms && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-a10a7a1bd848055" + " " + "invalid-feedback",
                                                    children: errors.acceptTerms
                                                }, void 0, false, {
                                                    fileName: "[project]/app/admin/users/edit/[id]/page.js",
                                                    lineNumber: 735,
                                                    columnNumber: 42
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/admin/users/edit/[id]/page.js",
                                            lineNumber: 723,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                textAlign: 'center'
                                            },
                                            className: "jsx-a10a7a1bd848055",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "submit",
                                                disabled: isLoading,
                                                className: "jsx-a10a7a1bd848055" + " " + "submit-btn",
                                                children: isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "jsx-a10a7a1bd848055" + " " + "loading-spinner"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/admin/users/edit/[id]/page.js",
                                                            lineNumber: 747,
                                                            columnNumber: 25
                                                        }, this),
                                                        "กำลังแก้ไขข้อมูล..."
                                                    ]
                                                }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                    children: "🌸 ปรับปรุงข้อมูล 🌸"
                                                }, void 0, false)
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/users/edit/[id]/page.js",
                                                lineNumber: 740,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/users/edit/[id]/page.js",
                                            lineNumber: 739,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/admin/users/edit/[id]/page.js",
                                    lineNumber: 542,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        textAlign: 'center',
                                        marginTop: '30px'
                                    },
                                    className: "jsx-a10a7a1bd848055",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "jsx-a10a7a1bd848055" + " " + "text-muted",
                                        children: [
                                            "ต้องการกลับไปหน้าหลัก?",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "/",
                                                style: {
                                                    marginLeft: '5px'
                                                },
                                                className: "jsx-a10a7a1bd848055" + " " + "link-style",
                                                children: "หน้าแรก"
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/users/edit/[id]/page.js",
                                                lineNumber: 763,
                                                columnNumber: 17
                                            }, this),
                                            " |",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "/Login",
                                                style: {
                                                    marginLeft: '5px'
                                                },
                                                className: "jsx-a10a7a1bd848055" + " " + "link-style",
                                                children: "เข้าสู่ระบบ"
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/users/edit/[id]/page.js",
                                                lineNumber: 766,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/admin/users/edit/[id]/page.js",
                                        lineNumber: 761,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/admin/users/edit/[id]/page.js",
                                    lineNumber: 760,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/admin/users/edit/[id]/page.js",
                            lineNumber: 526,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/admin/users/edit/[id]/page.js",
                        lineNumber: 525,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/admin/users/edit/[id]/page.js",
                lineNumber: 507,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(Page, "/VxHkfhyHeMFVmH0q/TNIH8+cnc=");
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

//# sourceMappingURL=_888e8c5b._.js.map