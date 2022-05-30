import React, { useEffect, useRef, useState } from "react";
import Ball1 from '../../assets/balls/Ball1.svg'
import Ball2 from '../../assets/balls/Ball2.svg'

function Game() {

const [list,setList] = useState(
    [ 
        {items: [Ball2]},
        {items: [Ball1]},
        {items: [Ball1]},
    ]);




const [place1,setPlace1] = useState([]);
const [place2,setPlace2] = useState([]);
const [place3,setPlace3] = useState([]);
const dragNode = useRef();


    const handleDragStart = (e)=>{
        console.log('drag start')
        dragNode.current = e.target;
    }
    const ondrop = () =>{
        if(place1.length < 1 ){  
            if(dragNode.current != undefined){
            setPlace1(prev => [...prev,dragNode.current.currentSrc])
            list.splice(dragNode.current,1)       
            }
        }
    }

    const CheckImg = (e) =>{
        if(place1.length == 1){
            setPlace1([]);
            setPlace1(prev => [...prev,dragNode.current.currentSrc])
            list.splice(0,1,{items:[e.target.src]})
        }
    }
    const CheckImg1 = (e) =>{
        if(place2.length == 1){
            setPlace2([]);
            setPlace2(prev => [...prev,dragNode.current.currentSrc])
            list.splice(0,1,{items:[e.target.src]})
        }
    }
    const CheckImg2 = (e) =>{
        if(place3.length == 1){
            setPlace3([]);
            setPlace3(prev => [...prev,dragNode.current.currentSrc])
            list.splice(0,1,{items:[e.target.src]})
        }
    }
    const ondrop1 = () =>{
        if(place2.length < 1 ){
            if(dragNode.current != undefined){

            setPlace2(prev => [...prev,dragNode.current.currentSrc])
            list.splice(dragNode.current,1)
            }
        }

        else{
            return
        }
    }
    
    const ondrop2 = () =>{
        if(place3.length < 1 ){
            if(dragNode.current != undefined){

                setPlace3(prev => [...prev,dragNode.current.currentSrc])
                list.splice(dragNode.current,1)
            }
        }
        else{
            return
        }
    }

    const DoubleClickDel = (e) =>{
        console.log(e,'Last Img')
        // dragNode1.current = e.target.currentSrc
        // setList(prev => [...prev,e.target.src])
        
        list.splice(0,0,{items:[e.target.src]})
        
        setPlace1([]);
    }

    const DoubleClickDel1 = (e) =>{
        list.splice(0,0,{items:[e.target.src]})
        setPlace2([]);
    }

    const DoubleClickDel2 = (e) =>{
        list.splice(0,0,{items:[e.target.src]})
        setPlace3([]);
    }

    console.log(place1.length)


    return (
        <div className="game_container">
            <div className="draggable_balls_row">

                {list.length == 0 ? <></>:
                list.map((e,i)=>{
                    return(
                                  <div key={i} 
                                    onDragStart={(e) => handleDragStart(e)} 
                                    
                                    
                                    draggable 
                                    className="img_container">
                                    <img 
                                    width='100px'
                                    src={e.items}
                                    />
                                    </div>
                                );
                })}
                </div>
                <div className="droppable_balls_row">
                    {place1.length == 0 ? <div className="droppable_balls_placeholder" onMouseEnter={ondrop}></div>:
                    place1.map((item,index)=>{
                        return(
                            <>
                            <div className="droppable_balls_placeholder" key={index} onDragStart={console.log('Ball Drag Start')} >
                                <img
                                src={item}
                                onDoubleClick={DoubleClickDel}
                                onDragLeave={CheckImg}
                                />

                            </div>
                            
                            </>
                        );
                    
                    })
                    
                }
                {place2.length == 0 ? <div className="droppable_balls_placeholder" onMouseEnter={ondrop1}></div>:
                    place2.map((item,index)=>{
                        return(
                            <div className="droppable_balls_placeholder" >
                                <img
                                src={item}
                                onDoubleClick={DoubleClickDel1}
                                onDragLeave={CheckImg1}
                                />

                            </div>
                        );
                    })
                }

                    {
                       place3.length == 0 ? <div className="droppable_balls_placeholder" onMouseEnter={ondrop2}></div>:
                        place3.map((item,index)=>{
                        return(
                            <div className="droppable_balls_placeholder" >
                                <img
                                src={item}
                                onDoubleClick={DoubleClickDel2}
                                onDragLeave={CheckImg2}
                                />

                            </div>
                        );
                    })
                }


            </div>   

               

        </div>

    )
}
export default Game;