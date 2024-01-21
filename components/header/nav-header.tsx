import Link from "next/link"

import { NavItem } from "@/types/nav"
import { cn } from "@/lib/utils"

import Logo from "../logo"
import { NavMenu } from "./menu/nav-menu"

interface NavHeaderProps {
  items?: NavItem[]
}

export function NavHeader({ items }: NavHeaderProps) {
  return (
    <div className="item-center flex flex-row gap-6 md:gap-10">
      <Link href={"/"}>
        <Logo />
      </Link>

      {items?.length ? (
        <nav className="hidden shrink-0 items-center gap-6 text-sm lg:flex">
          {/* <NavMenu /> */}
          {items?.map(
            (item, index) =>
              item.href && (
                <Link
                  key={index}
                  href={item.href}
                  className={cn(
                    "text-muted-foreground hover:text-primary focus:text-primary flex  items-center font-medium transition-colors duration-200",
                    item.disabled && "cursor-not-allowed opacity-80"
                  )}
                >
                  {item.title}
                </Link>
              )
          )}
        </nav>
      ) : null}
    </div>
  )
}
