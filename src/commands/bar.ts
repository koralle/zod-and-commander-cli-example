import { Command } from "commander"

export const bar = new Command("bar")
  .name("bar")
  .action(() => {
    console.error("bar")
  })
