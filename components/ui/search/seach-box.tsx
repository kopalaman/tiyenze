import { FC, InputHTMLAttributes } from "react"

import { Input } from "../input"

export interface Props extends InputHTMLAttributes<HTMLInputElement> {
  className?: string
  onSumit?: (e: any) => void
  onClearSearch?: (e: any) => void
}

const SearchBox: FC<Props> = () => {
  return <Input placeholder="Search..." className="bg-secondary opacity-70" />
}

export default SearchBox
