import { Col, Divider, Row } from 'antd'
import React from 'react'

export default function  () {
    return (
        <div>
            <h2>GRIDS</h2>
            <Divider> 1 columna (24)</Divider>
            <Row>
                <Col span={24} className="grids">
                    <img className="imgIPP" src="https://www.momento24.co/wp-content/uploads/2020/07/La-legendaria-banda-Iron-Maiden-tendr%C3%A1-hoy-concierto-virtual.jpeg"></img>
                </Col>
            </Row>

            <Divider>2 columnas de 12</Divider>
            <Row gutter={[8,8]}>
                <Col xs={24} sm={12} span={12} className="grids2">
                    <img className="imgIP1"  src="http://gritaradio.com/wp-content/uploads/2020/09/F30135C1-44B7-451B-9CA2-D82ABFFAE6BC.jpeg"></img>
                </Col>
                <Col xs={24} sm={12} span={12} className="grids2">
                    <img className="imgIP1"  src="https://acordesweb.com/img/efeb0dbd0131654e61ceec597f200663.jpg"></img>
                </Col>
            </Row>

            <Divider>3 columnas de 8</Divider>
            <Row gutter={[16,16]} >
                <Col span={8} className="grids4" >
                    <img  className="imgIP2"  src="http://fc00.deviantart.net/fs51/f/2009/262/2/0/The_Beatles_Wallpaper_Original_by_ConnieChan.jpg">
                    </img>
                </Col>
                <Col span={8} className="grids4">
                    <img className="imgIP2"  src="https://i.ytimg.com/vi/Q8l8Xd6wTiE/maxresdefault.jpg">
                    </img>
                </Col>
                <Col span={8} className="grids4">
                    <img className="imgIP2"  src="https://www.rollingstone.com.mx/wp-content/uploads/2021/03/Pink-Floyd.png">
                    </img>
                </Col>
            </Row>

            <Divider > 4 columnas de 6</Divider>
            <Row gutter={[32,32]}>
                <Col span={6} className="grids4">
                    <img className="imgIP3" src="https://www.todorock.com/wp-content/uploads/2018/10/arch_enemy-1200x900.jpg">
                    </img>
                </Col>
                <Col span={6} className="grids4">
                    <img className="imgIP3" src="https://wallpapercave.com/wp/wp5059168.jpg">
                    </img>
                </Col>
                <Col span={6} className="grids4">
                    <img className="imgIP3" src="https://vistapointe.net/images/apocalyptica-1.jpg">
                    </img>
                </Col>
                <Col span={6} className="grids4">
                    <img className="imgIP3" src="https://cdn.slidesharecdn.com/ss_thumbnails/thepolice-140521140504-phpapp02-thumbnail-4.jpg?cb=1400681162">
                    </img>
                </Col>
            </Row>
            
        </div>
    )
}
