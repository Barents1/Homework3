import React from 'react';
import { SaveTwoTone, ChromeOutlined  } from "@ant-design/icons";

export default function Icons1() {
    return (
        <div>
            <h2>Icons</h2>
            <ChromeOutlined style={{fontSize:"50px", color:"blue"}} spin={true} />
            <SaveTwoTone  style={{fontSize:"50px" }} twoToneColor="red" />
        </div>
    )
}
