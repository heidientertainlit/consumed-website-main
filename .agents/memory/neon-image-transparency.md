---
name: Neon/glow-on-dark image transparency
description: How to knock out the dark background of a neon/glow image (e.g. a screenshot of a glowing icon) when normal background removal fails
---

# Neon-on-dark background knockout

Automatic subject background removal fails on neon/glow images (a glowing shape on a near-black background) — there is no clear "subject", so the whole dark frame is kept.

Instead, derive the alpha channel from the image's own brightness (dark → transparent, glow → opaque) with ImageMagick:

```
magick input.png \
  \( +clone -colorspace Gray -level 28%,90% -alpha off \) \
  -compose CopyOpacity -composite -trim +repage out.png
```

**Critical gotcha:** the grayscale mask clone MUST have `-alpha off`. Without it the mask carries its own opaque alpha, and `CopyOpacity` copies that (all 1s) instead of the luminance — result is fully opaque (mean alpha 1) and looks unchanged.

**Why:** `CopyOpacity` copies the source's *alpha* if it has one, otherwise its intensity. Turning alpha off forces it to use intensity.

**How to apply / tuning:**
- Raise the black point (`-level`) to drop muddy mid-tones; lower it to keep more glow halo.
- If the isolated neon reads too pale on a light background (bright neon is near-white), recolor the whole shape to a solid brand color while keeping the extracted alpha: `-channel RGB -fill '#7c5cff' -colorize 100 +channel`.
- Verify by compositing over the real page bg color (`magick -size WxH xc:'#f7f3ec' out.png -gravity center -composite preview.png`) — the read-tool image viewer shows transparent PNGs over a DARK backdrop, which is misleading. Also check `magick out.png -alpha extract -format '%[fx:mean]\n' info:`.
