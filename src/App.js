import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import ConnexionAdminApp from "./pages/ConnexionAdminApp";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

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
      <Route path="/" element={<ConnexionAdminApp />} />
    </Routes>
  );
}
export default App;
