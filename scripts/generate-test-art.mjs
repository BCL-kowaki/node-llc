import { mkdir } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const root = path.resolve("public/test/generated");

const serviceArt = {
  "fde-partner": ["#ffe0d8", "#ff6248", "#18354b", "bridge"],
  "system-development": ["#dfe7ff", "#3568ff", "#152a66", "system"],
  "web-production": ["#eadfff", "#9d63ff", "#34205d", "web"],
  "advertising-operations": ["#fff0c5", "#e19a00", "#5a3b00", "ads"],
  "line-harness": ["#d7f6e6", "#14b86b", "#073d28", "line"],
  "video-production": ["#dceef6", "#2296c6", "#073a53", "video"],
  "ai-enablement": ["#d7f4ee", "#20a486", "#073f38", "ai"],
};

const approachArt = {
  discover: ["#ffe0d8", "#ff6248", "magnify"],
  build: ["#dfe7ff", "#3568ff", "blocks"],
  grow: ["#d7f6e6", "#14b86b", "grow"],
};

const supportArt = {
  field: ["#ffe0d8", "#ff6248", "field"],
  build: ["#dfe7ff", "#3568ff", "build"],
  connect: ["#d7f6e6", "#14b86b", "connect"],
  improve: ["#eadfff", "#9d63ff", "improve"],
};

