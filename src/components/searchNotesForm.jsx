import { SearchSharp } from "@mui/icons-material";
import { Input } from "@nextui-org/input";
import PropTypes from "prop-types";
import { useState } from "react";

SearchNotesForm.propTypes = {
	notesTitleFunction: PropTypes.func,
};
export default function SearchNotesForm({ notesTitleFunction }) {
	const [titleSearched, setTitleSearched] = useState("");
	const [invalidTitle, setInvalidTitle] = useState(false);
	const [invalidTitleMessage, setInvalidTitleMessage] = useState("");

	const onTitleSearchedChange = (events) => {
		setTitleSearched(events.target.value);
		let observedTitleLength = events.target.value.length;
		if (observedTitleLength === 0) {
			setInvalidTitle(true);
			setInvalidTitleMessage("Judul catatan yang dicari tidak boleh kosong.");
		} else {
			setInvalidTitle(false);
			setInvalidTitleMessage("");
		}
	};

	const onSearchNotesTitleFormSubmit = (events) => {
		events.preventDefault();
		setTitleSearched(events.target.value);
		notesTitleFunction(titleSearched);
		console.log(`Judul catatan yang dicari: ${titleSearched}`);
	};
	return (
		<div className="flex flex-col gap-2">
			<h2 className="font-medium text-lg">Cari catatan</h2>
			<span className="font-light mb-2">
				Cari catatan yang sudah ada berdasarkan judul catatannya
			</span>
			<form>
				<Input
					type="text"
					size="md"
					variant="faded"
					label="Cari"
					value={titleSearched}
					onChange={onTitleSearchedChange}
					onKeyUp={onSearchNotesTitleFormSubmit}
					invalid={invalidTitle}
					errorMessage={invalidTitleMessage}
					endContent={<SearchSharp fontSize="medium" />}
				/>
			</form>
		</div>
	);
}
