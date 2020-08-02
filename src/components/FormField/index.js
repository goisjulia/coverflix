import React from 'react';
import { PropTypes } from 'prop-types';
import InputContainer from './styles';

function FormField({
  label, value, type, name, onChange, suggestions,
}) {
  const [focused] = React.useState(false);
  const isFocused = focused || String(value).length || type === 'date';
  const fieldId = `id_${name}`;
  const isTextarea = type === 'textarea' ? 'textarea' : 'input';

  const hasSuggestions = Boolean(suggestions.length);

  return (
    <InputContainer className="input-container" focused={isFocused}>

      <input
        as={isTextarea}
        type={type}
        value={value}
        name={name}
        onChange={onChange}
        autoComplete="off"
        list={hasSuggestions ? `suggestionFor_${fieldId}` : undefined}
      />

      <label htmlFor={fieldId} className="label">
        {label}
      </label>

      { hasSuggestions
      && (
      <datalist id={`suggestionFor_${fieldId}`}>
        {
        suggestions.map((suggestion) => (
          <option value={suggestion} key={`suggestionFor_${fieldId}_option${suggestion}`}>
            {suggestion}
          </option>
        ))
      }
      </datalist>
      )}

    </InputContainer>
  );
}

FormField.defaultProps = {
  type: 'text',
  value: '',
  onChange: () => { },
  suggestions: [],
};

FormField.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  suggestions: PropTypes.arrayOf(PropTypes.string),
};

export default FormField;
