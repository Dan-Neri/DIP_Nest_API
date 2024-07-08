export let HOST = window.location.hostname; 

if (HOST === 'localhost') {
    HOST = 'localhost:3000';
}