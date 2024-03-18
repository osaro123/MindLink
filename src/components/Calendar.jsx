import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'

const Calendar = () => {
  return (
    <div className='mr-8 mt-4'>
        <FullCalendar
            plugins={[dayGridPlugin]}
            initialView='dayGridMonth'
            
        />
    </div>
  )
}

export default Calendar