import Link from 'next/link'
export default function Navbar() {
  return (
<div>
  <link href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/css/bootstrap.min.css" rel="stylesheet" />
  <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" rel="stylesheet" />
  <style dangerouslySetInnerHTML={{__html: "\n            .navbar-modern {\n                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\n                box-shadow: 0 4px 20px rgba(0,0,0,0.1);\n                backdrop-filter: blur(10px);\n                transition: all 0.3s ease;\n            }\n            \n            .navbar-modern.scrolled {\n                background: rgba(255,255,255,0.95);\n                box-shadow: 0 2px 20px rgba(0,0,0,0.1);\n            }\n            \n            .navbar-brand {\n                font-weight: 700;\n                font-size: 1.8rem;\n                color: white !important;\n                padding-left: 20px;\n                transition: all 0.3s ease;\n            }\n            \n            .navbar-brand:hover {\n                transform: scale(1.05);\n                color: #f8f9fa !important;\n            }\n            \n            .navbar-nav .nav-link {\n                color: white !important;\n                font-weight: 500;\n                margin: 0 10px;\n                padding: 10px 20px !important;\n                border-radius: 25px;\n                transition: all 0.3s ease;\n                position: relative;\n                overflow: hidden;\n            }\n            \n            .navbar-nav .nav-link:hover {\n                background: rgba(255,255,255,0.2);\n                transform: translateY(-2px);\n                box-shadow: 0 5px 15px rgba(0,0,0,0.2);\n            }\n            \n            .navbar-nav .nav-link.active {\n                background: rgba(255,255,255,0.3);\n                color: white !important;\n            }\n            \n            .navbar-toggler {\n                border: none;\n                padding: 8px 12px;\n            }\n            \n            .navbar-toggler:focus {\n                box-shadow: none;\n            }\n            \n            .navbar-toggler-icon {\n                background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%28255, 255, 255, 1%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e\");\n            }\n            \n            .logo-icon {\n                margin-right: 8px;\n                font-size: 1.5rem;\n            }\n            \n            /* Responsive adjustments */\n            @media (max-width: 991px) {\n                .navbar-collapse {\n                    background: rgba(255,255,255,0.95);\n                    border-radius: 15px;\n                    margin-top: 15px;\n                    padding: 20px;\n                    box-shadow: 0 5px 25px rgba(0,0,0,0.1);\n                }\n                \n                .navbar-nav .nav-link {\n                    color: #333 !important;\n                    margin: 5px 0;\n                }\n                \n                .navbar-nav .nav-link:hover {\n                    background: rgba(102, 126, 234, 0.1);\n                    color: #667eea !important;\n                }\n            }\n            \n            /* Demo content */\n            .demo-content {\n                padding: 100px 0;\n                background: linear-gradient(45deg, #f8f9fa, #e9ecef);\n                min-height: 100vh;\n            }\n            \n            .demo-section {\n                margin: 60px 0;\n                padding: 40px;\n                background: white;\n                border-radius: 15px;\n                box-shadow: 0 5px 25px rgba(0,0,0,0.1);\n            }\n        " }} />
  {/* Modern Navbar */}
  <nav className="navbar navbar-expand-lg navbar-modern fixed-top">
    <div className="container">
      {/* Logo */}
      <a className="navbar-brand" src="../cmtc-logo.png">
        <i className="fas fa-rocket logo-icon" />
        Your Logo
      </a>
      {/* Mobile Toggle Button */}
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
        <span className="navbar-toggler-icon" />
      </button>
      {/* Navigation Menu */}
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <a className="nav-link active" href="/">
              <i className="fas fa-home me-1" />หน้าแรก
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="./Services">
              <i className="fas fa-cogs me-1" />บริการ
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="./About">
              <i className="fas fa-info-circle me-1" />เกี่ยวกับเรา
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="./Contact">
              <i className="fas fa-envelope me-1" />ติดต่อ
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="./Login">
              <i className="fas fa-fire me-1" />Login
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
 </div>
  );
}
