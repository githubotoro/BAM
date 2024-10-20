"use client";

import React from "react";
import { UseFormReturn } from "react-hook-form";
import { offerFormSchema } from "./offer-form";
import { z } from "zod";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

export const StakeValueSelector = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    offerForm: UseFormReturn<z.infer<typeof offerFormSchema>>;
  }
>(({ children, className, offerForm, ...props }, ref) => {
  return (
    <FormField
      control={offerForm.control}
      name="stakeValue"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Stake Value</FormLabel>
          <FormControl>
            <Input placeholder="Stake Value" {...field} />
          </FormControl>
          <FormDescription>
            This is the amount of tokens you want to stake.
          </FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
});
