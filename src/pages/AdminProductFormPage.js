import ProductForm from "../features/admin/components/ProductForm";
import Footer from "../features/common/Footer";
import Navbar from "../features/navbar/Navbar";

function AdminProductFormPage() {
  return (
    <div>
      <Navbar>
        <ProductForm></ProductForm>
      </Navbar>
      <Footer></Footer>
    </div>
  );
}

export default AdminProductFormPage;
