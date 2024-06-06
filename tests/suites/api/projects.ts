import { Project, devices } from "playwright/test";

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export const apiProjects: Project[] = [
  {
    name: "api",
    testDir: "./tests/suites/api",
  },
];
