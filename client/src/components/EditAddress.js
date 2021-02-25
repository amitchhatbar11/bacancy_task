import React, { Component } from 'react'
import { address } from './UserFunctions'
import jwt_decode from 'jwt-decode'

class EditAddress extends Component {
    constructor() {
        super()
        this.state = {
            address:''
        }

        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    componentDidMount () {
        const token = localStorage.usertoken
        const decoded = jwt_decode(token)
        this.setState({
            user_id:decoded.id
        })
    }

    onChange (e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit (e) {
        e.preventDefault()

        const add = {
            address: this.state.address,
            user_id:this.state.user_id
        }

        address(add).then(res => {
            this.props.history.push(`/profile`)
        })
    }

    render () {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6 mt-5 mx-auto">
                        <form noValidate onSubmit={this.onSubmit}>
                            <h1 className="h3 mb-3 font-weight-normal">Add Address</h1>
                            <div className="form-group">
                                <label htmlFor="address">Address</label>
                                <input type="text"
                                    className="form-control"
                                    name="address"
                                    placeholder="Enter Your Address"
                                    value={this.state.address}
                                    onChange={this.onChange}
                                />
                            </div>
                            <button type="submit"
                                className="btn btn-lg btn-primary btn-block">
                                Add
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default EditAddress