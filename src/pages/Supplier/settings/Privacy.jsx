import React from 'react'
import Layout from '../../../layout';

const Setting=()=>{
    return <Layout>
  <div className='max-w-[600px]'>
  <h2 className="text-2xl font-bold mb-4">Privacy Settings</h2>
    <form className="space-y-4">
      <div>
        <label className="block mb-1">Tender Visibility</label>
        <select className="w-full p-2 border rounded">
          <option>Limited to suppliers with 50%+ Match</option>
        </select>
      </div>
    </form>
  </div>
        </Layout>
}

export default Setting