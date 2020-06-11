import React from "react"
import Header from "./Header"
import Button from "./Button"
import { TextField } from "./Input"


interface Dash {
    projectName: string;
    projects: Array<any>
   // returnJSX: (id: number, message: string, ping: string) => JSX.Element;


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
    returnJSX = (id: number, message: string) => {
        return <div><h1>{id}, {message} </h1></div>
    }
    render() {

        return (<div>
            <Header />
            <TextField text={this.state.value} handleChange={this.handleChange} returnJSX={this.returnJSX} />

            <input value={this.state.value} onChange={this.handleChange} />
            <Button onClick={this.handleSubmit} text="add new button" />
            <li>
                {this.state.list}
            </li>
           


        </div>)
    }

}