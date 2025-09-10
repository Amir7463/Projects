

import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import AdminNavbar from './AdminNavbar';
import AdminSidebar from './AdminSidebar';

function AdminDashboard({children}) {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const handleMenuClick = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const location = useLocation();
  const showWelcome = location.pathname === '/admin' || location.pathname === '/admin/dashboard';

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', background: '#f5f6fa' }}>
      <AdminNavbar onMenuClick={handleMenuClick} />
      <div style={{ display: 'flex', flex: 1 }}>
        <AdminSidebar sidebarOpen={sidebarOpen} />
        <main style={{ flex: 1, padding: '2rem' }}>
          {showWelcome && (
            <>
              <h1 style={{ color: '#333', marginBottom: '2rem' }}>Welcome to Admin Dashboard</h1>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis distinctio natus sunt ipsum similique accusamus quis, id officia quia nemo! Eius numquam exercitationem quisquam nesciunt ipsa recusandae ab a odit.</p>
            </>
          )}
          {/* Add dashboard widgets or content here */}
          {children}
        </main>
      </div>
    </div>
  );
}

export default AdminDashboard;
