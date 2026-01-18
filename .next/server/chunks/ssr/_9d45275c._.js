module.exports = [
"[project]/app/components/Card.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
;
const Card = ()=>{
    const [selectedPlace, setSelectedPlace] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useState(null);
    const [showModal, setShowModal] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useState(false);
    // ข้อมูลสถานที่ท่องเที่ยวในญี่ปุ่น
    const cardData = [
        {
            id: 1,
            image: "https://as2.ftcdn.net/v2/jpg/00/02/26/27/1000_F_2262772_pUVAxcHaFXhr12gisXpz9fKzeIbGva.jpg",
            title: "Mount Fuji",
            description: "ภูเขาไฟศักดิ์สิทธิ์แห่งญี่ปุ่น สูง 3,776 เมตร เป็นสัญลักษณ์ของประเทศ",
            details: {
                location: "ฮอนชู, ญี่ปุ่น",
                bestTime: "เมษายน - พฤศจิกายน",
                activities: [
                    "ปีนเขา",
                    "ชมวิว",
                    "ถ่ายภาพ",
                    "ชมพระอาทิตย์ขึ้น"
                ],
                entrance: "ฟรี (ค่าปีนเขา 1,000 เยน)",
                highlights: "ภูเขาไฟที่สูงที่สุดในญี่ปุ่น มองเห็นได้จากระยะไกล เป็นสัญลักษณ์ทางวัฒนธรรมและศาสนาที่สำคัญ"
            }
        },
        {
            id: 2,
            image: "https://as2.ftcdn.net/v2/jpg/12/13/48/27/1000_F_1213482753_eo459MpsxNJtQp72UQp1x2va7aUzH8Sp.jpg",
            title: "Kiyomizu-dera Temple",
            description: "วัดไม้โบราณในเกียวโต ขึ้นทะเบียน UNESCO World Heritage",
            details: {
                location: "เกียวโต, ญี่ปุ่น",
                bestTime: "มีนาคม - พฤษภาคม, พฤศจิกายน",
                activities: [
                    "ชมสถาปัตยกรรม",
                    "ถ่ายภาพ",
                    "ชมใบไม้เปลี่ยนสี",
                    "สวดมนต์"
                ],
                entrance: "400 เยน",
                highlights: "สร้างด้วยไม้ไผ่โดยไม่ใช้ตะปู มีระเบียงไม้ที่ยื่นออกมาให้ชมวิวเมืองเกียวโต วัดแห่งความรักและความสัมพันธ์"
            }
        },
        {
            id: 3,
            image: "https://as2.ftcdn.net/v2/jpg/13/89/24/29/1000_F_1389242963_CE7BTT9HTdGESAt2cR9k0fEdBHBskSJp.jpg",
            title: "Fushimi Inari Taisha",
            description: "ศาลเจ้าชื่อดังในเกียวโต มีเสาโทริอิสีแดงเรียงราย",
            details: {
                location: "เกียวโต, ญี่ปุ่น",
                bestTime: "มกราคม - ธันวาคม",
                activities: [
                    "เดินชมเสาโทริอิ",
                    "ถ่ายภาพ",
                    "สวดมนต์"
                ],
                entrance: "ฟรี",
                highlights: "เสาโทริอิแดงหลายพันต้นสร้างเป็นทางเดินขึ้นเขา เป็นแลนด์มาร์คถ่ายรูปยอดนิยม"
            }
        },
        {
            id: 4,
            image: "https://as2.ftcdn.net/v2/jpg/15/30/80/29/1000_F_1530802983_Rusw58mA878WvSqI7OXbFJXlNSL6YsFv.jpg",
            title: "Arashiyama Bamboo Grove",
            description: "ป่าไผ่สวยงามในเกียวโต เป็นจุดถ่ายภาพยอดนิยม",
            details: {
                location: "เกียวโต, ญี่ปุ่น",
                bestTime: "มีนาคม - พฤษภาคม, กันยายน - พฤศจิกายน",
                activities: [
                    "เดินชมธรรมชาติ",
                    "ถ่ายภาพ",
                    "ปั่นจักรยาน"
                ],
                entrance: "ฟรี",
                highlights: "เส้นทางเดินกลางป่าไผ่สูงชะลูด สัมผัสบรรยากาศเงียบสงบและสายลมพัดผ่าน"
            }
        },
        {
            id: 5,
            image: "https://as2.ftcdn.net/v2/jpg/02/72/19/59/1000_F_272195954_wnwz4fpwnVx1RxVNeQeIJDfuQf2UOEbB.jpg",
            title: "Shibuya Crossing",
            description: "ทางม้าลายที่คึกคักที่สุดในโตเกียว สัญลักษณ์ความทันสมัยของญี่ปุ่น",
            details: {
                location: "โตเกียว, ญี่ปุ่น",
                bestTime: "มกราคม - ธันวาคม",
                activities: [
                    "ถ่ายภาพ",
                    "ช้อปปิ้ง",
                    "ชมเมือง"
                ],
                entrance: "ฟรี",
                highlights: "ทางม้าลายที่คนข้ามพร้อมกันหลายร้อยคน ช่วงกลางคืนมีแสงไฟนีออนสวยงาม"
            }
        },
        {
            id: 6,
            image: "https://as1.ftcdn.net/v2/jpg/13/48/66/72/1000_F_1348667238_FShd0pa5ZlMenUclqV0zTouS8NEP1yUs.jpg",
            title: "Osaka Castle",
            description: "ปราสาทประวัติศาสตร์ในโอซาก้า สัญลักษณ์ของความรุ่งเรืองในสมัยเอโดะ",
            details: {
                location: "โอซาก้า, ญี่ปุ่น",
                bestTime: "มีนาคม - พฤษภาคม, ตุลาคม - พฤศจิกายน",
                activities: [
                    "ชมปราสาท",
                    "เดินชมสวน",
                    "ถ่ายภาพ"
                ],
                entrance: "600 เยน",
                highlights: "ปราสาทสีขาวสูงเด่นกลางสวน มีพิพิธภัณฑ์และประวัติศาสตร์สมัยสงครามญี่ปุ่น"
            }
        },
        {
            id: 7,
            image: "https://as1.ftcdn.net/v2/jpg/03/79/66/86/1000_F_379668679_6j5MKRuElqgRyXrNoMqmXH4m3J2AmWmi.jpg",
            title: "Himeji Castle",
            description: "ปราสาทขาวที่สุดในญี่ปุ่น ได้รับการขึ้นทะเบียนเป็น UNESCO World Heritage",
            details: {
                location: "ฮิเมจิ, ญี่ปุ่น",
                bestTime: "มีนาคม - พฤษภาคม, กันยายน - พฤศจิกายน",
                activities: [
                    "ชมปราสาท",
                    "ถ่ายภาพ",
                    "เรียนรู้ประวัติศาสตร์"
                ],
                entrance: "1,000 เยน",
                highlights: "ปราสาทที่มีสถาปัตยกรรมแบบญี่ปุ่นโบราณสมบูรณ์แบบ เป็นหนึ่งในปราสาทที่สวยที่สุดในโลก"
            }
        },
        {
            id: 8,
            image: "https://as1.ftcdn.net/v2/jpg/00/36/52/54/1000_F_36525494_r4tVN2u1J2gHt5aoQp6OZ1EtFBLRrnxZ.jpg",
            title: "Nara Deer Park",
            description: "สวนกวางชื่อดังในนารา สามารถป้อนอาหารและเล่นกับกวางได้",
            details: {
                location: "นารา, ญี่ปุ่น",
                bestTime: "มีนาคม - พฤษภาคม, กันยายน - พฤศจิกายน",
                activities: [
                    "ให้อาหารกวาง",
                    "ถ่ายภาพ",
                    "เดินชมวัด"
                ],
                entrance: "ฟรี",
                highlights: "กวางเชื่องและเป็นมิตรกับนักท่องเที่ยว รอบ ๆ สวนมีวัดโบราณให้ชม"
            }
        },
        {
            id: 9,
            image: "https://as1.ftcdn.net/v2/jpg/00/83/45/28/1000_F_83452854_Epa5N806VaHrsnr5oBhUYVSEIqWqJGfO.jpg",
            title: "Tokyo Tower",
            description: "หอคอยสูงในโตเกียว มองเห็นวิวเมืองรอบ ๆ ได้แบบพาโนรามา",
            details: {
                location: "โตเกียว, ญี่ปุ่น",
                bestTime: "มกราคม - ธันวาคม",
                activities: [
                    "ชมวิว",
                    "ถ่ายภาพ",
                    "ช้อปปิ้งในหอคอย"
                ],
                entrance: "1,200 เยน",
                highlights: "หอคอยสีแดงขาวสูง 333 เมตร เป็นจุดชมวิวที่สวยที่สุดของโตเกียว โดยเฉพาะช่วงกลางคืน"
            }
        }
    ];
    const handleShowDetails = (place)=>{
        setSelectedPlace(place);
        setShowModal(true);
    };
    const handleCloseModal = ()=>{
        setShowModal(false);
        setSelectedPlace(null);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                id: "6ed28960f6499e2f",
                children: "@keyframes float{0%,to{transform:translateY(0)rotate(15deg)}50%{transform:translateY(-20px)rotate(15deg)}}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}@keyframes slideIn{0%{opacity:0;transform:scale(.8)translateY(-50px)}to{opacity:1;transform:scale(1)translateY(0)}}@keyframes bounce{0%,20%,50%,80%,to{transform:translateY(0)}40%{transform:translateY(-10px)}60%{transform:translateY(-5px)}}"
            }, void 0, false, void 0, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("link", {
                href: "https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/css/bootstrap.min.css",
                rel: "stylesheet",
                className: "jsx-6ed28960f6499e2f"
            }, void 0, false, {
                fileName: "[project]/app/components/Card.js",
                lineNumber: 164,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    background: 'linear-gradient(135deg, #fce4ec 0%, #f8bbd9 25%, #e1bee7 50%, #c8a2c8 75%, #ffcdd2 100%)',
                    minHeight: '100vh',
                    position: 'relative',
                    overflow: 'hidden'
                },
                className: "jsx-6ed28960f6499e2f" + " " + "container-fluid py-5",
                children: [
                    [
                        '10%|10%|2rem|0.4',
                        '20%|5%|1.5rem|0.5',
                        '85%|20%|1.8rem|0.3',
                        '75%|15%|1.3rem|0.6'
                    ].map((item, idx)=>{
                        const [top, left, size, opacity] = item.split('|');
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                top: top,
                                left: left,
                                fontSize: size,
                                color: `rgba(255, 182, 193, ${opacity})`,
                                zIndex: 0,
                                animation: `float ${6 + idx}s ease-in-out infinite ${idx % 2 === 0 ? '' : 'reverse'}`,
                                transform: `rotate(${idx % 2 === 0 ? 15 : -10}deg)`
                            },
                            className: "jsx-6ed28960f6499e2f" + " " + "position-absolute",
                            children: "🌸"
                        }, idx, false, {
                            fileName: "[project]/app/components/Card.js",
                            lineNumber: 182,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0));
                    }),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            zIndex: 1
                        },
                        className: "jsx-6ed28960f6499e2f" + " " + "container position-relative",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-6ed28960f6499e2f" + " " + "row text-center mb-5",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-6ed28960f6499e2f" + " " + "col-12",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            style: {
                                                color: '#d81b60',
                                                textShadow: '3px 3px 10px rgba(216, 27, 96, 0.3), 0 0 25px rgba(255, 182, 193, 0.4)',
                                                filter: 'drop-shadow(0 0 15px rgba(216, 27, 96, 0.2))',
                                                fontFamily: 'serif'
                                            },
                                            className: "jsx-6ed28960f6499e2f" + " " + "display-4 fw-bold mb-3",
                                            children: "🌸 Japan Travel Guide 🌸"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/Card.js",
                                            lineNumber: 203,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            style: {
                                                color: '#8e24aa',
                                                textShadow: '2px 2px 6px rgba(255,255,255,0.8)',
                                                fontWeight: '500'
                                            },
                                            className: "jsx-6ed28960f6499e2f" + " " + "lead mb-3",
                                            children: "สำรวจความงามของแดนซากุระ พร้อมสถานที่ท่องเที่ยวสุดพิเศษ"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/Card.js",
                                            lineNumber: 214,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/Card.js",
                                    lineNumber: 202,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/app/components/Card.js",
                                lineNumber: 201,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-6ed28960f6499e2f" + " " + "row g-4",
                                children: cardData.map((card)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-6ed28960f6499e2f" + " " + "col-lg-4 col-md-6 col-sm-12",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                background: 'linear-gradient(145deg, rgba(255,255,255,0.95), rgba(252,228,236,0.9))',
                                                transition: 'all 0.4s ease',
                                                cursor: 'pointer',
                                                borderRadius: '20px',
                                                overflow: 'hidden',
                                                boxShadow: '0 10px 30px rgba(216, 27, 96, 0.15)'
                                            },
                                            onClick: ()=>handleShowDetails(card),
                                            onMouseEnter: (e)=>e.currentTarget.style.transform = 'translateY(-10px) scale(1.02)',
                                            onMouseLeave: (e)=>e.currentTarget.style.transform = 'translateY(0) scale(1)',
                                            className: "jsx-6ed28960f6499e2f" + " " + "card h-100 border-0",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    src: card.image,
                                                    alt: card.title,
                                                    style: {
                                                        height: '250px',
                                                        objectFit: 'cover'
                                                    },
                                                    className: "jsx-6ed28960f6499e2f" + " " + "card-img-top"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/Card.js",
                                                    lineNumber: 245,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-6ed28960f6499e2f" + " " + "card-body",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                            className: "jsx-6ed28960f6499e2f" + " " + "card-title fw-bold",
                                                            children: card.title
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/Card.js",
                                                            lineNumber: 252,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "jsx-6ed28960f6499e2f" + " " + "card-text",
                                                            children: card.description
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/Card.js",
                                                            lineNumber: 253,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/components/Card.js",
                                                    lineNumber: 251,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/Card.js",
                                            lineNumber: 231,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, card.id, false, {
                                        fileName: "[project]/app/components/Card.js",
                                        lineNumber: 230,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)))
                            }, void 0, false, {
                                fileName: "[project]/app/components/Card.js",
                                lineNumber: 228,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/Card.js",
                        lineNumber: 200,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    showModal && selectedPlace && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            zIndex: 9999,
                            backgroundColor: 'rgba(0,0,0,0.8)',
                            backdropFilter: 'blur(8px)',
                            animation: 'fadeIn 0.3s ease-in-out'
                        },
                        onClick: handleCloseModal,
                        className: "jsx-6ed28960f6499e2f" + " " + "position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                maxWidth: '600px',
                                width: '90%',
                                maxHeight: '80vh',
                                background: 'linear-gradient(145deg, rgba(255,255,255,0.98), rgba(255,240,245,0.95))',
                                borderRadius: '25px',
                                overflowY: 'auto',
                                animation: 'slideIn 0.4s ease'
                            },
                            onClick: (e)=>e.stopPropagation(),
                            className: "jsx-6ed28960f6499e2f" + " " + "position-relative",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleCloseModal,
                                    style: {
                                        position: 'absolute',
                                        top: '20px',
                                        right: '20px',
                                        zIndex: 10,
                                        background: 'linear-gradient(45deg, #d81b60, #e91e63)',
                                        border: 'none',
                                        borderRadius: '50%',
                                        width: '35px',
                                        height: '35px',
                                        color: '#fff',
                                        fontSize: '1.2rem',
                                        cursor: 'pointer'
                                    },
                                    className: "jsx-6ed28960f6499e2f",
                                    children: "×"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/Card.js",
                                    lineNumber: 287,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-6ed28960f6499e2f" + " " + "p-4 text-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: selectedPlace.image,
                                            alt: selectedPlace.title,
                                            style: {
                                                maxHeight: '250px',
                                                objectFit: 'cover'
                                            },
                                            className: "jsx-6ed28960f6499e2f" + " " + "img-fluid mb-3 rounded"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/Card.js",
                                            lineNumber: 308,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "jsx-6ed28960f6499e2f" + " " + "fw-bold mb-2",
                                            children: selectedPlace.title
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/Card.js",
                                            lineNumber: 314,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "jsx-6ed28960f6499e2f" + " " + "text-start",
                                            children: selectedPlace.details.highlights
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/Card.js",
                                            lineNumber: 315,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/Card.js",
                                    lineNumber: 307,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/Card.js",
                            lineNumber: 273,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/app/components/Card.js",
                        lineNumber: 263,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/Card.js",
                lineNumber: 169,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("script", {
                src: "https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/js/bootstrap.bundle.min.js",
                className: "jsx-6ed28960f6499e2f"
            }, void 0, false, {
                fileName: "[project]/app/components/Card.js",
                lineNumber: 323,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true);
};
const __TURBOPACK__default__export__ = Card;
}),
"[project]/node_modules/next/dist/compiled/client-only/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

}),
"[project]/node_modules/styled-jsx/dist/index/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

