# STAND website

Website for STAND (Sport Training and Assistance New Delhi). Next.js 16, TypeScript, plain CSS.
No database, no backend, no environment variables.

## Run it

```
npm install
npm run dev
```

Open http://localhost:3000. For a production check: `npm run build` then `npm start`.

## Where things live

| What | File |
| --- | --- |
| Every fact about STAND (emails, legal status, reports, form and payment links) | `content/site.ts` |
| The three programmes | `content/programmes.ts` |
| News posts | `content/news.ts` |
| Donation questions and answers | `content/donate.ts` |
| Impact figures | `measures` at the top of `app/impact/page.tsx` |
| Colours, type sizes, spacing | `app/styles/tokens.css` |

## Yellow "[ADD ...]" tags

Any fact that STAND has not confirmed shows as a yellow tag, for example `[ADD 80G STATUS]`.
Nothing is invented. To remove a tag, put the real value in the file above. Most values are a
`null` in `content/site.ts`; change `null` to the text or link and the tag disappears everywhere.

## Forms and payments

Forms check what people type, then post to the address in `site.forms`. Any service that takes a
plain form post and answers with JSON works (for example Formspree). While the address is `null`,
the form says it is not connected and sends nothing.

The donate button sends people to `site.donate.checkoutUrl` (a hosted Razorpay or Stripe payment
page). While it is `null`, no payment is attempted.

## Old links

`/mission`, `/team`, `/partners` and `/resources` from the old Google Sites page redirect to the
matching part of the new site (see `next.config.ts`).
