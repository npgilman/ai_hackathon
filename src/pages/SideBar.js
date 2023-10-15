import React from 'react';
import styled from 'styled-components';
import { SidebarData } from './SidebarData';
import SubMenu from './SubMenu';

const SidebarNav = styled.nav`
  background: #15171c;
  width: 100%;
  height: 100vh;
  display: flex-column; 
`;

const Sidebar = () => {
 return (
    <div className='w-22' style={{width: "17%"}}>
        <SidebarNav>
            {SidebarData.map((item, index) => {
                return <SubMenu item={item} key={index} />;
            })}
        </SidebarNav>
    </div>
  );
};

export default Sidebar;