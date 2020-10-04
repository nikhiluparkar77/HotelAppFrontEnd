import React from "react";

const AdminFooter = () => {
  const ToDay = new Date();
  return (
    <div className="AdminFooter bg-dark">
      <div className="py-4 pt-1 text-center text-light">
        <p className="m-0">&copy; {ToDay.getFullYear()} All Right Reserve.</p>
      </div>
    </div>
  );
};

export default AdminFooter;
