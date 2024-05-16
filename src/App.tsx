import NavBar from "./components/navNar/NavBar";
import UploadBtn from "./components/uploadButton/UploadBtn";
function App() {
  return (
    <>
      <NavBar />
      <div className="flex flex-col h-screen justify-center items-center">
        <UploadBtn />
      </div>
    </>
  );
}

export default App;
