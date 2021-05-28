 import React from 'react'
//  import 'antd/dist/antd.css'
import {Col, Row, Statistic} from 'antd';
import Navbar from '../components/shared/Navbar';
 
 
 export default function DashBoard() {
     return (
         <>
         <div>
            <Row>
                <Col xs={24}>
                    <Navbar/>
                </Col>
            </Row> 
            <div className="containerDash">
                <Row gutter={30}>
                    <Col xs={24} sm={12} lg={6}>
                    <div className="cardsContenedor">
                        <Statistic title="Practica antd" value="B2T2" valueStyle={{color:'white'}} style={{backgroundColor:'yellowgreen'}} className="cardsContenido"/>
                    </div>
                    </Col>

                    <Col xs={24} sm={12} lg={6}>
                    <div className="cardsContenedor">
                        <Statistic title="Icode" value="B2T2" valueStyle={{color:'white'}} style={{backgroundColor:'blue'}} className="cardsContenido"/>
                    </div>
                    </Col>

                    <Col xs={24} sm={12} lg={6}>
                    <div className="cardsContenedor">
                        <Statistic title="ant Design" value="B2T2" valueStyle={{color:'white'}} style={{backgroundColor:'violet'}} className="cardsContenido"/>
                    </div>
                    </Col>

                    <Col xs={24} sm={12} lg={6}>
                    <div className="cardsContenedor">
                        <Statistic title="tarjeta 4" value="B2T2" valueStyle={{color:'white'}} style={{backgroundColor:'red'}} className="cardsContenido"/>
                    </div>
                    </Col>
                </Row>
            </div>
         </div>
         </>
     )
 }
 