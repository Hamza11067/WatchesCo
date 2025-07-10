
const Navbar = () => {
  return (
    <div className='text-white flex justify-between items-center py-6'>
        <div className="logo font-semibold">WATCHES&CO</div>
        <ul className='flex space-x-8'>
            <li className='cursor-pointer pb-1 border-transparent border-b-2 hover:border-white transition-all duration-300 ease-in-out '>Home</li>
            <li className='cursor-pointer pb-1 border-transparent border-b-2 hover:border-white transition-all duration-300 ease-in-out'>Products</li>
            <li className='cursor-pointer pb-1 border-transparent border-b-2 hover:border-white transition-all duration-300 ease-in-out'>Services</li>
            <li className='cursor-pointer pb-1 border-transparent border-b-2 hover:border-white transition-all duration-300 ease-in-out'>About</li>
            <li className='cursor-pointer pb-1 border-transparent border-b-2 hover:border-white transition-all duration-300 ease-in-out'>Contact</li>
        </ul>
    </div>
  )
}

export default Navbar