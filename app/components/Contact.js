

export default function Contact() {
    return (
        <div>
            <style dangerouslySetInnerHTML={{ __html: "\n        :root {\n            --primary-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\n            --secondary-gradient: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);\n            --dark-gradient: linear-gradient(135deg, #2c3e50 0%, #34495e 100%);\n        }\n\n        body {\n            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\n            min-height: 100vh;\n            padding: 0;\n            margin: 0;\n        }\n\n        .hero-section {\n            background: var(--primary-gradient);\n            padding: 80px 0 60px;\n            position: relative;\n            overflow: hidden;\n        }\n\n        .hero-section::before {\n            content: '';\n            position: absolute;\n            top: 0;\n            left: 0;\n            right: 0;\n            bottom: 0;\n            background: url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\"><defs><pattern id=\"grain\" width=\"100\" height=\"100\" patternUnits=\"userSpaceOnUse\"><circle cx=\"25\" cy=\"25\" r=\"1\" fill=\"white\" opacity=\"0.1\"/><circle cx=\"75\" cy=\"75\" r=\"1\" fill=\"white\" opacity=\"0.1\"/><circle cx=\"50\" cy=\"10\" r=\"0.5\" fill=\"white\" opacity=\"0.1\"/><circle cx=\"20\" cy=\"80\" r=\"0.5\" fill=\"white\" opacity=\"0.1\"/></pattern></defs><rect width=\"100\" height=\"100\" fill=\"url(%23grain)\"/></svg>');\n            animation: float 20s ease-in-out infinite;\n        }\n\n        @keyframes float {\n            0%, 100% { transform: translateY(0px); }\n            50% { transform: translateY(-20px); }\n        }\n\n        .hero-content {\n            position: relative;\n            z-index: 2;\n        }\n\n        .hero-title {\n            font-size: 3.5rem;\n            font-weight: 700;\n            color: white;\n            text-shadow: 0 4px 6px rgba(0,0,0,0.1);\n            margin-bottom: 1rem;\n        }\n\n        .hero-subtitle {\n            font-size: 1.2rem;\n            color: rgba(255,255,255,0.9);\n            margin-bottom: 2rem;\n        }\n\n        .contact-section {\n            padding: 80px 0;\n            background: #f8f9fa;\n            position: relative;\n        }\n\n        .contact-card {\n            background: white;\n            border-radius: 20px;\n            box-shadow: 0 20px 40px rgba(0,0,0,0.1);\n            padding: 40px;\n            margin-bottom: 30px;\n            transition: all 0.3s ease;\n            border: none;\n            position: relative;\n            overflow: hidden;\n        }\n\n        .contact-card::before {\n            content: '';\n            position: absolute;\n            top: 0;\n            left: 0;\n            right: 0;\n            height: 4px;\n            background: var(--primary-gradient);\n        }\n\n        .contact-card:hover {\n            transform: translateY(-10px);\n            box-shadow: 0 30px 60px rgba(0,0,0,0.15);\n        }\n\n        .contact-form {\n            background: white;\n            border-radius: 20px;\n            box-shadow: 0 20px 40px rgba(0,0,0,0.1);\n            padding: 40px;\n            position: relative;\n            overflow: hidden;\n        }\n\n        .contact-form::before {\n            content: '';\n            position: absolute;\n            top: 0;\n            left: 0;\n            right: 0;\n            height: 4px;\n            background: var(--secondary-gradient);\n        }\n\n        .form-control {\n            border: 2px solid #e9ecef;\n            border-radius: 15px;\n            padding: 15px 20px;\n            font-size: 1rem;\n            transition: all 0.3s ease;\n            background: #f8f9fa;\n        }\n\n        .form-control:focus {\n            border-color: #667eea;\n            box-shadow: 0 0 0 0.2rem rgba(102, 126, 234, 0.25);\n            background: white;\n        }\n\n        .form-label {\n            font-weight: 600;\n            color: #2c3e50;\n            margin-bottom: 8px;\n        }\n\n        .btn-primary {\n            background: var(--primary-gradient);\n            border: none;\n            border-radius: 15px;\n            padding: 15px 40px;\n            font-weight: 600;\n            font-size: 1.1rem;\n            transition: all 0.3s ease;\n            position: relative;\n            overflow: hidden;\n        }\n\n        .btn-primary:hover {\n            transform: translateY(-2px);\n            box-shadow: 0 10px 20px rgba(102, 126, 234, 0.3);\n        }\n\n        .btn-primary::before {\n            content: '';\n            position: absolute;\n            top: 0;\n            left: -100%;\n            width: 100%;\n            height: 100%;\n            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);\n            transition: left 0.5s;\n        }\n\n        .btn-primary:hover::before {\n            left: 100%;\n        }\n\n        .contact-info-item {\n            display: flex;\n            align-items: center;\n            margin-bottom: 25px;\n            padding: 20px;\n            background: #f8f9fa;\n            border-radius: 15px;\n            transition: all 0.3s ease;\n        }\n\n        .contact-info-item:hover {\n            background: white;\n            box-shadow: 0 5px 15px rgba(0,0,0,0.1);\n            transform: translateX(5px);\n        }\n\n        .contact-icon {\n            width: 60px;\n            height: 60px;\n            background: var(--primary-gradient);\n            border-radius: 50%;\n            display: flex;\n            align-items: center;\n            justify-content: center;\n            margin-right: 20px;\n            color: white;\n            font-size: 1.5rem;\n            flex-shrink: 0;\n        }\n\n        .contact-details h5 {\n            color: #2c3e50;\n            font-weight: 600;\n            margin-bottom: 5px;\n        }\n\n        .contact-details p {\n            color: #6c757d;\n            margin: 0;\n            font-size: 0.95rem;\n        }\n\n        .section-title {\n            font-size: 2.5rem;\n            font-weight: 700;\n            color: #2c3e50;\n            text-align: center;\n            margin-bottom: 20px;\n            position: relative;\n        }\n\n        .section-subtitle {\n            text-align: center;\n            color: #6c757d;\n            font-size: 1.1rem;\n            margin-bottom: 60px;\n        }\n\n        .map-container {\n            border-radius: 20px;\n            overflow: hidden;\n            box-shadow: 0 20px 40px rgba(0,0,0,0.1);\n            height: 400px;\n            background: var(--primary-gradient);\n            display: flex;\n            align-items: center;\n            justify-content: center;\n            color: white;\n            font-size: 1.2rem;\n        }\n\n        .social-links {\n            text-align: center;\n            margin-top: 30px;\n        }\n\n        .social-link {\n            display: inline-block;\n            width: 50px;\n            height: 50px;\n            background: var(--primary-gradient);\n            color: white;\n            border-radius: 50%;\n            text-decoration: none;\n            display: inline-flex;\n            align-items: center;\n            justify-content: center;\n            margin: 0 10px;\n            transition: all 0.3s ease;\n            font-size: 1.2rem;\n        }\n\n        .social-link:hover {\n            color: white;\n            transform: translateY(-5px) scale(1.1);\n            box-shadow: 0 10px 20px rgba(102, 126, 234, 0.3);\n        }\n\n        @media (max-width: 768px) {\n            .hero-title {\n                font-size: 2.5rem;\n            }\n            \n            .contact-card,\n            .contact-form {\n                padding: 30px 20px;\n            }\n            \n            .section-title {\n                font-size: 2rem;\n            }\n        }\n\n        .fade-in {\n            opacity: 0;\n            transform: translateY(30px);\n            animation: fadeInUp 0.8s ease-out forwards;\n        }\n\n        @keyframes fadeInUp {\n            to {\n                opacity: 1;\n                transform: translateY(0);\n            }\n        }\n\n        .fade-in:nth-child(1) { animation-delay: 0.1s; }\n        .fade-in:nth-child(2) { animation-delay: 0.2s; }\n        .fade-in:nth-child(3) { animation-delay: 0.3s; }\n        .fade-in:nth-child(4) { animation-delay: 0.4s; }\n    " }} />
            {/* Hero Section */}
            <section className="hero-section">
                <div className="container">
                    <div className="hero-content text-center">
                        <h1 className="hero-title fade-in">ติดต่อเรา</h1>
                        <p className="hero-subtitle fade-in">เรายินดีที่จะได้รับฟังจากคุณ ติดต่อเราได้ทุกเวลา</p>
                    </div>
                </div>
            </section>
            {/* Contact Section */}
            <section className="contact-section">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center mb-5">
                            <h2 className="section-title fade-in">พร้อมให้บริการคุณ</h2>
                            <p className="section-subtitle fade-in">ส่งข้อความถึงเรา หรือติดต่อผ่านช่องทางอื่นๆ ด้านล่าง</p>
                        </div>
                    </div>
                    <div className="row">
                        {/* Contact Form */}
                        <div className="col-lg-8 mb-4">
                            <div className="contact-form fade-in">
                                <h3 className="mb-4" style={{ color: '#2c3e50', fontWeight: 600 }}>ส่งข้อความถึงเรา</h3>
                                <form>
                                    <div className="row">
                                        <div className="col-md-6 mb-3">
                                            <label htmlFor="firstName" className="form-label">ชื่อ</label>
                                            <input type="text" className="form-control" id="firstName" placeholder="กรอกชื่อของคุณ" />
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <label htmlFor="lastName" className="form-label">นามสกุล</label>
                                            <input type="text" className="form-control" id="lastName" placeholder="กรอกนามสกุลของคุณ" />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6 mb-3">
                                            <label htmlFor="email" className="form-label">อีเมล</label>
                                            <input type="email" className="form-control" id="email" placeholder="example@email.com" />
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <label htmlFor="phone" className="form-label">เบอร์โทรศัพท์</label>
                                            <input type="tel" className="form-control" id="phone" placeholder="08X-XXX-XXXX" />
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="subject" className="form-label">หัวข้อ</label>
                                        <input type="text" className="form-control" id="subject" placeholder="หัวข้อที่ต้องการติดต่อ" />
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="message" className="form-label">ข้อความ</label>
                                        <textarea className="form-control" id="message" rows={5} placeholder="เขียนข้อความของคุณที่นี่..." defaultValue={""} />
                                    </div>
                                    <div className="text-center">
                                        <button type="submit" className="btn btn-primary btn-lg">
                                            <i className="fas fa-paper-plane me-2" />ส่งข้อความ
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        {/* Contact Info */}
                        <div className="col-lg-4">
                            <div className="contact-card fade-in">
                                <h3 className="mb-4" style={{ color: '#2c3e50', fontWeight: 600 }}>ติดต่อเรา</h3>
                                <div className="contact-info-item">
                                    <div className="contact-icon">
                                        <i className="fas fa-map-marker-alt" />
                                    </div>
                                    <div className="contact-details">
                                        <h5>ที่อยู่</h5>
                                        <p>123 ถนนสุขุมวิท<br />เขตวัฒนา กรุงเทพฯ 10110</p>
                                    </div>
                                </div>
                                <div className="contact-info-item">
                                    <div className="contact-icon">
                                        <i className="fas fa-phone" />
                                    </div>
                                    <div className="contact-details">
                                        <h5>โทรศัพท์</h5>
                                        <p>02-XXX-XXXX<br />08X-XXX-XXXX</p>
                                    </div>
                                </div>
                                <div className="contact-info-item">
                                    <div className="contact-icon">
                                        <i className="fas fa-envelope" />
                                    </div>
                                    <div className="contact-details">
                                        <h5>อีเมล</h5>
                                        <p>info@company.com<br />support@company.com</p>
                                    </div>
                                </div>
                                <div className="contact-info-item">
                                    <div className="contact-icon">
                                        <i className="fas fa-clock" />
                                    </div>
                                    <div className="contact-details">
                                        <h5>เวลาทำการ</h5>
                                        <p>จันทร์ - ศุกร์: 9:00 - 18:00<br />เสาร์: 9:00 - 16:00</p>
                                    </div>
                                </div>
                                <div className="social-links">
                                    <a href="#" className="social-link"><i className="fab fa-facebook-f" /></a>
                                    <a href="#" className="social-link"><i className="fab fa-twitter" /></a>
                                    <a href="#" className="social-link"><i className="fab fa-instagram" /></a>
                                    <a href="#" className="social-link"><i className="fab fa-line" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Map Section */}
                    <div className="row mt-5">
                        <div className="col-12">
                            <div className="map-container fade-in">
                                <div className="text-center">
                                    <i className="fas fa-map-marked-alt fa-3x mb-3" />
                                    <h4>แผนที่ตำแหน่งที่ตั้ง</h4>
                                    <p>ค้นหาเราได้ที่นี่</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}