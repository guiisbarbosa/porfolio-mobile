export type ButtonProps = {
  label: string | React.ReactNode,
  variant: "primary" | "secondary",
  onPress?: () => void,
}