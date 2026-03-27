import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Always use createRoot — the pre-rendered HTML in dist/ is served to
// crawlers for SEO. React renders fresh on the client, avoiding hydration
// mismatches caused by Framer Motion animation states differing between
// react-snap's puppeteer render and the live browser.
createRoot(document.getElementById("root")!).render(<App />);
