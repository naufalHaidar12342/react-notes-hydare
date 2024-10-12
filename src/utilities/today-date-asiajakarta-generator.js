export default function TodayDateInAsiaJakartaTimezoneGenerator() {
	let today = new Date().toLocaleString("id-ID", {
		weekday: "long",
		day: "numeric",
		month: "long",
		year: "numeric",
		timeZone: "Asia/Jakarta",
	});
	return today;
}
