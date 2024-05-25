import { StoryTray } from "./story-tray";

/** Add your relevant code here for the issue to reproduce */
export default function Home() {
  return (
    <StoryTray
      stories={[
        { id: "0", label: "Ankit's Story" },
        { id: "1", label: "Taylor's Story" },
      ]}
    />
  );
}
