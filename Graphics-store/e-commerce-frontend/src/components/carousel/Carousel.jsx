import React from 'react';
import flexPrinting from "../../assets/flex-printing-207.jpg"; // Fixed import path
import uvprintideaslargeformatgraphics from "../../assets/uvprintideaslargeformatgraphics.jpg"; // Fixed variable name
import ecoSolventPrinters from "../../assets/eco-solvent-printers-1000x695.jpg"; // Fixed import path
const slides = [
  {
    img: flexPrinting,
    title: 'Premium Flex Printing',
    desc: 'https://tiimg.tistatic.com/fp/1/006/061/flex-printing-207.jpg'
  },
  {
    img: ecoSolventPrinters,
    title: 'Eco Solvent Solutions',
    desc: 'Eco-friendly, durable, and stunning results every time.'
  },
  {
    img: uvprintideaslargeformatgraphics,
    title: 'Luxury UV Printing',
    desc: 'Unmatched precision and elegance for your premium projects.'
  }
];

function Carousel() {
  return (
    <div id="luxuryCarousel" className="carousel slide carousel-fade shadow-lg rounded-4 overflow-hidden bg-white position-relative" data-bs-ride="carousel">
      <div className="carousel-indicators">
        {slides.map((_, idx) => (
          <button
            key={idx}
            type="button"
            data-bs-target="#luxuryCarousel"
            data-bs-slide-to={idx}
            className={idx === 0 ? 'active' : ''}
            aria-current={idx === 0 ? 'true' : undefined}
            aria-label={`Slide ${idx + 1}`}
          />
        ))}
      </div>
      <div className="carousel-inner">
        {slides.map((slide, idx) => (
          <div className={`carousel-item${idx === 0 ? ' active' : ''}`} key={idx}>
            <div className="luxury-gradient-bg position-absolute top-0 start-0 w-100 h-100"></div>
            <img src={slide.img} className="d-block w-100 luxury-carousel-img position-relative" alt={slide.title} />
            <div className="carousel-caption d-flex flex-column align-items-center justify-content-center luxury-caption p-4 rounded-4">
              <h2 className="display-5 fw-bold mb-2 luxury-title text-gradient">{slide.title}</h2>
              <p className="lead mb-0 luxury-desc">{slide.desc}</p>
            </div>
          </div>
        ))}
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#luxuryCarousel" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#luxuryCarousel" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
      <style>{`
        .luxury-carousel-img {
          display: block;
          height: 420px;
          width: 100vw;
          max-width: 100vw;
          min-width: 0;
          object-fit: contain;
          background: #f8fafc;
          border-radius: 0;
          margin-left: calc((100% - 100vw) / 2);
          box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.10);
          z-index: 2;
        }
        .luxury-gradient-bg {
          z-index: 1;
          pointer-events: none;
          height: 100%;
          border-radius: 1.5rem;
          background: linear-gradient(135deg, #fffbe7 0%, #ffe9ec 50%, #e0e7ff 100%);
          opacity: 0.85;
        }
        .luxury-caption {
          background: rgba(255,255,255,0.85);
          box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.10);
          border: 1px solid rgba(255, 215, 0, 0.15);
          color: #222;
          z-index: 3;
        }
        .luxury-title {
          color: #eab308;
          text-shadow: 0 2px 8px rgba(255,255,255,0.2);
        }
        .text-gradient {
          background: linear-gradient(90deg, #eab308 0%, #f472b6 50%, #818cf8 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .luxury-desc {
          color: #6b7280;
          text-shadow: 0 1px 4px rgba(255,255,255,0.2);
        }
        @media (max-width: 768px) {
          .luxury-carousel-img {
            height: 220px;
            width: 100vw;
            max-width: 100vw;
            min-width: 0;
            object-fit: contain;
            border-radius: 0;
            margin-left: calc((100% - 100vw) / 2);
          }
          .luxury-caption {
            padding: 1rem;
          }
        }
      `}</style>
    </div>
  )
}

export default Carousel