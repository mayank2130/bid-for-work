"use client";
import { Button } from "@repo/ui/shadcn/button";
import { Input } from "@repo/ui/shadcn/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@repo/ui/shadcn/select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@repo/ui/shadcn/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { NewJob, newJobSchema } from "@repo/ui/zod/job";
import { useToast } from "@repo/ui/shadcn/use-toast";
import { createJob } from "../actions/job";
import { Textarea } from "@repo/ui/shadcn/textarea";

type NewJobFormProps = {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const NewJobForm = ({ setOpen }: NewJobFormProps) => {
  const { toast } = useToast();

  const form = useForm<NewJob>({
    resolver: zodResolver(newJobSchema),
    defaultValues: {
      title: "",
      description: "",
      companyName: "",
      salary: "",
      currency: "",
      location: "",
    },
  });

  const handleFormSubmit = async (values: NewJob) => {
    const { currency, location } = values;

    if (currency !== "USD" && currency !== "INR") {
      toast({
        title: "Please select the currency",
        variant: "destructive",
      });
      return;
    }

    if (
      location !== "REMOTE" &&
      location !== "HYBRID" &&
      location !== "OFFICE"
    ) {
      toast({
        title: "Please select the location",
        variant: "destructive",
      });
      return;
    }

    const response = await createJob(values);

    if (response?.status !== "success") {
      toast({
        title: response.message,
        variant: "destructive",
      });
      return;
    }

    toast({
      title: response.message,
      variant: "default",
    });
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleFormSubmit)}
        className="h-fit flex flex-col gap-3 p-4"
      >
        <div className="flex flex-col gap-1">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-semibold ">
                  Job Title *
                </FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    className="w-full border-gray-400"
                    placeholder="Job Title"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="flex flex-col gap-1">
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-semibold ">
                  Description *
                </FormLabel>
                <FormControl>
                  <Textarea
                    {...field}
                    className="w-full border-gray-400"
                    placeholder="Enter Job description here"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="flex flex-col gap-1">
          <FormField
            control={form.control}
            name="companyName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-semibold ">
                  Company Name *
                </FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    className="w-full border-gray-400"
                    placeholder="Enter comapany name here"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="flex flex-col gap-1">
          <label
            className="text-sm font-semibold "
            htmlFor="salary"
          >
            Salary *
          </label>
          <div className="flex justify-center items-center gap-2">
            <FormField
              control={form.control}
              name="currency"
              render={({ field }) => (
                <FormItem>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="w-24">
                        <SelectValue placeholder="select" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="USD">USD</SelectItem>
                      <SelectItem value="INR">INR</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="salary"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl>
                    <Input
                      {...field}
                      className="w-full border-gray-400"
                      placeholder="Estimate Salary"
                    />
                  </FormControl>
                  <FormMessage className="absolute" />
                </FormItem>
              )}
            />
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <FormField
            control={form.control}
            name="location"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-semibold ">
                  Location *
                </FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select location type" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="REMOTE">Remote</SelectItem>
                    <SelectItem value="HYBRID">Hybird</SelectItem>
                    <SelectItem value="OFFICE">Office</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="w-full flex justify-end items-center mt-4">
          <Button className="bg-gray-800 hover:bg-gray-700 text-white" type="submit">Create</Button>
        </div>
      </form>
    </Form>
  );
};

export default NewJobForm;
