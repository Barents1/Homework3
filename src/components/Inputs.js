import { UserAddOutlined } from '@ant-design/icons'
import { Input, Select, } from 'antd'
import Password from 'antd/lib/input/Password'
// import { Option } from 'antd/lib/mentions'
import React, { useState } from 'react'

export default function Inputs() {
    const { Option }=Select;

    // inicializando estado del input
    const [inputText, setInputText] = useState({
        input4:''
    })

    

    const handleChange = e=>{
        const {name, value} = e.target;
        //utilización de la propagación para unir varios textos
        setInputText({...inputText,
        [name]: value
        });
        console.log(inputText);
        
    }

    const selectInicio=(
        <Select defaultValue="1">
            <Option value="1">http://</Option>
            <Option value="2">https://</Option>
            
        </Select>
    );

    const selectFinal=(
        <Select defaultValue="2">
            <Option value="3">.ec</Option>
            <Option value="4">.org</Option>
            <Option value="5">.com</Option>
            
        </Select>
    );


    return (
        <div>
            <h2>Inputs ANTD</h2>
             <Input placeholder="Ingresar Datos" size="large" prefix={<UserAddOutlined/>} />
             <br/><br/>
             <Input placeholder="Default" />
             <br/><br/>
             <Input placeholder="Texto a capturar"  />
             <br/><br/>
             <Input placeholder="Captura de text" onChange={handleChange} name="input4" />
             <br/><br/>
             <Password placeholder="Colocar una contraseña" maxLength={15} />
             <br/><br/>
             <Input defaultValue="Mi dominio " addonBefore={selectInicio} addonAfter={selectFinal}/>
        </div>
    )
}
