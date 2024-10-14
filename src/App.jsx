import NotesForm from "./components/notesForm.jsx";
import ActiveNotesBody from "./components/active-notes-section/activeNotesBody.jsx";
import ArchiveNotesBody from "./components/archive-notes-section/archiveNotesBody.jsx";
import { useState } from "react";
import getInitialNotes from "./utilities/initial-notes.js";
import TimestampGenerator from "./utilities/timestamp-generator.js";
import TimestampISOFormatGenerator from "./utilities/timestamp-isoformat-generator.js";
import SearchNotesForm from "./components/searchNotesForm.jsx";
import toast from "react-hot-toast";

export default function App() {
	const [notes, setNotes] = useState(getInitialNotes());
	const [notesTitleSearched, setNotesTitleSearched] = useState("");

	const searchedNotes = notes.filter((note) =>
		note.title.toLowerCase().includes(notesTitleSearched.toLowerCase())
	);

	let filteredNotes = notes;
	if (notesTitleSearched !== "") {
		filteredNotes = searchedNotes;
	}

	const onActivateNote = (notesId) => {
		const updatedNotes = notes.map((note) => {
			if (note.id === notesId) {
				return { ...note, archived: false };
			}
			return note;
		});
		setNotes(updatedNotes);
		toast.success("Catatan berhasil diaktifkan");
	};

	const onArchiveNote = (notesId) => {
		const updatedNotes = notes.map((note) => {
			if (note.id === notesId) {
				return { ...note, archived: true };
			}
			return note;
		});
		setNotes(updatedNotes);
		toast.success("Catatan berhasil diarsipkan");
	};

	const onDeleteNote = (notesId) => {
		const updatedNotes = notes.filter((note) => note.id !== notesId);
		setNotes(updatedNotes);
		toast.success("Catatan berhasil dihapus");
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
		toast.success(`Catatan dengan judul ${notesTitle} berhasil ditambahkan!`);
	};

	const onSearchNotesHandler = (notesTitle) => {
		// console.log("notesTitle=", notesTitle);
		setNotesTitleSearched(notesTitle);
	};

	return (
		<div className="flex flex-col py-10 gap-10">
			<NotesForm newNotesHandler={onNewNoteHandler} />
			<SearchNotesForm notesTitleFunction={onSearchNotesHandler} />
			<ActiveNotesBody
				listOfActiveNotes={filteredNotes}
				activeNotesFunction={onActivateNote}
				archiveNotesFunction={onArchiveNote}
				deleteNotesFunction={onDeleteNote}
			/>
			<ArchiveNotesBody
				listOfArchiveNotes={filteredNotes}
				activeNotesFunction={onActivateNote}
				archiveNotesFunction={onArchiveNote}
				deleteNotesFunction={onDeleteNote}
			/>
		</div>
	);
}
