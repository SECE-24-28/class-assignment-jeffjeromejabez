import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';

function CompC({ data }) {
    return (
        <Box sx={{ mt: 2 }}>
            <Card>
                <CardContent>
                    <Typography variant="body1" component="p">
                        Data from Props Drilling: {data}
                    </Typography>
                </CardContent>
            </Card>
        </Box>
    );
}

export default CompC;