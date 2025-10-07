export type ButtonProps = {
  label: string,
  variant: "primary" | "secondary",
  void?: () => void;
}