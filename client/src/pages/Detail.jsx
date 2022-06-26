import Banner1 from "../banner1.png";
import HuyenLuc from "../huyeluc.png";
import {Link} from "react-router-dom";

export const Detail = (props) => {
    return (
        <>
            <div className={'py-20 grid justify-center'}>
                <img className="object-cover" src={Banner1}/>
                <div className={"bg-white rounded-3xl shadow sm:px-0 px-auto mx-auto"}>
                    <div className={" mx-auto"}>
                        <div className={'flex justify-between md:space-x-2 space-x-0 rounded-lg shadow-lg'}>
                            <div className={'flex lg:flex-row flex-col justify-between items-center md:space-x-2 md:space-x-0 text-sm'}>
                                <div>
                                    <Link to={'../detail'}><img src={HuyenLuc} className={'object-cover w-60'}/></Link>
                                </div>
                                <div className={'mt-0 xl:space-y-8 lg:space-y-5 md:space-y-1 space-y-3 md:py-0 py-4 px-2'}>
                                    <div className={'md:mx-4 mx-0 text-center md:text-left'}>
                                        <strong className={'text-xl'}>Trọng
                                            Sinh Vô Địch<i className="fas fa-flag ml-2"></i></strong>
                                    </div>
                                    <div className={'flex flex-wrap justify-center md:justify-start space-y-2 space-x-4'}>
                                        <Link to={'../category'}>
                                            <div
                                                className={'btn-tag border border-gray-700 text-gray-700 rounded-2xl text-md px-4 py-1 text-center'}>Blasphemos
                                            </div>
                                        </Link>
                                        <Link to={'../category'}>
                                            <div
                                                className={'border border-red-600 text-red-600 rounded-2xl text-md px-4 py-1 text-center'}>Đang
                                                ra
                                            </div>
                                        </Link>
                                        <Link to={'../category'}>
                                            <div
                                                className={'border border-gray-500 text-gray-500 rounded-2xl text-md px-4 py-1 text-center'}>Đồng
                                                Nhân
                                            </div>
                                        </Link>
                                        <Link to={'../category'}>
                                            <div
                                                className={'border border-sky-500 text-sky-500 rounded-2xl text-md px-4 py-1 text-center'}>Nhiệt
                                                Huyết
                                            </div>
                                        </Link>
                                        <Link to={'../category'}>
                                            <div
                                                className={'border border-sky-500 text-sky-500 rounded-2xl text-md px-4 py-1 text-center'}>Chư
                                                Thiên Vạn Giới
                                            </div>
                                        </Link>
                                        <Link to={'../category'}>
                                            <div
                                                className={'border border-sky-500 text-sky-500 rounded-2xl text-md px-4 py-1 text-center'}>Góc
                                                Nhìn Nam
                                            </div>
                                        </Link>
                                        <Link to={'../category'}>
                                            <div
                                                className={'border border-sky-500 text-sky-500 rounded-2xl text-md px-4 py-1 text-center'}>Vô
                                                Hạn
                                            </div>
                                        </Link>
                                    </div>
                                    <div className={'flex justify-center text-center md:justify-start space-x-6 text-xl mx-4'}>
                                        <div className={''}>
                                            <strong>326</strong>
                                            <h2 className={'text-sm'}>Chuong</h2>
                                        </div>
                                        <div className={''}>
                                            <strong>326</strong>
                                            <h2 className={'text-sm'}>Chuong / Tuan</h2>
                                        </div>
                                        <div className={''}>
                                            <strong>326</strong>
                                            <h2 className={'text-sm'}>Luot doc</h2>
                                        </div>
                                        <div className={''}>
                                            <strong>326</strong>
                                            <h2 className={'text-sm'}>Cat giu</h2>
                                        </div>
                                    </div>
                                    <div className={'flex justify-center md:justify-start space-x-4 mx-4'}>
                                            <span>
                                            <i className="fas fa-star text-yellow-500"></i>
                                            <i className="fas fa-star text-yellow-500"></i>
                                            <i className="fas fa-star text-yellow-500"></i>
                                            <i className="fas fa-star text-yellow-500"></i>
                                            <i className="fas fa-star text-yellow-500"></i>
                                            </span>
                                            <p>4.98/5<span className={'ml-2'}>(20 đánh giá)</span></p>
                                    </div>
                                    <div className={'flex flex-wrap justify-center md:justify-start space-y-2 space-x-4'}>
                                        <Link to={'../category'}>
                                            <div
                                                className={'btn-tag border border-gray-400 text-white bg-gray-400 rounded-3xl md:text-xl text-sm md:px-6 px-3 py-1 text-center font-bold'}>Doc
                                                Truyen
                                            </div>
                                        </Link>
                                        <Link to={'../category'}>
                                            <div
                                                className={'border border-gray-400 text-white bg-gray-400 rounded-3xl md:text-xl md:px-6 text-sm px-3 py-1 text-center font-bold'}>Danh
                                                dau
                                            </div>
                                        </Link>
                                        <Link to={'../category'}>
                                            <div
                                                className={'border border-gray-400 text-white bg-gray-400 rounded-3xl md:text-xl md:px-6 text-sm px-3 py-1 text-center font-bold'}>De
                                                cu
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

