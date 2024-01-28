import React, { FC } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, } from "@/components/ui/card";
import { Header } from "./Header";
import { Social } from "./Social";
import { BackButton } from "./back-button";

interface CardWrapperProps {
  children: React.ReactNode;
  headerLabel: string;
  backButtonLabel: string;
  backButtonHerf: string;
  showSocial?: boolean;
}

export const CardWrapper: FC<CardWrapperProps> = ({
  children,
  headerLabel,
  backButtonLabel,
  backButtonHerf,
  showSocial,
}) => {
  return (
    <Card className="w-[400px] shadow-md">
        <CardHeader>
            <Header label={headerLabel}/>
        </CardHeader>
        <CardContent>
            {children}
        </CardContent>
        {showSocial && (<CardFooter>
            <Social />
        </CardFooter>)}
        <CardFooter>
            <BackButton label={backButtonLabel} herf={backButtonHerf}/>
        </CardFooter>
    </Card>
  )
};
