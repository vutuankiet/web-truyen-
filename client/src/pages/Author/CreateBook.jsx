import {Link} from "react-router-dom";

export const CreateBook =()=>{
    return(
        <>
        <div className={"grid p-5 space-y-2"}>
            <h1 className={"text-xl"}>Thêm truyện mới</h1>
            <p className={"text-sm"}>Bắt đầu sáng tạo thế giới của riêng bạn</p>
            <div className={"p-5 border rounded-xl bg-white"}>
                <form className={'grid grid-cols-1 space-y-2'} action={'#'} method={'get'}>
                    <label className={'text-xs'}>
                        Tên truyện
                    </label>
                    <input className={'p-3 w-full border border-violet-500 rounded-lg bg-white text-sm shadow valid:border-green-500 focus:outline-0'} type={'text'} name={'ten_truyen'} placeholder={'Tên truyện'} required/>
                    <label className={'text-xs'}>
                        Giới Thiệu
                    </label>
                    <textarea className={'p-3 w-full border border-violet-500 rounded-lg bg-white text-sm shadow max-h-60 min-h-[20%] valid:border-green-500 focus:outline-0'} name={'gioi_thieu'} placeholder={'Giới thiệu'} required/>
                    <label className={'text-xs'}>
                        Thể Loại
                    </label>
                    <select className={'p-3 w-full border border-violet-500 rounded-lg bg-white text-sm shadow valid:border-green-500 focus:outline-0'} name={'the_loai'} required>
                        <option value={'0'}>
                            Tiên Hiệp
                        </option>
                        <option value={'1'}>
                            Huyền Huyễn
                        </option>
                        <option value={'2'}>
                            Khoa Huyễn
                        </option>
                        <option value={'3'}>
                            Võng Du
                        </option>
                        <option value={'4'}>
                            Đô Thị
                        </option>
                        <option value={'5'}>
                            Đồng Nhân
                        </option>
                        <option value={'6'}>
                            Dã Sử
                        </option>
                        <option value={'7'}>
                            Cạnh Kỹ
                        </option>
                        <option value={'8'}>
                            Huyền Nghi
                        </option>
                        <option value={'9'}>
                            Kiếm Hiệp
                        </option>
                        <option value={'10'}>
                            Kỳ Ảo
                        </option>
                    </select>
                    <div className={'p-3 w-full text-sm ml-0 pl-0 space-x-2'}>
                        <input type={"checkbox"} id={"dong_y"} name={'dong-y'} className={"border checked:bg-violet-500 text-left focus:outline-0"} value={'0'}/>
                        <label htmlFor={"dong_y"}>Tôi đồng ý với <Link to={'#'}><span className={'text-violet-500'}>Nội Quy Đăng Truyện</span></Link></label>
                    </div>

                    <select data-placeholder="Choose tags ..." name="tags[]" multiple className="chosen-select">
                        <option value="Engineering">Engineering</option>
                        <option value="Carpentry">Carpentry</option>
                        <option value="Plumbing">Plumbing</option>
                        <option value="Electical">Electrical</option>
                        <option value="Mechanical">Mechanical</option>
                        <option value="HVAC">HVAC</option>
                    </select>

                    <button className={'p-3 w-full border border-white text-white bg-violet-500 rounded-lg bg-white text-sm shadow'}>Đăng Truyện</button>
                </form>
            </div>
        </div>
        </>
    );
}