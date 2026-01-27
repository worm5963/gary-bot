import { AttachmentBuilder } from "discord.js";

export async function sixSeven({ message, client }) {
  await message.channel.send({
    files: [
      new AttachmentBuilder(
        "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExN3kycng3dHUxMTl1aWVjZmh0bGF1bnJmbTc0aWZwcWQxb3RseTd6MiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/08uBcURaMq6vA93TGc/giphy.gif"
      )
    ]
  });
}

export async function fortyTwo({ message }) {
  await message.reply("The Answer to the Ultimate Question of Life, the Universe, and Everything");
}

export async function gary({ message}) {
  await message.reply("I heard my name; how can I help you today?")
}