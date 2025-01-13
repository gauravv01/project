import React from 'react'
import Layout from '../../../layout';

const Setting=()=>{
    return <Layout>
  <div className='max-w-[600px]'>
  <h2 className="text-2xl font-bold mb-4">Billing and Payments</h2>
    <form className="space-y-4">
      <div>
        <label className="block mb-1">Subscription Plan</label>
        <select className="w-full p-2 border rounded">
          <option>Email Notifications</option>
        </select>
      </div>
      <div>
        <label className="block mb-1">Next Billing Date</label>
        <p>15th December 2025</p>
      </div>
    </form>
  </div>
        </Layout>
}

export default Setting