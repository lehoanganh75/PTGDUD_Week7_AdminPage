import React, { useState, useEffect } from 'react';
import TableDetail from "./TableDetail";

const Content = ({ className }) => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const rowsPerPage = 4;

  useEffect(() => {
    fetch('https://67de719f471aaaa742847203.mockapi.io/productData/dataOverview')
      .then((res) => res.json())
      .then((data) => setData(data))
  }, []);

  const formatTitle = (title) =>
    title.split('_').map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

  const formatValue = (value) =>
    value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  const getCardBackground = (title) =>
    title === 'turnover' ? '#FEF0F5FF' : '#F0F6FFFF';

  return (
    <div className={`p-4 bg-white shadow-md h-full overflow-auto ${className}`}>
      <div className="flex p-4">
        <img src="./image/Folder.png" className="mr-2" alt="Overview Icon" />
        <h2 className="font-bold text-lg">Overview</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4">
        {data.map((item) => (
          <div key={item.id} className="p-6 rounded-lg shadow-sm relative" style={{ backgroundColor: getCardBackground(item.title)}}>
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
                {item.unit === '$' ? '$' : ''}
                {formatValue(item.value)}
              </p>
            </div>
            <div className="flex items-center">
              <span className={`text-sm ${item.change?.percentage >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                {item.change?.percentage >= 0 ? '↑' : '↓'} {Math.abs(item.change?.percentage)}%
              </span>
              <span className="text-gray-400 text-xs ml-1">{item.change?.period}</span>
            </div>
          </div>
        ))}
      </div>

      <TableDetail page={page} setPage={setPage} rowsPerPage={rowsPerPage} />
    </div>
  );
};

export default Content;
