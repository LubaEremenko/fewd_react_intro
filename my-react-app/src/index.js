import React from 'react';
import ReactDOM from 'react-dom';


ReactDOM.render(
 <h1>Hello world!</h1>,
   

 
  document.getElementById('root')
);
ReactDOM.render(
 
    <h2>Goodbye!</h2>,

 
  document.getElementById('other')
);
ReactDOM.render(
 <div>
     <h1>Such a wonderful life!</h1>
      <h2>Happy world!</h2>
 
 </div>,
     
  document.getElementById('another')
);
function NameLength(props) {
return <h1>The name {props.name} contains {props.name.length} characters !</h1>;
}
const element = <NameLength name = "Nathalia" />;

ReactDOM.render(
 
    element,
  document.getElementById('name')
);
