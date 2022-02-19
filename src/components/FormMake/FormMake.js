import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Card, Container, Form, ListGroup } from "react-bootstrap";
import "react-datepicker/dist/react-datepicker.css";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";

const FormMake = () => {
	const { register, handleSubmit } = useForm();
	const { formId } = useParams();
	const [formData, setFormData] = useState({});
	const navigate = useNavigate();
	useEffect(() => {
		const url = `https://form-generator-server.herokuapp.com/formData/${formId}`;

		axios.get(url).then((data) => {
			setFormData(data.data);
		});
	}, [formId]);

	const onSubmit = (data) => {
		const newData = { ...data, FormName: formData.FormName, referId: formId };
		const url = "https://form-generator-server.herokuapp.com/formMakeData";
		console.log(newData);
		console.log(data);
		axios.post(url, newData).then((res) => {
			if (res.data.insertedId) {
				navigate(`/form-view/${formData.FormName}`);
			}
		});
	};
	const formList = Object.values(formData);
	return (
		<Container>
			<Card className="mx-5 mt-5">
				<Card.Header>{formData.FormName}</Card.Header>
				<ListGroup variant="flush">
					<ListGroup.Item>
						<Form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
							<Form.Group className="mb-3" controlId="formBasicEmail">
								{formList.slice(2, formList.length).map((item, index) => (
									<div key={index}>
										<Form.Label className="mt-3">{item}</Form.Label>
										{formData?.Date === item ? (
											<Form.Control type="date" {...register(item)} />
										) : (
											<Form.Control type="text" {...register(item)} />
										)}
									</div>
								))}
								<Button variant="success" type="submit" className="mt-3">
									Submit
								</Button>
							</Form.Group>
						</Form>
					</ListGroup.Item>
				</ListGroup>
			</Card>
		</Container>
	);
};

export default FormMake;
