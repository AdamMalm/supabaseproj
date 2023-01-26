import Head from "next/head";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="page-layout">
      <Head>
        <title>Projectzite</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {children}
      <style jsx global>{`
        body {
          --tw-bg-opacity: 1;
          background-color: rgb(30 41 59 / var(--tw-bg-opacity));
        }
      `}</style>
    </div>
  );
}