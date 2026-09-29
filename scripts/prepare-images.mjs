// Converts the attached originals into the files the deck uses (brief, 12.4).
//
//   1. Put the originals in source-images/ (names as attached; see README there).
//   2. npm run images
//
// Only the manifest files are used. Everything else in source-images/ is ignored.
import { existsSync, mkdirSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
import sharp from 'sharp';

const SRC = 'source-images';
const OUT = 'public/images';
const WEBP = { quality: 81 };

const find = (...names) => {
  if (!existsSync(SRC)) return null;
  const files = readdirSync(SRC);
  for (const name of names) {
    const hit = files.find((f) => f.toLowerCase() === name.toLowerCase());
    if (hit) return join(SRC, hit);
  }
  return null;
};

const jobs = [
  {
    label: 'logo lockup (slides 1 and 10) + favicon',
    src: find('boardwith-lockup-on-teal.png'),
    async run(src) {
      await sharp(src).png().toFile(join(OUT, 'logo-lockup.png'));
      // Favicon: the window icon is the left ~440px of the 2000 × 613 lockup.
      // Cut and trim in separate passes: in one pipeline sharp may trim
      // first, which leaves the cut outside the image ("bad extract area").
      const { width, height } = await sharp(src).metadata();
      const iconW = Math.min(width, Math.round((440 / 2000) * width));
      const cut = await sharp(src).extract({ left: 0, top: 0, width: iconW, height }).png().toBuffer();
      let icon = cut;
      try {
        icon = await sharp(cut).trim().png().toBuffer();
      } catch {
        // nothing to trim (no uniform border); keep the uncut edges
      }
      const meta = await sharp(icon).metadata();
      const side = Math.max(meta.width, meta.height);
      const square = await sharp(icon)
        .extend({
          top: Math.floor((side - meta.height) / 2),
          bottom: Math.ceil((side - meta.height) / 2),
          left: Math.floor((side - meta.width) / 2),
          right: Math.ceil((side - meta.width) / 2),
          background: { r: 0, g: 0, b: 0, alpha: 0 },
        })
        .png()
        .toBuffer();
      await sharp(square).resize(192, 192).png().toFile('public/favicon.png');
    },
  },
  {
    label: 'problem-alone.webp (slide 2)',
    src: find('Lost_at_the_Airport@2x.png', 'Lost_at_the_Airport2x.png'),
    run: (src) => sharp(src).resize({ width: 2000 }).webp(WEBP).toFile(join(OUT, 'problem-alone.webp')),
  },
  {
    label: 'solution-together.webp (slide 3)',
    src: find('With_someone@2x.png', 'With_someone2x.png'),
    run: (src) => sharp(src).resize({ width: 2000 }).webp(WEBP).toFile(join(OUT, 'solution-together.webp')),
  },
  {
    label: 'cover-parent.webp (slide 1)',
    src: find('pexels-tafsinnaeem-35444544.jpg'),
    // Portrait crop around both figures, about 1040 × 1520, object-position 50% 40%.
    async run(src) {
      const { width, height } = await sharp(src).rotate().metadata();
      const target = 1040 / 1520;
      let w = width;
      let h = Math.round(width / target);
      if (h > height) {
        h = height;
        w = Math.round(height * target);
      }
      const left = Math.round((width - w) * 0.5);
      const top = Math.round((height - h) * 0.4);
      await sharp(src)
        .rotate()
        .extract({ left, top, width: w, height: h })
        .resize(1040, 1520)
        .webp(WEBP)
        .toFile(join(OUT, 'cover-parent.webp'));
    },
  },
];

mkdirSync(OUT, { recursive: true });
let missing = 0;
for (const job of jobs) {
  if (!job.src) {
    missing++;
    console.warn(`– skipped ${job.label}: original not found in ${SRC}/`);
    continue;
  }
  await job.run(job.src);
  console.log(`✓ ${job.label}  ←  ${job.src}`);
}
if (missing) console.warn(`\n${missing} image(s) still missing; the deck shows a marked gap where each belongs.`);
