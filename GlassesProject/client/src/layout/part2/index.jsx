import React, { useState } from 'react'
import "./index.scss"
import { Carousel} from 'antd';

const contentStyle = {
  height: '98.5vh',
  color: '#fff',
  lineHeight: '98.5vh',
  textAlign: 'center',
  background: 'cover',
};
const Part2 = () => {

  return (
    <>
 <div className='carusel'>

      <Carousel autoplay>
        <div>
          <img style={contentStyle} src="https://blueskytechmage.com/next_minimog/media/revslider/h_glasses_slide_01.jpg" alt="" />
        </div>
        <div>
            <img style={contentStyle} src="https://blueskytechmage.com/next_minimog/media/revslider/h_glasses_slide_02.jpg" alt="" />
        </div>
        <div>
            <img style={contentStyle} src="https://blueskytechmage.com/next_minimog/media/revslider/h_glasses_slide_03.jpg" alt="" />
        </div>
      </Carousel>
    </div>

    <div className='cardlar'>
<div className='sekil1'>
  <img src="https://blueskytechmage.com/next_minimog/media/catalog/category/thumbnail/h_glasses_cat_01-520x310.jpg" alt="" />
  <button>SUNGLASSES</button>
</div>

<div className='sekil2'>
<img src="https://blueskytechmage.com/next_minimog/media/catalog/category/thumbnail/h_glasses_cat_02-520x310.jpg" alt="" />
<button>NEW ARRIVALS</button>
</div>

<div className='sekil3'>
<img src="https://blueskytechmage.com/next_minimog/media/catalog/category/thumbnail/h_glasses_cat_03-520x310.jpg" alt="" />
<button>GALS BESTSELLERS</button>
</div>
    </div>
    </>
   
  
  )
}

export default Part2
