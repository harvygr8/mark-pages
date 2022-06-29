import MenuBar from '../components/MenuBar';
import TextBox from '../components/TextBox';

export const getServerSideProps = async({query:{pagekey}}) =>{
  const res = await fetch(`http://localhost:3000/api/pages/?pagekey=${pagekey}`,{
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      'User-Agent': '*',
    }
  });
  const data = await res.json();
  return {
    props:{detail:data}
  }
}


const PageDetails = ({detail}) =>{
  console.log(detail);
  if(detail.data){
    return(
      <>
        <MenuBar/>
        <TextBox heading={detail.data.heading} content={detail.data.content}/>
      </>
    )
  }
  else{
    return(
      <h1> Could Not find any matching user list! </h1>
    )
  }
}


export default PageDetails;
