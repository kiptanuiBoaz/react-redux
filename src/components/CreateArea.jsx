import React, { useState } from "react";

function CreateArea(props) {

  

  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange (event){
    const {value, name} = event.target
      
    setNote ( (prevNote)=>{
      
      return{
        ...prevNote,
        [name]:value
      }
    
    })  
  }

  
  return (
    <div>
      <form>
       {/* Tap into the value bieng entered and assing in a name so it can be passed to app and put an array */}
        <input onChange={handleChange}  value ={note.title}  name="title" placeholder="Title" />
        <textarea onChange = {handleChange} value ={note.content}  name="content" placeholder="Take a note..." rows="3" />
        {/* when button is clicked, pass the entered values and pass it along with a function with a fn */}
        {/* set the variable to empty afterwards */}
        <button 
          onClick ={ (event)=> { 
             props.btnClicked (note);
             event.preventDefault(); 
             setNote({title:"", content:""});
            }}>
            Add
        </button>

      </form>
    </div>
  );
}

export default CreateArea;
