import React, { useState } from 'react'
import axios from 'axios'
const App = () => {

const [data, setdata] = useState([])
const [adcard, setadcard] = useState([])


const addcard = (elem)=>{
  console.log("")
  setadcard([...adcard, elem])
}


const call = async ()=>{
  const response= await axios.get('https://fakestoreapi.com/products')
  console.log(response.data);
  setdata(response.data);
}


const removecard = (index) => {
  const newarr = [...adcard]; // ✅ Copy of adcard
  newarr.splice(index, 1); // ✅ Remove 1 item from that index
  setadcard(newarr); // ✅ Update state
};


  return (
    <div>
        <button onClick={()=>{
           call();
           }}
        className='px-4 py-2 border-1 m-2 bg-gray-200 rounded-[8px] font-medium active:scale-95'>Getdata</button>

<div className='flex gap-2'>
<div className='w-3/4 bg-red-200 p-4  flex rounded-[10px]'>
  <div className='flex flex-wrap gap-2 '>
    {data.map(function(elem,idx){
      console.log(elem)
     return <div key={idx} className='w-[320px] h-[300px] px-2 flex flex-col items-center rounded-[10px] justify-between bg-white m-2 py-2 text-center overflow-hidden'>
      <img className='w-full h-[110px] object-contain bg-cover mx-auto' src={elem.image} alt="" />
              <h1 className='uppercase font-medium'>{elem.category}</h1>
              <h3 className='font-medium'>${elem.price}</h3>
              <p className='w-[80%]'>{elem.title}</p>
              <button onClick={()=>{
                addcard(elem);
              }}
              className='px-4 py-2 rounded-[10px] font-bold bg-black active:scale-96 text-white'>Add to card</button>
     </div>
    })}
  </div> 
  </div>


  <div className="w-1/4 bg-blue-200 p-4 rounded-[10px]">
        <h2 className="text-xl font-bold mb-2 uppercase">Cart Items</h2>
        {adcard.map((item, index) => (
          <div key={index} className="w-[90%] h-55 bg-gray-200 flex flex-col text-center items-center justify-between py-2 rounded-[10px] mb-2 mx-auto ">
            <img src={item.image} alt="" className="w-24 h-18  object-contain" />
            <h3 className="font-medium">${item.price}</h3>
            <p className="text-sm font-medium">{item.title}</p>
            <button onClick={()=>{
              removecard()
            }}
            className='px-4 py-2 bg-black text-white font-medium rounded-[10px] active:scale-95'>Remove</button>
          </div>
        ))}
      </div>
</div>
    </div>
  )
}

export default App

