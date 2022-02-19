import React from "react";

const DataFilter = ({ setFilter }) => {
	return (
		<div className="d-flex justify-content-between">
			<div className="d-flex justify-content-center align-items-center">
				<span>Show</span>
				<input
					type="number"
					defaultValue={10}
					className="form-control form-control-sm mx-2 w-25"
					onBlur={(e) => setFilter(e.target.value)}
				/>
				<span>entries</span>
			</div>

			<div className="d-flex justify-content-center align-items-center">
				<span>Search:</span>
				<input type="text" className="form-control form-control-sm mx-2" />
			</div>
		</div>
	);
};

export default DataFilter;
