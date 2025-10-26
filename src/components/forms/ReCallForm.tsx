'use client';
import React from "react";
import { useActionState } from "react";
import { recallSchema, submitRecallForm } from "./recallFormAction";
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { useForm, FormProvider } from "react-hook-form";
import { Button, Checkbox, Input } from '@heroui/react'
import { Loader2Icon } from 'lucide-react'

type RecallFormData = {
  name: string;
  phone: string;
  agreement: boolean;
};

export function ReCallForm() {
  const [state, formAction] = useActionState(submitRecallForm, { status: "idle", errors: {} }) as any;

  // initialize react-hook-form so FormProvider has a valid context
  const form = useForm<recallSchema>({
    // cast to any to satisfy this workspace's type expectations
    defaultValues: {
      name: "",
      phone: "",
      agreement: false,
    } as any,
  } as any);

  return (
    // cast methods as any to avoid JSX prop typing issues with FormProvider
    // @ts-ignore - react-hook-form FormProvider requires useForm return props; casted above to any for this workspace
    <FormProvider {...form}>
      <form action={formAction} className="space-y-6" noValidate>
        <FormField
          control={form.control}
          name="name"
          defaultValue=""
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  label="Name"
                  id="recall-name"
                  {...field}
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
          )}
        />

        <FormField
          control={form.control}
          name="phone"
          defaultValue=""
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  label={"Phone"}
                  id="recall-phone"
                  {...field}
                  type="tel"
                  required
                  pattern="^(\\+375|80)(\\s?\(?\d{2}\)?\s?)[\d\s-]{7,}$"
                  aria-invalid={!!state.errors?.phone}
                  aria-describedby="recall-phone-error"
                  className="input"
                />
              </FormControl>
              <FormMessage id="recall-phone-error">
                {state.errors?.phone?.[0]}
              </FormMessage>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="agreement"
          defaultValue={false}
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Checkbox
                  id="recall-agreement"
                  name={field.name}
                  type="checkbox"
                  checked={!!field.value}
                  onChange={(e) => field.onChange(e.target.checked)}
                  required
                  aria-invalid={!!state.errors?.agreement}
                  aria-describedby="recall-agreement-error"
                  className="text-sm"
                >
                  <span className={'text-sm'}>I agree with the privacy policy</span>
                </Checkbox>
              </FormControl>
              <FormMessage id="recall-agreement-error">
                {state.errors?.agreement?.[0]}
              </FormMessage>
            </FormItem>
          )}
        />

        {state.errors?.form && (
          <div className="text-destructive">{state.errors.form[0]}</div>
        )}
        {state.status === 'success' && (
          <div className="text-success">Thank you! We will contact you soon.</div>
        )}
        <Button
          className={"w-full brand-gradient group rounded-large"}
          color="primary"
          type="submit"
          disabled={state.status === 'pending'}
          aria-busy={state.status === 'pending'}
          startContent={state.status === 'pending' ? <Loader2Icon className="mr-2 h-4 w-4 animate-spin" /> : undefined}
        >
          {state.status === 'pending' ? 'Отправка...' : 'Заказать звонок'}
        </Button>
      </form>
    </FormProvider>
  );
}


