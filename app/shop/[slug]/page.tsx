import { notFound } from "next/navigation";
import Link from "next/link";
import { Metadata } from "next";
import { MessageCircle, ArrowLeft, CheckCircle, Truck, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
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
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="bg-gray-50 pt-20 md:pt-24 pb-4">
        <div className="container-custom">
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-primary transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Shop
          </Link>
        </div>
      </div>

      {/* Product Section */}
      <section className="container-custom py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            {/* Main Image - Uses ProductImage client component for error handling */}
            <ProductImage
              src={product.image}
              alt={product.name}
              isNew={product.isNew}
              isBestSeller={product.isBestSeller}
              priority
            />

            {/* Thumbnail Gallery */}
            {product.images && product.images.length > 1 && (
              <div className="flex gap-3 overflow-x-auto no-scrollbar">
                {product.images.map((img, index) => (
                  <ProductThumbnail
                    key={index}
                    src={img}
                    alt={product.name}
                    index={index}
                    isActive={index === 0}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Product Details */}
          <div className="flex flex-col">
            {/* Brand */}
            <p className="text-sm text-gray-500 uppercase tracking-wider mb-2">
              {product.brand}
            </p>

            {/* Product Name */}
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="mb-6">
              <StarRating
                rating={product.rating}
                reviewCount={product.reviewCount}
                size="md"
              />
            </div>

            {/* Short Description */}
            <p className="text-gray-600 leading-relaxed mb-6">
              {product.shortDescription}
            </p>

            {/* Concerns/Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {product.concern.map((concern) => (
                <Badge key={concern} variant="category">
                  {concern}
                </Badge>
              ))}
            </div>

            {/* Stock Status */}
            <div className="flex items-center gap-2 mb-6">
              {product.inStock ? (
                <>
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-green-600 font-medium">In Stock</span>
                </>
              ) : (
                <>
                  <div className="h-5 w-5 rounded-full border-2 border-red-500" />
                  <span className="text-red-600 font-medium">Out of Stock</span>
                </>
              )}
            </div>

            {/* WhatsApp Order Button - Large and Prominent */}
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="block mb-6"
            >
              <Button
                variant="whatsapp"
                size="xl"
                className="w-full gap-3 text-lg"
                disabled={!product.inStock}
              >
                <MessageCircle className="h-6 w-6" />
                Order on WhatsApp
              </Button>
            </a>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 gap-4 p-4 bg-gray-50 rounded-xl">
              <div className="flex items-center gap-3">
                <Truck className="h-5 w-5 text-primary" />
                <span className="text-sm text-gray-600">
                  Cash on Delivery
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Shield className="h-5 w-5 text-primary" />
                <span className="text-sm text-gray-600">100% Genuine</span>
              </div>
            </div>

            {/* Full Description */}
            {product.fullDescription && (
              <div className="mt-8 pt-8 border-t border-gray-100">
                <h2 className="text-lg font-semibold text-gray-900 mb-3">
                  Description
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  {product.fullDescription}
                </p>
              </div>
            )}

            {/* Key Ingredients */}
            {product.keyIngredients && product.keyIngredients.length > 0 && (
              <div className="mt-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-3">
                  Key Ingredients
                </h2>
                <ul className="flex flex-wrap gap-2">
                  {product.keyIngredients.map((ingredient, index) => (
                    <li
                      key={index}
                      className="px-3 py-1 bg-green-50 text-green-700 text-sm rounded-full"
                    >
                      {ingredient}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* How to Use */}
            {product.howToUse && (
              <div className="mt-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-3">
                  How to Use
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  {product.howToUse}
                </p>
              </div>
            )}

            {/* Benefits */}
            {product.benefits && product.benefits.length > 0 && (
              <div className="mt-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-3">
                  Benefits
                </h2>
                <ul className="grid grid-cols-2 gap-2">
                  {product.benefits.map((benefit, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-2 text-gray-600"
                    >
                      <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                      <span className="text-sm">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="bg-gray-50">
        <div className="container-custom">
          <ReviewSection
            reviews={reviews}
            productName={product.name}
            averageRating={product.rating}
            totalReviews={product.reviewCount}
          />
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="container-custom py-12 md:py-16">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
            You May Also Like
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((relatedProduct) => (
              <ProductCard key={relatedProduct.id} product={relatedProduct} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
