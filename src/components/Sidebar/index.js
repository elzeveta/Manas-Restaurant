import React from 'react';
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarMenu,
  SidebarLink,
  SidebarRoute,
  SideBtnWrap
} from './SidebarElements';

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarMenu>
        <SidebarLink to='/'>Strona Główna</SidebarLink>
        <SidebarLink to='/about'>O nas</SidebarLink>
        <SidebarLink to='/menu'>Nasce Menu</SidebarLink>
        <SidebarLink to='/portfolio'>Portfolio</SidebarLink>
        <SidebarLink to='/'>Aktualności</SidebarLink>
        <SidebarLink to='/'>Kontakt</SidebarLink>
      </SidebarMenu>
      <SideBtnWrap>
        <SidebarRoute to='/'>Zamów teraz</SidebarRoute>
      </SideBtnWrap>
    </SidebarContainer>
  );
};

export default Sidebar;
