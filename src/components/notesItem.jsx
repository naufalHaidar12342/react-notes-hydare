import TimestampToReadableDate from "../utilities/timestamp-to-readabledate.js";
import ActiveNotesButton from "./active-notes-section/activeNotesButton.jsx";
import ArchiveNotesButton from "./archive-notes-section/archiveNotesButton.jsx";
import DeleteNotesButton from "./deleteNotesButton.jsx";
import PropTypes from "prop-types";

NotesItem.propTypes = {
	noteId: PropTypes.number.isRequired,
	noteTitle: PropTypes.string.isRequired,
	noteContent: PropTypes.string.isRequired,
	noteArchiveStatus: PropTypes.bool.isRequired,
	noteCreatedAt: PropTypes.string.isRequired,
	deleteNoteFunction: PropTypes.func.isRequired,
	activateNoteFunction: PropTypes.func.isRequired,
	archiveNoteFunction: PropTypes.func.isRequired,
};
export default function NotesItem({
	noteId,
	noteTitle,
	noteContent,
	noteArchiveStatus,
	noteCreatedAt,
	deleteNoteFunction,
	activateNoteFunction,
	archiveNoteFunction,
}) {
	// console.log("notes id=", noteId);

	return (
		<div
			className="flex flex-col p-4 border-2 border-notes-dark rounded-lg dark:border-notes-light hover:border-notes-secondary dark:hover:border-notes-primary hover:cursor-default hover:-translate-x-2 hover:-translate-y-2 hover:transition hover:ease-in-out"
			key={noteId}
		>
			<h3 className="font-medium">{noteTitle}</h3>
			<span>{TimestampToReadableDate(noteCreatedAt)}</span>
			<p className="mt-4">{noteContent}</p>
			<div className="flex flex-col my-6 gap-4">
				{noteArchiveStatus === true ? (
					<ActiveNotesButton
						notesId={noteId}
						onActivate={activateNoteFunction}
					/>
				) : (
					<ArchiveNotesButton
						notesId={noteId}
						onArchive={archiveNoteFunction}
					/>
				)}
				<DeleteNotesButton notesId={noteId} onDelete={deleteNoteFunction} />
			</div>
		</div>
	);
}
