import { Textarea, Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import { useState } from "react";
import { SaveSharp } from "@mui/icons-material";
import PropTypes from "prop-types";

NotesForm.propTypes = {
	newNotesHandler: PropTypes.func,
};

export default function NotesForm({ newNotesHandler }) {
	const [noteTitleInput, setNoteTitleInput] = useState("");
	const [invalidNoteTitle, setInvalidNoteTitle] = useState(false);
	const [invalidNoteTitleMessage, setInvalidNoteTitleMessage] = useState("");
	const [titleCharactersUntilMax, setTitleCharactersUntilMax] = useState(0);
	const MAX_TITLE_CHARACTERS = 50;

	const [noteContentInput, setNoteContentInput] = useState("");
	const [invalidNoteContent, setInvalidNoteContent] = useState(false);
	const [invalidNoteContentMessage, setInvalidNoteContentMessage] =
		useState("");

	const onTitleChange = (events) => {
		setNoteTitleInput(events.target.value);
		let observedTitleLength = events.target.value.length;
		if (observedTitleLength > MAX_TITLE_CHARACTERS) {
			setInvalidNoteTitle(true);
			setInvalidNoteTitleMessage(
				"Judul catatan melebihi 50 karakter. Coba persingkat lagi."
			);
			setNoteTitleInput(events.target.value.substring(0, MAX_TITLE_CHARACTERS));
		} else {
			setInvalidNoteTitle(false);
			setInvalidNoteTitleMessage("");
			setTitleCharactersUntilMax(MAX_TITLE_CHARACTERS - observedTitleLength);
		}
	};

	const onNotesContentChange = (events) => {
		setNoteContentInput(events.target.value);
		let observedContentLength = events.target.value.length;
		if (observedContentLength === 0) {
			setInvalidNoteContent(true);
			setInvalidNoteContentMessage("Isi catatan tidak boleh kosong.");
		} else {
			setInvalidNoteContent(false);
			setInvalidNoteContentMessage("");
		}
	};
	const onNotesFormSubmit = (events) => {
		events.preventDefault();
		setNoteTitleInput(events.target.value);
		setNoteContentInput(events.target.value);
		newNotesHandler(noteTitleInput, noteContentInput);
	};
	return (
		<form className="flex flex-col gap-5" onSubmit={onNotesFormSubmit}>
			<Input
				type="text"
				label="Judul catatan"
				variant="bordered"
				size="lg"
				isRequired
				description={`Judul catatan dengan maksimal 50 karakter/digit. Karakter tersisa: ${titleCharactersUntilMax}`}
				isClearable
				onChange={onTitleChange}
				value={noteTitleInput}
				isInvalid={invalidNoteTitle}
				errorMessage={invalidNoteTitleMessage}
			/>
			<Textarea
				isRequired
				variant="bordered"
				size="lg"
				maxRows={4}
				description={`Isi catatan Anda`}
				onChange={onNotesContentChange}
				value={noteContentInput}
				isInvalid={invalidNoteContent}
				errorMessage={invalidNoteContentMessage}
			/>
			<Button
				startContent={<SaveSharp />}
				type="submit"
				className="bg-notes-primary "
			>
				Simpan catatan
			</Button>
		</form>
	);
}
