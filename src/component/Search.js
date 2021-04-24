import React from "react";

function Search(props) {
	return (
		<div>
			<input onChange={(e) => props.setKeyword(e.target.value)} />
		</div>
	);
}

export default Search;
