import React, { useState } from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import customerData from '../data/data.json';

const CustomerTable = ({ page, setPage, rowsPerPage }) => {
  const [selectedCustomers, setSelectedCustomers] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [customers, setCustomers] = useState(customerData.customers);
  const [editFormData, setEditFormData] = useState({
    customer: '',
    company: '',
    orderValue: '',
    orderDate: '',
    status: ''
  });

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
    setEditingId(null);
  };

  const handleSelectCustomer = (customerId) => {
    setSelectedCustomers(prev => 
      prev.includes(customerId)
        ? prev.filter(id => id !== customerId)
        : [...prev, customerId]
    );
  };

  const handleEdit = (customer, index) => {
    setEditingId(index);
    setEditFormData({
      customer: customer.customer,
      company: customer.company,
      orderValue: customer.orderValue,
      orderDate: customer.orderDate,
      status: customer.status
    });
  };

  const handleEditFormChange = (e) => {
    const { name, value } = e.target;
    setEditFormData({
      ...editFormData,
      [name]: value
    });
  };

  const handleSave = (index) => {
    const updatedCustomers = [...customers];
    updatedCustomers[index] = {
      ...updatedCustomers[index],
      customer: editFormData.customer,
      company: editFormData.company,
      orderValue: editFormData.orderValue,
      orderDate: editFormData.orderDate,
      status: editFormData.status
    };

    setCustomers(updatedCustomers);
    setEditingId(null);
    
    // In a real app, you would save to an API here
    console.log('Updated customers:', updatedCustomers);
  };

  const paginatedCustomers = customers.slice(
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
              <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                <input type="checkbox" />
              </th>
              <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">CUSTOMER NAME</th>
              <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">COMPANY</th>
              <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ORDER VALUE</th>
              <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ORDER DATE</th>
              <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">STATUS</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {paginatedCustomers.map((customer, index) => {
              const absoluteIndex = (page - 1) * rowsPerPage + index;
              return (
                <tr key={absoluteIndex} className="hover:bg-gray-50 transition-colors">
                  <td className="py-4 px-6 whitespace-nowrap text-sm text-gray-500">
                    <input
                      type="checkbox"
                      checked={selectedCustomers.includes(absoluteIndex)}
                      onChange={() => handleSelectCustomer(absoluteIndex)}
                    />
                  </td>
                  <td className="py-4 px-6 whitespace-nowrap text-sm font-medium text-gray-900">
                    {editingId === absoluteIndex ? (
                      <input 
                        type="text" 
                        name="customer"
                        value={editFormData.customer}
                        onChange={handleEditFormChange}
                        className="border rounded px-2 py-1"
                      />
                    ) : (
                      customer.customer
                    )}
                  </td>
                  <td className="py-4 px-6 whitespace-nowrap text-sm text-gray-500">
                    {editingId === absoluteIndex ? (
                      <input 
                        type="text" 
                        name="company"
                        value={editFormData.company}
                        onChange={handleEditFormChange}
                        className="border rounded px-2 py-1"
                      />
                    ) : (
                      customer.company
                    )}
                  </td>
                  <td className="py-4 px-6 whitespace-nowrap text-sm text-gray-500 font-medium">
                    {editingId === absoluteIndex ? (
                      <input 
                        type="text" 
                        name="orderValue"
                        value={editFormData.orderValue}
                        onChange={handleEditFormChange}
                        className="border rounded px-2 py-1"
                      />
                    ) : (
                      customer.orderValue
                    )}
                  </td>
                  <td className="py-4 px-6 whitespace-nowrap text-sm text-gray-500">
                    {editingId === absoluteIndex ? (
                      <input 
                        type="date" 
                        name="orderDate"
                        value={editFormData.orderDate}
                        onChange={handleEditFormChange}
                        className="border rounded px-2 py-1"
                      />
                    ) : (
                      customer.orderDate
                    )}
                  </td>
                  <td className="py-4 px-6 whitespace-nowrap">
                    {editingId === absoluteIndex ? (
                      <select 
                        name="status"
                        value={editFormData.status}
                        onChange={handleEditFormChange}
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
                    {editingId === absoluteIndex ? (
                      <button 
                        onClick={() => handleSave(absoluteIndex)}
                        className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
                      >
                        Save
                      </button>
                    ) : (
                      <button 
                        onClick={() => handleEdit(customer, absoluteIndex)}
                        className="px-3 py-1 hover:cursor-pointer"
                      >
                        <img src="./image/create.png" alt="Edit" />
                      </button>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        
        <div className="flex items-center justify-between mt-4">
          <div className="text-sm text-gray-500">
            Showing <span className="font-medium">{(page - 1) * rowsPerPage + 1}</span> to{' '}
            <span className="font-medium">{Math.min(page * rowsPerPage, customers.length)}</span> of{' '}
            <span className="font-medium">{customers.length}</span> results
          </div>

          <Stack spacing={2}>
            <Pagination 
              count={Math.ceil(customers.length / rowsPerPage)}
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