import React from 'react'
import Layout from '../../../layout';

const Setting=()=>{
    return <Layout>
  <div className='max-w-[600px] p-4 sm:p-6 lg:p-8'>
    <h2 className="text-2xl font-bold mb-4">Profile</h2>
    <form className="space-y-4">
      <div>
        <label className="block mb-1">Company Name</label>
        <input type="text" className="w-full p-2 border rounded" />
      </div>
      <div>
        <label className="block mb-1">Company Description</label>
        <textarea className="w-full p-2 border rounded" rows="4"></textarea>
      </div>
      <div>
        <label className="block mb-1">Company Size</label>
        <select className="w-full p-2 border rounded">
          <option>Small 1-20</option>
          <option>Medium 21-100</option>
          <option>Large 100+</option>
        </select>
      </div>
    </form>
  </div>
        </Layout>
}

export default Setting