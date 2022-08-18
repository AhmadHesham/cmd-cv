import Typography from "@mui/material/Typography";
import React, { useRef, useState } from "react";
import styles from "./styles/styles";
import TextField from "@mui/material/TextField";
import { InputAdornment } from "@mui/material";
import ExecuteCommandHandler from "./commands/ExecuteCommand";
import "@fontsource/jetbrains-mono";

function App() {
  const [command, setCommand] = useState<string>("");
  const [history, setHistory] = useState<Array<CommandExecution>>(Array());

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCommand(e.target.value);
  };

  const handleCommand = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      const result = ExecuteCommandHandler(e, command);
      let cmdExecution: CommandExecution = {
        command,
        response: result,
      };
      const oldHistory = [...history];
      oldHistory.push(cmdExecution);
      setHistory(oldHistory);
      setCommand("");
    }
  };

  return (
    <div style={styles.root}>
      <div style={styles.wrapper}>
        <Typography style={styles.greetingArea}>
          Greetings. This is a project that I developed to host my personal
          information and contact info for fun.
        </Typography>
        <div style={{ display: "flex" }}>
          <Typography style={styles.greetingArea}>
            To list all commands, please use the command
          </Typography>
          <Typography style={styles.helpCommand}>help</Typography>
        </div>
        {history.map((entry, index) => (
          <div key={index} style={{ display: "flex", flexDirection: "column" }}>
            <TextField
              key={entry.command + index}
              value={entry.command}
              variant="standard"
              InputProps={{
                startAdornment: (
                  <InputAdornment key={entry.command + index} sx={{ color: "#d3d3d3" }} position="start">
                    <Typography key={entry.command + index} variant="caption" sx={{ color: "#d3d3d3" }}>
                      {"> "}
                    </Typography>
                  </InputAdornment>
                ),
                style: styles.input,
                disableUnderline: true,
              }}
              disabled
              sx={styles.disabledInput}
              multiline
            ></TextField>
            <Typography key={entry.response + index} style={styles.commandHistory}>
              {entry.response}
            </Typography>
          </div>
        ))}
        <TextField
          id="cmd-area"
          value={command}
          onKeyDown={handleCommand}
          onChange={handleInput}
          variant="standard"
          InputProps={{
            startAdornment: (
              <InputAdornment sx={{ color: "#d3d3d3" }} position="start">
                <Typography variant="caption" sx={{ color: "grey" }}>
                  {"> "}
                </Typography>
              </InputAdornment>
            ),
            style: styles.input,
            disableUnderline: true,
          }}
          sx={styles.commandArea}
          multiline
        ></TextField>
      </div>
    </div>
  );
}

export default App;

// Interfaces
interface CommandExecution {
  command: string;
  response: string;
}
