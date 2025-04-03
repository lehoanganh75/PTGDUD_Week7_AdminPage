import React, { useState, useEffect } from 'react';

const Content = ({ className }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://67de719f471aaaa742847203.mockapi.io/productData/dataOverview')
      .then((res) => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  const formatTitle = (title) => {
    return title.split('_').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
  };

  const formatValue = (value) => {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const getCardBackground = (title) => {
    return title === 'turnover' ? '#FEF0F5FF' : '#F0F6FFFF';
  };

  return (
    <div className={`p-4 bg-white shadow-md h-full overflow-auto ${className}`}>
      <div className='flex p-4'>
        <img src="./image/Folder.png" className='mr-2' alt="Overview Icon" />
        <h2 className='font-bold text-lg'>Overview</h2>
      </div>

      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      ) : error ? (
        <div className="text-red-500 p-4">{error}</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4">
          {data.map((item) => (
            <div 
              key={item.id} 
              className="p-6 rounded-lg shadow-sm relative"
              style={{ backgroundColor: getCardBackground(item.title) }}
            >
              {item.icon && (
                <div className="absolute top-4 right-4 p-1 rounded-full" style={{ backgroundColor: '#FEF0F5FF' }}>
                  <img src={item.icon} alt={`${item.title} icon`} className="w-6 h-6" />
                </div>
              )}
              
              <h3 className="text-gray-500 text-sm font-medium mb-1">
                {formatTitle(item.title)}
              </h3>
              <div className="flex items-baseline mb-2">
                <p className="text-4xl font-bold text-gray-800">
                  {item.unit && item.unit === '$' ? '$' : ''}
                  {formatValue(item.value)}
                </p>
              </div>
              <div className="flex items-center">
                <span className={`text-sm ${
                  item.change.percentage >= 0 ? 'text-green-500' : 'text-red-500'
                }`}>
                  {item.change.percentage >= 0 ? '↑' : '↓'} {Math.abs(item.change.percentage)}%
                </span>
                <span className="text-gray-400 text-xs ml-1">
                  {item.change.period}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
      <div className='mt-8'>
        <div className='flex p-4'>
          <img src="./image/Folder.png" className='mr-2' alt="Report Icon" />
          <h2 className='font-bold text-lg'>Detailed report</h2>
        </div>
        
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200">
            <thead>
              <tr className="bg-gray-100">
                <th className="py-3 px-4 border-b text-left">CUSTOMER NAME</th>
                <th className="py-3 px-4 border-b text-left">COMPANY</th>
                <th className="py-3 px-4 border-b text-left">ORDER VALUE</th>
                <th className="py-3 px-4 border-b text-left">ORDER DATE</th>
                <th className="py-3 px-4 border-b text-left">STATUS</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-gray-50">
                <td className="py-3 px-4 border-b">-</td>
                <td className="py-3 px-4 border-b">-</td>
                <td className="py-3 px-4 border-b">-</td>
                <td className="py-3 px-4 border-b">-</td>
                <td className="py-3 px-4 border-b">-</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="py-3 px-4 border-b">-</td>
                <td className="py-3 px-4 border-b">-</td>
                <td className="py-3 px-4 border-b">-</td>
                <td className="py-3 px-4 border-b">-</td>
                <td className="py-3 px-4 border-b">-</td>
              </tr>
            </tbody>
          </table>
          <div className="text-right mt-2 text-sm text-gray-500">
            63 results
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;