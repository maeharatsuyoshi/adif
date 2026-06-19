"use client";

import { useActionState } from "react";
import { Field, FieldPair, FieldSet } from "../FormBits";
import SaveBar from "../SaveBar";
import { saveHero, type SectionFormState } from "../actions";
import type { HeroContent } from "../../../lib/siteContent";

export default function HeroForm({ initial }: { initial: HeroContent }) {
  const [state, formAction, pending] = useActionState<SectionFormState, FormData>(
    saveHero,
    undefined,
  );

  return (
    <form action={formAction} className="flex flex-col gap-6">
      <FieldSet title="Headline">
        <FieldPair>
          <Field
            id="headline_en"
            name="headline_en"
            label="Headline (EN)"
            defaultValue={initial.headline_en}
          />
          <Field
            id="headline_ja"
            name="headline_ja"
            label="Headline (JA)"
            defaultValue={initial.headline_ja}
          />
        </FieldPair>
      </FieldSet>

      <FieldSet title="Body">
        <p className="text-xs text-white/40">
          Separate paragraphs with a blank line. Single line breaks render as line
          breaks within a paragraph.
        </p>
        <FieldPair>
          <Field
            id="body_en"
            name="body_en"
            label="Body (EN)"
            defaultValue={initial.body_en}
            textarea
            rows={8}
          />
          <Field
            id="body_ja"
            name="body_ja"
            label="Body (JA)"
            defaultValue={initial.body_ja}
            textarea
            rows={8}
          />
        </FieldPair>
      </FieldSet>

      <FieldSet title="Buttons">
        <FieldPair>
          <Field
            id="our_story_label_en"
            name="our_story_label_en"
            label="Our Story button (EN)"
            defaultValue={initial.our_story_label_en}
          />
          <Field
            id="our_story_label_ja"
            name="our_story_label_ja"
            label="Our Story button (JA)"
            defaultValue={initial.our_story_label_ja}
          />
        </FieldPair>
        <FieldPair>
          <Field
            id="contact_label_en"
            name="contact_label_en"
            label="Contact button (EN)"
            defaultValue={initial.contact_label_en}
          />
          <Field
            id="contact_label_ja"
            name="contact_label_ja"
            label="Contact button (JA)"
            defaultValue={initial.contact_label_ja}
          />
        </FieldPair>
      </FieldSet>

      <FieldSet title="Background video">
        <Field
          id="video_url"
          name="video_url"
          label="Video URL (public path or full URL)"
          defaultValue={initial.video_url ?? ""}
          placeholder="/ADIF_website.mp4"
        />
      </FieldSet>

      <SaveBar pending={pending} state={state} />
    </form>
  );
}
