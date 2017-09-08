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
        this.setState({dirty: true});
        var field = event.target.name;
        var value= event.target.value;
        this.state.name = value;
        return this.setState({summoner: this.state.summoner});
    },
    
    formIsValid: function(){
        console.log(this.state.name);
        if(this.state.name.length>0){
            return true;
        }
        else{
            return false;
        }
        
    },
    
    findSummoner: function(event) {
        event.preventDefault();
        
        if(!this.formIsValid()){
            return;
        }
        else    {
        SummonerActions.FindSummoner(this.state.name);
        }
        this.setState({dirty: false});
        toastr.success('Summoner search.');
        
    },
    render: function () {
        console.log(this.props);
        return (
            <SummonerForm 
            summoner={this.state.name}
            onChange= {this.setSummonerState}
            onSave={this.findSummoner} 
            errors={this.state.errors} />
        );
        console.log(this.props);
    }
});

module.exports = ManageSummonerPage;