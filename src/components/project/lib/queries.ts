import { groq } from "next-sanity";

export const PROJECT_QUERY = groq`
  *[_type == "project" && slug.current == $slug][0]{
    title,
    description,
    image{asset->{url}},
    gallery[]{asset->{url}},
    services[]->{
      title,
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

export const PROJECT_LIST_QUERY = groq`
	*[_type == "projectPage"] | order(_createdAt desc){
    title,
    slug,
    description,
    image{asset->{url}}
  }
`;