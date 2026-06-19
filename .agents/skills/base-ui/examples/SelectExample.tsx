"use client"

import * as React from "react"
import { Select } from "@base-ui/react/select"
import "./base-ui-patterns.css"

const options = [
  { value: "newest", label: "Newest first" },
  { value: "oldest", label: "Oldest first" },
  { value: "name", label: "Name" },
]

export function SelectExample() {
  const [value, setValue] = React.useState("newest")

  return (
    <Select.Root value={value} onValueChange={setValue}>
      <Select.Trigger className="button" aria-label="Sort bookmarks">
        <Select.Value />
      </Select.Trigger>
      <Select.Portal>
        <Select.Positioner sideOffset={8}>
          <Select.Popup className="popup">
            {options.map((option) => (
              <Select.Item
                key={option.value}
                value={option.value}
                className="item"
              >
                <Select.ItemText>{option.label}</Select.ItemText>
              </Select.Item>
            ))}
          </Select.Popup>
        </Select.Positioner>
      </Select.Portal>
    </Select.Root>
  )
}
