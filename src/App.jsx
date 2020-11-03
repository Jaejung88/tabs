import React, { useState } from 'react';
import './App.css';
import DisplayTab from './components/DisplayTab';
import DisplayContent from './components/DisplayContent';


function App() {

  const [boxList, setBoxList] = useState([
      {
        height: 50,
        width: 150,
        isSelected: false,
        content: "Tab 1 content is showing here."
      },
      {
        height: 50,
        width: 150,
        isSelected: false,
        content: "Tab 2 content is showing here."
      },
      {
        height: 50,
        width: 150,
        isSelected: false,
        content: "Tab 3 content is showing here."
      }
  ]);

  const toggleTab = (idx) => {
    boxList.forEach((box, i)=> {
      let updateBox = box
      if (idx === i) {
        updateBox.isSelected = true;
      } else {
        box.isSelected = false;
      }
      setBoxList([...boxList.slice(0,i),updateBox,...boxList.slice(i+1)])
    })
  }

  

  return (
    <div>
      <div style={{display:"flex", width:"fit-content", margin:"0 auto"}}>
        {
          boxList.map((box, i) => {
            return <DisplayTab
                      key={i}
                      idx={i}
                      height={box.height}
                      width={box.width}
                      content={box.content}
                      isSelected={box.isSelected}
                      toggleTab={toggleTab}
                    />
          })
        }
      </div>
      <div>
        {
          boxList.map((box, i) => {
            return box.isSelected ? <DisplayContent content = {box.content} isSelected={box.isSelected}/> : null
          })
        }
      </div>
    </div>
  );
}

export default App;


