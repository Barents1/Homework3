import { Button, Input, Checkbox, Form, Row, Col, Radio, DatePicker } from 'antd';
import React from 'react';
import'moment/locale/es';
import locale from 'antd/es/date-picker/locale/es_ES';

export default function Formulario() {

    const {Item} = Form;
    const { Password } = Input;
    const { Group } = Radio;

    return (
        <div >
            <h2>Formularios</h2>
            <div >
                    
                    <Form name="formulario" initialValues={{recordar: true}}>
                    <Item label="Nombre"
                    name="Nombre"
                    rules={[{
                        required: true,
                        message: "Ingresar tu nombre"
                    }]}>
                        <Input/>
                    </Item>
                    <Item label="Apellido"
                    name="Apellido"
                    rules={[{
                        required: true,
                        message: "Ingresar su Apellido"
                    }]}>  
                    <Input/>                      
                    </Item>
                    <Item label="Direccion"
                    name="Direccion"
                    rules={[{
                        required: true,
                        message: "Ingresar tu nombre de Direccion"
                    }]}>
                        <Input/>
                    </Item>
                    <Group>
                        <Radio value={1}>Hombre</Radio>
                        <Radio value={2}>Mujer</Radio>
                    </Group>
                    <Item label="Fecha de Nacimiento" name="Fechadenacimiento">
                        <DatePicker style={{width:"100%"}}/>
                    </Item>
                    <Item>
                        <Button type="Primary" htmlType="submit">Iniciar Sesion</Button>
                    </Item>
                </Form>


                
            </div>
        </div>
    )
}
