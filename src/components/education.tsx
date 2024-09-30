import { useState } from "react";
import { graduate } from "../../constants";
import { Accordion, AccordionArrowIcon, AccordionButton, AccordionItem, AccordionList, AccordionGraduate, AccordionText, AccordionTitle, AccordionWrapper, AccordionCourses } from "./accordion";

const educations = graduate

function Education() {

    return (
        <section className="w-full p-1">
            
            <AccordionGraduate />
            <AccordionCourses />
        </section>
    )
}

export {
    Education
};
