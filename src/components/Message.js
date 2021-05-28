import { Button, message } from 'antd'
import React from 'react'

export default function Message() {

    // funcion de mensaje de una actividad satisfactoria
    const messageSucces = () => {
        message.success("Message Success");
    }
    // funcion de mensaje de error
    const messageError = () => {
        //se le pasa el mensage y el tiempo que se va ha demorar
        message.error("Message Error",10);
    }
    // funcion de mensaje de información
    const messageInfo = () => {
        message.info("Message Info");
    }
    // funcion de mensaje de alvertencia
    const messageWarning = () => {
        message.warning("Message Warning");
    }
    // funcion de mensaje cuando se esta cargando
    const messageLoading = () => {
        message.loading("Message Loading");
    }

    return (
        <div>
            <h2>Tipos de mensages</h2>
            <Button onClick={messageSucces}>Message Success</Button>
            <Button onClick={messageError} > Message Error</Button>
            <Button onClick={messageInfo}> Message Info</Button>
            <Button onClick={messageWarning}>Message Warning</Button>
            <Button onClick={messageLoading}> Message Loading</Button>
        </div>
    )
}
