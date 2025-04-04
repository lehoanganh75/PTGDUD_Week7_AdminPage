import React, { useState } from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import customerData from '../data/data.json';

const CustomerTable = ({ page, setPage, rowsPerPage }) => {
  const [selectedCustomers, setSelectedCustomers] = useState([]);
  const [editingId, setEditingId] = useState(null);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
    setEditingId(null); // Reset editing when changing pages
  };

  const handleSelectCustomer = (customerId) => {
    setSelectedCustomers(prev => 
      prev.includes(customerId)
        ? prev.filter(id => id !== customerId)
        : [...prev, customerId]
    );
  };

  const handleEdit = (customerId) => {
    setEditingId(editingId === customerId ? null : customerId);
  };

  const handleSave = (customerId) => {
    // Here you would typically save to an API
    console.log(`Saving changes for customer ${customerId}`);
    setEditingId(null);
  };

  const paginatedCustomers = customerData.customers.slice(
    (page - 1) * rowsPerPage,
    page * rowsPerPage
  );

  return (
    <div className="mt-8">
      <div className="flex p-4">
        <img src="./image/Folder.png" className="mr-2" alt="Report Icon" />
        <h2 className="font-bold text-lg">Detailed report</h2>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-gray-50">
              <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"><input type="checkbox" name="" id="" /></th>
              <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">CUSTOMER NAME</th>
              <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">COMPANY</th>
              <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ORDER VALUE</th>
              <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ORDER DATE</th>
              <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">STATUS</th>
              <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {paginatedCustomers.map((customer) => (
              <tr key={customer.id} className="hover:bg-gray-50 transition-colors">
                <td className="py-4 px-6 whitespace-nowrap text-sm text-gray-500">
                  <input
                    type="checkbox"
                    checked={selectedCustomers.includes(customer.id)}
                    onChange={() => handleSelectCustomer(customer.id)}
                  />
                </td>
                <td className="py-4 px-6 whitespace-nowrap text-sm font-medium text-gray-900">
                  {editingId === customer.id ? (
                    <input 
                      type="text" 
                      defaultValue={customer.customer}
                      className="border rounded px-2 py-1"
                    />
                  ) : (
                    customer.customer
                  )}
                </td>
                <td className="py-4 px-6 whitespace-nowrap text-sm text-gray-500">
                  {editingId === customer.id ? (
                    <input 
                      type="text" 
                      defaultValue={customer.company}
                      className="border rounded px-2 py-1"
                    />
                  ) : (
                    customer.company
                  )}
                </td>
                <td className="py-4 px-6 whitespace-nowrap text-sm text-gray-500 font-medium">
                  {editingId === customer.id ? (
                    <input 
                      type="text" 
                      defaultValue={customer.orderValue}
                      className="border rounded px-2 py-1"
                    />
                  ) : (
                    customer.orderValue
                  )}
                </td>
                <td className="py-4 px-6 whitespace-nowrap text-sm text-gray-500">
                  {editingId === customer.id ? (
                    <input 
                      type="date" 
                      defaultValue={customer.orderDate}
                      className="border rounded px-2 py-1"
                    />
                  ) : (
                    customer.orderDate
                  )}
                </td>
                <td className="py-4 px-6 whitespace-nowrap">
                  {editingId === customer.id ? (
                    <select 
                      defaultValue={customer.status}
                      className="border rounded px-2 py-1"
                    >
                      <option value="New">New</option>
                      <option value="In-progress">In-progress</option>
                      <option value="Completed">Completed</option>
                    </select>
                  ) : (
                    <span className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      customer.status === 'New' ? 'bg-blue-100 text-blue-800' :
                      customer.status === 'In-progress' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-green-100 text-green-800'
                    }`}>
                      {customer.status}
                    </span>
                  )}
                </td>
                <td className="py-4 px-6 whitespace-nowrap text-sm text-gray-500">
                  {editingId === customer.id ? (
                    <button 
                      onClick={() => handleSave(customer.id)}
                      className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
                    >
                      Save
                    </button>
                  ) : (
                    <button 
                      onClick={() => handleEdit(customer.id)}
                      className=" px-3 py-1 hover:cursor-pointer"
                    >
                     <img src="./image/create.png" alt="" />
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        
        <div className="flex items-center justify-between mt-4">
          <div className="text-sm text-gray-500">
            Showing <span className="font-medium">{(page - 1) * rowsPerPage + 1}</span> to{' '}
            <span className="font-medium">{Math.min(page * rowsPerPage, customerData.customers.length)}</span> of{' '}
            <span className="font-medium">{customerData.customers.length}</span> results
          </div>

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
  );
};

export default CustomerTable;