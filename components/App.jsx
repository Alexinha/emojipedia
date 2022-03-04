import React from "react";
import Emoji from "./Emoji";
import emojipedia from "../emojipedia";

// 1. map() happens in App.jsx, coz App.jsx is where real values being imported and used 
// 2. by creating a new function createItem(), the properties of <Emoji /> can be defined and values from emojipedia can be picked up. 
// 3. remember Emoji.jsx is just a reusable component, no real value needed to be related there. just match it with the <Emoji /> properties created here and it will do. 
// 4. {valueArrary.map(costumFcuntion)}, notice the {}, coz it's javascript used in html used in javascript. 

function createItem(item){
  return <Emoji
          key={item.id}
          emoji={item.emoji}
          name={item.name}
          meaning={item.meaning}
        />;
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">

      {emojipedia.map(createItem)}

      </dl>
    </div>
  );
}

export default App;
