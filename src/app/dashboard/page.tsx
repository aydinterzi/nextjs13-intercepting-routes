import React from "react";
import Link from "next/link";
const Dashboard = () => {
  return (
    <div>
      Dashboard Link
      <Link href="/dashboard/post/1">Tıkla bağalım</Link>
    </div>
  );
};

export default Dashboard;
