import React, { Component } from 'react'
import axios from 'axios'
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

     
    return (

          <div className='bg-secondary'>
            <div className='row'>
              <div className='col-lg-6  col-sm-0'></div>
                <div className="input-group col-lg-6 col-sm-12 mb-3">
                  <input type="text" className="form-control" placeholder="search here" aria-label="Recipient's username" aria-describedby="basic-addon2"></input>
                  <div className="input-group-append">
                    <button className="btn btn-info btn-outline-secondary" type="button">Search</button>
                  </div>
                </div>
            </div>
            <div className='row m-0'>
             
            {tableData.map((val, index) => ( 
              <div class="col-sm-12 col-lg-3">
                  <div className='card my-2 border-0 bg-light'>
                  <img class="card-img-top" src={val.links.mission_patch} alt="Card cap"></img>
                  <div className='card-body bg-danger'>
                  <div className='card-title  p-2'> <h4>Rocket Name:{val.rocket.rocket_name}</h4></div>
                  <ul className='list-group'>
                      <li className='list-group-item'>Mission Name:{val.mission_name}</li>
                      <li className='list-group-item'>Launch Date:{val.launch_date_utc}</li>
                      <li className='list-group-item'>Launch Year:{val.launch_year}</li>
                      <li className='list-group-item' >Launch Status:{JSON.stringify(val.launch_success)}</li>
                      <li className='list-group-item'>Is Upcoming:{JSON.stringify(val.upcoming)}</li>
                      { val.upcoming && ( <li className='list-group-item'> Last Update date:{val.last_date_update}</li>)}
                      
                  </ul>
                          </div>
                  </div>
              </div>
                ))}
            </div> 
          </div>
    )
  }
}