import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import Result from "./Result";

export default function PopupExample() {
    return (
        <Popup trigger={<button>Open Popup</button>} modal>
            {close => (
                <Result />
            )}
        </Popup>
    );
}
