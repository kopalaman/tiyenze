export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "Next.js",
  description:
    "Beautifully designed components built with Radix UI and Tailwind CSS.",
  mainNav: [
    {
      title: "Categories",
      href: "/",
    },
    {
      title: "Associations",
      href: "/",
    },
    {
      title: "Offers",
      href: "/",
    },
    {
      title: "Contact",
      href: "/",
    },
    {
      title: "About us",
      href: "/",
    },
  ],
  links: {
    twitter: "https://twitter.com/shadcn",
    github: "https://github.com/shadcn/ui",
    docs: "https://ui.shadcn.com",
  },
}
