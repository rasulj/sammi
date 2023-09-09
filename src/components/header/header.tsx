import Image from "next/image"
import Link from "next/link"
import { AiOutlineSearch, AiOutlineUser, AiOutlineLogout } from 'react-icons/ai'
import { BiBellMinus } from 'react-icons/bi'
import { useEffect,useState} from 'react'
import { useAuth } from "src/hooks/useAuth"
import NavMenu from "../nav-menu/nav-menu"



const Header = () => {
  const[scrolled ,setscrolled] = useState(false)
  const { logout } = useAuth()

   useEffect(()=>{
    const handleScroll = ()=>{  window.scrollY > 0 ? setscrolled(true) : setscrolled(false) }
  

   
    window.addEventListener('scroll',handleScroll)
    return()=> window.removeEventListener('scroll',handleScroll)
   },[])

  return (
    <header className={`${scrolled && 'bg-slate-900/90'}`}>
      <div className="flex items-center space-x-2 md:space-x-10">
        <Image src={'./logo.svg'} alt="logo" width={56} height={56} className="cursor-pointer object-contain  "/>
       <NavMenu/>
      <ul className="space-x-4  md:flex hidden">
        <li className="navLink">Home</li>
          <li className="navLink">Movies</li>
          <li className="navLink"> TV Show</li>
          <li className="navLink"> New</li>
          <li className="navLink">Popular</li>
      </ul>
      </div>
      <div className="flex items-center space-x-4 text-sm font-light">
    <AiOutlineSearch className="h-6 w-6 cursor-pointer"/>
    <p className="hidden lg:inline">kids</p>
        <BiBellMinus className="h-6 w-6 cursor-pointer" />
        <Link href={'/account'}>
          <AiOutlineUser className="h-6 w-6 cursor-pointer" />
        </Link>
        <AiOutlineLogout className="h-6 w-6 cursor-pointer" onClick={logout}/>
       
      </div>
    </header>
  )
}

export default Header