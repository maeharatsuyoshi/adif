// One-off script: creates the admin user in Supabase Auth using the service-role key.
// Run with:  node scripts/create-admin.mjs
// Safe to run multiple times — if the user already exists, it just reports that.

import { createClient } from "@supabase/supabase-js";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const envPath = join(__dirname, "..", ".env");

for (const line of readFileSync(envPath, "utf8").split(/\r?\n/)) {
  const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*)\s*$/);
  if (m && !process.env[m[1]]) process.env[m[1]] = m[2];
}

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!url || !serviceKey) {
  console.error("Missing NEXT_PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY in .env");
  process.exit(1);
}

const ADMIN_EMAIL = "admin@adif.capital";
const ADMIN_PASSWORD = "ADIF@098$!";

const supabase = createClient(url, serviceKey, {
  auth: { autoRefreshToken: false, persistSession: false },
});

const { data, error } = await supabase.auth.admin.createUser({
  email: ADMIN_EMAIL,
  password: ADMIN_PASSWORD,
  email_confirm: true,
  user_metadata: { role: "admin" },
});

if (error) {
  if (/already/i.test(error.message) || error.code === "email_exists") {
    console.log(`Admin user already exists: ${ADMIN_EMAIL}`);
    process.exit(0);
  }
  console.error("Failed to create admin:", error.message);
  process.exit(1);
}

console.log(`Created admin user: ${data.user?.email} (id: ${data.user?.id})`);
