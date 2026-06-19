-- Site content tables — hero, our_story, contact sections (bilingual EN/JA).
-- Run this once in the Supabase SQL editor (Project → SQL → New query → paste → Run).
-- Depends on 001_team_members.sql for set_updated_at() and pgcrypto.

create extension if not exists "pgcrypto";

-- Singleton tables: a single editable row keyed by id = 1.
-- Using a check constraint forces the table to ever hold only one row.

-- HERO ---------------------------------------------------------------------
create table if not exists public.hero_content (
  id smallint primary key default 1,
  headline_en text not null default '',
  headline_ja text not null default '',
  body_en text not null default '',
  body_ja text not null default '',
  our_story_label_en text not null default 'Our Story',
  our_story_label_ja text not null default 'Our Story',
  contact_label_en text not null default 'Contact Us',
  contact_label_ja text not null default 'Contact Us',
  video_url text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint hero_content_singleton check (id = 1)
);

drop trigger if exists hero_content_set_updated_at on public.hero_content;
create trigger hero_content_set_updated_at
  before update on public.hero_content
  for each row execute function public.set_updated_at();

-- OUR STORY ----------------------------------------------------------------
create table if not exists public.our_story_content (
  id smallint primary key default 1,
  heading_en text not null default 'Our Story',
  heading_ja text not null default 'Our Story',
  closing_en text not null default '',
  closing_ja text not null default '',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint our_story_content_singleton check (id = 1)
);

drop trigger if exists our_story_content_set_updated_at on public.our_story_content;
create trigger our_story_content_set_updated_at
  before update on public.our_story_content
  for each row execute function public.set_updated_at();

-- Our story paragraphs — many rows, ordered.
create table if not exists public.our_story_paragraphs (
  id uuid primary key default gen_random_uuid(),
  sort_order integer not null default 0,
  variant text not null default 'default' check (variant in ('default', 'emphasis', 'quote')),
  text_en text not null default '',
  text_ja text not null default '',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists our_story_paragraphs_sort_idx
  on public.our_story_paragraphs (sort_order, created_at);

drop trigger if exists our_story_paragraphs_set_updated_at on public.our_story_paragraphs;
create trigger our_story_paragraphs_set_updated_at
  before update on public.our_story_paragraphs
  for each row execute function public.set_updated_at();

-- CONTACT ------------------------------------------------------------------
-- Closing lines and location lines are stored as newline-separated text for editing ease.
create table if not exists public.contact_content (
  id smallint primary key default 1,
  heading_en text not null default 'Contact Us',
  heading_ja text not null default 'Contact Us',
  email text not null default '',
  company_name_label_en text not null default 'Company Name',
  company_name_label_ja text not null default '会社名',
  company_name_value_en text not null default '',
  company_name_value_ja text not null default '',
  representative_label_en text not null default 'Representative Member',
  representative_label_ja text not null default '代表社員',
  representative_value_en text not null default '',
  representative_value_ja text not null default '',
  incorporation_label_en text not null default 'Date of Incorporation',
  incorporation_label_ja text not null default '会社設立日',
  incorporation_value_en text not null default '',
  incorporation_value_ja text not null default '',
  location_label_en text not null default 'Location',
  location_label_ja text not null default '所在地',
  location_value_en text not null default '',
  location_value_ja text not null default '',
  copyright_en text not null default '',
  copyright_ja text not null default '',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint contact_content_singleton check (id = 1)
);

drop trigger if exists contact_content_set_updated_at on public.contact_content;
create trigger contact_content_set_updated_at
  before update on public.contact_content
  for each row execute function public.set_updated_at();

-- RLS: public read, authenticated write -----------------------------------
alter table public.hero_content enable row level security;
alter table public.our_story_content enable row level security;
alter table public.our_story_paragraphs enable row level security;
alter table public.contact_content enable row level security;

drop policy if exists "hero_content read" on public.hero_content;
create policy "hero_content read" on public.hero_content for select
  to anon, authenticated using (true);
drop policy if exists "hero_content write" on public.hero_content;
create policy "hero_content write" on public.hero_content for all
  to authenticated using (true) with check (true);

drop policy if exists "our_story_content read" on public.our_story_content;
create policy "our_story_content read" on public.our_story_content for select
  to anon, authenticated using (true);
drop policy if exists "our_story_content write" on public.our_story_content;
create policy "our_story_content write" on public.our_story_content for all
  to authenticated using (true) with check (true);

drop policy if exists "our_story_paragraphs read" on public.our_story_paragraphs;
create policy "our_story_paragraphs read" on public.our_story_paragraphs for select
  to anon, authenticated using (true);
drop policy if exists "our_story_paragraphs write" on public.our_story_paragraphs;
create policy "our_story_paragraphs write" on public.our_story_paragraphs for all
  to authenticated using (true) with check (true);

drop policy if exists "contact_content read" on public.contact_content;
create policy "contact_content read" on public.contact_content for select
  to anon, authenticated using (true);
drop policy if exists "contact_content write" on public.contact_content;
create policy "contact_content write" on public.contact_content for all
  to authenticated using (true) with check (true);
