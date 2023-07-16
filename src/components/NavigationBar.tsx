import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Button, Space } from "antd";
import { Menu } from "antd";
import { MenuProps } from "antd";

const items = [
  {
    label: (
      <Space wrap>
        <Button type="text">
          <NavLink to="/">Home</NavLink>
        </Button>
      </Space>
    ),
    key: "home",
  },

  {
    label: (
      <Space wrap>
        <Button type="text">
          <Link to="/about">About</Link>
        </Button>
      </Space>
    ),
    key: "about",
  },
  {
    label: (
      <Space wrap>
        <Button type="text">
          <Link to="/services">Services</Link>
        </Button>
      </Space>
    ),
    key: "services",
  },
  {
    label: (
      <Space wrap>
        <Button type="text">
          <Link to="/location">Location</Link>
        </Button>
      </Space>
    ),
    key: "location",
  },
];

const App = () => {
  const [current, setCurrent] = useState("home");

  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };

  return (
    <Menu
      onClick={onClick}
      selectedKeys={[current]}
      mode="horizontal"
      items={items}
    />
  );
};

export default App;