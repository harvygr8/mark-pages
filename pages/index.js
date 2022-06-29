import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Form from '../components/Form'
import MenuBar from '../components/MenuBar'
import { Flex, Heading } from '@chakra-ui/react'

export default function Home() {

  return (
    <>
      <MenuBar/>
      <Flex height={"94vh"} alignItems={"center"} justifyContent={"center"} background={"gray.300"}>
          <Form/>
      </Flex>
    </>
  );
}
