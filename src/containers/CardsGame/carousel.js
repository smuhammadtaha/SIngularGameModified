import { useEffect, useState,useRef } from "react";
import purpleTriangle from '../../assets/purple-triangle.png'
import Cards from '../../data/cards-1.json'
var React = require("react");
var Coverflow = require("react-coverflow");

const Carousel = () => {
  const [card,setCard] = useState(Cards)
  const [chosenImg1,setChosenImg1]= useState([]);
  const [chosenImg2,setChosenImg2]= useState([]);
  const [chosenImg3,setChosenImg3]= useState([]);
  const [chosenImg4,setChosenImg4]= useState([]);
  const [chosenImg5,setChosenImg5]= useState([]);
  const [chosenImg6,setChosenImg6]= useState([]);

  const [activeImg, setActiveImg] = useState(Math.floor(card.cards.length / 2));
  const prev = () => {
    console.log(activeImg);
    activeImg > 0 && setActiveImg(activeImg - 1);
  };
  const next = () => {
    console.log(activeImg);
    activeImg < card.cards.length - 1 && setActiveImg(activeImg + 1);
  }

 
  const dragNode = useRef();

  const handleDragStart = (e) =>{
      dragNode.current = e.target.currentSrc;
      card.cards.splice(e.target.currentSrc,1)
      }


  const handleDragEnd = () => {
    
    if(chosenImg1.length < 1){
       if(dragNode.current !== undefined && dragNode.current != null){
        setChosenImg1(prev => [...prev,dragNode.current]);
        dragNode.current = null;
        activeImg > 0 && setActiveImg(activeImg - 1);
      }
    }

  }
  
  const handleDragEnd1 = () => {
    if(chosenImg2.length < 1){
        setChosenImg2(prev => [...prev,dragNode.current]);
        dragNode.current = null;
        activeImg < card.cards.length - 1 && setActiveImg(activeImg + 1)
      
    }
  }

  const handleDragEnd2 = () => {
    if(chosenImg3.length < 1){
      if(dragNode.current !== undefined){
        setChosenImg3(prev => [...prev,dragNode.current]);
        dragNode.current = null;
        activeImg > 0 && setActiveImg(activeImg - 1);
      }
    }
  }

  const handleDragEnd3 = () => {
      if(chosenImg4.length < 1){
        if(dragNode.current != undefined && null){
          setChosenImg4(prev => [...prev,dragNode.current]);
          dragNode.current = null;
          activeImg < card.cards.length - 1 && setActiveImg(activeImg + 1)
        }
      }
  }

  const handleDragEnd4 = () => {
    if(chosenImg5.length < 1){
      if(dragNode.current !== undefined){
        setChosenImg5(prev => [...prev,dragNode.current]);
        dragNode.current = null;
        activeImg > 0 && setActiveImg(activeImg - 1);
      }
    }
  }

  const handleDragEnd5 = () => {
    if(chosenImg6.length < 1){
      if(dragNode.current !== undefined){
        setChosenImg6(prev => [...prev,dragNode.current]);
        dragNode.current = null;
        activeImg > 0 && setActiveImg(activeImg - 1);
      }
    }
  }



  const DoubleClickDelete = () => {
    card.cards.splice(0,0,{url:`${chosenImg1}`})
    setChosenImg1([]);
    activeImg > 0 && setActiveImg(activeImg - 1);

    // card.cards.splice()
      
  }   
  const DoubleClickDelete1 = () => {
    card.cards.splice(0,0,{url:`${chosenImg2}`})
    setChosenImg2([]);
    activeImg < card.cards.length - 1 && setActiveImg(activeImg + 1)
}   
const DoubleClickDelete2 = () => {
  card.cards.splice(0,0,{url:`${chosenImg3}`})
    setChosenImg3([]);
    activeImg > 0 && setActiveImg(activeImg - 1);
}   
const DoubleClickDelete3 = () => {
  card.cards.splice(0,0,{url:`${chosenImg4}`})
    setChosenImg4([]);
    activeImg < card.cards.length - 1 && setActiveImg(activeImg + 1)
}   
const DoubleClickDelete4 = () => {
  card.cards.splice(0,0,{url:`${chosenImg5}`})
    setChosenImg5([]);
    activeImg > 0 && setActiveImg(activeImg - 1);
}   
const DoubleClickDelete5 = () => {
  card.cards.splice(0,0,{url:`${chosenImg6}`})
    setChosenImg6([]);
    activeImg < card.cards.length - 1 && setActiveImg(activeImg + 1)
}   




  return (
    <div className="carousel">
      <Coverflow
        classes={{ background: "white" }}
        className=""
        enableScroll={true}
        displayQuantityOfSide={card.cardsCount / 2 - 1}
        navigation={false}
        enableHeading={false}
        clickable={true}
        active={activeImg}
        media={{
          "@media (max-width: 900px)": {
            minWidth: "300px",
            width: "100%",
            height: "100%",
          },
          "@media (min-width: 900px)": {
            minWidth: "300px",
            width: "100%",
            height: "100%",
          },
        }}
      >
        {card.cards.map((img, index) => {
          return index === activeImg ? (
              console.log(activeImg),
              < div
                role="menuitem"
                tabIndex="0"
                key={index}
                className="middle"
              >
                <img
                  className="middle"
                  alt="title or description"
                  style={{
                    display: "block",
                    width: "80px",
                    height: "120px",
                    backgroundSize: "contain",
                    objectFit: "cover",
                    outline: "5px solid #ffffff1f",
                    borderRadius: "10px",
                    marginLeft: "18px",
                  }}
                  src={img.url}
                  draggable
                  onDragStart={(e) => handleDragStart(e)}
                />
              </div>
              ) : (
              <img
                key={index}
                alt={index}
                style={{
                  display: "block",
                  width: "120px",
                  height: "200px",
                  backgroundSize: "contain",
                  objectFit: "cover",
                  outline: "8px solid #ffffff1f",
                  borderRadius: "10px",
                }}
                src={img.url}
              />
              )
        })}
      </Coverflow >
      <div className="btns">
        <img src={purpleTriangle} alt="" onClick={prev} className="previous-btn purple-btn">
        </img>
        <img src={purpleTriangle} alt="" onClick={next} className="next-btn purple-btn"></img>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          padding: "65px",
        }}
      >
          <>
            <div
              className={!chosenImg1 ? "center" : ""}
              style={{
                width: "100px",
                height: "122px",
                margin:10,
                outline: "8px solid #ffffff1f",
                borderRadius: "10px",
                display: "block",
                backgroundSize: "contain",
                objectFit: "cover",
                backgroundImage: `url(${chosenImg1})`,
              }}
              onDoubleClick={DoubleClickDelete}
              onMouseEnter={handleDragEnd}
              
              // onDragLeave={}
              >
              
            </div>

            <div
              className={!chosenImg2 ? "center" : ""}
              style={{
                width: "100px",
                height: "122px",
                margin:10,
                outline: "8px solid #ffffff1f",
                borderRadius: "10px",
                display: "block",
                backgroundSize: "contain",
                objectFit: "cover",
                backgroundImage: `url(${chosenImg2})`,
              }}
              onDoubleClick={ DoubleClickDelete1}
              onMouseEnter={handleDragEnd1}
              >
              
            </div>

            <div
              className={!chosenImg3 ? "center" : ""}
              style={{
                width: "100px",
                height: "122px",
                margin:10,
                outline: "8px solid #ffffff1f",
                borderRadius: "10px",
                display: "block",
                backgroundSize: "contain",
                objectFit: "cover",
                backgroundImage: `url(${chosenImg3})`,
              }}
              onDoubleClick={DoubleClickDelete2}
              onMouseEnter={handleDragEnd2}
              >
              
            </div>

            <div
              className={!chosenImg4 ? "center" : ""}
              style={{
                width: "100px",
                height: "122px",
                margin:10,
                outline: "8px solid #ffffff1f",
                borderRadius: "10px",
                display: "block",
                backgroundSize: "contain",
                objectFit: "cover",
                backgroundImage: `url(${chosenImg4})`,
              }}
              onDoubleClick={DoubleClickDelete3}
              onMouseEnter={handleDragEnd3}
              >
              
            </div>

            <div
              className={!chosenImg5 ? "center" : ""}
              style={{
                width: "100px",
                height: "122px",
                margin:10,
                outline: "8px solid #ffffff1f",
                borderRadius: "10px",
                display: "block",
                backgroundSize: "contain",
                objectFit: "cover",
                backgroundImage: `url(${chosenImg5})`,
              }}
              onDoubleClick={DoubleClickDelete4}
              onMouseEnter={handleDragEnd4}
              >
              
            </div>

            <div
              className={!chosenImg6 ? "center" : ""}
              style={{
                width: "100px",
                height: "122px",
                margin:10,
                outline: "8px solid #ffffff1f",
                borderRadius: "10px",
                display: "block",
                backgroundSize: "contain",
                objectFit: "cover",
                backgroundImage: `url(${chosenImg6})`,
              }}
              onDoubleClick={DoubleClickDelete5}
              onMouseEnter={handleDragEnd5}
              >
              
            </div>
            
            </>
          </div>
    </div >
  );
};

export default Carousel;
