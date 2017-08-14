import React, { Component } from 'react';
import BtcTable from './BtcTable';
import moment from 'moment'
import EthTable from './EthTable';
const btc = []
const date = []

class Tables extends Component {
    constructor(props) {
        super(props);
        this.state = {
            err: null,
            dataArray: [],
            dateArray: []
        }
        this.sendData = this.sendData.bind(this);
    }
    

    componentDidMount() {
        this.interval = setInterval(() => {
            const _this = this
            fetch('https://min-api.cryptocompare.com/data/pricemulti?fsyms=ETH,BTC&tsyms=USD,EUR')
                .then(res => res.json())
                .then(data => this.sendData(data))
                .catch(err => _this.setState({ err }))
        },3000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }



sendData(data){
    btc.push({ data, fecha: moment().format('MMMM Do YYYY, h:mm:ss')})
    this.setState({ dataArray: btc, dateArray: date});
}



    render() {
        // console.log(this.state.dataArray)
        return (
            <div>
                <BtcTable value={this.state.dataArray}/>
                <EthTable value={this.state.dataArray}/>
            </div>
        );
    }
}

export default Tables;