import { useState , useEffect } from 'react';
import { useRouter } from 'next/router';

import { Link, Input ,Box , Heading , Text , Button , IconButton , ButtonGroup , Spacer , Menu , MenuButton , Flex} from '@chakra-ui/react';
import { AddIcon , SearchIcon } from '@chakra-ui/icons';
import { HiOutlineHome } from "react-icons/hi";


const MenuBar = () =>{

  const router = useRouter();
  const [pagekey , setPageKey] = useState("");


  const handleSubmit=(e)=>{
    e.preventDefault();
    router.push(`/${pagekey}`);
  }

  return(
    <Box background={"gray.100"}>
      <Menu>
      <Flex minWidth='max-content' alignItems='center' gap={2}>
        <Box p={2}>
          <Heading size='lg'><Link color="blue.500" href="/">MarkPages</Link></Heading>
        </Box>
        <Spacer />
        <ButtonGroup gap={2} p={2}>
          <form onSubmit ={handleSubmit}>
          <Flex direction="row" gap={2}>
            <Input borderColor={"gray.400"} placeholder={"Search for pages"} type="text" value={pagekey} onChange={(e)=>{setPageKey(e.target.value)}}/>
            <IconButton fontSize='25px' icon={<SearchIcon/>} colorScheme="blue" type="submit" value="Submit"/>
          </Flex>
          </form>
        </ButtonGroup>
      </Flex>
      </Menu>
    </Box>
  );
}

export default MenuBar;
