export default function NotesTitleValidation(notesTitle) {
	const MAX_TITLE_LENGTH = 50;
	const validateTitle = String(notesTitle).substring(0, MAX_TITLE_LENGTH);
	return validateTitle;
}
