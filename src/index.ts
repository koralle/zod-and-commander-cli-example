import { Command } from "commander"
import { foo } from "./commands/foo"
import { bar } from "./commands/bar"

process.on("SIGINT", () => process.exit(0))
process.on("SIGTERM", () => process.exit(0))

const main = async () => {
  const program = new Command()

  program.addCommand(foo).addCommand(bar)

  program.parse()
}
main()
