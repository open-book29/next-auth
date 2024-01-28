import React, { FC } from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

interface BackButtonProps {
    label: string
    herf: string
}

export const BackButton: FC<BackButtonProps> = ({label, herf}) => {
  return (
    <Button variant="link" className='font-normal w-full' size="sm" asChild>
        <Link href={herf}>{label}</Link>
    </Button>
  )
}
