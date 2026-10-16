const verses = [
  {
    ref: "2.47",
    sanskrit: "कर्मण्येवाधिकारस्ते मा फलेषु कदाचन।",
    meaning: "You have a right to action, but not to its fruits. Do not be attached to inaction.",
  },
  {
    ref: "2.48",
    sanskrit: "योगस्थः कुरु कर्माणि सङ्गं त्यक्त्वा धनञ्जय।",
    meaning: "Act with steadiness and let go of attachment; remain balanced in success and failure.",
  },
  {
    ref: "6.5",
    sanskrit: "उद्धरेदात्मनात्मानं नात्मानमवसादयेत्।",
    meaning: "Lift yourself through your own effort; your mind can be your friend or your enemy.",
  },
  {
    ref: "4.39",
    sanskrit: "श्रद्धावान् लभते ज्ञानं तत्परः संयतेन्द्रियः।",
    meaning: "A disciplined person of faith gains knowledge, and through knowledge finds peace.",
  },
  {
    ref: "4.38",
    sanskrit: "न हि ज्ञानेन सदृशं पवित्रमिह विद्यते।",
    meaning: "Nothing is as purifying as knowledge; with time, it is discovered within through practice.",
  },
  {
    ref: "2.14",
    sanskrit: "मात्रास्पर्शास्तु कौन्तेय शीतोष्णसुखदुःखदाः।",
    meaning: "Pleasure and pain come and go; they are temporary, so learn to endure them.",
  },
  {
    ref: "2.20",
    sanskrit: "न जायते म्रियते वा कदाचित्।",
    meaning: "The Self is never born and never dies; it is eternal.",
  },
  {
    ref: "2.22",
    sanskrit: "वासांसि जीर्णानि यथा विहाय नवानि गृह्णाति।",
    meaning: "As one changes worn-out clothes for new ones, the embodied soul takes new bodies.",
  },
  {
    ref: "2.38",
    sanskrit: "सुखदुःखे समे कृत्वा लाभालाभौ जयाजयौ।",
    meaning: "Treat pleasure and pain, gain and loss, victory and defeat alike, then do your duty.",
  },
  {
    ref: "2.50",
    sanskrit: "योगः कर्मसु कौशलम्।",
    meaning: "Yoga is skill in action.",
  },
  {
    ref: "2.63",
    sanskrit: "क्रोधाद्भवति सम्मोहः सम्मोहात्स्मृतिविभ्रमः।",
    meaning: "Anger clouds judgment; confusion erodes memory, and wisdom is lost.",
  },
  {
    ref: "2.56",
    sanskrit: "दुःखेष्वनुद्विग्नमनाः सुखेषु विगतस्पृहः।",
    meaning: "One steady in wisdom is undisturbed in sorrow and free from craving in joy.",
  },
  {
    ref: "2.70",
    sanskrit: "आपूर्यमाणमचलप्रतिष्ठं समुद्रमापः प्रविशन्ति यद्वत्।",
    meaning: "Like rivers entering a still ocean, desires do not disturb the one who has found peace.",
  },
  {
    ref: "3.19",
    sanskrit: "तस्मादसक्तः सततं कार्यं कर्म समाचर।",
    meaning: "Do your duty without attachment; such action leads toward the highest.",
  },
  {
    ref: "3.21",
    sanskrit: "यद्यदाचरति श्रेष्ठस्तत्तदेवेतरो जनः।",
    meaning: "Others follow the example set by those they respect. Lead by example.",
  },
  {
    ref: "3.35",
    sanskrit: "श्रेयान्स्वधर्मो विगुणः परधर्मात्।",
    meaning: "It is better to follow your own path imperfectly than another's path perfectly.",
  },
  {
    ref: "4.7",
    sanskrit: "यदा यदा हि धर्मस्य ग्लानिर्भवति भारत।",
    meaning: "Whenever righteousness declines and injustice rises, I manifest myself.",
  },
  {
    ref: "4.18",
    sanskrit: "कर्मण्यकर्म यः पश्येदकर्मणि च कर्म यः।",
    meaning: "One who sees inaction in action and action in inaction is wise.",
  },
  {
    ref: "4.34",
    sanskrit: "तद्विद्धि प्रणिपातेन परिप्रश्नेन सेवया।",
    meaning: "Learn through humility, sincere questions, and service.",
  },
  {
    ref: "5.18",
    sanskrit: "विद्याविनयसम्पन्ने ब्राह्मणे गवि हस्तिनि।",
    meaning: "The wise see all beings with an equal eye.",
  },
  {
    ref: "6.6",
    sanskrit: "बन्धुरात्मात्मनस्तस्य येनात्मैवात्मना जितः।",
    meaning: "For one who has mastered the mind, the mind is a friend.",
  },
  {
    ref: "6.17",
    sanskrit: "युक्ताहारविहारस्य युक्तचेष्टस्य कर्मसु।",
    meaning: "Balance in eating, recreation, work, and sleep supports a disciplined life.",
  },
  {
    ref: "6.26",
    sanskrit: "यतो यतो निश्चरति मनश्चञ्चलमस्थिरम्।",
    meaning: "Wherever the restless mind wanders, gently bring it back.",
  },
  {
    ref: "6.35",
    sanskrit: "असंशयं महाबाहो मनो दुर्निग्रहं चलम्।",
    meaning: "The restless mind can be steadied through practice and detachment.",
  },
  {
    ref: "9.22",
    sanskrit: "अनन्याश्चिन्तयन्तो मां ये जनाः पर्युपासते।",
    meaning: "Steady devotion and single-minded focus bring support and protection.",
  },
  {
    ref: "18.45",
    sanskrit: "स्वे स्वे कर्मण्यभिरतः संसिद्धिं लभते नरः।",
    meaning: "A person devoted to their own work can attain fulfilment.",
  },
  {
    ref: "2.40",
    sanskrit: "नेहाभिक्रमनाशोऽस्ति प्रत्यवायो न विद्यते।",
    meaning: "No sincere effort on this path is wasted; even a little progress matters.",
  },
  {
    ref: "3.8",
    sanskrit: "नियतं कुरु कर्म त्वं कर्म ज्यायो ह्यकर्मणः।",
    meaning: "Do your duty. Action is better than inaction.",
  },
  {
    ref: "5.10",
    sanskrit: "ब्रह्मण्याधाय कर्माणि सङ्गं त्यक्त्वा करोति यः।",
    meaning: "One who acts without attachment remains untouched, like a lotus leaf in water.",
  },
  {
    ref: "2.3",
    sanskrit: "क्लैब्यं मा स्म गमः पार्थ नैतत्त्वय्युपपद्यते।",
    meaning: "Do not give in to weakness. Shake off fear and rise.",
  },
  {
    ref: "12.15",
    sanskrit: "यस्मान्नोद्विजते लोको लोकान्नोद्विजते च यः।",
    meaning: "One who neither disturbs the world nor is disturbed by it remains composed.",
  },
];

