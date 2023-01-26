import { useState } from "react";
import { AppProps, type AppType } from "next/app";
import { api } from "../utils/api";
import "../styles/globals.css";
import Layout from "../components/Layout";
import { createBrowserSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { SessionContextProvider, Session } from "@supabase/auth-helpers-react";

const MyApp = ({
  Component,
  pageProps,
}: AppProps<{ initialSession: Session }>) => {
  const [supabase] = useState(() => createBrowserSupabaseClient());

  return (
    <>
      <SessionContextProvider
        supabaseClient={supabase}
        initialSession={pageProps.initialSession}
      >
        <Layout>
          <Component {...pageProps} />;
        </Layout>
      </SessionContextProvider>
    </>
  );
};

export default api.withTRPC(MyApp);
