"use client"

import { ContextProvider } from "./contexts/Context";
import App from "./routes/routes";

const Page = () => {

  return (
    <ContextProvider>
      <App/>
    </ContextProvider>
  );
}

export default Page;