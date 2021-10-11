import React from 'react'
// import { Box, Alert, AlertIcon, AlertDescription } from '@chakra-ui/core';

const ErrorMessage: React.FC<{ message: string }> = ({ message }) => {
  return (
    <div className="justify-center w-20 h-20 bg-red font-medium text-white">
      {message}
    </div>
    // <Box my={4}>
    //   <Alert status="error" borderRadius={4}>
    //     <AlertIcon />
    //     <AlertDescription>{message}</AlertDescription>
    //   </Alert>
    // </Box>
  )
}

export default ErrorMessage
