import React from 'react';
import '../styles/DealershipNavbar.css';
import { FaCartPlus} from 'react-icons/fa'
import { AiFillHome} from 'react-icons/ai'
import { RiAccountPinCircleFill } from "react-icons/ri";
import { MdOutlinePayments } from "react-icons/md";
import * as IoIcons from 'react-icons/io';

export const SideNav = [{
    title: 'Home',
    path : '/',
    icon : <AiFillHome/>,
    cName: 'nav-text'
},
{
    title: 'Reports',
    path : '/',
    icon : <IoIcons.IoIosPaper/>,
    cName: 'nav-text'
},
{
    title: 'Products',
    path : '/',
    icon : <FaCartPlus />,
    cName: 'nav-text'
},

]