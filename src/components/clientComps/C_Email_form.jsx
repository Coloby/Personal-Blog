"use client"
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/shadcn-ui/ui/form";
import { Textarea } from "@/components/shadcn-ui/ui/textarea"
import {
  Dialog,
  DialogContent
} from "@/components/shadcn-ui/ui/dialog"
import { Input } from "@/components/shadcn-ui/ui/input";
import { useState } from "react";
import Btn from "@/components/logic/Btn"
import { useToast } from "@/components/shadcn-ui/ui/use-toast"
import { scrollbar } from "@/lib/tailwind-scrollbar/settings";

const C_Email_form = ({WEB3FORM_ACCESS_KEY}) => {
  const formSchema = z.object({
    email: z.string()
      .min(1, { message: ": required." })
      .min(4, { message: ": minimum 4 chars." })
      .regex(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, { message: ': needs to be valid.' })
      .email({ message: ': needs to be valid.' })
      .max(80, { message: ": maximum 80 chars." }),
    name: z.string()
      .min(1, { message: ": required." })
      .min(2, { message: ": too short." })
      .max(50, { message: ": maximum 50 chars" }),
    subject: z.string()
      .min(1, { message: ": required." })
      .min(3, { message: ": minimum 3 chars." })
      .max(80, { message: ": maximum 80 chars." }),
    message: z.string()
      .min(1, { message: ": required." })
      .min(20, { message: ": minimum 20 chars." })
      .max(6000, { message: ": maximum 6000 chars." }),
  });

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      name: "",
      subject: "",
      message: "",
    },
  });

  const [isOpen, setIsOpen] = useState(false)
  const [result, setResult] = useState("");

  const { toast } = useToast()

  const onSubmit = async (_formData, e) => {
    setResult(
      <div className="h-10 w-12 relative">
        <div className="rounded-md h-12 w-12 border-4 border-t-4 border-rose-600 absolute animate-bounce"></div>
      </div>
    );

    const formData = new FormData(e.target);
    formData.append("access_key", WEB3FORM_ACCESS_KEY);
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });
    const data = await response.json();
    
    if (data.success) {
      setResult(<div className="py-2 animate-pulse">🎉 Form submitted successfully! YAY 🎉</div>)
      toast({
        description: "🎉 Form submitted successfully! YAY 🎉",
      })
      setTimeout(() => {
        setResult(`Submit`)
      }, 4000);
      setResult(`Form submitted 🎉 We will reply to you as soon as possible.`)
    } else {
      toast({
        description: "⛔ There was an error with your request ⛔",
      })
      setResult(data.message);
    }
  };

  return (
    <>
      <div className="flexy !flex-col sm:gap-4 relative ">
        <div className="relative overflow-visible">
          <div className="absolute left-[-105px] sm:block hidden top-[-70px] text-rose-600"><svg width="105" height="111" viewBox="0 0 105 111" fill="none" xmlns="http://www.w3.org/2000/svg"><g filter="url(#filter0_d_935_1458)" className="overflow-visible"><path  className="overflow-visible" d="M48.2887 97.9525L78.4811 92.9258L71.5283 63.118" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/><path  className="overflow-visible" d="M78.4824 92.9241L48.7663 73.0992C28.251 59.4125 22.0254 32.7226 34.8606 13.4836L37.1845 10.0001" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></g><defs><filter id="filter0_d_935_1458" x="18.6807" y="0.5" width="69.3018" height="106.953" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB"><feFlood floodOpacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset/><feGaussianBlur stdDeviation="4"/><feComposite in2="hardAlpha" operator="out"/><feColorMatrix type="matrix" values="0 0 0 0 0.976471 0 0 0 0 0.121569 0 0 0 0 0.356863 0 0 0 1 0"/><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_935_1458"/><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_935_1458" result="shape"/></filter></defs></svg></div>
          <h2 className="text-center flexy sl:gap-4 !flex-col">
            <span className="flexy">
              <Btn 
                classBorder={"!top-[10px] !right-[-10px]"} 
                onClick={() => setIsOpen(true)}
                classContainer={"!mr-0 lg:ml-[10px] lg:mr-[25px] text-xl xs:text-[38px] font-black leading-[71px] tracking-widest"} 
              >
                <div className="flexy w-full">E-mail me</div>
              </Btn>
            </span>
            <span className="text-xl xs:text-[30px] font-extrabold mt-6 tracking-widest">or Contact me</span>
          </h2>
        </div>
        <h2 className="text-center text-xl xs:text-[30px] font-black tracking-widest">Where I'm most active</h2>
      </div>
      <Dialog open={isOpen} onOpenChange={() => setIsOpen()} >
        <DialogContent className="flex items-center flex-col overflow-scroll pt-4">
          <div className="relative h-1 w-full">
            <h2 className="text-xl !w-fit absolute left-0 right-0 m-auto top-[16px] text-primary_text_color z-[1000] ">E-mail me!</h2>
          </div>
          <div className="max-w-[400px] w-full relative flexy !flex-col">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-12 py-6 w-full sm:w-auto text-primary_text_color" action="https://api.web3forms.com/submit" method="POST">
                <input type="hidden" name="access_key" value={WEB3FORM_ACCESS_KEY} />
                <div className="sm:flexy gap-8">
                  {/* email */}
                  <FormField
                    control={form.control}
                    name="email"
                    className={` w-full peer placeholder-transparent formInputElem ${true  ? "ring-2 ring-red-400" : null}`}
                    render={({ field }) => (
                      <FormItem className="relative w-full !mt-5 sm:!mt-0">
                        <FormControl><Input autoComplete={"email"} className={`${form.formState.errors?.email ? "ring-2 ring-red-400" : null} w-full peer placeholder-transparent formInputElem`} placeholder="Email" type="email" {...field} /></FormControl>
                        <FormLabel className={`formLabel ${form.formState.errors.email ? "flex w-full text-red-400" : "peer-focus:text-rose-500 text-gray-200 peer-placeholder-shown:text-gray-400"} `}>E-mail<FormMessage className="formTextError" /></FormLabel>
                      </FormItem>
                    )}
                  />
                  {/* name */}
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem className="relative w-full mt-12 sm:mt-0">
                        <FormControl><Input autoComplete={"name"} className={`${form.formState.errors?.name ? "ring-2 ring-red-400" : null} w-full peer placeholder-transparent formInputElem`} placeholder="Name" type="text"  {...field} /></FormControl>
                        <FormLabel className={`formLabel ${form.formState.errors.name ? "flex w-full text-red-400" : "peer-focus:text-rose-500 text-gray-200 peer-placeholder-shown:text-gray-400"} `}>Name<FormMessage className="formTextError" /></FormLabel>
                      </FormItem>
                    )}
                  />
                </div>
                {/* subject */}
                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem className="relative w-full">
                      <FormControl><Input className={`${form.formState.errors?.subject ? "ring-2 ring-red-400" : null} w-full peer placeholder-transparent formInputElem`} placeholder="Subject" type="text"  {...field} /></FormControl>
                      <FormLabel className={`formLabel ${form.formState.errors.subject ? "flex w-full text-red-400" : "peer-focus:text-rose-500 text-gray-200 peer-placeholder-shown:text-gray-400"} `}>Subject<FormMessage className="formTextError" /></FormLabel>
                    </FormItem>
                  )}
                />
                {/* message */}
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem className="relative w-full">
                      <Textarea id="message" name="message" className={`${form.formState.errors?.message ? "ring-2 ring-red-400" : null} ${scrollbar} w-full peer placeholder-transparent formInputElem !max-h-[600px] !min-h-[200px]`} placeholder="Text" type="textarea" {...field}></Textarea>
                      <FormLabel htmlFor="message" className={`formLabel ${form.formState.errors.message ? "flex w-full text-red-400" : "peer-focus:text-rose-500 text-gray-200 peer-placeholder-shown:text-gray-400"} `}>Message<FormMessage className="formTextError" /></FormLabel>
                    </FormItem>
                  )}
                />
                {
                  result ?
                  <Btn type="submit" className="!mt-12 !h-[32px] z-30 relative">{result}</Btn>
                  : 
                  <Btn type="submit" className="!mt-12 !h-[32px] z-30 relative">Submit</Btn>
                }
              </form>
            </Form>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}

export default C_Email_form