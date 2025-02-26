"use client"

import * as React from "react"
import * as SwitchPrimitives from "@radix-ui/react-switch"
import { cn } from "@/lib/utils"
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'

export const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  const [checked, setChecked] = useState(false)

  useEffect(() => {
    setMounted(true)
    setChecked(theme === 'light')
  }, [theme])

  if (!mounted) {
    return null
  }

  const handleCheckedChange = (checked: boolean) => {
    setChecked(checked)
    setTheme(checked ? 'light' : 'dark')
  }

  const Switch = React.forwardRef<
    React.ElementRef<typeof SwitchPrimitives.Root>,
    React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
  >(({ className, ...props }, ref) => (
    <SwitchPrimitives.Root
      className={cn(
        "peer inline-flex h-15 w-24 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-strongPurple data-[state=unchecked]:bg-input",
        className
      )}
      {...props}
      ref={ref}
      checked={checked}
      onCheckedChange={handleCheckedChange}
    >
      <SwitchPrimitives.Thumb
        className={cn(
          "pointer-events-none block h-10 w-10 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-14 data-[state=unchecked]:translate-x-0 "
        )}
      />
    </SwitchPrimitives.Root>
  ))
  Switch.displayName = SwitchPrimitives.Root.displayName

  return (
    <Switch />
  )
}