function svgFrame(width, height, background, accent, ink, body) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" width="${width}" height="${height}">
    <defs>
      <pattern id="dots" width="22" height="22" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1.8" fill="${accent}" opacity=".42"/></pattern>
      <linearGradient id="wash" x1="0" y1="0" x2="1" y2="1"><stop stop-color="${background}"/><stop offset="1" stop-color="#fff" stop-opacity=".46"/></linearGradient>
    </defs>
    <rect width="${width}" height="${height}" fill="url(#wash)"/>
    <rect x="-80" y="-50" width="${width * 0.78}" height="${height * 0.85}" fill="url(#dots)" opacity=".82"/>
    <circle cx="${width * 0.74}" cy="${height * 0.32}" r="${height * 0.25}" fill="none" stroke="${accent}" stroke-width="3" opacity=".42"/>
    <circle cx="${width * 0.74}" cy="${height * 0.32}" r="${height * 0.36}" fill="none" stroke="${ink}" stroke-width="2" opacity=".18"/>
    ${body}
  </svg>`;
}

function serviceSvg(background, accent, ink, motif) {
  const w = 1200;
  const h = 760;
  const common = `<circle cx="930" cy="170" r="15" fill="${accent}"/><circle cx="250" cy="585" r="11" fill="${ink}" opacity=".7"/><path d="M90 610 C300 490 460 620 650 500 S980 440 1160 560" fill="none" stroke="${accent}" stroke-width="3" opacity=".55"/>`;
  const motifs = {
    bridge: `<path d="M190 485 L390 280 L610 485" fill="none" stroke="${ink}" stroke-width="34" stroke-linecap="round" stroke-linejoin="round"/><path d="M390 280 L500 170 L700 370" fill="none" stroke="${accent}" stroke-width="34" stroke-linecap="round" stroke-linejoin="round"/><circle cx="390" cy="280" r="27" fill="${accent}"/><circle cx="610" cy="485" r="27" fill="${ink}"/>`,
    system: `<rect x="170" y="235" width="230" height="180" rx="28" fill="${accent}" opacity=".8"/><rect x="485" y="150" width="230" height="180" rx="28" fill="${ink}" opacity=".85"/><rect x="485" y="425" width="230" height="180" rx="28" fill="${accent}" opacity=".46"/><path d="M400 325H485M600 330V425M400 325L485 515" fill="none" stroke="${ink}" stroke-width="12" stroke-linecap="round"/>`,
    web: `<rect x="170" y="165" width="560" height="390" rx="34" fill="#fff" stroke="${ink}" stroke-width="16"/><path d="M170 250H730" stroke="${ink}" stroke-width="12"/><circle cx="215" cy="207" r="10" fill="${accent}"/><circle cx="250" cy="207" r="10" fill="${accent}" opacity=".55"/><path d="M260 390L370 325L450 395L590 290" fill="none" stroke="${accent}" stroke-width="18" stroke-linecap="round" stroke-linejoin="round"/>`,
    ads: `<circle cx="430" cy="385" r="170" fill="none" stroke="${accent}" stroke-width="30"/><circle cx="430" cy="385" r="75" fill="${accent}"/><path d="M190 560L340 470L470 500L675 220" fill="none" stroke="${ink}" stroke-width="24" stroke-linecap="round" stroke-linejoin="round"/><path d="M620 220H675V275" fill="none" stroke="${ink}" stroke-width="24" stroke-linecap="round"/>`,
    line: `<path d="M170 250Q170 170 260 170H620Q710 170 710 250V390Q710 470 620 470H390L270 565V470H260Q170 470 170 390Z" fill="#fff" stroke="${accent}" stroke-width="16"/><circle cx="325" cy="320" r="25" fill="${accent}"/><circle cx="440" cy="320" r="25" fill="${accent}"/><circle cx="555" cy="320" r="25" fill="${accent}"/><path d="M770 480L980 350" stroke="${ink}" stroke-width="22" stroke-linecap="round"/><circle cx="1010" cy="330" r="28" fill="${ink}"/>`,
    video: `<rect x="160" y="180" width="575" height="360" rx="32" fill="#fff" stroke="${ink}" stroke-width="16"/><path d="M205 250H690" stroke="${ink}" stroke-width="12"/><path d="M395 275L395 445L565 360Z" fill="${accent}"/><path d="M235 610H920" stroke="${accent}" stroke-width="20" stroke-linecap="round"/><path d="M280 585V635M390 585V635M500 585V635M610 585V635M720 585V635" stroke="${ink}" stroke-width="8"/>`,
    ai: `<circle cx="430" cy="365" r="155" fill="${accent}" opacity=".9"/><circle cx="430" cy="365" r="72" fill="#fff"/><path d="M430 210V120M430 610V520M275 365H185M675 365H585M320 255L255 190M540 475L605 540M320 475L255 540M540 255L605 190" stroke="${ink}" stroke-width="16" stroke-linecap="round"/><circle cx="430" cy="120" r="18" fill="${ink}"/><circle cx="185" cy="365" r="18" fill="${ink}"/><circle cx="605" cy="540" r="18" fill="${ink}"/>`,
  };
  return svgFrame(w, h, background, accent, ink, `${common}${motifs[motif]}`);
}

function iconSvg(background, accent, motif) {
  const w = 640;
  const h = 640;
  const ink = "#18212b";
  const motifs = {
    magnify: `<circle cx="285" cy="275" r="130" fill="none" stroke="${accent}" stroke-width="34"/><path d="M380 370L520 510" stroke="${ink}" stroke-width="42" stroke-linecap="round"/><circle cx="285" cy="275" r="38" fill="${accent}"/>`,
    blocks: `<rect x="150" y="230" width="150" height="150" rx="24" fill="${accent}"/><rect x="340" y="140" width="150" height="150" rx="24" fill="${ink}"/><rect x="340" y="340" width="150" height="150" rx="24" fill="${accent}" opacity=".58"/><path d="M300 305H340M415 290V340M300 305L340 415" stroke="${ink}" stroke-width="22" stroke-linecap="round"/>`,
    grow: `<path d="M320 500V220" stroke="${ink}" stroke-width="28" stroke-linecap="round"/><path d="M320 330C190 300 155 190 170 130C280 140 340 205 320 330Z" fill="${accent}"/><path d="M320 390C450 360 505 270 495 210C390 215 330 275 320 390Z" fill="${accent}" opacity=".58"/><path d="M205 500H435" stroke="${ink}" stroke-width="28" stroke-linecap="round"/>`,
    field: `<circle cx="300" cy="320" r="105" fill="${accent}"/><circle cx="300" cy="320" r="190" fill="none" stroke="${accent}" stroke-width="10" opacity=".46"/><circle cx="300" cy="320" r="265" fill="none" stroke="${ink}" stroke-width="8" opacity=".2"/><circle cx="505" cy="170" r="20" fill="${ink}"/>`,
    build: `<rect x="150" y="250" width="140" height="140" rx="20" fill="${accent}"/><rect x="350" y="170" width="140" height="140" rx="20" fill="${ink}"/><path d="M290 320H350M420 310V470H230V390" fill="none" stroke="${ink}" stroke-width="22" stroke-linecap="round" stroke-linejoin="round"/>`,
    connect: `<circle cx="200" cy="320" r="72" fill="${accent}"/><circle cx="440" cy="220" r="72" fill="${ink}"/><circle cx="440" cy="450" r="72" fill="${accent}" opacity=".62"/><path d="M265 295L375 245M265 350L375 425" stroke="${ink}" stroke-width="22" stroke-linecap="round"/>`,
    improve: `<path d="M190 370A150 150 0 1 1 325 500" fill="none" stroke="${accent}" stroke-width="34" stroke-linecap="round"/><path d="M325 500L325 405M325 500L230 500" fill="none" stroke="${ink}" stroke-width="24" stroke-linecap="round"/><circle cx="345" cy="220" r="70" fill="${ink}"/>`,
  };
  return svgFrame(w, h, background, accent, ink, motifs[motif]);
}

await mkdir(path.join(root, "services"), { recursive: true });
await mkdir(path.join(root, "approach"), { recursive: true });
await mkdir(path.join(root, "support"), { recursive: true });

for (const [slug, [background, accent, ink, motif]] of Object.entries(serviceArt)) {
  await sharp(Buffer.from(serviceSvg(background, accent, ink, motif))).png().toFile(path.join(root, "services", `${slug}.png`));
}
for (const [slug, [background, accent, motif]] of Object.entries(approachArt)) {
  await sharp(Buffer.from(iconSvg(background, accent, motif))).png().toFile(path.join(root, "approach", `${slug}.png`));
}
for (const [slug, [background, accent, motif]] of Object.entries(supportArt)) {
  await sharp(Buffer.from(iconSvg(background, accent, motif))).png().toFile(path.join(root, "support", `${slug}.png`));
}

console.log(`生成完了: ${Object.keys(serviceArt).length + Object.keys(approachArt).length + Object.keys(supportArt).length}枚`);
