/**
 * Curates WhatsApp dump in _inbox/obras → public/obras (anonymous slugs, WebP).
 * Re-run: node scripts/process-obras.mjs
 */
import fs from "node:fs";
import path from "node:path";
import { execFileSync, spawnSync } from "node:child_process";
import sharp from "sharp";

const ROOT = process.cwd();
const DUMP = path.join(ROOT, "_inbox", "obras", "FOTOS DAS OBRAS ENTREGUES");
const OUT = path.join(ROOT, "public", "obras");

function findFile(folder, needle) {
  const dir = path.join(DUMP, folder);
  const files = fs.readdirSync(dir);
  const hit = files.find((f) => f.includes(needle));
  if (!hit) throw new Error(`Missing ${folder} / ${needle}`);
  return path.join(dir, hit);
}

function findFfmpeg() {
  const which = spawnSync("where", ["ffmpeg"], { encoding: "utf8" });
  if (which.status === 0) return which.stdout.trim().split(/\r?\n/)[0];
  const winget = path.join(
    process.env.LOCALAPPDATA,
    "Microsoft/WinGet/Packages/Gyan.FFmpeg_Microsoft.Winget.Source_8wekyb3d8bbwe/ffmpeg-8.0.1-full_build/bin/ffmpeg.exe",
  );
  if (fs.existsSync(winget)) return winget;
  throw new Error("ffmpeg not found");
}

async function processPhoto({ src, dest, crop, sharpen = true, modulate }) {
  const rotated = sharp(src).rotate();
  const meta = await rotated.metadata();
  const w = meta.width ?? 0;
  const h = meta.height ?? 0;
  if (!w || !h) throw new Error(`No dimensions: ${src}`);

  const left = Math.round(w * (crop?.left ?? 0));
  const top = Math.round(h * (crop?.top ?? 0));
  const right = Math.round(w * (crop?.right ?? 0));
  const bottom = Math.round(h * (crop?.bottom ?? 0));
  const ew = w - left - right;
  const eh = h - top - bottom;

  let pipeline = sharp(src).rotate().extract({ left, top, width: ew, height: eh });

  const maxSide = 1920;
  if (Math.max(ew, eh) > maxSide) {
    pipeline = pipeline.resize({
      width: ew >= eh ? maxSide : undefined,
      height: eh > ew ? maxSide : undefined,
      withoutEnlargement: true,
    });
  }

  if (modulate) pipeline = pipeline.modulate(modulate);
  if (sharpen) pipeline = pipeline.sharpen({ sigma: 0.7, m1: 0.8, m2: 0.15 });

  fs.mkdirSync(path.dirname(dest), { recursive: true });
  await pipeline.webp({ quality: 78, effort: 5 }).toFile(dest);

  const outMeta = await sharp(dest).metadata();
  const ow = outMeta.width ?? 0;
  const oh = outMeta.height ?? 0;
  return {
    src: `/obras/${path.relative(OUT, dest).replaceAll("\\", "/")}`,
    orientation: ow >= oh ? "landscape" : "portrait",
    width: ow,
    height: oh,
  };
}

function reencodeVideo(ffmpeg, src, dest) {
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  execFileSync(
    ffmpeg,
    [
      "-y",
      "-i",
      src,
      "-vf",
      "scale='min(720,iw)':-2",
      "-c:v",
      "libx264",
      "-crf",
      "23",
      "-preset",
      "medium",
      "-pix_fmt",
      "yuv420p",
      "-c:a",
      "aac",
      "-b:a",
      "96k",
      "-movflags",
      "+faststart",
      dest,
    ],
    { stdio: "inherit" },
  );
}

async function posterFromVideo(ffmpeg, src, dest) {
  const tmp = dest.replace(/\.webp$/, ".jpg");
  execFileSync(ffmpeg, ["-y", "-ss", "1.2", "-i", src, "-frames:v", "1", tmp], {
    stdio: "inherit",
  });
  const info = await processPhoto({ src: tmp, dest, sharpen: true });
  fs.unlinkSync(tmp);
  return info;
}

