import React from "react";
import { Button } from "react-bootstrap";

interface DigitButtonProps {
  className: string;
  digit: string;
  enterDigit: (digit: string) => void;
}

export const DigitButton: React.FC<DigitButtonProps> = ({
  digit,
  enterDigit,
}) => {
  return (
    <Button className={'col-12'} onClick={() => enterDigit(digit)}>
      {digit}
    </Button>
  )
}