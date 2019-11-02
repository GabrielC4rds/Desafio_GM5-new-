import React, { useState, useEffect } from "react";
import styled from "styled-components";
import withSizes from "react-sizes";
import { Menu, Dropdown, Icon } from "antd";

const mapSizesToProps = ({ width, height }) => ({
  ScreenWidth: width,
  ScreenHeight: height
});

const MainMenuHolder = styled.div`
  width: 100%;
`;

const MenuContent = styled.div`
  width: 100%;
  padding: 15px 15px;
  max-width: 1250px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  img {
    width: 100px;
  }
  ul {
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    list-style: none;
    margin-bottom: 0px;
  }
  ul li a{
    color: #282828;
    text-decoration: none;

    :hover{
      color: #0199b0;
    }
  }
  ul li {
    margin-right: 15px;
    text-transform: uppercase;
    font-size: 14px;
    position: relative;
    cursor: pointer;
    font-family: "Montserrat", Montserrat-Medium !important;
    font-weight: bold;
    :after {
      content: "";
      width: 0%;
      height: 2px;
      background: #0e996d;
      transition: all 0.3s ease;
      position: absolute;
      left: 50%;
      bottom: -6px;
      transform: translateX(-50%);
    }
    :last-child :after {
      display: none !important;
    }
  }
  @media (max-width: 900px) {
    .ant-dropdown,
    .ant-dropdown-menu {
      width: 100vw !important;
      position: absolute !important;
      left: 0 !important;
      top: 80px !important;
    }
    .ant-dropdown-menu-item > a,
    .ant-dropdown-menu-submenu-title > a {
      font-size: 18px !important;
      text-align: center !important;
      padding: 10px 0 !important;
      font-family: "Open Sans", sans-serif !important;
    }
    .anticon {
      font-size: 28px !important;
      color: #0e996d !important;
    }
  }
`;

const AlreadyStudent = styled.button`
  background: transparent;
  border: 1px solid #000;
  border-radius: 30px;
  padding: 7px 30px;
  transition: all 0.4s ease;
  :hover {
    box-shadow: 0px 9px 45px #0e996d40;
    color: #fff;
    cursor: pointer;
  }
`;

const menu = (
  <Menu>
    <Menu.Item key="0">
      <a >home</a>
    </Menu.Item>
    <Menu.Item key="1">
      <a >quem somos</a>
    </Menu.Item>
    <Menu.Item key="2">
      <a>
        nossos serviços
      </a>
    </Menu.Item>
    <Menu.Item key="3">
      <a>contato</a>
    </Menu.Item>
  </Menu>
);

function MainMenu({ ScreenWidth, ScreenHeight }) {
  const [ScreenDimensions, setScreenDimensions] = useState({
    width: ScreenWidth,
    height: ScreenHeight
  });

  useEffect(() => {
    setScreenDimensions({ width: ScreenWidth, height: ScreenHeight });
  }, [ScreenWidth, ScreenHeight]);

  return (
    <MainMenuHolder>
      <MenuContent>
        <img src="./static/myfolder/img/Logo.png" />
        {ScreenDimensions.width <= 900 ? (
          <Dropdown overlay={menu} trigger={["click"]}>
            <a className="ant-dropdown-link" href="#">
              <Icon type="menu" />
            </a>
          </Dropdown>
        ) : (
          <ul>
            <li>
              <a>home</a>
            </li>
            <li>
              <a>
                quem somos
              </a>
            </li>
            <li>
              <a>
                nossos serviços
              </a>
            </li>
            <li>
              <a>
                contato
              </a>
            </li>
            <li>
              
            </li>
          </ul>
        )}
      </MenuContent>
    </MainMenuHolder>
  );
}

export default withSizes(mapSizesToProps)(MainMenu);
