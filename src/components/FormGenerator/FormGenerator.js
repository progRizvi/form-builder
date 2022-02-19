import axios from "axios";
import { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const FormGenerator = () => {
	const buttons = ["Text", "Number", "Date", "Text Area"];
	const [formItems, setFormItems] = useState([]);

	const { register, handleSubmit } = useForm();
	const navigate = useNavigate();

	const onSubmit = (data) => {
		const url = "https://form-generator-server.herokuapp.com/formData";
		axios.post(url, data).then((res) => {
			console.log(res);
			if (res.data.insertedId) {
				navigate("/");
			}
		});
	};

	return (
		<Container className="mt-3">
			<Row>
				<Col>
					<Form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
						<Form.Group controlId="formBasicEmail">
							<Form.Label>Form Name</Form.Label>
							<Form.Control type="text" {...register("FormName")} />
							{formItems.map((item, index) => (
								<div className=" mt-4" key={index}>
									<Form.Label>{item}</Form.Label>
									<Form.Control type="text" {...register(item)} />
								</div>
							))}
							{formItems.length !== 0 && (
								<Button type="submit" className="mt-3" variant="success">
									Generate
								</Button>
							)}
						</Form.Group>
					</Form>
				</Col>
				<Col>
					<div>
						{buttons.map((item, index) => (
							<Button
								key={index}
								variant="primary"
								type="submit"
								className="d-flex flex-column ms-auto mt-3"
								onClick={() => setFormItems([...formItems, item])}
							>
								{item}
							</Button>
						))}
					</div>
				</Col>
			</Row>
		</Container>
	);
};

export default FormGenerator;
