import * as React from 'react'
import { useState, ChangeEvent } from 'react'
import { Card, FormControl, InputLabel, Button, Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import parse from 'csv-parse/lib/sync'

interface CSVInputProps {
    onSubmit: (data: any) => void;
    submitButtonText: string;
    disabled: boolean;
}

const useStyles = makeStyles(theme => ({
    card: {
        padding: '10px'
    },
    gridItem: {
        padding: '10px'
    }
}))

export function CSVInputForm (props: CSVInputProps) {
    const classes = useStyles()

    const [csvData, setCSVData] = useState(null as null | any)

    const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
        const csvFile = event.currentTarget.files && event.currentTarget.files[0]
        if (csvFile) {
            const reader = new FileReader()
            reader.readAsText(csvFile)
            if (reader.result) {
                let parsedData
                try {
                    parsedData = parse(reader.result as string)
                } catch (err) {
                    console.log(err)
                }
                if (parsedData) {
                    setCSVData(parsedData)
                }
            }
        }
    }

    return (
        <Card className={classes.card}>
            <Grid container spacing={3}>
                <Grid item xs={12} className={classes.gridItem}>
                    <FormControl>
                        <InputLabel>Upload your CSV file here.</InputLabel>
                        <input
                            accept='text/csv'
                            id='upload-csv'
                            type='file'
                            onChange={handleFileChange}
                        />
                    </FormControl>
                </Grid>
                <Grid item xs={12} className={classes.gridItem}>
                    <Button onSubmit={props.onSubmit} color='primary' variant='contained'>
                        {props.submitButtonText}
                    </Button>
                </Grid>
            </Grid>
            <Typography>
                {csvData && JSON.stringify(csvData)}
            </Typography>
        </Card>
    )
}