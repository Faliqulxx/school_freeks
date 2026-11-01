-- ==============================================================================
-- FREEKS School Website Template - Supabase DDL & RLS Policies
-- ==============================================================================
-- Jalankan skrip ini di SQL Editor pada dashboard Supabase Anda.
-- ==============================================================================

-- 1. Tabel Pendaftaran PPDB (registrations)
CREATE TABLE IF NOT EXISTS public.registrations (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    registration_no VARCHAR(50) NOT NULL UNIQUE,
    full_name VARCHAR(255) NOT NULL,
    gender VARCHAR(20) NOT NULL,
    nisn VARCHAR(20) NOT NULL,
    birth_place VARCHAR(100),
    birth_date VARCHAR(50),
    parent_name VARCHAR(255) NOT NULL,
    phone VARCHAR(50) NOT NULL,
    email VARCHAR(255),
    address TEXT,
    previous_school VARCHAR(255),
    status VARCHAR(50) DEFAULT 'pending' NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Indeks untuk pencarian cepat
CREATE INDEX IF NOT EXISTS idx_registrations_no ON public.registrations(registration_no);
CREATE INDEX IF NOT EXISTS idx_registrations_status ON public.registrations(status);
CREATE INDEX IF NOT EXISTS idx_registrations_created_at ON public.registrations(created_at DESC);

-- Aktifkan Row Level Security (RLS)
ALTER TABLE public.registrations ENABLE ROW LEVEL SECURITY;

-- Kebijakan RLS: Publik / Calon Siswa (anon) hanya boleh INSERT data baru
CREATE POLICY "Public users can insert registrations"
ON public.registrations
FOR INSERT
TO anon, authenticated
WITH CHECK (true);

-- Kebijakan RLS: Hanya user terautentikasi (Admin Sekolah) yang boleh membaca (SELECT)
CREATE POLICY "Only authenticated users can view registrations"
ON public.registrations
FOR SELECT
TO authenticated
USING (true);

-- Kebijakan RLS: Hanya user terautentikasi yang boleh mengubah status (UPDATE)
CREATE POLICY "Only authenticated users can update registrations"
ON public.registrations
FOR UPDATE
TO authenticated
USING (true);


-- 2. Tabel Pesan Kontak (contact_messages)
CREATE TABLE IF NOT EXISTS public.contact_messages (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255),
    phone VARCHAR(50),
    subject VARCHAR(255) NOT NULL,
    message TEXT NOT NULL,
    status VARCHAR(50) DEFAULT 'unread' NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Indeks
CREATE INDEX IF NOT EXISTS idx_contact_messages_status ON public.contact_messages(status);
CREATE INDEX IF NOT EXISTS idx_contact_messages_created_at ON public.contact_messages(created_at DESC);

-- Aktifkan Row Level Security (RLS)
ALTER TABLE public.contact_messages ENABLE ROW LEVEL SECURITY;

-- Kebijakan RLS: Publik dapat mengirim pesan (INSERT)
CREATE POLICY "Public users can insert contact messages"
ON public.contact_messages
FOR INSERT
TO anon, authenticated
WITH CHECK (true);

-- Kebijakan RLS: Hanya Admin terautentikasi yang dapat membaca pesan
CREATE POLICY "Only authenticated users can view contact messages"
ON public.contact_messages
FOR SELECT
TO authenticated
USING (true);

-- Kebijakan RLS: Hanya Admin yang dapat memperbarui status pesan
CREATE POLICY "Only authenticated users can update contact messages"
ON public.contact_messages
FOR UPDATE
TO authenticated
USING (true);
