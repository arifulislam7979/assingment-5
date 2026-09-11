import image from '../../assets/logo-text.png'

const Navbar = () => {
  return (
    <nav>
        <div className='container mx-auto '>
            <div className='flex justify-between items-center py-5'>
                <img src={image} alt="logo image" />
                <ul className='flex justify-between gap-6 text-[#475569]'>
                    <li><a href="#" className='text-[#DB2777]'>Home</a></li>
                    <li><a href="#">Technologies</a></li>
                    <li><a href="#">Projects</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
                <div>
                    <button className='cursor-pointer'>Sign In</button>
                    <button className='ml-3 bg-[#D91B7E] text-white px-4 py-2 rounded-2xl cursor-pointer'>Sign Up</button>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar