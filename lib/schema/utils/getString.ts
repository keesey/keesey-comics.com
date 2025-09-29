export const getString = (x: unknown) =>
  typeof x === "string" ? x || undefined : undefined
