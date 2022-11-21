import React from 'react'
import { TodoContext, TodoContextType } from '../Contexts/TodoContext';


//const linkTag = document.querySelector("link") as HTMLLinkElement;

const ExternalLinkIcon : React.FC = ({link, icon}) => {
    
  return (
    <a href={link} target="_blank">
    <i className={icon}></i>
    </a>
  )
}

export default ExternalLinkIcon