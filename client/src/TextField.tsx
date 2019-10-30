import React, { useState, useRef } from 'react';

interface Person {
  firstName: string,
  lastName: string,
}

interface Props {
  text: string;
  ok?: boolean;
  int?: number;
  fn?: () => number;
  obj?: {
    field1: string,
  }
  person?: Person;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const TextField: React.FC<Props> = ({ handleChange }) => {
  const [ count, setCount ] = useState<number | null>(5);

  const inputRef = useRef<HTMLInputElement>(null);

  setCount(null);

  return (
    <div>
      <input 
        ref={inputRef}
        onChange={handleChange}
      />
    </div>
  )
};

export default TextField;