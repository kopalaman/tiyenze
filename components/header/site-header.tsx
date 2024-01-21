import Link from "next/link"
import { Search } from "lucide-react"

import { siteConfig } from "@/config/site"
import { Button, buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import { ThemeToggle } from "@/components/theme-toggle"

import SearchBox from "../ui/search/seach-box"
import { AuthorizedMenu } from "./menu/authorized-menu"
import JoinButton from "./menu/join-button"
import { NavHeader } from "./nav-header"

export function SiteHeader() {
  const isAuthorized = false

  return (
    <header className="bg-background z-40 w-full border-b">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <NavHeader items={siteConfig.mainNav} />
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-3">
            <ThemeToggle />
            <div className="hidden sm:inline-flex">
              {isAuthorized ? <AuthorizedMenu /> : <JoinButton />}
            </div>
            <Button size={"sm"} className="hidden shrink-0  sm:inline-flex">
              Become a Seller
            </Button>
          </nav>
        </div>
      </div>
      <div className="block container w-full lg:w-[70%] pb-4">
        <SearchBox />
      </div>
    </header>
  )
}
