var connection = require("./connection.js");

// Object Relational Mapper (ORM)

var orm = {
    selectAll: function(tableInput, callback) {
		var queryString = 'SELECT * FROM ' + tableInput + ';';
		connection.query(queryString, function(error, result) {
			if (error) throw error;
			// send the query result back to the callback function
			callback(result);
		});
	},
// insertOne function for inserting one burger into table
insertOne: function(table, cols, vals, cb) {
    var queryString = 'INSERT INTO ' + table;

    queryString += ' (';
    queryString += cols.toString();
    queryString += ') ';
    queryString += 'VALUES (';
    // queryString += vals[0] + ' , ' + vals[1];
    queryString += printQuestionMarks(vals.length);
    queryString += ') ';

    console.log(queryString);
    console.log(vals);

    connection.query(queryString, vals, function(error, result) {
        if (error) throw error;
        // send the query result back to the callback function
        callback(result);
    });
},

// update one function for changing a burger status
updateOne: function(table, objColVals, condition, cb) {
    var queryString = 'UPDATE ' + table;

    queryString += ' SET ';
    queryString += objToSql(objColVals);
    queryString += ' WHERE ';
    queryString += condition;

    console.log(queryString);

    connection.query(queryString, function(error, result) {
        if (error) throw error;
        // send the query result back to the callback function
        callback(result);
    });
}
};

// export the orm back to the model burger.js
module.exports = orm;