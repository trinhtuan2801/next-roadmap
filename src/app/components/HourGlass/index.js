import { HourglassEmpty } from '@mui/icons-material';
import './index.scss';

export default function HourGlass({ sx = {} }) {
  return <HourglassEmpty className='hourglass' sx={sx} />;
}
