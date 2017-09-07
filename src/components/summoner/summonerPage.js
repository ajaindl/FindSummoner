"use strict";

var React = require('react');
var Router = require('react-router');
var Link = require('react-router').Link;
var SummonerActions = require('../../actions/summonerActions');
var SummonerStore = require('../../stores/summonerStore');
var SummonerList = require('./summonerList');


var Summoners = React.createClass({
    getInitialState: function () {
        return {
            summoners: SummonerStore.getSummoners()
        };
    },
    
    componentWillMount: function() {
        SummonerStore.addChangeListener(this._onChange);
    },
    
    componentWillUnmount: function() {
        SummonerStore.removeChangeListener(this._onChange);
    },
    _onChange: function() {
        this.setState({ summoners: SummonerStore.getSummoners() });
    },
    
    render: function () {
        return (
            <div>
            <h1>Summoners</h1>    
         <SummonerList summoners={this.state.summoners} />
        </div>
        );
  }
});
        
module.exports= Summoners;