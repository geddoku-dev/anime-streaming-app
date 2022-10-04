import { useState } from 'react';
import { Navbar, NavbarProps, Stack } from '@mantine/core';
import {
  Home2,
  BrandSafari,
  Logout,
  SwitchHorizontal,
} from 'tabler-icons-react';
import { useNavigate } from 'react-router-dom'
import NavbarLink from './NavbarLink';

import { navigation } from '../../constants/navigation';

export function AppNavbar(props: NavbarProps) {
  const [active, setActive] = useState<string>(navigation.home.label);
  const navigate = useNavigate();

  const navigateTo = (activeLink: string, path: string) => {
    setActive(activeLink);
    navigate(path);
  };

  const isActive = (current: string) => {
    return active === current;
  }

  return (
    <Navbar {...props}>
      <Navbar.Section grow>
        <Stack justify="center" spacing={0}>
          <NavbarLink 
            icon={Home2}
            label={navigation.home.label}
            onClick={navigateTo}
            active={isActive(navigation.home.label)}
            key={navigation.home.key}
            navigateTo={navigation.home.path}
          />
          <NavbarLink 
            icon={BrandSafari}
            label={navigation.explore.label}
            onClick={navigateTo}
            active={isActive(navigation.explore.label)}
            key={navigation.explore.key}
            navigateTo={navigation.explore.path}
          />
        </Stack>
      </Navbar.Section>
      <Navbar.Section>
        <Stack justify="center" spacing={0}>
          <NavbarLink icon={SwitchHorizontal} label="Change account" />
          <NavbarLink icon={Logout} label="Logout" />
        </Stack>
      </Navbar.Section>
    </Navbar>
  );
}