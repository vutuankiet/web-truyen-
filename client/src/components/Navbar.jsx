import {Link} from "react-router-dom";
import Logo from "../logo.png";
import {useEffect, useRef, useState} from "react";

export const Navbar = (props) => {
    const [collapse, setCollapse] = useState(false)
    const [typeListOpen, setTypeListOpen] = useState(false)
    const [typeSearchOpen, setTypeSearchOpen] = useState(false)
    const bodyRef = useRef(null)
    const handleCollapse = () => {
        setCollapse(c => !c);
    }
    const [fixedNav, setFixedNav] = useState(true)
    const [openNavMobile, setOpenNavMobile] = useState(false)
    const handleOpenNav = () => {
        setOpenNavMobile(c => !c)
    }
    const handleOpenTypeList = () => {
        setTypeListOpen(c => !c)
    }
    const handleOpenTypeSearch = () => {
        setTypeSearchOpen(c => !c)
    }
    const handleScrollNav = (e) => {
        console.log('helo')
        if (e.scrollTop > 20) {
            setFixedNav(true)
        } else {
            setFixedNav(false)
        }
    }

    return (
        <>
            {/*pc nav*/}
            <div className={'bg-gray-100 w-full'}>
                <nav
                    className={'hidden sm:flex mx-auto px-3 fixed bg-white w-full  xl:px-32 flex justify-between lg:justify-around sm:justify-between items-center  py-4 pc-nav'}>
                    <ul className={'flex justify-center items-center space-x-6'}>
                        <li>
                            <Link to={'home'}><img src={Logo} width={40}/></Link>
                        </li>

                        <li>
                            <div className="dropdown">
                                <button
                                    className=" dropbtn rounded-lg space-x-2">
                                    <i className="fa-solid fa-bars"></i>
                                    <span className={'text-sm font-semibold  text-gray-700'}>Thể loại</span>
                                </button>
                                <div className="dropdown-content w-96">
                                    <div className={'grid grid-cols-2'}>
                                        <div>
                                            <ul className={'w-48'}>
                                                <li className={'text-sm font-semobold text-amber-600'}>
                                                    <Link to={'category'}>Tất Cả</Link>
                                                </li>
                                                <li className={'text-sm font-semobold text-amber-600'}>
                                                    <Link to={'category'}>Huyền Huyễn</Link>
                                                </li>
                                                <li className={'text-sm font-semobold text-amber-600'}>
                                                    <Link to={'category'}>Võng Du</Link>
                                                </li>
                                                <li className={'text-sm font-semobold text-amber-600'}>
                                                    <Link to={'category'}>Đồng Nhân</Link>
                                                </li>
                                                <li className={'text-sm font-semobold text-amber-600'}>
                                                    <Link to={'category'}>Cạnh Kỹ</Link>
                                                </li>
                                                <li className={'text-sm font-semobold text-amber-600'}>
                                                    <Link to={'category'}>Kiếm Hiệp</Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <div>
                                            <ul className={'w-48'}>
                                                <li className={'text-sm font-semobold text-amber-600'}>
                                                    <Link to={'category'}>Tiên Hiệp</Link>
                                                </li>
                                                <li className={'text-sm font-semobold text-amber-600'}>
                                                    <Link to={'category'}>Khoa Huyễn</Link>
                                                </li>
                                                <li className={'text-sm font-semobold text-amber-600'}>
                                                    <Link to={'category'}>Đô Thị</Link>
                                                </li>
                                                <li className={'text-sm font-semobold text-amber-600'}>
                                                    <Link to={'category'}>Dã Sử</Link>
                                                </li>
                                                <li className={'text-sm font-semobold text-amber-600'}>
                                                    <Link to={'category'}>Huyền Nghi</Link>
                                                </li>
                                                <li className={'text-sm font-semobold text-amber-600'}>
                                                    <Link to={'category'}>Kỳ Ảo</Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>

                        <li>
                            <div className="dropdown">
                                <button
                                    className=" dropbtn rounded-lg space-x-2">
                                    <span className={'text-sm font-semibold  text-gray-700'}>Bảng xếp hạng</span>
                                </button>
                                <div className="dropdown-content w-48">
                                    <div className={'grid grid-cols-2'}>
                                        <div>
                                            <ul className={'w-48'}>
                                                <li className={'text-sm font-semobold text-amber-600'}>
                                                    <Link to={'category'}>Thịnh Hành</Link>
                                                </li>
                                                <li className={'text-sm font-semobold text-amber-600'}>
                                                    <Link to={'category'}>Đọc Nhiều</Link>
                                                </li>
                                                <li className={'text-sm font-semobold text-amber-600'}>
                                                    <Link to={'category'}>Tặng Thưởng</Link>
                                                </li>
                                                <li className={'text-sm font-semobold text-amber-600'}>
                                                    <Link to={'category'}>Đề Cử</Link>
                                                </li>
                                                <li className={'text-sm font-semobold text-amber-600'}>
                                                    <Link to={'category'}>Yêu Thích</Link>
                                                </li>
                                                <li className={'text-sm font-semobold text-amber-600'}>
                                                    <Link to={'category'}>Thảo Luận</Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <ul className={`flex justify-center items-center bg-white border w-auto overflow-hidden md:w-56 px-2 lg:w-80 rounded-3xl`}>
                        <li className={'flex justify-start items-center overflow-hidden flex-1 rounded-3x space-x-2 py-2 md:pl-2 lg:pl-2'}>
                            <i className="fa-solid fa-magnifying-glass text-gray-500 text-xl"></i>
                            <input
                                className={'flex-auto text-xs font-lighter border-0 py-1 w-full text-sm text-gray-500 focus:outline-0 focus:border-0'}
                                placeholder={'Tìm Kiếm Tên Truyện Hoặc Tên Tác Giả'}/>
                        </li>
                    </ul>
                    <ul className={`flex justify-between items-center space-x-9`}>
                        <li className={'flex justify-center items-center space-x-1'}>
                            <span className={'fa-solid fa-circle-up'}></span>
                            <Link to={'up'} className={'font-lighter text-sm text-gray-700'}>Đăng truyện</Link>
                        </li>
                        <li className={'flex justify-center items-center space-x-1'}>
                            <Link to={'login'} className={'font-lighter text-sm text-gray-700'}>Đăng nhập</Link>
                        </li>
                        <li className={'flex justify-center items-center space-x-1'}>
                            <Link to={'login'} className={'font-lighter text-sm text-gray-700'}>Đăng ký</Link>
                        </li>
                    </ul>
                </nav>
            </div>

            <div>
                {/*    mobile nav*/}
                <div className={`bg-white w-full sm:hidden ${fixedNav ? 'fixed' : 'relative'} mobi-nav`}>
                    <nav className={`flex justify-between items-center px-3 py-4 ${openNavMobile ? 'border-b' : ''}`}>
                        <Link to={'home'}><img src={Logo} width={40}/></Link>
                        <div className={'space-x-5'}>
                            <span onClick={handleOpenTypeSearch} className={'fa-solid fa-magnifying-glass text-xl text-amber-600'}></span>
                            <span onClick={handleOpenNav}
                                  className={`fa-solid ${openNavMobile ? 'fa-close' : 'fa-bars'} text-xl text-amber-600`}></span>
                        </div>
                    </nav>
                    <div className={`${typeSearchOpen ? 'block' : 'hidden'}`}>
                        <ul className={`flex justify-center items-center bg-white w-auto overflow-hidden w-full px-2 border border-gray-400 rounded-3xl`}>
                            <li className={'flex justify-start items-center overflow-hidden flex-1 rounded-3x space-x-2 py-2 md:pl-2 lg:pl-6'}>
                                <i className="fa-solid fa-magnifying-glass text-gray-500 text-xl"></i>
                                <input
                                    className={'flex-auto text-xs font-lighter border-0 py-1 w-full text-sm text-gray-500 focus:outline-0 focus:border-0'}
                                    placeholder={'Tìm Kiếm Tên Truyện Hoặc Tên Tác Giả'}/>
                            </li>
                        </ul>
                    </div>
                    <div
                        className={`fixed overflow-y-scroll h-screen ${openNavMobile ? 'block toggle-nav-style shadow-2xl' : 'hidden toggle-nav-style'} right-0  w-60   bg-white
                     scroll-auto`}>
                        <ul className={'items-start scroll-smooth'}>
                            <li className={'text-sm font-semobold text-amber-600 py-4 border-b border-gray-300 px-5 space-x-2'}>
                                <i className="far fa-user font-lighter font-bold text-sm text-gray-700"></i>
                                <Link to={'login'} className={'font-lighter font-bold text-sm text-gray-700'}>Đăng
                                    nhập</Link>
                            </li>
                            <li className={'text-sm font-semobold text-amber-600 py-4 border-b border-gray-300 px-5 space-x-2'}>
                                <i className="fas fa-user-edit font-lighter font-bold text-sm text-gray-700"></i>
                                <Link to={'login'} className={'font-lighter font-bold text-sm text-gray-700'}>Đăng
                                    ký</Link>
                            </li>
                            <li onClick={handleCollapse}
                                className={'text-sm font-semobold text-amber-600 py-4 border-b border-gray-300 px-5 space-x-2'}>
                                <div className={`flex items-center justify-between`}>
                                    <div className={`space-x-2`}>
                                        <i className="fas fa-signal font-lighter font-bold text-sm text-gray-700"></i>
                                        <Link to={'#'} className={'font-lighter font-bold text-sm text-gray-700'}>Bảng xếp
                                            hạng</Link>
                                    </div>
                                    <i className={`fa-solid ${collapse ? 'fa-angle-up' : 'fa-angle-down'} text-sm text-gray-700 float-right`}></i>
                                </div>
                                <div className={collapse ? 'block' : 'hidden'}>
                                    <ul className={'items-start'}>
                                        <li className={'text-sm font-semobold text-amber-600 py-3 space-x-2'}>
                                            <Link to={'login'} className={'font-lighter text-sm text-gray-700'}>Thịnh
                                                hành</Link>
                                        </li>
                                        <li className={'text-sm font-semobold text-amber-600 py-3 space-x-2'}>
                                            <Link to={'login'} className={'font-lighter text-sm text-gray-700'}>Đọc
                                                nhiều</Link>
                                        </li>
                                        <li className={'text-sm font-semobold text-amber-600 py-3 space-x-2'}>
                                            <Link to={'login'} className={'font-lighter text-sm text-gray-700'}>Tặng
                                                thưởng</Link>
                                        </li>
                                        <li className={'text-sm font-semobold text-amber-600 py-3 space-x-2'}>
                                            <Link to={'login'} className={'font-lighter text-sm text-gray-700'}>Đề
                                                cử</Link>
                                        </li>
                                        <li className={'text-sm font-semobold text-amber-600 py-3 space-x-2'}>
                                            <Link to={'login'} className={'font-lighter text-sm text-gray-700'}>Yêu
                                                thích</Link>
                                        </li>
                                        <li className={'text-sm font-semobold text-amber-600 py-3 space-x-2'}>
                                            <Link to={'login'} className={'font-lighter text-sm text-gray-700'}>Thảo
                                                luận</Link>
                                        </li>
                                    </ul>
                                </div>
                            </li>

                            <li onClick={handleOpenTypeList}
                                className={'text-sm font-semobold text-amber-600 py-4 border-b border-gray-300 px-5 space-x-2'}>
                                <div className={`flex items-center justify-between`}>
                                    <div className={`space-x-2`}>
                                        <i className="fas fa-th-large font-lighter font-bold text-sm text-gray-700"></i>
                                        <Link to={'#'} className={'font-lighter font-bold text-sm text-gray-700'}>Thể
                                            loại</Link>
                                    </div>
                                    <i className={`fa-solid ${typeListOpen ? 'fa-angle-up' : 'fa-angle-down'} text-sm text-gray-700 float-right`}></i>
                                </div>
                                <div className={typeListOpen ? 'block' : 'hidden'}>
                                    <ul className={'items-start'}>
                                        <li className={'text-sm font-semobold text-amber-600 py-3 space-x-2'}>
                                            <Link to={'login'} className={'font-lighter text-sm text-gray-700'}>Tất
                                                cả</Link>
                                        </li>
                                        <li className={'text-sm font-semobold text-amber-600 py-3 space-x-2'}>
                                            <Link to={'login'} className={'font-lighter text-sm text-gray-700'}>Tiên
                                                hiệp</Link>
                                        </li>
                                        <li className={'text-sm font-semobold text-amber-600 py-3 space-x-2'}>
                                            <Link to={'login'} className={'font-lighter text-sm text-gray-700'}>Huyền
                                                huyễn</Link>
                                        </li>
                                        <li className={'text-sm font-semobold text-amber-600 py-3 space-x-2'}>
                                            <Link to={'login'} className={'font-lighter text-sm text-gray-700'}>Khoa
                                                huyễn</Link>
                                        </li>
                                        <li className={'text-sm font-semobold text-amber-600 py-3 space-x-2'}>
                                            <Link to={'login'} className={'font-lighter text-sm text-gray-700'}>Võng
                                                du</Link>
                                        </li>
                                        <li className={'text-sm font-semobold text-amber-600 py-3 space-x-2'}>
                                            <Link to={'login'} className={'font-lighter text-sm text-gray-700'}>Đô
                                                thị</Link>
                                        </li>
                                        <li className={'text-sm font-semobold text-amber-600 py-3 space-x-2'}>
                                            <Link to={'login'} className={'font-lighter text-sm text-gray-700'}>Đồng
                                                nhân</Link>
                                        </li>
                                        <li className={'text-sm font-semobold text-amber-600 py-3 space-x-2'}>
                                            <Link to={'login'} className={'font-lighter text-sm text-gray-700'}>Dã
                                                sử</Link>
                                        </li>
                                        <li className={'text-sm font-semobold text-amber-600 py-3 space-x-2'}>
                                            <Link to={'login'} className={'font-lighter text-sm text-gray-700'}>Cạnh
                                                kỹ</Link>
                                        </li>
                                        <li className={'text-sm font-semobold text-amber-600 py-3 space-x-2'}>
                                            <Link to={'login'} className={'font-lighter text-sm text-gray-700'}>Huyền
                                                nghi</Link>
                                        </li>
                                        <li className={'text-sm font-semobold text-amber-600 py-3 space-x-2'}>
                                            <Link to={'login'} className={'font-lighter text-sm text-gray-700'}>Kiếm
                                                hiệp</Link>
                                        </li>
                                        <li className={'text-sm font-semobold text-amber-600 py-3 space-x-2'}>
                                            <Link to={'login'} className={'font-lighter text-sm text-gray-700'}>Kỳ
                                                ảo</Link>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        </>
    )
}