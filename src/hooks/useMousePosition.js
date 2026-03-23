import { useEffect, useState } from "react";

export function useMousePosition() {
	const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

	useEffect(() => {
		// normalizing position to [-1, 1]
		// x=0: (0 / width) * 2 - 1 = -1
		// x=0.5: (0.5) * 2 - 1 = 0
		// x=1: (1) * 2 - 1 = 1
		const handleMouseMove = (e) => {
			setMousePosition({
				x: (e.clientX / window.innerWidth) * 2 - 1,
				y: -(e.clientY / window.innerHeight) * 2 + 1,
			});
		};
		window.addEventListener("mousemove", handleMouseMove);

		// to avoid memory leak we remove listener after component is gone
		return () => window.removeEventListener("mousemove", handleMouseMove);
	}, []);

	return mousePosition;
}
