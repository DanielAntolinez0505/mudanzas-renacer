import Header from "@/components/header";
import ImageCarousel from "@/components/image-carousel";
import Benefits from "@/components/benefits";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <ImageCarousel />
        <Benefits />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
