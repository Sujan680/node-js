// created different functions and exported that as object 

function Sum(a,b) {
    return(a+b);
}

function Sub(a,b) {
    return(a-b);
}

// here for exporting the multiple Function we used objects 
module.exports = {
    Sum, Sub
};

// this is the methods of exporting multiple anonymous function
exports.Sum = (a,b) => a+b;
exports.Sub = (a,b) => a-b;
