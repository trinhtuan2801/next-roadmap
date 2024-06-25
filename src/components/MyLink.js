'use client';

import { Link } from '@mui/joy';
import NextLink from 'next/link';
import { usePathname } from 'next/navigation';

export default function MyLink({ href, children }) {
  const pathname = usePathname();
  const isActive = pathname === href;
  return (
    <NextLink href={href}>
      <Link
        component='span'
        underline='always'
        variant={isActive ? 'soft' : 'plain'}
      >
        {children}
      </Link>
    </NextLink>
  );
}
