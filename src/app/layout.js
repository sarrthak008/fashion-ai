import "./globals.css";


export const metadata = {
  title: "FASHION X AI",
  description: "FASHION X AI",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body cz-shortcut-listen="true">
        {children}
      </body>
    </html>
  );
}
