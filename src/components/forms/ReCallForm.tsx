import React from "react";
import { useActionState } from "react";
import { recallSchema, submitRecallForm, RecallFormData } from "./recallFormAction";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "shadcn/ui";

export function ReCallForm() {
  const [state, formAction] = useActionState(submitRecallForm, { status: "idle", errors: {} });

  return (
    <Form action={formAction} className="space-y-6" noValidate>
      <FormField name="name">
        <FormItem>
          <FormLabel htmlFor="recall-name">Name</FormLabel>
          <FormControl>
            <input
              id="recall-name"
              name="name"
              type="text"
              required
              aria-invalid={!!state.errors?.name}
              aria-describedby="recall-name-error"
              className="input"
            />
          </FormControl>
          <FormMessage id="recall-name-error">
            {state.errors?.name?.[0]}
          </FormMessage>
        </FormItem>
      </FormField>
      <FormField name="phone">
        <FormItem>
          <FormLabel htmlFor="recall-phone">Phone</FormLabel>
          <FormControl>
            <input
              id="recall-phone"
              name="phone"
              type="tel"
              required
              pattern="^(\+375|80)(\s?\(?\d{2}\)?\s?)[\d\s-]{7,}$"
              aria-invalid={!!state.errors?.phone}
              aria-describedby="recall-phone-error"
              className="input"
            />
          </FormControl>
          <FormMessage id="recall-phone-error">
            {state.errors?.phone?.[0]}
          </FormMessage>
        </FormItem>
      </FormField>
      <FormField name="agreement">
        <FormItem>
          <FormControl>
            <input
              id="recall-agreement"
              name="agreement"
              type="checkbox"
              required
              aria-invalid={!!state.errors?.agreement}
              aria-describedby="recall-agreement-error"
              className="checkbox"
            />
            <FormLabel htmlFor="recall-agreement">
              I agree with the privacy policy
            </FormLabel>
          </FormControl>
          <FormMessage id="recall-agreement-error">
            {state.errors?.agreement?.[0]}
          </FormMessage>
        </FormItem>
      </FormField>
      {state.errors?.form && (
        <div className="text-destructive">{state.errors.form[0]}</div>
      )}
      {state.status === "success" && (
        <div className="text-success">Thank you! We will contact you soon.</div>
      )}
      <button
        type="submit"
        className="btn btn-primary"
        disabled={state.status === "pending"}
        aria-busy={state.status === "pending"}
      >
        {state.status === "pending" ? "Submitting..." : "Request Callback"}
      </button>
    </Form>
  );
}
