import React from 'react';

import { StyledNav, StyledLink } from './NavMenuStyles';


// Styled links on navigation

export default function NavMenu() {
  return (
    <div>
      <StyledNav>
        <StyledLink to='/'>Home</StyledLink>
        <StyledLink to='/friendlist'>Friend List</StyledLink>
        <StyledLink to ='/addfriend'>Add Friend</StyledLink>
        <StyledLink to='/login'>Log in</StyledLink>
      </StyledNav>
    </div>
  )
}

