export type Category = "Announcements" | "Resources" | "Partnerships" | "Press";

export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "list"; items: string[] };

export type Post = {
  slug: string;
  title: string;
  category: Category;
  /** ISO date, for example "2026-11-27". null shows an [ADD DATE] tag. */
  date: string | null;
  summary: string;
  body: Block[];
};

/**
 * Newest first. To add a post, copy one entry and change it. Every fact in
 * these first posts comes from STAND's own site; dates still need adding.
 */
export const posts: Post[] = [
  {
    slug: "introducing-stand",
    title: "Introducing STAND",
    category: "Announcements",
    date: null,
    summary:
      "Why a student initiative in New Delhi is working on sport for children and young people with disabilities.",
    body: [
      {
        type: "p",
        text: "Sport is usually praised for what it does for the body. Its effect on confidence, independence and a sense of belonging matters just as much. For many children and young people with disabilities, that part of sport stays out of reach.",
      },
      {
        type: "p",
        text: "Sport Training and Assistance New Delhi, or STAND, was founded by Aadya Gupta, a Grade 11 student at Sanskriti School, to change that. The aim is simple to state: more children and young people with disabilities taking part in sport and recreation, on their own terms.",
      },
      { type: "h2", text: "The barriers we are working on" },
      {
        type: "list",
        items: [
          "Physical infrastructure that many children cannot reach or use",
          "Equipment that is not adapted to the people who need it",
          "Low awareness of adaptive sports",
          "Social and attitudinal barriers",
        ],
      },
      { type: "h2", text: "How STAND works" },
      {
        type: "p",
        text: "Making facilities available is not enough on its own. STAND turns the experience of para athletes and inclusive recreation professionals into accessible learning resources, trains students to advocate for inclusive sport in their own schools, and, with our NGO partner Help Each Other, directs funds towards adaptive sporting equipment.",
      },
      {
        type: "p",
        text: "Throughout, the work is guided by three ideas: autonomy, dignity and meaningful participation.",
      },
    ],
  },
  {
    slug: "stand-out-toolkit",
    title: "STAND Out: a toolkit for student ambassadors",
    category: "Resources",
    date: null,
    summary:
      "Six modules that prepare students to advocate for disability inclusive sport in their own schools and communities.",
    body: [
      {
        type: "p",
        text: "STAND Out is our Inclusive Sport Ambassador Toolkit. It is a practical training resource for students who want to make sport in their school more inclusive, and who want the knowledge to do it well.",
      },
      { type: "h2", text: "What it covers" },
      {
        type: "list",
        items: [
          "The social model of disability",
          "Respectful language and communication",
          "Physical and attitudinal barriers to sport",
          "Principles of inclusive recreation",
          "Why autonomy and dignity matter",
          "Promoting accessibility in schools and communities",
        ],
      },
      { type: "h2", text: "How it works" },
      {
        type: "p",
        text: "The toolkit uses case studies, practical scenarios and reflection exercises. Each part ends with guidance that students can act on in their own school and community.",
      },
      {
        type: "p",
        text: "Students who complete it become STAND Out ambassadors. You can apply on our Get involved page.",
      },
    ],
  },
  {
    slug: "stand-up-the-cause",
    title: "STAND Up the Cause: conversations on sport and inclusion",
    category: "Resources",
    date: null,
    summary:
      "An interview series with para athletes, disability advocates, coaches and inclusive recreation professionals.",
    body: [
      {
        type: "p",
        text: "STAND Up the Cause is an interview series about where disability, sport and social inclusion meet. It brings together para athletes, disability advocates, coaches and professionals who work in inclusive recreation.",
      },
      { type: "h2", text: "What the series explores" },
      {
        type: "list",
        items: [
          "Barriers to taking part in sport",
          "Experiences of representation and accessibility",
          "How adaptive sports develop",
          "How sport builds confidence, autonomy, independence and community belonging",
        ],
      },
      {
        type: "p",
        text: "The conversations also feed our learning resources, so what athletes and professionals share reaches students and schools directly.",
      },
    ],
  },
  {
    slug: "working-with-help-each-other",
    title: "Working with Help Each Other",
    category: "Partnerships",
    date: null,
    summary:
      "Our NGO partner, and how the collaboration helps direct resources towards adaptive sporting equipment.",
    body: [
      {
        type: "p",
        text: "Help Each Other is a nongovernmental organisation committed to uplifting communities through compassion, collective support and inclusive development. It works across areas such as education and healthcare, and supports people from underserved backgrounds.",
      },
      {
        type: "p",
        text: "Through this collaboration, STAND aims to complement existing disability and sports programmes, support community engagement, and direct the resources it raises towards adaptive sporting equipment.",
      },
      {
        type: "p",
        text: "We believe the best way to help is to strengthen the organisations already doing this work, not to duplicate them.",
      },
    ],
  },
];

export const categories: Category[] = ["Announcements", "Resources", "Partnerships", "Press"];

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}

export { formatDate } from "@/lib/format";
