import React from 'react'
import Layout from '../../../layout';

const Setting=()=>{
    return <Layout>
  <div className='max-w-[600px] p-4 sm:p-6 lg:p-8'>
  <h2 className="text-2xl font-bold mb-4">Notification Settings</h2>
    <form className="space-y-4">
      <div>
        <label className="block mb-1">Tender Updates</label>
        <select className="w-full p-2 border rounded">
          <option>Email Updates</option>
        </select>
      </div>
      <div>
        <label className="block mb-1">Chat Updates</label>
        <select className="w-full p-2 border rounded">
          <option>Email Notifications</option>
        </select>
      </div>
    </form>
  </div>
        </Layout>
}

export default Setting