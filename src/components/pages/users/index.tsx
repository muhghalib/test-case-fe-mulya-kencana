"use client";

import { UsersDataTable } from "./UsersDataTable";
import { User } from "@/types/data/user";

import { useFetch } from "@/hooks/use-fetch";

import { Box } from "@/components/atoms/Box";
import { Typography } from "@/components/atoms/Typography";

export const UsersPage = () => {
  const { data: users, isLoading: usersIsLoading } = useFetch(async signal => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users", {
      signal,
    });

    const data: User[] = await res.json();

    return data;
  });

  return (
    <>
      <Typography weight="600" as="h1" size="3xl">
        Users
      </Typography>
      {usersIsLoading ? (
        <Typography style={{ marginLeft: "auto", marginRight: "auto" }}>loading...</Typography>
      ) : (
        <UsersDataTable data={users || []} />
      )}
    </>
  );
};
