import React from 'react';
import PropTypes from 'prop-types';
import { Home, Calendar, Users, Settings, DollarSign, PieChart, List } from 'lucide-react';

function Sidebar({ isOpen, userRole }) {
  const menuItems = {
    admin: [
      { icon: Home, label: 'Dashboard', path: '/admin' },
      { icon: Users, label: 'Users', path: '/admin/users' },
      { icon: List, label: 'Turfs', path: '/admin/turfs' },
      { icon: DollarSign, label: 'Revenue', path: '/admin/revenue' },
      { icon: Settings, label: 'Settings', path: '/admin/settings' },
    ],
    seller: [
      { icon: Home, label: 'Dashboard', path: '/seller' },
      { icon: List, label: 'My Turfs', path: '/seller/turfs' },
      { icon: Calendar, label: 'Bookings', path: '/seller/bookings' },
      { icon: PieChart, label: 'Analytics', path: '/seller/analytics' },
      { icon: Settings, label: 'Settings', path: '/seller/settings' },
    ],
    customer: [
      { icon: Home, label: 'Dashboard', path: '/customer' },
      { icon: List, label: 'Browse Turfs', path: '/customer/turfs' },
      { icon: Calendar, label: 'My Bookings', path: '/customer/bookings' },
      { icon: Settings, label: 'Settings', path: '/customer/settings' },
    ],
  };

  const items = menuItems[userRole];

  return (
    <div
      className={`${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } fixed inset-y-0 left-0 transform md:relative md:translate-x-0 transition duration-200 ease-in-out z-30 w-64 bg-gradient-to-b from-primary-800 to-primary-900 md:block`}
    >
      <div className="h-full overflow-y-auto">
        <nav className="px-2 py-4">
          {items.map((item) => (
            <a
              key={item.path}
              href={item.path}
              className="flex items-center px-4 py-3 text-gray-100 hover:bg-primary-700 rounded-lg group transition-colors"
            >
              <item.icon className="h-5 w-5 mr-3 text-primary-200 group-hover:text-white" />
              <span className="text-sm font-medium group-hover:text-white">
                {item.label}
              </span>
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
}

Sidebar.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  userRole: PropTypes.oneOf(['admin', 'seller', 'customer']).isRequired,
};

export default Sidebar;