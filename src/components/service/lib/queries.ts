import { groq } from "next-sanity";

export const SERVICE_PAGE_QUERY = groq`
  *[_type == "servicePage" && slug.current == $slug][0]{
    title,
    description,
    heroImage{asset->{url, metadata}},
    about,
    benefits[]{
      title,
      text,
      icon
    },
    gallery[]{asset->{url, metadata}},
    faqs[]{question, answer},
    relatedProjects[]{
      title,
      description,
      image{asset->{url, metadata}}
    },
    seo{
      metaTitle,
      metaDescription,
      keywords,
      ogImage{asset->{url}}
    }
  }
`;

export const SERVICE_PAGE_LIST_QUERY = groq`
	*[_type == "servicePage"] | order(_createdAt desc) {
		title,
		slug,
		description,
		heroImage{
			asset->{url, metadata}
		},
		seo{
			metaTitle,
			metaDescription,
			ogImage{asset->{url}}
		}
	}
`;