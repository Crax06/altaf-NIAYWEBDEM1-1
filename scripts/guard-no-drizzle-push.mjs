#!/usr/bin/env node

// This script ensures that drizzle-kit push is not used in CI
// drizzle-kit push should only be used in development

if (process.env.CI) {
  console.error(
    "Error: drizzle-kit push should not be used in CI. Use drizzle-kit migrate instead.",
  );
  process.exit(1);
}

console.log("Guard check passed: Not in CI environment.");
