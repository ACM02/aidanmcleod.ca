import SiteHeader from "./sections/SiteHeader";
import MainContent from "./sections/MainContent";
import SiteFooter from "./sections/SiteFooter";


function App() {
  return (
    <>
      <SiteHeader />
      <main className="min-h-screen text-slate-800 font-sans px-6 py-12 text-base sm:text-lg lg:text-xl">
        <MainContent />
        <SiteFooter />
      </main>
    </>

  );
}

export default App;
