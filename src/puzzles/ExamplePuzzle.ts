// ExamplePuzzle.ts
export const puzzle = {
  title: "Move the Player with a Loop",
  goal: "Move the character 5 steps forward using a loop.",
  solution: (code: string) => {
    // Logic to validate player's code
    return code.includes("for");
  },
};
