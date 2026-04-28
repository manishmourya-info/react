import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AppRoutes from "./routes/AppRoutes";
import './App.css'

function App() {
  
  return (
    <>

     <div className="min-h-screen flex flex-col bg-white text-black dark:bg-gray-900 dark:text-white transition">
         <Navbar />
              <main className="flex-1">
                <AppRoutes />
              </main>
          <Footer />
      </div>
    </>
  );
}

export default App
