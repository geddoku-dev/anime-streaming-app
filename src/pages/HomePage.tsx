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

const useStyles = createStyles((theme) => ({
  card: {
    position: "relative",
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
    height: 600,
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

function ItemCard({ image, title, sub, dub, currentEpisodes }: CardProps) {
  const { classes } = useStyles();

  return (
    <Card className={classes.card} withBorder radius="md" p="md">
      <Card.Section className="itemCardImageWrapper">
        <img className="itemCardImage" src={image} alt={title} />
      </Card.Section>
      <Group className={classes.info}>
        <Group spacing="xs">
          <Badge className={classes.infoBadge} variant="filled" radius="sm">
            <Text className={classes.infoBadgeText}>{sub && "SUB"}</Text>
          </Badge>
          <Badge className={classes.infoBadge} variant="filled" radius="sm">
            <Text className={classes.infoBadgeText}>{dub && "DUB"}</Text>
          </Badge>
        </Group>
        <Badge className={classes.episodesBadge} variant="filled" radius="sm">
          <Text className={classes.episodesBadgeText}>
            Ep {currentEpisodes}
          </Text>
        </Badge>
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
      slideSize="20%"
      breakpoints={[{ maxWidth: "sm", slideSize: "100%", slideGap: 2 }]}
      slideGap="xl"
      align="start"
      slidesToScroll={mobile ? 1 : 3}
    >
      {slides}
    </Carousel>
  );
}

export default function HomePage() {
  return <CardsCarousel />;
}
