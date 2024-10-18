"use client";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { Check, Clipboard } from "lucide-react";
import { useState } from "react";

export default function CopyBtn({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  const copyToClipbaord = (text: string) => {
    navigator.clipboard.writeText(text).then(() => setCopy());
  };
  const setCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <button
            className="text-slate-50 absolute right-0 top-0 p-2"
            onClick={() => copyToClipbaord(text)}
          >
            {!copied ? (
              <Clipboard className="h-4 w-4 " />
            ) : (
              <Check className="h-4 w-4 text-green-500" />
            )}
          </button>
        </TooltipTrigger>
        <TooltipContent>
          <p>{!copied ? "Copy text" : "Copied"}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
