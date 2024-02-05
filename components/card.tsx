interface CardProps {
    title: string;
}

export default function Card({title}: CardProps) {
    return (
        <div className={"w-full border-4 rounded-md border-slate-500 bg-slate-200 mb-4 last:mb-0 p-8 shadow-lg"}>
            <input type={"checkbox"} id={title + "_done"}/>
            <label htmlFor={title + "_done"}>{title}</label>
        </div>
    );
}