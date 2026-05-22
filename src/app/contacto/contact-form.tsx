"use client";

import { useActionState } from "react";

import {
  submitContactForm,
  type ContactFormState,
} from "@/app/contacto/actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

const initialState: ContactFormState = { status: "idle" };

function FieldError({ message }: { message?: string }) {
  if (!message) {
    return null;
  }

  return (
    <p className="text-xs text-destructive" role="alert">
      {message}
    </p>
  );
}

export function ContactForm() {
  const [state, formAction, pending] = useActionState(
    submitContactForm,
    initialState
  );

  const isSuccess = state.status === "success";

  return (
    <form action={formAction} className="space-y-4" noValidate>
      <input
        type="text"
        name="_gotcha"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden
      />

      {isSuccess ? (
        <div
          className="rounded-lg border border-ethos-gold/30 bg-ethos-gold/10 px-4 py-3 text-sm text-ethos-white"
          role="status"
        >
          {state.message}
        </div>
      ) : null}

      {state.status === "error" && state.message ? (
        <div
          className="rounded-lg border border-destructive/40 bg-destructive/10 px-4 py-3 text-sm text-ethos-white"
          role="alert"
        >
          {state.message}
        </div>
      ) : null}

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm text-ethos-muted">
            Nombre completo
          </label>
          <Input
            id="name"
            name="name"
            required
            disabled={pending || isSuccess}
            placeholder="Su nombre"
            aria-invalid={Boolean(state.fieldErrors?.name)}
            className={cn(state.fieldErrors?.name && "border-destructive")}
          />
          <FieldError message={state.fieldErrors?.name} />
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm text-ethos-muted">
            Correo electrónico
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            disabled={pending || isSuccess}
            placeholder="correo@institucion.mx"
            aria-invalid={Boolean(state.fieldErrors?.email)}
            className={cn(state.fieldErrors?.email && "border-destructive")}
          />
          <FieldError message={state.fieldErrors?.email} />
        </div>
      </div>
      <div className="space-y-2">
        <label htmlFor="company" className="text-sm text-ethos-muted">
          Institución / Organización
        </label>
        <Input
          id="company"
          name="company"
          disabled={pending || isSuccess}
          placeholder="Opcional"
          aria-invalid={Boolean(state.fieldErrors?.company)}
          className={cn(state.fieldErrors?.company && "border-destructive")}
        />
        <FieldError message={state.fieldErrors?.company} />
      </div>
      <div className="space-y-2">
        <label htmlFor="message" className="text-sm text-ethos-muted">
          Mensaje
        </label>
        <Textarea
          id="message"
          name="message"
          required
          rows={5}
          disabled={pending || isSuccess}
          placeholder="Describa brevemente su contexto y objetivos."
          aria-invalid={Boolean(state.fieldErrors?.message)}
          className={cn(state.fieldErrors?.message && "border-destructive")}
        />
        <FieldError message={state.fieldErrors?.message} />
      </div>
      <Button
        type="submit"
        size="lg"
        className="w-full"
        disabled={pending || isSuccess}
      >
        {pending
          ? "Enviando..."
          : isSuccess
            ? "Solicitud enviada"
            : "Enviar solicitud"}
      </Button>
      <p className="text-center text-xs text-ethos-muted">
        {isSuccess
          ? "Gracias por contactarnos. Toda la información se trata de forma confidencial."
          : "Responderemos en menos de 24 horas hábiles. Toda la información se trata de forma confidencial."}
      </p>
    </form>
  );
}
