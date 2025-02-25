import { useState, useEffect, useRef } from "react"
import { Outlet } from "react-router-dom"
import Navbar from "../CreateAccount/SignUp"
import { Toaster } from "react-hot-toast"

const AdminLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarRef = useRef(null);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  const closeSidebar = () => {
    setIsSidebarOpen(false)
  }

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (isSidebarOpen && sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        closeSidebar()
      }
    }

    document.addEventListener("mousedown", handleOutsideClick)

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick)
    }
  }, [isSidebarOpen, closeSidebar])

  return (
    <div className="flex h-screen bg-gray-100">
      {isSidebarOpen && <div className="fixed inset-0 bg-black/15 bg-opacity-50 z-10 lg:hidden" onClick={closeSidebar} />}
      <div className="flex-1 flex flex-col overflow-hidden">
        <Navbar toggleSidebar={toggleSidebar} />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 p-4 lg:p-8 mt-16 lg:ml-64">
          <Outlet />
        </main>
      </div>
      <Toaster />
    </div>
  )
}

export default AdminLayout;