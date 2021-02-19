import Link from "next/link"
import Navbar from '../components/navbar'
import Head from "../components/head"
import Button from '@material-ui/core/Button';


export default function Country ({covidData}) {
    return (
        <div>
            <Head/>
            <Navbar >
                <Link href="/">
                <Button color="inherit">Back</Button>
                </Link>
            </Navbar>
        </div>
    )
}

export const getServerSideProps = async (context)=>{
try{
    const res = await fetch(`
    https://disease.sh/v3/covid-19/countries/${context.params.country}?yesterday=true&twoDaysAgo=false&strict=false`)
    const data = await res.json();
    const covidData = [data]
    return{
        props:{
            covidData
        }
    }}
    catch(error){
        const covidData = [{message:"not exist"}]
        return {
            props:{
                covidData
            }
        }
    }
}

