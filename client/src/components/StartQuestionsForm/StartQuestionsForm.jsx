import React, { useState, useEffect } from 'react'
import { Grid } from '@material-ui/core'
import Controls from './controls/Controls'
import { useForm, Form } from './useForm'
import { Paper, makeStyles } from '@material-ui/core'

const initialFValues = {
    fullName: '',
    mobile: '',
    city: '',
}

const useStyles = makeStyles((theme) => ({
    pageContent: {
        margin: theme.spacing(5),
        padding: theme.spacing(3),
    },
}))

export default function StartQuestionsForm() {
    const classes = useStyles()

    const validate = (fieldValues = values) => {
        let temp = { ...errors }
        if ('fullName' in fieldValues)
            temp.fullName = fieldValues.fullName
                ? ''
                : 'This field is required.'
        if ('mobile' in fieldValues)
            temp.mobile =
                fieldValues.mobile.length > 9
                    ? ''
                    : 'Minimum 10 numbers required.'
        setErrors({
            ...temp,
        })

        if (fieldValues == values)
            return Object.values(temp).every((x) => x == '')
    }

    const {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange,
        resetForm,
    } = useForm(initialFValues, true, validate)

    const handleSubmit = (e) => {
        e.preventDefault()
        if (validate()) {
            resetForm()
        }
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Grid
                container
                spacing={0}
                direction="column"
                alignItems="center"
                justify="center"
                // style={{ minHeight: '100vh' }}
            >
                <Grid item xs={6}>
                    <Controls.Input
                        name="fullName"
                        label="Full Name"
                        value={values.fullName}
                        onChange={handleInputChange}
                        error={errors.fullName}
                        required
                    />
                    <Controls.Input
                        label="Mobile"
                        name="mobile"
                        value={values.mobile}
                        onChange={handleInputChange}
                        error={errors.mobile}
                    />
                    <Controls.Input
                        label="City"
                        name="city"
                        value={values.city}
                        onChange={handleInputChange}
                    />
                    <div>
                        <Controls.Button
                            type="submit"
                            text="Submit"
                            color="secondary"
                        />
                        <Controls.Button
                            text="Reset"
                            color="default"
                            onClick={resetForm}
                        />
                    </div>
                </Grid>
            </Grid>
        </Form>
    )
}
