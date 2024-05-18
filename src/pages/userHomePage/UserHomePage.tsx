import NavBar from "../../components/navNar/NavBar";
import UploadBtn from "../../components/uploadButton/UploadBtn";
import { imageUrls } from "../../constants/strings";

const UserHomePage = () => {
  return (
    <div style={{ backgroundImage: `url(${imageUrls.imageUrl1})`, backgroundSize: 'cover' }}>
  <NavBar />
  <div className="flex flex-col h-screen justify-center items-center">
    <UploadBtn />
  </div>
</div>
  );
};

export default UserHomePage;
