import Banner1 from '../banner1.png'
import HuyenLuc from '../huyeluc.png'
import {Link} from "react-router-dom";

export const Home = (props) => {
    return (
        <>
            <div className={'py-20 grid'}>
                <img className="object-cover" src={Banner1}/>
                <div className={"bg-white rounded-3xl shadow sm:px-0 px-auto mx-auto"}>
                    <div className={"grid grid-cols-1 gap-1 p-2"}>
                        <h1 className={"font-bold text-center"}>Biên tập viên đề cử</h1>
                    </div>
                    <div
                        className={"w-max grid grid-cols-1 gap-1 sm:grid-cols-2 sm:gap-2 md:grid-cols-2 md:gap-2 lg:grid-cols-3 lg:gap-3 p-2 mx-auto"}>
                        <div className={'flex justify-between space-x-2 p-2 rounded-lg shadow-lg w-96'}>
                            <div className={'flex justify-between items-center space-x-2 text-sm'}>
                                <Link to={'../detail'}><img src={HuyenLuc} className={'object-cover w-20'}/></Link>
                                <div className={'mt-0 space-y-2 w-72'}>
                                    <strong className={'text-sm content-book clam clam-1'}><Link to={"../detail"}>Trọng Sinh Vô Địch</Link></strong>
                                    <p className={'text-sm w-68 clam clam-2'}> Trùng sinh đến cấp ba thời kỳ Dương Đại còn
                                        không tới kịp cao hứng liền bị vội vã tiến vào 【 Thâm Vực 】 bên trong.Đây là một
                                        cái tiên thần tái hiện, yêu ma ăn lục phàm nhân thế giới!Thần Thoại thức tỉnh,
                                        động thực vật hóa thành yêu ma, dị giới quỷ quái xâm lấn, thân là Địa Cầu chúa
                                        tể nhân loại địa vị tràn ngập nguy hiểm, mà lúc này thần bí 【 Thâm Vực 】 dùng
                                        game giả lập phương thức buông xuống Địa Cầu, mang cho nhân loại hi vọng.Dương
                                        Đại tiến vào Thâm Vực thu hoạch được chưởng khống hồn phách năng lực, căn cứ hèn
                                        mọn phát dục lý niệm, hắn muốn làm một vị ngự hồn triệu hoán sư, chuẩn bị trước
                                        tổ xây một nhánh hồn phách đại quân, lại thăm dò Thâm Vực.Thiên tư vô song, tung
                                        hoành vương triều tuyệt đại thiên kiêu!Bừa bãi tàn phá nhân gian, yêu uy thao
                                        thiên cái thế Yêu Vương!Một tay che trời, hoành ép chính đạo Ma đạo tổ sư!Làm
                                        Dương Đại hồn phách đại quân xuất hiện càng ngày càng nhiều lệnh lưỡng giới
                                        chúng sinh khiếp sợ khủng bố tên về sau, hắn cũng thu được uy chấn lưỡng giới
                                        tôn xưng.Hồn Chủ!**Cảnh giới: Tụ Khí, Tâm Toàn, Linh Chiếu, Không Vô, Luyện
                                        Hồn. . . </p>
                                    <div className={'flex justify-between items-center'}>
                                        <div className={'content-author clam clam-1'}>
                                            <Link to={'../detail'} className={'space-x-2'}><span className={'fa-solid fa-user-edit'}></span>
                                            <strong className={'text-sm'}>Hạ Vô Ngân</strong></Link>
                                        </div>
                                        <Link to={'../category'}><div className={'border text-xs px-2 py-1 clam clam-1 w-24 text-center'}>Tiên Hiệp</div></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={'flex justify-between space-x-2 p-2 rounded-lg shadow-lg w-96'}>
                            <div className={'flex justify-between items-center space-x-2 text-sm'}>
                                <Link to={'../detail'}><img src={HuyenLuc} className={'object-cover w-20'}/></Link>
                                <div className={'mt-0 space-y-2 w-72'}>
                                    <strong className={'text-sm content-book clam clam-1'}><Link to={"../detail"}>Trọng Sinh Vô Địch</Link></strong>
                                    <p className={'text-sm w-68 clam clam-2'}> Trùng sinh đến cấp ba thời kỳ Dương Đại còn
                                        không tới kịp cao hứng liền bị vội vã tiến vào 【 Thâm Vực 】 bên trong.Đây là một
                                        cái tiên thần tái hiện, yêu ma ăn lục phàm nhân thế giới!Thần Thoại thức tỉnh,
                                        động thực vật hóa thành yêu ma, dị giới quỷ quái xâm lấn, thân là Địa Cầu chúa
                                        tể nhân loại địa vị tràn ngập nguy hiểm, mà lúc này thần bí 【 Thâm Vực 】 dùng
                                        game giả lập phương thức buông xuống Địa Cầu, mang cho nhân loại hi vọng.Dương
                                        Đại tiến vào Thâm Vực thu hoạch được chưởng khống hồn phách năng lực, căn cứ hèn
                                        mọn phát dục lý niệm, hắn muốn làm một vị ngự hồn triệu hoán sư, chuẩn bị trước
                                        tổ xây một nhánh hồn phách đại quân, lại thăm dò Thâm Vực.Thiên tư vô song, tung
                                        hoành vương triều tuyệt đại thiên kiêu!Bừa bãi tàn phá nhân gian, yêu uy thao
                                        thiên cái thế Yêu Vương!Một tay che trời, hoành ép chính đạo Ma đạo tổ sư!Làm
                                        Dương Đại hồn phách đại quân xuất hiện càng ngày càng nhiều lệnh lưỡng giới
                                        chúng sinh khiếp sợ khủng bố tên về sau, hắn cũng thu được uy chấn lưỡng giới
                                        tôn xưng.Hồn Chủ!**Cảnh giới: Tụ Khí, Tâm Toàn, Linh Chiếu, Không Vô, Luyện
                                        Hồn. . . </p>
                                    <div className={'flex justify-between items-center'}>
                                        <div className={'content-author clam clam-1'}>
                                            <Link to={'../detail'} className={'space-x-2'}><span className={'fa-solid fa-user-edit'}></span>
                                                <strong className={'text-sm'}>Hạ Vô Ngân</strong></Link>
                                        </div>
                                        <Link to={'../category'}><div className={'border text-xs px-2 py-1 clam clam-1 w-24 text-center'}>Tiên Hiệp</div></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={'flex justify-between space-x-2 p-2 rounded-lg shadow-lg w-96'}>
                            <div className={'flex justify-between items-center space-x-2 text-sm'}>
                                <Link to={'../detail'}><img src={HuyenLuc} className={'object-cover w-20'}/></Link>
                                <div className={'mt-0 space-y-2 w-72'}>
                                    <strong className={'text-sm content-book clam clam-1'}><Link to={"../detail"}>Trọng Sinh Vô Địch</Link></strong>
                                    <p className={'text-sm w-68 clam clam-2'}> Trùng sinh đến cấp ba thời kỳ Dương Đại còn
                                        không tới kịp cao hứng liền bị vội vã tiến vào 【 Thâm Vực 】 bên trong.Đây là một
                                        cái tiên thần tái hiện, yêu ma ăn lục phàm nhân thế giới!Thần Thoại thức tỉnh,
                                        động thực vật hóa thành yêu ma, dị giới quỷ quái xâm lấn, thân là Địa Cầu chúa
                                        tể nhân loại địa vị tràn ngập nguy hiểm, mà lúc này thần bí 【 Thâm Vực 】 dùng
                                        game giả lập phương thức buông xuống Địa Cầu, mang cho nhân loại hi vọng.Dương
                                        Đại tiến vào Thâm Vực thu hoạch được chưởng khống hồn phách năng lực, căn cứ hèn
                                        mọn phát dục lý niệm, hắn muốn làm một vị ngự hồn triệu hoán sư, chuẩn bị trước
                                        tổ xây một nhánh hồn phách đại quân, lại thăm dò Thâm Vực.Thiên tư vô song, tung
                                        hoành vương triều tuyệt đại thiên kiêu!Bừa bãi tàn phá nhân gian, yêu uy thao
                                        thiên cái thế Yêu Vương!Một tay che trời, hoành ép chính đạo Ma đạo tổ sư!Làm
                                        Dương Đại hồn phách đại quân xuất hiện càng ngày càng nhiều lệnh lưỡng giới
                                        chúng sinh khiếp sợ khủng bố tên về sau, hắn cũng thu được uy chấn lưỡng giới
                                        tôn xưng.Hồn Chủ!**Cảnh giới: Tụ Khí, Tâm Toàn, Linh Chiếu, Không Vô, Luyện
                                        Hồn. . . </p>
                                    <div className={'flex justify-between items-center'}>
                                        <div className={'content-author clam clam-1'}>
                                            <Link to={'../detail'} className={'space-x-2'}><span className={'fa-solid fa-user-edit'}></span>
                                                <strong className={'text-sm'}>Hạ Vô Ngân</strong></Link>
                                        </div>
                                        <Link to={'../category'}><div className={'border text-xs px-2 py-1 clam clam-1 w-24 text-center'}>Tiên Hiệp</div></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={'flex justify-between space-x-2 p-2 rounded-lg shadow-lg w-96'}>
                            <div className={'flex justify-between items-center space-x-2 text-sm'}>
                                <Link to={'../detail'}><img src={HuyenLuc} className={'object-cover w-20'}/></Link>
                                <div className={'mt-0 space-y-2 w-72'}>
                                    <strong className={'text-sm content-book clam clam-1'}><Link to={"../detail"}>Trọng Sinh Vô Địch</Link></strong>
                                    <p className={'text-sm w-68 clam clam-2'}> Trùng sinh đến cấp ba thời kỳ Dương Đại còn
                                        không tới kịp cao hứng liền bị vội vã tiến vào 【 Thâm Vực 】 bên trong.Đây là một
                                        cái tiên thần tái hiện, yêu ma ăn lục phàm nhân thế giới!Thần Thoại thức tỉnh,
                                        động thực vật hóa thành yêu ma, dị giới quỷ quái xâm lấn, thân là Địa Cầu chúa
                                        tể nhân loại địa vị tràn ngập nguy hiểm, mà lúc này thần bí 【 Thâm Vực 】 dùng
                                        game giả lập phương thức buông xuống Địa Cầu, mang cho nhân loại hi vọng.Dương
                                        Đại tiến vào Thâm Vực thu hoạch được chưởng khống hồn phách năng lực, căn cứ hèn
                                        mọn phát dục lý niệm, hắn muốn làm một vị ngự hồn triệu hoán sư, chuẩn bị trước
                                        tổ xây một nhánh hồn phách đại quân, lại thăm dò Thâm Vực.Thiên tư vô song, tung
                                        hoành vương triều tuyệt đại thiên kiêu!Bừa bãi tàn phá nhân gian, yêu uy thao
                                        thiên cái thế Yêu Vương!Một tay che trời, hoành ép chính đạo Ma đạo tổ sư!Làm
                                        Dương Đại hồn phách đại quân xuất hiện càng ngày càng nhiều lệnh lưỡng giới
                                        chúng sinh khiếp sợ khủng bố tên về sau, hắn cũng thu được uy chấn lưỡng giới
                                        tôn xưng.Hồn Chủ!**Cảnh giới: Tụ Khí, Tâm Toàn, Linh Chiếu, Không Vô, Luyện
                                        Hồn. . . </p>
                                    <div className={'flex justify-between items-center'}>
                                        <div className={'content-author clam clam-1'}>
                                            <Link to={'../detail'} className={'space-x-2'}><span className={'fa-solid fa-user-edit'}></span>
                                                <strong className={'text-sm'}>Hạ Vô Ngân</strong></Link>
                                        </div>
                                        <Link to={'../category'}><div className={'border text-xs px-2 py-1 clam clam-1 w-24 text-center'}>Tiên Hiệp</div></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={'flex justify-between space-x-2 p-2 rounded-lg shadow-lg w-96'}>
                            <div className={'flex justify-between items-center space-x-2 text-sm'}>
                                <Link to={'../detail'}><img src={HuyenLuc} className={'object-cover w-20'}/></Link>
                                <div className={'mt-0 space-y-2 w-72'}>
                                    <strong className={'text-sm content-book clam clam-1'}><Link to={"../detail"}>Trọng Sinh Vô Địch</Link></strong>
                                    <p className={'text-sm w-68 clam clam-2'}> Trùng sinh đến cấp ba thời kỳ Dương Đại còn
                                        không tới kịp cao hứng liền bị vội vã tiến vào 【 Thâm Vực 】 bên trong.Đây là một
                                        cái tiên thần tái hiện, yêu ma ăn lục phàm nhân thế giới!Thần Thoại thức tỉnh,
                                        động thực vật hóa thành yêu ma, dị giới quỷ quái xâm lấn, thân là Địa Cầu chúa
                                        tể nhân loại địa vị tràn ngập nguy hiểm, mà lúc này thần bí 【 Thâm Vực 】 dùng
                                        game giả lập phương thức buông xuống Địa Cầu, mang cho nhân loại hi vọng.Dương
                                        Đại tiến vào Thâm Vực thu hoạch được chưởng khống hồn phách năng lực, căn cứ hèn
                                        mọn phát dục lý niệm, hắn muốn làm một vị ngự hồn triệu hoán sư, chuẩn bị trước
                                        tổ xây một nhánh hồn phách đại quân, lại thăm dò Thâm Vực.Thiên tư vô song, tung
                                        hoành vương triều tuyệt đại thiên kiêu!Bừa bãi tàn phá nhân gian, yêu uy thao
                                        thiên cái thế Yêu Vương!Một tay che trời, hoành ép chính đạo Ma đạo tổ sư!Làm
                                        Dương Đại hồn phách đại quân xuất hiện càng ngày càng nhiều lệnh lưỡng giới
                                        chúng sinh khiếp sợ khủng bố tên về sau, hắn cũng thu được uy chấn lưỡng giới
                                        tôn xưng.Hồn Chủ!**Cảnh giới: Tụ Khí, Tâm Toàn, Linh Chiếu, Không Vô, Luyện
                                        Hồn. . . </p>
                                    <div className={'flex justify-between items-center'}>
                                        <div className={'content-author clam clam-1'}>
                                            <Link to={'../detail'} className={'space-x-2'}><span className={'fa-solid fa-user-edit'}></span>
                                                <strong className={'text-sm'}>Hạ Vô Ngân</strong></Link>
                                        </div>
                                        <Link to={'../category'}><div className={'border text-xs px-2 py-1 clam clam-1 w-24 text-center'}>Tiên Hiệp</div></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={'flex justify-between space-x-2 p-2 rounded-lg shadow-lg w-96'}>
                            <div className={'flex justify-between items-center space-x-2 text-sm'}>
                                <Link to={'../detail'}><img src={HuyenLuc} className={'object-cover w-20'}/></Link>
                                <div className={'mt-0 space-y-2 w-72'}>
                                    <strong className={'text-sm content-book clam clam-1'}><Link to={"../detail"}>Trọng Sinh Vô Địch</Link></strong>
                                    <p className={'text-sm w-68 clam clam-2'}> Trùng sinh đến cấp ba thời kỳ Dương Đại còn
                                        không tới kịp cao hứng liền bị vội vã tiến vào 【 Thâm Vực 】 bên trong.Đây là một
                                        cái tiên thần tái hiện, yêu ma ăn lục phàm nhân thế giới!Thần Thoại thức tỉnh,
                                        động thực vật hóa thành yêu ma, dị giới quỷ quái xâm lấn, thân là Địa Cầu chúa
                                        tể nhân loại địa vị tràn ngập nguy hiểm, mà lúc này thần bí 【 Thâm Vực 】 dùng
                                        game giả lập phương thức buông xuống Địa Cầu, mang cho nhân loại hi vọng.Dương
                                        Đại tiến vào Thâm Vực thu hoạch được chưởng khống hồn phách năng lực, căn cứ hèn
                                        mọn phát dục lý niệm, hắn muốn làm một vị ngự hồn triệu hoán sư, chuẩn bị trước
                                        tổ xây một nhánh hồn phách đại quân, lại thăm dò Thâm Vực.Thiên tư vô song, tung
                                        hoành vương triều tuyệt đại thiên kiêu!Bừa bãi tàn phá nhân gian, yêu uy thao
                                        thiên cái thế Yêu Vương!Một tay che trời, hoành ép chính đạo Ma đạo tổ sư!Làm
                                        Dương Đại hồn phách đại quân xuất hiện càng ngày càng nhiều lệnh lưỡng giới
                                        chúng sinh khiếp sợ khủng bố tên về sau, hắn cũng thu được uy chấn lưỡng giới
                                        tôn xưng.Hồn Chủ!**Cảnh giới: Tụ Khí, Tâm Toàn, Linh Chiếu, Không Vô, Luyện
                                        Hồn. . . </p>
                                    <div className={'flex justify-between items-center'}>
                                        <div className={'content-author clam clam-1'}>
                                            <Link to={'../detail'} className={'space-x-2'}><span className={'fa-solid fa-user-edit'}></span>
                                                <strong className={'text-sm'}>Hạ Vô Ngân</strong></Link>
                                        </div>
                                        <Link to={'../category'}><div className={'border text-xs px-2 py-1 clam clam-1 w-24 text-center'}>Tiên Hiệp</div></Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className={"grid grid-cols-1 gap-0 p-2 pt-8"}>
                        <p className={"font-bold p-0 m-0 mb-4 text-center"}>Mới cập nhật</p>
                        <div className={'overflow-scroll lg:overflow-hidden xl:overflow-hidden'}>
                            <table className="w-max w-fill mx-auto table-fixed bg-gray-100 rounded-lg overflow-x-scroll scroll-auto">
                                <tbody className={'overflow-x-scroll scroll-auto'}>
                                <tr className={"hover:bg-white"}>
                                    <td className={"p-2 text-sm text-gray-500"}>[Tiên Hiệp]</td>
                                    <td className={"p-2 font-bold text-sm"}>Huyền Lục Tinh</td>
                                    <td className={"p-2 text-sm"}>Chương 1997: Tung tích Thượng Dao Thiên Trì</td>
                                    <td className={"p-2 text-sm"}>Vệ Huyền Hy</td>
                                    <td className={"p-2 text-sm text-gray-500"}>28 phút trước</td>
                                </tr>
                                <tr className={"hover:bg-white"}>
                                    <td className={"p-2 text-sm text-gray-500"}>[Tiên Hiệp]</td>
                                    <td className={"p-2 font-bold text-sm"}>Huyền Lục</td>
                                    <td className={"p-2 text-sm"}>Chương 1997: Tung tích Thượng Dao Thiên Trì</td>
                                    <td className={"p-2 text-sm"}>Vệ Huyền Hy</td>
                                    <td className={"p-2 text-sm text-gray-500"}>28 phút trước</td>
                                </tr>
                                <tr className={"hover:bg-white"}>
                                    <td className={"p-2 text-sm text-gray-500"}>[Tiên Hiệp]</td>
                                    <td className={"p-2 font-bold text-sm"}>Huyền Lục</td>
                                    <td className={"p-2 text-sm"}>Chương 1997: Tung tích Thượng Dao Thiên Trì</td>
                                    <td className={"p-2 text-sm"}>Vệ Huyền Hy</td>
                                    <td className={"p-2 text-sm text-gray-500"}>28 phút trước</td>
                                </tr>
                                <tr className={"hover:bg-white"}>
                                    <td className={"p-2 text-sm text-gray-500"}>[Tiên Hiệp]</td>
                                    <td className={"p-2 font-bold text-sm"}>Huyền Lục</td>
                                    <td className={"p-2 text-sm"}>Chương 1997: Tung tích Thượng Dao Thiên Trì</td>
                                    <td className={"p-2 text-sm"}>Vệ Huyền Hy</td>
                                    <td className={"p-2 text-sm text-gray-500"}>28 phút trước</td>
                                </tr>
                                <tr className={"hover:bg-white"}>
                                    <td className={"p-2 text-sm text-gray-500"}>[Tiên Hiệp]</td>
                                    <td className={"p-2 font-bold text-sm"}>Huyền Lục</td>
                                    <td className={"p-2 text-sm"}>Chương 1997: Tung tích Thượng Dao Thiên Trì</td>
                                    <td className={"p-2 text-sm"}>Vệ Huyền Hy</td>
                                    <td className={"p-2 text-sm text-gray-500"}>28 phút trước</td>
                                </tr>
                                <tr className={"hover:bg-white"}>
                                    <td className={"p-2 text-sm text-gray-500"}>[Tiên Hiệp]</td>
                                    <td className={"p-2 font-bold text-sm"}>Huyền Lục</td>
                                    <td className={"p-2 text-sm"}>Chương 1997: Tung tích Thượng Dao Thiên Trì</td>
                                    <td className={"p-2 text-sm"}>Vệ Huyền Hy</td>
                                    <td className={"p-2 text-sm text-gray-500"}>28 phút trước</td>
                                </tr>
                                <tr className={"hover:bg-white"}>
                                    <td className={"p-2 text-sm text-gray-500"}>[Tiên Hiệp]</td>
                                    <td className={"p-2 font-bold text-sm"}>Huyền Lục</td>
                                    <td className={"p-2 text-sm"}>Chương 1997: Tung tích Thượng Dao Thiên Trì</td>
                                    <td className={"p-2 text-sm"}>Vệ Huyền Hy</td>
                                    <td className={"p-2 text-sm text-gray-500"}>28 phút trước</td>
                                </tr>

                                <tr className={"hover:bg-white"}>
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
                    <div className={"grid grid-cols-1 gap-1 p-2"}>
                        <h1 className={"font-bold text-center"}>Đánh giá cao</h1>
                    </div>
                    <div
                        className={"w-max grid grid-cols-1 gap-1 sm:grid-cols-2 sm:gap-2 md:grid-cols-2 md:gap-2 lg:grid-cols-3 lg:gap-3 p-2 mx-auto"}>
                        <div className={'flex justify-between space-x-2 p-2 rounded-lg shadow-lg border w-96'}>
                            <div className={'flex justify-between items-center space-x-2'}>
                                <Link to={'../detail'}><img src={HuyenLuc} className={'object-cover w-32'}/></Link>
                                <div className={'mt-0 space-y-2 text-left'}>
                                    <strong className={'text-sm content-book clam clam-1'}><Link to={'../detail'}>Trọng Sinh Vô Địch</Link></strong>
                                    <div className={'inline-flex'}>
                                        <div className={'space-x-2 flex items-center'}>
                                            <button className={'text-xs font-semibold px-2 border-gray-500 bg-gray-500 text-white rounded-xl p-1 '}>5.00</button>
                                            <p className={'font-semibold '}>9 đánh giá</p>
                                        </div>
                                    </div>
                                    <p className={'text-sm w-60 clam clam-2'}> Trùng sinh đến cấp ba thời kỳ Dương Đại
                                        còn
                                        không tới kịp cao hứng liền bị vội vã tiến vào 【 Thâm Vực 】 bên trong.Đây là một
                                        cái tiên thần tái hiện, yêu ma ăn lục phàm nhân thế giới!Thần Thoại thức tỉnh,
                                        động thực vật hóa thành yêu ma, dị giới quỷ quái xâm lấn, thân là Địa Cầu chúa
                                        tể nhân loại địa vị tràn ngập nguy hiểm, mà lúc này thần bí 【 Thâm Vực 】 dùng
                                        game giả lập phương thức buông xuống Địa Cầu, mang cho nhân loại hi vọng.Dương
                                        Đại tiến vào Thâm Vực thu hoạch được chưởng khống hồn phách năng lực, căn cứ hèn
                                        mọn phát dục lý niệm, hắn muốn làm một vị ngự hồn triệu hoán sư, chuẩn bị trước
                                        tổ xây một nhánh hồn phách đại quân, lại thăm dò Thâm Vực.Thiên tư vô song, tung
                                        hoành vương triều tuyệt đại thiên kiêu!Bừa bãi tàn phá nhân gian, yêu uy thao
                                        thiên cái thế Yêu Vương!Một tay che trời, hoành ép chính đạo Ma đạo tổ sư!Làm
                                        Dương Đại hồn phách đại quân xuất hiện càng ngày càng nhiều lệnh lưỡng giới
                                        chúng sinh khiếp sợ khủng bố tên về sau, hắn cũng thu được uy chấn lưỡng giới
                                        tôn xưng.Hồn Chủ!**Cảnh giới: Tụ Khí, Tâm Toàn, Linh Chiếu, Không Vô, Luyện
                                        Hồn. . . </p>
                                    <div className={'flex flex-col justify-between items-start space-y-1'}>
                                        <div className={'content-author clam clam-1'}>
                                            <Link to={'../detail'} className={'space-x-2'}><span className={'fa-solid fa-user-edit'}></span>
                                                <strong className={'text-sm'}>Hạ Vô Ngân</strong></Link>
                                        </div>
                                        <Link to={'../detail'}><div className={'border text-xs px-2 py-1 w-24 text-center'}>Tiên Hiệp</div></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={'flex justify-between space-x-2 p-2 rounded-lg shadow-lg border w-96'}>
                            <div className={'flex justify-between items-center space-x-2'}>
                                <Link to={'../detail'}><img src={HuyenLuc} className={'object-cover w-32'}/></Link>
                                <div className={'mt-0 space-y-2 text-left'}>
                                    <strong className={'text-sm content-book clam clam-1'}><Link to={'../detail'}>Trọng Sinh Vô Địch</Link></strong>
                                    <div className={'inline-flex'}>
                                        <div className={'space-x-2 flex items-center'}>
                                            <button className={'text-xs font-semibold px-2 border-gray-500 bg-gray-500 text-white rounded-xl p-1 '}>5.00</button>
                                            <p className={'font-semibold '}>9 đánh giá</p>
                                        </div>
                                    </div>
                                    <p className={'text-sm w-60 clam clam-2'}> Trùng sinh đến cấp ba thời kỳ Dương Đại
                                        còn
                                        không tới kịp cao hứng liền bị vội vã tiến vào 【 Thâm Vực 】 bên trong.Đây là một
                                        cái tiên thần tái hiện, yêu ma ăn lục phàm nhân thế giới!Thần Thoại thức tỉnh,
                                        động thực vật hóa thành yêu ma, dị giới quỷ quái xâm lấn, thân là Địa Cầu chúa
                                        tể nhân loại địa vị tràn ngập nguy hiểm, mà lúc này thần bí 【 Thâm Vực 】 dùng
                                        game giả lập phương thức buông xuống Địa Cầu, mang cho nhân loại hi vọng.Dương
                                        Đại tiến vào Thâm Vực thu hoạch được chưởng khống hồn phách năng lực, căn cứ hèn
                                        mọn phát dục lý niệm, hắn muốn làm một vị ngự hồn triệu hoán sư, chuẩn bị trước
                                        tổ xây một nhánh hồn phách đại quân, lại thăm dò Thâm Vực.Thiên tư vô song, tung
                                        hoành vương triều tuyệt đại thiên kiêu!Bừa bãi tàn phá nhân gian, yêu uy thao
                                        thiên cái thế Yêu Vương!Một tay che trời, hoành ép chính đạo Ma đạo tổ sư!Làm
                                        Dương Đại hồn phách đại quân xuất hiện càng ngày càng nhiều lệnh lưỡng giới
                                        chúng sinh khiếp sợ khủng bố tên về sau, hắn cũng thu được uy chấn lưỡng giới
                                        tôn xưng.Hồn Chủ!**Cảnh giới: Tụ Khí, Tâm Toàn, Linh Chiếu, Không Vô, Luyện
                                        Hồn. . . </p>
                                    <div className={'flex flex-col justify-between items-start space-y-1'}>
                                        <div className={'content-author clam clam-1'}>
                                            <Link to={'../detail'} className={'space-x-2'}><span className={'fa-solid fa-user-edit'}></span>
                                                <strong className={'text-sm'}>Hạ Vô Ngân</strong></Link>
                                        </div>
                                        <Link to={'../detail'}><div className={'border text-xs px-2 py-1 w-24 text-center'}>Tiên Hiệp</div></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={'flex justify-between space-x-2 p-2 rounded-lg shadow-lg border w-96'}>
                            <div className={'flex justify-between items-center space-x-2'}>
                                <Link to={'../detail'}><img src={HuyenLuc} className={'object-cover w-32'}/></Link>
                                <div className={'mt-0 space-y-2 text-left'}>
                                    <strong className={'text-sm content-book clam clam-1'}><Link to={'../detail'}>Trọng Sinh Vô Địch</Link></strong>
                                    <div className={'inline-flex'}>
                                        <div className={'space-x-2 flex items-center'}>
                                            <button className={'text-xs font-semibold px-2 border-gray-500 bg-gray-500 text-white rounded-xl p-1 '}>5.00</button>
                                            <p className={'font-semibold '}>9 đánh giá</p>
                                        </div>
                                    </div>
                                    <p className={'text-sm w-60 clam clam-2'}> Trùng sinh đến cấp ba thời kỳ Dương Đại
                                        còn
                                        không tới kịp cao hứng liền bị vội vã tiến vào 【 Thâm Vực 】 bên trong.Đây là một
                                        cái tiên thần tái hiện, yêu ma ăn lục phàm nhân thế giới!Thần Thoại thức tỉnh,
                                        động thực vật hóa thành yêu ma, dị giới quỷ quái xâm lấn, thân là Địa Cầu chúa
                                        tể nhân loại địa vị tràn ngập nguy hiểm, mà lúc này thần bí 【 Thâm Vực 】 dùng
                                        game giả lập phương thức buông xuống Địa Cầu, mang cho nhân loại hi vọng.Dương
                                        Đại tiến vào Thâm Vực thu hoạch được chưởng khống hồn phách năng lực, căn cứ hèn
                                        mọn phát dục lý niệm, hắn muốn làm một vị ngự hồn triệu hoán sư, chuẩn bị trước
                                        tổ xây một nhánh hồn phách đại quân, lại thăm dò Thâm Vực.Thiên tư vô song, tung
                                        hoành vương triều tuyệt đại thiên kiêu!Bừa bãi tàn phá nhân gian, yêu uy thao
                                        thiên cái thế Yêu Vương!Một tay che trời, hoành ép chính đạo Ma đạo tổ sư!Làm
                                        Dương Đại hồn phách đại quân xuất hiện càng ngày càng nhiều lệnh lưỡng giới
                                        chúng sinh khiếp sợ khủng bố tên về sau, hắn cũng thu được uy chấn lưỡng giới
                                        tôn xưng.Hồn Chủ!**Cảnh giới: Tụ Khí, Tâm Toàn, Linh Chiếu, Không Vô, Luyện
                                        Hồn. . . </p>
                                    <div className={'flex flex-col justify-between items-start space-y-1'}>
                                        <div className={'content-author clam clam-1'}>
                                            <Link to={'../detail'} className={'space-x-2'}><span className={'fa-solid fa-user-edit'}></span>
                                                <strong className={'text-sm'}>Hạ Vô Ngân</strong></Link>
                                        </div>
                                        <Link to={'../detail'}><div className={'border text-xs px-2 py-1 w-24 text-center'}>Tiên Hiệp</div></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={'flex justify-between space-x-2 p-2 rounded-lg shadow-lg border w-96'}>
                            <div className={'flex justify-between items-center space-x-2'}>
                                <Link to={'../detail'}><img src={HuyenLuc} className={'object-cover w-32'}/></Link>
                                <div className={'mt-0 space-y-2 text-left'}>
                                    <strong className={'text-sm content-book clam clam-1'}><Link to={'../detail'}>Trọng Sinh Vô Địch</Link></strong>
                                    <div className={'inline-flex'}>
                                        <div className={'space-x-2 flex items-center'}>
                                            <button className={'text-xs font-semibold px-2 border-gray-500 bg-gray-500 text-white rounded-xl p-1 '}>5.00</button>
                                            <p className={'font-semibold '}>9 đánh giá</p>
                                        </div>
                                    </div>
                                    <p className={'text-sm w-60 clam clam-2'}> Trùng sinh đến cấp ba thời kỳ Dương Đại
                                        còn
                                        không tới kịp cao hứng liền bị vội vã tiến vào 【 Thâm Vực 】 bên trong.Đây là một
                                        cái tiên thần tái hiện, yêu ma ăn lục phàm nhân thế giới!Thần Thoại thức tỉnh,
                                        động thực vật hóa thành yêu ma, dị giới quỷ quái xâm lấn, thân là Địa Cầu chúa
                                        tể nhân loại địa vị tràn ngập nguy hiểm, mà lúc này thần bí 【 Thâm Vực 】 dùng
                                        game giả lập phương thức buông xuống Địa Cầu, mang cho nhân loại hi vọng.Dương
                                        Đại tiến vào Thâm Vực thu hoạch được chưởng khống hồn phách năng lực, căn cứ hèn
                                        mọn phát dục lý niệm, hắn muốn làm một vị ngự hồn triệu hoán sư, chuẩn bị trước
                                        tổ xây một nhánh hồn phách đại quân, lại thăm dò Thâm Vực.Thiên tư vô song, tung
                                        hoành vương triều tuyệt đại thiên kiêu!Bừa bãi tàn phá nhân gian, yêu uy thao
                                        thiên cái thế Yêu Vương!Một tay che trời, hoành ép chính đạo Ma đạo tổ sư!Làm
                                        Dương Đại hồn phách đại quân xuất hiện càng ngày càng nhiều lệnh lưỡng giới
                                        chúng sinh khiếp sợ khủng bố tên về sau, hắn cũng thu được uy chấn lưỡng giới
                                        tôn xưng.Hồn Chủ!**Cảnh giới: Tụ Khí, Tâm Toàn, Linh Chiếu, Không Vô, Luyện
                                        Hồn. . . </p>
                                    <div className={'flex flex-col justify-between items-start space-y-1'}>
                                        <div className={'content-author clam clam-1'}>
                                            <Link to={'../detail'} className={'space-x-2'}><span className={'fa-solid fa-user-edit'}></span>
                                                <strong className={'text-sm'}>Hạ Vô Ngân</strong></Link>
                                        </div>
                                        <Link to={'../detail'}><div className={'border text-xs px-2 py-1 w-24 text-center'}>Tiên Hiệp</div></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={'flex justify-between space-x-2 p-2 rounded-lg shadow-lg border w-96'}>
                            <div className={'flex justify-between items-center space-x-2'}>
                                <Link to={'../detail'}><img src={HuyenLuc} className={'object-cover w-32'}/></Link>
                                <div className={'mt-0 space-y-2 text-left'}>
                                    <strong className={'text-sm content-book clam clam-1'}><Link to={'../detail'}>Trọng Sinh Vô Địch</Link></strong>
                                    <div className={'inline-flex'}>
                                        <div className={'space-x-2 flex items-center'}>
                                            <button className={'text-xs font-semibold px-2 border-gray-500 bg-gray-500 text-white rounded-xl p-1 '}>5.00</button>
                                            <p className={'font-semibold '}>9 đánh giá</p>
                                        </div>
                                    </div>
                                    <p className={'text-sm w-60 clam clam-2'}> Trùng sinh đến cấp ba thời kỳ Dương Đại
                                        còn
                                        không tới kịp cao hứng liền bị vội vã tiến vào 【 Thâm Vực 】 bên trong.Đây là một
                                        cái tiên thần tái hiện, yêu ma ăn lục phàm nhân thế giới!Thần Thoại thức tỉnh,
                                        động thực vật hóa thành yêu ma, dị giới quỷ quái xâm lấn, thân là Địa Cầu chúa
                                        tể nhân loại địa vị tràn ngập nguy hiểm, mà lúc này thần bí 【 Thâm Vực 】 dùng
                                        game giả lập phương thức buông xuống Địa Cầu, mang cho nhân loại hi vọng.Dương
                                        Đại tiến vào Thâm Vực thu hoạch được chưởng khống hồn phách năng lực, căn cứ hèn
                                        mọn phát dục lý niệm, hắn muốn làm một vị ngự hồn triệu hoán sư, chuẩn bị trước
                                        tổ xây một nhánh hồn phách đại quân, lại thăm dò Thâm Vực.Thiên tư vô song, tung
                                        hoành vương triều tuyệt đại thiên kiêu!Bừa bãi tàn phá nhân gian, yêu uy thao
                                        thiên cái thế Yêu Vương!Một tay che trời, hoành ép chính đạo Ma đạo tổ sư!Làm
                                        Dương Đại hồn phách đại quân xuất hiện càng ngày càng nhiều lệnh lưỡng giới
                                        chúng sinh khiếp sợ khủng bố tên về sau, hắn cũng thu được uy chấn lưỡng giới
                                        tôn xưng.Hồn Chủ!**Cảnh giới: Tụ Khí, Tâm Toàn, Linh Chiếu, Không Vô, Luyện
                                        Hồn. . . </p>
                                    <div className={'flex flex-col justify-between items-start space-y-1'}>
                                        <div className={'content-author clam clam-1'}>
                                            <Link to={'../detail'} className={'space-x-2'}><span className={'fa-solid fa-user-edit'}></span>
                                                <strong className={'text-sm'}>Hạ Vô Ngân</strong></Link>
                                        </div>
                                        <Link to={'../detail'}><div className={'border text-xs px-2 py-1 w-24 text-center'}>Tiên Hiệp</div></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={'flex justify-between space-x-2 p-2 rounded-lg shadow-lg border w-96'}>
                            <div className={'flex justify-between items-center space-x-2'}>
                                <Link to={'../detail'}><img src={HuyenLuc} className={'object-cover w-32'}/></Link>
                                <div className={'mt-0 space-y-2 text-left'}>
                                    <strong className={'text-sm content-book clam clam-1'}><Link to={'../detail'}>Trọng Sinh Vô Địch</Link></strong>
                                    <div className={'inline-flex'}>
                                        <div className={'space-x-2 flex items-center'}>
                                            <button className={'text-xs font-semibold px-2 border-gray-500 bg-gray-500 text-white rounded-xl p-1 '}>5.00</button>
                                            <p className={'font-semibold '}>9 đánh giá</p>
                                        </div>
                                    </div>
                                    <p className={'text-sm w-60 clam clam-2'}> Trùng sinh đến cấp ba thời kỳ Dương Đại
                                        còn
                                        không tới kịp cao hứng liền bị vội vã tiến vào 【 Thâm Vực 】 bên trong.Đây là một
                                        cái tiên thần tái hiện, yêu ma ăn lục phàm nhân thế giới!Thần Thoại thức tỉnh,
                                        động thực vật hóa thành yêu ma, dị giới quỷ quái xâm lấn, thân là Địa Cầu chúa
                                        tể nhân loại địa vị tràn ngập nguy hiểm, mà lúc này thần bí 【 Thâm Vực 】 dùng
                                        game giả lập phương thức buông xuống Địa Cầu, mang cho nhân loại hi vọng.Dương
                                        Đại tiến vào Thâm Vực thu hoạch được chưởng khống hồn phách năng lực, căn cứ hèn
                                        mọn phát dục lý niệm, hắn muốn làm một vị ngự hồn triệu hoán sư, chuẩn bị trước
                                        tổ xây một nhánh hồn phách đại quân, lại thăm dò Thâm Vực.Thiên tư vô song, tung
                                        hoành vương triều tuyệt đại thiên kiêu!Bừa bãi tàn phá nhân gian, yêu uy thao
                                        thiên cái thế Yêu Vương!Một tay che trời, hoành ép chính đạo Ma đạo tổ sư!Làm
                                        Dương Đại hồn phách đại quân xuất hiện càng ngày càng nhiều lệnh lưỡng giới
                                        chúng sinh khiếp sợ khủng bố tên về sau, hắn cũng thu được uy chấn lưỡng giới
                                        tôn xưng.Hồn Chủ!**Cảnh giới: Tụ Khí, Tâm Toàn, Linh Chiếu, Không Vô, Luyện
                                        Hồn. . . </p>
                                    <div className={'flex flex-col justify-between items-start space-y-1'}>
                                        <div className={'content-author clam clam-1'}>
                                            <Link to={'../detail'} className={'space-x-2'}><span className={'fa-solid fa-user-edit'}></span>
                                                <strong className={'text-sm'}>Hạ Vô Ngân</strong></Link>
                                        </div>
                                        <Link to={'../detail'}><div className={'border text-xs px-2 py-1 w-24 text-center'}>Tiên Hiệp</div></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={"grid grid-cols-1 gap-1 p-2"}>
                        <h1 className={"font-bold text-center"}>Mới đăng</h1>
                    </div>
                    <div
                        className={"w-max grid grid-cols-1 gap-1 sm:grid-cols-2 sm:gap-2 md:grid-cols-2 md:gap-2 lg:grid-cols-3 lg:gap-3 p-2 mx-auto"}>
                        <div className={'flex justify-between space-x-2 p-2 rounded-lg shadow-lg w-96'}>
                            <div className={'flex justify-between items-center space-x-2 text-sm'}>
                                <Link to={'../detail'}><img src={HuyenLuc} className={'object-cover w-20'}/></Link>
                                <div className={'mt-0 space-y-2 w-72'}>
                                    <strong className={'text-sm content-book clam clam-1'}><Link to={"../detail"}>Trọng Sinh Vô Địch</Link></strong>
                                    <p className={'text-sm w-68 clam clam-2'}> Trùng sinh đến cấp ba thời kỳ Dương Đại còn
                                        không tới kịp cao hứng liền bị vội vã tiến vào 【 Thâm Vực 】 bên trong.Đây là một
                                        cái tiên thần tái hiện, yêu ma ăn lục phàm nhân thế giới!Thần Thoại thức tỉnh,
                                        động thực vật hóa thành yêu ma, dị giới quỷ quái xâm lấn, thân là Địa Cầu chúa
                                        tể nhân loại địa vị tràn ngập nguy hiểm, mà lúc này thần bí 【 Thâm Vực 】 dùng
                                        game giả lập phương thức buông xuống Địa Cầu, mang cho nhân loại hi vọng.Dương
                                        Đại tiến vào Thâm Vực thu hoạch được chưởng khống hồn phách năng lực, căn cứ hèn
                                        mọn phát dục lý niệm, hắn muốn làm một vị ngự hồn triệu hoán sư, chuẩn bị trước
                                        tổ xây một nhánh hồn phách đại quân, lại thăm dò Thâm Vực.Thiên tư vô song, tung
                                        hoành vương triều tuyệt đại thiên kiêu!Bừa bãi tàn phá nhân gian, yêu uy thao
                                        thiên cái thế Yêu Vương!Một tay che trời, hoành ép chính đạo Ma đạo tổ sư!Làm
                                        Dương Đại hồn phách đại quân xuất hiện càng ngày càng nhiều lệnh lưỡng giới
                                        chúng sinh khiếp sợ khủng bố tên về sau, hắn cũng thu được uy chấn lưỡng giới
                                        tôn xưng.Hồn Chủ!**Cảnh giới: Tụ Khí, Tâm Toàn, Linh Chiếu, Không Vô, Luyện
                                        Hồn. . . </p>
                                    <div className={'flex justify-between items-center'}>
                                        <div className={'content-author clam clam-1'}>
                                            <Link to={'../detail'} className={'space-x-2'}><span className={'fa-solid fa-user-edit'}></span>
                                                <strong className={'text-sm'}>Hạ Vô Ngân</strong></Link>
                                        </div>
                                        <Link to={'../category'}><div className={'border text-xs px-2 py-1 clam clam-1 w-24 text-center'}>Tiên Hiệp</div></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={'flex justify-between space-x-2 p-2 rounded-lg shadow-lg w-96'}>
                            <div className={'flex justify-between items-center space-x-2 text-sm'}>
                                <Link to={'../detail'}><img src={HuyenLuc} className={'object-cover w-20'}/></Link>
                                <div className={'mt-0 space-y-2 w-72'}>
                                    <strong className={'text-sm content-book clam clam-1'}><Link to={"../detail"}>Trọng Sinh Vô Địch</Link></strong>
                                    <p className={'text-sm w-68 clam clam-2'}> Trùng sinh đến cấp ba thời kỳ Dương Đại còn
                                        không tới kịp cao hứng liền bị vội vã tiến vào 【 Thâm Vực 】 bên trong.Đây là một
                                        cái tiên thần tái hiện, yêu ma ăn lục phàm nhân thế giới!Thần Thoại thức tỉnh,
                                        động thực vật hóa thành yêu ma, dị giới quỷ quái xâm lấn, thân là Địa Cầu chúa
                                        tể nhân loại địa vị tràn ngập nguy hiểm, mà lúc này thần bí 【 Thâm Vực 】 dùng
                                        game giả lập phương thức buông xuống Địa Cầu, mang cho nhân loại hi vọng.Dương
                                        Đại tiến vào Thâm Vực thu hoạch được chưởng khống hồn phách năng lực, căn cứ hèn
                                        mọn phát dục lý niệm, hắn muốn làm một vị ngự hồn triệu hoán sư, chuẩn bị trước
                                        tổ xây một nhánh hồn phách đại quân, lại thăm dò Thâm Vực.Thiên tư vô song, tung
                                        hoành vương triều tuyệt đại thiên kiêu!Bừa bãi tàn phá nhân gian, yêu uy thao
                                        thiên cái thế Yêu Vương!Một tay che trời, hoành ép chính đạo Ma đạo tổ sư!Làm
                                        Dương Đại hồn phách đại quân xuất hiện càng ngày càng nhiều lệnh lưỡng giới
                                        chúng sinh khiếp sợ khủng bố tên về sau, hắn cũng thu được uy chấn lưỡng giới
                                        tôn xưng.Hồn Chủ!**Cảnh giới: Tụ Khí, Tâm Toàn, Linh Chiếu, Không Vô, Luyện
                                        Hồn. . . </p>
                                    <div className={'flex justify-between items-center'}>
                                        <div className={'content-author clam clam-1'}>
                                            <Link to={'../detail'} className={'space-x-2'}><span className={'fa-solid fa-user-edit'}></span>
                                                <strong className={'text-sm'}>Hạ Vô Ngân</strong></Link>
                                        </div>
                                        <Link to={'../category'}><div className={'border text-xs px-2 py-1 clam clam-1 w-24 text-center'}>Tiên Hiệp</div></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={'flex justify-between space-x-2 p-2 rounded-lg shadow-lg w-96'}>
                            <div className={'flex justify-between items-center space-x-2 text-sm'}>
                                <Link to={'../detail'}><img src={HuyenLuc} className={'object-cover w-20'}/></Link>
                                <div className={'mt-0 space-y-2 w-72'}>
                                    <strong className={'text-sm content-book clam clam-1'}><Link to={"../detail"}>Trọng Sinh Vô Địch</Link></strong>
                                    <p className={'text-sm w-68 clam clam-2'}> Trùng sinh đến cấp ba thời kỳ Dương Đại còn
                                        không tới kịp cao hứng liền bị vội vã tiến vào 【 Thâm Vực 】 bên trong.Đây là một
                                        cái tiên thần tái hiện, yêu ma ăn lục phàm nhân thế giới!Thần Thoại thức tỉnh,
                                        động thực vật hóa thành yêu ma, dị giới quỷ quái xâm lấn, thân là Địa Cầu chúa
                                        tể nhân loại địa vị tràn ngập nguy hiểm, mà lúc này thần bí 【 Thâm Vực 】 dùng
                                        game giả lập phương thức buông xuống Địa Cầu, mang cho nhân loại hi vọng.Dương
                                        Đại tiến vào Thâm Vực thu hoạch được chưởng khống hồn phách năng lực, căn cứ hèn
                                        mọn phát dục lý niệm, hắn muốn làm một vị ngự hồn triệu hoán sư, chuẩn bị trước
                                        tổ xây một nhánh hồn phách đại quân, lại thăm dò Thâm Vực.Thiên tư vô song, tung
                                        hoành vương triều tuyệt đại thiên kiêu!Bừa bãi tàn phá nhân gian, yêu uy thao
                                        thiên cái thế Yêu Vương!Một tay che trời, hoành ép chính đạo Ma đạo tổ sư!Làm
                                        Dương Đại hồn phách đại quân xuất hiện càng ngày càng nhiều lệnh lưỡng giới
                                        chúng sinh khiếp sợ khủng bố tên về sau, hắn cũng thu được uy chấn lưỡng giới
                                        tôn xưng.Hồn Chủ!**Cảnh giới: Tụ Khí, Tâm Toàn, Linh Chiếu, Không Vô, Luyện
                                        Hồn. . . </p>
                                    <div className={'flex justify-between items-center'}>
                                        <div className={'content-author clam clam-1'}>
                                            <Link to={'../detail'} className={'space-x-2'}><span className={'fa-solid fa-user-edit'}></span>
                                                <strong className={'text-sm'}>Hạ Vô Ngân</strong></Link>
                                        </div>
                                        <Link to={'../category'}><div className={'border text-xs px-2 py-1 clam clam-1 w-24 text-center'}>Tiên Hiệp</div></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={'flex justify-between space-x-2 p-2 rounded-lg shadow-lg w-96'}>
                            <div className={'flex justify-between items-center space-x-2 text-sm'}>
                                <Link to={'../detail'}><img src={HuyenLuc} className={'object-cover w-20'}/></Link>
                                <div className={'mt-0 space-y-2 w-72'}>
                                    <strong className={'text-sm content-book clam clam-1'}><Link to={"../detail"}>Trọng Sinh Vô Địch</Link></strong>
                                    <p className={'text-sm w-68 clam clam-2'}> Trùng sinh đến cấp ba thời kỳ Dương Đại còn
                                        không tới kịp cao hứng liền bị vội vã tiến vào 【 Thâm Vực 】 bên trong.Đây là một
                                        cái tiên thần tái hiện, yêu ma ăn lục phàm nhân thế giới!Thần Thoại thức tỉnh,
                                        động thực vật hóa thành yêu ma, dị giới quỷ quái xâm lấn, thân là Địa Cầu chúa
                                        tể nhân loại địa vị tràn ngập nguy hiểm, mà lúc này thần bí 【 Thâm Vực 】 dùng
                                        game giả lập phương thức buông xuống Địa Cầu, mang cho nhân loại hi vọng.Dương
                                        Đại tiến vào Thâm Vực thu hoạch được chưởng khống hồn phách năng lực, căn cứ hèn
                                        mọn phát dục lý niệm, hắn muốn làm một vị ngự hồn triệu hoán sư, chuẩn bị trước
                                        tổ xây một nhánh hồn phách đại quân, lại thăm dò Thâm Vực.Thiên tư vô song, tung
                                        hoành vương triều tuyệt đại thiên kiêu!Bừa bãi tàn phá nhân gian, yêu uy thao
                                        thiên cái thế Yêu Vương!Một tay che trời, hoành ép chính đạo Ma đạo tổ sư!Làm
                                        Dương Đại hồn phách đại quân xuất hiện càng ngày càng nhiều lệnh lưỡng giới
                                        chúng sinh khiếp sợ khủng bố tên về sau, hắn cũng thu được uy chấn lưỡng giới
                                        tôn xưng.Hồn Chủ!**Cảnh giới: Tụ Khí, Tâm Toàn, Linh Chiếu, Không Vô, Luyện
                                        Hồn. . . </p>
                                    <div className={'flex justify-between items-center'}>
                                        <div className={'content-author clam clam-1'}>
                                            <Link to={'../detail'} className={'space-x-2'}><span className={'fa-solid fa-user-edit'}></span>
                                                <strong className={'text-sm'}>Hạ Vô Ngân</strong></Link>
                                        </div>
                                        <Link to={'../category'}><div className={'border text-xs px-2 py-1 clam clam-1 w-24 text-center'}>Tiên Hiệp</div></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={'flex justify-between space-x-2 p-2 rounded-lg shadow-lg w-96'}>
                            <div className={'flex justify-between items-center space-x-2 text-sm'}>
                                <Link to={'../detail'}><img src={HuyenLuc} className={'object-cover w-20'}/></Link>
                                <div className={'mt-0 space-y-2 w-72'}>
                                    <strong className={'text-sm content-book clam clam-1'}><Link to={"../detail"}>Trọng Sinh Vô Địch</Link></strong>
                                    <p className={'text-sm w-68 clam clam-2'}> Trùng sinh đến cấp ba thời kỳ Dương Đại còn
                                        không tới kịp cao hứng liền bị vội vã tiến vào 【 Thâm Vực 】 bên trong.Đây là một
                                        cái tiên thần tái hiện, yêu ma ăn lục phàm nhân thế giới!Thần Thoại thức tỉnh,
                                        động thực vật hóa thành yêu ma, dị giới quỷ quái xâm lấn, thân là Địa Cầu chúa
                                        tể nhân loại địa vị tràn ngập nguy hiểm, mà lúc này thần bí 【 Thâm Vực 】 dùng
                                        game giả lập phương thức buông xuống Địa Cầu, mang cho nhân loại hi vọng.Dương
                                        Đại tiến vào Thâm Vực thu hoạch được chưởng khống hồn phách năng lực, căn cứ hèn
                                        mọn phát dục lý niệm, hắn muốn làm một vị ngự hồn triệu hoán sư, chuẩn bị trước
                                        tổ xây một nhánh hồn phách đại quân, lại thăm dò Thâm Vực.Thiên tư vô song, tung
                                        hoành vương triều tuyệt đại thiên kiêu!Bừa bãi tàn phá nhân gian, yêu uy thao
                                        thiên cái thế Yêu Vương!Một tay che trời, hoành ép chính đạo Ma đạo tổ sư!Làm
                                        Dương Đại hồn phách đại quân xuất hiện càng ngày càng nhiều lệnh lưỡng giới
                                        chúng sinh khiếp sợ khủng bố tên về sau, hắn cũng thu được uy chấn lưỡng giới
                                        tôn xưng.Hồn Chủ!**Cảnh giới: Tụ Khí, Tâm Toàn, Linh Chiếu, Không Vô, Luyện
                                        Hồn. . . </p>
                                    <div className={'flex justify-between items-center'}>
                                        <div className={'content-author clam clam-1'}>
                                            <Link to={'../detail'} className={'space-x-2'}><span className={'fa-solid fa-user-edit'}></span>
                                                <strong className={'text-sm'}>Hạ Vô Ngân</strong></Link>
                                        </div>
                                        <Link to={'../category'}><div className={'border text-xs px-2 py-1 clam clam-1 w-24 text-center'}>Tiên Hiệp</div></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={'flex justify-between space-x-2 p-2 rounded-lg shadow-lg w-96'}>
                            <div className={'flex justify-between items-center space-x-2 text-sm'}>
                                <Link to={'../detail'}><img src={HuyenLuc} className={'object-cover w-20'}/></Link>
                                <div className={'mt-0 space-y-2 w-72'}>
                                    <strong className={'text-sm content-book clam clam-1'}><Link to={"../detail"}>Trọng Sinh Vô Địch</Link></strong>
                                    <p className={'text-sm w-68 clam clam-2'}> Trùng sinh đến cấp ba thời kỳ Dương Đại còn
                                        không tới kịp cao hứng liền bị vội vã tiến vào 【 Thâm Vực 】 bên trong.Đây là một
                                        cái tiên thần tái hiện, yêu ma ăn lục phàm nhân thế giới!Thần Thoại thức tỉnh,
                                        động thực vật hóa thành yêu ma, dị giới quỷ quái xâm lấn, thân là Địa Cầu chúa
                                        tể nhân loại địa vị tràn ngập nguy hiểm, mà lúc này thần bí 【 Thâm Vực 】 dùng
                                        game giả lập phương thức buông xuống Địa Cầu, mang cho nhân loại hi vọng.Dương
                                        Đại tiến vào Thâm Vực thu hoạch được chưởng khống hồn phách năng lực, căn cứ hèn
                                        mọn phát dục lý niệm, hắn muốn làm một vị ngự hồn triệu hoán sư, chuẩn bị trước
                                        tổ xây một nhánh hồn phách đại quân, lại thăm dò Thâm Vực.Thiên tư vô song, tung
                                        hoành vương triều tuyệt đại thiên kiêu!Bừa bãi tàn phá nhân gian, yêu uy thao
                                        thiên cái thế Yêu Vương!Một tay che trời, hoành ép chính đạo Ma đạo tổ sư!Làm
                                        Dương Đại hồn phách đại quân xuất hiện càng ngày càng nhiều lệnh lưỡng giới
                                        chúng sinh khiếp sợ khủng bố tên về sau, hắn cũng thu được uy chấn lưỡng giới
                                        tôn xưng.Hồn Chủ!**Cảnh giới: Tụ Khí, Tâm Toàn, Linh Chiếu, Không Vô, Luyện
                                        Hồn. . . </p>
                                    <div className={'flex justify-between items-center'}>
                                        <div className={'content-author clam clam-1'}>
                                            <Link to={'../detail'} className={'space-x-2'}><span className={'fa-solid fa-user-edit'}></span>
                                                <strong className={'text-sm'}>Hạ Vô Ngân</strong></Link>
                                        </div>
                                        <Link to={'../category'}><div className={'border text-xs px-2 py-1 clam clam-1 w-24 text-center'}>Tiên Hiệp</div></Link>
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