import AdminProductDetail from "../features/admin/components/AdminProductDetail";
import Footer from "../features/common/Footer";
import Navbar from "../features/navbar/Navbar";

function AdminProductDetailPage() {
  return (
    <div>
      <Navbar>
        <AdminProductDetail></AdminProductDetail>
      </Navbar>
      <Footer></Footer>
    </div>
  );
}

export default AdminProductDetailPage;
