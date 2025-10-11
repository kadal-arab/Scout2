import Navbar from "@/components/Navbar/navbar";
import Footer from "@/components/Footer/Footer";

export default function UserLayout({ children }) {
  return (
    <>
      <Navbar
        negara="Indo"
        home="home"
        genre="horror"
        tahun="2029"
        link1={"/"}
      />
      <section>{children}</section>
      <Footer />
    </>
  );
}
