import React from 'react';
import ReactDOM from 'react-dom';

//Mount function to start up the app
const mount = (el) => {
  ReactDOM.render(<h1>Hi theree!</h1>, el);
}; 

//If we are in development and isolation call mount immediately
if(process.env.NODE_ENV === 'development'){
  const el = document.querySelector('#_marketing-dev-root');
  if(el){
    mount(el);
  }
}
//We are running through container and we should export the mount function
export { mount };