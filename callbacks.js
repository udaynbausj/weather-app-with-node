const request = require('request');
const yargs = require('yargs');
const geocode = require('./geocode');

var argv = yargs.argv;


geocode.geocodeAddress(argv.title);