export const getNodeData = (nodeType) => {
  switch (nodeType) {
    case "and":
      return { inputA: 0, inputB: 0 };

    case "switchButton":
      return { output: 0 };

    case "light":
      return { output: 0 };

    default:
      return 0;
  }
};