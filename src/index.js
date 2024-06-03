import React from 'react';
import ReactDOM from 'react-dom/client';
import "./style.css"

import image from "./Dogimages"

function DogImages(dog){
    return (
           
            <div className='dog__items'>
          <img src={dog.src} alt="img"  className='dog__image'></img>
          <p>{dog.name}</p>
          </div>
           
          
          
        
    )
  }
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <>
    <div className='mainbox'>
    {
    image.map((item)=>{
        return <DogImages src={item.src} name={item.name}></DogImages>
    })
}
    </div>

 </>
);


