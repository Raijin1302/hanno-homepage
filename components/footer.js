import { Box } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Box align="center" opacity={0.7} fontSize="sm">
      &copy; {new Date().getFullYear()} Hanno Nguyen.
      <br /> Inspired by Takuya Matsuyama. All Rights Reserved.
    </Box>
  )
}

export default Footer
