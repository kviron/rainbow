import { memo } from "react";
import { useSidebar } from "../../model/Sidebar.hooks.tsx";
import { Menu } from 'antd';

export const Sidebar = memo(() => {
  const { menuItemsList, activeItem, menuCollapsed } = useSidebar();

  return (
    <>
      <Menu
        style={{height: '100%'}}
        selectedKeys={[activeItem]}
        items={menuItemsList}
        inlineCollapsed={menuCollapsed}
      />
    </>
  )
})