const F = {
  aureola: "ED AUREOLA - TELHADO",
  fernando: "FERNANDO VALE - AREA COMUM CONDOMINIO",
  lucas: "LUCAS - REFORMA DE APARTAMENTO",
  marcia: "MARCIA - APARTAMENTO",
  girafa: "RECINTO DA GIRAFA - ZOOLOGICO",
  ronaldo: "RONALDO - APARTAMENTO",
  sindojus: "SINDOJUS - SALA COMERCIAL",
};

const JOBS = [
  {
    slug: "zoologico-recinto",
    photos: [
      { file: "16.37.00.jpeg", role: "cover", skipExact: ["16.37.00(1)", "16.37.00(2)"] },
      { file: "11.36.38.jpeg", role: "gallery", skipExact: ["11.36.38(1)"] },
      { file: "16.37.00(1).jpeg", role: "gallery" },
      { file: "11.36.36(1).jpeg", role: "gallery" },
      { file: "11.36.36.jpeg", role: "gallery", skipExact: ["11.36.36(1)", "11.36.36(2)", "11.36.36(3)"] },
      { file: "11.37.00.jpeg", role: "gallery" },
      { file: "11.36.38(1).jpeg", role: "gallery" },
      { file: "11.36.39.jpeg", role: "gallery", skipExact: ["11.36.39(1)", "11.36.39(2)"] },
      { file: "11.36.37.jpeg", role: "gallery", skipExact: ["11.36.37(1)"] },
      { file: "11.36.35.jpeg", role: "gallery" },
    ],
    folder: F.girafa,
  },
  {
    slug: "telhado-condominio",
    photos: [
      { file: "16.40.42(4).jpeg", role: "cover" },
      { file: "16.40.41(1).jpeg", role: "gallery" },
      { file: "16.40.41(3).jpeg", role: "gallery" },
      { file: "16.40.42(2).jpeg", role: "gallery" },
      { file: "16.40.43.jpeg", role: "gallery" },
    ],
    folder: F.aureola,
  },
  {
    slug: "area-comum-condominio",
    photos: [
      { file: "16.06.04.jpeg", role: "cover" },
      { file: "16.01.49.jpeg", role: "gallery", skipExact: ["16.01.49(1)"] },
      { file: "16.01.49(1).jpeg", role: "gallery" },
      { file: "16.01.50(1).jpeg", role: "process" },
      { file: "16.01.50(3).jpeg", role: "process" },
    ],
    folder: F.fernando,
    video: { file: "16.06.13.mp4" },
  },
  {
    slug: "reforma-residencial-01",
    photos: [
      { file: "09.52.47.jpeg", role: "cover" },
      { file: "09.48.34.jpeg", role: "gallery", crop: { left: 0.02, top: 0.02, right: 0.02, bottom: 0.04 } },
      { file: "09.48.41.jpeg", role: "gallery", crop: { left: 0.04, top: 0.02, right: 0.02, bottom: 0.02 } },
      { file: "09.55.37.jpeg", role: "gallery", crop: { left: 0.1, top: 0.02, right: 0.02, bottom: 0.06 } },
      { file: "12.11.58.jpeg", role: "gallery", crop: { left: 0.02, top: 0.02, right: 0.02, bottom: 0.08 } },
    ],
    folder: F.ronaldo,
    video: { file: "09.55.37.mp4" },
  },
  {
    slug: "reforma-residencial-02",
    photos: [
      { file: "17.07.25(2).jpeg", role: "cover", modulate: { brightness: 1.06, saturation: 0.92 }, sharpen: false },
      { file: "17.07.20.jpeg", role: "gallery", modulate: { brightness: 1.06, saturation: 0.92 }, sharpen: false },
      { file: "17.07.24.jpeg", role: "gallery", skipExact: ["17.07.24(1)", "17.07.24(2)", "17.07.24(3)", "17.07.24(4)"], modulate: { brightness: 1.05, saturation: 0.92 }, sharpen: false },
      { file: "17.07.21.jpeg", role: "gallery", skipExact: ["17.07.21(1)", "17.07.21(2)", "17.07.21(3)", "17.07.21(4)"], modulate: { brightness: 1.05, saturation: 0.92 }, sharpen: false },
      { file: "17.07.26(3).jpeg", role: "gallery", modulate: { brightness: 1.05, saturation: 0.92 }, sharpen: false },
    ],
    folder: F.lucas,
  },
  {
    slug: "banheiro-residencial",
    photos: [
      { file: "15.05.10.jpeg", role: "cover", crop: { left: 0.02, top: 0.01, right: 0.02, bottom: 0.02 } },
      { file: "14.08.12.jpeg", role: "gallery", crop: { left: 0.14, top: 0.02, right: 0.02, bottom: 0.08 } },
    ],
    folder: F.marcia,
    video: { file: "13.47.32(1).mp4" },
  },
];

