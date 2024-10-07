"use client"
import { TableBody, TableCell, TableRow } from '@/components/ui/table'
import { createClientBrowser } from '@/services/db/server';
import { motion } from 'framer-motion'
import { Post } from '@/types/post';
import { Ellipsis, Trash2 } from 'lucide-react';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { GenericsProps } from '@/types/common';
import { inView, animate } from "framer-motion/dom"
import { cn } from '@/lib/utils';

function TableRowComponent({ children, className }: GenericsProps) {

    inView("tr", ({ target }) => {
        animate(target, { scale: 1 },
            {
                type: "spring",
                stiffness: 300,
                damping: 24
            })
    })

    return (
        <motion.tr
            initial={{ opacity: 0, scale: 0.97, transform: "translateX(20px)" }}
            animate={{ opacity: 1, scale: 1, transform: "translateY(0px)", transition: { duration: 0.2 } }}
            whileInView={{ opacity: 1 }}
            className={cn(className)}
            draggable={true}
        >
            {children}
        </motion.tr>
    )
}

function TableBodyComponent() {

    const [posts, setPost] = useState<Post[]>([])

    const supabase = createClientBrowser();

    useEffect(() => {
        const fetchPosts = async () => {
            const { data, error } = await supabase.from('post').select('*');
            if (error) {
                console.error(error);
            } else {
                console.log(data);
                if (data) setPost(data);
            }
        };

        fetchPosts();
    }, [])

    return (
        <TableBody>
            {posts.map((post: Post) => (
                <TableRowComponent key={post.id} className='p-1 text-xs text-center gap-1 mx-auto hover:bg-neutral-700 hover:text-white'>
                    <TableCell className="font-medium p-1">{post.title}</TableCell>
                    <TableCell className='p-1'>{post.createdat}</TableCell>
                    <TableCell className='p-1'>{post.aggregatingRating}</TableCell>
                    <TableCell className='p-1'>{post.updatedat}</TableCell>
                    <TableCell className='flex h-full justify-center items-centertext-center gap-1 p-1'>
                        <Link href={`/admin/post/${post.id}`}><Ellipsis size={20} /></Link>
                        <Link href={`/admin/post/${post.id}`}><Trash2 size={20} /></Link>
                    </TableCell>
                </TableRowComponent>
            ))}
        </TableBody>
    )
}

export default TableBodyComponent