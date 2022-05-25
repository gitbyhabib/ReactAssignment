import React, { Component } from 'react'
import axios, { Axios } from 'axios'
import ReactTable from 'react-table-6'

import "react-table-6/react-table.css"
/* import "react-table.css" */
export default class Card extends Component {
    constructor(){
        super()
        this.state={
            mydata:[]
            
        }
    }

    componentDidMount(){
        axios.get('https://api.spacexdata.com/v3/launches')
        .then(response=>{
            console.log(response.data)
            this.setState({mydata:response.data})
        })
        .catch(error=>{
            console.log(error)
        })
    }

  render() {
     const tableData=this.state.mydata
     const col= [{Header:"Flight Number",accessor:"flight_number"},{Header:"Mission Name",accessor:"mission_name"}, {Header:"Mission Id",accessor:"mission_id"},  {Header:"launch year",accessor:"launch_year"},{Header:"Upcoming",accessor:"upcoming"} ,{Header:"Launch date Local",accessor:"launch_date_local"}]
    return (

        

        <div>
   


      <ReactTable
        data={tableData}
        columns={col}
        defaultPageSize={20}
        pageSizeOptions={[5,10,20,30,40,50]}
      
      />
      </div>
    )
  }
}
