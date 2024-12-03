import React from 'react';
import { DollarSign, Calendar, Star, TrendingUp } from 'lucide-react';
import DashboardLayout from '../../components/layout/DashboardLayout';
import StatsCard from '../../components/dashboard/StatsCard';
import LineChart from '../../components/charts/LineChart';
import BarChart from '../../components/charts/BarChart';

export default function SellerDashboard() {
  const stats = [
    {
      title: 'Total Earnings',
      value: '₹23,456',
      icon: DollarSign,
      trend: { value: 15, isPositive: true },
    },
    {
      title: 'Active Bookings',
      value: '45',
      icon: Calendar,
      trend: { value: 5.2, isPositive: true },
    },
    {
      title: 'Average Rating',
      value: '4.8',
      icon: Star,
      trend: { value: 0.3, isPositive: true },
    },
    {
      title: 'Booking Rate',
      value: '78%',
      icon: TrendingUp,
      trend: { value: 1.8, isPositive: false },
    },
  ];

  const earningsData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    data: [3500, 4200, 3800, 4500, 5200, 6100, 5800],
  };

  const bookingRateData = {
    labels: ['6am', '9am', '12pm', '3pm', '6pm', '9pm'],
    data: [65, 75, 60, 80, 85, 70],
  };

  return (
    <DashboardLayout userRole="seller">
      <div className="max-w-7xl mx-auto">
        <h1 
          className="text-2xl font-semibold text-gray-900"
          data-aos="fade-right"
        >
          Seller Dashboard
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
            <h2 className="text-lg font-medium text-gray-900 mb-4">Weekly Earnings</h2>
            <LineChart
              data={earningsData.data}
              labels={earningsData.labels}
              label="Earnings"
              color="#ff5c1f"
              fillColor="rgba(255, 92, 31, 0.1)"
            />
          </div>

          <div 
            className="bg-white rounded-lg shadow p-6"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <h2 className="text-lg font-medium text-gray-900 mb-4">Booking Rate by Time</h2>
            <BarChart
              data={bookingRateData.data}
              labels={bookingRateData.labels}
              label="Booking Rate (%)"
              color="#ff8c00"
            />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}