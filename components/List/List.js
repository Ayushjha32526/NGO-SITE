import React from 'react';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CloseIcon from '@mui/icons-material/Close';

import "./List.css"
const List = ({ todolist,handleToggle ,handleDelete }) => {
  return (
    
      <ul className='list'>
        {Array.isArray(todolist) &&
          todolist.map((listItem) => (
            <li  key={listItem.id} 
            className={listItem.completed && "done"}>
              <span>{listItem.item}</span>
              <span className='actions'>
                {
                    listItem.completed?( <CloseIcon  onClick = {()=> handleToggle(listItem.id)}/>) : <CheckBoxIcon onClick = {()=> handleToggle(listItem.id)}/>
               
                }
                 <DeleteForeverIcon onClick = {()=> handleDelete(listItem.id)} />
              </span>
            </li>
          ))}
      </ul>
    
  );
};

export default List;
