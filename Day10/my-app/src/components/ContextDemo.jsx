import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import { useData } from './UserContext';

function ContextDemo() {
    const { data } = useData();
    
    return (
        <Box sx={{ mt: 4 }}>
            <Card>
                <CardContent>
                    <Typography variant="h5" component="h2">
                        Data from Context API: {data}
                    </Typography>
                </CardContent>
            </Card>
        </Box>
    );
}

export default ContextDemo;