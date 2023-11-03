const { Input } = require("reactstrap");

const FormInput = ({ register, name, validations, ...rest }) => {
  const { ref, ...registerField } = register(name, validations);

  return <Input innerRef={ref} {...registerField} {...rest} />;
};

export default FormInput;