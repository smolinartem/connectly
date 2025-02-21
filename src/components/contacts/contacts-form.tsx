import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { Label } from '../ui/label'

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select'

export default function ContactsForm() {
  return (
    <div className='mt-6'>
      <form
        autoComplete='off'
        className='flex flex-col gap-3 border border-blue-600 p-6 rounded-md max-w-[400px]'
      >
        <fieldset className='flex flex-col'>
          <Label className='mb-1' htmlFor='name'>
            Name
          </Label>
          <Input type='text' id='name' name='name' placeholder='Steve Jobs' />
          <span className='block mt-1 text-xs leading-none h-[12px] text-red-600'></span>
        </fieldset>

        <fieldset className='flex flex-col'>
          <Label className='mb-1' htmlFor='email'>
            Email
          </Label>
          <Input type='email' id='email' name='email' placeholder='steve.jobs@apple.com' />
          <span className='block mt-1 text-xs leading-none h-[12px] text-red-600'></span>
        </fieldset>

        <fieldset className='flex flex-col'>
          <Label className='mb-1' htmlFor='phone'>
            Phone
          </Label>
          <Input type='tel' id='phone' name='phone' placeholder='+1234567890' />
          <span className='block mt-1 text-xs leading-none h-[12px] text-red-600'></span>
        </fieldset>

        <fieldset className='flex flex-col'>
          <Label className='mb-1' htmlFor='company'>
            Company
          </Label>
          <Input type='text' id='company' name='company' placeholder='Apple' />
          <span className='block mt-1 text-xs leading-none h-[12px] text-red-600'></span>
        </fieldset>

        <Select>
          <SelectTrigger className='cursor-pointer'>
            <SelectValue placeholder='Status' />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem className='cursor-pointer' value='active'>
                Active
              </SelectItem>
              <SelectItem className='cursor-pointer' value='potential'>
                Potential
              </SelectItem>
              <SelectItem className='cursor-pointer' value='closed'>
                Closed
              </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>

        <Button className='cursor-pointer mt-6' type='submit'>
          Add new contact
        </Button>
      </form>
    </div>
  )
}
