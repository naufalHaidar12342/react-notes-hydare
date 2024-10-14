import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./css/index.css";
import ThemeProviders from "./helpers/theme-providers.jsx";
import Header from "./components/header.jsx";
import Footer from "./components/footer.jsx";
import { Toaster } from "react-hot-toast";
import { HelmetProvider } from "react-helmet-async";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<ThemeProviders>
			<Header />
			<Toaster />
			<HelmetProvider>
				<App />
			</HelmetProvider>
			<Footer />
		</ThemeProviders>
	</StrictMode>
);
