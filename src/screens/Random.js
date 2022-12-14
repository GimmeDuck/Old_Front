import React from 'react'
import '../style/Random.css';

const Body_Yellow = require("../custom_Img/Body/Body_Yellow.png");
const Body_Blue = require("../custom_Img/Body/Body_Blue.png");
const Body_Red = require("../custom_Img/Body/Body_Red.png");
const Body_White = require("../custom_Img/Body/Body_White.png");
const Body_Black = require("../custom_Img/Body/Body_black.png");
const Body = [ Body_Yellow, Body_Blue, Body_Red, Body_White, Body_Black ];

const Hair_Long = require("../custom_Img/Hair/Hair_Long.png");
const Hair_Puka = require("../custom_Img/Hair/Hair_Puka.png");
const Hair_Short_green = require("../custom_Img/Hair/Hair_Short_Green.png");
const Hair_Short = require("../custom_Img/Hair/Hair_Short.png");
const Hair_Blue = require("../custom_Img/Hair/Hair_Blue.png");
const Hair = [ Hair_Long, Hair_Puka, Hair_Short_green, Hair_Short, Hair_Blue ];

const Eye_Arch = require("../custom_Img/Eye/Eye_Arch.png");
const Eye_Circle = require("../custom_Img/Eye/Eye_Circle.png");
const Eye_Circle_Green = require("../custom_Img/Eye/Eye_Circle_Green.png");
const Eye_Triangle = require("../custom_Img/Eye/Eye_Triangle.png");
const Eye_Glasses = require("../custom_Img/Eye/Eye_Glasses.png");
const Eye = [
  Eye_Arch,
  Eye_Circle,
  Eye_Circle_Green,
  Eye_Triangle,
  Eye_Glasses,
];

const Mouth_Blue = require("../custom_Img/Mouth/Mouth_Blue.png");
const Mouth_Red = require("../custom_Img/Mouth/Mouth_Red.png");
const Mouth_Pink = require("../custom_Img/Mouth/Mouth_Pink.png");
const Mouth_Yellow = require("../custom_Img/Mouth/Mouth_Yellow.png");
const Mouth = [ Mouth_Blue, Mouth_Pink, Mouth_Red, Mouth_Yellow ];

const Egg_Mint = require("../custom_Img/Egg/Egg_Mint.png");
const Egg_Pink = require("../custom_Img/Egg/Egg_Pink.png");
const Egg_PurPle = require("../custom_Img/Egg/Egg_Purple.png");
const Egg_White = require("../custom_Img/Egg/Egg_White.png");
const Egg = [ Egg_Mint, Egg_Pink, Egg_PurPle, Egg_White ];

const Idol_Aespa = require("../custom_Img/Idol/Idol_Aespa.png");
const Idol_Bts = require("../custom_Img/Idol/Idol_Bts.png");
const Idol_Ive = require("../custom_Img/Idol/Idol_Ive.png");
const Idol_Nct = require("../custom_Img/Idol/Idol_Nct.png");
const Idol = [ Idol_Aespa, Idol_Bts, Idol_Ive, Idol_Nct ];

const Back_Mint = require("../custom_Img/Back/Back_Mint.png");
const Back_Pink = require("../custom_Img/Back/Back_Pink.png");
const Back_Rainbow = require("../custom_Img/Back/Back_Rainbow.png");
const Back_Zebra = require("../custom_Img/Back/Back_Zebra.png");
const Back = [ Back_Mint, Back_Pink, Back_Rainbow, Back_Zebra ];

const Random = () => {
    const getRandom = (min, max) => Math.floor(Math.random() * (max - min) + min);

  return (
    <div>
        <div id="Character" >
          {/* ????????????back????????????????????? */}
          <div className="Character-1"  >
            <img src={Back[getRandom(0, 4)]}/>
          </div>
          {/* ????????????Body????????????????????? */}
          <div className="Character-1" >
            <img src={Body[getRandom(0, 5)]}/>
          </div>
          {/* ????????????Hair????????????????????? */}
          <div className="Character-1" >
            <img src={Hair[getRandom(0, 5)]}/>
          </div>
          {/* ????????????Eye????????????????????? */}
          <div className="Character-1">
            <img src={Eye[getRandom(0, 5)]}/>
          </div>
          {/* ????????????Egg????????????????????? */}
          <div className="Character-1">
            <img src={Egg[getRandom(0, 4)]}/>
          </div>
          {/* ????????????Mouth????????????????????? */}
          <div className="Character-1">
            <img src={Mouth[getRandom(0, 4)]}/>
          </div>
          {/* ????????????Idol????????????????????? */}
          <div className="Character-1">
            <img src={Idol[getRandom(0, 4)]}/>
          </div>
        </div>

    </div>
  )
}

export default Random