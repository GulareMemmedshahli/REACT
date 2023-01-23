import { Collapse } from 'antd'
import React from 'react'
import "./index.scss"

const { Panel } = Collapse;
const text = `
Anim pariatur cliche reprehenderit, enim 

`;

const Legal = () => {
    const onChange = (key) => {
        console.log(key);
      };
  return (
    <div className='legal'>
        <div className='sol'>
            <img src="https://preview.colorlib.com/theme/notary/images/atty_2.jpg.webp" alt="" />
        </div>
        <div className='sag'>
<div className='sag1'>
    <h2>We Have Legal Solutions</h2>
    <div className='pler'>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam reprehenderit perspiciatis iste culpa consequuntur consequatur eum, voluptatum, quod deserunt maiores?</p>
    <p>Modi perferendis ipsa ducimus consequuntur excepturi autem, numquam facere aperiam iste nam molestias provident consectetur molestiae voluptatibus ipsum. Fugiat, quas.</p>
    </div>
   
   <div className='alt'>
   <div className='altliq'>
    <i class="fa-solid fa-check"></i>
    Aperiam iste nam molestias
    </div>

    <div className='altliq'>
    <i class="fa-solid fa-check"></i>
    Modi perferendis ipsa
    </div>

    <div className='altliq'>
    <i class="fa-solid fa-check"></i>
    Perspic iste culpa
    </div>
   </div>
    
</div>

<div className='sag2'>
<Collapse defaultActiveKey={['1']} onChange={onChange}>
      <Panel header="How to download and register?" key="1">
        <p>{text}</p>
      </Panel>
      <Panel header="How to create your paypal account?" key="2">
        <p>{text}</p>
      </Panel>
      <Panel header="How to link your paypal and bank account?" key="3">
        <p>{text}</p>
      </Panel>
    </Collapse>
</div>
        </div>
    </div>
  )
}

export default Legal