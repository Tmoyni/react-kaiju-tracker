// React
import React from 'react'
// Components
import EditKaijuForm from './EditKaijuForm'

class KaijuCard extends React.Component {
  state= {
    formVisible: false
  }
  // How can we show the edit form conditionally?
  
  handleClick = () => {
    this.setState( previousState => ({
        formVisible: !previousState.formVisible
      }))
  }

  render() {
    return (
      <div className='kaiju-card'>

        <h2 className='kaiju-card-name'>{this.props.kaiju.name}</h2>
        <h3 className='kaiju-card-power'>Power: {this.props.kaiju.power}</h3>

        <img className='kaiju-card-image' src={this.props.kaiju.image} alt={this.props.kaiju.name} />

        {/* What should this edit button do? */}
        <button className='kaiju-card-edit-button' onClick={ this.handleClick } >Edit</button>

        {this.state.formVisible ? < EditKaijuForm kaiju={this.props.kaiju} /> : "" }

      </div>
    )
  }
}

export default KaijuCard
