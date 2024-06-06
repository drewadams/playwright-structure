import { Project, devices } from "playwright/test";

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export const visualProjects: Project[] = [
  {
    name: "visual comparison - chrome",
    use: { ...devices["Desktop Chrome"] },
    testDir: "./tests/suites/visual-comparison",
  },
];
