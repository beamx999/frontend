
export default function Carousel() {
  return (
<div id="carouselExample" className="carousel slide">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="\images\slider\itcmtc.jpg" className="d-block w-100" alt="1" width={1920} height={800}/>
    </div>
    <div className="carousel-item">
      <img src="\images\slider\itcmtc 1.jpg" className="d-block w-100" alt="2" width={1920} height={800}/>
    </div>
    <div className="carousel-item">
      <img src="\images\slider\itcmtc 2.jpg" className="d-block w-100" alt="3" width={1920} height={800}/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>
  )
}
