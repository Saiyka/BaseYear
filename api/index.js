export default function handler(req, res) {
  res.status(200).send(`
<!DOCTYPE html>
<html>
<head>
  <title>Mini Farcaster App</title>

  <!-- Farcaster Frame -->
  <meta property="fc:frame" content="vNext" />
  <meta property="fc:frame:image" content="https://placehold.co/600x400?text=Farcaster+Stats" />
  <meta property="fc:frame:button:1" content="Chat" />
  <meta property="fc:frame:button:1:action" content="link" />
  <meta property="fc:frame:button:1:target" content="https://warpcast.com/~/messages" />
</head>

<body style="font-family: Arial; padding: 20px;">
  <h2>Statistik Akun Farcaster</h2>
  <p>Username: contoh_user</p>
  <p>Followers: 123</p>
  <p>Following: 45</p>
  <p>Cast: 67</p>
</body>
</html>
  `);
}

