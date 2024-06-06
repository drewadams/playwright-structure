import { Project, devices } from "playwright/test";

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export const functionalProjects: Project[] = [
  {
    name: "functional - chrome",
    use: { ...devices["Desktop Chrome"] },
    testDir: "./tests/suites/functional",
  },
];
