"use strict";

var React = require('react');
var Router = require('react-router');
var SummonerForm = require('./summonerForm');
var SummonerActions = require('../../actions/summonerActions');
var SummonerStore = require('../../stores/summonerStore');
var toastr = require('toastr');

var ManageSummonerPage = React.createClass({
    mixins: [
        Router.Navigation
    ],
    
    getInitialState: function(){
        return {
            summoners: {},
            errors: {},
            dirty:false,
            name: ''
        };
    },
    
    componentWillMount: function() {
      var summonerName=this.props.params.name;
        
        if (summonerName) {
            this.setState({summoner: SummonerStore.getSummoners()});
        }
    },
    setSummonerState: function(event) {
        debugger;
        this.setState({dirty: true});
        var field = event.target.name;
        var value= event.target.value;
        this.state.name = value;
        return this.setState({summoner: this.state.summoner});
    },
    
    findSummoner: function(event) {
        debugger;
        event.preventDefault();
        
        if(!this.authorFormIsValid()){
            return;
        }
        else    {
            debugger;
        SummonerActions.FindSummoner(this.state.name);
        }
        debugger;
        this.setState({dirty: false});
        toastr.success('Summoner search.');
        
    },
    render: function () {
        console.log(this.setSummonerState);
        debugger;
        return (
            <SummonerForm 
            summoner={this.state.name}
            onChange= {this.setSummonerState.bind(this)}
            onSave={this.findSummoner} 
            errors={this.state.errors} />
        );
        console.log(this.props);
    }
});

module.exports = ManageSummonerPage;