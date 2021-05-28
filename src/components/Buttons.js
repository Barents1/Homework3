import React from "react";
import { Button } from "antd";
import { PoweroffOutlined, SearchOutlined,  } from "@ant-design/icons";


export default function Buttons() {
  
  return (
    <div>
      <h2>Botones</h2>
      <Button type="primary" size="small">Primary Button</Button>
      <Button type="default" size="small" onClick={()=>alert("Boton presionado")}>Default Button</Button>
      <Button type="danger">Dashed Button</Button>
      <Button type="ghost">Text Button</Button>
      <Button type="link" href="https://www.google.com" target="blank">Link Button</Button>
      <br></br><br></br>
      <Button loading type="primary">Loading</Button>
      <Button type="primary" icon={<SearchOutlined/>} className="botonAnt">Buscar</Button>
    </div>
  );
}
