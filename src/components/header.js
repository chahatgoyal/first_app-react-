import React from 'react';

function Header(props)
{
    
      return(
          <React.Fragment>
      <h1 onClick={props.myalert}>{ props.info }</h1>
      </React.Fragment>
      )  
    
    
}

export default Header;