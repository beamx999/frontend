"use client";
import React from 'react';

const Card = () => {
  const [selectedPlace, setSelectedPlace] = React.useState(null);
  const [showModal, setShowModal] = React.useState(false);

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
      activities: ["ปีนเขา", "ชมวิว", "ถ่ายภาพ", "ชมพระอาทิตย์ขึ้น"],
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
      activities: ["ชมสถาปัตยกรรม", "ถ่ายภาพ", "ชมใบไม้เปลี่ยนสี", "สวดมนต์"],
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
      activities: ["เดินชมเสาโทริอิ", "ถ่ายภาพ", "สวดมนต์"],
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
      activities: ["เดินชมธรรมชาติ", "ถ่ายภาพ", "ปั่นจักรยาน"],
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
      activities: ["ถ่ายภาพ", "ช้อปปิ้ง", "ชมเมือง"],
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
      activities: ["ชมปราสาท", "เดินชมสวน", "ถ่ายภาพ"],
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
      activities: ["ชมปราสาท", "ถ่ายภาพ", "เรียนรู้ประวัติศาสตร์"],
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
      activities: ["ให้อาหารกวาง", "ถ่ายภาพ", "เดินชมวัด"],
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
      activities: ["ชมวิว", "ถ่ายภาพ", "ช้อปปิ้งในหอคอย"],
      entrance: "1,200 เยน",
      highlights: "หอคอยสีแดงขาวสูง 333 เมตร เป็นจุดชมวิวที่สวยที่สุดของโตเกียว โดยเฉพาะช่วงกลางคืน"
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
                🌸 Japan Travel Guide 🌸
              </h2>
              <p
                className="lead mb-3"
                style={{
                  color: '#8e24aa',
                  textShadow: '2px 2px 6px rgba(255,255,255,0.8)',
                  fontWeight: '500'
                }}
              >
                สำรวจความงามของแดนซากุระ พร้อมสถานที่ท่องเที่ยวสุดพิเศษ
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

              <div className="p-4 text-center">
                <img
                  src={selectedPlace.image}
                  alt={selectedPlace.title}
                  className="img-fluid mb-3 rounded"
                  style={{ maxHeight: '250px', objectFit: 'cover' }}
                />
                <h3 className="fw-bold mb-2">{selectedPlace.title}</h3>
                <p className="text-start">{selectedPlace.details.highlights}</p>
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
