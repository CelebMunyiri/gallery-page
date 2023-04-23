import React, { useState } from "react";
import './Gallery.css'


import Img1 from './images/img1.jpg';
import Img2 from './images/img2.jpg';
import Img3 from './images/img3.jpg';
import Img4 from './images/img4.jpg';
import Img5 from './images/img5.jpg';

const Gallery=()=>{
    let data=[
        {
            id:1,
            imgSrc:Img1,
        },
        {
            id:2,
            imgSrc:Img2,
        },
        {id:3,imgSrc:Img3,},
        {id:4,imgSrc:Img4,},
        {id:5,imgSrc:Img5,}
    ]
    const [model,setModel]= useState(false);
const [tempimgSrc,setTempimgSrc]=useState('')
    const getImg=(imgSrc)=>{
        setTempimgSrc(imgSrc)
        setModel(true)
    }
return(
    <>
    <div className={model? 'model open': 'model'}>
<img src={tempimgSrc}/>

<button X className='CloseIcon' onClick={()=>setModel(false)}/>
    </div>



    <div className='gallery'>
    {data.map((item,index)=>{
        return(
            <div className='pics' key={index} onClick={()=>getImg(item.imgSrc)}>
<img src={item.imgSrc} style={{width:'100%'}} />
            </div>
        )
    })}
    </div>
    </>
   
)
}
export default Gallery