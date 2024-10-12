"use client";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

// eslint-disable-next-line react/prop-types
export default function ThemeProviders({ children }) {
	return (
		<NextUIProvider>
			<NextThemesProvider attribute="class" defaultTheme="dark">
				{children}
			</NextThemesProvider>
		</NextUIProvider>
	);
}
