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
    <header className="p-2 flex gap-2 bg-white text-black justify-between">
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
    </header>
  )
}
