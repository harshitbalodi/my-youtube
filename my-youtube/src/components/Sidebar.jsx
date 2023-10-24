import React, { Children } from 'react';
import { SidebarBasicsSection,SidebarYouSection, SidebarExploreSection } from '../config/constants';

const SidebarItem = ({ itemLogo, itemName }) => {
  return (
    <div className='my-4'>
      <img src={itemLogo} alt={itemName} className='w-5 h-5 inline-block mr-3' />
      <span>{itemName}</span>
    </div>
  )
}

const Sidebar = () => {
  return (
    <div className='w-max border-solid border-gray-300 bg-slate-300  flex flex-col content-between px-5 py-2 col'>
      { 
        SidebarBasicsSection.map((SidebarItemData,i) => {
        return <SidebarItem itemLogo={SidebarItemData.itemLogo} itemName={SidebarItemData.itemName} key={i}/>
      })}

      <hr/>
      <h1 className='font-semibold' >You {">"}</h1>
      { 
          SidebarYouSection.map((SidebarItemData,i) => {
          return <SidebarItem itemLogo={SidebarItemData.itemLogo} itemName={SidebarItemData.itemName} key={i}/>
        })}
      
      <hr/>
       <h1 className='font-semibold'>Explore</h1>
      { 
        SidebarExploreSection.map((SidebarItemData,i) => {
        return <SidebarItem itemLogo={SidebarItemData.itemLogo} itemName={SidebarItemData.itemName} key={i}/>
      })}
    </div>
  )
}

export default Sidebar;
