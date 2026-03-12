"use client";
import { useTranslations } from "@providers/translationProvider";

export const Profile = ({ user }: { user: string }) => {
  const member = useTranslations();

  return <div>{member[user]?.name}</div>;
};
