import { BeenhereSharp } from "@mui/icons-material";
import PropTypes from "prop-types";
import NotesItem from "../notesItem";

ActiveNotesBody.propTypes = {
	listOfActiveNotes: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number.isRequired,
			title: PropTypes.string.isRequired,
			body: PropTypes.string.isRequired,
			archived: PropTypes.bool.isRequired,
			createdAt: PropTypes.string.isRequired,
		})
	).isRequired,
	activeNotesFunction: PropTypes.func,
	archiveNotesFunction: PropTypes.func,
	deleteNotesFunction: PropTypes.func,
};

export default function ActiveNotesBody({
	listOfActiveNotes,
	activeNotesFunction,
	archiveNotesFunction,
	deleteNotesFunction,
}) {
	const activeNotesFromProps = listOfActiveNotes.filter(
		(note) => note.archived === false
	);
	return (
		<div className="flex flex-col">
			<div className="flex items-center gap-2">
				<BeenhereSharp fontSize="medium" />
				<h2 className="text-2xl font-medium">Catatan aktif</h2>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mt-6">
				{activeNotesFromProps.map((notes) => (
					<NotesItem
						key={notes.id}
						noteId={notes.id}
						noteTitle={notes.title}
						noteContent={notes.body}
						noteArchiveStatus={notes.archived}
						noteCreatedAt={notes.createdAt}
						activateNoteFunction={activeNotesFunction}
						archiveNoteFunction={archiveNotesFunction}
						deleteNoteFunction={deleteNotesFunction}
					/>
				))}
			</div>
		</div>
	);
}
