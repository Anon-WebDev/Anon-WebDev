# Local image assets for spa website

Add the following production images in this folder before deployment:

- spa-hero.jpg
- massage-room.jpg
- facial-treatment.jpg
- spa-products.jpg
- waiting-area.jpg
- couples-room.jpg

## Fallback behavior

If these files are missing during development, Next.js will show 404 image requests in the browser. Replace each path in `lib/site.ts` with valid local assets or upload the listed files to keep the gallery and hero visuals fully functional.
