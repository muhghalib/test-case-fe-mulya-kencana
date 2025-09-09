"use client";

import { useState } from "react";

import { Form } from "./Form";
import { FormField } from "./FormField";
import { SubmittedCard } from "./SubmittedCard";

import { Box } from "@/components/atoms/Box";
import { Typography } from "@/components/atoms/Typography";

export const FormPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [submittedData, setSubmittedData] = useState<typeof formData | null>(null);

  const handleOnSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    setSubmittedData(formData);
  };

  const handleOnFieldChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <>
      <Typography as="h1" size="3xl" weight="600">
        Register Form
      </Typography>
      <Form onSubmit={handleOnSubmit}>
        <FormField
          id="name"
          label="Nama:"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleOnFieldChange}
        />
        <FormField
          id="email"
          label="Email:"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleOnFieldChange}
        />
        <FormField
          id="password"
          label="Password:"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleOnFieldChange}
        />
        <button
          type="submit"
          style={{
            padding: "10px",
            cursor: "pointer",
            backgroundColor: "var(--primary)",
            color: "var(--primary-foreground)",
            fontSize: "var(--font-size-md)",
            fontWeight: 600,
            borderRadius: "6px",
            border: "none",
          }}
        >
          Daftar
        </button>
      </Form>

      {submittedData && <SubmittedCard data={submittedData} />}
    </>
  );
};
