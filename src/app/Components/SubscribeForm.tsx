'use client'

import { z } from "zod"

import { useForm } from "react-hook-form"
import { FormField, FormItem,  FormControl,FormMessage, Form } from "./FormComponents"
import { Input } from "./Input"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "./Button"

export const SubscribeForm:React.FC = () => {
    
    const formSchema = z.object({
    email: z.string().email().trim().toLowerCase().nonempty(),
    })

    const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  })

function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }

    return(
        <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
                <div className="flex gap-6 flex-col">
              <FormControl>
                <Input className="text-center" placeholder="Enter your email" {...field} />
              </FormControl>
              <Button type="submit" className="bg-[#7F56D9]">Subscribe</Button>
                </div>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
    )
}