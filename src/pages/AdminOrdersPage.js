import AdminOrders from "../features/admin/components/AdminOrders";
import Footer from "../features/common/Footer";
import Navbar from "../features/navbar/Navbar";

function AdminOrdersPage() {
  return (
    <div>
      <Navbar>
        <AdminOrders></AdminOrders>
      </Navbar>
      <Footer></Footer>
    </div>
  );
}

export default AdminOrdersPage;
