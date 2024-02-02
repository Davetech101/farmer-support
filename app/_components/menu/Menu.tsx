import Link from 'next/link'
import { FaInfinity } from "react-icons/fa6";


const Menu = () => {
  return (
    <div className='lg: w-screen'>
      <div className="fixed top-0 left-0 w-[70%] h-screen bg-primaryColor">
      <Link href="/" className="flex items-center text-4xl">
        <FaInfinity color="#008148" /> Farminsight
      </Link>
      </div>

      <div className="fixed top-0 right-0 h-screen w-[30%] bg-[#696969d4]">
        
      </div>
    </div>
  )
}

export default Menu