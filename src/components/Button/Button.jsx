import "./Button.scss"
import classNames from "classnames"
import Icon from "@/components/Icon"

const Button = (props) => {
  const {
    href,
    disabled = false,
    type = "button",
    target,
    className,
    label,
    /*
     * '' (default) | 'transparent' | black-10
     */
    mode = "",
    isLabelHidden = false,
    iconName,
    /*
     * 'before' | 'after'
     */
    iconPosition = "before",
    hasFillIcon,
    extraAttrs,
  } = props

  const isLink = href !== undefined
  const Component = isLink ? "a" : "button"
  const linkProps = { href, target }
  const buttonProps = { type, disabled }
  const specificProps = isLink ? linkProps : buttonProps
  const title = isLabelHidden ? label : undefined
  const iconComponent = iconName && (
    <Icon className="button__icon" name={iconName} hasFill={hasFillIcon} />
  )

  return (
    <Component
      {...extraAttrs}
      className={classNames(className, "button", {
        [`button--${mode}`]: mode,
      })}
      {...specificProps}
      aria-label={title}
    >
      {iconPosition === "before" && iconComponent}
      {!isLabelHidden && <span className="button__label">{label}</span>}
      {iconPosition === "after" && iconComponent}
    </Component>
  )
}

export default Button
