import React, {useState, useEffect} from 'react';
import style from "./style.css"
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

function App() {

  const listOfCards =[
    {title:'CARD #1', color: "green"},
    {title:'CARD #2', color: "brown"},
    {title:'CARD #3', color: "red"},
    {title:'CARD #4', color: "black"},
    {title:'CARD #5', color: "blue"},
    {title:'CARD #6', color: "purple"},
  
  ];


const listItems = listOfCards.map((l) =>      
<div className='card' key={l.title} style={{ backgroundColor: l.color}}> 
  {l.title}
  </div>
);



//if state increments then move to next div 
//we have list of divs- already mapped through
//we have useState, it increments and decrements 




const [count,setCount]=useState(0)


function prev() {

      setCount(prevCount=>prevCount-1)


}
function next() {
  setCount(prevCount=>prevCount+1)
}



  return (
    <div className="App">
      <div className='cards '>
    
           {listItems[count]}
 
      </div>
      <button className='button' onClick={prev}>Prev</button>
      <button className='button' onClick={next}>Next</button>
    </div>
  );
}

export default App;
