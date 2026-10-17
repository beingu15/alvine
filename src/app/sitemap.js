export default function sitemap() {
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
    {
      url: `${baseUrl}/Terms`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/albert-pradeep`,
      lastModified: new Date(),
    },
  ];
}
