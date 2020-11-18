import React from "react"
import "./component.css"

class App extends React.Component{
    constructor()
    {
        super()//eslint-disable-next-line
        {
            this.state={
                logged_in:true
            }
        }
    }
    render(){
        let word
        if(this.state.logged_in)
        word=""
        else word="not"
        return(
            <div className="genericDiv">
                <h2>Hello, you are {word} welcome to enter.</h2>
            </div>
        )
    }
}export default App