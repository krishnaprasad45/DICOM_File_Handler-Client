import NavBar from "../../components/navNar/NavBar";
import UploadBtn from "../../components/uploadButton/UploadBtn";

const UserHomePage = () => {
  return (
    <div>
      <NavBar />
      <div className="flex flex-col h-screen justify-center items-center">
      <UploadBtn />
      </div>
    </div>
  );
};

export default UserHomePage;
