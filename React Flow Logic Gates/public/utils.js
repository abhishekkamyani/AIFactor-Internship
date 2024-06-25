export const getNodeData = (nodeType) => {
  switch (nodeType) {
    case "and":
      return { output: 0 };

    case "or":
      return { output: 0 };

    case "not":
      return { output: 1 };

    case "switchButton":
      return { output: 0 };

    case "light":
      return { output: 0 };

    default:
      return 0;
  }
};