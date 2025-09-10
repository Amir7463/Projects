



import React, { use, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AdminSidebar({ sidebarOpen }) {
  const [productDropdown, setProductDropdown] = useState(false);
const navigate=useNavigate();
  return (
    <aside
      style={{
        width: sidebarOpen ? '240px' : '0',
        height: '100vh',
        background: sidebarOpen ? 'linear-gradient(135deg, #f8fafc 0%, #e3eafc 100%)' : 'transparent',
        boxShadow: sidebarOpen ? '8px 0 24px rgba(44,62,80,0.08)' : 'none',
        display: 'flex',
        flexDirection: 'column',
        padding: sidebarOpen ? '2rem 1.5rem' : '0',
        // overflow: 'hidden',
        transition: 'width 0.4s cubic-bezier(.4,0,.2,1), padding 0.4s cubic-bezier(.4,0,.2,1), background 0.4s',
        position: 'relative',
        // borderTopRightRadius: sidebarOpen ? '24px' : '0',
        // borderBottomRightRadius: sidebarOpen ? '24px' : '0',
        backdropFilter: sidebarOpen ? 'blur(6px)' : 'none',
        borderRight: sidebarOpen ? '1px solid #e3eafc' : 'none',
      }}
    >
      <div style={{
        opacity: sidebarOpen ? 1 : 0,
        transition: 'opacity 0.3s',
        pointerEvents: sidebarOpen ? 'auto' : 'none',
        height: '100%',
        // overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
      }}>
        <h2 style={{
          color: '#2563eb',
          marginBottom: '2.2rem',
          textAlign: 'center',
          fontWeight: '700',
          fontSize: '1.6rem',
          letterSpacing: '1px',
        }}>Admin Panel</h2>
        <nav>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            <li style={{ marginBottom: '1.7rem' }}>
              <a
                style={{
                  color: '#2563eb',
                  textDecoration: 'none',
                  fontWeight: '600',
                  display: 'flex',
                  alignItems: 'center',
                  fontSize: '1.08rem',
                  padding: '0.7rem 1rem',
                  borderRadius: '8px',
                  background: 'rgba(255,255,255,0.7)',
                  boxShadow: '0 2px 8px rgba(44,62,80,0.06)',
                  transition: 'background 0.2s',
                  cursor: 'pointer',
                }}
                onClick={() => navigate('/admin/dashboard')}
              >
                <span style={{ marginRight: '10px', fontSize: '1.2rem' }}>🏠</span> Dashboard
              </a>
            </li>
            <li style={{ marginBottom: '1.7rem', position: 'relative' }}>
              <div
                style={{
                  color: '#2563eb',
                  fontWeight: '600',
                  display: 'flex',
                  alignItems: 'center',
                  fontSize: '1.08rem',
                  padding: '0.7rem 1rem',
                  borderRadius: '8px',
                  background: 'rgba(255,255,255,0.7)',
                  boxShadow: '0 2px 8px rgba(44,62,80,0.06)',
                  cursor: 'pointer',
                  userSelect: 'none',
                }}
                onClick={() => setProductDropdown(prev => !prev)}
              >
                <span style={{ marginRight: '10px', fontSize: '1.2rem' }}>📦</span> Products
                <span style={{ marginLeft: 'auto', fontSize: '1rem', transition: 'transform 0.2s', transform: productDropdown ? 'rotate(90deg)' : 'rotate(0deg)' }}>▶</span>
              </div>
              {productDropdown && (
                <ul style={{
                  listStyle: 'none',
                  padding: '0.5rem 0 0 2.2rem',
                  margin: 0,
                  background: 'rgba(255,255,255,0.9)',
                  borderRadius: '8px',
                  boxShadow: '0 2px 8px rgba(44,62,80,0.04)',
                  position: 'absolute',
                  left: 0,
                  top: '100%',
                  width: '90%',
                  zIndex: 10,
                }}>
                  <li style={{ marginBottom: '0.7rem' }}>
                    <a  style={{
                      color: '#2563eb',
                      textDecoration: 'none',
                      fontWeight: '500',
                      fontSize: '1rem',
                      padding: '0.5rem 0.5rem',
                      borderRadius: '6px',
                      display: 'block',
                      background: 'rgba(255,255,255,0.7)',
                      boxShadow: '0 1px 4px rgba(44,62,80,0.04)',
                      transition: 'background 0.2s',
                      cursor: 'pointer',
                  }}  onClick={()=>navigate("/admin/product")} >Add Product</a>
                  </li>
                  <li>
                    <a style={{
                      color: '#2563eb',
                      textDecoration: 'none',
                      fontWeight: '500',
                      fontSize: '1rem',
                      padding: '0.5rem 0.5rem',
                      borderRadius: '6px',
                      display: 'block',
                      background: 'rgba(255,255,255,0.7)',
                      boxShadow: '0 1px 4px rgba(44,62,80,0.04)',
                      transition: 'background 0.2s',
                      cursor: 'pointer',
                    }} onClick={()=>navigate("/admin/list-product")}>List Product</a>
                  </li>
                </ul>
              )}
            </li>
            {!productDropdown && (
              <>
                <li style={{ marginBottom: '1.7rem' }}>
                  <a href="/admin/users" style={{
                    color: '#2563eb',
                    textDecoration: 'none',
                    fontWeight: '600',
                    display: 'flex',
                    alignItems: 'center',
                    fontSize: '1.08rem',
                    padding: '0.7rem 1rem',
                    borderRadius: '8px',
                    background: 'rgba(255,255,255,0.7)',
                    boxShadow: '0 2px 8px rgba(44,62,80,0.06)',
                    transition: 'background 0.2s',
                  }}>
                    <span style={{ marginRight: '10px', fontSize: '1.2rem' }}>👤</span> Users
                  </a>
                </li>
                <li>
                  <a href="/admin/settings" style={{
                    color: '#2563eb',
                    textDecoration: 'none',
                    fontWeight: '600',
                    display: 'flex',
                    alignItems: 'center',
                    fontSize: '1.08rem',
                    padding: '0.7rem 1rem',
                    borderRadius: '8px',
                    background: 'rgba(255,255,255,0.7)',
                    boxShadow: '0 2px 8px rgba(44,62,80,0.06)',
                    transition: 'background 0.2s',
                  }}>
                    <span style={{ marginRight: '10px', fontSize: '1.2rem' }}>⚙️</span> Settings
                  </a>
                </li>
              </>
            )}
          </ul>
          {productDropdown && (
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, marginTop: '2.2rem' }}>
              <li style={{ marginBottom: '1.7rem' }}>
                <a href="/admin/users" style={{
                  color: '#2563eb',
                  textDecoration: 'none',
                  fontWeight: '600',
                  display: 'flex',
                  alignItems: 'center',
                  fontSize: '1.08rem',
                  padding: '0.7rem 1rem',
                  borderRadius: '8px',
                  background: 'rgba(255,255,255,0.7)',
                  boxShadow: '0 2px 8px rgba(44,62,80,0.06)',
                  transition: 'background 0.2s',
                }}>
                  <span style={{ marginRight: '10px', fontSize: '1.2rem' }}>👤</span> Users
                </a>
              </li>
              <li>
                <a href="/admin/settings" style={{
                  color: '#2563eb',
                  textDecoration: 'none',
                  fontWeight: '600',
                  display: 'flex',
                  alignItems: 'center',
                  fontSize: '1.08rem',
                  padding: '0.7rem 1rem',
                  borderRadius: '8px',
                  background: 'rgba(255,255,255,0.7)',
                  boxShadow: '0 2px 8px rgba(44,62,80,0.06)',
                  transition: 'background 0.2s',
                }}>
                  <span style={{ marginRight: '10px', fontSize: '1.2rem' }}>⚙️</span> Settings
                </a>
              </li>
            </ul>
          )}
        </nav>
      </div>
    </aside>
  );
}

export default AdminSidebar;