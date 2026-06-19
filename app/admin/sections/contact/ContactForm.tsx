"use client";

import { useActionState } from "react";
import { Field, FieldPair, FieldSet } from "../FormBits";
import SaveBar from "../SaveBar";
import { saveContact, type SectionFormState } from "../actions";
import type { ContactContent } from "../../../lib/siteContent";

export default function ContactForm({ initial }: { initial: ContactContent }) {
  const [state, formAction, pending] = useActionState<SectionFormState, FormData>(
    saveContact,
    undefined,
  );

  return (
    <form action={formAction} className="flex flex-col gap-6">
      <FieldSet title="Heading & email">
        <FieldPair>
          <Field
            id="heading_en"
            name="heading_en"
            label="Heading (EN)"
            defaultValue={initial.heading_en}
          />
          <Field
            id="heading_ja"
            name="heading_ja"
            label="Heading (JA)"
            defaultValue={initial.heading_ja}
          />
        </FieldPair>
        <Field
          id="email"
          name="email"
          label="Contact email"
          defaultValue={initial.email}
          type="email"
        />
      </FieldSet>

      <FieldSet title="Company name">
        <FieldPair>
          <Field
            id="company_name_label_en"
            name="company_name_label_en"
            label="Label (EN)"
            defaultValue={initial.company_name_label_en}
          />
          <Field
            id="company_name_label_ja"
            name="company_name_label_ja"
            label="Label (JA)"
            defaultValue={initial.company_name_label_ja}
          />
        </FieldPair>
        <FieldPair>
          <Field
            id="company_name_value_en"
            name="company_name_value_en"
            label="Value (EN)"
            defaultValue={initial.company_name_value_en}
          />
          <Field
            id="company_name_value_ja"
            name="company_name_value_ja"
            label="Value (JA)"
            defaultValue={initial.company_name_value_ja}
          />
        </FieldPair>
      </FieldSet>

      <FieldSet title="Representative">
        <FieldPair>
          <Field
            id="representative_label_en"
            name="representative_label_en"
            label="Label (EN)"
            defaultValue={initial.representative_label_en}
          />
          <Field
            id="representative_label_ja"
            name="representative_label_ja"
            label="Label (JA)"
            defaultValue={initial.representative_label_ja}
          />
        </FieldPair>
        <FieldPair>
          <Field
            id="representative_value_en"
            name="representative_value_en"
            label="Value (EN)"
            defaultValue={initial.representative_value_en}
          />
          <Field
            id="representative_value_ja"
            name="representative_value_ja"
            label="Value (JA)"
            defaultValue={initial.representative_value_ja}
          />
        </FieldPair>
      </FieldSet>

      <FieldSet title="Date of incorporation">
        <FieldPair>
          <Field
            id="incorporation_label_en"
            name="incorporation_label_en"
            label="Label (EN)"
            defaultValue={initial.incorporation_label_en}
          />
          <Field
            id="incorporation_label_ja"
            name="incorporation_label_ja"
            label="Label (JA)"
            defaultValue={initial.incorporation_label_ja}
          />
        </FieldPair>
        <FieldPair>
          <Field
            id="incorporation_value_en"
            name="incorporation_value_en"
            label="Value (EN)"
            defaultValue={initial.incorporation_value_en}
          />
          <Field
            id="incorporation_value_ja"
            name="incorporation_value_ja"
            label="Value (JA)"
            defaultValue={initial.incorporation_value_ja}
          />
        </FieldPair>
      </FieldSet>

      <FieldSet title="Location">
        <FieldPair>
          <Field
            id="location_label_en"
            name="location_label_en"
            label="Label (EN)"
            defaultValue={initial.location_label_en}
          />
          <Field
            id="location_label_ja"
            name="location_label_ja"
            label="Label (JA)"
            defaultValue={initial.location_label_ja}
          />
        </FieldPair>
        <p className="text-xs text-white/40">One address line per row.</p>
        <FieldPair>
          <Field
            id="location_value_en"
            name="location_value_en"
            label="Value (EN)"
            defaultValue={initial.location_value_en}
            textarea
            rows={4}
          />
          <Field
            id="location_value_ja"
            name="location_value_ja"
            label="Value (JA)"
            defaultValue={initial.location_value_ja}
            textarea
            rows={4}
          />
        </FieldPair>
      </FieldSet>

      <FieldSet title="Footer copyright">
        <FieldPair>
          <Field
            id="copyright_en"
            name="copyright_en"
            label="Copyright (EN)"
            defaultValue={initial.copyright_en}
          />
          <Field
            id="copyright_ja"
            name="copyright_ja"
            label="Copyright (JA)"
            defaultValue={initial.copyright_ja}
          />
        </FieldPair>
      </FieldSet>

      <SaveBar pending={pending} state={state} />
    </form>
  );
}
