import React from "react";
import BarcodeScannerComponent from "react-qr-barcode-scanner";
import "./asset/styles.css";

function App() {
  const [data, setData] = React.useState("Not Found");
  const [torchOn, setTorchOn] = React.useState(false);

  return (
<<<<<<< Updated upstream
    <>
      <BarcodeScannerComponent
        width={500}
        height={500}
        torch={torchOn}
        onUpdate={(err, result) => {
          if (result) setData(result.text);
          else setData("Not Found");
        }}
      />
      <p>{data}</p>
      <button onClick={() => setTorchOn(!torchOn)}>
        Switch Torch {torchOn ? "Off" : "On"}
      </button>
    </>
=======
    <Routes>
      {/* <Route path="/" element={<ConnexionAdminApp />} /> */}
      <Route path="/" element={<CreateAdherent />} />
    </Routes>
>>>>>>> Stashed changes
  );
}

export default App;
