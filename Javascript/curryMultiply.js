const multiply = (a) => {
  return (b) => {
    return a*b;
  };
};

console.log(multiply(5)(6));
