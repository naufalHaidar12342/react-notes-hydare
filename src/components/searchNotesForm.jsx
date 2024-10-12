import { Search, SearchSharp } from "@mui/icons-material";
import { Input } from "@nextui-org/input";
import PropTypes from "prop-types";

SearchNotesForm.propTypes = {
	notesTitle: PropTypes.string.isRequired,
};
export default function SearchNotesForm({ notesTitle }) {
	return (
		<div className="flex items-center gap-2">
			<SearchSharp fontSize="medium" />
			<h2 className="text-2xl font-medium">
				Hasil pencarian untuk: {notesTitle}
			</h2>
		</div>
	);
}
