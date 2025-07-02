import Link from "next/link";


export default function About() {
  return (
    <div>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>เกี่ยวกับเรา - About Us</title>
  <link href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/css/bootstrap.min.css" rel="stylesheet" />
  <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" rel="stylesheet" />
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
  {/* Hero Section */}
  <section className="hero-section">
    <div className="floating-shapes">
      <div className="shape shape-1">
        <i className="fas fa-circle" style={{fontSize: 60}} />
      </div>
      <div className="shape shape-2">
        <i className="fas fa-square" style={{fontSize: 50}} />
      </div>
      <div className="shape shape-3">
        <i className="fas fa-triangle" style={{fontSize: 40}} />
      </div>
    </div>
    <div className="container hero-content">
      <div className="row align-items-center">
        <div className="col-lg-6">
          <h1 className="display-4 fw-bold mb-4">เกี่ยวกับเรา</h1>
          <p className="lead mb-4">เราเป็นทีมที่มีความหลากหลายและมีประสบการณ์ที่มุ่งมั่นในการสร้างสรรค์นวัตกรรมและสร้างผลกระทบเชิงบวกต่อโลก</p>
          <button className="btn btn-modern btn-lg">
            <i className="fas fa-rocket me-2" />
            เริ่มต้นกับเรา
          </button>
        </div>
        <div className="col-lg-6 text-center">
          <div className="hero-image">
            <i className="fas fa-users" style={{fontSize: '12rem', opacity: '0.8'}} />
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Stats Section */}
  <section className="section-padding bg-light">
    <div className="container">
      <div className="row">
        <div className="col-lg-3 col-md-6 mb-4">
          <div className="stats-card">
            <span className="stats-number">500+</span>
            <span>โปรเจกต์</span>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 mb-4">
          <div className="stats-card">
            <span className="stats-number">50+</span>
            <span>ลูกค้า</span>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 mb-4">
          <div className="stats-card">
            <span className="stats-number">5</span>
            <span>ปีประสบการณ์</span>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 mb-4">
          <div className="stats-card">
            <span className="stats-number">24/7</span>
            <span>บริการ</span>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Our Story Section */}
  <section className="section-padding">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-8 text-center">
          <h2 className="section-title">เรื่องราวของเรา</h2>
          <p className="lead text-muted">
            เราเริ่มต้นด้วยความฝันที่จะสร้างความเปลี่ยนแปลงเชิงบวกผ่านเทคโนโลยี 
            ด้วยทีมที่มีประสบการณ์และความหลงใหลในการพัฒนานวัตกรรม เราได้สร้างโซลูชันที่ช่วยให้ธุรกิจเติบโตและประสบความสำเร็จ
          </p>
        </div>
      </div>
    </div>
  </section>
  {/* Timeline Section */}
  <section className="section-padding bg-light">
    <div className="container">
      <div className="row">
        <div className="col-12 text-center">
          <h2 className="section-title">เส้นทางการเดินทาง</h2>
        </div>
      </div>
      <div className="timeline">
        <div className="timeline-item">
          <div className="timeline-content">
            <h4 className="fw-bold text-primary">2020</h4>
            <h5>การก่อตั้งบริษัท</h5>
            <p className="text-muted">เริ่มต้นด้วยทีมเล็กๆ และความฝันใหญ่ในการสร้างเทคโนโลยีที่เปลี่ยนโลก</p>
          </div>
          <div className="timeline-dot" />
        </div>
        <div className="timeline-item">
          <div className="timeline-content">
            <h4 className="fw-bold text-primary">2022</h4>
            <h5>การขยายตัว</h5>
            <p className="text-muted">เติบโตเป็นทีม 50+ คน และเปิดสำนักงานใหม่ในกรุงเทพฯ</p>
          </div>
          <div className="timeline-dot" />
        </div>
        <div className="timeline-item">
          <div className="timeline-content">
            <h4 className="fw-bold text-primary">2024</h4>
            <h5>นวัตกรรมใหม่</h5>
            <p className="text-muted">เปิดตัวผลิตภัณฑ์ AI ที่ช่วยปรับปรุงประสิทธิภาพธุรกิจ</p>
          </div>
          <div className="timeline-dot" />
        </div>
        <div className="timeline-item">
          <div className="timeline-content">
            <h4 className="fw-bold text-primary">2025</h4>
            <h5>อนาคตที่สดใส</h5>
            <p className="text-muted">วางแผนขยายไปยังตลาดใหม่และพัฒนาเทคโนโลยีที่ทันสมัยยิ่งขึ้น</p>
          </div>
          <div className="timeline-dot" />
        </div>
      </div>
    </div>
  </section>
  {/* Values Section */}
  <section className="section-padding">
    <div className="container">
      <div className="row">
        <div className="col-12 text-center">
          <h2 className="section-title">ค่านิยมของเรา</h2>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-lg-4 col-md-6 mb-4">
          <div className="card-modern text-center p-4">
            <div className="values-icon">
              <i className="fas fa-lightbulb" />
            </div>
            <h5 className="fw-bold">นวัตกรรม</h5>
            <p className="text-muted">เราสร้างสรรค์โซลูชันใหม่ๆ ที่ตอบโจทย์ความต้องการของลูกค้า</p>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 mb-4">
          <div className="card-modern text-center p-4">
            <div className="values-icon">
              <i className="fas fa-heart" />
            </div>
            <h5 className="fw-bold">ความเอาใจใส่</h5>
            <p className="text-muted">เราใส่ใจในทุกรายละเอียดและมุ่งมั่นที่จะให้บริการที่ดีที่สุด</p>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 mb-4">
          <div className="card-modern text-center p-4">
            <div className="values-icon">
              <i className="fas fa-handshake" />
            </div>
            <h5 className="fw-bold">ความไว้วางใจ</h5>
            <p className="text-muted">เราสร้างความสัมพันธ์ที่ยั่งยืนกับลูกค้าด้วยความซื่อสัตย์</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Team Section */}
  <section className="section-padding bg-light">
    <div className="container">
      <div className="row">
        <div className="col-12 text-center">
          <h2 className="section-title">ทีมของเรา</h2>
          <p className="lead text-muted mb-5">พบกับผู้เชี่ยวชาญที่ขับเคลื่อนความสำเร็จของเรา</p>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-4 col-md-6 mb-4">
          <div className="card-modern team-card">
            <div className="team-avatar">
              <i className="fas fa-user-tie" />
            </div>
            <h5 className="fw-bold">สมชาย วัฒนา</h5>
            <p className="text-primary fw-medium">CEO &amp; Founder</p>
            <p className="text-muted small">ผู้นำที่มีประสบการณ์กว่า 15 ปีในอุตสาหกรรมเทคโนโลยี</p>
            <div className="social-links">
              <a href="#"><i className="fab fa-linkedin-in" /></a>
              <a href="#"><i className="fab fa-twitter" /></a>
              <a href="#"><i className="fab fa-facebook-f" /></a>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 mb-4">
          <div className="card-modern team-card">
            <div className="team-avatar">
              <i className="fas fa-user-graduate" />
            </div>
            <h5 className="fw-bold">นริสา เจริญ</h5>
            <p className="text-primary fw-medium">CTO</p>
            <p className="text-muted small">ผู้เชี่ยวชาญด้านเทคโนโลยีและการพัฒนาผลิตภัณฑ์</p>
            <div className="social-links">
              <a href="#"><i className="fab fa-linkedin-in" /></a>
              <a href="#"><i className="fab fa-github" /></a>
              <a href="#"><i className="fab fa-twitter" /></a>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 mb-4">
          <div className="card-modern team-card">
            <div className="team-avatar">
              <i className="fas fa-user-cog" />
            </div>
            <h5 className="fw-bold">อารยา ศรีสุข</h5>
            <p className="text-primary fw-medium">Head of Design</p>
            <p className="text-muted small">นักออกแบบมืออาชีพที่สร้างสรรค์ผลงานที่สวยงามและใช้งานง่าย</p>
            <div className="social-links">
              <a href="#"><i className="fab fa-dribbble" /></a>
              <a href="#"><i className="fab fa-behance" /></a>
              <a href="#"><i className="fab fa-instagram" /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Contact CTA Section */}
  <section className="section-padding">
    <div className="container">
      <div className="row justify-content-center text-center">
        <div className="col-lg-8">
          <h2 className="mb-4">พร้อมที่จะเริ่มต้นกับเราหรือยัง?</h2>
          <p className="lead text-muted mb-4">
            ติดต่อเราวันนี้เพื่อหารือเกี่ยวกับโปรเจกต์ของคุณ 
            และค้นหาวิธีที่เราสามารถช่วยให้ธุรกิจของคุณประสบความสำเร็จ
          </p>
          <div className="d-flex justify-content-center gap-3 flex-wrap">
            <button className="btn btn-modern btn-lg">
              <i className="fas fa-envelope me-2" />
              ติดต่อเรา
            </button>
            <button className="btn btn-outline-dark btn-lg rounded-pill">
              <i className="fas fa-phone me-2" />
              โทร 02-XXX-XXXX
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>
  )
}