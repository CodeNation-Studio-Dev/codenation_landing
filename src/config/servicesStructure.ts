import { FavoriteProducts } from "../_components/favoriteProducts/FavoriteProducts";
import { Subcategories } from "../_components/subcategories/Subcategories";
import { Tecnologies } from "../_components/tecnologies/Tecnologies";
import { Testimonials } from "../_components/testimonials/Testimonials";

export const servicesStructure = {
  webpage: [
    {
      component: Tecnologies,
      key: "webpageTecnologies",
    },
    {
      component: Subcategories,
      key: "webpageSubcategories",
    },
    {
      component: Testimonials,
      key: "webpageTestimonials",
    },
    {
      component: FavoriteProducts,
      key: "WebpageFavorite",
    },
  ],
  mvp: [
    {
      component: Subcategories,
      key: "mvpSubcategories",
    },
  ],
  design: [
    { component: FavoriteProducts, key: "designFavorite" },
    {
      component: Testimonials,
      key: "designTestimonials",
    },
    {
      component: Subcategories,
      key: "designSubcategories",
    },
  ],
  automatization: [
    {
      component: Testimonials,
      key: "autoTestimonials",
    },
    {
      component: Subcategories,
      key: "autoSubcategories",
    },
  ],
  cloud: [
    {
      component: Subcategories,
      key: "cloudSubcategories",
    },
    {
      component: Testimonials,
      key: "cloudTestimonials",
    },
  ],
} as const;
