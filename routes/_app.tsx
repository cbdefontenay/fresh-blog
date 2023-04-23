import { AppProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";
import Footer from "../components/Footer.tsx";
import Navigation from "../islands/Navigation.tsx";

export default function App({ Component }: AppProps) {
  return (
    <>
      <Head>
        <title>Deno Blog</title>
      </Head>
      <Navigation />
      <Footer />
      <Component />
    </>
  );
}
