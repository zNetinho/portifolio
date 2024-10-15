import { TableHead, TableHeader, TableRow } from '@/components/ui/table'
import React from 'react'

function TableHeaderComponent() {
  return (
    <TableHeader className='rounded-lg'>
        <TableRow className='text-xs'>
          <TableHead className="w-[100px]">Título</TableHead>
          <TableHead>Data da publicação</TableHead>
          <TableHead>Avaliação</TableHead>
          <TableHead>Data da ultima alteração</TableHead>
          <TableHead>Ações</TableHead>
        </TableRow>
    </TableHeader>
  )
}

export default TableHeaderComponent