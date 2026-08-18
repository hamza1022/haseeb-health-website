// Video Showcase content.
//
// HOW TO EDIT:
// - "label" is the only thing you'll usually want to change — it's the text
//   shown under each video on the site. Just edit the string and save.
// - "file" must match a filename in /public/videos exactly (don't rename the
//   files unless you also update the path here).
// - Reordering entries in this list reorders the videos on the site.
// - To remove a video from the site, delete its entry (or comment it out
//   by wrapping it in /* ... */). The file stays in /public/videos either way.

export type VideoEntry = {
  file: string;
  label: string;
};

export const videos: VideoEntry[] = [
  { file: "deadlift.mp4", label: "Deadlift" },
  { file: "barbell-squat.mp4", label: "Barbell Squat" },
  { file: "squat-spot.mp4", label: "Squat (Spotted)" },
  { file: "split-squat.mp4", label: "Split Squat" },
  { file: "hack-squat.mp4", label: "Hack Squat" },
  { file: "leg-press.mp4", label: "Leg Press" },
  { file: "leg-extension.mp4", label: "Leg Extension" },
  { file: "lat-pulldown.mp4", label: "Lat Pulldown" },
  { file: "cable-pulldown.mp4", label: "Cable Pulldown" },
  { file: "cable-crossover.mp4", label: "Cable Crossover" },
  { file: "cable-bicep-curl.mp4", label: "Cable Bicep Curl" },
  { file: "bent-over-row.mp4", label: "Bent-Over Row" },
  { file: "dumbbell-row.mp4", label: "Dumbbell Row" },
  { file: "dumbbell-curl.mp4", label: "Dumbbell Curl" },
  { file: "shoulder-press.mp4", label: "Shoulder Press" },
  { file: "triceps-extension.mp4", label: "Triceps Extension" },
  { file: "coaching-form.mp4", label: "Form Coaching" },
  { file: "family-session.mp4", label: "Family Session" },
];
