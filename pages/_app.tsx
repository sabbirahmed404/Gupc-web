import "../styles/globals.css";
import type { AppProps } from "next/app";
import NavBar from "../components/NavigationBar/NavBar";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="flex flex-col min-h-screen">
      {/* NavBar with highest z-index */}
      <div className="fixed top-0 left-0 w-full" style={{ zIndex: 9999 }}>
        <NavBar />
      </div>
      
      {/* Main content with medium z-index */}
      <main className="flex-grow" style={{ zIndex: 1, position: "relative" }}>
        <Component {...pageProps} />
      </main>
    </div>
  );
}

export default MyApp;
