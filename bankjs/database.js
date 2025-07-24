const { Client } =require('pg');
const client = new Client({
    host: 'localhost',
    user: 'pgadmin',
    password: 'Rishi@5521',
    database: 'bankDB',
    port: 5432  
});
client.connect();

client.query('SELECT * FROM user_table', (err,res) => {
    if (!err) {
        console.error('Error executing query', res.rows);
    } else {
        console.log('Data from bank table:', err.message);
    }
    client.end();
});
    