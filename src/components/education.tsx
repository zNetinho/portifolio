import { cn } from "@/lib/utils";
import { GenericsProps } from "@/types/common";
import React from "react";

function Education() {
    return (
        <div>
            <NameOfCourse>Teste</NameOfCourse>
            <YearCompleted>ano de conclusão </YearCompleted>
            nome da instituição
        </div>
    )
}

function NameOfCourse({ className, children }: GenericsProps) {

    return (
        <h3 className={cn(['text-xl', className])}>{children}</h3>
    )
}

function YearCompleted({ children, className }: GenericsProps) {
    return (
        <p className={cn(['text-[10px] text-neutral-500', className])}>
            {children}
        </p>
    )
}

export {
    Education
}