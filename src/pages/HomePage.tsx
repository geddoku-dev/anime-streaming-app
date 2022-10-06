import { Carousel } from "@mantine/carousel";
import { useMediaQuery } from "@mantine/hooks";
import {
  Badge,
  createStyles,
  Card,
  Text,
  useMantineTheme,
  Group,
} from "@mantine/core";

const useCarouselStyles = createStyles((_theme, _params, getRef) => ({
  controls: {
    ref: getRef("controls"),
    transition: "opacity 150ms ease",
    opacity: 0,
  },

  root: {
    "&:hover": {
      [`& .${getRef("controls")}`]: {
        opacity: 1,
      },
    },
  },
}));

const useStyles = createStyles((theme) => ({
  card: {
    position: "relative",
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
    minHeight: 370,
  },

  info: {
    marginTop: theme.spacing.md - 6,
    marginBottom: theme.spacing.xs / 2,
    width: "100%",
    justifyContent: "space-between",
  },

  infoBadge: {
    backgroundColor: "white",
  },

  infoBadgeText: {
    color: "black",
  },

  episodesBadge: {
    backgroundColor: "#981047",
  },

  episodesBadgeText: {
    color: "white",
  },

  subInfo: {
    fontSize: 14,
    marginBottom: theme.spacing.md,
    position: "absolute",
    bottom: 0,
  },

  title: {
    maxHeight: 70,
  },
}));

interface CardProps {
  image: string;
  title: string;
  currentEpisodes: string;
  category: string;
  sub: boolean;
  dub: boolean;
  format: string;
  episodeMin: string;
}

function ItemCard({
  image,
  title,
  sub,
  dub,
  currentEpisodes,
  category,
  format,
  episodeMin,
}: CardProps) {
  const { classes } = useStyles();

  return (
    <Card className={classes.card} radius="sm" p="xs">
      <Card.Section className="itemCardImageWrapper">
        <img className="itemCardImage" src={image} alt={title} />
      </Card.Section>
      <Group className={classes.info}>
        <Group spacing="xs">
          <Badge className={classes.infoBadge} radius="sm" size="sm">
            <Text className={classes.infoBadgeText}>{sub && "sub"}</Text>
          </Badge>
          <Badge className={classes.infoBadge} radius="sm" size="sm">
            <Text className={classes.infoBadgeText}>{dub && "dub"}</Text>
          </Badge>
        </Group>
        <Badge className={classes.episodesBadge} radius="sm" size="sm">
          <Text className={classes.episodesBadgeText}>
            Ep {currentEpisodes}
          </Text>
        </Badge>
      </Group>
      <Text className={classes.title} mt={15} size={16} weight={500}>
        {title}
      </Text>
      <Group spacing="xs" className={classes.subInfo}>
        <Text>{format}</Text>
        <Text>&#9679;</Text>
        <Text>{category}</Text>
        <Text>&#9679;</Text>
        <Text>{episodeMin}</Text>
      </Group>
    </Card>
  );
}

const data: CardProps[] = [
  {
    image:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx120377-p2PmPHb6Zwk0.jpg",
    title: "Cyberpunk: Edgerunners",
    category: "Action",
    dub: true,
    sub: true,
    episodeMin: "24min",
    currentEpisodes: "10/10",
    format: "ONA",
  },
  {
    image:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx143270-iZOJX2DMUFMC.jpg",
    title: "Lycoris Recoil",
    category: "Action",
    dub: true,
    sub: true,
    episodeMin: "24min",
    currentEpisodes: "13/13",
    format: "TV",
  },
];

function CardsCarousel() {
  const { classes } = useCarouselStyles();
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm}px)`);
  const slides = data.map((item) => (
    <Carousel.Slide key={item.title}>
      <ItemCard {...item} />
    </Carousel.Slide>
  ));

  return (
    <Carousel
      withIndicators={false}
      draggable={false}
      slideSize="16.666666%"
      breakpoints={[{ maxWidth: "sm", slideSize: "100%", slideGap: 2 }]}
      slideGap="xl"
      align="start"
      slidesToScroll={mobile ? 1 : 3}
      classNames={classes}
    >
      {slides}
    </Carousel>
  );
}

export default function HomePage() {
  return <CardsCarousel />;
}
