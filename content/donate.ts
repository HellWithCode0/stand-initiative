/**
 * Donation FAQ. An answer of null shows an [ADD ...] tag using `pending`.
 * Fill these in once STAND confirms how money is received and receipted.
 */
export type Faq = { q: string; a: string | null; pending?: string };

export const donateFaq: Faq[] = [
  {
    q: "Who receives my donation?",
    a: "STAND receives your donation directly. We then direct it towards adaptive sporting equipment, working with our partner Help Each Other.",
  },
  {
    q: "What does my donation pay for?",
    a: "STAND directs the money it raises towards adaptive sporting equipment for children and young people with disabilities, through our collaboration with Help Each Other.",
  },
  {
    q: "Is my donation tax deductible?",
    a: null,
    pending: "ADD 80G STATUS, OR SAY THAT DONATIONS ARE NOT TAX DEDUCTIBLE",
  },
  {
    q: "Will I get a receipt?",
    a: null,
    pending: "ADD HOW AND WHEN RECEIPTS ARE SENT",
  },
  {
    q: "How will I know what my donation paid for?",
    a: "Equipment funded by STAND will be listed on our Impact page once it is delivered, together with our annual report.",
  },
  {
    q: "Can I stop a monthly donation?",
    a: null,
    pending: "ADD HOW TO CANCEL A MONTHLY DONATION",
  },
  {
    q: "Can I give equipment instead of money?",
    a: "Please contact us first. We want to be sure any equipment matches a real need before it is collected.",
  },
  {
    q: "Is it safe to pay online?",
    a: "Payments will be handled by a regulated payment provider on its own secure page. STAND never sees or stores your card or bank details.",
  },
];
