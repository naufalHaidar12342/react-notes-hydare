import ThemeSwitcher from "./themeSwitcher.jsx";
import TodayDate from "./todayDate.jsx";

export default function Header() {
	return (
		<header className="flex flex-col ">
			<h1 className="text-3xl font-bold">Catatan Pribadi</h1>
			<div className="flex gap-2 items-center ">
				<ThemeSwitcher />
				<TodayDate />
			</div>
		</header>
	);
}
