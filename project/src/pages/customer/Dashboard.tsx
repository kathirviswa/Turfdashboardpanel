import React from 'react';
import { Calendar, Clock, Wallet, Star } from 'lucide-react';
import DashboardLayout from '../../components/layout/DashboardLayout';
import StatsCard from '../../components/dashboard/StatsCard';
import LineChart from '../../components/charts/LineChart';
import BarChart from '../../components/charts/BarChart';

export default function CustomerDashboard() {
  const stats = [
    {
      title: 'Total Bookings',
      value: '12',
      icon: Calendar,
    },
    {
      title: 'Hours Played',
      value: '36',
      icon: Clock,
    },
    {
      title: 'Amount Spent',
      value: '₹4,500',
      icon: Wallet,
    },
    {
      title: 'Favorite Turfs',
      value: '3',
      icon: Star,
    },
  ];

  const playingTimeData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    data: [8, 12, 10, 14, 16, 12],
  };

  const spendingData = {
    labels: ['Football', 'Cricket', 'Basketball', 'Tennis'],
    data: [2000, 1500, 600, 400],
  };

  return (
    <DashboardLayout userRole="customer">
      <div className="max-w-7xl mx-auto">
        <h1 
          className="text-2xl font-semibold text-gray-900"
          data-aos="fade-right"
        >
          Customer Dashboard
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
            <h2 className="text-lg font-medium text-gray-900 mb-4">Playing Time History</h2>
            <LineChart
              data={playingTimeData.data}
              labels={playingTimeData.labels}
              label="Hours Played"
              color="#e63946"
              fillColor="rgba(230, 57, 70, 0.1)"
            />
          </div>

          <div 
            className="bg-white rounded-lg shadow p-6"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <h2 className="text-lg font-medium text-gray-900 mb-4">Spending by Sport</h2>
            <BarChart
              data={spendingData.data}
              labels={spendingData.labels}
              label="Amount Spent (₹)"
              color="#2d8a2d"
            />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}