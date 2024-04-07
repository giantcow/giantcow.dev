import {
  Avatar,
  Box,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import PomfImage from "/pomf.png";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

interface Interest {
  topic: string;
}

function App() {
  const INTERESTS: Interest[] = [
    { topic: "Encoding (ie. H.264 / H.265 / AV1 / AAC )" },
    { topic: "Packaging (ie. TS / fmp4)" },
    { topic: "TCP streaming tech (ie. MPEG-DASH / MSS / HLS )" },
    { topic: "UDP streaming tech (ie. MPEG-TS, RTP/RTP-FEC, Zixi )" },
    { topic: "Typescipt" },
    { topic: "Bash" },
    { topic: "Rust 🦀" },
    { topic: "AWS (ECS/Fargate, Lambda, EC2, VPC, DDB, )" },
    { topic: "IaC (AWS CDK & Cfn)" },
    { topic: "Linux (Amazon Linux & Ubuntu primarily)" },
    { topic: "" },
  ];

  const LINUX = `
I'd just like to interject for a moment. What you're referring to
as Linux, is in fact, GNU/Linux, or as I've recently taken to
calling it, GNU plus Linux. Linux is not an operating system unto
itself, but rather another free component of a fully functioning
GNU system made useful by the GNU corelibs, shell utilities and
vital system components comprising a full OS as defined by POSIX.
Many computer users run a modified version of the GNU system every
day, without realizing it. Through a peculiar turn of events, the
version of GNU which is widely used today is often called "Linux",
and many of its users are not aware that it is basically the GNU
system, developed by the GNU Project. There really is a Linux, and
these people are using it, but it is just a part of the system
they use. Linux is the kernel: the program in the system that
allocates the machine's resources to the other programs that you
run. The kernel is an essential part of an operating system, but
useless by itself; it can only function in the context of a
complete operating system. Linux is normally used in combination
with the GNU operating system: the whole system is basically GNU
with Linux added, or GNU/Linux. All the so-called "Linux"
distributions are really distributions of GNU/Linux.
`;

  const buildInterests = (interests: Interest[]) => {
    const Interests = () => (
      <>
        {interests
          .filter(({ topic }) => topic !== "")
          .map(({ topic }) => (
            <ListItem>
              <ListItemIcon>
                <ChevronRightIcon />
              </ListItemIcon>
              {topic.includes("Linux") ? (
                <Tooltip title={LINUX} enterDelay={500} placement="top">
                  <ListItemText>{topic}</ListItemText>
                </Tooltip>
              ) : (
                <ListItemText>{topic}</ListItemText>
              )}
            </ListItem>
          ))}
      </>
    );

    return (
      <List dense>
        <Interests />
      </List>
    );
  };

  return (
    <>
      <Stack spacing={1} padding="1em" alignItems="center">
        <Stack direction="row" alignItems="center">
          <Typography variant="h2" sx={{ pr: 2 }}>
            Hiya!
          </Typography>
          <Avatar
            src={PomfImage}
            variant="rounded"
            sx={{ width: 64, height: 64, transform: "scaleX(-1)" }}
          />
        </Stack>

        <Box paddingLeft="1em">
          <Stack direction="column" spacing={2}>
            <Stack direction="row" spacing={1}>
              <Typography>I'm Kayo</Typography>
              <Typography variant="subtitle2">
                <code>
                  ( <i>"Kay-oh"</i> / <i>"Kae-yo"</i> )
                </code>
              </Typography>
            </Stack>
            <Typography>
              A full-stack developer by trade, primarily focusing on streaming
              media content over the internet (OTT).
            </Typography>
            <Typography>
              Some of my interests {buildInterests(INTERESTS)}
            </Typography>
            <Typography>
              A large majority of the software I work on is behind closed doors,
              so I don't have much to share. One of my goals is to change that
              by contributing to OSS projects!
            </Typography>
          </Stack>
        </Box>
      </Stack>

      <Stack spacing={5} padding="2em">
        <Divider />
        <Typography
          fontFamily="monospace"
          variant="h5"
          color="grey"
          align="center"
        >
          <i>
            "Time does not pass, it continues — we just stop being part of it"
          </i>{" "}
          -Unknown
        </Typography>
      </Stack>
    </>
  );
}

export default App;
