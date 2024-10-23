import { getRssString } from "@astrojs/rss";

import { SITE, METADATA, APP_BLOG } from "astrowind:config";

export const GET = async () => {
  if (!APP_BLOG.isEnabled) {
    return new Response(null, {
      status: 404,
      statusText: "Not found",
    });
  }

  const rss = await getRssString({
    title: `${SITE.name}’s Personal Website`,
    description: METADATA?.description || "",
    site: import.meta.env.SITE,
    items: [],
    trailingSlash: SITE.trailingSlash,
  });

  return new Response(rss, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
};
