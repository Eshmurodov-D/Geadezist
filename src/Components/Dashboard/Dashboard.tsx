import { Grid, Paper, Typography } from '@mui/material';
import { Category, QuestionMark, Assessment, Group } from '@mui/icons-material';
import { StatCard } from './StatCard';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const weeklyData = [
  { date: 'Душанба', value: 0 },
  { date: 'Сешанба', value: 0 },
  { date: 'Чоршанба', value: 0 },
  { date: 'Пайшанба', value: 0 },
  { date: 'Жума', value: 0 },
];

export function Dashboard() {
  return (
     <div className='ml-60 mt-10'>
            <div className="p-6 bg-gray-50 min-h-screen">
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            icon={<Category />}
            value={3}
            title="Умумий категория"
          />
        </Grid> 
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            icon={<QuestionMark />}
            value={5}
            title="Умумий савол"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            icon={<Assessment />}
            value={3}
            title="Умумий натижа"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            icon={<Group />}
            value={3}
            title="Жами фойдаланувчилар"
          />
        </Grid>

        <Grid item xs={12}>
          <Paper className="p-4">
            <Typography variant="h6" className="mb-4">
              Ҳафталик маълумот
            </Typography>
            <div className="h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={weeklyData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="value"
                    stroke="#3f51b5"
                    strokeWidth={2}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </Paper>
        </Grid>
      </Grid>
    </div>
     </div>
  );
}

