import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class ModelListComponent extends Component {  

    constructor(props) {
        super(props)

        this.handleDelete = this.handleDelete.bind(this)
    }

    handleDelete(makerId, modelId) {
        debugger
        this.props.handleModelDelete(makerId, modelId)
    }

    render() {
        const listItems = 
            this.props.models.length > 0 ?
            this.props.models.map((model) => {
                debugger
                return <div className="panel panel-default">
                    <div className="panel-body">
                        <div className="output-box bg-info">
                            <div className="row">
                                <div className="col-xs-6">
                                    <h4 className='name'>{model.name}</h4>
                                </div>
                            <div className="col-xs-6">
                                {localStorage.getItem("userIsAdmin") ?
                                    <button className="btn btn-danger pull-right"
                                        onClick={() => this.handleDelete(this.props.makerId, model._id)}>
                                        Remove
                                    </button>
                                : ''}
                            </div>
                            </div>
                        </div>
                    </div>
            </div>})
            :<div>Nothing to display</div>

        return (
            <div className="outputs">
                <div className="small-panel">
                    {listItems}
                </div>
            </div>
        )
    }
}