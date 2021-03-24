export interface IRadioInput {
  input: IInput;
  value: string;
  onChange: (value: string) => void;
}

export interface IInput {
  label: string;
  value: string;
}
