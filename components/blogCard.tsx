
import Link from "next/link"
import { FormatDate, Time } from "@/lib/DateAndTimeConverter";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
interface CardProps {
  data: {
    image: string | undefined;
    _id:string
    title: string;
    content: string;
    email:string;
    user:string
  };
}
const Blogcard = ({ data }: CardProps) => {
  // const CreatedDate = FormatDate(data.createdAt);
  // const createdAt = new Date(data.createdAt);
  // const time = Time(createdAt)
  const words = data.content.split(" ");
  const content = words.slice(0, 40).join(" ");
  return (
    <Link href={`blog/${data._id}`}>
      <div className=" flex gap-1 p-0">
        <div className="flex justify-center items-center gap-2 p-2 ">
          <Avatar className={" w-10 h-10"}>
            <AvatarImage src={data.image} />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div>{data.email}</div>

          {/* <div className=" text-md text-slate-500">{`${CreatedDate.monthName} ${CreatedDate.date},${CreatedDate.year} | ${time}`}</div> */}
        </div>
      </div>
      <div className="">
        <div className=" text-3xl font-extrabold">{data.title}</div>
        <div className=" text-xl font-light p-3">{content}...</div>
      </div>
      <div className=" border-b-[2px] "></div>
    </Link>
  );
};

export default Blogcard;
