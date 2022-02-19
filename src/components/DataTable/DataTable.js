import React from "react";
import { Button, Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const DataTable = ({ formData, filter }) => {
	const navigation = useNavigate();
	return (
		<Table striped bordered hover className="mt-3">
			<thead>
				<tr>
					<th>SL.</th>
					<th>Name</th>
					<th>Action</th>
				</tr>
			</thead>
			<tbody>
				{formData.slice(0, filter).map((data, index) => (
					<tr key={data?._id}>
						<td>{index + 1}</td>
						<td
							className="w-75 text-primary"
							role="button"
							onClick={() => navigation(`/form-make/${data?._id}`)}
						>
							{data?.FormName}
						</td>
						<td className="w-25">
							<Button
								variant="success"
								onClick={() => navigation(`/form-view/${data?.FormName}`)}
							>
								Reports
							</Button>
						</td>
					</tr>
				))}
			</tbody>
		</Table>
	);
};

export default DataTable;
