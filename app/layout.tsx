import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/collaborate/ThemeProviders";

const inter = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Talentsync Frontend Assessment Task",
  description: "This is the Assessment Task from Talentsync for Frontend Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >

          <div>
          
          
            <div className=" w-full h-screen overflow-hidden overflow-y-auto no-scrollbar">
              {children}
            </div>
         
          </div>

         
        </ThemeProvider>
      </body>
    </html>
  );
}

