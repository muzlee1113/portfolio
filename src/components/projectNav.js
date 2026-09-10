import projects from "./projects.json";

/**
 * Prev/next project relative to `pagination` (an index into the raw
 * projects array, as computed by each route in App.js), skipping any
 * project flagged `hidden` so it never shows up in cross-project nav.
 */
export function getPrevNextProject(pagination) {
  const visible = projects.filter((project) => !project.hidden);
  const current = projects[pagination];
  const idx = visible.indexOf(current);
  return {
    prev: idx > 0 ? visible[idx - 1] : null,
    next: idx > -1 && idx < visible.length - 1 ? visible[idx + 1] : null,
  };
}
