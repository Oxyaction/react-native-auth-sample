-- create postgres table user with uuid as primary key
CREATE TABLE IF NOT EXISTS "user" (
    "id" uuid PRIMARY KEY,
    "name" varchar(255),
    "email" varchar(255) not null,
    "password" text,
    "createdAt" timestamp with time zone default CURRENT_TIMESTAMP not null
);
