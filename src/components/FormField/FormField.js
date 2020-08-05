import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const FormFieldWrapper = styled.div`
  position: relative;
  textarea {
    min-height: 150px;
  }
  input[type="color"] {
    padding-left: 56px;
  }
`;

const Label = styled.label``;

Label.Text = styled.span`
  color: black;
  height: 57px;
  position: absolute; 
  top: 0;
  left: 16px;
  
  display: flex;
  align-items: center;
  
  transform-origin: 0% 0%;
  font-size: 18px;
  font-style: normal;
  font-weight: 300;
  
  transition: .1s ease-in-out;
`;

const Input = styled.input`
  background: #c9c9c9;
  color: black;
  display: block;
  width: 100%;
  height: 57px;
  font-size: 18px;
  
  outline: 0;
  border: 0;
  border-top: 4px solid transparent;
  border-bottom: 7px solid #FFD908;
  
  padding: 10px 10px;
  margin-bottom: 45px;
  
  resize: none;
  border-radius: 4px;
  transition: border-color .3s;
  
  &:focus {
    border-bottom-color: var(--white);
  }
  &:focus:not([type='color']) + ${Label.Text} {
    transform: scale(.6) translateY(-10px);
  }
  ${({ value }) => {
    const hasValue = value.length > 0;
    return hasValue && css`
        &:not([type='color']) + ${Label.Text} {
          transform: scale(.6) translateY(-10px);
        }
      `;
  }
}
`;

function FormField({
  label, type, name, value, onChange, suggestions,
}) {
  const isTypeTextArea = type === 'textarea';
  const tag = isTypeTextArea ? 'textarea' : 'input';

  const hasValue = Boolean(value.length);
  const hasSuggestions = Boolean(suggestions.length);

  return (
    <FormFieldWrapper>
      <Label>
        <Input
          as={tag}
          type={type}
          value={value}
          name={name}
          onChange={onChange}
          autoComplete={hasSuggestions ?'off' : 'on'}
          list={`suggestionFor_${FieldId}` undefined}
        />
        <Label.Text>
          {label}
          :
        </Label.Text>
        {
          hasSuggestions && (
            <datalist id={`suggestionFor_${FieldId}`}>
        {
          suggestions.map((suggestion) => )
          <option value={suggestion} key={`suggestionFor_${FieldId}_option${suggestion}`}>
          {suggestion}
          </option>
          ))
        }
        </datalist>
          )
        }

      
      </Label>
    </FormFieldWrapper>
  );
}

FormField.defaultProps = {
  type: 'text',
  value: '',
  onChange: () => {},
  suggestions: [],
};

FormField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  suggestions: PropTypes.arrayOf(PropTypes.string),
};

export default FormField;