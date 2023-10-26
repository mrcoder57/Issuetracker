"use client"
import React from 'react'
import { TextArea, TextField,Button } from '@radix-ui/themes'

const NewIssuepage = () => {
  return (
    <div className='max-w-xl space-y-4'>
        <TextField.Root>
           
            <TextField.Input placeholder='New Issue' />
            
        </TextField.Root>
        <TextArea placeholder='description' className='pt-5'></TextArea>
        <Button type='submit'>Submit New Issue</Button>
    </div>
  )
}

export default NewIssuepage