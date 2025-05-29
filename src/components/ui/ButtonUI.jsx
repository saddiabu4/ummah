import React from 'react';
import { Button } from '@mui/material';
const ButtonUI = (props) => {
  return <Button variant={props.variant}>{props.name}</Button>;
};

export default ButtonUI;
