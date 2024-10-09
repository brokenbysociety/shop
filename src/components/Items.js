import React, { Component } from 'react'
import Item from './Item'

export class Items extends Component {
  render() {

    const array = [
      {
        id: 1, 
        title: 'text',
        price:100,
        img: 'black tshirt.jpg',
        desc: 'text23',
      },
      {
        id: 2, title: 'text'
      },
      {
        id: 3, title: 'text'
      },
      {
        id: 4, title: 'text'
      },
      {
        id: 5, title: 'text'
      },
      {
        id: 6, title: 'text'
      },
      {
        id: 7, title: 'text'
      },
      {
        id: 8, title: 'text'
      },
      {
        id: 9, title: 'text'
      },
      {
        id: 10, title: 'text'
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