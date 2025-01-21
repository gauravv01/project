import React from 'react'
import Layout from '../../../layout';

const Setting=()=>{
    return <Layout>
  <div className='max-w-[600px]p-4 sm:p-6 lg:p-8'>
  
    <h2 className="text-2xl font-bold mb-4">Account Settings</h2>
    <form className="space-y-4">
      <div>
        <label className="block mb-1">Email</label>
        <input type="email" className="w-full p-2 border rounded" />
      </div>
      <div>
        <label className="block mb-1">Phone Number</label>
        <input type="text" className="w-full p-2 border rounded" />
      </div>
    </form>
  
  </div>
        </Layout>
}

export default Setting