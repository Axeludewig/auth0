import sanityClient from "@sanity/client";

// Rest of the code

const client = sanityClient({
	projectId: "ag48fdc1", // Replace with your project ID
	dataset: "production", // Replace with your dataset name
	useCdn: true, // Use the CDN for faster read-only requests
});

module.exports = client;
