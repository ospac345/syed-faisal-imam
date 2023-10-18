import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import Typography from '@mui/material/Typography';
import SchoolIcon from '@mui/icons-material/School';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';

export default function AboutTimeline() {
    return (
        <Timeline position="alternate" >
            <TimelineItem>
                <TimelineOppositeContent
                    sx={{ m: 'auto 0' }}
                    align="right"
                    variant="body2"
                    color="text.secondary"
                >
                    Sep 2018
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineConnector />
                    <TimelineDot>
                        <LaptopMacIcon />
                    </TimelineDot>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ py: '10px', px: 2 }}>
                    <Typography variant="h6" component="span" sx={{ letterSpacing: '0.1em' }}>
                        Start
                    </Typography>
                    <Typography
                        variant="subtitle2"
                        sx={{ letterSpacing: '0.1em' }}
                    >Glasgow Caledonian University</Typography>
                </TimelineContent>
            </TimelineItem>

            <TimelineItem>
                <TimelineOppositeContent
                    sx={{ m: 'auto 0' }}
                    variant="body2"
                    color="text.secondary"
                >
                    Sep 2021
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineConnector />
                    <TimelineDot color="primary">
                        <WorkOutlineIcon />
                    </TimelineDot>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 2 }}>
                    <Typography variant="h6" component="span" sx={{ letterSpacing: '0.1em' }}>
                        Year in Industry Placement
                    </Typography>
                    <Typography
                        variant="subtitle2"
                        sx={{ letterSpacing: '0.1em' }}
                    >ScottishPower, Glasgow</Typography>
                </TimelineContent>
            </TimelineItem>

            <TimelineItem>
                <TimelineOppositeContent
                    sx={{ m: 'auto 0' }}
                    align="right"
                    variant="body2"
                    color="text.secondary"
                >
                    Sep 2022
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineConnector />
                    <TimelineDot color="primary" variant="outlined">
                        <WorkHistoryIcon />
                    </TimelineDot>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 2 }}>
                    <Typography variant="h6" component="span" sx={{ letterSpacing: '0.1em' }}>
                        End of Placement
                    </Typography>
                    <Typography
                        variant="subtitle2"
                        sx={{ letterSpacing: '0.1em' }}
                    >Back to University</Typography>
                </TimelineContent>
            </TimelineItem>

            <TimelineItem>
                <TimelineOppositeContent
                    sx={{ m: 'auto 0' }}
                    variant="body2"
                    color="text.secondary"
                >
                    Jun 2023
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineConnector />
                    <TimelineDot color="secondary">
                        <SchoolIcon />
                    </TimelineDot>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 2 }}>
                    <Typography variant="h6" component="span" sx={{ letterSpacing: '0.1em' }}>
                        BSc Computing
                    </Typography>
                    <Typography
                        variant="subtitle2"
                        sx={{ letterSpacing: '0.1em' }}
                    >1st Class Hons. Sandwich</Typography>
                </TimelineContent>
            </TimelineItem>
        </Timeline>
    );
}

