import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";  // Import Footer component
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "CodeBank- All in one Programming Resources",
  description: "by GKmeena",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-p-20 scroll-smooth">
      <body className={`${inter.className} flex flex-col min-h-screen`}>
      <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
        <Navbar/>
        <main className="flex-grow">{children}</main>
        <Footer/>
        </ThemeProvider>
      </body>
    </html>
  );
}
