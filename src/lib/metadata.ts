import type { Metadata } from "next";

import { siteConfig } from "@/lib/site";

export function createSiteMetadata(): Metadata {
  const { title, description, keywords, name, url, locale } = siteConfig;

  return {
    metadataBase: new URL(url),
    title: {
      default: title,
      template: `%s | ${name}`,
    },
    description,
    keywords: [...keywords],
    applicationName: name,
    authors: [{ name }],
    creator: name,
    publisher: name,
    category: "business",
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    alternates: {
      canonical: "/",
    },
    openGraph: {
      type: "website",
      locale,
      url: "/",
      siteName: name,
      title,
      description,
      countryName: "México",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}
