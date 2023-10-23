import Footer from "../features/common/Footer";
import Navbar from "../features/navbar/Navbar";
import UserProfile from "../features/user/components/UserProfile";

function UserProfilePage() {
  return (
    <div>
      <Navbar>
        <h1 className="text-3xl my-5 font-bold tracking-tight text-gray-900">
          My Profile
        </h1>
        <UserProfile></UserProfile>
      </Navbar>
      <Footer></Footer>
    </div>
  );
}

export default UserProfilePage;
