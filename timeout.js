function invokeDelay(callback) {
    setTimeout(callback, 2000);
}
function afterMessage(){
    console.log('Remember to breath!');
}
invokeDelay(afterMessage);