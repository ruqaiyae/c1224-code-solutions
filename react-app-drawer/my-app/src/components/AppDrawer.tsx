import { NavLink, Outlet } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import { useState } from 'react';

type AppDrawer = {
  name: string;
  iconUrl: string;
  path: string;
};

type Props = {
  menuItems: AppDrawer[];
};

export function AppDrawer({ menuItems }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex w-full">
      <div className={`menu-drawer ${isOpen ? 'is-open' : ''}`}>
        <FaBars onClick={() => setIsOpen(!isOpen)} className="menu-icon" />
        {isOpen && <h3 className="menu-heading">Hylian Shopping</h3>}
        <MenuItems menuItems={menuItems} isOpen={isOpen} />
      </div>
      <div className="grow">
        <Outlet />
      </div>
    </div>
  );
}

type MenuProps = {
  menuItems: AppDrawer[];
  isOpen: boolean;
};

function MenuItems({ menuItems, isOpen }: MenuProps) {
  return (
    <ul className="menu-items">
      {menuItems.map((item) => (
        <li key={item.name} className="menu-item">
          <NavLink to={item.path} className="menu-link">
            <img src={item.iconUrl} className="item-icon" />
            {isOpen && item.name}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}
