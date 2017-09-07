"use strict";

//This file is mocking a web API by hitting hard coded data.
var authors = require('./authorData').authors;
var summoners = require('./summonerData').summoners;
var _ = require('lodash');
var RiotHttp = require('./http');

var key = "?api_key=RGAPI-264061FA-E612-49F0-9849-46539856EBBC";

var summonerString = "v1.4/summoner/by-name/";

//This would be performed on the server in a real app. Just stubbing in.
var _generateId = function(author) {
	return author.firstName.toLowerCase() + '-' + author.lastName.toLowerCase();
};

var _clone = function(item) {
	return JSON.parse(JSON.stringify(item)); //return cloned copy so that the item is passed by value instead of by reference
};
var AuthorApi = {
	getAllAuthors: function() {
		return _clone(authors); 
	},

	getAuthorById: function(id) {
		var author = _.find(authors, {id: id});
		return _clone(author);
	},
    saveSummoner: function(summoner) {
        summoners.push(summoner);
        return _clone(summoner);
    },
	
	saveAuthor: function(author) {
        debugger;
		//pretend an ajax call to web api is made here
		console.log('Pretend this just saved the author to the DB via AJAX call...');
		
		if (author.id) {
			var existingAuthorIndex = _.indexOf(authors, _.find(authors, {id: author.id})); 
			authors.splice(existingAuthorIndex, 1, author);
		} else {
			//Just simulating creation here.
			//The server would generate ids for new authors in a real app.
			//Cloning so copy returned is passed by value rather than by reference.
			author.id = _generateId(author);
			authors.push(author);
		}

		return _clone(author);
	},

	deleteAuthor: function(id) {
		console.log('Pretend this just deleted the author from the DB via an AJAX call...');
		_.remove(authors, { id: id});
	},
    
    getSummoner: function (name) {
        var Riot=RiotHttp.GetRiotApi(summonerString+name+key);
        return summoners;
        
    }
};

module.exports = AuthorApi;