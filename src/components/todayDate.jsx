import TodayDateInAsiaJakartaTimezoneGenerator from "../utilities/today-date-asiajakarta-generator.js";

export default function TodayDate() {
	return (
		<span className="font-medium">
			{TodayDateInAsiaJakartaTimezoneGenerator()}
		</span>
	);
}
