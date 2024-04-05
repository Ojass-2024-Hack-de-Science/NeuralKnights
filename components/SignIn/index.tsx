"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import axios from "axios"
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import {signIn, signOut, useSession} from "next-auth/react"
import CardWarppper from "../CardWrppper";
const formSchema = z.object({
  email: z.string().email().min(3, {
    message: "Must be an Email",
  }),
  password: z.string().min(10, {
    message: "Password is not valid",
  }),
});

export function SignIn() {
  const router = useRouter();
  const session = useSession();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      console.log(values)
      await signIn("credentials",values)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    // <div className=" w-[100vw] h-[100vh] flex justify-center items-center flex-col">
    //   client -&gt; {JSON.stringify(session)}
    //   <div className="w-full text-center p-5 font-bold text-xl">SIGNIN</div>
    //   <Form {...form}>
    //     <form
    //       onSubmit={form.handleSubmit(onSubmit)}
    //       className="space-y-4 flex justify-center items-center flex-col"
    //     >
    //       <FormField
    //         control={form.control}
    //         name="email"
    //         render={({ field }) => (
    //           <FormItem>
    //             <FormLabel>Email</FormLabel>
    //             <FormControl>
    //               <Input placeholder="Enter Your Email" {...field} type="email" />
    //             </FormControl>
    //           </FormItem>
    //         )}
    //       />
    //       <FormField
    //         control={form.control}
    //         name="password"
    //         render={({ field }) => (
    //           <FormItem>
    //             <FormLabel>Password</FormLabel>
    //             <FormControl>
    //               <Input placeholder="Enter Your Password" {...field} type="password" />
    //             </FormControl>
    //           </FormItem>
    //         )}
    //       />
    //       <Button type="submit">SignUp</Button>
    //     </form>
    //   </Form>
    //   <div className=" flex gap-10">
    //     <Button onClick={()=>signIn("google")}>Google</Button>
    //     <Button onClick={()=>signOut()}>SignOut</Button>
    //   </div>
    // </div>
    <div className="w-[500px]">
      <CardWarppper
        title="Login"
        backButtonHref="/signup"
        backButtonTitle="Don't have an account?"
        social
      >
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div className=" space-y-3">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="email@gamil.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="********"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <Button
              className=" flex justify-center items-center w-[95%] font-bold"
              type="submit"
            >
              SignUp
            </Button>
          </form>
        </Form>
      </CardWarppper>
    </div>
  );
}
