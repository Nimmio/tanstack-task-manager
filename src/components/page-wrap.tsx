import React, { ReactNode } from "react";
import { Button, buttonVariants } from "./ui/button";
import { LucideIcon } from "lucide-react";

interface PageWrapProps {
  children: ReactNode;
  title: string;
  subTitle?: string;
  buttons?: Array<{
    text: string;
    icon?: LucideIcon;
    variant?:
      | "default"
      | "destructive"
      | "outline"
      | "secondary"
      | "ghost"
      | "link";
    onClick: () => void;
  }>;
}

const PageWrap = ({
  children,
  title,
  subTitle,
  buttons,
}: Readonly<PageWrapProps>) => {
  return (
    <>
      <div className="flex justify-between items-center w-full mb-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">{title}</h1>
          {subTitle && <p className="text-gray-600">{subTitle}</p>}
        </div>
        {buttons && (
          <div className="flex gap-2">
            {buttons.map((buttonElement) => (
              <Button
                key={buttonElement.text}
                variant={buttonElement.variant || "default"}
                onClick={buttonElement.onClick}
              >
                {buttonElement.icon && (
                  <buttonElement.icon className="w-4 h-4 mr-2" />
                )}
                {buttonElement.text}
              </Button>
            ))}
          </div>
        )}
      </div>
      {children}
    </>
  );
};

export default PageWrap;
