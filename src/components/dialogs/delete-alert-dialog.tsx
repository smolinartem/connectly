import { useNavigate } from 'react-router-dom'
import useContactStore from '@/store/contactStore'
import { Trash2 } from 'lucide-react'

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog'
import { Button } from '@/components/ui/button'

export default function DeleteAlertDialog({ id }: { id: string }) {
  const navigate = useNavigate()
  const { deleteContact } = useContactStore()

  const handleDelete = (id: string) => {
    deleteContact(id)
    navigate(`/contacts`, { replace: true })
  }

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button className='hover:text-red-600' variant='outline' size='icon'>
          <Trash2 />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete contact from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={() => handleDelete(id)}>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
