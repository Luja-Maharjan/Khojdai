import React from 'react';
import {Link} from 'react-router-dom';


const Header = () => {
  return (
 <header className='sticky top-0 z-10 bg-slate-200 border-b border-gray-200 shadow-sm'>
  <div className='container mx-auto px-4'>
    
  <div className='flex items-center justify-between h-16'>
    {/* logo */}
    <Link to="/" className="flex items-center">
    <span className='text-xl font-bold text-red-600'> Khojdai</span>
    </Link>

    {/* navigation links */}
    <nav className='hidden md:flex space-x-8'>
      <Link to="/lostitem" className='text-gray-700 hover:text-blue-600 transition-colors font-medium'>
      Lost Items
      </Link>

      <Link to="/founditem" className='text-gray-700 hover:text-blue-600 transition-colors font-medium'>
      Found Items
      </Link>

      <Link to="postitem" className='text-gray-700 hover:text-blue-600 transition-colors font-medium'>
      Post Item
      </Link>
    </nav>

    {/* auth button */}
    <div className='flex items-center space-x-4'>
      <Link to="/sign-in" className='px-4 py-2 rounded-md text-gray-700 hover:bg-gray-100 transition-colors font-medium'>
      SignIn
      </Link>

      <Link to="/sign-up" className='px-4 py-2 rounded-md text-gray-700 hover:bg-gray-100 transition-colors font-medium '>
      SignUp
      </Link>

    </div>

  </div>

  </div>
 </header>
  )
}

export default Header

