export const metadata = {
  title: 'Zwanski Playground',
  description: 'Full-feature creative and AI playground',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: 'sans-serif' }}>
        {children}
      </body>
    </html>
  );
}
