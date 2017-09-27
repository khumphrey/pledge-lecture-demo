//this does not work because you cannot return from async callback
var person = setTimeout(function(){
	return {first_name:'kate', last_name: 'humphrey'}
}, 0);
// var person = setTimeout(function(){ return {first_name:'kate', last_name: 'humphrey'} }, 0);















//this might work depending on timing <-- race condition
var person
setTimeout(function(){
	person = {first_name:'kate', last_name: 'humphrey'}
}, 0);

// setTimeout(function(){ person = {first_name:'kate', last_name: 'humphrey'} }, 0);
// var person3; setTimeout(function(){ person3 = {first_name:'kate', last_name: 'humphrey'} }, 999999999);
// console.log(person2)











