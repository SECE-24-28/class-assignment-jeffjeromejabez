import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import CompC from './CompC';

function CompB({ data }) {
    return (
        <Box sx={{ mt: 2 }}>
            <Card>
                <CardContent>
                    <Typography variant="h6" component="h3">
                        Data from Props Drilling: {data}
                    </Typography>
                    <CompC data={data} />
                </CardContent>
            </Card>
        </Box>
    );
}

export default CompB;