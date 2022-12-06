import { ColorModeScript } from "@chakra-ui/react";
import { theme } from "../styles/theme";
import Header from "./header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <Header />
      <body>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        {children}
      </body>
    </html>
  );
}
