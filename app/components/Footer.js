
export default function Footer() {
  return (
<div>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Footer Example</title>
  <style dangerouslySetInnerHTML={{__html: "\n        footer {\n            background-color: #333;\n            color: white;\n            padding: 20px 0;\n            text-align: center;\n            width: 100%;\n        }\n\n        .footer-container {\n            max-width: 800px;\n            margin: auto;\n        }\n\n        .social-icons {\n            margin-bottom: 10px;\n        }\n\n        .social-icons a {\n            display: inline-block;\n            margin: 0 10px;\n        }\n\n        .social-icons img {\n            width: 50px;\n            height: 50px;\n            transition: transform 0.3s ease-in-out;\n        }\n\n        .social-icons img:hover {\n            transform: scale(1.2);\n        }\n    " }} />
  <footer id="contact">
    <div className="footer-container">
      <div className="social-icons">
        <a href="https://facebook.com" target="_blank"><img src="/images/fb.png" alt="Facebook" /></a>
        <a href="https://line.me" target="_blank"><img src="/images/line.png" alt="Line" /></a>
        <a href="https://instagram.com" target="_blank"><img src="/images/ig.png" alt="Instagram" /></a>
      </div>
      <p>📞 โทร: 081-234-5678 | ✉️ อีเมล: info@tourguide.com</p>
    </div>
  </footer>
</div>

);
}
