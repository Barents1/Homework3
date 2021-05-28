import React  from 'react'
import { Space, Typography } from 'antd';
import { useState } from 'react';

const {Title, Text, Link, Paragraph} = Typography;

export default function Typography1() {
    const [editar, setEditar] = useState('Texto para editar');


    return (
        <div>
            <h2></h2>
            <Title>Typografías</Title>
            <Title level={2}>Tamaño</Title>
            <Title level={3}>Tamaño</Title>
            <Title level={4}>Tamaño</Title>
            <Title level={5}>Tamaño</Title>
            <div className="space">
                <Space className="space" >
                    <Text type="Secondary">Secondary</Text>
                    <Text type="success">success</Text>
                    <Text type="warning">warning</Text>
                    <Text type="danger">danger</Text>
                </Space>
            </div>
            <Space>
            <Text mark> mark</Text>
                    <Text keyboard> keyboard</Text>
                    <Text underline> underline</Text>
                    <Text strong> strong</Text>
                    <Text delete>delete</Text>
                    <Link href="https://google.com.ec" target="blank"> Vinculo a Google</Link>
                    
            </Space>
            <br></br><br></br>
            <Space direction="vertical" style={{textAlign:"justify"}}>
                <Paragraph copyable>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Paragraph>
                <Paragraph editable={{onChange: setEditar}}> {editar} </Paragraph>
            </Space>
        </div>
    )
}
