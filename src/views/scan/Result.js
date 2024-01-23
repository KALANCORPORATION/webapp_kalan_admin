import React, { useState, useRef, useEffect, useCallback } from 'react';
import Quagga from '@ericblade/quagga2';
import Scanner from '../../controllers/Scanner';
import Result from '../../views/scan/Result';

import '../../styles/ScanStyle.css';
import CodeISBNService from "../../services/codeISBNService";


const App = () => {
    const [scanning, setScanning] = useState(false); // toggleable state for "should render scanner"
    const [cameras, setCameras] = useState([]); // array of available cameras, as returned by Quagga.CameraAccess.enumerateVideoDevices()
    const [cameraId, setCameraId] = useState(null); // id of the active camera device
    const [cameraError, setCameraError] = useState(null); // error message from failing to access the camera
    const [results, setResults] = useState([]);// list of scanned results
    const scannerRef = useRef(null); // reference to the scanner element in the DOM


    useEffect(() => {
        const enableCamera = async () => {
            navigator.vibrate([1, 5, 100]);
            await Quagga.CameraAccess.request(null, {});
        };
        const disableCamera = async () => {
            navigator.vibrate([1, 5, 100]);
            await Quagga.CameraAccess.release();
        };
        const enumerateCameras = async () => {
            const cameras = await Quagga.CameraAccess.enumerateVideoDevices();
            console.log('Cameras Detected: ', cameras);
            setScanning(!scanning)
            return cameras;
        };
        enableCamera()
            .then(disableCamera)
            .then(enumerateCameras)
            .then((cameras) => setCameras(cameras))
            .then(() => Quagga.CameraAccess.disableTorch()) // disable torch at start, in case it was enabled before and we hot-reloaded
            .catch((err) => setCameraError(err));
        return () => disableCamera();
    }, []);

    const listOfIsbn = [];

    function addResultToList(result) {

        if (listOfIsbn.includes(result)){
            console.log("Le scan est déjà présent", result);
        }
        else {
            console.log("Le scan a été ajouté", result);
            navigator.vibrate([1, 5, 100]);
            listOfIsbn.push(result);

            CodeISBNService.code(result).then(r => console.log(r));

            /**
             * c'est ici que les requetes von etre faite
             *
             *CODE DE LA REQUETE
             *
             *
             * @param {results} c'est l'ISBN.
             */

            return document.querySelector(".results").innerHTML += `<li>${result}</li>`;
        }
    }

    return (
        <div id="cam">
            {cameraError ? <p>ERROR INITIALIZING CAMERA ${JSON.stringify(cameraError)} -- DO YOU HAVE PERMISSION?</p> : null}
            {cameras.length === 0 ? <p>Enumerating Cameras, browser may be prompting for permissions beforehand</p> :
                <form>
                    <select onChange={(event) => setCameraId(event.target.value)}>
                        {cameras.map((camera) => (
                            <option key={camera.deviceId} value={camera.deviceId}>
                                {camera.label || camera.deviceId}
                            </option>
                        ))}
                    </select>
                </form>
            }
            <button onClick={() => setScanning(!scanning) }>{scanning ? 'Stop' : 'Start'}</button>
            <ul className="results"></ul>
            <input></input>
            <div ref={scannerRef}>

                {/* <video style={{ width: -webkit-fill-available,, width: window.innerWidth, height: 480, border: '3px solid orange' }}/> */}
                <canvas className="drawingBuffer" style={{
                    position: 'absolute',
                    border: '3px solid green',
                }} width="640" height="480" />
                {scanning ? <Scanner scannerRef={scannerRef} cameraId={cameraId} onDetected={(result) => addResultToList(result)} /> : null}
            </div>

        </div>
    );
};

export default App;