function resolvePhoto(folder, spec) {
  const dir = path.join(DUMP, folder);
  const files = fs.readdirSync(dir);
  const matches = files.filter((f) => f.includes(spec.file));
  const filtered = matches.filter((f) => !(spec.skipExact ?? []).some((skip) => f.includes(skip)));
  const hit = filtered.find((f) => f.endsWith(spec.file)) ?? filtered[0] ?? matches[0];
  if (!hit) throw new Error(`Missing ${folder} / ${spec.file}`);
  return path.join(dir, hit);
}

const manifest = [];

if (!fs.existsSync(DUMP)) {
  throw new Error(`Dump not found: ${DUMP}`);
}

if (fs.existsSync(OUT)) fs.rmSync(OUT, { recursive: true });
fs.mkdirSync(OUT, { recursive: true });

const ffmpeg = findFfmpeg();

for (const job of JOBS) {
  const photos = [];
  let i = 1;
  for (const spec of job.photos) {
    const src = resolvePhoto(job.folder, spec);
    const dest = path.join(OUT, job.slug, `${String(i).padStart(2, "0")}.webp`);
    const info = await processPhoto({
      src,
      dest,
      crop: spec.crop,
      sharpen: spec.sharpen !== false,
      modulate: spec.modulate,
    });
    photos.push({ ...info, role: spec.role, file: path.basename(src) });
    i += 1;
  }

  let video;
  if (job.video) {
    const vsrc = findFile(job.folder, job.video.file);
    const vdest = path.join(OUT, job.slug, "video.mp4");
    const pdest = path.join(OUT, job.slug, "poster.webp");
    reencodeVideo(ffmpeg, vsrc, vdest);
    const poster = await posterFromVideo(ffmpeg, vsrc, pdest);
    const probe = spawnSync(
      ffmpeg.replace(/ffmpeg(\.exe)?$/i, "ffprobe$1"),
      ["-v", "error", "-select_streams", "v:0", "-show_entries", "stream=width,height", "-of", "csv=p=0", vdest],
      { encoding: "utf8" },
    );
    const [vw, vh] = (probe.stdout || "0,0").trim().split(",").map(Number);
    video = {
      src: `/obras/${job.slug}/video.mp4`,
      poster: poster.src,
      orientation: vw >= vh ? "landscape" : "portrait",
    };
  }

  manifest.push({ slug: job.slug, photos, video });
}

fs.writeFileSync(
  path.join(ROOT, "_inbox", "obras-manifest.json"),
  JSON.stringify(
    manifest.map((m) => ({
      slug: m.slug,
      photos: m.photos.map(({ src, orientation, role }) => ({ src, orientation, role })),
      video: m.video,
    })),
    null,
    2,
  ),
);
console.log(`Processed ${manifest.reduce((n, m) => n + m.photos.length, 0)} photos`);
for (const m of manifest) {
  console.log(
    m.slug,
    m.photos.map((p) => `${p.role}:${p.orientation}`).join(", "),
    m.video ? "+video" : "",
  );
}
