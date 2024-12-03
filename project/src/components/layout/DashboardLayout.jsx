import React from 'react';
import PropTypes from 'prop-types';
import { Menu, User, LogOut } from 'lucide-react';
import Sidebar from './Sidebar';

function DashboardLayout({ children, userRole }) {
  const [sidebarOpen, setSidebarOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-primary-50">
      <nav className="bg-gradient-to-r from-primary-600 to-primary-700 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="px-4 text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white md:hidden"
              >
                <Menu className="h-6 w-6" />
              </button>
              <div className="flex-shrink-0 flex items-center">
                <h1 className="text-xl font-bold text-white">TurfHub</h1>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0">
                <div className="relative">
                  <button className="p-1 rounded-full text-white hover:bg-primary-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white">
                    <User className="h-6 w-6" />
                  </button>
                </div>
              </div>
              <div>
                <button className="p-1 rounded-full text-white hover:bg-primary-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white">
                  <LogOut className="h-6 w-6" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className="flex">
        <Sidebar isOpen={sidebarOpen} userRole={userRole} />
        <main className="flex-1 p-4 md:p-8">{children}</main>
      </div>
    </div>
  );
}

DashboardLayout.propTypes = {
  children: PropTypes.node.isRequired,
  userRole: PropTypes.oneOf(['admin', 'seller', 'customer']).isRequired,
};

export default DashboardLayout;