import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers/Providers";
import NavbarChakra from './components/NavbarChakra';
import Footer from './components/Footer';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ByScript",
  description: "Otomatiskan Tradingmu",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          {/* <Navbar /> */}
          <NavbarChakra />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
