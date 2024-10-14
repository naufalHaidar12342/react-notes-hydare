"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import NightsStaySharpIcon from "@mui/icons-material/NightsStaySharp";
import Brightness7SharpIcon from "@mui/icons-material/Brightness7Sharp";
import { Button } from "@nextui-org/button";

export default function ThemeSwitcher() {
	const [mounted, setMounted] = useState(false);
	const { theme, setTheme } = useTheme();

	useEffect(() => setMounted(true), []);

	if (!mounted) return null;

	return (
		<div>
			{theme === "dark" ? (
				<Button
					title="Switch to light theme"
					startContent={<Brightness7SharpIcon className="" />}
					onPress={() => setTheme("light")}
					className=""
					radius="sm"
					variant="light"
					isIconOnly
				></Button>
			) : (
				<Button
					title="Switch to dark theme"
					startContent={<NightsStaySharpIcon />}
					onPress={() => setTheme("dark")}
					radius="sm"
					variant="light"
					isIconOnly
				></Button>
			)}
		</div>
	);
}
