import React from 'react'
import { Layout, Menu } from 'antd';
import {BoldOutlined, MenuOutlined } from '@ant-design/icons';

const { Header } = Layout;

export default function Navbar() {
    return (
        <div>
            <Header>
                <ul className="ulIzquierda">
                    <li><MenuOutlined className="iconMenu"/> </li>
                    <li style={{paddingLeft:"20px"}} ><span className="tituloMenu">Byron Taco</span></li>
                </ul>
                <ul className="ulDerecha">
                    <BoldOutlined className="imageNavbar"/><BoldOutlined className="imageNavbar"/>
                </ul>
            </Header>
        </div>
    )
}
 