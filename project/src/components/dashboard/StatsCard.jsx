import React from 'react';
import PropTypes from 'prop-types';

function StatsCard({ title, value, icon: Icon, trend, delay = 0 }) {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay={delay}
      className="bg-white rounded-lg shadow-lg border-l-4 border-primary-500 hover:transform hover:scale-105 transition-all duration-300"
    >
      <div className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-600">{title}</p>
            <p className="text-2xl font-semibold mt-2 text-primary-700">{value}</p>
            {trend && (
              <div className="flex items-center mt-2">
                <span
                  className={`text-sm font-medium ${
                    trend.isPositive ? 'text-sport-grass' : 'text-red-500'
                  }`}
                >
                  {trend.isPositive ? '+' : '-'}{Math.abs(trend.value)}%
                </span>
                <span className="text-sm text-gray-500 ml-2">vs last month</span>
              </div>
            )}
          </div>
          <div className="p-3 bg-primary-50 rounded-full">
            <Icon className="h-6 w-6 text-primary-600" />
          </div>
        </div>
      </div>
    </div>
  );
}

StatsCard.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  icon: PropTypes.elementType.isRequired,
  trend: PropTypes.shape({
    value: PropTypes.number.isRequired,
    isPositive: PropTypes.bool.isRequired,
  }),
  delay: PropTypes.number,
};

export default StatsCard;