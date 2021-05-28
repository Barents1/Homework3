import { Modal, Button } from 'antd';
import React, { useState } from 'react'

export default function Modals() {

    const[modal, setModal] = useState(false);

    const abrirModal = ()=>{
        setModal(true);
    }

    const cerrarModal =() => {
        setModal(false);
    }

    const accion = ()=>{
        alert('Se presiono el Botón');
    }
    return (
        <div>
            <h1>Modal</h1>
            <Button type="primary" onClick={abrirModal}>Abrir Modal</Button>
            <Modal title="Modal Header"
            visible={modal}
            onCancel={cerrarModal}
            onOk={accion}
            >
                <p>Cuerpo del modal</p>
            </Modal>
        </div>
    )
}
