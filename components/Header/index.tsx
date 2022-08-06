import { ArrowCircleDown, ArrowDown2 ,HambergerMenu} from "iconsax-react";
import { Image } from '@mantine/core';
import React from "react";
import style from "./style.module.css";

const Header = () => {
    return <div >
        <div className={`w-full flex justify-between items-center p-7 `}>
         <div className="">
             <Image
                 src="http://demo2.themelexus.com/kindero/wp-content/uploads/2019/12/logo.svg"
                 alt="Random unsplash image"
                 width={100}
             />
         </div>
         <div className="mx-26 md:block hidden">
                 <nav className={ `${style.nav}`}>
                     <ul className="list-none">
                         <li className={ `${style.dropdown} `}><span className="flex items-center mr-4">Home <ArrowDown2 size="12" className="ml-2"/></span>
                             <ul className={ `${style.dropdownnav}`}>
                                 <li><ArrowCircleDown size="12" className={`${style.icon} mr-2 hidden`}/>Home1</li>
                                 <li><ArrowCircleDown size="12" className={`${style.icon} mr-2 hidden`}/>Home2</li>
                                 <li><ArrowCircleDown size="12" className={`${style.icon} mr-2 hidden`}/>Home3</li>
                             </ul>
                         </li>
                         <li className={ `${style.dropdown} `}><span className="flex items-center mr-4">Curriculum <ArrowDown2 size="12" className="ml-2"/></span>
                             <ul className={ `${style.dropdownnav}`}>
                                 <li><ArrowCircleDown size="12" className={`${style.icon} mr-2 hidden`}/>All Curriculum</li>
                                 <li><ArrowCircleDown size="12" className={`${style.icon} mr-2 hidden`}/>Single curriculum</li>
                             </ul>
                         </li>
                         <li className={ `${style.dropdown} `}><span className="flex items-center mr-4">Classes <ArrowDown2 size="12" className="ml-2"/></span>
                             <ul className={ `${style.dropdownnav}`}>
                                 <li><ArrowCircleDown size="12" className={`${style.icon} mr-2 hidden`}/>All Classes</li>
                                 <li><ArrowCircleDown size="12" className={`${style.icon} mr-2 hidden`}/>Classes-tabs</li>
                                 <li><ArrowCircleDown size="12" className={`${style.icon} mr-2 hidden`}/>Classes – Single</li>
                             </ul>
                         </li>
                         <li className={ `${style.dropdown} `}><span className="flex items-center mr-4">About Us <ArrowDown2 size="12" className="ml-2"/></span>
                             <ul className={ `${style.dropdownnav}`}>
                                 <li><ArrowCircleDown size="12" className={`${style.icon} mr-2 hidden`}/>About us</li>
                                 <li><ArrowCircleDown size="12" className={`${style.icon} mr-2 hidden`}/>Principals message</li>
                                 <li><ArrowCircleDown size="12" className={`${style.icon} mr-2 hidden`}/>About facilities</li>
                             </ul>
                         </li>
                         <li className={ `${style.dropdown} `}><span className="flex items-center mr-4">Blog <ArrowDown2 size="12" className="ml-2"/></span>
                             <ul className={ `${style.dropdownnav}`}>
                                 <li><ArrowCircleDown size="12" className={`${style.icon} mr-2 hidden`}/>Blog – Listing</li>
                                 <li><ArrowCircleDown size="12" className={`${style.icon} mr-2 hidden`}/>Single Post</li>
                             </ul>
                         </li>
                         <li className={ `${style.dropdown} `}><span className="flex items-center mr-4">Page <ArrowDown2 size="12" className="ml-2"/></span>
                             <ul className={ `${style.dropdownnav}`}>
                                 <li><ArrowCircleDown size="12" className={`${style.icon} mr-2 hidden`}/>Contact Us</li>
                                 <li><ArrowCircleDown size="12" className={`${style.icon} mr-2 hidden`}/>Events List</li>
                                 <li><ArrowCircleDown size="12" className={`${style.icon} mr-2 hidden`}/>Events Grid</li>
                                 <li><ArrowCircleDown size="12" className={`${style.icon} mr-2 hidden`}/>Faq</li>
                                 <li><ArrowCircleDown size="12" className={`${style.icon} mr-2 hidden`}/>Page 404</li>
                             </ul>
                         </li>
                         
                     </ul>
                 </nav>
         </div>
         <div>
             <div>
                 <div className="lg:block hidden">
                         <p> Have any questions? </p>
                         <p className="font-semibold text-ct-secondary-02">  +844 1800 33355  </p>
                     
                 </div>
                 <div className="md:hidden block">
                     <HambergerMenu size="32" />
                 </div>
             </div>
         </div>
    </div>
 </div>;
};

export default Header;
