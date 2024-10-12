import { DeleteForeverSharp } from "@mui/icons-material";
import PropTypes from "prop-types";

DeleteNotesButton.propTypes = {
	notesId: PropTypes.number.isRequired,
	onDelete: PropTypes.func.isRequired,
};
export default function DeleteNotesButton({ notesId, onDelete }) {
	return (
		<button className="flex items-center" onClick={() => onDelete(notesId)}>
			<DeleteForeverSharp fontSize="medium" />
			Hapus
		</button>
	);
}
