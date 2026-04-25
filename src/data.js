export const profile = {
    name: 'Aryan Panchal',
    title: 'Aspiring Computer Engineer',
    subtitle: '// applying skills in hardware & software to technological advancements',
    bio: '',
    location: '',
    education: '',
    status: '',
    email: '',
    github: '',
    linkedin: '',
    resumeURL: '',
}

export const skills = [
    {
        category: 'Core Language',
        items: ['Java', 'C++', "Python", "JavaScript", "C#", "C", "Assembly"],
    }, {
        category: 'Web Dev',
        items: ['React', 'Django', 'Spring Boot'],
    }, {
        category: 'Tools & DevOps',
        items: ['Git', 'GitHub', 'Docker', 'Linux', 'VSCode', 'Visual Studio', 'IntelliJ IDEA', 'Eclipse', 'Unity', 'LLMs (Claude Code, etc.)'],
    }, {
        category: 'Core Coursework',
        items: ['Programming Principles & Practices', 'Computer Organization & Architecture', 'Data Structures & Algorithms', 'Cybersecurity', 'Operating Systems', 'Programming Languages', 'Software Engineering'],
    }, {
        category: 'Supplemental Coursework',
        items: ['Calculus I/II/III', 'Discrete Math Structures', 'Probability Theory', 'Linear Algebra', 'Artificial Intellignce', 'Computer Graphics'],
    }
]

export const projects = [
  {
    id: 1,
    title: 'Homie Hand',
    description: 'A 2D game engine built entirely from scratch with a custom game loop, entity management, and hand-drawn spritesheets.',
    tools: ['Java', 'OOP', 'Sprite Animation', 'Collision Detection', 'Scene Management'],
    github: 'https://github.com/UncleAryan/HomieHand',
    demo: null,
    highlight: true,
  },
  {
    id: 2,
    title: 'Custom 3D Rendering Pipeline',
    description: 'A 3D rendering pipeline built from scratch in Unity demonstrating matrix transformations, projection, and rasterization using basic OpenGL line drawing.',
    tools: ['C#', 'Unity', 'Linear Algebra', 'Computer Graphics'],
    github: 'https://github.com/UncleAryan/custom-3d-rendering-pipeline',
    demo: null,
    highlight: false,
  },
  {
    id: 3,
    title: 'Autonomous Snake Game',
    description: 'Classic Snake that plays itself using A* pathfinding to find the shortest route to food while dynamically avoiding collisions in real time.',
    tools: ['C#', 'Unity', 'A* Algorithm', 'Heuristics'],
    github: 'https://github.com/UncleAryan/Snake-AI',
    demo: null,
    highlight: false,
  },
]

export const experience = [
  {
    role: 'IT Technician / Assistant Application Developer',
    company: 'East Stroudsburg University of Pennsylvania',
    period: 'December 2024 - Present',
    bullets: [
      'Diagnosed and resolved hardware, software, and network issues using systematic troubleshooting.',
      'Delivered technical support to staff and students, translating user requirements into solutions.',
      'Configured and maintained university computer systems and peripherals.',
      'Assisted development of platform-specific APIs using JSON/JavaScript for data serialization.',
    ],
  },
]

export const socialKeys = [
  {
    label: 'GH',
    platform: 'GitHub',
    url: 'https://github.com/UncleAryan',
    ariaLabel: 'Open GitHub profile',
  },
  {
    label: 'LI',
    platform: 'LinkedIn',
    url: 'https://www.linkedin.com/in/aryan-panchal-84379a277/',
    ariaLabel: 'Open LinkedIn profile',
  },
  {
    label: 'EM',
    platform: 'Email',
    url: 'mailto:aryanpanchal0217@gmail.com',
    ariaLabel: 'Send an email',
  },
]