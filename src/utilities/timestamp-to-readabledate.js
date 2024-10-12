export default function TimestampToReadableDate(timestamp) {
	let convertedDate = new Date(timestamp).toLocaleString("id-ID", {
		weekday: "long",
		day: "numeric",
		month: "long",
		year: "numeric",
	});
	return convertedDate;
}
