const stylesObject = {
  root: {
    height: "100vh",
    width: "100vw",
    backgroundColor: "black",
  },
  wrapper: {
    paddingTop: "0.7%",
    marginLeft: "0.5%",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column" as "column",
  },
  greetingArea: {
    height: "auto",
    color: "grey",
    fontSize: "15px",
    fontFamily: "JetBrains Mono",
  },
  helpCommand: {
    fontWeight: "bold",
    display: "inline",
    fontFamily: "JetBrains Mono",
    color: "white",
    marginLeft: "0.5%",
  },
  commandArea: {
    width: "93%",
    caretColor: "white",
  },
  input: {
    color: "#d3d3d3",
    fontFamily: "JetBrains Mono",
  },
  commandHistory: {
    color: "#d3d3d3",
    fontFamily: "JetBrains Mono",
  },
  disabledInput: {
    // "& .css-66dh3a-MuiInputBase-input-MuiInput-input.Mui-disabled": {
    //   WebkitTextFillColor: "rgba(255, 255, 255, 1)",
    //   color: "rgba(255,255,255, 1)",
    //   opacity: 1,
    // },
    "& .Mui-disabled": {
      WebkitTextFillColor: "rgba(211, 211, 211, 1)",
      color: "rgba(255,255,255, 1)",
      opacity: 1,
    },
  },
};

export default stylesObject;
