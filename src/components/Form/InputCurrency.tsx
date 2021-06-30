import IntlCurrencyInput from 'react-intl-currency-input';
import { Box, FormErrorMessage, FormLabel } from '@chakra-ui/react';

import { FieldError } from 'react-hook-form';

interface InputProps {
    id: string;
    label?: string;
    error?: FieldError;
    setValue: (value: number) => void;
    defaultValue?: number;
}

const currencyConfig = {
  locale: 'pt-BR',
  formats: {
    number: {
      BRL: {
        style: 'currency',
        currency: 'BRL',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      },
    },
  },
};

export function InputCurrency({
  id,
  error,
  label,
  setValue,
  defaultValue = 0,
}: InputProps): JSX.Element {
  const handleChange = (event, value: number) => {
    event.preventDefault();
    setValue(value);
  };

  return (
    <Box w="100%">
      { !!label && (
      <FormLabel htmlFor={id}>
        {label}
      </FormLabel>
      )}

      <IntlCurrencyInput
        id={id}
        currency="BRL"
        config={currencyConfig}
        onChange={handleChange}
        defaultValue={defaultValue}
        className="currency"
      />

      {!!error && <FormErrorMessage>{error.message}</FormErrorMessage>}

    </Box>
  );
}
