import Assurence from "../component/Assurence";
import Banner from "../component/Banner";
import Categories from "../component/Categories";
import DispalyArea from "../component/DispalyArea";
import Navbar from "../component/Navbar";
import TopNav from "../component/TopNav";


export default function HomePage() {
  return (
    <section className="">
      <TopNav />
      <Navbar />
      <Categories/>
      <Banner/>
      <Assurence/>
      <main className="px-20 pb-20">
        <DispalyArea/>
      </main>
    </section>
  );
}
