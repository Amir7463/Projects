import React from 'react';

function AdminNavbar({ onMenuClick }) {
  return (
    <nav style={{
      width: '100%',
      height: '70px',
      background: 'linear-gradient(90deg, #f8fafc 0%, #e3eafc 100%)',
      boxShadow: '0 4px 16px rgba(44,62,80,0.08)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 2.5rem',
      borderBottom: '1px solid #e3eafc',
      position: 'sticky',
      top: 0,
      zIndex: 100,
    }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <span
          style={{ fontSize: '2rem', color: '#2563eb', marginRight: '1.5rem', cursor: 'pointer', background: 'rgba(255,255,255,0.8)', borderRadius: '10px', padding: '0.5rem 0.8rem', boxShadow: '0 2px 8px rgba(44,62,80,0.06)' }}
          title="Menu"
          onClick={onMenuClick}
        >&#9776;</span>
        <span style={{ fontWeight: '700', fontSize: '1.5rem', color: '#2563eb', marginRight: '2.5rem', letterSpacing: '1px' }}>E-Commerce Admin</span>
        </div>
      <div style={{ display: 'flex', alignItems: 'center', background: 'rgba(255,255,255,0.8)', borderRadius: '12px', padding: '0.5rem 1rem', boxShadow: '0 2px 8px rgba(44,62,80,0.06)' }}>
        <span style={{ marginRight: '1rem', color: '#2563eb', fontWeight: '600', fontSize: '1.1rem' }}>Admin</span>
        <img src="https://ui-avatars.com/api/?name=Admin&background=2563eb&color=fff&size=40" alt="Admin" style={{ borderRadius: '50%', boxShadow: '0 2px 8px #e3eafc' }} />
      </div>
    </nav>



  );
}

export default AdminNavbar;