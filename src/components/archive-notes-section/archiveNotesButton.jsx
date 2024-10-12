import { Inventory2Sharp } from "@mui/icons-material";
import PropTypes from "prop-types";

ArchiveNotesButton.propTypes = {
	notesId: PropTypes.number.isRequired,
	onArchive: PropTypes.func.isRequired,
};

export default function ArchiveNotesButton({ notesId, onArchive }) {
	return (
		<button
			className="flex items-center gap-2"
			onClick={() => onArchive(notesId)}
		>
			<Inventory2Sharp fontSize="medium" />
			Arsipkan
		</button>
	);
}
