import React from 'react'

class CreateKaijuForm extends React.Component {

  render() {
    return (
      <form id='create-kaiju-form' onSubmit={ (e) => this.props.handleSubmit(e) } >

        <label>Name: </label>
        <input value={this.props.createName} onChange={(e) => this.props.updateName(e.target.value)} type='text' placeholder="add your name here.." />

        <label>Power: </label>
        <input value={this.props.createPower} onChange={(e) => this.props.updatePower(e.target.value)} type='text' placeholder="add your power here..." />

        <label>Image: </label>
        <input value={this.props.createImage} onChange={(e) => this.props.updateImage(e.target.value)} type='text' placeholder="add your image url here..." />

        <br/>

        <input type='submit' value='List Kaiju'  />

      </form>
    )
  }
}

export default CreateKaijuForm
