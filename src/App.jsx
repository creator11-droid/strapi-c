import { useGlobalContext } from "./Context";
import Hero from "./Hero";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import SubMenu from "./SubMenu";

function App() {
  const { isSidebarOpen } = useGlobalContext();
  return (
    <main>
      <Navbar />
      <Hero />
      <Sidebar />
      <SubMenu />
    </main>
  );
}

export default App;
