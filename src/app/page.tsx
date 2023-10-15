"use client";
import { useForm } from "react-hook-form";

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

export default function Home() {
  const form = useForm<{
    name: string;
    email: string;
  }>();
  return (
    <div className="h-12 w-[200px] p-8 gap-2 flex flex-col">
      <Form {...form}>
        <FormField
          name="name"
          control={form.control}
          render={({ field }) => {
            return (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl />
                <Input placeholder="shadcn" {...field} />
                <FormDescription />
                <FormMessage />
              </FormItem>
            );
          }}
        />
      </Form>
    </div>
  );
}
