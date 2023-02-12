-- create provider enum type
CREATE TYPE "provider" AS ENUM ('GOOGLE', 'FACEBOOK');

-- create user identity table with composite key (userId, provider)
CREATE TABLE IF NOT EXISTS federated_identity (
    "userId" uuid NOT NULL,
    "provider" provider NOT NULL,
    "providerId" varchar(255) NOT NULL,
    "createdAt" timestamp with time zone default CURRENT_TIMESTAMP not null,
    PRIMARY KEY ("userId", provider)
);

-- add foreign key constraint to user table
ALTER TABLE federated_identity
    ADD CONSTRAINT federated_identity_userId_fkey
    FOREIGN KEY ("userId")
    REFERENCES "user"(id);
