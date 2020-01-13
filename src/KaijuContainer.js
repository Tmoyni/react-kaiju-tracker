//React
import React from 'react'
// Components
import KaijuCard from './KaijuCard'
import CreateKaijuForm from './CreateKaijuForm'
import TickerContainer from './TickerContainer'
//Fetch Requests
import * as requests from './requests'
// Read the README for how to fetch

class KaijuContainer extends React.Component {

  state = {
    kaijus: [],
    createName: "",
    createPower: "",
    createImage: ""
  }
  
  componentDidMount() {
    requests.fetchKaijus()
   .then(allKaijus => {
     this.setState({ 
       kaijus: allKaijus
      })
   })
  }

  updateName = (newName) => {
    this.setState({
      createName: newName
    })
  }

  updatePower = (newPower) => {
    this.setState({
      createPower: newPower
    })
  }

  updateImage = (newImage) => {
    this.setState({
      createImage: newImage
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    fetch('http://localhost:4000/kaijus/', {
      method: 'POST',
      headers: {"Content-Type": "application/json" },
      body: JSON.stringify ({
        name: `${this.state.createName}`,
        power: `${this.state.createPower}`,
        image: `${this.state.createImage}`
      })
    }).then( () => requests.fetchKaijus()
      .then(allKaijus => {
        this.setState({ 
          kaijus: allKaijus
         })
      })
    ).then(this.setState({ 
         
      
      createName: "",
      createPower: "",
      createImage: ""
    }))
  }


  render() {

    let kaijusArray = this.state.kaijus.map(kaijuObj => 
      <KaijuCard kaiju={kaijuObj} key={kaijuObj.id}/> )

     return (
      <>

        <CreateKaijuForm 
            createName={this.state.createName} 
            createPower={this.state.createPower} 
            createImage={this.state.createImage}
            updateName={this.updateName}
            updatePower={this.updatePower}
            updateImage={this.updateImage}
            handleSubmit={this.handleSubmit}
        />

        <div id='kaiju-container'>

          {kaijusArray}

        </div>


        {/* Just pass kaijus to TickerContainer and it'll create a news ticker at the bottom */}
        <TickerContainer kaijus={this.state.kaijus} />
        {/* You won't have to modify TickerContainer but it's a fun preview for some other react features */}

      </>
    )

  }
}

export default KaijuContainer