function escapeXml(value) {
  return String(value).replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&apos;",
  })[char]);
}

function wrapText(text, maxChars) {
  const words = text.split(/\s+/);
  const lines = [];
  let line = "";
  for (const word of words) {
    if (line && (line + " " + word).length > maxChars) {
      lines.push(line);
      line = word;
    } else {
      line = line ? line + " " + word : word;
    }
  }
  if (line) lines.push(line);
  return lines;
}

module.exports = (req, res) => {
  res.setHeader("Content-Type", "image/svg+xml; charset=utf-8");
  res.setHeader("Cache-Control", "no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0, s-maxage=0");
  res.setHeader("CDN-Cache-Control", "no-store");
  res.setHeader("Vercel-CDN-Cache-Control", "no-store");
  res.setHeader("Pragma", "no-cache");
  res.setHeader("Expires", "0");
  res.setHeader("Access-Control-Allow-Origin", "*");

  if (req.query?.health === "1") {
    res.setHeader("Content-Type", "application/json; charset=utf-8");
    return res.status(200).send(JSON.stringify({ status: "ok" }));
  }

  const previousRef = typeof req.query?.previous === "string" ? req.query.previous : "";
  const pool = verses.filter((verse) => verse.ref !== previousRef);
  const verse = (pool.length ? pool : verses)[Math.floor(Math.random() * (pool.length || verses.length))];
  const meaningLines = wrapText(verse.meaning, 62);
  const meaningSvg = meaningLines.map((line, index) =>
    '<tspan x="450" dy="' + (index === 0 ? 0 : 25) + '">' + escapeXml(line) + "</tspan>"
  ).join("");

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="900" height="310" viewBox="0 0 900 310" role="img" aria-label="Random Bhagavad Gita verse">
    <defs>
      <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#0b1424"/>
        <stop offset="60%" stop-color="#102b36"/>
        <stop offset="100%" stop-color="#352d1c"/>
      </linearGradient>
      <linearGradient id="accent" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stop-color="#68d9d0"/>
        <stop offset="100%" stop-color="#c49a48"/>
      </linearGradient>
    </defs>
    <rect width="900" height="310" rx="18" fill="url(#bg)"/>
    <rect x="0" y="0" width="900" height="5" rx="2" fill="url(#accent)"/>
    <g transform="translate(54 62)" fill="none" stroke-linecap="round">
      <path d="M35 126 C5 95 6 48 21 12 C45 40 55 77 35 126Z" stroke="#68d9d0" stroke-width="2"/>
      <path d="M35 126 C38 83 32 44 21 12 M35 126 C18 89 14 59 17 35 M35 126 C49 88 47 54 38 31" stroke="#c49a48" stroke-width="1.4"/>
      <path d="M21 12 C31 22 39 34 43 49 M17 35 L35 53 M14 59 L34 76 M18 82 L34 96 M38 31 L28 50 M43 49 L35 69 M45 68 L35 88 M44 89 L35 106" stroke="#68d9d0" stroke-width="1"/>
      <circle cx="21" cy="12" r="8" stroke="#c49a48" stroke-width="2"/>
      <circle cx="21" cy="12" r="3" fill="#68d9d0" stroke="none"/>
    </g>
    <text x="450" y="48" fill="#68d9d0" font-family="Arial, sans-serif" font-size="17" font-weight="700" text-anchor="middle" letter-spacing="2">A RANDOM DOSE OF GITA WISDOM</text>
    <text x="450" y="102" fill="#f4f7fb" font-family="Noto Sans Devanagari, Arial, sans-serif" font-size="25" font-weight="700" text-anchor="middle">${escapeXml(verse.sanskrit)}</text>
    <text x="450" y="140" fill="#c49a48" font-family="Arial, sans-serif" font-size="17" font-weight="700" text-anchor="middle">BHAGAVAD GITA ${escapeXml(verse.ref)}</text>
    <text x="450" y="185" fill="#dbe5ef" font-family="Arial, sans-serif" font-size="16" text-anchor="middle">${meaningSvg}</text>
    <text x="450" y="282" fill="#91a4b8" font-family="Arial, sans-serif" font-size="12" text-anchor="middle">KARMANYE VADHIKARASTE • FOCUS ON THE WORK</text>
  </svg>`;
  return res.status(200).send(svg);
};
