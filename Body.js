import memes from "./MemesData";
import React, {useState} from "react";

function Body(){
  let [memeImg,setmemeImg]= useState({
    topText: "",
    bottomText: "",
    randomImage: "https://i.imgflip.com/1bij.jpg"
  });

  function getImageMeme(event)
  {
    event.preventDefault();
    const arr= memes.data.memes;
    const rand= Math.floor(Math.random()*arr.length);
    const url= arr[rand].url;
    setmemeImg(prev=>({
      ...prev,randomImage: url
    }));
    
  }

  function handle(event){
    const {name,value}= event.target;
    setmemeImg(prev=>({
      ...prev, [name]: value 
    }))
    
  }

  return(
    <main>
      <div className="form">
        <input 
            type="text" 
            placeholder="Top Text" 
            className="form--input"
            name="topText"
            value={memeImg.topText}
            onChange={handle}
        />
        <input 
            type="text" 
            placeholder="Bottom Text" 
            className="form--input"
            name="bottomText"
            value={memeImg.bottomText}
            onChange={handle}
        />
        <button 
            onClick={getImageMeme} 
            className="form--button">
                  Get the Meme Image
        </button>
      </div>
      <div className="meme">
          <img src={memeImg.randomImage} alt="meme-image" className="meme-image"/>
          <h2 className="meme--text top">{memeImg.topText}</h2>
          <h2 className="meme--text bottom">{memeImg.bottomText}</h2>
      </div>
    </main>
  )
}

export default Body;