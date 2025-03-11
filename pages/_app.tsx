import "../styles/globals.css";
import type { AppProps } from "next/app";
import NavBar from "../components/NavigationBar/NavBar";
import { useEffect } from "react";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  // Handle hash links and smooth scrolling
  useEffect(() => {
    // Handler for hash changes
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash) {
        // Wait a bit for any page transitions
        setTimeout(() => {
          const element = document.querySelector(hash);
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }, 300);
      }
    };

    // Handle initial hash on page load
    if (router.asPath.includes('#')) {
      handleHashChange();
    }

    // Listen for hash changes
    router.events.on('hashChangeComplete', handleHashChange);
    window.addEventListener('hashchange', handleHashChange);

    return () => {
      router.events.off('hashChangeComplete', handleHashChange);
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, [router]);

  return (
    <>
      <NavBar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
