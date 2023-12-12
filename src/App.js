import { useEffect } from "react";
// import BarcodeScannerComponent from "react-qr-barcode-scanner";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import ConnexionAdminApp from "./views/login/ConnexionAdminApp";
import CreateAdherent from "./views/adherent/createAdherentByForm";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;
  // const [data, setData] = React.useState("Not Found");
  // const [torchOn, setTorchOn] = React.useState(false);

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  // return (
  //     <>
  //       <BarcodeScannerComponent
  //           width={500}
  //           height={500}
  //           torch={torchOn}
  //           onUpdate={(err, result) => {
  //             if (result) setData(result.text);
  //             else setData("Not Found");
  //           }}
  //       />
  //       <p>{data}</p>
  //       <button onClick={() => setTorchOn(!torchOn)}>
  //         Switch Torch {torchOn ? "Off" : "On"}
  //       </button>
  //     </>
  // );

  return (
    <Routes>
      {/* <Route path="/" element={<ConnexionAdminApp />} /> */}
      <Route path="/" element={<CreateAdherent/>} />
    </Routes>
  );
}
export default App;
