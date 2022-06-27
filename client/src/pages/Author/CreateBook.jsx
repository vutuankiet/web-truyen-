import {Link} from "react-router-dom";
import {getAccessToken} from "../../API/AutoConfig";
import {useEffect, useRef, useState} from "react";
import {get_all_Categories} from "../../API/CategoriesAPI";
import {get_all_tags} from "../../API/TagsAPI";
import {create_book} from "../../API/BooksAPI";

export const CreateBook = () => {

    const [categories, setCategories] = useState([])
    const [tags, setTags] = useState([])
    const [bookTitle, setBookTitle] = useState('')
    const [bookDecrible, setBookDecrible] = useState('')
    const [bookCategor, setBookCategory] = useState('')
    const [selectedTag, setSelectedTag] = useState([])
    const [acceptBox, setAcceptBox] = useState(false)
    const [loader, setloader] = useState(false)

    const validateForm =()=>{
        let regex = /^[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂẾưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ0-9\s\W|_]+$/;
        let re = regex.test(bookTitle, bookDecrible);
        return re;
    }
    const handleCreateBook = async (e) => {
        setloader(c=>!c);
        if(validateForm())
        {
            if (acceptBox) {

                if(bookTitle ==='' || bookDecrible ==='' || bookCategor ==='' || selectedTag.length <= 0)
                {
                    setTimeout(() => {
                        alert('Vui lòng không để trống!')
                        window.location.assign(window.location.href)
                    }, "2000")
                }
                if(bookTitle ===''){
                    setTimeout(() => {
                        alert('Vui lòng không để trống tên truyện!')
                        window.location.assign(window.location.href)
                    }, "2000")
                }
                if(bookDecrible ===''){
                    setTimeout(() => {
                        alert('Vui lòng không để trống nội dung truyện!')
                        window.location.assign(window.location.href)
                    }, "2000")
                }
                else if (bookCategor ===''){
                    setTimeout(() => {
                        alert('Vui lòng không để trống thể loại truyện!')
                        window.location.assign(window.location.href)
                    }, "2000")
                }
                else if(selectedTag.length <= 0)
                    setTimeout(() => {
                        alert('Vui lòng không để trống tag truyện!')
                        window.location.assign(window.location.href)
                    }, "2000")
                else if(bookTitle !=='' || bookDecrible !=='' || bookCategor !==''){
                    const book = {
                        title: bookTitle,
                        describe: bookDecrible,
                        authorId: '62b6a010c740343be0a92393',
                        categoryId: bookCategor,
                        tags: selectedTag
                    }
                    let res = await create_book(book)
                    if (res) {
                        setTimeout(() => {
                            alert('Thêm thành công!');
                            window.location.assign(window.location.href);
                        }, "5000")
                    }
                }
            } else {
                setTimeout(() => {
                    alert('Vui lòng đồng ý các điều khoản!')
                    setloader(false);
                }, "2000")
            }
        }
        else{
            setTimeout(() => {
                alert('Lỗi! Thêm thất bại!')
                window.location.assign(window.location.href)
            }, "2000")
        }

    }
    const handleAddTag = (e) => {
        const [id, title] = [e.target.dataset?.id, e.target.dataset?.title]
        const hasExit = selectedTag.filter((val) => {
            return val.id === id
        })
        if (!hasExit.length > 0) {
            let new_tag = {id, title}
            let select = [...selectedTag];
            select.push(new_tag)
            mounted.current = true
            setSelectedTag(select)
        }
    }
    const handleRemoveTag = (e) => {
        const id = e.target.dataset?.id;

        let tags = selectedTag.filter((val) => {
            return val.id !== id
        })
        mounted.current = true;
        setSelectedTag(tags)
    }

    const mounted = useRef(true)

    useEffect(() => {
        const asyncBootstrap = async () => {
            if (mounted.current) {
                let res = await get_all_Categories();
                setCategories(res)
            }
        }
        asyncBootstrap()
        return () => {
            mounted.current = false
        }
    }, [categories])
    useEffect(() => {
        const asyncBootstrap = async () => {
            if (mounted.current) {
                let res = await get_all_tags();
                setTags(res)
            }
        }
        asyncBootstrap()
        return () => {
            mounted.current = false
        }
    }, [tags, selectedTag])

    return (
        <>

            <div className={`${loader?'block bg-loader':'hidden'}`}><div className={"loader"}></div></div>
            <div className={"grid p-5 space-y-4"}>
                <h1 className={"text-xl"}>Thêm truyện mới</h1>
                <p className={"text-sm"}>Bắt đầu sáng tạo thế giới của riêng bạn</p>

                <div className={"p-5 border rounded-xl bg-white"}>
                    <form className={'grid grid-cols-1 space-y-2'} onSubmit={(e)=>e.preventDefault()} action={'#'}
                          method={'post'}>
                        <label className={'text-xs'}>
                            Tên truyện
                        </label>
                        <input
                            className={'p-3 w-full border border-violet-500 rounded-lg bg-white text-sm shadow valid:border-green-500 focus:outline-0'}
                            type={'text'} name={'ten_truyen'} placeholder={'Tên truyện'}
                            onChange={(e) => setBookTitle(e.target.value)} required/>
                        <label className={'text-xs'}>
                            Giới Thiệu
                        </label>
                        <textarea
                            className={'p-3 w-full border border-violet-500 rounded-lg bg-white text-sm shadow max-h-60 min-h-[20%] valid:border-green-500 focus:outline-0'}
                            name={'gioi_thieu'} placeholder={'Giới thiệu'}
                            onChange={(e) => setBookDecrible(e.target.value)} required/>
                        <label className={'text-xs'}>
                            Thể Loại
                        </label>
                        <select
                            className={'p-3 w-full border border-violet-500 rounded-lg bg-white text-sm shadow valid:border-green-500 focus:outline-0'}
                            name={'the_loai'} onChange={(e) => setBookCategory(e.target.value)}>
                            <option value={''}>Chọn Thể Loại</option>
                            {categories ?
                                categories.map((val, key) => {
                                    return (<option key={key} value={val?._id}>{val?.title}</option>)
                                }) : ""
                            }
                        </select>

                        <label className={'text-xs'}>
                            Tag
                        </label>
                        <div className={'p-3 pb-1 w-full text-sm ml-0 pl-0 space-x-2'}>
                            <div className={'grid grid-cols-2 gap-x-4'}>
                                <div className={'border-2 border-violet-500 rounded-lg bg-white p-2 h-40 shadow'}>
                                    <div className={'flex justify-start flex-wrap space-x-1'}>
                                        {selectedTag.length > 0 ?
                                            selectedTag.map((val, key) => {
                                                return (
                                                    <div key={key}
                                                         className={'w-fit m-1 hover:relative border-2 border-violet-500 rounded-md'}
                                                    >
                                                        <span
                                                            onClick={handleRemoveTag} data-id={val?.id}
                                                            className={'w-fit text-center m-1 hover:cursor-pointer text-xs rounded-md font-semibold text-violet-500 '}>
                                                            {val?.title || "default tag"}
                                                        </span>
                                                    </div>

                                                )
                                            }) : <></>
                                        }
                                    </div>

                                </div>
                                <div className={'border-2 border-violet-500 rounded-lg bg-white p-2 h-40 shadow'}>
                                    <div className={'flex justify-start flex-wrap'}>
                                        {tags ?
                                            tags.map((val, key) => {
                                                return (
                                                    <span
                                                        className={'w-fit text-center p-1 border-2 m-1 border-violet-500 hover:cursor-pointer text-xs rounded-md font-semibold text-violet-500 shadow'}
                                                        onClick={handleAddTag} key={key} data-id={val?._id}
                                                        data-title={`${val?.title}`}>{val?.title}</span>)
                                            }) : ""
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={'px-3 py-1  w-full text-sm ml-0 pl-0 space-x-2'}>
                            <input type={"checkbox"}
                                   onChange={(e) => {
                                       setAcceptBox(e.target.checked);
                                   }}

                                   className={"border checked:bg-violet-500 text-left focus:outline-0"}/>
                            <label htmlFor={"dong_y"}>Tôi đồng ý với <Link to={'#'}><span className={'text-violet-500'}>Nội Quy Đăng Truyện</span></Link></label>
                        </div>
                        <button
                            onClick={handleCreateBook}
                            type={'button'}
                            className={'p-3 w-full border border-white text-white bg-violet-500 rounded-lg bg-white text-sm shadow'}>Đăng
                            Truyện
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}