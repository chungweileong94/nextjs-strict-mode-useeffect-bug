"use client";

import { useEffect, useState } from "react";

interface StoryTrayProps {
  stories: { id: string; label: string }[];
}

export function StoryTray({ stories }: StoryTrayProps) {
  const [list, setList] = useState(stories);

  // `useEffect` no longer trice twice in strict mode for some reasons
  useEffect(() => {
    console.log("effect");
    setList((prev) => {
      return [...prev, { id: "create", label: "Create Story" }];
    });
  }, []);

  return (
    <ul>
      {list.map((story) => (
        <li key={story.id}>{story.label}</li>
      ))}
    </ul>
  );
}
