// "use client";
// import { ThemeProvider } from "next-themes";
// import Footer from "./components/layout/footer/Footer";
// import Header from "./components/layout/header";
// import ScrollToTop from "./components/scroll-to-top";
// import "./globals.css";

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en" suppressHydrationWarning>
//       <body>
//         {/* <SessionProvider> */}
//         <ThemeProvider
//           attribute="class"
//           enableSystem={false}
//           defaultTheme="light"
//         >
//           {/* ---------------------Header Starts-----------------  */}
//           <Header />
//           {/* ---------------------Header Ends-------------------  */}
//           {children}
//           {/* ---------------------Footer Starts-----------------  */}
//           <Footer />
//           {/* ---------------------Footer Ends-----------------  */}
//           <ScrollToTop />
//         </ThemeProvider>
//         {/* </SessionProvider> */}
//       </body>
//     </html>
//   );
// }

import { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import Footer from "./components/layout/footer/Footer";
import Header from "./components/layout/header";
import ScrollToTop from "./components/scroll-to-top";
import "./globals.css";

export const metadata: Metadata = {
  title: "Awake Agency",
  description: "Building bold brands with thoughtful design",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <ThemeProvider
          attribute="class"
          enableSystem={false}
          defaultTheme="light"
        >
          <Header />
          {children}
          <Footer />
          <ScrollToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
