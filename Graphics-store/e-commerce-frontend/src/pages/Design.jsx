import React, { useEffect, useState } from 'react';
import axios from 'axios';
import copilotLogo from '../assets/Copilot_20250626_210622.png';

function Design() {
  const [products, setProducts] = useState([]);

  // ✅ Fetch products from backend
  const getAllProducts = () => {
    axios.get('http://localhost:3000/api/GetAllProducts')
      .then(res => {
        setProducts(res?.data?.products || []);
      })
      .catch(err => {
        console.error('Error fetching products:', err);
      });
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <div className="container py-5">
      <div className="text-center mb-4">
        <img 
          src={copilotLogo} 
          alt="Copilot Logo" 
          style={{ height: '80px', borderRadius: '1.5rem', boxShadow: '0 4px 24px 0 rgba(191,161,74,0.10)' }} 
        />
      </div>
      
      <h2 className="text-center fw-bold mb-5 luxury-title" style={{ letterSpacing: '1px' }}>
        Our Products
      </h2>

      <div className="row g-4">
        {products.map((item, idx) => (
          <div className="col-12 col-md-6 col-lg-4" key={idx}>
            <div className="card luxury-card h-100 border-0 shadow-sm">
              {/* ✅ Image path should match your backend (uploads folder) */}
              <img 
                src={`http://localhost:3000/uploads/${item.image}`} 
                className="card-img-top luxury-img" 
                alt={item.name} 
              />
              <div className="card-body">
                <h5 className="card-title fw-semibold mb-2">{item.name}</h5>
                <p className="card-text text-secondary small luxury-desc">{item.description}</p>
                <p className="fw-bold text-primary">₹{item.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .luxury-title {
          letter-spacing: 1px;
          color: #bfa14a !important;
        }
        .luxury-card {
          border-radius: 1.25rem;
          overflow: hidden;
          background: #fffaf0;
          transition: box-shadow 0.2s, transform 0.2s;
        }
        .luxury-card:hover {
          box-shadow: 0 8px 32px 0 rgba(30, 30, 29, 0.18), 0 2px 8px 0 rgba(0,0,0,0.10);
          transform: translateY(-4px) scale(1.03);
        }
        .luxury-img {
          height: 180px;
          object-fit: cover;
          border-top-left-radius: 1.25rem;
          border-top-right-radius: 1.25rem;
        }
        .card-title {
          color: #222;
        }
        .luxury-desc {
          min-height: 40px;
        }
        @media (max-width: 768px) {
          .luxury-img {
            height: 120px;
          }
        }
      `}</style>
    </div>
  );
}

export default Design;
