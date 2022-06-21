import Banner1 from '../banner1.png'
import HuyenLuc from '../huyeluc.png'

export const Home = (props) => {
    return (
        <>
            <div className={'py-20'}>
                <img className="object-cover" src={Banner1}/>
                <div className={"bg-white rounded-3xl shadow sm:px-0 md:px-16 lg:px24 xl:px-48 px-auto mx-auto"}>
                    <div className={"grid grid-cols-1 gap-1 p-2"}>
                        <h1 className={"font-bold"}>Biên tập viên đề cử</h1>
                    </div>
                    <div className={"grid grid-cols-1 gap-1 sm:grid-cols-2 sm:gap-2 md:grid-cols-2 md:gap-2 lg:grid-cols-3 lg:gap-3 p-2"}>
                        <div className={'flex justify-between space-x-2 p-2 rounded-2xl shadow-xl'}>
                            <div>
                                <img src={HuyenLuc}/>
                            </div>
                            <div className={'justify-center text-sm'}>
                                <h6 className={'font-bold'}>Huyen Luc</h6>
                                <p className={'text-sm text-justify'}>Xuyên qua toàn dân ngự thú thời đại, Tô Dịch phát hiện mình sủng thú lại có thể lựa chọn</p>
                                <div className={'flex justify-between'}>
                                    <p className={'font-bold'}><i className="fas fa-user-edit mr-2"></i>Huyen vu</p>
                                    <p className={'border border-yellow-600 text-yellow-600'}>Huyen ao</p>
                                </div>
                            </div>
                        </div>
                        <div className={'flex justify-between space-x-2 p-2 rounded-2xl shadow-xl'}>
                            <div>
                                <img src={HuyenLuc}/>
                            </div>
                            <div className={'justify-center text-sm'}>
                                <h6 className={'font-bold'}>Huyen Luc</h6>
                                <p className={'text-sm text-justify'}>Xuyên qua toàn dân ngự thú thời đại, Tô Dịch phát hiện mình sủng thú lại có thể lựa chọn</p>
                                <div className={'flex justify-between'}>
                                    <p className={'font-bold'}><i className="fas fa-user-edit mr-2"></i>Huyen vu</p>
                                    <p className={'border border-yellow-600 text-yellow-600'}>Huyen ao</p>
                                </div>
                            </div>
                        </div>
                        <div className={'flex justify-between space-x-2 p-2 rounded-2xl shadow-xl'}>
                            <div>
                                <img src={HuyenLuc}/>
                            </div>
                            <div className={'justify-center text-sm'}>
                                <h6 className={'font-bold'}>Huyen Luc</h6>
                                <p className={'text-sm text-justify'}>Xuyên qua toàn dân ngự thú thời đại, Tô Dịch phát hiện mình sủng thú lại có thể lựa chọn</p>
                                <div className={'flex justify-between'}>
                                    <p className={'font-bold'}><i className="fas fa-user-edit mr-2"></i>Huyen vu</p>
                                    <p className={'border border-yellow-600 text-yellow-600'}>Huyen ao</p>
                                </div>
                            </div>
                        </div>
                        <div className={'flex justify-between space-x-2 p-2 rounded-2xl shadow-xl'}>
                            <div>
                                <img src={HuyenLuc}/>
                            </div>
                            <div className={'justify-center text-sm'}>
                                <h6 className={'font-bold'}>Huyen Luc</h6>
                                <p className={'text-sm text-justify'}>Xuyên qua toàn dân ngự thú thời đại, Tô Dịch phát hiện mình sủng thú lại có thể lựa chọn</p>
                                <div className={'flex justify-between'}>
                                    <p className={'font-bold'}><i className="fas fa-user-edit mr-2"></i>Huyen vu</p>
                                    <p className={'border border-yellow-600 text-yellow-600'}>Huyen ao</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={"grid grid-cols-1 gap-0 p-2 pt-8"}>
                        <p className={"font-bold p-0 m-0 mb-4"}>Mới cập nhật</p>
                        <table className="table-fixed bg-gray-200 rounded-2xl overflow-x-scroll scroll-auto">
                            <tbody className={'overflow-x-scroll scroll-auto'}>
                            <tr className={"hover:bg-gray-100"}>
                                <td className={"p-2 text-sm text-gray-500"}>[Tiên Hiệp]</td>
                                <td className={"p-2 font-bold text-sm"}>Huyền Lục</td>
                                <td className={"p-2 text-sm"}>Chương 1997: Tung tích Thượng Dao Thiên Trì</td>
                                <td className={"p-2 text-sm"}>Vệ Huyền Hy</td>
                                <td className={"p-2 text-sm text-gray-500"}>28 phút trước</td>
                            </tr>
                            <tr className={"hover:bg-gray-100"}>
                                <td className={"p-2 text-sm text-gray-500"}>[Tiên Hiệp]</td>
                                <td className={"p-2 font-bold text-sm"}>Huyền Lục</td>
                                <td className={"p-2 text-sm"}>Chương 1997: Tung tích Thượng Dao Thiên Trì</td>
                                <td className={"p-2 text-sm"}>Vệ Huyền Hy</td>
                                <td className={"p-2 text-sm text-gray-500"}>28 phút trước</td>
                            </tr>
                            <tr className={"hover:bg-gray-100"}>
                                <td className={"p-2 text-sm text-gray-500"}>[Tiên Hiệp]</td>
                                <td className={"p-2 font-bold text-sm"}>Huyền Lục</td>
                                <td className={"p-2 text-sm"}>Chương 1997: Tung tích Thượng Dao Thiên Trì</td>
                                <td className={"p-2 text-sm"}>Vệ Huyền Hy</td>
                                <td className={"p-2 text-sm text-gray-500"}>28 phút trước</td>
                            </tr>
                            <tr className={"hover:bg-gray-100"}>
                                <td className={"p-2 text-sm text-gray-500"}>[Tiên Hiệp]</td>
                                <td className={"p-2 font-bold text-sm"}>Huyền Lục</td>
                                <td className={"p-2 text-sm"}>Chương 1997: Tung tích Thượng Dao Thiên Trì</td>
                                <td className={"p-2 text-sm"}>Vệ Huyền Hy</td>
                                <td className={"p-2 text-sm text-gray-500"}>28 phút trước</td>
                            </tr>
                            <tr className={"hover:bg-gray-100"}>
                                <td className={"p-2 text-sm text-gray-500"}>[Tiên Hiệp]</td>
                                <td className={"p-2 font-bold text-sm"}>Huyền Lục</td>
                                <td className={"p-2 text-sm"}>Chương 1997: Tung tích Thượng Dao Thiên Trì</td>
                                <td className={"p-2 text-sm"}>Vệ Huyền Hy</td>
                                <td className={"p-2 text-sm text-gray-500"}>28 phút trước</td>
                            </tr>
                            <tr className={"hover:bg-gray-100"}>
                                <td className={"p-2 text-sm text-gray-500"}>[Tiên Hiệp]</td>
                                <td className={"p-2 font-bold text-sm"}>Huyền Lục</td>
                                <td className={"p-2 text-sm"}>Chương 1997: Tung tích Thượng Dao Thiên Trì</td>
                                <td className={"p-2 text-sm"}>Vệ Huyền Hy</td>
                                <td className={"p-2 text-sm text-gray-500"}>28 phút trước</td>
                            </tr>
                            <tr className={"hover:bg-gray-100"}>
                                <td className={"p-2 text-sm text-gray-500"}>[Tiên Hiệp]</td>
                                <td className={"p-2 font-bold text-sm"}>Huyền Lục</td>
                                <td className={"p-2 text-sm"}>Chương 1997: Tung tích Thượng Dao Thiên Trì</td>
                                <td className={"p-2 text-sm"}>Vệ Huyền Hy</td>
                                <td className={"p-2 text-sm text-gray-500"}>28 phút trước</td>
                            </tr>

                            <tr className={"hover:bg-gray-100"}>
                                <td className={"p-2 text-sm text-gray-500"}>[Tiên Hiệp]</td>
                                <td className={"p-2 font-bold text-sm"}>Huyền Lục</td>
                                <td className={"p-2 text-sm"}>Chương 1997: Tung tích Thượng Dao Thiên Trì</td>
                                <td className={"p-2 text-sm"}>Vệ Huyền Hy</td>
                                <td className={"p-2 text-sm text-gray-500"}>28 phút trước</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}