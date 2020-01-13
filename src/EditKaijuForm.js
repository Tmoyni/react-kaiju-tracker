import React from 'react'

class EditKaijuForm extends React.Component {

  render() {
    console.log(this.props)

    
    return (
      <>
        <form className='kaiju-card-edit-form'>

          <label>Name: </label>
          <input type='text' />
          <br/>

          <label>Power: </label>
          <input type='text' />
          <br/>

          <label>Image URL: </label>
          <input type='text' />
          <br/>

          <input type="submit" value="Save Changes" />

        </form>
      </>
    )
  }
}

export default EditKaijuForm
