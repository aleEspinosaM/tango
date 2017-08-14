import React, { Component } from 'react';
import moment from 'moment';
import Fecha from './Fecha'

class EthTable extends Component {

    constructor(props) {
        super(props);
        this.renderData = this.renderData.bind(this);
    }

    renderData() {

        return this.props.value.map((data) => {
            return (
                // console.log("eth",a = data.data.ETH.USD,"btc",b= data.data.BTC.USD)
                <tr key={data.fecha}>
                    <Fecha date={data} />
                    <td>$ {data.data.ETH.EUR}</td>
                    <td>$ {data.data.ETH.EUR}</td>
                    <td>{(data.data.ETH.USD / data.data.BTC.USD).toFixed(4) }</td>
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
                            <th>BTC</th>
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

export default EthTable;