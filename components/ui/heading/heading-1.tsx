import { FC, HTMLAttributes, ReactNode } from "react"

export interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  fontClass?: string
  rightDescText?: ReactNode
  desc?: ReactNode
  hasNextPrev?: boolean
  isCenter?: boolean
}

const HeadingOne: FC<HeadingProps> = ({
  children,
  desc = "",
  className = "mb-12 lg:mb-14 text-neutral-900 dark:text-neutral-50",
  isCenter = false,
  hasNextPrev = false,
  fontClass = "text-3xl md:text-4xl font-semibold",
  rightDescText,
  ...props
}) => {
  return (
    <div
      className={`relative flex flex-col sm:flex-row sm:items-end justify-between ${className}`}
    >
      <div
        className={isCenter ? "flex flex-col items-center w-full mx-auto" : ""}
      >
        <h2
          className={`${isCenter ? "justify-center" : ""} ${fontClass}`}
          {...props}
        >
          {children || `Section Heading`}
          {rightDescText && (
            <>
              <span className="">{`. `}</span>
              <span className="text-neutral-500 dark:text-neutral-400">
                {rightDescText}
              </span>
            </>
          )}
        </h2>
        {!!desc && (
          <span className="mt-2 md:mt-3 font-normal block text-base sm:text-xl text-neutral-500 dark:text-neutral-400">
            {desc}
          </span>
        )}
      </div>
    </div>
  )
}

export default HeadingOne
