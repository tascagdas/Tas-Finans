CREATE POLICY "Authenticated users can upload an avatar 1oj01fe_0" ON storage.objects FOR INSERT TO authenticated WITH CHECK (bucket_id = 'avatars');

CREATE POLICY "Authenticated users can see avatars 1oj01fe_0" ON storage.objects FOR SELECT TO authenticated USING (bucket_id = 'avatars');

CREATE POLICY "Owners can update or delete avatars 1oj01fe_0" ON storage.objects FOR UPDATE TO authenticated USING (bucket_id = 'avatars' and auth.uid()::text = owner_id);

CREATE POLICY "Owners can update or delete avatars 1oj01fe_1" ON storage.objects FOR DELETE TO authenticated USING (bucket_id = 'avatars' and auth.uid()::text = owner_id);