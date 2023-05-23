import React from 'react';
import Sidebar from '../sidebar/Sidebar';
import Dashboard from '../dashboard/Dashbaord';
import Graph from '../dashboard/Graph';
import Ytd from '../dashboard/Ytd';

const AdminLayout = () => {
  return (
    <div className='grid grid-cols-12'>
        <div className='col-span-3'>
            <Sidebar></Sidebar>
        </div>
        <div className=' relative  col-span-9'>
            <Dashboard></Dashboard>
            <div className='flex gap-3' >
              <Graph></Graph>
              <Ytd></Ytd>
            </div>
        </div>
    </div>
  );
}

export default AdminLayout;