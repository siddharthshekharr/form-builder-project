// src/components/Dashboard.js
import React from 'react';
import { toast } from 'react-toastify';

const Dashboard = () => {
  React.useEffect(() => {
    toast.info('Welcome to your dashboard!');
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome to your dashboard. More features coming soon!</p>
    </div>
  );
};

export default Dashboard;