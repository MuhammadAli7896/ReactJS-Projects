import "./App.css";
import { useEffect, useState } from "react";

const MousePosition = ({ render }) => {
	const [mousePosition, setMousePosition] = useState({
		x: 0,
		y: 0,
	});

	useEffect(() => {
		const handleMousePositionChange = (e) => {
			setMousePosition({
				x: e.clientX,
				y: e.clientY
			});
		};

		window.addEventListener("mousemove", handleMousePositionChange);

		return () => {
			window.removeEventListener("mousemove", handleMousePositionChange);
		};
	}, []);

	return render({ mousePosition });
};

const PanelMouseLogger = ({ mousePosition }) => {
	if (!mousePosition) {
		return null;
	}

	const renderContent = () => {
		return (
			<div className="BasicTracker">
				<p>Mouse position:</p>
				<div className="Row">
					<span>x: {mousePosition.x}</span>
					<span>y: {mousePosition.y}</span>
				</div>
			</div>
		);
	};

	return renderContent();
};

const PointMouseLogger = ({ mousePosition }) => {
	if (!mousePosition) {
		return null;
	}

	const renderContent = () => {
		return (
			<p>
				({mousePosition.x}, {mousePosition.y})
			</p>
		);
	};

	return renderContent();
};

function App() {
	return (
		<div className="App">
			<header className="Header">Little Lemon Restaurant 🍕</header>
			<MousePosition
				render={({ mousePosition }) => (
					<>
						<PanelMouseLogger mousePosition={mousePosition} />
						<PointMouseLogger mousePosition={mousePosition} />
					</>
				)}
			/>
		</div>
	);
}

export default App;
