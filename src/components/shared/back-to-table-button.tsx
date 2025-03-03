import { ArrowLeft } from 'lucide-react'
import { Button } from '../ui/button'
import { useNavigate } from 'react-router-dom'

export default function BackToTableButton() {
  const navigate = useNavigate()

  return (
    <Button onClick={() => navigate('/contacts')} className='mb-4' variant='outline'>
      <ArrowLeft />
      Back to table
    </Button>
  )
}