__turbopack_context__.r("[project]/node_modules/next/dist/compiled/client-only/index.js [app-ssr] (ecmascript)");
var React = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
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
var isProd = typeof process !== "undefined" && process.env && ("TURBOPACK compile-time value", "development") === "production";
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
        var node = "undefined" !== "undefined" && document.querySelector('meta[property="csp-nonce"]');
        this._nonce = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : null;
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
        if ("undefined" !== "undefined" && this._optimizeForSpeed) //TURBOPACK unreachable
        ;
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
        if ("TURBOPACK compile-time truthy", 1) {
            if (typeof index !== "number") {
                index = this._serverSheet.cssRules.length;
            }
            this._serverSheet.insertRule(rule, index);
            return this._rulesCount++;
        }
        //TURBOPACK unreachable
        ;
        var sheet;
        var insertionPoint;
    };
    _proto.replaceRule = function replaceRule(index, rule) {
        if (this._optimizeForSpeed || "undefined" === "undefined") {
            var sheet = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : this._serverSheet;
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
        } else //TURBOPACK unreachable
        {
            var tag;
        }
        return index;
    };
    _proto.deleteRule = function deleteRule(index) {
        if ("TURBOPACK compile-time truthy", 1) {
            this._serverSheet.deleteRule(index);
            return;
        }
        //TURBOPACK unreachable
        ;
        var tag;
    };
    _proto.flush = function flush() {
        this._injected = false;
        this._rulesCount = 0;
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        else {
            // simpler on server
            this._serverSheet.cssRules = [];
        }
    };
    _proto.cssRules = function cssRules() {
        var _this = this;
        if ("TURBOPACK compile-time truthy", 1) {
            return this._serverSheet.cssRules;
        }
        //TURBOPACK unreachable
        ;
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
    if ("TURBOPACK compile-time truthy", 1) {
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
        if ("undefined" !== "undefined" && !this._fromServer) //TURBOPACK unreachable
        ;
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
    var ref = React.useState(function() {
        return rootRegistry || configuredRegistry || createStyleRegistry();
    }), registry = ref[0];
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
var defaultRegistry = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : undefined;
function JSXStyle(props) {
    var registry = defaultRegistry ? defaultRegistry : useStyleRegistry();
    // If `registry` does not exist, we do nothing here.
    if (!registry) {
        return null;
    }
    if ("TURBOPACK compile-time truthy", 1) {
        registry.add(props);
        return null;
    }
    //TURBOPACK unreachable
    ;
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
"[project]/node_modules/styled-jsx/style.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = __turbopack_context__.r("[project]/node_modules/styled-jsx/dist/index/index.js [app-ssr] (ecmascript)").style;
}),
];

//# sourceMappingURL=_9d45275c._.js.map