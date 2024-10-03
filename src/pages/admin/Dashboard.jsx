import AdminHeader from "../../components/admin/AdminHeader"
import AdminSidebar from "../../components/admin/AdminSidebar"
import "../../styles/admin.css";


const AdminDashboard = () => {
  return (
    <div className="admin">
      <AdminSidebar/> 
      {/* <AdminHeader /> */}
    </div>
  )
}

export default AdminDashboard