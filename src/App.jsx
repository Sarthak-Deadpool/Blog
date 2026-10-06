/** @format */
import { useContext, useEffect } from "react";
import { AppContext } from "./context/Context";
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";

function App() {
  const { fetchPosts } = useContext(AppContext);

  useEffect(() => {
    fetchPosts();
  }, []);
  return (
    <div className="flex flex-col justify-between items-center relative min-w-screen min-h-screen overflow-x-hidden">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
