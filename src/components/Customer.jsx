import React from 'react'
import Search from './Search'
import CustomerStatus from './CustomerStatus'
import AllCustomer from './AllCustomer'
import Table from './Table'

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