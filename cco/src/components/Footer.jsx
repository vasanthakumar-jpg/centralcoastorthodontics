import { MdLocationPin, MdYoutubeSearchedFor } from "react-icons/md";
import { ImMobile } from "react-icons/im";
// import { AiOutlineTikTok } from "react-icons/ai";
import { HiOutlineChat } from "react-icons/hi";

import { FaFacebook, FaInstagram, FaLocationArrow, FaTiktok, FaYoutube } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="bg-brown text-white xs:bg-blueFooter relative w-full">
       
       <div className=" mx-auto flex flex-col sm:flex-row
        sm:justify-between items-center sm:items-start">
      {/* Left-aligned heading */}
        <a href="" className="text-2xl font-bold text-gray-800 text-center sm:text-left m-5"> 
            <img 
            src="https://mintortho.kinsta.cloud/wp-content/uploads/2022/05/logo.svg"
             className=" 2xs:flex 2xs:justify-center 2xs:items-center 2xs:w-32 mt-4
             " 
            alt="logo" 
            data-lzl-src="https://mintortho.kinsta.cloud/wp-content/uploads/2022/05/logo.svg"/> 
            
         </a>
      
      {/* Right-aligned button */}
      <button className="bg-mintGreen text-white border-2 border-white font-semibold
      hover:text-mintGreen hover:border-mintGreen px-6 py-2 hover:bg-white transition text-center my-7 mx-4">
        SCHEDULE CONSULT
      </button>
    </div>
      
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-14 2xs:px-4 ">
        <div className="border border-border-line p-4 ">

            <ul className="space-y-2 mx-4 my-6">
            <h3 className="text-2xl font-semibold mb-4 text-mintGreen m-4 
           2xs:flex 2xs:justify-center
           base:flex base:justify-center
           lg:flex lg:justify-start
           md:flex md:justify-start
           xl:flex xl:justify-start
           2xl:flex 2xl:justify-start
           3xl:flex 3xl:justify-start">Quick Links</h3>           
              <li className='
         text-mintGreen m-4 
           2xs:flex 2xs:justify-center
           base:flex base:justify-center
           lg:flex lg:justify-start
           md:flex md:justify-start
           xl:flex xl:justify-start
           2xl:flex 2xl:justify-start
           3xl:flex 3xl:justify-start' ><a href="#" className="text-white hover:text-mintGreen">Our Practice</a></li>
              <li className='
             text-mintGreen m-4 
           2xs:flex 2xs:justify-center
           base:flex base:justify-center
           lg:flex lg:justify-start
           md:flex md:justify-start
           xl:flex xl:justify-start
           2xl:flex 2xl:justify-start
           3xl:flex 3xl:justify-start'><a href="#" className="text-white hover:text-mintGreen">Orthodontics</a></li>
                <li className='text-mintGreen m-4 
           2xs:flex 2xs:justify-center
           base:flex base:justify-center
           lg:flex lg:justify-start
           md:flex md:justify-start
           xl:flex xl:justify-start
           2xl:flex 2xl:justify-start
           3xl:flex 3xl:justify-start'><a href="#" className="text-white hover:text-mintGreen">Patient Resources</a></li>
              <li className='text-mintGreen m-4 
           2xs:flex 2xs:justify-center
           base:flex base:justify-center
           lg:flex lg:justify-start
           md:flex md:justify-start
           xl:flex xl:justify-start
           2xl:flex 2xl:justify-start
           3xl:flex 3xl:justify-start'><a href="#" className="text-white hover:text-mintGreen">Location</a></li>
              <li className='text-mintGreen m-4 
           2xs:flex 2xs:justify-center
           base:flex base:justify-center
           lg:flex lg:justify-start
           md:flex md:justify-start
           xl:flex xl:justify-start
           2xl:flex 2xl:justify-start
           3xl:flex 3xl:justify-start'><a href="#" className="text-white hover:text-mintGreen">Sustainability</a></li>
              <li className='text-mintGreen m-4 
           2xs:flex 2xs:justify-center
           base:flex base:justify-center
           lg:flex lg:justify-start
           md:flex md:justify-start
           xl:flex xl:justify-start
           2xl:flex 2xl:justify-start
           3xl:flex 3xl:justify-start'><a href="#" className="text-white hover:text-mintGreen">Sitemap</a></li>
            </ul>
        </div>

        <div className="border border-border-line p-4">
          <h3 className="text-2xl font-semibold mb-4 text-mintGreen m-4 
           2xs:flex 2xs:justify-center
           base:flex base:justify-center
           lg:flex lg:justify-start
           md:flex md:justify-start
           xl:flex xl:justify-start
           2xl:flex 2xl:justify-start
           3xl:flex 3xl:justify-start
          ">Contact Us</h3>   

          <ul className="  
          2xs:flex 2xs:justify-center
          base:base:flex base:justify-center
          md:md:flex md:justify-start
          lg:text-left lg:flex lg:justify-start
          xl:text-left xl:flex xl:justify-start
          2xl:text-left 2xl:flex 2xl:justify-start
          3xl:text-left 3xl:flex 3xl:justify-start
        ">
              
        <div className="text-mintGreen hover:text-blue-900 flex flex-col">
            <p className="flex flex-row my-2 text-white cursor-pointer hover:text-mintGreen"> 
              <MdLocationPin className="  mt-1 ml-4 mr-2" /> Minneapodivs, MN</p>
              <p className="flex flex-row my-2 text-white cursor-pointer hover:text-mintGreen"> 
              <ImMobile className="  mt-1 ml-4 mr-2" /> Call / Text (612) 509-6468</p>
              <p className="flex flex-row my-2 text-white cursor-pointer hover:text-mintGreen"> 
              <HiOutlineChat className="  mt-1 ml-4 mr-2" /> Text (612) 509-6468</p>
        </div> 
            </ul>
        </div>

        <div className="border border-border-line p-4 sm:col-span-2 lg:col-span-1">
          <h3 className="text-2xl font-semibold mb-4 text-mintGreen 
          2xs:text-center 2xs:flex 2xs:justify-center
          base:text-center base:flex base:justify-center
          lg:text-left lg:flex lg:justify-start
          xl:text-left xl:flex xl:justify-start
          2xl:text-left 2xl:flex 2xl:justify-start
          3xl:text-left 3xl:flex 3xl:justify-start
          ">Follow US</h3> 

            <ul className=" 2xs:flex 2xs:justify-center 2xs:gap-2 
            base:flex base:justify-center base:gap-2
            lg:flex lg:justify-start lg:gap-2
            xl:flex xl:justify-start xl:gap-2
            2xl:flex 2xl:justify-start 2xl:gap-2
            3xl:flex 3xl:justify-start 3xl:gap-2">
              <li className="text-mintGreen hover:text-blue-900"><FaFacebook className=" border-r text-2xl border-white pr-2" /></li>               
              <li className="text-mintGreen hover:text-blue-900"> <FaInstagram className=" border-r text-2xl border-white pr-2" /></li>
              <li className="text-mintGreen hover:text-blue-900"> <FaYoutube className=" border-r text-2xl border-white pr-2" /></li>
              <li className="text-mintGreen hover:text-blue-900"><FaTiktok  /></li>
            </ul>
        </div>
        <div>
        
        </div> 

    </div>
     <div className="text-center  ">
        <p className="text-sm 2xs:mx-4 2xs:my-2">
          &copy; Copyrights {new Date().getFullYear()} Mint Orthodontics 
          <span className="text-mintGreen">
          <span className="text-white"> | </span>
            Sitemap <span className="text-white">|</span> Privacy Policy
          <span className="text-white"> | </span>
            Accessiability <span className="text-white">& </span>Satement </span>
        </p>
        <p className="text-sm mt-2 sm:mt-0 2xs:mx-4 2xs:my-2">
        Orthodaontics Marketing & Web Design by <span className="text-mintGreen">HIP</span>
        </p>
      </div>

    </footer>
    
  );
};

export default Footer;