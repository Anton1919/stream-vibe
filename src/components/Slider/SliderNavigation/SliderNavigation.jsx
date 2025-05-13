import "./SliderNavigation.scss"
import classNames from "classnames"
import Button from "@/components/Button"

const SliderNavigation = (props) => {
  const {
    className,
    id,
    hasPagination = true,
    /**
     * '' (default) | 'tile'
     */
    mode = "",
  } = props

  return (
    <div
      data-js-slider-navigation=""
      className={classNames(className, "slider-navigation", {
        [`slider-navigation--${mode}`]: mode,
      })}
      id={id}
    >
      <Button
        extraAttrs={{ "data-js-slider-previous-button": "" }}
        className="slider-navigation__arrow-button slider-navigation__arrow-button--previous"
        mode="black-10"
        iconName="arrow-left"
        label="Previous slide"
        isLabelHidden
      />
      {hasPagination && (
        <div
          className="slider-navigation__pagination"
          data-js-slider-pagination=""
        />
      )}
      <Button
        extraAttrs={{ "data-js-slider-next-button": "" }}
        className="slider-navigation__arrow-button slider-navigation__arrow-button--next"
        mode="black-10"
        iconName="arrow-right"
        label="Next slide"
        isLabelHidden
      />
    </div>
  )
}

export default SliderNavigation
