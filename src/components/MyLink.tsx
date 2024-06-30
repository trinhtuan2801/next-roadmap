'use client';

import { Link } from '@mui/joy';
import NextLink from 'next/link';
import { usePathname } from 'next/navigation';
import { PropsWithChildren } from 'react';

interface Props extends PropsWithChildren {
  href: string;
}

export default function MyLink({ href, children }: Props) {
  const pathname = usePathname();
  const isActive = pathname === href;
  return (
    <NextLink href={href} style={{ width: 'fit-content' }}>
      <Link component='span' underline='always' variant={isActive ? 'soft' : 'plain'}>
        {children}
      </Link>
    </NextLink>
  );
}
