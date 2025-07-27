// src/layouts/HomeLayout.jsx
import Navbar from "../components/Navbar";

export default function HomeLayout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  );
}
