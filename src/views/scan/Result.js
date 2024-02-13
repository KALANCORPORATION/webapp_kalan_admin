import React, {useEffect, useRef, useState} from 'react';
import Quagga from '@ericblade/quagga2';
import Scanner from '../../controllers/Scanner';

import '../../styles/ScanStyle.css';
import CodeISBNService from "../../services/codeISBNService";
import addSpaceBookService from "../../services/addSpaceBookService";
import SpaceController from "../../controllers/spaceController";
const accessToken = localStorage.getItem('accessToken');

// Main component App
const App = () => {
    // State variables
    const [scanning, setScanning] = useState(false); // Toggleable state for "should render scanner"
    const [cameras, setCameras] = useState([]); // Array of available cameras
    const [cameraId, setCameraId] = useState(null); // ID of the active camera device
    const [cameraError, setCameraError] = useState(null); // Error message from failing to access the camera
    const [results, setResults] = useState([]); // List of scanned results
    const scannerRef = useRef(null); // Reference to the scanner element in the DOM

    // useEffect to initialize the camera and enumerate available cameras
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
            setScanning(!scanning);
            return cameras;
        };

        enableCamera()
            .then(disableCamera)
            .then(enumerateCameras)
            .then((cameras) => setCameras(cameras))
            .then(() => Quagga.CameraAccess.disableTorch()) // Disable torch at start, in case it was enabled before and we hot-reloaded
            .catch((err) => setCameraError(err));

        return () => disableCamera(); // Cleanup function to disable the camera on unmount
    }, []);

    // List to store scanned ISBNs
    const listOfIsbn = [];

    // Function to add a scanned result to the list
    async function addResultToList(result) {
        if (listOfIsbn.includes(result)) {
            console.log("Le scan est déjà présent", result);
        } else {
            console.log("Le scan a été ajouté", result);
            navigator.vibrate([1, 5, 100]);
            listOfIsbn.push(result);

            // Call the CodeISBNService to handle the scanned ISBN
            CodeISBNService.code(result).then(r => console.log(r));

            const spaceId = await SpaceController.getSpaceId(accessToken);
            const isbnData = JSON.stringify({
                isbn: result
            });

            // const accessToken2 = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidHlwZSI6InJlZmVyZW50IiwiaWF0IjoxNzA3ODIxMTYwLCJleHAiOjE3MDc4MjQ3NjB9.Od4a6_Ve7wAUHv-bjWyknbO9UyQNGuy8SD_mS2PQFXQ";
            // const spaceId2 = 1;

            const message = await addSpaceBookService.addBookToSpaceByIsbn(spaceId, isbnData, accessToken);

            // Display the scanned result in the UI
            return document.querySelector(".results").innerHTML += `<li>${message}</li>`;
        }
    }

    // Render the component
    return (
        <div id="cam">
            {/* Display camera initialization error, if any */}
            {cameraError ?
                <p>ERROR INITIALIZING CAMERA ${JSON.stringify(cameraError)} -- DO YOU HAVE PERMISSION?</p> : null}

            {/* Display cameras dropdown if available */}
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

            {/* Button to start/stop scanning */}
            <button onClick={() => setScanning(!scanning)}>{scanning ? 'Stop' : 'Start'}</button>

            {/* Display scanned results in a list */}
            <ul className="results"></ul>

            {/* Input field for ISBN */}
            <input></input>

            {/* Container for the scanner */}
            <div ref={scannerRef}>
                {/* Canvas for drawing buffer */}
                <canvas className="drawingBuffer" style={{
                    position: 'absolute',
                    border: '3px solid green',
                }} width="640" height="480"/>

                {/* Render the scanner component if scanning is active */}
                {scanning ? <Scanner scannerRef={scannerRef} cameraId={cameraId}
                                     onDetected={(result) => addResultToList(result)}/> : null}
            </div>
        </div>
    );
};

export default App;
