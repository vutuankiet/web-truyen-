import {Link} from "react-router-dom";
import Logo from "../logo.png";
import Avatar from "../avatar.png"
import {useEffect, useRef, useState} from "react";

export const Navbar = (props) => {
    const [CloseNav,setCloseNav] = useState(true)
    const handleCloseNav =()=>{
        setCloseNav(c=>!c);
    }
    const [collapse, setCollapse] = useState(false)
    const handleCollapse = () => {
        setCollapse(c => !c);
    }

    const [listBook, setListBook] = useState(false)
    const handleListBook = () => {
        setListBook(c => !c);
    }

    return (
        <>
            <div className={'grid grid-cols-2'}>
                <div className={`${CloseNav?'block toggle-nav-style shadow-2xl' : 'hidden toggle-nav-style'} fixed overflow-y-scroll h-screen block toggle-nav-style shadow-2xl left-0 z-40 w-60 bg-white
                     scroll-auto`}>
                    <ul className={'items-start scroll-smooth'}>
                        <li className={'text-sm font-semobold text-amber-600 py-4 border-b border-gray-300 px-5 space-x-2'}>
                            <div className={`flex items-center justify-between`}>
                                <div className={`space-x-2`}>
                                    <Link to={'home'}><img src={Logo} width={40}/></Link>
                                </div>
                                <div className={'icon-close'}>
                                    <i onClick={handleCloseNav} className={`fa-solid fa-close text-xl text-amber-600 cursor-pointer float-right`}></i>
                                </div>
                            </div>
                        </li>
                        <li className={'text-sm font-semobold text-amber-600 py-4 border-b border-gray-300 cursor-pointer px-5 space-x-2'}>
                            <div onClick={handleCollapse} className={`flex items-center justify-between`}>
                                <div className={`space-x-2`}>
                                    <i className="fas fa-signal font-lighter font-bold text-sm text-gray-700"></i>
                                    <Link to={'#'} className={'font-lighter font-bold text-sm text-gray-700'}>BẢN THẢO</Link>
                                </div>
                                <i className={`fa-solid ${collapse ? 'fa-angle-up' : 'fa-angle-down'} text-sm text-gray-700 float-right`}></i>
                            </div>
                            <div className={`${collapse ?'block':'hidden'}`}>
                                <ul className={'items-start'}>
                                    <li className={'text-sm font-semobold text-amber-600 py-3 space-x-2'}>
                                        <Link to={'login'} className={'font-lighter text-sm text-gray-700'}>THÊM BẢN THẢO</Link>
                                    </li>
                                    <li className={'text-sm font-semobold text-amber-600 py-3 space-x-2'}>
                                        <Link to={'login'} className={'font-lighter text-sm text-gray-700'}>CÁC BẢN THẢO</Link>
                                    </li>
                                </ul>
                            </div>
                        </li>

                        <li className={'text-sm font-semobold text-amber-600 py-4 border-b border-gray-300 cursor-pointer px-5 space-x-2'}>
                            <div onClick={handleListBook} className={`flex items-center justify-between `}>
                                <div className={`space-x-2`}>
                                    <i className="fas fa-th-large font-lighter font-bold text-sm text-gray-700"></i>
                                    <Link to={'#'} className={'font-lighter font-bold text-sm text-gray-700'}>SÁCH TRUYỆN</Link>
                                </div>
                                <i className={`fa-solid ${listBook ? 'fa-angle-up' : 'fa-angle-down'} text-sm text-gray-700 float-right`}></i>
                            </div>
                            <div className={`${listBook ?'block':'hidden'}`}>
                                <ul className={'items-start'}>
                                    <li className={'text-sm font-semobold text-amber-600 py-3 space-x-2'}>
                                        <Link to={'login'} className={'font-lighter text-sm text-gray-700'}>THÊM TRUYỆN MỚI</Link>
                                    </li>
                                    <li className={'text-sm font-semobold text-amber-600 py-3 space-x-2'}>
                                        <Link to={'login'} className={'font-lighter text-sm text-gray-700'}>TRUYỆN CỦA TÔI</Link>
                                    </li>
                                    <li className={'text-sm font-semobold text-amber-600 py-3 space-x-2'}>
                                        <Link to={'login'} className={'font-lighter text-sm text-gray-700'}>BÁO LỖI</Link>
                                    </li>
                                    <li className={'text-sm font-semobold text-amber-600 py-3 space-x-2'}>
                                        <Link to={'login'} className={'font-lighter text-sm text-gray-700'}>THỐNG KÊ</Link>
                                    </li>
                                    <li className={'text-sm font-semobold text-amber-600 py-3 space-x-2'}>
                                        <Link to={'login'} className={'font-lighter text-sm text-gray-700'}>TƯ LIỆU</Link>
                                    </li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className={'absolute w-full'}>
                    <nav className={`sticky-nav-author bg-white flex justify-between items-center px-3 py-2 border-b w-full float-right toggle-nav-style ${CloseNav?'admin-content-right toggle-nav-style' : 'w-full toggle-nav-style'}`}>
                        <div className={'space-x-5'}>
                            <i onClick={handleCloseNav} className={`${CloseNav?'fas fa-align-left':'fas fa-bars'} cursor-pointer text-xl text-amber-600`}></i>
                        </div>
                        <div className={'flex items-center'}>
                            <div className={'text-right'}>
                                <strong>VITIKI</strong>
                                <p>vutuankiet2411@gmail.com</p>
                            </div>
                            <div className={'p-2'}>
                                <img src={Avatar} className={'rounded-full w-10'}/>
                            </div>
                        </div>
                    </nav>
                    <div className={`overflow-y-scroll items-center px-3 py-2 w-full float-right toggle-nav-style ${CloseNav?'admin-content-right toggle-nav-style' : 'w-full toggle-nav-style'}`}>


                    </div>
                </div>


            </div>
        </>
    )
}