import React, { Component } from 'react'
import Item from './Item'

const Items = () => {

    const array = [
      {
        id: 1, 
        title: 'Grayzz cap',
        price:14.99,
        img: 'truck cap.jpg',
        desc: 'This cap is a brand new outfit-thing, that often used to drive a long time road',
      },
      {
        id: 2, 
        title: 'Dayzz cap',
        price:14.99,
        img: 'blue cap.jpg',
        desc: 'Dayzz cap is a super modern way to show you to other world!',
      },
      {
        id: 3,
        title: 'Grey blazer',
        price:34.99,
        img: 'grey blazer.jpg',
        desc: 'Grey blazer is a classic piece of classic outfit',
      },
      {
        id: 4,
        title: 'Blazer homeside',
        price:39.99,
        img: 'brown blazer.jpg',
        desc: 'This blazer is a new look on the classic style of clothes. Show your unique',
      },
      {
        id: 5,
        title: 'T-shirt Darkness',
        price:19.99,
        img: 'black tshirt.jpg',
        desc: 'Darkness above all of us. Show the world your feeling of style',
      },
      {
        id: 6, 
        title: 'T-shirt Angel',
        price:19.99,
        img: 'white tshirt.jpg',
        desc: 'Be funny, be clever, be angel',
      },
      {
        id: 7,
        title: 'Jeans Bounce',
        price:24.99,
        img: 'jeans.jpg',
        desc: 'Classic jeans, that was made for comfortable movement',
      },
      {
        id: 8,
        title: 'Jeans Crapp',
        price:29.99,
        img: 'jeans2.jpg',
        desc: 'Jeans, jeans, jeans, and again, jeans',
      },
      {
        id: 9,
        title: 'Air Horse 1',
        price:49.99,
        img: 'sneakers1.jpg',
        desc: 'Official shoes of Travis Scott. Oh my gosh, that is so pretty one',
      },
      {
        id: 10,
        title: 'Air Horse Deluxe',
        price:64.99,
        img: 'sneakers2.jpg',
        desc: 'Unique version of the most our famous sneakers, if you want to be really stylish',
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


export default Items