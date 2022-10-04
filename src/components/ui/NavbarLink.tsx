import { Tooltip, UnstyledButton, createStyles, Group, Text } from '@mantine/core';
import { Icon } from 'tabler-icons-react';

interface INavbarLinkProps {
  icon: Icon;
  label: string;
  active?: boolean;
  navigateTo?: string;
  onClick?: (activeLink: string, path: string) => void;
}

const useStyles = createStyles((theme) => ({
  label: {
    color: '#fff',
  },
  link: {
    marginTop: 5,
    width: '100%',
    height: 50,
    borderRadius: theme.radius.md,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingLeft: 15,
    color:
      theme.colorScheme === 'dark'
        ? theme.colors.dark[0]
        : theme.colors.gray[7],

    '&:hover': {
      backgroundColor:
        theme.colorScheme === 'dark'
          ? theme.colors.dark[5]
          : theme.colors.gray[0],
    },
  },

  active: {
    '&, &:hover': {
      backgroundColor: theme.fn.variant({ variant: 'light', color: theme.primaryColor })
      .background,
      color: theme.fn.variant({ variant: 'light', color: theme.primaryColor })
        .color,
    },
  },
}));

export default function NavbarLink({ icon: Icon, label, active, navigateTo, onClick }: INavbarLinkProps) {
  const { classes, cx } = useStyles();

  return (
    <Tooltip label={label} position="right" transitionDuration={0}>
      <UnstyledButton
        onClick={() => onClick(label, navigateTo)}
        className={cx(classes.link, { [classes.active]: active })}
      >
        <Group>
            <Icon />
            <Text>{label}</Text>
        </Group>
      </UnstyledButton>
    </Tooltip>
  );
}
