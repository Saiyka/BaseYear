xport default async function handler(req, res) {
  try {
    // Ganti username target disini
    const username = "dwr";

    // Ganti API_KEY_KAMU dengan key asli dari Neynar
    const API_KEY = "B20C518D-F1EC-4097-BB98-418F8E7D34AB";

    // Panggil API Neynar
    const response = await fetch(
      `https://api.neynar.com/v2/farcaster/user/by_username?username=${username}`,
      {
        headers: { api_key: API_KEY }
      }
    );

    // Cek jika response error
    if (!response.ok) {
      console.error("Neynar API response error:", response.status);
      return res.status(response.status).send("Error fetching data from Neynar API");
    }

    // Ambil data JSON
    const data = await response.json();
    const user = data.result.user;

    const followers = user.follower_count;
    const following = user.following_count;
    const casts = user.cast_count;

    // Kirim HTML untuk Farcaster Frame
    res.status(200).send(`
<!DOCTYPE html>
<html>
<head>
  <title>Farcaster Stats</title>

  <!-- Farcaster Frame Metadata -->
  <meta property="fc:frame" content="vNext" />
  <meta property="fc:frame:image" content="https://placehold.co/600x400?text=${username}%0AFollowers:+${followers}%0AFollowing:+${following}%0ACasts:+${casts}" />
  <meta property="fc:frame:button:1" content="Chat" />
  <meta property="fc:frame:button:1:action" content="link" />
  <meta property="fc:frame:button:1:target" content="https://warpcast.com/${username}" />
</head>
<body></body>
</html>
    `);

  } catch (err) {
    console.error("Serverless function error:", err);
    res.status(500).send("Server error. Check API key or code.");
  }
}
