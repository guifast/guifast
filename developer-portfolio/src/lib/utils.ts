export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function assertNever(value: never): never {
  throw new Error(`Unhandled value: ${String(value)}`);
}
