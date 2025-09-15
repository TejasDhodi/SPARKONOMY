import { ChevronLeft } from 'lucide-react'

const Navbar = () => {
  return (
    <nav className='navbar flex items-center justify-between p-4'>
        <button className="flex items-center gap-1.5 cursor-pointer"> <ChevronLeft className="w-5 h-5 text-[#212529]" />Back </button>
        <h1 className="text-[17px] font-semibold text-black">Dashboard</h1>
        <div className="w-10 h-10 rounded-full overflow-hidden">
        <img 
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8fDA%3D" 
            alt="User avatar" 
            className="w-full h-full object-cover cursor-pointer"
        />
        </div>
    </nav>
  )
}

export default Navbar;
