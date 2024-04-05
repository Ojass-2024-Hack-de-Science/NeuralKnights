import React from "react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import Header from "./Header";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { signIn } from "next-auth/react";
interface CardWrapperProps {
  children: React.ReactNode;
  title: string;
  backButtonHref: string;
  backButtonTitle: string;
  social?: true | false;
}

const CardWarppper = ({
  children,
  title,
  backButtonHref,
  backButtonTitle,
  social,
}: CardWrapperProps) => {
  const onClick = (provider: string) => {
    signIn(provider, { callbackUrl: "/dashboard" });
  };
  return (
    <Card>
      <CardHeader>
        <Header>{title}</Header>
      </CardHeader>
      <CardContent className=" space-y-4">
        {children}
        <>
          {social && (
            <div className="space-x-4 flex justify-center items-center">
              <Button
                onClick={() => onClick("google")}
                className="w-[40%] bg-slate-300"
              >
                <FcGoogle size="18" />
              </Button>
              <Button
                onClick={() => onClick("github")}
                className="w-[40%] bg-slate-300 group"
              >
                <FaGithub
                  size="18"
                  className={" text-black group-hover:text-white"}
                />
              </Button>
            </div>
          )}
        </>
      </CardContent>
      <CardFooter className="flex justify-center items-center">
        <Link href={backButtonHref}>
          <Button variant={"link"}>{backButtonTitle}</Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default CardWarppper;
