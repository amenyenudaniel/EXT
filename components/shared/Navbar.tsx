import react, { useContext, useState } from 'react'
import Image from 'next/image'
import MainLayout from './MainLayout'
import Link from 'next/link'
import { GlobalContext } from '@/context/GlobalContext'
import fetch from 'isomorphic-unfetch'
import { useRouter } from 'next/router'

const Navbar: React.FC<{ noNav?: boolean }> = ({ noNav }) => {
  const { logged, user, setLogged, setUser, titleCase } = useContext(GlobalContext)
  const [showLogout, setShowLogout] = useState<boolean>(false)
  const history = useRouter()

  //function that toggles the show logout state
  const handleShowLogout = () => {
    setShowLogout(!showLogout)
  }

  const handleLogout = async () => {
    setLogged(false);
        setShowLogout(false);
        setUser('');
        localStorage.removeItem("user")
        localStorage.removeItem("logged")
        history.push('/logIn');
    // try {
    //   // Send a POST request to the logout endpoint without a request body
    //   const response = await fetch("https://www.cofucan.tech/srce/api/logout/", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //       // Add any necessary authentication headers here, such as tokens or cookies
    //     },
    //   });
  
    //   // Check if the request was successful (status code 200)
    //   if (response.status === 200) {
    //     // Logout was successful, so update your local state
    //     setLogged(false);
    //     setShowLogout(false);
    //     setUser('');
    //     localStorage.removeItem("user")
    //     localStorage.removeItem("logged")
    //     history.push('/logIn');
    //   } else {
    //     // Handle error cases, e.g., if the API returns an error message
    //     console.error("Logout failed. Status code: " + response.status);
    //     // You can also handle the error in a user-friendly way here
    //   }
    // } catch (error) {
    //   // Handle network errors
    //   console.error("Network error: ");
    //   // You can also provide a user-friendly message for network errors
    // }
  };
  

  /*const handleLogout = () => {
    //call or put the logic for log out here
    signOut(auth)
    setLogged(false)
    setShowLogout(false)
    setUser(null)
  }*/

  return (
    <div className='bg-white  '>
      <div className="container text-primary-600 h-[84px] px-3 xs:px-5 ss:px-12 md:px-[80px] flex justify-between items-center">
        {/* Logo container */}
        <Link href="/" className="flex gap-1 items-center">
          <Image
            src="/assets/shared/logo.svg"
            alt="Logo"
            width={40}
            height={40}
          />
          <h1 className=" text-h6 font-[700] font-Inter">HelpMeOut</h1>
        </Link>
        {/* Navbar links */}
        {!noNav && (
          <div className="hidden text-h6 font-Work-Sans font-[500] md:flex items-center gap-[39px]">
            <Link href="#features">
              <h1>Features</h1>
            </Link>
            <Link href="#how">
              <h1>How It Works</h1>
            </Link>
          </div>
        )}
        {/* Get Started */}
        {logged === true && user ? (
          <div className="flex items-center gap-1 md:gap-4 relative font-Work-Sans font-[400]">
            <Image
              src="/assets/shared/profile.svg"
              alt="profile"
              height={40}
              width={40}
              className="w-6 h-6 ss:w-10 ss:h-10"
            />
            <div
              onClick={handleShowLogout}
              className="flex md:gap-[10px] cursor-pointer"
            >
              <p className="text-[13px] ss:text-[18px]">{titleCase(user)}</p>
              <Image
                src="/assets/video-repo/arrow-down.svg"
                height={20}
                width={20}
                className={`${showLogout && '-rotate-90'}`}
                alt="arrow-down"
              />
            </div>
            {logged && showLogout && (
              <div
                onClick={handleLogout}
                className="flex gap-[10px] absolute bottom-[-40px] cursor-pointer text-[#141414] font-Work-Sans font-[500] right-0 py-2 px-5 bg-white shadow-lg"
              >
               <Image
                src="/assets/shared/logout.svg"
                height={20}
                width={20}
                alt="logout"
              /> Logout
              </div>
            )}
          </div>
        ) : (
          <Link href="/logIn" className="text-h6 font-Work-Sans font-[500]">
            Get Started
          </Link>
        )}
      </div>
    </div>
  )
}

export default Navbar
