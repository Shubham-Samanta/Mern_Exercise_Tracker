import React from "react"
import axios from "axios"
class CreateUser extends React.Component
{
     constructor(props)
     {
          super(props)
           
          this.onchangeUsername = this.onchangeUsername.bind(this)
          this.onSubmit = this.onSubmit.bind(this)
          
          this.state = {
               username: ''
          }
     }
     onchangeUsername(e)
     {
          this.setState({
               username:e.target.value
          })
     }
     onSubmit(e) {
          e.preventDefault()

          const User = {
               username: this.state.username   
          }
          console.log(User)

          axios.post("http://localhost:5000/users/add", User)
               .then((res) => { console.log(res.data) })
               .catch((err) => { console.log(err); }
          )
          this.setState({username:""})
          }
     render()
     {
          return (
               <div>
                    <h3>User Form</h3>
                    <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                              <label>Username:</label>
                              <input
                                   type="text"
                                   value={ this.state.username}
                                   onChange={this.onchangeUsername}
                                   className="form-control"
                              />
                         </div>
                         <div className="form-group">
                              <input className="btn btn-primary" value="create new exercise" type="submit"/>
                         </div>
                    
                    </form>
               </div>
          )
     }
}
export default CreateUser