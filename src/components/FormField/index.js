import React from 'react';
import { PropTypes } from 'prop-types';
import InputContainer from './styles';

function FormField({
  label, value, type, name, onChange,
}) {
  const [focused] = React.useState(false);
  const isFocused = focused || String(value).length || type === 'date';
  const fieldId = `id_${name}`;

  return (
    <InputContainer className="input-container" focused={isFocused}>
      {type === 'textarea' ? (
        <textarea
          value={value}
          name={name}
          onChange={onChange}
          rows="2"
        />
      )
        : (
          <input
            type={type}
            value={value}
            name={name}
            onChange={onChange}
          />
        )}
      <label htmlFor={fieldId} className="label">
        {label}
      </label>
    </InputContainer>
  );
}

FormField.defaultProps = {
  type: 'text',
  value: '',
  onChange: () => { },
};

FormField.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
};

export default FormField;
