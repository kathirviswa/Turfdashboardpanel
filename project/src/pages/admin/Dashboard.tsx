import React from 'react';
import { Users, DollarSign, Calendar, TrendingUp } from 'lucide-react';
import DashboardLayout from '../../components/layout/DashboardLayout';
import StatsCard from '../../components/dashboard/StatsCard';
import LineChart from '../../components/charts/LineChart';
import BarChart from '../../components/charts/BarChart';

export default function AdminDashboard() {
  const stats = [
    {
      title: 'Total Users',
      value: '1,234',
      icon: Users,
      trend: { value: 12, isPositive: true },
    },
    {
      title: 'Total Revenue',
      value: '₹45,678',
      icon: DollarSign,
      trend: { value: 8.2, isPositive: true },
    },
    {
      title: 'Active Bookings',
      value: '89',
      icon: Calendar,
      trend: { value: 3.1, isPositive: true },
    },
    {
      title: 'Growth Rate',
      value: '23%',
      icon: TrendingUp,
      trend: { value: 2.4, isPositive: false },
    },
  ];

  const revenueData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    data: [30000, 35000, 32000, 40000, 45000, 48000],
  };

  const bookingsData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    data: [25, 32, 28, 35, 42, 38, 45],
  };

  return (
    <DashboardLayout userRole="admin">
      <div className="max-w-7xl mx-auto">
        <h1 
          className="text-2xl font-semibold text-gray-900"
          data-aos="fade-right"
        >
          Admin Dashboard
        </h1>
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <StatsCard key={stat.title} {...stat} delay={index * 100} />
          ))}
        </div>
        
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div 
            className="bg-white rounded-lg shadow p-6"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <h2 className="text-lg font-medium text-gray-900 mb-4">Revenue Overview</h2>
            <LineChart
              data={revenueData.data}
              labels={revenueData.labels}
              label="Revenue"
              color="#007acc"
              fillColor="rgba(0, 122, 204, 0.1)"
            />
          </div>
          
          <div 
            className="bg-white rounded-lg shadow p-6"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <h2 className="text-lg font-medium text-gray-900 mb-4">Weekly Bookings</h2>
            <BarChart
              data={bookingsData.data}
              labels={bookingsData.labels}
              label="Bookings"
              color="#2d8a2d"
            />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}