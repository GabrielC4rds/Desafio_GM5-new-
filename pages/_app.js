import React, { useEffect } from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  default: {
    logo: "./static/logo.png",
    mainGreen: "#0E996D",
    mainGray: "#454545"
  }
};

export default function MyApp(props) {
  const { Component, pageProps } = props;

  useEffect(() => {
    (function(w, d, s, l, i) {
      w[l] = w[l] || [];
      w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
      var f = d.getElementsByTagName(s)[0],
        j = d.createElement(s),
        dl = l != "dataLayer" ? "&l=" + l : "";
      j.async = true;
      j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
      f.parentNode.insertBefore(j, f);
    })(window, document, "script", "dataLayer", "GTM-PCFG26R");
  }, [Component]);
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
