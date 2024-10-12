import { BeenhereSharp } from "@mui/icons-material";
import PropTypes from "prop-types";

ActiveNotesButton.propTypes = {
	notesId: PropTypes.number.isRequired,
	onActivate: PropTypes.func.isRequired,
};
export default function ActiveNotesButton({ notesId, onActivate }) {
	return (
		<button
			className="flex items-center gap-2"
			onClick={() => onActivate(notesId)}
		>
			<BeenhereSharp fontSize="medium" />
			Aktifkan catatan
		</button>
	);
}
