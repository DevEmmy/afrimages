import Link from 'next/link'
import React from 'react'

const Categories = () => {
    const categories = [
        {
            url: "https://static.vecteezy.com/system/resources/thumbnails/032/467/163/small_2x/traditional-zulu-people-south-africa-within-an-african-tribe-photo.jpg",
            title: "People",
        },
        {
            url: "https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg",
            title: "Nature"
        },
        {
            url: "https://photos1.blogger.com/x/blogger/6449/2809/320/207294/africa.jpg",
            title: "Food & Drinks"
        },
        {
            url: "https://web.yorubaheritagetrails.com/wp-content/uploads/2023/12/867fe0f1741db4eeb695ae801ec77dd6.webp",
            title: "Animals"
        },
        {
            url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/View_from_Cairo_Tower_31march2007.jpg/1200px-View_from_Cairo_Tower_31march2007.jpg",
            title: "Urban/City"
        },
        {
            url: "https://img.freepik.com/free-vector/aboriginal-doodle-pattern_1409-3913.jpg",
            title: "Abstract"
        }
    ]
  return (
    <div className='flex flex-col gap-5'>
        <h2 className='text-[24px] font-semibold'>Categories</h2>
        <div className='flex gap-5 items-center'>
            {
                categories.map((item, i)=>{
                    return(
                        <Link href="/" style={{background: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${item.url})`, backgroundPosition: "center"}} className='h-[100px] rounded-xl flex-center w-full bg-contain bg-center text-white'>
                            {item.title}
                        </Link>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Categories