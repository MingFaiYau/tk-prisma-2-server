# Migration `20200607161754-init`

This migration has been generated by dingyau at 6/7/2020, 4:17:54 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
CREATE TABLE "theratalk_prisma_2"."Post" (
"authorId" integer   ,"content" text   ,"id" SERIAL,"published" boolean  NOT NULL DEFAULT false,"title" text  NOT NULL ,
    PRIMARY KEY ("id"))

CREATE TABLE "theratalk_prisma_2"."User" (
"email" text  NOT NULL ,"id" SERIAL,"name" text   ,"password" text  NOT NULL DEFAULT E'',
    PRIMARY KEY ("id"))

CREATE UNIQUE INDEX "User.email" ON "theratalk_prisma_2"."User"("email")

ALTER TABLE "theratalk_prisma_2"."Post" ADD FOREIGN KEY ("authorId")REFERENCES "theratalk_prisma_2"."User"("id") ON DELETE SET NULL  ON UPDATE CASCADE
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration ..20200607161754-init
--- datamodel.dml
+++ datamodel.dml
@@ -1,0 +1,28 @@
+// This is your Prisma schema file,
+// learn more about it in the docs: https://pris.ly/d/prisma-schema
+
+datasource db {
+  provider = "postgresql"
+  url      = env("DATABASE_URL")
+}
+
+generator client {
+  provider = "prisma-client-js"
+}
+
+model Post {
+  id        Int     @default(autoincrement()) @id
+  title     String
+  content   String?
+  published Boolean @default(false)
+  author    User?   @relation(fields: [authorId], references: [id])
+  authorId  Int?
+}
+
+model User {
+  id       Int     @default(autoincrement()) @id
+  email    String  @unique
+  password String  @default("")
+  name     String?
+  posts    Post[]
+}
```


