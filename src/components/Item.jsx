import React, {useState } from 'react'

const Item = (props) => {

  const [visible, setVisible] = useState(false)

    return (
      <div className='item'>
        <img src={"./img/" + props.item.img} />
        <h2>{props.item.title}</h2>
        <button onClick={() => setVisible(!visible)}  className='add-to-cart'>more</button>
        <div className={visible? "popup" : "hidden"}>
        
        <p>{props.item.desc}</p>
        <b>${props.item.price}</b>
        </div>
      </div>
    )
  }



export default Item