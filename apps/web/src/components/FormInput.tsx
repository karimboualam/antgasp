import { InputHTMLAttributes } from "react";

type Props = InputHTMLAttributes<HTMLInputElement> & { label?: string; error?: string };
export default function FormInput({ label, error, ...props }: Props) {
  return (
    <label className="grid gap-1">
      {label && <span className="text-sm">{label}</span>}
      <input {...props} className={"border rounded-xl px-3 py-2 " + (props.className ?? "")} />
      {error && <span className="text-red-600 text-xs">{error}</span>}
    </label>
  );
}
