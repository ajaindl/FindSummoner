"use strict";
var summoners = require('./summonerData').summoners;
var $ = require("jquery");
var riotUrl = "https://na.api.riotgames.com/api/lol/NA/";


var RiotHttpRequest = {
 
    
    GetRiotApi: function (targetString) {
        $.ajax({
            url: riotUrl+targetString,
            type: 'GET',
            dataType: 'json',
            data: {},
            async: false,
            success: function(data){
                summoners.push(data);
            }
            
        });
    }
};

module.exports= RiotHttpRequest;