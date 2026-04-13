# Product Images Placeholder

This directory should contain your actual product images. Until then, use:
- `/images/products/placeholder-product.svg` - Generic product placeholder

## Expected Product Images

Based on your AYAN Cosmetics shop, you'll likely need:

- `lipstick-matte-red.jpg` (or .png, .webp)
- `foundation-liquid.jpg`
- `perfume-premium.jpg`
- `skincare-serum.jpg`
- `mascara-volumizing.jpg`
- `eyeshadow-palette.jpg`
- `lip-gloss.jpg`
- `face-powder.jpg`
- `cosmetic-bag.jpg`
- `fragrance-set.jpg`

## Image Specifications

- **Recommended size**: 400x400px (square for product cards)
- **Format**: WebP (best performance), JPG, or PNG
- **Optimization**: Next.js `<Image>` component will auto-optimize
- **Background**: White or transparent for clean product display

## TODO

1. Add your actual product images to this folder
2. Update product data in your code to reference the correct filenames
3. Use Next.js `<Image>` component for automatic optimization:
   ```tsx
   <Image src="/images/products/your-product.jpg" alt="Product Name" width={400} height={400} />
   ```
