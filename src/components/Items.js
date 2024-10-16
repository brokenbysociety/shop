import React, { Component } from 'react'
import Item from './Item'

export class Items extends Component {
  render() {

    const array = [
      {
        id: 1, 
        title: 'Grayzz cap',
        price:14.99,
        img: 'truck cap.jpg',
        desc: 'text23',
      },
      {
        id: 2, 
        title: 'Dayzz cap',
        price:14.99,
        img: 'blue cap.jpg',
        desc: 'text23',
      },
      {
        id: 3,
        title: 'Grey blazer',
        price:34.99,
        img: 'grey blazer.jpg',
        desc: 'text23',
      },
      {
        id: 4,
        title: 'Blazer homeside',
        price:39.99,
        img: 'brown blazer.jpg',
        desc: 'text23',
      },
      {
        id: 5,
        title: 'T-shirt Darkness',
        price:19.99,
        img: 'black tshirt.jpg',
        desc: 'text23',
      },
      {
        id: 6, 
        title: 'T-shirt Angel',
        price:19.99,
        img: 'white tshirt.jpg',
        desc: 'text23',
      },
      {
        id: 7,
        title: 'Jeans Bounce',
        price:24.99,
        img: 'jeans.jpg',
        desc: 'text23',
      },
      {
        id: 8,
        title: 'Jeans Crapp',
        price:29.99,
        img: 'jeans2.jpg',
        desc: 'text23',
      },
      {
        id: 9,
        title: 'Air Horse 1',
        price:49.99,
        img: 'sneakers1.jpg',
        desc: 'text23',
      },
      {
        id: 10,
        title: 'Air Horse Deluxe',
        price:64.99,
        img: 'sneakers2.jpg',
        desc: 'text23',
      },
    ]

    return (
      <main>
        {array.map(el =>
          <Item key={el.id} item={el} />
        )}
      </main>
    )
  }
}

export default Items