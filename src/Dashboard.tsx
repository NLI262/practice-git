import React from "react"
import Header from "./Header"
import Button from "./Button"
import { TextField } from "./Input"


interface Dash {
    projectName: string;
    projects: Array<any>
}
let detail = {
    firstName: "harsha",
    lastName: "Vishnuvajhala"
}
interface StateforDashboard {
    value: string,
    list: Array<string>
}

export default class Dashboard extends React.Component<Dash, StateforDashboard>{
    constructor(props: any) {
        super(props)
        this.state = {
            value: "",
            list: []
        }
    }
    handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        this.setState({ value: e.target.value })
    }
    handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        this.setState({
            value: "",
            list: [...this.state.list, this.state.value]
        })

    }
    render() {

        return (<div>
            <Header />
            <TextField text={this.state.value} handleChange={this.handleChange}/>
            <input value={this.state.value} onChange={this.handleChange} />
            <Button onClick={this.handleSubmit} text="add new button" />
            <li>
                {this.state.list}
                {console.log(this.state.list)}
            </li>

        </div>)
    }

}