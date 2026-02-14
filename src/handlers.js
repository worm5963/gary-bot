import { AttachmentBuilder } from "discord.js";

export async function sixSeven({ message }) {
  await message.reply({
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

export async function sixNine({message}) {
	await message.reply("nice.")
}

export async function kys({ message }) {
  await message.reply({
    files: [
      new AttachmentBuilder(
        "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExeGE1YXNxcnQycWRtaWw3cXgxN2gxYjFtY3J0dGlpaXE5MnJsZDduZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/7K95K2SuBOaBaXXlGH/giphy.gif"
      )
    ]
  });
}