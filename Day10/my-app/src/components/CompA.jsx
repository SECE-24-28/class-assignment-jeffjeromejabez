import React from 'react';
import { Card, CardContent, Typography, Container } from '@mui/material';
import CompB from './CompB';

function CompA({ data }) {
    return (
        <Container sx={{ mt: 4 }}>
            <Card>
                <CardContent>
                    <Typography variant="h5" component="h2">
                        Data from Props Drilling: {data}
                    </Typography>
                    <CompB data={data} />
                </CardContent>
            </Card>
        </Container>
    );
}

export default CompA;