import React from "react";

type SecretInputProps = {
  name: "dbId" | "token";
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const SecretInput = (props: SecretInputProps) => {
  const { name, value, onChange } = props;

  return (
    <input
      type="password"
      name={name}
      value={value}
      onChange={onChange}
      required
    />
  );
};

export default SecretInput;
