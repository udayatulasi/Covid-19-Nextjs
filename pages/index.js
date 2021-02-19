import Navbar from "../components/navbar"
import Head from "../components/head"
import Card from "../components/card"
import {Grid} from  "@material-ui/core"
export default function Home({data}) {
  return (
    <>
      
      <Head/>

      <main>
        <Grid container spacing={4}>
        <Navbar />
        {data.map((country)=>{
          return <Card country={country}/>
        })}
        </Grid>
      </main>
 
    </>
  )
}

export const getStaticProps =  async ()=>{
  const res =  await fetch("https://restcountries.eu/rest/v2/all")

  const countries = await res.json();

  const data = countries.map((country)=>{
    let requriedData = { }
    requriedData.name = country.name;
    if(country.flag)
    requriedData.flag = country.flag
return requriedData
  })

  return {
    props:{
    data
    }
  }
}

