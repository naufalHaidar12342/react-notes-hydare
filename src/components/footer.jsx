export default function Footer() {
	return (
		<footer className="flex flex-col md:flex-row">
			<div className="flex flex-col gap-2">
				<h3 className="text-xl font-medium">
					{"@2024. Aplikasi Catatan Pribadi."}
				</h3>
				<a
					href="https://github.com/naufalHaidar12342"
					target="_blank"
					className="font-light hover:underline hover:decoration-notes-secondary hover:-translate-x-2 hover:-translate-y-2 hover:ease-linear hover:duration-75"
				>
					naufalHaidar12342
				</a>
			</div>
		</footer>
	);
}
