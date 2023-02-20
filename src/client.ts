import { createClient, type ClientConfig } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const config: ClientConfig = {
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID,
  dataset: "production",
  apiVersion: "2022-01-12",
  useCdn: true,
  token: import.meta.env.VITE_SANITY_TOKEN,
};

export const client = createClient(config);

const builder = imageUrlBuilder(client);

export const urlFor = (source: any) => builder.image(source);
