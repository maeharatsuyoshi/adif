-- Team members table — bilingual (EN/JA) fields, plus ordering and photo URL.
-- Run this once in the Supabase SQL editor (Project → SQL → New query → paste → Run).

create extension if not exists "pgcrypto";

create table if not exists public.team_members (
  id uuid primary key default gen_random_uuid(),
  sort_order integer not null default 0,
  photo_url text,
  name_en text not null,
  name_ja text not null,
  role_en text not null,
  role_ja text not null,
  bio_en text not null,
  bio_ja text not null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists team_members_sort_idx
  on public.team_members (sort_order, created_at);

-- keep updated_at fresh
create or replace function public.set_updated_at()
returns trigger language plpgsql as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists team_members_set_updated_at on public.team_members;
create trigger team_members_set_updated_at
  before update on public.team_members
  for each row execute function public.set_updated_at();

-- RLS: public read, authenticated write.
alter table public.team_members enable row level security;

drop policy if exists "team_members read" on public.team_members;
create policy "team_members read"
  on public.team_members for select
  to anon, authenticated
  using (true);

drop policy if exists "team_members write" on public.team_members;
create policy "team_members write"
  on public.team_members for all
  to authenticated
  using (true)
  with check (true);

-- Storage bucket for member photos (public-readable).
insert into storage.buckets (id, name, public)
values ('team-photos', 'team-photos', true)
on conflict (id) do nothing;

drop policy if exists "team-photos read" on storage.objects;
create policy "team-photos read"
  on storage.objects for select
  to anon, authenticated
  using (bucket_id = 'team-photos');

drop policy if exists "team-photos write" on storage.objects;
create policy "team-photos write"
  on storage.objects for all
  to authenticated
  using (bucket_id = 'team-photos')
  with check (bucket_id = 'team-photos');
