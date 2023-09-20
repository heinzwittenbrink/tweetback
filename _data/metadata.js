let data = {
	username: "heinz", // No leading @ here
	homeLabel: "wittenbrink.net",
	homeUrl: "https://wittenbrink.net/",
};

data.avatar = `https://v1.indieweb-avatar.11ty.dev/${encodeURIComponent(data.homeUrl)}/`;

module.exports = data;
