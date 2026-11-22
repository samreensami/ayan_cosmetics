import { notFound } from "next/navigation";
import Link from "next/link";
import { Metadata } from "next";
import { MessageCircle, ArrowLeft, CheckCircle, Truck, Shield } from "lucide-react";
import StarRating from "@/components/StarRating";
import ReviewSection from "@/components/ReviewSection";
import ProductCard from "@/components/ProductCard";
import ProductImage, { ProductThumbnail } from "@/components/ProductImage";
import {
  products,
  getProductBySlug,
  getRelatedProducts,
  getProductReviews,
} from "@/lib/products";
import { generateWhatsAppLink } from "@/lib/whatsapp";

/**
 * Product Detail Page for AYAN Cosmetics
 *
 * Features:
 * - Multiple product images (gallery)
 * - Product details (name, brand, price, description)
 * - Key ingredients
 * - How to use
 * - Benefits
 * - Star rating and reviews
 * - Large green "Order on WhatsApp" button
 * - Related products section
 *
 * Route: /shop/[slug]
 */

// Generate static params for all products
export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

// Generate metadata for SEO
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return {
      title: "Product Not Found",
    };
  }

  return {
    title: `${product.name} - ${product.brand}`,
    description: product.shortDescription,
    openGraph: {
      title: product.name,
      description: product.shortDescription,
      images: [product.image],
    },
  };
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  // Return 404 if product not found
  if (!product) {
    notFound();
  }

  // Get product data
  const relatedProducts = getRelatedProducts(product, 4);
  const reviews = getProductReviews(product.id);
  const whatsappLink = generateWhatsAppLink(product.name);

  return (
    <div className="pt-header">
      <nav aria-label="Breadcrumb" className="container-custom pt-6 text-sm text-muted-foreground">
        <Link href="/shop" className="inline-flex items-center gap-2 hover:text-foreground">
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          Back to shop
        </Link>
      </nav>

      {/* Product */}
      <section className="container-custom grid gap-8 py-8 md:grid-cols-2 md:gap-12 md:py-12 lg:gap-20">
        <div className="space-y-4 md:sticky md:top-24 md:self-start">
          <ProductImage
            src={product.image}
            alt={product.name}
            isNew={product.isNew}
            isBestSeller={product.isBestSeller}
            priority
          />
          {product.images && product.images.length > 1 && (
            <div className="no-scrollbar flex gap-3 overflow-x-auto">
              {product.images.map((img, index) => (
                <ProductThumbnail key={index} src={img} alt={product.name} index={index} isActive={index === 0} />
              ))}
            </div>
          )}
        </div>

        <div className="flex flex-col">
          <p className="text-sm text-muted-foreground">{product.brand}</p>
          <h1 className="mt-2 font-display text-3xl leading-tight md:text-5xl text-balance">{product.name}</h1>

          <div className="mt-4">
            <StarRating rating={product.rating} reviewCount={product.reviewCount} size="md" />
          </div>

          <p className="mt-6 leading-relaxed text-muted-foreground">{product.shortDescription}</p>

          {product.concern.length > 0 && (
            <ul className="mt-6 flex flex-wrap gap-2" aria-label="Good for">
              {product.concern.map((concern) => (
                <li key={concern}>
                  <Link
                    href={`/shop?concern=${encodeURIComponent(concern)}`}
                    className="inline-block rounded-full border border-border px-3 py-1 text-xs hover:border-foreground/40"
                  >
                    {concern}
                  </Link>
                </li>
              ))}
            </ul>
          )}

          <p className="mt-6 flex items-center gap-2 text-sm">
            {product.inStock ? (
              <>
                <CheckCircle className="h-4 w-4 text-primary" aria-hidden="true" />
                In stock, dispatched same day in Karachi
              </>
            ) : (
              <>
                <span className="h-2 w-2 rounded-full bg-destructive" aria-hidden="true" />
                Out of stock — ask us on WhatsApp for the restock date
              </>
            )}
          </p>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-disabled={!product.inStock}
            className="mt-8 flex h-14 w-full items-center justify-center gap-3 rounded-full bg-whatsapp text-base font-medium text-white transition-colors hover:bg-whatsapp-dark"
          >
            <MessageCircle className="h-5 w-5" aria-hidden="true" />
            Order on WhatsApp
          </a>

          <ul className="mt-6 grid grid-cols-2 gap-4 border-y border-border py-5 text-sm">
            <li className="flex items-center gap-3">
              <Truck className="h-5 w-5 text-primary" strokeWidth={1.5} aria-hidden="true" />
              Cash on delivery
            </li>
            <li className="flex items-center gap-3">
              <Shield className="h-5 w-5 text-primary" strokeWidth={1.5} aria-hidden="true" />
              100% genuine
            </li>
          </ul>

          {product.fullDescription && (
            <div className="mt-8">
              <h2 className="font-display text-2xl">Description</h2>
              <p className="mt-3 leading-relaxed text-muted-foreground">{product.fullDescription}</p>
            </div>
          )}

          {product.keyIngredients && product.keyIngredients.length > 0 && (
            <div className="mt-8">
              <h2 className="font-display text-2xl">Key ingredients</h2>
              <ul className="mt-3 flex flex-wrap gap-2">
                {product.keyIngredients.map((ingredient, index) => (
                  <li key={index} className="rounded-full bg-secondary px-3 py-1 text-sm">
                    {ingredient}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {product.howToUse && (
            <div className="mt-8">
              <h2 className="font-display text-2xl">How to use</h2>
              <p className="mt-3 leading-relaxed text-muted-foreground">{product.howToUse}</p>
            </div>
          )}

          {product.benefits && product.benefits.length > 0 && (
            <div className="mt-8">
              <h2 className="font-display text-2xl">Benefits</h2>
              <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                {product.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>

      <section className="bg-secondary/50">
        <div className="container-custom">
          <ReviewSection
            reviews={reviews}
            productName={product.name}
            averageRating={product.rating}
            totalReviews={product.reviewCount}
          />
        </div>
      </section>

      {relatedProducts.length > 0 && (
        <section className="container-custom py-16 md:py-20">
          <h2 className="section-title mb-8">You may also like</h2>
          <ul className="grid grid-cols-2 gap-x-3 gap-y-10 md:gap-x-6 lg:grid-cols-4">
            {relatedProducts.map((relatedProduct) => (
              <li key={relatedProduct.id}>
                <ProductCard product={relatedProduct} />
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}
