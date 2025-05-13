import "./Categories.scss"
import Section from "@/layouts/Section"
import CategoryCard from "@/components/CategoryCard"
import Slider from "@/components/Slider"
import SliderNavigation from "@/components/Slider/SliderNavigation"

const Categories = () => {
  const categoryItems = [
    {
      title: "Action",
      images: [
        "src/assets/categories/image.jpg",
        "src/assets/categories/image-1.jpg",
        "src/assets/categories/image-2.jpg",
        "src/assets/categories/image-3.jpg",
      ],
    },
    {
      title: "Adventure",
      images: [
        "src/assets/categories/image-4.jpg",
        "src/assets/categories/image-5.jpg",
        "src/assets/categories/image-6.jpg",
        "src/assets/categories/image-7.jpg",
      ],
    },
    {
      title: "Comedy",
      images: [
        "src/assets/categories/image.jpg",
        "src/assets/categories/image-1.jpg",
        "src/assets/categories/image-2.jpg",
        "src/assets/categories/image-3.jpg",
      ],
    },
    {
      title: "Drama",
      images: [
        "src/assets/categories/image-4.jpg",
        "src/assets/categories/image-5.jpg",
        "src/assets/categories/image-6.jpg",
        "src/assets/categories/image-7.jpg",
      ],
    },
    {
      title: "Horror",
      images: [
        "src/assets/categories/image-4.jpg",
        "src/assets/categories/image-5.jpg",
        "src/assets/categories/image-6.jpg",
        "src/assets/categories/image-7.jpg",
      ],
    },
  ]

  const sliderNavigationId = "categories-slider-navigation"

  return (
    <Section
      title="Explore our wide variety of categories"
      titleId="categories-title"
      description="Whether you're looking for a comedy to make you laugh, a drama to make you think, or a documentary to learn something new"
      actions={<SliderNavigation mode="tile" id={sliderNavigationId} />}
      isActionsHiddenOnMobile
    >
      <Slider navigationTargetElementId={sliderNavigationId}>
        {categoryItems.map((categoryItem, index) => (
          <CategoryCard {...categoryItem} key={index} />
        ))}
      </Slider>
    </Section>
  )
}

export default Categories
