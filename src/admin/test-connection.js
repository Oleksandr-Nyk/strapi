// const { Client } = require('pg');
// const path = require('path');
// require('dotenv').config({
//   path: path.resolve(process.cwd(), '../..', '.env')
// });
// //
// // console.log('Environment Variables:');
// // console.log('DATABASE_CLIENT:', process.env.DATABASE_CLIENT);
// // console.log('DATABASE_HOST:', process.env.DATABASE_HOST);
// // console.log('DATABASE_PORT:', process.env.DATABASE_PORT);
// // console.log('DATABASE_NAME:', process.env.DATABASE_NAME);
// // console.log('DATABASE_USERNAME:', process.env.DATABASE_USERNAME);
// // console.log('DATABASE_PASSWORD:', process.env.DATABASE_PASSWORD ? '[HIDDEN]' : 'UNDEFINED');
// //
//
// // Your connection string
// const connectionString = `${process.env.DATABASE_CLIENT}://${process.env.DATABASE_USERNAME}:${process.env.DATABASE_PASSWORD}@${process.env.DATABASE_HOST}:${process.env.DATABASE_PORT}/${process.env.DATABASE_NAME}`;
//
// // console.log(connectionString);
//
// async function testDatabaseConnection() {
//   // Create a new client
//   const client = new Client({
//     connectionString,
//     ssl: {
//       rejectUnauthorized: false, // Use with caution in production
//     }
//   });
//
//   try {
//     // Attempt to connect
//     await client.connect();
//     console.log('✅ Connection successful!');
//
//     // Run a simple query to verify
//     const result = await client.query('SELECT NOW()');
//     console.log('Current database time:', result.rows[0].now);
//
//     // Optional: List tables (if you want to verify database access)
//     const tablesResult = await client.query(`
//       SELECT table_name
//       FROM information_schema.tables
//       WHERE table_schema = 'public'
//     `);
//     console.log('Tables in database:');
//     tablesResult.rows.forEach(row => {
//       console.log(row.table_name);
//     });
//
//   } catch (err) {
//     console.error('❌ Connection failed:', err.message);
//   } finally {
//     // Always close the connection
//     await client.end();
//   }
// }
//
// // Run the test
// testDatabaseConnection();