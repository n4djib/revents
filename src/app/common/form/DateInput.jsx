import React from "react";
import { Form, Label } from "semantic-ui-react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// import moment from "moment";
import { format } from 'date-fns'

const DateInput = ({
  input,
  width,
  placeholder,
  dateFormat,
  meta: { touched, error },
  ...rest
}) => {
  return (
    <Form.Field error={touched && !!error}>
      <DatePicker
        {...rest}
        dateFormat={dateFormat}
        placeholderText={placeholder}
        selected={input.value ? new Date(input.value) : null}
        onChange={ date => input.onChange( format(date, dateFormat) ) }
        // onChange={ date => input.onChange( parseISO(date) ) }
        onBlur={input.onBlur}
        onChangeRaw={(e) => e.preventDefault()}
      />
      {touched && error && (
        <Label basic color="red">
          {error}
        </Label>
      )}
    </Form.Field>
  );
};

export default DateInput;
