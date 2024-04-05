import React from 'react'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
  import { FcApproval } from "react-icons/fc";
  import { ImCross } from "react-icons/im";
  import Link from "next/link"
const Card = () => {
  return (
    <Table>
  <TableCaption>A list of your recent Websites Request</TableCaption>
  <TableHeader>
    <TableRow>
      <TableHead className="w-[100px]">S No.</TableHead>
      <TableHead>Status</TableHead>
      <TableHead>Website URL</TableHead>
      <TableHead className="text-right">Authenticated</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow className=' text-lg'>
      <TableCell className="font-medium">1</TableCell>
      <TableCell>Authenticated</TableCell>
      <TableCell><Link href={"https://www.google.com"}>https://www.google.com</Link></TableCell>
      <TableCell className="text-right flex justify-end items-center"><FcApproval size={30}/><ImCross size={20}/></TableCell>

    </TableRow>
  </TableBody>
</Table>
  )
}

export default Card