import { Card, Typography } from '@mui/joy';

export default function Page({ name, children }) {
  return (
    <Card>
      <Typography level='title-lg'>{name}</Typography>
      {children}
    </Card>
  );
}
