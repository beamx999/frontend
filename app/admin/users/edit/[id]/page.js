"use client";

import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import bcrypt from "bcryptjs";
import { useParams, useRouter } from "next/navigation";

export default function Page() {
  console.log("=== Edit User Page Rendered ===");

  const params = useParams();
  const router = useRouter();
  const id = params?.id;

  console.log("Params:", params);
  console.log("ID from params:", id);

  const [token, setToken] = useState(null);
  const [items, setItems] = useState([]);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [fullname, setFullname] = useState("");
  const [lastname, setLastname] = useState("");
  const [address, setAddress] = useState("");
  const [sex, setSex] = useState("");
  const [birthday, setBirthday] = useState("");

  const [acceptTerms, setAcceptTerms] = useState(false);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [pageLoading, setPageLoading] = useState(true);
  const [tokenChecked, setTokenChecked] = useState(false);

  /* ---------------- โหลด token ---------------- */
  useEffect(() => {
    console.log("useEffect #1: Loading token from sessionStorage");
    if (typeof window !== "undefined") {
      const t = sessionStorage.getItem("token");
      console.log("Token loaded:", t ? "EXISTS" : "NULL");
      setToken(t);
      setTokenChecked(true);
    }
  }, []);

  /* ---------------- โหลดข้อมูลผู้ใช้ ---------------- */
  useEffect(() => {
    console.log("useEffect #2: Fetch user data");
    console.log("- tokenChecked:", tokenChecked);
    console.log("- id:", id);
    console.log("- token:", token ? "EXISTS" : "NULL");

    if (!tokenChecked) {
      console.log("❌ Token not checked yet, waiting...");
      return;
    }

    if (!id) {
      console.log("❌ No ID found!");
      setPageLoading(false);
      return;
    }

    if (!token) {
      console.log("❌ No token, redirecting to login...");
      Swal.fire({
        icon: "warning",
        title: "กรุณาเข้าสู่ระบบใหม่",
        text: "Session หมดอายุ",
      }).then(() => {
        router.push("/Login");
      });
      return;
    }

    const fetchUserData = async () => {
      console.log("🚀 Starting fetch user data...");
      setPageLoading(true);

      try {
        const url = `https://backend-theta-henna.vercel.app/api/users/${id}`;
        console.log("Fetching URL:", url);

        const res = await fetch(url, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });

        console.log("Response status:", res.status);

        if (res.status === 401 || res.status === 403) {
          console.log("❌ Unauthorized, clearing token...");
          sessionStorage.removeItem("token");
          Swal.fire({
            icon: "warning",
            title: "Session หมดอายุ",
            text: "กรุณาเข้าสู่ระบบใหม่",
          }).then(() => {
            router.push("/Login");
          });
          return;
        }

        if (!res.ok) {
          throw new Error(`โหลดข้อมูลไม่สำเร็จ (${res.status})`);
        }

        const user = await res.json();
        console.log("✅ User data loaded:", user);

        setItems([user]);
        setUsername(user.username || "");
        setFirstname(user.firstname || "");
        setFullname(user.fullname || "");
        setLastname(user.lastname || "");
        setAddress(user.address || "");
        setSex(user.sex || "");
        setBirthday(user.birthday ? user.birthday.split("T")[0] : "");
        setAcceptTerms(true); // ✅ Set เป็น true เพราะเป็นการแก้ไข

        console.log("✅ All state updated!");

      } catch (err) {
        console.error("❌ Fetch error:", err);
        Swal.fire({
          icon: "error",
          title: "เกิดข้อผิดพลาด",
          text: err.message || "ไม่สามารถโหลดข้อมูลผู้ใช้ได้",
        });
      } finally {
        console.log("✅ Setting pageLoading to false");
        setPageLoading(false);
      }
    };

    fetchUserData();
  }, [id, token, tokenChecked, router]);

  /* ---------------- validate ---------------- */
  const validateForm = () => {
    const e = {};
    if (!username) e.username = "กรุณากรอกชื่อผู้ใช้";

    // ✅ ถ้ามีการกรอก password ให้ validate ความยาว
    if (password && password.length < 6) {
      e.password = "รหัสผ่านต้องอย่างน้อย 6 ตัว";
    }

    if (!firstname) e.firstname = "เลือกคำนำหน้า";
    if (!fullname) e.fullname = "กรอกชื่อ";
    if (!lastname) e.lastname = "กรอกนามสกุล";
    if (!address) e.address = "กรอกที่อยู่";
    if (!sex) e.sex = "เลือกเพศ";
    if (!birthday) e.birthday = "เลือกวันเกิด";
    if (!acceptTerms) e.acceptTerms = "ต้องยอมรับเงื่อนไข";

    setErrors(e);
    return Object.keys(e).length === 0;
  };

  /* ---------------- submit ---------------- */
  const handleUpdateSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsLoading(true);
    try {
      // ✅ เตรียม body (ไม่ส่ง id เพราะอยู่ใน URL แล้ว)
      const bodyData = {
        username,
        firstname,
        fullname,
        lastname,
        address,
        sex,
        birthday,
      };

      // ✅ ถ้ามีการกรอก password ให้ hash และส่งไป
      if (password && password.trim() !== "") {
        bodyData.password = await bcrypt.hash(password, 12);
      }

      console.log("🚀 Sending PUT request to:", `https://backend-theta-henna.vercel.app/api/users/${id}`);
      console.log("📦 Data:", { ...bodyData, password: bodyData.password ? "***HASHED***" : "NOT_CHANGED" });

      // ✅ ส่ง PUT พร้อม ID ใน URL
      const res = await fetch(
        `https://backend-theta-henna.vercel.app/api/users/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(bodyData),
        }
      );

      console.log("📡 Response status:", res.status);

      // ✅ แสดง error message ที่ชัดเจน
      if (!res.ok) {
        const errorData = await res.json().catch(() => ({}));
        console.error("❌ Error response:", errorData);
        throw new Error(errorData.message || `อัปเดตไม่สำเร็จ (${res.status})`);
      }

      const result = await res.json();
      console.log("✅ Update successful:", result);

      await Swal.fire({
        icon: "success",
        title: "แก้ไขข้อมูลสำเร็จ",
        text: "ข้อมูลถูกอัปเดตเรียบร้อยแล้ว",
      });

      setPassword("");
      router.push("/admin/users");

    } catch (err) {
      console.error("❌ Update error:", err);
      Swal.fire({
        icon: "error",
        title: "เกิดข้อผิดพลาด",
        text: err.message || "ไม่สามารถอัปเดตข้อมูลได้",
      });
    } finally {
      setIsLoading(false);
    }
  };

  /* ---------------- render ---------------- */
  console.log("Rendering... pageLoading:", pageLoading);

  if (pageLoading) {
    return (
      <div style={{
        textAlign: "center",
        padding: "4rem",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #faf8f3 0%, #f0e9dc 100%)"
      }}>
        <div className="spinner-border" role="status" style={{ width: "3rem", height: "3rem", marginBottom: "1rem", borderColor: "#c44536", borderRightColor: "transparent" }}>
          <span className="visually-hidden">Loading...</span>
        </div>
        <h4 style={{ color: "#2c2416", marginBottom: "1rem", fontWeight: "500", letterSpacing: "0.5px" }}>กำลังโหลดข้อมูล...</h4>
        <div style={{ fontSize: "0.9rem", color: "#5a4a3a", marginTop: "1rem", padding: "1.5rem", backgroundColor: "#fffef9", borderRadius: "4px", boxShadow: "0 4px 12px rgba(44, 36, 22, 0.08)", border: "1px solid #e8dcc8" }}>
          <p style={{ margin: "0.5rem 0" }}>
            <strong>ID:</strong> {id || "❌ ไม่พบ"}
          </p>
          <p style={{ margin: "0.5rem 0" }}>
            <strong>Token:</strong> {token ? "✅ มี" : "❌ ไม่มี"}
          </p>
          <p style={{ margin: "0.5rem 0" }}>
            <strong>Token Checked:</strong> {tokenChecked ? "✅ แล้ว" : "⏳ กำลังตรวจสอบ"}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div style={{ padding: "2rem", maxWidth: "800px", margin: "0 auto", background: "#f8f9fa", minHeight: "100vh" }}>
      <div style={{ backgroundColor: "#ffffff", padding: "2.5rem", borderRadius: "16px", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.05), 0 10px 15px rgba(0, 0, 0, 0.03)", border: "1px solid #e2e8f0" }}>
        <h2 style={{ color: "#1e293b", marginBottom: "1.5rem", borderBottom: "2px solid #e2e8f0", paddingBottom: "0.75rem", fontWeight: "700", letterSpacing: "-0.025em", display: "flex", alignItems: "center", gap: "0.5rem" }}>
          🔧 แก้ไขข้อมูลผู้ใช้
        </h2>

        <form onSubmit={handleUpdateSubmit}>
          {/* Username */}
          <div style={{ marginBottom: "1.5rem" }}>
            <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: "500", color: "#2c2416", letterSpacing: "0.3px" }}>
              👤 ชื่อผู้ใช้ <span style={{ color: "#c44536" }}>*</span>
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              style={{
                display: "block",
                width: "100%",
                padding: "0.75rem",
                border: errors.username ? "2px solid #c44536" : "1px solid #d4c5b0",
                borderRadius: "4px",
                fontSize: "1rem",
                transition: "all 0.3s",
                backgroundColor: "#fffef9",
                color: "#2c2416"
              }}
              onFocus={(e) => { e.target.style.borderColor = "#c44536"; e.target.style.boxShadow = "0 0 0 3px rgba(196, 69, 54, 0.1)"; }}
              onBlur={(e) => { e.target.style.borderColor = errors.username ? "#c44536" : "#d4c5b0"; e.target.style.boxShadow = "none"; }}
              disabled={isLoading}
            />
            {errors.username && (
              <span style={{ color: '#c44536', fontSize: '0.875rem', marginTop: '0.25rem', display: 'block' }}>
                {errors.username}
              </span>
            )}
          </div>

          {/* Password */}
          <div style={{ marginBottom: "1.5rem" }}>
            <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: "500", color: "#2c2416", letterSpacing: "0.3px" }}>
              🔐 รหัสผ่าน <span style={{ color: "#8b7355", fontSize: "0.875rem" }}>(เว้นว่างถ้าไม่ต้องการเปลี่ยน)</span>
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="กรอกรหัสผ่านใหม่ถ้าต้องการเปลี่ยน (อย่างน้อย 6 ตัว)"
              style={{
                display: "block",
                width: "100%",
                padding: "0.75rem",
                border: errors.password ? "2px solid #c44536" : "1px solid #d4c5b0",
                borderRadius: "4px",
                fontSize: "1rem",
                transition: "all 0.3s",
                backgroundColor: "#fffef9",
                color: "#2c2416"
              }}
              onFocus={(e) => { e.target.style.borderColor = "#c44536"; e.target.style.boxShadow = "0 0 0 3px rgba(196, 69, 54, 0.1)"; }}
              onBlur={(e) => { e.target.style.borderColor = errors.password ? "#c44536" : "#d4c5b0"; e.target.style.boxShadow = "none"; }}
              disabled={isLoading}
            />
            {errors.password && (
              <span style={{ color: '#c44536', fontSize: '0.875rem', marginTop: '0.25rem', display: 'block' }}>
                {errors.password}
              </span>
            )}
            <small style={{ color: '#8b7355', display: 'block', marginTop: '0.25rem' }}>
              💡 ไม่ต้องกรอกถ้าไม่ต้องการเปลี่ยนรหัสผ่าน
            </small>
          </div>

          {/* Firstname */}
          <div style={{ marginBottom: "1.5rem" }}>
            <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: "500", color: "#2c2416", letterSpacing: "0.3px" }}>
              📝 คำนำหน้า <span style={{ color: "#c44536" }}>*</span>
            </label>
            <select
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
              style={{
                display: "block",
                width: "100%",
                padding: "0.75rem",
                border: errors.firstname ? "2px solid #c44536" : "1px solid #d4c5b0",
                borderRadius: "4px",
                fontSize: "1rem",
                transition: "all 0.3s",
                backgroundColor: "#fffef9",
                color: "#2c2416"
              }}
              disabled={isLoading}
            >
              <option value="">เลือกคำนำหน้า</option>
              <option value="นาย">นาย</option>
              <option value="นาง">นาง</option>
              <option value="นางสาว">นางสาว</option>
            </select>
            {errors.firstname && (
              <span style={{ color: '#c44536', fontSize: '0.875rem', marginTop: '0.25rem', display: 'block' }}>
                {errors.firstname}
              </span>
            )}
          </div>

          {/* Fullname */}
          <div style={{ marginBottom: "1.5rem" }}>
            <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: "500", color: "#2c2416", letterSpacing: "0.3px" }}>
              👨 ชื่อ <span style={{ color: "#c44536" }}>*</span>
            </label>
            <input
              type="text"
              value={fullname}
              onChange={(e) => setFullname(e.target.value)}
              style={{
                display: "block",
                width: "100%",
                padding: "0.75rem",
                border: errors.fullname ? "2px solid #c44536" : "1px solid #d4c5b0",
                borderRadius: "4px",
                fontSize: "1rem",
                transition: "all 0.3s",
                backgroundColor: "#fffef9",
                color: "#2c2416"
              }}
              disabled={isLoading}
            />
            {errors.fullname && (
              <span style={{ color: '#c44536', fontSize: '0.875rem', marginTop: '0.25rem', display: 'block' }}>
                {errors.fullname}
              </span>
            )}
          </div>

          {/* Lastname */}
          <div style={{ marginBottom: "1.5rem" }}>
            <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: "500", color: "#2c2416", letterSpacing: "0.3px" }}>
              👥 นามสกุล <span style={{ color: "#c44536" }}>*</span>
            </label>
            <input
              type="text"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
              style={{
                display: "block",
                width: "100%",
                padding: "0.75rem",
                border: errors.lastname ? "2px solid #c44536" : "1px solid #d4c5b0",
                borderRadius: "4px",
                fontSize: "1rem",
                transition: "all 0.3s",
                backgroundColor: "#fffef9",
                color: "#2c2416"
              }}
              disabled={isLoading}
            />
            {errors.lastname && (
              <span style={{ color: '#c44536', fontSize: '0.875rem', marginTop: '0.25rem', display: 'block' }}>
                {errors.lastname}
              </span>
            )}
          </div>

          {/* Address */}
          <div style={{ marginBottom: "1.5rem" }}>
            <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: "500", color: "#2c2416", letterSpacing: "0.3px" }}>
              🏠 ที่อยู่ <span style={{ color: "#c44536" }}>*</span>
            </label>
            <textarea
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              rows="3"
              style={{
                display: "block",
                width: "100%",
                padding: "0.75rem",
                border: errors.address ? "2px solid #c44536" : "1px solid #d4c5b0",
                borderRadius: "4px",
                fontSize: "1rem",
                resize: "vertical",
                transition: "all 0.3s",
                backgroundColor: "#fffef9",
                color: "#2c2416"
              }}
              disabled={isLoading}
            />
            {errors.address && (
              <span style={{ color: '#c44536', fontSize: '0.875rem', marginTop: '0.25rem', display: 'block' }}>
                {errors.address}
              </span>
            )}
          </div>

          {/* Sex */}
          <div style={{ marginBottom: "1.5rem" }}>
            <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: "500", color: "#2c2416", letterSpacing: "0.3px" }}>
              ⚧️ เพศ <span style={{ color: "#c44536" }}>*</span>
            </label>
            <select
              value={sex}
              onChange={(e) => setSex(e.target.value)}
              style={{
                display: "block",
                width: "100%",
                padding: "0.75rem",
                border: errors.sex ? "2px solid #c44536" : "1px solid #d4c5b0",
                borderRadius: "4px",
                fontSize: "1rem",
                transition: "all 0.3s",
                backgroundColor: "#fffef9",
                color: "#2c2416"
              }}
              disabled={isLoading}
            >
              <option value="">เลือกเพศ</option>
              <option value="ชาย">ชาย</option>
              <option value="หญิง">หญิง</option>
              <option value="อื่นๆ">อื่นๆ</option>
            </select>
            {errors.sex && (
              <span style={{ color: '#c44536', fontSize: '0.875rem', marginTop: '0.25rem', display: 'block' }}>
                {errors.sex}
              </span>
            )}
          </div>

          {/* Birthday */}
          <div style={{ marginBottom: "1.5rem" }}>
            <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: "500", color: "#2c2416", letterSpacing: "0.3px" }}>
              🎂 วันเกิด <span style={{ color: "#c44536" }}>*</span>
            </label>
            <input
              type="date"
              value={birthday}
              onChange={(e) => setBirthday(e.target.value)}
              style={{
                display: "block",
                width: "100%",
                padding: "0.75rem",
                border: errors.birthday ? "2px solid #c44536" : "1px solid #d4c5b0",
                borderRadius: "4px",
                fontSize: "1rem",
                transition: "all 0.3s",
                backgroundColor: "#fffef9",
                color: "#2c2416"
              }}
              disabled={isLoading}
            />
            {errors.birthday && (
              <span style={{ color: '#c44536', fontSize: '0.875rem', marginTop: '0.25rem', display: 'block' }}>
                {errors.birthday}
              </span>
            )}
          </div>

          {/* Accept Terms */}
          <div style={{ marginBottom: "1.5rem", padding: "1rem", backgroundColor: "#fef9f3", border: "1px solid #e8dcc8", borderRadius: "4px" }}>
            <label style={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
              <input
                type="checkbox"
                checked={acceptTerms}
                onChange={(e) => setAcceptTerms(e.target.checked)}
                style={{ marginRight: "0.5rem", width: "18px", height: "18px", cursor: "pointer", accentColor: "#c44536" }}
                disabled={isLoading}
              />
              <span style={{ color: "#2c2416", fontWeight: "500" }}>
                ยืนยันการแก้ไขข้อมูล <span style={{ color: "#c44536" }}>*</span>
              </span>
            </label>
            {errors.acceptTerms && (
              <span style={{ color: '#c44536', fontSize: '0.875rem', marginTop: '0.25rem', display: 'block' }}>
                {errors.acceptTerms}
              </span>
            )}
          </div>

          {/* Buttons */}
          <div style={{ display: "flex", gap: "1rem", marginTop: "2rem", paddingTop: "1.5rem", borderTop: "1px solid #e8dcc8" }}>
            <button
              type="submit"
              disabled={isLoading}
              style={{
                flex: 1,
                padding: "0.75rem 2rem",
                cursor: isLoading ? "not-allowed" : "pointer",
                backgroundColor: isLoading ? "#d4c5b0" : "#c44536",
                color: "#fffef9",
                border: "none",
                borderRadius: "4px",
                fontSize: "1rem",
                fontWeight: "600",
                transition: "all 0.3s",
                boxShadow: isLoading ? "none" : "0 4px 8px rgba(196, 69, 54, 0.25)",
                letterSpacing: "0.5px"
              }}
              onMouseEnter={(e) => !isLoading && (e.target.style.backgroundColor = "#6dce36ff")}
              onMouseLeave={(e) => !isLoading && (e.target.style.backgroundColor = "#6dce36ff")}
            >
              {isLoading ? "กำลังบันทึก..." : "💾 บันทึกข้อมูล"}
            </button>

            <button
              type="button"
              onClick={() => router.push("/admin/users")}
              disabled={isLoading}
              style={{
                flex: 1,
                padding: "0.75rem 2rem",
                cursor: isLoading ? "not-allowed" : "pointer",
                backgroundColor: isLoading ? "#d4c5b0" : "#8b7355",
                color: "#fffef9",
                border: "none",
                borderRadius: "4px",
                fontSize: "1rem",
                fontWeight: "600",
                transition: "all 0.3s",
                boxShadow: isLoading ? "none" : "0 4px 8px rgba(139, 115, 85, 0.25)",
                letterSpacing: "0.5px"
              }}
              onMouseEnter={(e) => !isLoading && (e.target.style.backgroundColor = "#ca0a03ff")}
              onMouseLeave={(e) => !isLoading && (e.target.style.backgroundColor = "#ca0a03ff")}
            >
              ❌ ยกเลิก
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}