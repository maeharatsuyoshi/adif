"use client";

import { useActionState } from "react";
import { Field, FieldPair, FieldSet } from "../FormBits";
import SaveBar from "../SaveBar";
import { saveOurStory, type SectionFormState } from "../actions";
import type { OurStoryContent } from "../../../lib/siteContent";

export default function OurStoryHeadingForm({
  initial,
}: {
  initial: OurStoryContent;
}) {
  const [state, formAction, pending] = useActionState<SectionFormState, FormData>(
    saveOurStory,
    undefined,
  );

  return (
    <form action={formAction} className="flex flex-col gap-6">
      <FieldSet title="Heading">
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
      </FieldSet>

      <FieldSet title="Closing lines">
        <p className="text-xs text-white/40">
          Large stylized text at the bottom. One line per visual line.
        </p>
        <FieldPair>
          <Field
            id="closing_en"
            name="closing_en"
            label="Closing (EN)"
            defaultValue={initial.closing_en}
            textarea
            rows={4}
          />
          <Field
            id="closing_ja"
            name="closing_ja"
            label="Closing (JA)"
            defaultValue={initial.closing_ja}
            textarea
            rows={4}
          />
        </FieldPair>
      </FieldSet>

      <SaveBar pending={pending} state={state} />
    </form>
  );
}
