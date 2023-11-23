import './App.css';

import Name from './Name';
import Price from './Price';
import Description from './Description';
import Image from './Image';
// import all my components
import UserImage from './UserImage';

import product from './product'; 
// j ai fais l import de mon object product
import {Card} from 'react-bootstrap';
import React from 'react'
import imga from './image/images.png' ;
// j ai fais la creation d'une fontion x qui affiche le message prompt , si tu ecris nom , il affiche hello with name sinon affiche hello there 
function App() {
  var firstName="" ;
const x=()=>{
var pr=prompt('Your name')
firstName=pr 
}
x()

  return (
    //a card that contains all components created
    <div className='container'>
    <Card className='product-card' >
      <Image  className='image-card'></Image>
      <div className='products'>
      <Name />
      <Price />
      <Description />
      </div>
    </Card>
     {/* a message below the card that says Hello, then my first name */}
    <p className="hello">Hello, {firstName ? firstName : "there"}!</p>
      {firstName && <UserImage />}
     
    </div>
  )
}

export default App