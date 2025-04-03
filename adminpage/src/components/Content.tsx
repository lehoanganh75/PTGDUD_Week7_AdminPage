import React, { useState, useEffect } from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import customerData from '../data/data.json';

const Content = ({ className }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const rowsPerPage = 4;

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

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const paginatedCustomers = customerData.customers.slice(
    (page - 1) * rowsPerPage,
    page * rowsPerPage
  );

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
          <table className="min-w-full bg-white rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-gray-50">
                <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">CUSTOMER NAME</th>
                <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">COMPANY</th>
                <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ORDER VALUE</th>
                <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ORDER DATE</th>
                <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">STATUS</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {paginatedCustomers.map((customer, index) => (
                <tr key={index} className="hover:bg-gray-50 transition-colors">
                  <td className="py-4 px-6 whitespace-nowrap text-sm font-medium text-gray-900">{customer.customer}</td>
                  <td className="py-4 px-6 whitespace-nowrap text-sm text-gray-500">{customer.company}</td>
                  <td className="py-4 px-6 whitespace-nowrap text-sm text-gray-500 font-medium">{customer.orderValue}</td>
                  <td className="py-4 px-6 whitespace-nowrap text-sm text-gray-500">{customer.orderDate}</td>
                  <td className="py-4 px-6 whitespace-nowrap">
                    <span className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      customer.status === 'New' ? 'bg-blue-100 text-blue-800' :
                      customer.status === 'In-progress' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-green-100 text-green-800'
                    }`}>
                      {customer.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          
          <div className="flex items-center justify-between mt-4">
            <div className="text-sm text-gray-500">
              Showing <span className="font-medium">{(page-1)*rowsPerPage+1}</span> to{' '}
              <span className="font-medium">{Math.min(page*rowsPerPage, customerData.customers.length)}</span> of{' '}
              <span className="font-medium">{customerData.customers.length}</span> results
            </div>
            
            <div className="flex items-center space-x-2">
              <Stack spacing={2}>
                <Pagination 
                  count={Math.ceil(customerData.customers.length / rowsPerPage)}
                  page={page}
                  onChange={handleChangePage}
                  color="primary"
                  shape="rounded"
                />
              </Stack>
            </div>
          </div> 
      
          </div>
          </div>
    </div>
  );
};

export default Content;