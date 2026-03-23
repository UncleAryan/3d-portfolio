// Seperation of Concerns principle being applied here
// If I want to change any content, I shouldn't have to dig through the components

export const data = {
	name: "Aryan Panchal",
	title: "Aspiring Engineer & Researcher",
	subtitle:
		"// applying my skills in hardware and software to advance technological development",
	university: "East Stroudsburg University of Pennsylvania",
	email: "aryanpanchal0217@gmail.com",
	github: "https://github.com/UncleAryan",
	linkedin: "https://www.linkedin.com/in/aryan-panchal-84379a277/",

	// structured so it is easier to us map()
	skills: [
		{
			category: "Languages",
			items: ["Java", "C++", "Python", "JavaScript", "C#", "C", "Assembly"],
		},
		{
			category: "Web Dev",
			items: [
				"React",
				"Vue.js",
				"Angular",
				"Django",
				"Express.js",
				"Spring Boot",
			],
		},
		{
			category: "Tools",
			items: [
				"Git",
				"Docker",
				"Linux",
				"VS Code",
				"Android Studio",
				"Eclipse",
				"Visual Studio",
				"IntelliJ IDEA",
				"PyCharm",
				"JUnit",
			],
		},
		{
			category: "Relevant Coursework",
			items: [
				"Computer Architecture & Organization",
				"Data Structures & Algorithms",
				"Operating Systems",
				"Software Engineering",
				"Artificial Intelligence",
				"Computer Graphics",
				"Programming Languages",
				"Calculus I",
				"Calculus II",
				"Multivariable Calculus",
				"Discrete Mathematics",
				"Statistics: Probability Theory",
				"Linear Algebra",
			],
		},
	],

	projects: [
		{
			id: 1,
			title: "Homie Hand",
			description:
				"A 2D game engine made entirely from scratch with custom hand-drawn spritesheets.",
			tools: [
				"Java",
				"OOP",
				"Game Loop",
				"Entity Management",
				"Input Handling",
				"Sprite Animation",
				"Scene Management",
				"Collision Detection",
			],
			github: "https://github.com/UncleAryan/HomieHand",
			highlight: true,
		},
		{
			id: 2,
			title: "Custom 3D Rendering Pipeline",
			description:
				"A custom-built 3D rendering pipeline implemented from scratch in Unity3D, demonstrating fundamental computer graphics concepts including matrix transformations, projection, and rasterization using only basic OpenGL line drawing.",
			tools: [
				"C#",
				"Unity",
				"Linear Algebra",
				"Agile Methodologies",
				"Version Control",
			],
			github: "https://github.com/UncleAryan/custom-3d-rendering-pipeline",
			highlight: false,
		},
		{
			id: 2,
			title: "Autonomous Snake Game",
			description:
				"Classic Snake game that plays itself using implementation of A* pathfinding to calculate shortest path to food while dynamically avoiding collisions in real time.",
			tools: [
				"C#",
				"Unity",
				"Advanced Data Structures & Algorithms",
				"Heuristics",
			],
			github: "https://github.com/UncleAryan/Snake-AI",
			highlight: false,
		},
	],

	experience: [
		{
			role: "It Technician/Assistant Application Developer",
			company: "East Stroudsburg University of Pennsylvania",
			period: "December 2024 - Present",
			bullets: [
				"Diagnosed and resolved hardware, software, and network issues, applying systematic troubleshooting methodologies",
				"Delivered technical support to university staff and students, translating user requirements into effective solutions",
				"Systematized the setup, configuration, and maintenance of university computer systems and peripherals, ensuring operational readiness and compliance with IT standards",
				"Assist in development of platform-specific APIs through pipelines using JSON/JavaScript for data serialization and their integration in applications used by the university personnel",
			],
		},
	],
};
