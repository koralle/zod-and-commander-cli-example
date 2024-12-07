import { Command } from "commander"
import { z } from "zod"

const addOptionsSchema = z.object({
  force: z.boolean().optional()
})

export const foo = new Command("foo")
  .name("foo")
  .option("-f, --force", "Force the operation", false)
  .action(async (opts) => {
    const parseResult = addOptionsSchema.safeParse(opts)

    if (!parseResult.success) {
      const { error } = parseResult
      throw new Error(error.message, { cause: error })
    }

    const options = parseResult.data

    if (options.force) {
      console.log("foo")
    }
  })
