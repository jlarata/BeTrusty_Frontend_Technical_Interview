const { db } = require('@vercel/postgres');
const {
  users,
  departamentos,
} = require('../app/lib/placeholder-data.js');
const bcrypt = require('bcrypt');

async function seedUsers(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS users (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email TEXT NOT NULL UNIQUE,
        avatar TEXT NOT NULL UNIQUE,
        password TEXT NOT NULL
      );
    `;

    console.log(`Created "users" table`);

    // Insert data into the "users" table
    const insertedUsers = await Promise.all(
      users.map(async (user) => {
        const hashedPassword = await bcrypt.hash(user.password, 10);
        return client.sql`
        INSERT INTO users (id, name, email, avatar, password)
        VALUES (${user.id}, ${user.name}, ${user.email}, ${user.avatar}, ${hashedPassword})
        ON CONFLICT (id) DO NOTHING;
      `;
      }),
    );

    console.log(`Seeded ${insertedUsers.length} users`);

    return {
      createTable,
      users: insertedUsers,
    };
  } catch (error) {
    console.error('Error seeding users:', error);
    throw error;
  }
}

async function seedDepartamentos(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    const createTable = await departamentos.sql`
    CREATE TABLE IF NOT EXISTS departamentos (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    owner_id: VARCHAR(255) NOT NULL,
    name VARCHAR(255) NOT NULL,
    type VARCHAR(255) NOT NULL,
    habs INT NOT NULL,
    wifi VARCHAR(255) NOT NULL,
    estacionamiento VARCHAR(255) NOT NULL,
    direccion VARCHAR(255) NOT NULL,
    descripcion VARCHAR(255) NOT NULL,
    precio INT NOT NULL,
    image01 VARCHAR(255) NOT NULL,
    image02 VARCHAR(255) NOT NULL,
    image03 VARCHAR(255) NOT NULL,
    image04 VARCHAR(255) NOT NULL,
  );
`;
    console.log(`Created "departamentos" table`);

    // Insert data into the "invoices" table
    const insertedDepartamentos = await Promise.all(
      departamentos.map(
        (departamento) => departamento.sql`
        INSERT INTO departamentos (id, owner_id, name, type, habs, wifi, estacionamiento, direccion, descripcion, precio, image01, image02, image03, image04)
        VALUES (${departamento.id}, ${departamento.owner_id}, ${departamento.name}, ${departamento.type}, ${departamento.habs}, ${departamento.wifi}, ${departamento.estacionamiento}, ${departamento.direccion}, ${departamento.descripcion}, ${departamento.precio}, ${departamento.image01}, ${departamento.image02}. ${departamento.image03}, ${departamento.image04})
        ON CONFLICT (id) DO NOTHING;
      `,
      ),
    );

    console.log(`Seeded ${insertedDepartamentos.length} departamentos`);

    return {
      createTable,
      departamentos: insertedDepartamentos,
    };
  } catch (error) {
    console.error('Error seeding departamentos:', error);
    throw error;
  }
}

async function main() {
  const client = await db.connect();

  await seedUsers(client);
  await seedDepartamentos(client);

  await client.end();
}

main().catch((err) => {
  console.error(
    'An error occurred while attempting to seed the database:',
    err,
  );
});
