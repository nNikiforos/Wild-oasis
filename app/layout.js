import Logo from "./components/Logo";
import Navigation from "./components/Navigation";

export const metadata = { title: "The Wild Oasis nigger" };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          <Logo />
          <Navigation />
        </header>
        <main>{children}</main>
        <footer>Copyright by the wild</footer>
      </body>
    </html>
  );
}
