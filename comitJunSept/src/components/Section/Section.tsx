import type {JSX} from "react";

type SectionProps={
    title: string;
    description:string;
    children:JSX.Element | string | JSX.Element[]; 
    

};

export default function Section({title, description, children}: SectionProps){
return(
<section>
    <h1>{title}</h1>
    <p>{description}</p>
</section>
);
}