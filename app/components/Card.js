"use client";
import React from 'react';

const Card = () => {
  const [selectedPlace, setSelectedPlace] = React.useState(null);
  const [showModal, setShowModal] = React.useState(false);

  // ข้อมูลร้านอาหารญี่ปุ่น
  const cardData = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=800",
    title: "Sushi Masterpiece",
    description: "ซูชิชั้นเลิศจากเชฟมากประสบการณ์ ด้วยวัตถุดิบสดใหม่จากญี่ปุ่น",
    details: {
      location: "โตเกียว สไตล์",
      bestTime: "มื้อกลางวัน - มื้อเย็น",
      activities: ["Omakase", "Nigiri", "Sashimi", "Maki Roll"],
      entrance: "฿800 - ฿3,000",
      highlights: "ซูชิสดใหม่ทำด้วยมือโดยเชฟผู้เชี่ยวชาญ ข้าวญี่ปุ่นคุณภาพสูง และปลาดิบคัดสรรพิเศษ บรรยากาศสไตล์ญี่ปุ่นแท้"
    }
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=800",
    title: "Ramen Heaven",
    description: "ราเมงต้นตำรับ น้ำซุปเข้มข้นเคี่ยวยาวนาน บะหมี่เส้นสดทำใหม่ทุกวัน",
    details: {
      location: "ฮอกไกโด สไตล์",
      bestTime: "ทุกมื้อ",
      activities: ["Tonkotsu Ramen", "Miso Ramen", "Shoyu Ramen", "Spicy Ramen"],
      entrance: "฿280 - ฿450",
      highlights: "น้ำซุปกระดูกหมูเคี่ยว 18 ชั่วโมง เส้นบะหมี่ทำเองทุกวัน ชาชูหมูนุ่มละมุน และไข่ออนเซนแท้"
    }
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=800",
    title: "Tempura Excellence",
    description: "เทมปุระทอดกรอบนอกนุ่มใน พร้อมซอสเด็ดและผักสดใหม่",
    details: {
      location: "เกียวโต สไตล์",
      bestTime: "มื้อกลางวัน",
      activities: ["กุ้งเทมปุระ", "ผักเทมปุระ", "ปลาเทมปุระ", "เทมปุระมิกซ์"],
      entrance: "฿350 - ฿800",
      highlights: "แป้งทอดสูตรพิเศษเบาบาง ทอดด้วยน้ำมันคุณภาะสูง เสิร์ฟร้อนๆ พร้อมซอสเทนสึยุแท้"
    }
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800",
    title: "Yakitori Grill House",
    description: "ไก่ย่างเสียบไม้สไตล์ญี่ปุ่น หมักด้วยซอสพิเศษย่างบนถ่าน",
    details: {
      location: "โอซาก้า สไตล์",
      bestTime: "มื้อเย็น",
      activities: ["ไก่ย่าง", "หนังไก่กรอบ", "ตับไก่", "ผักย่าง"],
      entrance: "฿200 - ฿600",
      highlights: "ย่างบนเตาถ่านแบบดั้งเดิม ไก่สดคุณภาพดี เสิร์ฟร้อนๆ บรรยากาศอบอุ่นสไตล์อิซากายะ"
    }
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=800",
    title: "Tonkatsu Paradise",
    description: "หมูทอดกรอบสไตล์ญี่ปุ่น เสิร์ฟพร้อมกะหล่ำปลีฝอยและซอสโทงคัทสึ",
    details: {
      location: "โตเกียว สไตล์",
      bestTime: "มื้อกลางวัน - มื้อเย็น",
      activities: ["Hire Katsu", "Rosu Katsu", "Chicken Katsu", "Cheese Katsu"],
      entrance: "฿280 - ฿550",
      highlights: "หมูคุณภาะดีเลือกส่วน เคลือบเกล็ดขนมปังญี่ปุ่น ทอดกรอบนุ่ม เสิร์ฟพร้อมซอสโทงคัทสึแท้"
    }
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1563612116625-3012372fccce?w=800",
    title: "Shabu Shabu & Sukiyaki",
    description: "ชาบูชาบูและสุกี้ยากี้ญี่ปุ่นแท้ เนื้อบางสไลด์คุณภาพพรีเมียม",
    details: {
      location: "เกียวโต สไตล์",
      bestTime: "มื้อเย็น",
      activities: ["Wagyu Shabu", "Pork Shabu", "Sukiyaki Set", "Seafood Shabu"],
      entrance: "฿450 - ฿1,500",
      highlights: "เนื้อวากิวสไลด์บางเฉือนสด น้ำซุปคุณภาพสูง ผักสดพร้อมซอสโพนสึและโกมะแท้"
    }
  },
  {
    id: 7,
    image: "https://images.unsplash.com/photo-1617093727343-374698b1b08d?w=800",
    title: "Okonomiyaki Spot",
    description: "โอโคโนมิยากิแป้งญี่ปุ่น ทำสดใหม่ต่อหน้าลูกค้า",
    details: {
      location: "ฮิโรชิมา สไตล์",
      bestTime: "มื้อกลางวัน - มื้อเย็น",
      activities: ["Hiroshima Style", "Osaka Style", "Seafood Mix", "Pork & Cheese"],
      entrance: "฿250 - ฿450",
      highlights: "ทำสดใหม่บนเหล็กร้อน เติมไส้มากมาย ราดซอสโอโคโนมิยากิและมายองเนสญี่ปุ่น โรยโบนิโตะ"
    }
  },
  {
    id: 8,
    image: "https://images.unsplash.com/photo-1608039829572-78524f79c4c7?w=800",
    title: "Udon & Soba House",
    description: "อุด้งและโซบะเส้นทำมือ น้ำซุปกัตสึโอบูชิแท้",
    details: {
      location: "คางาวะ สไตล์",
      bestTime: "ทุกมื้อ",
      activities: ["Kake Udon", "Tempura Udon", "Cold Soba", "Hot Soba"],
      entrance: "฿180 - ฿350",
      highlights: "เส้นอุด้งเหนียวนุ่มทำมือ เส้นโซบะจากแป้งบัควีทแท้ น้ำซุปใสหอมกลิ่นกัตสึโอบุชิ"
    }
  },
  {
    id: 9,
    image: "https://www.asiantemple.cz/wp-content/uploads/2022/07/TEPPAN-06-scaled.jpg",
    title: "Teppanyaki Show",
    description: "เทปปันยากิสดๆ ร้อนๆ ปรุงต่อหน้าด้วยเชฟมากทักษะ",
    details: {
      location: "โตเกียว สไตล์",
      bestTime: "มื้อเย็น",
      activities: ["Wagyu Steak", "Seafood Mix", "Fried Rice", "Garlic Rice"],
      entrance: "฿800 - ฿2,500",
      highlights: "โชว์การปรุงสุดพิเศษจากเชฟ เนื้อวากิวชั้นดี ซีฟู้ดสด ปรุงบนเหล็กร้อนต่อหน้า"
    }
  }
];


  const handleShowDetails = (place) => {
    setSelectedPlace(place);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedPlace(null);
  };

  return (
    <>
      {/* Global Style สำหรับ Animation และ Keyframes */}
      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(15deg); }
          50% { transform: translateY(-20px) rotate(15deg); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideIn {
          from { opacity: 0; transform: scale(0.8) translateY(-50px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
          40% { transform: translateY(-10px); }
          60% { transform: translateY(-5px); }
        }
      `}</style>

      {/* Bootstrap CSS */}
      <link
        href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/css/bootstrap.min.css"
        rel="stylesheet"
      />

      <div
        className="container-fluid py-5"
        style={{
          background: 'linear-gradient(135deg, #fce4ec 0%, #f8bbd9 25%, #e1bee7 50%, #c8a2c8 75%, #ffcdd2 100%)',
          minHeight: '100vh',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        {/* ซากุระพื้นหลัง */}
        {['10%|10%|2rem|0.4', '20%|5%|1.5rem|0.5', '85%|20%|1.8rem|0.3', '75%|15%|1.3rem|0.6'].map((item, idx) => {
          const [top, left, size, opacity] = item.split('|');
          return (
            <div
              key={idx}
              className="position-absolute"
              style={{
                top: top,
                left: left,
                fontSize: size,
                color: `rgba(255, 182, 193, ${opacity})`,
                zIndex: 0,
                animation: `float ${6 + idx}s ease-in-out infinite ${idx % 2 === 0 ? '' : 'reverse'}`,
                transform: `rotate(${idx % 2 === 0 ? 15 : -10}deg)`
              }}
            >
              🌸
            </div>
          );
        })}

        <div className="container position-relative" style={{ zIndex: 1 }}>
          <div className="row text-center mb-5">
            <div className="col-12">
              <h2
                className="display-4 fw-bold mb-3"
                style={{
                  color: '#d81b60',
                  textShadow: '3px 3px 10px rgba(216, 27, 96, 0.3), 0 0 25px rgba(255, 182, 193, 0.4)',
                  filter: 'drop-shadow(0 0 15px rgba(216, 27, 96, 0.2))',
                  fontFamily: 'serif'
                }}
              >
                🍱 Japanese Restaurant Guide 🍣
              </h2>
              <p
                className="lead mb-3"
                style={{
                  color: '#8e24aa',
                  textShadow: '2px 2px 6px rgba(255,255,255,0.8)',
                  fontWeight: '500'
                }}
              >
                สัมผัสรสชาติแท้จากแดนอาทิตย์อุทัย อาหารญี่ปุ่นต้นตำรับ
              </p>
            </div>
          </div>

          {/* Card Grid */}
          <div className="row g-4">
            {cardData.map((card) => (
              <div key={card.id} className="col-lg-4 col-md-6 col-sm-12">
                <div
                  className="card h-100 border-0"
                  style={{
                    background: 'linear-gradient(145deg, rgba(255,255,255,0.95), rgba(252,228,236,0.9))',
                    transition: 'all 0.4s ease',
                    cursor: 'pointer',
                    borderRadius: '20px',
                    overflow: 'hidden',
                    boxShadow: '0 10px 30px rgba(216, 27, 96, 0.15)',
                  }}
                  onClick={() => handleShowDetails(card)}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-10px) scale(1.02)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0) scale(1)'}
                >
                  <img
                    src={card.image}
                    className="card-img-top"
                    alt={card.title}
                    style={{ height: '250px', objectFit: 'cover' }}
                  />
                  <div className="card-body">
                    <h5 className="card-title fw-bold">{card.title}</h5>
                    <p className="card-text">{card.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Modal */}
        {showModal && selectedPlace && (
          <div
            className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
            style={{
              zIndex: 9999,
              backgroundColor: 'rgba(0,0,0,0.8)',
              backdropFilter: 'blur(8px)',
              animation: 'fadeIn 0.3s ease-in-out'
            }}
            onClick={handleCloseModal}
          >
            <div
              className="position-relative"
              style={{
                maxWidth: '600px',
                width: '90%',
                maxHeight: '80vh',
                background: 'linear-gradient(145deg, rgba(255,255,255,0.98), rgba(255,240,245,0.95))',
                borderRadius: '25px',
                overflowY: 'auto',
                animation: 'slideIn 0.4s ease'
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* ปุ่มปิด */}
              <button
                onClick={handleCloseModal}
                style={{
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
                }}
              >
                ×
              </button>

              <div className="p-4">
                <img
                  src={selectedPlace.image}
                  alt={selectedPlace.title}
                  className="img-fluid mb-3 rounded"
                  style={{ maxHeight: '250px', objectFit: 'cover', width: '100%' }}
                />
                <h3 className="fw-bold mb-3 text-center">{selectedPlace.title}</h3>
                <p className="mb-3"><strong>📍 สไตล์:</strong> {selectedPlace.details.location}</p>
                <p className="mb-3"><strong>🕐 เวลาแนะนำ:</strong> {selectedPlace.details.bestTime}</p>
                <p className="mb-3"><strong>💰 ราคา:</strong> {selectedPlace.details.entrance}</p>
                <p className="mb-3"><strong>✨ ไฮไลท์:</strong></p>
                <p className="mb-4">{selectedPlace.details.highlights}</p>
                
                {/* ปุ่มสั่งอาหาร */}
                <div className="text-center">
                  <button
                    onClick={() => alert('กำลังเปิดระบบสั่งอาหาร...')}
                    style={{
                      background: 'linear-gradient(45deg, #d81b60, #e91e63)',
                      border: 'none',
                      borderRadius: '50px',
                      padding: '15px 40px',
                      color: '#fff',
                      fontSize: '1.1rem',
                      fontWeight: 'bold',
                      cursor: 'pointer',
                      boxShadow: '0 5px 20px rgba(216, 27, 96, 0.4)',
                      transition: 'all 0.3s ease',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '10px'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'scale(1.05)';
                      e.currentTarget.style.boxShadow = '0 8px 30px rgba(216, 27, 96, 0.6)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'scale(1)';
                      e.currentTarget.style.boxShadow = '0 5px 20px rgba(216, 27, 96, 0.4)';
                    }}
                  >
                    🍱 สั่งอาหาร
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Bootstrap JS */}
      <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/js/bootstrap.bundle.min.js"></script>
    </>
  );
};

export default Card;