import React from "react"
import { Link } from "gatsby"

const menuData = [
  {
    name: 'Hi there!',
    to: '/'
  },
  {
    name: 'home',
    to: '/2'
  },
  {
    name: 'home',
    to: '/3'
  },
  {
    name: 'home',
    to: '/4'
  },
  {
    name: 'home',
    to: '/4'
  },
  {
    name: 'home',
    to: '/4'
  },
  {
    name: 'home',
    to: '/4'
  },
  {
    name: 'home',
    to: '/4'
  },
];

const Menu = () => {

  const renderItemMenu = () => {
    return menuData.map((menu, idx) => 
      <li key={idx} className="my-2">
        <Link
          to={menu.to}
          className="
            text-base
            uppercase
            py-1
            font-medium
            tracking-widest
            text-center
            border-transparent
            hover:border-black-52x3
            hover:text-black-52x3
            hover:opacity-100
            border-solid
            border-b-2
            opacity-75
            inline-block
            whitespace-no-wrap
            cursor-pointer
          "
          activeClassName="text-black-52x3 opacity-100"
          style={{
            transition: 'border-color 0.3s ease 0s, color 0.3s ease 0s',
          }}
          >
            {menu.name}
        </Link>
      </li>
    );
  }

  return(
    <nav>
      <ul>
        {renderItemMenu()}
      </ul>
    </nav>
  );
}

export default Menu;
