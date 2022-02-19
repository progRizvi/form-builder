import axios from "axios";
import { useEffect, useState } from "react";
import { Card, Container, ListGroup } from "react-bootstrap";
import DataFilter from "../DataFilter/DataFilter";
import DataTable from "../DataTable/DataTable";
const Home = () => {
	const [formData, setFormData] = useState([]);
	const [filter, setFilter] = useState(10);

	useEffect(() => {
		const url = "https://form-generator-server.herokuapp.com/formData";
		axios.get(url).then((data) => setFormData(data.data));
	}, []);
	return (
		<Container>
			<Card className="mx-5 mt-5">
				<Card.Header>Form List</Card.Header>
				<ListGroup variant="flush">
					<ListGroup.Item>
						<DataFilter setFilter={setFilter} />
						<DataTable formData={formData} filter={filter} />
					</ListGroup.Item>
				</ListGroup>
			</Card>
		</Container>
	);
};

export default Home;
