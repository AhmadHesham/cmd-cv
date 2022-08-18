import { CommandsEnum } from '../models/CommandsEnum';
import { Command } from '../models/Command';
import HelpCommand from './HelpCommand';

//Singleton class
class CommandsMap {
    private static map: Map<CommandsEnum, Command> | null = null
    
    private static getMap(): Map<CommandsEnum, Command> {
        if(CommandsMap.map === null) {
            CommandsMap.map = new Map()
            CommandsMap.map.set(CommandsEnum.HELP, new HelpCommand())
        }

        return CommandsMap.map
    }

    public static findCommand(cmd: CommandsEnum): Command {
        return CommandsMap.getMap().get(cmd)!!
    }
    
}

export default CommandsMap