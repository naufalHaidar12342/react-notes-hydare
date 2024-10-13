import NotesForm from "./components/notesForm.jsx";
import ActiveNotesBody from "./components/active-notes-section/activeNotesBody.jsx";
import ArchiveNotesBody from "./components/archive-notes-section/archiveNotesBody.jsx";
import { useState } from "react";
import getInitialNotes from "./utilities/initial-notes.js";
import TimestampGenerator from "./utilities/timestamp-generator.js";
import TimestampISOFormatGenerator from "./utilities/timestamp-isoformat-generator.js";
import SearchNotesForm from "./components/searchNotesForm.jsx";

export default function App() {
	const [notes, setNotes] = useState(getInitialNotes());

	const onActivateNote = (notesId) => {
		const updatedNotes = notes.map((note) => {
			if (note.id === notesId) {
				return { ...note, archived: false };
			}
			return note;
		});
		setNotes(updatedNotes);
	};

	const onArchiveNote = (notesId) => {
		const updatedNotes = notes.map((note) => {
			if (note.id === notesId) {
				return { ...note, archived: true };
			}
			return note;
		});
		setNotes(updatedNotes);
	};

	const onDeleteNote = (notesId) => {
		const updatedNotes = notes.filter((note) => note.id !== notesId);
		setNotes(updatedNotes);
	};

	const onNewNoteHandler = (notesTitle, notesContent) => {
		const newNote = {
			id: TimestampGenerator(),
			title: notesTitle,
			body: notesContent,
			archived: false,
			createdAt: TimestampISOFormatGenerator(),
		};
		setNotes([...notes, newNote]);
	};

	const onSearchNotesHandler = (notesTitle) => {
		const searchedNotes = notes.filter((note) =>
			note.title.toLowerCase().includes(notesTitle.toLowerCase())
		);
		console.log("searched Notes=", searchedNotes);
	};
	return (
		<div className="flex flex-col py-10 gap-10">
			<NotesForm newNotesHandler={onNewNoteHandler} />
			<SearchNotesForm notesTitleFunction={onSearchNotesHandler} />
			<ActiveNotesBody
				listOfActiveNotes={notes}
				activeNotesFunction={onActivateNote}
				archiveNotesFunction={onArchiveNote}
				deleteNotesFunction={onDeleteNote}
			/>
			<ArchiveNotesBody
				listOfArchiveNotes={notes}
				activeNotesFunction={onActivateNote}
				archiveNotesFunction={onArchiveNote}
				deleteNotesFunction={onDeleteNote}
			/>
		</div>
	);
}
