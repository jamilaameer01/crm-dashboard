import React from 'react'
import Search from '../components/Search'
import CustomerStatus from '../components/CustomerStatus'
import AllCustomer from '../components/AllCustomer'

const Customer = () => {
  return (
    <div className="flex flex-col ">
      <div className="w-full flex ">
        <div className='w-[86%]'>
          <Search />
        </div>
      </div>
      <div>
        <CustomerStatus />
      </div>
      <div className="pt-6">
        <AllCustomer />
      </div>
    </div>
  );
}

export default Customer