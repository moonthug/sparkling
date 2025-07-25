import { GithubIcon } from '@/components/GithubIcon.tsx';
import { ModeToggle } from '@/components/ModeToggle.tsx';
import { Button } from '@/components/ui/button.tsx';
import { Calculator, MessageCircleQuestion } from 'lucide-react';
import { Link } from '@tanstack/react-router';

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList
} from '@/components/ui/navigation-menu.tsx';


export default function Header() {
  return (
    <header className="p-2 flex gap-2 justify-between">
      <NavigationMenu>

        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link className="flex flex-row items-center gap-2" to="/">
                <Calculator />
                <span>Calculator</span>
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link className="flex flex-row items-center gap-2" to="/about">
                <MessageCircleQuestion />
                <span>About</span>
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <div className="flex flex-row gap-4">
        <Button variant="link" size="icon">
          <a href="https://github.com/moonthug/sparkling" target="_blank" rel="noreferrer">
            <GithubIcon />
          </a>
        </Button>
        <ModeToggle />
      </div>
    </header>
  )
}
