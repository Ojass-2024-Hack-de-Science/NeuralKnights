"use client";
import { blogZod } from "@aayushkumar11092002/medium-common";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import Link from "next/link";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useRouter } from "next/navigation";
import { useAnimate } from "framer-motion";
import { title } from "process";
const CreateNewBlog = () => {
  const [isPending, startTransition] = useTransition();
  const form = useForm<z.infer<typeof blogZod>>({
    resolver: zodResolver(blogZod),
    defaultValues: {
      title: "",
      content: "",
    },
  });
  const router = useRouter();
  async function onSubmit(values: z.infer<typeof blogZod>) {
    if (values.title === "" || values.content === "") return null;
    const data = await axios.post("http://localhost:3000/api/newBlog", {
      title: values.title,
      content: values.content,
    });
    router.push("/blog");
  }

  return (
    <div className=" flex flex-col p-28 min-h-[100vh] w-[100vw] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))]  from-blue-200 to-blue-400">
      <Link href={"/blog"}>
        <div className="absolute top-9 left-9  font-semibold text-xl flex justify-center items-center gap-2">
          <div>Back to Community Forum</div>
        </div>
      </Link>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <Button
            className=" absolute top-8 right-8"
            variant={"outline"}
            type="submit"
          >
            Publish
          </Button>
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormControl className=" flex gap-5 p-4">
                  <div className=" flex gap-1  items-center">
                    {/* <Button
                      className=" rounded-full text-2xl border-0"
                      variant={"outline"}
                      type="submit"
                    >
                      +
                    </Button> */}
                    <div className="h-[4vh] w-[.2vw] bg-gray-400"></div>
                    <Input
                      className="input pl-3 border-0 w-full text-4xl placeholder:text-gray-500 bg-slate-200 placeholder:tracking-wide placeholder:font-serif"
                      placeholder=" Title"
                      {...field}
                    />
                  </div>
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="content"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div>
                    <Textarea
                      className="textarea pl-7 border-0 text-2xl w-full h-[80vh] bg-slate-200 placeholder:text-gray-500 placeholder:tracking-wide placeholder:font-serif"
                      placeholder="Tell your story"
                      {...field}
                    />
                  </div>
                </FormControl>
              </FormItem>
            )}
          />
        </form>
      </Form>
    </div>
  );
};

export default CreateNewBlog;
