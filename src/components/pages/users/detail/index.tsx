import { notFound } from "next/navigation";

import { Header } from "./Header";
import { Information } from "./Information";
import { User } from "@/types/data/user";

import { Card, CardContent, CardHeader } from "@/components/atoms/Card";
import { Divider } from "@/components/layouts/main/Divider";

type Props = {
  params: Promise<{ id: string }>;
};

export const UserDetailPage = async ({ params }: Props) => {
  const { id } = await params;
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  if (!res.ok) notFound();
  const user: User = await res.json();
  if (!user) notFound();

  const { name, email, phone, username, address, website } = user;

  return (
    <>
      <Header name={name} username={username} />
      <Divider style={{ marginTop: "1.5rem", marginBottom: "1.5rem" }} />
      <Information email={email} phone={phone} address={address} website={website} />
    </>
  );
};
