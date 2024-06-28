CREATE POLICY "Only authenticated users can add transactions" ON "public"."transactions"
AS PERMISSIVE FOR INSERT
TO authenticated
WITH CHECK (true)


CREATE POLICY "Only owners can delete transactions" ON "public"."transactions"
AS PERMISSIVE FOR DELETE
TO authenticated
USING (user_id = auth.uid())


CREATE POLICY "Only the owners of transactions can read them" ON "public"."transactions"
AS PERMISSIVE FOR SELECT
TO authenticated
USING (user_id = auth.uid())


CREATE POLICY "Only owners can modify transactions" ON "public"."transactions"
AS PERMISSIVE FOR UPDATE
TO authenticated
USING (user_id = auth.uid())
WITH CHECK (user_id = auth.uid())