import { Box , Heading ,Text, Flex , Input , Textarea , Button} from '@chakra-ui/react'
import ReactMarkdown from 'react-markdown'
import ChakraUIRenderer from 'chakra-ui-markdown-renderer';

const TextBox = ({heading , content}) =>{
  return(
    <Flex height={"94vh"} alignItems={"center"} justifyContent={"center"} background={"gray.300"}>
      <Flex direction = {"column"} p={10} rounded={6} background={"gray.100"}>
        <Flex width={650} height={550} rounded={6} gap={4} direction={"column"}>
        <Heading>{heading}</Heading>
        <Box overflowY={"scroll"} sx={{
            '&::-webkit-scrollbar': {
              width: '16px',
              borderRadius: '8px',
              backgroundColor: `rgba(0, 0, 0, 0.05)`,
            },
            '&::-webkit-scrollbar-thumb': {
              backgroundColor: `rgba(0, 0, 0, 0.05)`,
            },
          }}>
          <ReactMarkdown components={ChakraUIRenderer()} children={content} skipHtml />
        </Box>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default TextBox
