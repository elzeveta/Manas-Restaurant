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
        <SidebarLink to='/menu'>Nazse Menu</SidebarLink>
        <SidebarLink to='/portfolio'>Galeria</SidebarLink>
        <SidebarLink to='/news'>Aktualności</SidebarLink>
        <SidebarLink to='/contacts'>Kontakts</SidebarLink>
      </SidebarMenu>
      <SideBtnWrap>
        <SidebarRoute to='/menu'>Zamów teraz</SidebarRoute>
      </SideBtnWrap>
    </SidebarContainer>
  );
};

export default Sidebar;
