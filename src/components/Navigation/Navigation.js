import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Navigation = () => {
	return (
		<Navbar bg="primary" variant="dark">
			<Container>
				<NavLink
					className="text-white pe-2 text-decoration-none fw-bold"
					to="/"
				>
					Form Builder
				</NavLink>
				<Nav className="ms-auto">
					{["Home", "Generate Form"].map((item, index) => (
						<NavLink
							to={item === "Generate Form" ? "generate-form" : "home"}
							className="text-white pe-2 text-decoration-none"
							key={index}
						>
							{item}
						</NavLink>
					))}
				</Nav>
			</Container>
		</Navbar>
	);
};

export default Navigation;
