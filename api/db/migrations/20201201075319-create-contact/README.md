# Migration `20201201075319-create-contact`

This migration has been generated at 12/1/2020, 12:53:19 AM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
CREATE TABLE "Post" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "body" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
)

CREATE TABLE "Contact" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
)
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20201201041910-migration..20201201075319-create-contact
--- datamodel.dml
+++ datamodel.dml
@@ -1,9 +1,9 @@
 datasource DS {
   // optionally set multiple providers
   // example: provider = ["sqlite", "postgresql"]
   provider = "sqlite"
-  url = "***"
+  url = "***"
 }
 generator client {
   provider      = "prisma-client-js"
@@ -18,4 +18,12 @@
   title     String
   body      String
   createdAt DateTime @default(now())
 }
+
+model Contact {
+  id        Int      @id @default(autoincrement())
+  name      String
+  email     String
+  message   String
+  createdAt DateTime @default(now())
+}
```


