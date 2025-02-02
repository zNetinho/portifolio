"use client"
import { Table, TableCaption } from '@/components/ui/table';
import TableBodyComponent from './table-body';
import TableHeaderComponent from './table-header';
import { motion } from "framer-motion";
import { GenericsProps } from '@/types/common';
import ButtonComponent from '@/components/button';
import { CirclePlus } from 'lucide-react';
import Link from 'next/link';


function TableComponent({ children }: GenericsProps) {
  return (
    <motion.table
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className='border-2 border-neutral-500 rounded-md dark:border-neutral-800'
    >
      {children}
    </motion.table>
  )
}

function TableListPosts() {

  return (
    <div>
      <ButtonComponent className='absolute right-28 border-2 p-1 rounded-lg border-accent_custom-300' size={'sm'}>
        <Link
          className='flex gap-2 items-center text-center'
          href={"/admin/post"}
        >
          Criar nova publicação <CirclePlus />
        </Link>
      </ButtonComponent>
      <TableComponent className='border-2 border-neutral-500 rounded-md caption-top'>
        <TableCaption className='my-2 text-lg'>
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
          >
            Posts
          </motion.h2>
        </TableCaption>
        <TableHeaderComponent />
        <TableBodyComponent />
      </TableComponent>
    </div>
  )
}

export default TableListPosts
