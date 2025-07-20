import { Moon, Sun } from "lucide-react"

import { Button } from "@/components/ui/button"
import { useTheme } from "@/context/ThemeProvider"

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else if (theme === "dark") {
      setTheme("light");
    }
  }

  return (
    <Button variant="outline" size="icon" onClick={() => toggleTheme()}>
      { theme === "light" && <Moon /> }
      { theme === "dark" && <Sun /> }
    </Button>
  )
}
