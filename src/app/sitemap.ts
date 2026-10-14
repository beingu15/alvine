import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = "https://alvyne.in";

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
        },
        {
            url: `${baseUrl}/Services`,
            lastModified: new Date(),
        },
        {
            url: `${baseUrl}/About`,
            lastModified: new Date(),
        },
        {
            url: `${baseUrl}/Contact`,
            lastModified: new Date(),
        },
    ];
}