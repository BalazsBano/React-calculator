import React from "react";
import { Button } from "react-bootstrap";

interface OperationButtonProps {
  className: string;
  operation: string;
  selectOperation: (digit: string) => void;
}

export const OperationButton: React.FC<OperationButtonProps> = ({
  operation,
  selectOperation,
}) => {
  return (
    <Button 
      variant={'outline-light'} 
      className={'col-12'}
      onClick={() => selectOperation(operation)} 
    >
       {operation}
    </Button>
  )
}