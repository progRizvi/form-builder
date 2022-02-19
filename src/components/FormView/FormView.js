import axios from "axios";
import { useEffect, useState } from "react";
import { Card, Container, ListGroup, Table } from "react-bootstrap";
import { useParams } from "react-router-dom";
import DataFilter from "../DataFilter/DataFilter";

const FormView = () => {
	const [filter, setFilter] = useState(10);
	const [formData, setFormData] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const { formId } = useParams();
	useEffect(() => {
		const url = `https://form-generator-server.herokuapp.com/formMakeData/${formId}`;
		axios.get(url).then((data) => {
			setFormData(data.data);
			setIsLoading(false);
		});
	}, [formId]);
	if (isLoading) {
		return <div>Loading...</div>;
	}
	let DataKeys;
	if (formData.length !== 0) {
		DataKeys = Object.keys(formData[0]);
	}
	return (
		<Container>
			<Card className="mx-5 mt-5">
				<Card.Header>{formId}</Card.Header>
				<ListGroup variant="flush">
					<ListGroup.Item>
						<DataFilter setFilter={setFilter} />
						<Table striped bordered hover className="mt-3">
							<thead>
								<tr>
									{formData.length !== 0 ? (
										DataKeys?.slice(1, DataKeys.length - 2).map(
											(item, index) => <th key={index}>{item}</th>
										)
									) : (
										<th>No Data available</th>
									)}
								</tr>
							</thead>
							<tbody>
								{formData.slice(0, filter).map((data, index) => (
									<tr key={data?._id}>
										{Object.values(formData[index])
											.slice(1, Object.values(formData[index]).length - 2)
											.map((item, index) => (
												<td key={index}>{item}</td>
											))}
									</tr>
								))}
							</tbody>
						</Table>
					</ListGroup.Item>
				</ListGroup>
			</Card>
		</Container>
	);
};

export default FormView;
