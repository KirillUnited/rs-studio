'use client';
import React from "react";
import { useActionState } from "react";
import { submitRecallForm } from "./recallFormAction";
import { recallSchema } from "./schemas";
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { useForm, FormProvider } from "react-hook-form";
import { addToast, Button, Checkbox, Input } from '@heroui/react'
import Link from 'next/link'

export function ReCallForm() {
  const [state, formAction, isPending] = useActionState(submitRecallForm, { status: "idle", errors: {} }) as any;

  // initialize react-hook-form so FormProvider has a valid context
  const form = useForm<recallSchema>({
    // cast to any to satisfy this workspace's type expectations
    defaultValues: {
      name: "",
      phone: "",
      agreement: false,
    } as any,
  } as any);

  // Add this effect to show toast and reset form on success
  React.useEffect(() => {
    if (state.status === 'success') {
      addToast({
        title: 'Успешно отправлено',
        description: 'Спасибо! Мы свяжемся с вами в ближайшее время.',
        color: 'success',
      });
      form.reset();
    }
  }, [state.status, form.reset]);

  const handleSubmit = async (formData: FormData) => {
    const result = await formAction(formData);
    console.log(result);
  };

  return (
    // cast methods as any to avoid JSX prop typing issues with FormProvider
    // @ts-ignore - react-hook-form FormProvider requires useForm return props; casted above to any for this workspace
    <FormProvider {...form}>
      <form action={handleSubmit} className="space-y-5" noValidate>
        {state.status === 'success' && (
          <div className="text-success">Спасибо! Мы свяжемся с вами в ближайшее время.</div>
        )}
        <FormField
          control={form.control}
          name="name"
          defaultValue=""
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  label="Имя"
                  id="recall-name"
                  type="text"
                  required
                  aria-invalid={!!state.errors?.name}
                  aria-describedby="recall-name-error"
                  placeholder={"Ваше имя"}
                  labelPlacement={"outside"}
                  radius={'lg'}
                  {...field}
                />
              </FormControl>
              <FormMessage className={'text-danger text-sm'} id="recall-name-error">
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
                  label={"Телефон"}
                  id="recall-phone"
                  type="tel"
                  required
                  pattern="^(\\+375|80)(\\s?\(?\d{2}\)?\s?)[\d\s-]{7,}$"
                  aria-invalid={!!state.errors?.phone}
                  aria-describedby="recall-phone-error"
                  placeholder={'+375 (XX) XXX-XX-XX'}
                  labelPlacement={"outside"}
                  radius={'lg'}
                  {...field}
                />
              </FormControl>
              <FormMessage className={'text-danger text-sm'} id="recall-phone-error">
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
                  radius={'lg'}
                  id="recall-agreement"
                  type="checkbox"
                  required
                  value={field.value}
                  aria-invalid={!!state.errors?.agreement}
                  aria-describedby="recall-agreement-error"
                  {...field}
                >
                  <span className={'text-sm'}>Согласие на <Link href={'/'}>обработку персональных данных</Link></span>
                </Checkbox>
              </FormControl>
              <FormMessage className={'text-danger text-sm'} id="recall-agreement-error">
                {state.errors?.agreement?.[0]}
              </FormMessage>
            </FormItem>
          )}
        />

        {state.errors?.form && (
          <div className="text-danger">{state.errors.form[0]}</div>
        )}
        <Button
          className={"w-full brand-gradient group"}
          color="primary"
          type="submit"
          isDisabled={isPending}
          isLoading={isPending}
          aria-busy={isPending}
          radius={'lg'}
        >
          {isPending ? 'Отправка...' : 'Заказать звонок'}
        </Button>
      </form>
    </FormProvider>
  );
}


