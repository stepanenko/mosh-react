
import { Component } from 'react';
import Joi from 'joi-browser';

import Input from './input';

class Form extends Component {
  state = {
    data: {},
    errors: {}
  };

  validateUser = () => {
    const options = { abortEarly: false };
    const { error } = Joi.validate(this.state.data, this.schema, options);
    if (!error) return null;

    const errors = {};
    for (let item of error.details) errors[item.path[0]] = item.message;
    return errors;
  };

  validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const schema = { [name]: this.schema[name] };
    const { error } = Joi.validate(obj, schema);
    return error ? error.details[0].message : null;
  };

  handleSubmit = ev => {
    ev.preventDefault();

    const errors = this.validateUser();
    this.setState({ errors: errors || {} });
    if (errors) return;

    this.doSubmit(this.state.data);
  }

  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];

    const data = { ...this.state.data };
    data[input.name] = input.value;

    this.setState({ data, errors });
  }

  renderButton = (label) => {
    return <button
      type="submit"
      className="btn btn-primary"
      disabled={this.validateUser()}>
      {label}
    </button>
  };

  renderInput = (name, label, type = 'text') => {
    const { data, errors } = this.state;

    return <Input
      name={name}
      label={label}
      type={type}
      onChange={this.handleChange}
      value={data[name]}
      error={errors[name]}
    />
  };
}

export default Form;
