import React, { useState } from 'react'
import './Gallery.css'
import CloseIcon from '@mui/icons-material/Close';

import img1 from './photos/img1.webp'
import img2 from './photos/img2.webp'
import img3 from './photos/img3.webp'
import img4 from './photos/img4.jpg'
import img5 from './photos/img5.jpeg'
import img6 from './photos/img6.avif'
import img7 from './photos/img7.jpg'
import img8 from './photos/img8.webp'
import img9 from './photos/img9.jpg'
import img10 from './photos/img10.jpeg'
import img11 from './photos/img11.jpg'
import img12 from './photos/img12.webp'
import img13 from './photos/img13.jpeg'
import img14 from './photos/img14.jpg'
import img15 from './photos/img15.jpg'
import img16 from './photos/img16.jpg'
import img17 from './photos/img17.webp'
import img18 from './photos/img18.jpg'
import img19 from './photos/img19.jpg'
import img20 from './photos/img20.jpg'
import img21 from './photos/img21.jpg'
import img22 from './photos/img22.jpg'
import img23 from './photos/img23.jpg'
import img24 from './photos/img24.webp'
import img25 from './photos/img25.jpg'


const Gallery = () => {
    let data =[
        {
            id:1,
            imgsrc:img1,
        },
        {
            id:2,
            imgsrc:img2,
        },
        {
            id:3,
            imgsrc:img3,
        },
        {
            id:4,
            imgsrc:img4,
        },
        {
            id:5,
            imgsrc:img5,
        },
        {
            id:6,
            imgsrc:img6,
        },
        {
            id:7,
            imgsrc:img7,
        },
        {
            id:8,
            imgsrc:img8,
        },
        {
            id:9,
            imgsrc:img9,
        },
        {
            id:10,
            imgsrc:img10,
        },
        {
            id:11,
            imgsrc:img11,
        },
        {
            id:12,
            imgsrc:img12,
        },
        {
            id:13,
            imgsrc:img13,
        },
        {
            id:14,
            imgsrc:img14,
        },
        {
            id:15,
            imgsrc:img15,
        },
        {
            id:16,
            imgsrc:img16,
        },
        {
            id:17,
            imgsrc:img17,
        },
        {
            id:18,
            imgsrc:img18,
        },
        {
            id:19,
            imgsrc:img19,
        },
        {
            id:20,
            imgsrc:img20,
        },
        {
            id:21,
            imgsrc:img21,
        },
        {
            id:22,
            imgsrc:img22,
        },
        {
            id:23,
            imgsrc:img23,
        },
        {
            id:24,
            imgsrc:img24,
        },
        {
            id:25,
            imgsrc:img25,
        },
        
    ]
    const [model, setModel]= useState(false);
    const [tempImgSrc, setTempImgSrc]= useState('');

    const getImg =(imgsrc)=>{
        setTempImgSrc(imgsrc)
        setModel(true)
     

    }
  return (
    <>
    <div className={model?  "model open":  "model"}>
        <img src={tempImgSrc} alt=''/>
        <CloseIcon onClick={()=>{setModel(false)}}/>
    </div>
    <div className='gallery'>
        {data.map((item,index)=>{
            return(
                <div className='photos' key={index} onClick={()=>getImg(item.imgsrc)}>
                    <img src={item.imgsrc} style={{width:'100%'}} alt=''/>
                </div>

            )

        })}
     
    </div>
    </>
  )
}

export default Gallery
