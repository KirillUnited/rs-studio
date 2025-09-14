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
    relatedProjects[]->{
			title,
			description,
			image,
			slug
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
		_key,
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

export const SERVICE_PAGE_LIST_LIMIT_QUERY = groq`
	*[_type == "servicePage"] | order(_createdAt desc)[0..$limit] {
		_key,
		title,
		slug,
		description,
		heroImage,
		seo{
			metaTitle,
			metaDescription,
			ogImage{asset->{url}}
		}
	}
`;