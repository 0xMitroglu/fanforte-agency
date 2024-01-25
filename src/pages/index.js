import Header from "@/components/Header";
import Main from "@/components/Main";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="app">
      <div className="app__no__footer">
        <Header></Header>
        <Main></Main>
      </div>
      <Footer></Footer>
    </div>
  );
}
