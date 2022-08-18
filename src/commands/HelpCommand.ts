import { CommandsEnum } from "../models/CommandsEnum";
import { Command } from "../models/Command";

export default class HelpCommand implements Command {
  execute(): string {
    let commandsString = "";
    Object.values(CommandsEnum).forEach(
      (entry) => (commandsString += `${entry} `)
    );
    return "The available commands are: " + commandsString;
  }
}
