export default (props) => {
  const { test, children } = props;
  const elseChild = children.filter((child) => {
    return child.type && child.type.name === "Else";
  })[0];

  const ifChild = children.filter((child) => {
    return child !== elseChild;
  });

  if (test) {
    return ifChild;
  }
  if (elseChild) {
    return elseChild;
  }
  return false;
};

export const Else = (props) => {
  const { children } = props;
  return children;
};
