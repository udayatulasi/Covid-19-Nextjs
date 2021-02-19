import Link from "next/link"
import Navbar from '../components/navbar'
import Head from "../components/head"
import Button from '@material-ui/core/Button';
import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Grid } from '@material-ui/core';



const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);
  
  const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);

  const useStyles = makeStyles({
    table: {
      minWidth: 700,
    },
  });

export default function Country ({covidData}) {
    const classes = useStyles()
    return (
        <div>
            <Head/>
            <Navbar >
                <Link href="/">
                <Button color="inherit">Back</Button>
                </Link>
            </Navbar>
            <Grid  container justify="center" style={{marginTop:"2em"}}>
                <Grid item xs={5}>
            <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
      <TableBody>
       {covidData.map((row) => (
            <StyledTableRow key={row.row1}>
              <StyledTableCell component="th" scope="row">
                {row.row1}
              </StyledTableCell>
              <StyledTableCell align="center">{row.row2}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
          </Table>
          </TableContainer>
          </Grid>
          </Grid>

        </div>
    )
}

export const getServerSideProps = async (context)=>{
try{
    const res = await fetch(`
    https://disease.sh/v3/covid-19/countries/${context.params.country}?yesterday=true&twoDaysAgo=false&strict=false`)
    const data = await res.json();
    console.log(data)

    const covidData = [{
        row1:"Country",
        row2:data.country

    },
    {
        row1:"TotalCases",
        row2:data.cases

    },
    {
        row1:"TodayCases",
        row2:data.todayCases

    },
    {
        row1:"Total Deaths",
        row2:data.deaths

    },
    {
        row1:"Today Deaths",
        row2:data.todayDeaths

    },
    {
        row1:"Recovered",
        row2:data.recovered

    },
    {
        row1:"Today Recovered",
        row2:data.todayRecovered

    },{
        row1:"Active",
        row2:data.active

    },
    {
        row1:"Critical",
        row2:data.critical

    }
    ]
    return{
        props:{
            covidData
        }
    }}
    catch(error){
        const covidData = [{
            row1:"Country",
            row2:context.params.country
    
        },
        {
            row1:"TotalCases",
            row2:0
    
        },
        {
            row1:"TodayCases",
            row2:0
    
        },
        {
            row1:"Total Deaths",
            row2:0
    
        },
        {
            row1:"Today Deaths",
            row2:0
    
        },
        {
            row1:"Recovered",
            row2:0
    
        },
        {
            row1:"Today Recovered",
            row2:0
    
        },{
            row1:"Active",
            row2:0
    
        },
        {
            row1:"Critical",
            row2:0
    
        }
        ]
        return {
            props:{
                covidData
            }
        }
    }
}


// updated: 1613754721591,
// country: 'Afghanistan',
// countryInfo: {
//   _id: 4,
//   iso2: 'AF',
//   iso3: 'AFG',
//   lat: 33,
//   long: 65,
//   flag: 'https://disease.sh/assets/img/flags/af.png'
// },
// cases: 55575,
// todayCases: 18,
// deaths: 2430,
// todayDeaths: 0,
// recovered: 48798,
// todayRecovered: 172,
// active: 4347,
// critical: 1027,
// casesPerOneMillion: 1408,
// deathsPerOneMillion: 62,
// tests: 282121,
// testsPerOneMillion: 7146,
// population: 39480086,
// continent: 'Asia',
// oneCasePerPeople: 710,
// oneDeathPerPeople: 16247,
// oneTestPerPeople: 140,
// activePerOneMillion: 110.11,
// recoveredPerOneMillion: 1236.02,
// criticalPerOneMillion: 26.01
// }





// function createData(name, calories, fat, carbs, protein) {
//   return { name, calories, fat, carbs, protein };
// }

// const rows = [
//   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//   createData('Eclair', 262, 16.0, 24, 6.0),
//   createData('Cupcake', 305, 3.7, 67, 4.3),
//   createData('Gingerbread', 356, 16.0, 49, 3.9),
// ];



// export default function CustomizedTables() {
//   const classes = useStyles();

//   return (
//     <TableContainer component={Paper}>
//       <Table className={classes.table} aria-label="customized table">
      
//         <TableBody>
//           {rows.map((row) => (
//             <StyledTableRow key={row.name}>
//               <StyledTableCell component="th" scope="row">
//                 {row.name}
//               </StyledTableCell>
//               <StyledTableCell align="right">{row.calories}</StyledTableCell>
//               <StyledTableCell align="right">{row.fat}</StyledTableCell>
//               <StyledTableCell align="right">{row.carbs}</StyledTableCell>
//               <StyledTableCell align="right">{row.protein}</StyledTableCell>
//             </StyledTableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
//   );
// }
