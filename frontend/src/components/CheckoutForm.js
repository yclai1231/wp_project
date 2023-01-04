import {
  FormControlLabel,
  InputLabel,
  MenuItem,
  FormControl,
  OutlinedInput,
  Select,
  Button,
  Checkbox,
  Paper,
  TextField,
  Input,
} from "@mui/material";
import styled from "styled-components";

const PureInput = ({
  label,
  autoComplete,
  required,
  onChange,
  name,
  error,
  variant,
  inputType,
  select,
  value,
}) => {
  return (
    <FormControl
      sx={{ width: "min(30%, 30vmin)" }}
      variant={variant && variant}
      required={Boolean(required)}
    >
      <InputLabel htmlFor={label}>{label}</InputLabel>
      {inputType === "outlined" ? (
        <OutlinedInput
          name={name}
          autoComplete={autoComplete && autoComplete}
          label={label}
          onChange={onChange}
          color={error && error[name] ? "error" : "primary"}
        />
      ) : inputType === "standard" ? (
        <Input
          name={name}
          autoComplete={autoComplete && autoComplete}
          label={label}
          onChange={onChange}
          color={error && error[name] ? "error" : "primary"}
        />
      ) : inputType === "select" ? (
        <Select
          labelId={label}
          value={value ? value : ""}
          label={label}
          onChange={onChange}
          name={name}
        >
          {select.map((m, index) => (
            <MenuItem value={m} key={index}>
              {m}
            </MenuItem>
          ))}
        </Select>
      ) : null}
    </FormControl>
  );
};
const Container = styled.div`
  display: flex;
  align-items: center;
  margin-left: 2vmin;
  margin-right: 2vmin;
  min-height: 5vmin;
  justify-content: space-between;
`;

const CheckoutForm = ({
  title,
  label,
  name,
  inputType,
  handleInputChange,
  select,
  variant,
  value,
}) => {
  console.log(1);
  return (
    <Container>
      <p>{title}</p>
      <PureInput
        required={true}
        label={label}
        //   autoComplete="username"
        onChange={handleInputChange}
        name={name}
        inputType={inputType}
        variant={variant}
        select={select && select}
        value={value}
      />
    </Container>
  );
};

export default CheckoutForm;