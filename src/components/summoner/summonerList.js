"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var SummonerActions = require('../../actions/summonerActions');
var toastr = require('toastr');

var SummonerList = React.createClass({

    render: function () {
        console.log(this.props.summoners);
        var createSummoner = function (summoner) {
            console.log(summoner);
            return (
                <tr key={summoner.slapstrap.id}>
                <td>{summoner.slapstrap.summonerLevel}</td>
                <td>{summoner.slapstrap.name}</td>
                </tr>
            );
        };
        return (
        <div>
            
           <table className="table">
            <thead>
            <th>ID</th>
            <th>Name</th>
            </thead>
            <tbody>
                {this.props.summoners.map(createSummoner, this)}
            </tbody>
        </table>
        </div>
        );
  }
});
        
module.exports= SummonerList;