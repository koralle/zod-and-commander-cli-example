import { Command } from "commander"

export const baz = new Command("baz")
  .name("baz")
  .action(() => {
    console.log("baz")
  })
