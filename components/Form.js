import { useState , useEffect } from 'react';
import { useRouter } from 'next/router';
import { Box , Heading ,Text, Flex , Input , Textarea , Button} from '@chakra-ui/react'
import { EditIcon } from '@chakra-ui/icons';
import ReactMarkdown from 'react-markdown'
import ChakraUIRenderer from 'chakra-ui-markdown-renderer';
import { HiOutlineDocumentText } from "react-icons/hi";

const Form = () =>{
  const router = useRouter();

  const [name , setName] = useState("");
  const [content , setContent] = useState("");
  const [preview, setPreview] = useState(false)


  useEffect(()=>{
    console.log(name);
  },[name]);

  useEffect(()=>{
    console.log(content);
  },[content]);

  const handleSubmit = async(e) =>{
    e.preventDefault();
    const form = {
      "pagekey":name,
      "content":content
    }
    try{
      console.log(form);
      const res = await fetch('/api/pages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });
      if (!res.ok) {
        console.log(res.status);
      }
      router.push(`/${form.pagekey}`)
    }
    catch(err){
      console.log(err.message);
    }
  }

  return(

    <Flex direction={"row"} position={"relative"} align={"center"} justifyContent={"center"} gap={12}>

      <Box background={"gray.100"} rounded={6}>
        <Flex ml={6} mt={6} direction={"row"}>
          <EditIcon w={10} h={10}/>
          <Heading ml={2}>New Page</Heading>
        </Flex>
        <form onSubmit = {handleSubmit}>
        <Flex mx={6} width={550} height={500} direction={"column"} gap={2} mt={6} position={"relative"}>
          <Text mt={4}>Page Name: </Text>
            <Input borderColor={"gray.400"} placeholder={"Name of your page"} type="text" value={name} onChange={(e)=>{setName(e.target.value)}}/>
          <Text mt={4}>Content:  </Text>
            <Textarea borderColor={"gray.400"} placeholder={"Content of your page  "} height={350} resize={'none'} value={content} onChange={(e)=>{setContent(e.target.value)}}/>
          <Flex mt={2} align={"center"} justifyContent={"center"} gap={2} direction={"row"} position={"relative"}>
            <Button colorScheme="blue" width={100} mb={4} type="submit" value="Submit">Submit</Button>
            {!preview &&
            <Button colorScheme="blue" width={120} mb={4} onClick={(e)=>{setPreview(true)}}>Show Preview</Button>
            }
            {preview &&
              <Button colorScheme="blue" width={120} mb={4} onClick={(e)=>{setPreview(false)}}>Hide Preview</Button>
            }
          </Flex>
        </Flex>
        </form>
      </Box>

      {preview &&
      <Box background={"gray.100"} rounded={6}>
        <Flex ml={6} mt={6} direction={"row"}>
          <HiOutlineDocumentText fontSize={42}/>
          <Heading ml={2}>Preview</Heading>
        </Flex>
        <Flex mx={6} width={550} height={500} direction={"column"} gap={2} mt={6} position={"relative"} >
          <Box mb={4} overflowY={"scroll"} sx={{
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
      </Box>
    }
    </Flex>

  );
}

export default Form;
