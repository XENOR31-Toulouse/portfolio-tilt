export const profile = {
  name: "Axel Ibanez",
  title: "Développeur Full Stack",
  location: "Toulouse (Compans Caffarelli)",
  about:
    "Je conçois et fais évoluer des applications web complètes. Chez Omena, je travaille sur des interfaces React et Angular, des API Java, des données PostgreSQL, l’automatisation et le déploiement. J’aime construire des systèmes lisibles, testables et durables.",
  contact: {
    phone: "06 11 27 18 43",
    email: "axel.ibanez31000@gmail.com",
  },
  links: {
    linkedin: "https://www.linkedin.com/in/axel-ibanez-9a2918193",
    github: "https://github.com/XENOR31-Toulouse",
  },
  skills: {
    core: [
      "Java", "Spring Boot", "TypeScript", "React", "Angular", "Next.js",
      "PostgreSQL", "Flyway", "Architecture hexagonale", "API REST",
      "Docker", "GitHub Actions", "Rust", "n8n", "Linux / VPS", "Vercel",
      "Cypress", "MySQL", "MongoDB", "Kubernetes", "Kafka", "Git",
      "JavaScript", "HTML", "CSS", "Agile / Scrum",
    ]
  },
  experience: [
    {
      period: "En cours",
      company: "Omena",
      role: "Développeur Full Stack",
      highlights: [
        "Développement d’applications web React/PWA et Angular autour d’API Java Spring Boot",
        "Conception de services en architecture hexagonale et persistance PostgreSQL",
        "Industrialisation des environnements Docker, des pipelines CI/CD et de l’outillage d’exploitation en Rust",
      ],
    },
    {
      period: "2023 - 2025",
      company: "Frequentiel",
      role: "Développeur Full Stack",
      highlights: [
        "Mise en place d’un suivi d’utilisation client (front & back) exposé aux équipes produit",
        "Conception et déploiement de microservices en architecture hexagonale pour une solution SaaS",
        "Formation de l’équipe test aux bonnes pratiques et à l’usage de Cypress"
      ]
    },
    {
      period: "2022 - 2023",
      company: "Frequentiel",
      role: "Développeur Web",
      highlights: [
        "Création d’interfaces Angular pour de nouvelles features",
        "Développement d’une application interne de monitoring des tâches",
        "Corrections et itérations suite aux retours QA"
      ]
    },
    {
      period: "20** - 2022",
      company: "Différents stages",
      role: "Développeur / Maintenance informatique",
      highlights: [
        "Maintenance Windows, Mac, Linux",
        "Pilotage et maintenance de l’infrastructure IT et des SI"
      ]
    }
  ],
  education: [
    { label: "MBA Développeur Full Stack (BAC+5)", school: "MyDigitalSchool", period: "2022 - 2025" },
    { label: "Bachelor Développeur Web (BAC+3)", school: "MyDigitalSchool", period: "2020 - 2022" },
    { label: "BTS SIO", school: "Lycée Polyvalent Pardailhan", period: "" }
  ],
  languages: [
    { label: "Français", level: "Langue maternelle" },
    { label: "Anglais", level: "B2 (TOEIC)" }
  ],
  interests: ["Cinéma", "PC building", "Homelabbing", "Automobile"]
} as const;