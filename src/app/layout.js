import "./globals.css";

export const metadata = {
  title: "PSK portfolio",
  description: "Generated by PSK",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <meta name="viewport" content="width=640"/>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;600;800&display=swap" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css2?family=Caveat:wght@400..700&family=Noto+Sans+KR:wght@400;600;800&display=swap" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css2?family=Caveat:wght@400..700&family=Noto+Sans+KR:wght@400;600;800&family=Orbit&display=swap" rel="stylesheet"/>
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
