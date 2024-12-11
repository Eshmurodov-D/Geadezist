import { Card, CardContent, Typography } from '@mui/material';

import { StatCardProps } from '../../types/dashboard';

export function StatCard({ icon, value, title }: StatCardProps) {
  return (
    <Card className="w-full h-full bg-white shadow-sm hover:shadow-md transition-shadow">
      <CardContent className="flex flex-col items-center p-4 space-y-2">
        <div className="text-gray-600 p-2 rounded-full bg-gray-50">
          {icon}
        </div>
        <Typography variant="h4" component="div" className="font-bold">
          {value}
        </Typography>
        <Typography color="textSecondary" className="text-center">
          {title}
        </Typography>
      </CardContent>
    </Card>
  );
}

