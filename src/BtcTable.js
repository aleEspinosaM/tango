import React, { Component } from 'react';
import moment from 'moment';
import Fecha from './Fecha'

class BtcTable extends Component {
    
    constructor(props) {
        super(props);
        this.renderData = this.renderData.bind(this);
    }

    renderData() {

        return this.props.value.map((data) => {
            return (
                // console.log(data.data.BTC.USD)
                <tr key={data.fecha}>
                    <Fecha date={data} />
                    <td>$ {data.data.BTC.USD}</td>                  
                    <td>$ {data.data.BTC.EUR}</td>                  
                </tr>
            )
        })

    }
    
    render() {
        return (
            <div className="col-sm-5">
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>TIME</th>
                            <th>USD</th>
                            <th>EUR</th>
                        </tr>
                    </thead>
                    <tbody>
                            {this.renderData()}
                    </tbody>
                </table>  
            </div>
        );
    }
}

export default BtcTable;