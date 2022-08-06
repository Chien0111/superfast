import { ArrowCircleDown, ArrowDown2 ,HambergerMenu} from "iconsax-react";
import { Image } from '@mantine/core';
import React from "react";
import style from "./style.module.css";

const Header = () => {
    const styleText = 'flex items-center mr-10'
    return <div className="">
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
                            <li className={ `${style.dropdown} `}><a href="" className="flex items-center mr-4">Home <ArrowDown2 size="12" className="ml-2"/></a>
                                <ul className={ `${style.dropdownnav}`}>
                                    <li><a href=""><ArrowCircleDown size="12" className={`${style.icon} mr-2 hidden`}/>Home1</a></li>
                                    <li><a href=""><ArrowCircleDown size="12" className={`${style.icon} mr-2 hidden`}/>Home2</a></li>
                                    <li><a href=""><ArrowCircleDown size="12" className={`${style.icon} mr-2 hidden`}/>Home3</a></li>
                                </ul>
                            </li>
                            <li className={ `${style.dropdown} `}><a href="/curriculum" className="flex items-center mr-4">Curriculum <ArrowDown2 size="12" className="ml-2"/></a>
                                <ul className={ `${style.dropdownnav}`}>
                                    <li><a href="/curriculum"><ArrowCircleDown size="12" className={`${style.icon} mr-2 hidden`}/>All Curriculum</a></li>
                                    <li><a href=""><ArrowCircleDown size="12" className={`${style.icon} mr-2 hidden`}/>Single curriculum</a></li>
                                </ul>
                            </li>
                            <li className={ `${style.dropdown} `}><a href="" className="flex items-center mr-4">Classes <ArrowDown2 size="12" className="ml-2"/></a>
                                <ul className={ `${style.dropdownnav}`}>
                                    <li><a href=""><ArrowCircleDown size="12" className={`${style.icon} mr-2 hidden`}/>All Classes</a></li>
                                    <li><a href=""><ArrowCircleDown size="12" className={`${style.icon} mr-2 hidden`}/>Classes-tabs</a></li>
                                    <li><a href=""><ArrowCircleDown size="12" className={`${style.icon} mr-2 hidden`}/>Classes – Single</a></li>
                                </ul>
                            </li>
                            <li className={ `${style.dropdown} `}><a href="/about-us" className="flex items-center mr-4">About Us <ArrowDown2 size="12" className="ml-2"/></a>
                                <ul className={ `${style.dropdownnav}`}>
                                    <li><a href="/about-us"><ArrowCircleDown size="12" className={`${style.icon} mr-2 hidden`}/>About us</a></li>
                                    <li><a href=""><ArrowCircleDown size="12" className={`${style.icon} mr-2 hidden`}/>Principals message</a></li>
                                    <li><a href=""><ArrowCircleDown size="12" className={`${style.icon} mr-2 hidden`}/>About facilities</a></li>
                                </ul>
                            </li>
                            <li className={ `${style.dropdown} `}><a href="" className="flex items-center mr-4">Blog <ArrowDown2 size="12" className="ml-2"/></a>
                                <ul className={ `${style.dropdownnav}`}>
                                    <li><a href=""><ArrowCircleDown size="12" className={`${style.icon} mr-2 hidden`}/>Blog – Listing</a></li>
                                    <li><a href=""><ArrowCircleDown size="12" className={`${style.icon} mr-2 hidden`}/>Single Post</a></li>
                                </ul>
                            </li>
                            <li className={ `${style.dropdown} `}><a href="" className="flex items-center mr-4">Page <ArrowDown2 size="12" className="ml-2"/></a>
                                <ul className={ `${style.dropdownnav}`}>
                                    <li><a href=""><ArrowCircleDown size="12" className={`${style.icon} mr-2 hidden`}/>Contact Us</a></li>
                                    <li><a href=""><ArrowCircleDown size="12" className={`${style.icon} mr-2 hidden`}/>Events List</a></li>
                                    <li><a href=""><ArrowCircleDown size="12" className={`${style.icon} mr-2 hidden`}/>Events Grid</a></li>
                                    <li><a href=""><ArrowCircleDown size="12" className={`${style.icon} mr-2 hidden`}/>Faq</a></li>
                                    <li><a href=""><ArrowCircleDown size="12" className={`${style.icon} mr-2 hidden`}/>Page 404</a></li>
                                </ul>
                            </li>
                            
                        </ul>
                    </nav>
            </div>
            <div>
                <div>
                    <div className="lg:block hidden">
                        <a href="">
                            <p> Have any questions? </p>
                            <p className="font-semibold text-ct-secondary-02">  +844 1800 33355  </p>
                        </a>
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
