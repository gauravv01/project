import React from 'react'
import Layout from '../../../layout';

const Setting=()=>{
    return <Layout>
  <div className='max-w-[600px]'>
  <h2 className="text-2xl font-bold mb-4">Security</h2>
    <form className="space-y-4">
      <div>
        <label className="block mb-1">Password Change</label>
        <select className="w-full p-2 border rounded">
          <option>Email Notification</option>
        </select>
      </div>
      <button className="px-4 py-2 bg-red-500 text-white rounded">Delete Account</button>
    </form>
  </div>
        </Layout>
}

export default Setting