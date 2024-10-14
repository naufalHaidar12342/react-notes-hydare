import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./css/index.css";
import ThemeProviders from "./helpers/theme-providers.jsx";
import Header from "./components/header.jsx";
import Footer from "./components/footer.jsx";
import { Toaster } from "react-hot-toast";
import { Helmet, HelmetProvider } from "react-helmet-async";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<ThemeProviders>
			<Header />
			<Toaster />
			<HelmetProvider>
				<Helmet prioritizeSeoTags>
					<meta property="og:title" content="React Catatan Pribadi" />
					<meta
						property="og:description"
						content="Aplikasi catatan pribadi oleh
		Hydare."
					/>
					<meta property="og:site_name" content="React Catatan Pribadi" />
					<meta
						property="og:url"
						content="https://react-notes-hydare.vercel.app"
					/>
					<meta
						property="og:image"
						content="https://raw.githubusercontent.com/naufalHaidar12342/react-notes-hydare/refs/heads/main/public/calum-macaulay-CxYHfBkC0vs-unsplash.jpg"
					/>
					<meta property="og:image:width" content="1200" />
					<meta property="og:image:height" content="630" />
					<meta
						property="og:image:alt"
						content="Filling a blank page. Photo by Calum MacAulay(https://unsplash.com/@calum_mac?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash) on Unsplash (https://unsplash.com/photos/person-writing-on-notepad-CxYHfBkC0vs?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash)"
					/>
				</Helmet>
				<App />
			</HelmetProvider>
			<Footer />
		</ThemeProviders>
	</StrictMode>
);
