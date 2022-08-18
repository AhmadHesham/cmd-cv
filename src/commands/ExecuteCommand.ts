import { CommandsEnum } from "../models/CommandsEnum";
import CommandsMap from "./CommandsMap";

export default (event: React.KeyboardEvent, cmd: string): string => {
  let result = "[ERR] Invalid Command";
  if (event.key == "Enter") {
    //Prevent going to a new line
    event.preventDefault();

    //Find the command enum
    let cmdEnum = Object.values(CommandsEnum).find(
      (entry) => cmd.toLowerCase() === entry
    );

    //Execute the command
    if (cmdEnum != undefined) {
      const cmdClass = CommandsMap.findCommand(cmdEnum);
      result = cmdClass!!.execute();
    }
  }
  return result;
};