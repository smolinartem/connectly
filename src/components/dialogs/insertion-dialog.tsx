import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '../ui/dialog'
import ContactImage from '@/contact.png'

interface Props {
  open: boolean
  onClose: () => void
}

export default function InsertionDialog({ open, onClose }: Props) {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Form</DialogTitle>
          <DialogDescription>
            Make changes to the contact here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>

        <div className='w-[600px]'>
          <img src={ContactImage} />
        </div>
      </DialogContent>
    </Dialog>
  )
}
