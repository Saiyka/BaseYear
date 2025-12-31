export default async function handler(req, res) {
  const username = "dwr"; // ganti nanti

  const response = await fetch(
    `https://api.neynar.com/v2/farcaster/user/by_username?username=${username}`,
    {
      headers: {
        api_key: "B20C518D-F1EC-4097-BB98-418F8E7D34AB"
      }
    }
  );

  const data = await response.json();
  const user = data.result.user;

  const followers = user.follower_count;
  const following = user.following_count;
  const casts = user.cast_count;

  res.status(200).send(`
<!DOCTYPE html>
<html>
<head>
  <title>Farcaster Stats</title>

  <meta property="fc:frame" content="vNext" />
  <meta property="fc:frame:image"
        content="https://placehold.co/600x400?text=${username}%0AFollowers:+${followers}%0AFollowing:+${following}%0ACasts:+${casts}" />

  <meta property="fc:frame:button:1" content="Chat" />
  <meta property="fc:frame:button:1:action" content="link" />
  <meta property="fc:frame:button:1:target" content="https://warpcast.com/${username}" />
</head>
<body></body>
</html>
  `);
}
