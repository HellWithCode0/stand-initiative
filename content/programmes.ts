export type Ball = "red" | "blue" | "jack";

export type Programme = {
  id: string;
  name: string;
  kind: string;
  focus: string;
  ball: Ball;
  summary: string;
  serves: string;
  covers: { title: string; items: string[] };
  how: string;
  /** What still needs adding about how people take part. */
  howPending: string | null;
  outcome: string;
  /** Link to the resource itself, once it is public. */
  link: string | null;
  linkLabel: string;
  cta: { label: string; href: string };
};

export const programmes: Programme[] = [
  {
    id: "stand-out",
    name: "STAND Out",
    kind: "Inclusive Sport Ambassador Toolkit",
    focus: "Youth advocacy",
    ball: "red",
    summary:
      "A practical training resource in six modules that gives students the knowledge and tools to advocate for disability inclusive sport.",
    serves:
      "School students who want to make sport and recreation in their own school and community more inclusive.",
    covers: {
      title: "What the six modules cover",
      items: [
        "The social model of disability",
        "Respectful language and communication",
        "Physical and attitudinal barriers to sport",
        "Principles of inclusive recreation",
        "Why autonomy and dignity matter",
        "Promoting accessibility in schools and communities",
      ],
    },
    how: "Students work through case studies, practical scenarios and reflection exercises, then use the guidance to take action in their own school.",
    howPending: "ADD HOW STUDENTS ACCESS THE TOOLKIT",
    outcome:
      "Students who can recognise barriers to participation and lead practical change in their schools and communities.",
    link: null,
    linkLabel: "Open the toolkit",
    cta: { label: "Become an ambassador", href: "/get-involved#ambassador" },
  },
  {
    id: "stand-up-the-cause",
    name: "STAND Up the Cause",
    kind: "Interview series",
    focus: "Awareness",
    ball: "blue",
    summary:
      "Conversations with para athletes, disability advocates, coaches and professionals who work in inclusive recreation.",
    serves:
      "Students, families, schools and anyone who wants to understand inclusive sport through the people who live and work in it.",
    covers: {
      title: "What the series explores",
      items: [
        "Barriers to taking part in sport",
        "Representation and accessibility",
        "How adaptive sports develop",
        "How sport builds confidence, autonomy, independence and belonging",
      ],
    },
    how: "Each conversation turns lived experience into something students and schools can learn from and act on.",
    howPending: null,
    outcome:
      "Wider awareness of adaptive sport, grounded in the experience of athletes and the people who support them.",
    link: null,
    linkLabel: "Read and watch the series",
    cta: { label: "Suggest a conversation", href: "/contact?topic=media" },
  },
  {
    id: "equipment",
    name: "Adaptive equipment",
    kind: "With Help Each Other",
    focus: "Material support",
    ball: "jack",
    summary:
      "STAND raises funds and, through its collaboration with Help Each Other, directs them towards adaptive sporting equipment.",
    serves:
      "Children and young people with disabilities who need the right equipment before they can take part.",
    covers: {
      title: "How the work fits together",
      items: [
        "Fundraising in schools and communities",
        "Directing funds towards adaptive sporting equipment",
        "Supporting existing disability and sports programmes, rather than duplicating them",
      ],
    },
    how: "Funds raised by STAND go towards adaptive sporting equipment through our collaboration with Help Each Other.",
    howPending: "ADD HOW EQUIPMENT NEEDS ARE CHOSEN, AND WHERE IT GOES",
    outcome:
      "More children and young people able to play, because the equipment they need is there.",
    link: null,
    linkLabel: "",
    cta: { label: "Donate to the equipment fund", href: "/donate" },
  },
];
