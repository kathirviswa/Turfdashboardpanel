import React from 'react';
import AdminDashboard from './pages/admin/Dashboard';
import SellerDashboard from './pages/seller/Dashboard';
import CustomerDashboard from './pages/customer/Dashboard';

function App() {
  // For demo purposes, let's show all three dashboards
  return (
    <div className="space-y-8">
      <AdminDashboard />
      <SellerDashboard />
      <CustomerDashboard />
    </div>
  );
}

export default App;