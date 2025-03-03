import { InputItem } from '@/types/form.types'
import { ContactType } from '@/types/index.types'

export const LEAD_SOURCES = [
  {
    id: 1,
    value: 'ref',
    name: 'Referral',
    desciption: 'The client came on the advice of another person or company.',
  },
  {
    id: 2,
    value: 'search',
    name: 'Organic Search',
    desciption: 'The client found the company through a search engine (Google, Yandex).',
  },
  {
    id: 3,
    value: 'adv',
    name: 'Paid Advertising',
    desciption: 'The client came through contextual or targeted advertising.',
  },
  {
    id: 4,
    value: 'expo',
    name: 'Conference / Expo',
    desciption: 'Lead received after offline event.',
  },
  {
    id: 5,
    value: 'call',
    name: 'Cold Call',
    desciption: 'The client was found and processed manually (by the sales department).',
  },
  {
    id: 6,
    value: 'website',
    name: 'Website / Contact Form',
    desciption: 'The client himself left a request on the website.',
  },
  {
    id: 7,
    value: 'email',
    name: 'Email Campaign',
    desciption: 'The client responded to the mailing.',
  },
  {
    id: 8,
    value: 'other',
    name: 'Other',
    desciption: 'Other recource',
  },
]

export const SOURCES_NAMES: Record<string, string> = {
  ref: 'Referral',
  search: 'Organic Search',
  adv: 'Paid Advertising',
  expo: 'Conference / Expo',
  call: 'Cold Call',
  website: 'Website / Contact Form',
  email: 'Email Campaign',
  other: 'Other resource',
}

export const STATUS_SELECT = [
  {
    id: 1,
    value: 'active',
    name: 'Active',
  },
  {
    id: 2,
    value: 'potential',
    name: 'Potential',
  },
  {
    id: 3,
    value: 'closed',
    name: 'Closed',
  },
]

export const INPUTS: InputItem[] = [
  { name: 'name', label: 'Name', placeholder: 'Steve Jobs' },
  {
    name: 'email',
    label: 'Email',
    placeholder: 'steve.jobs@apple.com',
  },
  {
    name: 'phone',
    label: 'Phone',
    placeholder: '+12345678900',
  },
  {
    name: 'company',
    label: 'Company',
    placeholder: 'Apple',
  },
]

export const contacts: ContactType[] = [
  {
    id: 'V1StGXR8',
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+79998887722',
    company: 'Tech Corp',
    createdAt: '12.02.2023',
    updatedAt: '15.02.2023',
    resource: 'ref',
    status: 'active',
    notes: [
      {
        date: '15.02.2023',
        message:
          'We discussed current prices for office supplies, taking into account delivery costs.',
      },
      {
        date: '14.02.2023',
        message: 'Scheduled a follow-up meeting to finalize the contract details.',
      },
      {
        date: '12.02.2023',
        message: 'Contact was created',
      },
    ],
  },
  {
    id: '2T3U4V5W',
    name: 'Jane Smith',
    email: 'jane.smith@example.com',
    phone: '+79997776655',
    company: 'Innovate Inc',
    createdAt: '15.03.2023',
    updatedAt: '20.03.2023',
    resource: 'search',
    status: 'potential',
    notes: [
      {
        date: '20.03.2023',
        message: 'Sent a proposal for the new project.',
      },
      {
        date: '18.03.2023',
        message: 'Had a productive call about potential collaboration.',
      },
      {
        date: '15.03.2023',
        message: 'Contact was created',
      },
    ],
  },
  {
    id: '6Y7Z8A9B',
    name: 'Alice Johnson',
    email: 'alice.johnson@example.com',
    phone: '+79996665544',
    company: 'Future Tech',
    createdAt: '20.04.2023',
    updatedAt: '25.04.2023',
    resource: 'adv',
    status: 'closed',
    notes: [
      {
        date: '25.04.2023',
        message: 'Finalized the deal and signed the contract.',
      },
      {
        date: '23.04.2023',
        message: 'Discussed the final terms and conditions.',
      },
      {
        date: '20.04.2023',
        message: 'Contact was created',
      },
    ],
  },
  {
    id: 'C0D1E2F3',
    name: 'Bob Brown',
    email: 'bob.brown@example.com',
    phone: '+79995554433',
    company: 'NextGen Solutions',
    createdAt: '25.05.2023',
    updatedAt: '30.05.2023',
    resource: 'expo',
    status: 'active',
    notes: [
      {
        date: '30.05.2023',
        message: 'Prepared a detailed report for the client.',
      },
      {
        date: '28.05.2023',
        message: 'Had a meeting to discuss the project progress.',
      },
      {
        date: '25.05.2023',
        message: 'Contact was created',
      },
    ],
  },
  {
    id: 'G4H5I6J7',
    name: 'Charlie Davis',
    email: 'charlie.davis@example.com',
    phone: '+79994443322',
    company: 'Bright Ideas',
    createdAt: '30.06.2023',
    updatedAt: '05.07.2023',
    resource: 'call',
    status: 'potential',
    notes: [
      {
        date: '05.07.2023',
        message: 'Sent a follow-up email with additional details.',
      },
      {
        date: '03.07.2023',
        message: 'Discussed the project timeline and deliverables.',
      },
      {
        date: '30.06.2023',
        message: 'Contact was created',
      },
    ],
  },
  {
    id: 'K8L9M0N1',
    name: 'Diana Evans',
    email: 'diana.evans@example.com',
    phone: '+79993332211',
    company: 'Smart Systems',
    createdAt: '05.07.2023',
    updatedAt: '10.07.2023',
    resource: 'website',
    status: 'closed',
    notes: [
      {
        date: '10.07.2023',
        message: 'Completed the project and sent the final invoice.',
      },
      {
        date: '08.07.2023',
        message: 'Reviewed the final deliverables with the client.',
      },
      {
        date: '05.07.2023',
        message: 'Contact was created',
      },
    ],
  },
  {
    id: 'O2P3Q4R5',
    name: 'Ethan Green',
    email: 'ethan.green@example.com',
    phone: '+79992221100',
    company: 'Tech Innovators',
    createdAt: '10.08.2023',
    updatedAt: '15.08.2023',
    resource: 'email',
    status: 'active',
    notes: [
      {
        date: '15.08.2023',
        message: 'Sent a proposal for the new project.',
      },
      {
        date: '13.08.2023',
        message: 'Had a productive call about potential collaboration.',
      },
      {
        date: '10.08.2023',
        message: 'Contact was created',
      },
    ],
  },
  {
    id: 'S6T7U8V9',
    name: 'Fiona Harris',
    email: 'fiona.harris@example.com',
    phone: '+79991110099',
    company: 'Digital Dreams',
    createdAt: '15.09.2023',
    updatedAt: '20.09.2023',
    resource: 'other',
    status: 'potential',
    notes: [
      {
        date: '20.09.2023',
        message: 'Finalized the deal and signed the contract.',
      },
      {
        date: '18.09.2023',
        message: 'Discussed the final terms and conditions.',
      },
      {
        date: '15.09.2023',
        message: 'Contact was created',
      },
    ],
  },
  {
    id: 'W0X1Y2Z3',
    name: 'George Clark',
    email: 'george.clark@example.com',
    phone: '+79990009988',
    company: 'Future Labs',
    createdAt: '20.10.2023',
    updatedAt: '25.10.2023',
    resource: 'ref',
    status: 'closed',
    notes: [
      {
        date: '25.10.2023',
        message: 'Prepared a detailed report for the client.',
      },
      {
        date: '23.10.2023',
        message: 'Had a meeting to discuss the project progress.',
      },
      {
        date: '20.10.2023',
        message: 'Contact was created',
      },
    ],
  },
  {
    id: 'A4B5C6D7',
    name: 'Hannah Lewis',
    email: 'hannah.lewis@example.com',
    phone: '+79998887766',
    company: 'Innovative Minds',
    createdAt: '25.11.2023',
    updatedAt: '30.11.2023',
    resource: 'search',
    status: 'active',
    notes: [
      {
        date: '30.11.2023',
        message: 'Sent a follow-up email with additional details.',
      },
      {
        date: '28.11.2023',
        message: 'Discussed the project timeline and deliverables.',
      },
      {
        date: '25.11.2023',
        message: 'Contact was created',
      },
    ],
  },
  {
    id: 'E8F9G0H1',
    name: 'Ian Walker',
    email: 'ian.walker@example.com',
    phone: '+79997776655',
    company: 'Tech Pioneers',
    createdAt: '30.12.2023',
    updatedAt: '05.01.2024',
    resource: 'adv',
    status: 'potential',
    notes: [
      {
        date: '05.01.2024',
        message: 'Completed the project and sent the final invoice.',
      },
      {
        date: '03.01.2024',
        message: 'Reviewed the final deliverables with the client.',
      },
      {
        date: '30.12.2023',
        message: 'Contact was created',
      },
    ],
  },
  {
    id: 'I2J3K4L5',
    name: 'Jessica Hall',
    email: 'jessica.hall@example.com',
    phone: '+79996665544',
    company: 'Next Wave',
    createdAt: '05.01.2024',
    updatedAt: '10.01.2024',
    resource: 'expo',
    status: 'closed',
    notes: [
      {
        date: '10.01.2024',
        message: 'Sent a proposal for the new project.',
      },
      {
        date: '08.01.2024',
        message: 'Had a productive call about potential collaboration.',
      },
      {
        date: '05.01.2024',
        message: 'Contact was created',
      },
    ],
  },
  {
    id: 'M6N7O8P9',
    name: 'Kevin Young',
    email: 'kevin.young@example.com',
    phone: '+79995554433',
    company: 'Bright Future',
    createdAt: '10.02.2024',
    updatedAt: '15.02.2024',
    resource: 'call',
    status: 'active',
    notes: [
      {
        date: '15.02.2024',
        message: 'Finalized the deal and signed the contract.',
      },
      {
        date: '13.02.2024',
        message: 'Discussed the final terms and conditions.',
      },
      {
        date: '10.02.2024',
        message: 'Contact was created',
      },
    ],
  },
  {
    id: 'Q0R1S2T3',
    name: 'Laura Allen',
    email: 'laura.allen@example.com',
    phone: '+79994443322',
    company: 'Tech Visionaries',
    createdAt: '15.03.2024',
    updatedAt: '20.03.2024',
    resource: 'website',
    status: 'potential',
    notes: [
      {
        date: '20.03.2024',
        message: 'Prepared a detailed report for the client.',
      },
      {
        date: '18.03.2024',
        message: 'Had a meeting to discuss the project progress.',
      },
      {
        date: '15.03.2024',
        message: 'Contact was created',
      },
    ],
  },
  {
    id: 'U4V5W6X7',
    name: 'Michael King',
    email: 'michael.king@example.com',
    phone: '+79993332211',
    company: 'Innovate Now',
    createdAt: '20.04.2024',
    updatedAt: '25.04.2024',
    resource: 'email',
    status: 'closed',
    notes: [
      {
        date: '25.04.2024',
        message: 'Sent a follow-up email with additional details.',
      },
      {
        date: '23.04.2024',
        message: 'Discussed the project timeline and deliverables.',
      },
      {
        date: '20.04.2024',
        message: 'Contact was created',
      },
    ],
  },
  {
    id: 'Y8Z9A0B1',
    name: 'Natalie Scott',
    email: 'natalie.scott@example.com',
    phone: '+79992221100',
    company: 'Future Horizons',
    createdAt: '25.05.2024',
    updatedAt: '30.05.2024',
    resource: 'other',
    status: 'active',
    notes: [
      {
        date: '30.05.2024',
        message: 'Completed the project and sent the final invoice.',
      },
      {
        date: '28.05.2024',
        message: 'Reviewed the final deliverables with the client.',
      },
      {
        date: '25.05.2024',
        message: 'Contact was created',
      },
    ],
  },
  {
    id: 'C2D3E4F5',
    name: 'Oliver Wright',
    email: 'oliver.wright@example.com',
    phone: '+79991110099',
    company: 'Tech Leaders',
    createdAt: '30.06.2024',
    updatedAt: '05.07.2024',
    resource: 'ref',
    status: 'potential',
    notes: [
      {
        date: '05.07.2024',
        message: 'Sent a proposal for the new project.',
      },
      {
        date: '03.07.2024',
        message: 'Had a productive call about potential collaboration.',
      },
      {
        date: '30.06.2024',
        message: 'Contact was created',
      },
    ],
  },
  {
    id: 'G6H7I8J9',
    name: 'Paula Adams',
    email: 'paula.adams@example.com',
    phone: '+79990009988',
    company: 'Next Steps',
    createdAt: '05.07.2024',
    updatedAt: '10.07.2024',
    resource: 'search',
    status: 'closed',
    notes: [
      {
        date: '10.07.2024',
        message: 'Finalized the deal and signed the contract.',
      },
      {
        date: '08.07.2024',
        message: 'Discussed the final terms and conditions.',
      },
      {
        date: '05.07.2024',
        message: 'Contact was created',
      },
    ],
  },
  {
    id: 'K0L1M2N3',
    name: 'Quinn Baker',
    email: 'quinn.baker@example.com',
    phone: '+79998887766',
    company: 'Bright Path',
    createdAt: '10.08.2024',
    updatedAt: '15.08.2024',
    resource: 'adv',
    status: 'active',
    notes: [
      {
        date: '15.08.2024',
        message: 'Prepared a detailed report for the client.',
      },
      {
        date: '13.08.2024',
        message: 'Had a meeting to discuss the project progress.',
      },
      {
        date: '10.08.2024',
        message: 'Contact was created',
      },
    ],
  },
  {
    id: 'O4P5Q6R7',
    name: 'Ryan Carter',
    email: 'ryan.carter@example.com',
    phone: '+79997776655',
    company: 'Tech Forward',
    createdAt: '15.09.2024',
    updatedAt: '20.09.2024',
    resource: 'expo',
    status: 'potential',
    notes: [
      {
        date: '20.09.2024',
        message: 'Sent a follow-up email with additional details.',
      },
      {
        date: '18.09.2024',
        message: 'Discussed the project timeline and deliverables.',
      },
      {
        date: '15.09.2024',
        message: 'Contact was created',
      },
    ],
  },
  {
    id: 'S8T9U0V1',
    name: 'Sophia Evans',
    email: 'sophia.evans@example.com',
    phone: '+79996665544',
    company: 'Innovate Ahead',
    createdAt: '20.10.2024',
    updatedAt: '25.10.2024',
    resource: 'call',
    status: 'closed',
    notes: [
      {
        date: '25.10.2024',
        message: 'Completed the project and sent the final invoice.',
      },
      {
        date: '23.10.2024',
        message: 'Reviewed the final deliverables with the client.',
      },
      {
        date: '20.10.2024',
        message: 'Contact was created',
      },
    ],
  },
  {
    id: 'W2X3Y4Z5',
    name: 'Thomas Green',
    email: 'thomas.green@example.com',
    phone: '+79995554433',
    company: 'Future Focus',
    createdAt: '25.11.2024',
    updatedAt: '30.11.2024',
    resource: 'website',
    status: 'active',
    notes: [
      {
        date: '30.11.2024',
        message: 'Sent a proposal for the new project.',
      },
      {
        date: '28.11.2024',
        message: 'Had a productive call about potential collaboration.',
      },
      {
        date: '25.11.2024',
        message: 'Contact was created',
      },
    ],
  },
  {
    id: 'A6B7C8D9',
    name: 'Uma Harris',
    email: 'uma.harris@example.com',
    phone: '+79994443322',
    company: 'Tech Trends',
    createdAt: '30.12.2024',
    updatedAt: '05.01.2025',
    resource: 'email',
    status: 'potential',
    notes: [
      {
        date: '05.01.2025',
        message: 'Finalized the deal and signed the contract.',
      },
      {
        date: '03.01.2025',
        message: 'Discussed the final terms and conditions.',
      },
      {
        date: '30.12.2024',
        message: 'Contact was created',
      },
    ],
  },
  {
    id: 'E0F1G2H3',
    name: 'Victor Clark',
    email: 'victor.clark@example.com',
    phone: '+79993332211',
    company: 'Next Level',
    createdAt: '05.01.2025',
    updatedAt: '10.01.2025',
    resource: 'other',
    status: 'closed',
    notes: [
      {
        date: '10.01.2025',
        message: 'Prepared a detailed report for the client.',
      },
      {
        date: '08.01.2025',
        message: 'Had a meeting to discuss the project progress.',
      },
      {
        date: '05.01.2025',
        message: 'Contact was created',
      },
    ],
  },
  {
    id: 'I4J5K6L7',
    name: 'Wendy Lewis',
    email: 'wendy.lewis@example.com',
    phone: '+79992221100',
    company: 'Bright Ideas',
    createdAt: '08.01.2025',
    updatedAt: '15.01.2025',
    resource: 'ref',
    status: 'active',
    notes: [
      {
        date: '15.01.2025',
        message: 'Sent a follow-up email with additional details.',
      },
      {
        date: '12.01.2025',
        message: 'Discussed the project timeline and deliverables.',
      },
      {
        date: '08.01.2025',
        message: 'Contact was created',
      },
    ],
  },
  {
    id: 'M8N9O0P1',
    name: 'Xander Moore',
    email: 'xander.moore@example.com',
    phone: '+79991110099',
    company: 'Tech Vision',
    createdAt: '10.01.2025',
    updatedAt: '22.01.2025',
    resource: 'search',
    status: 'potential',
    notes: [
      {
        date: '22.01.2025',
        message: 'Completed the project and sent the final invoice.',
      },
      {
        date: '11.01.2025',
        message: 'Reviewed the final deliverables with the client.',
      },
      {
        date: '10.01.2025',
        message: 'Contact was created',
      },
    ],
  },
  {
    id: 'Q2R3S4T5',
    name: 'Yara Nelson',
    email: 'yara.nelson@example.com',
    phone: '+79990009988',
    company: 'Innovate Now',
    createdAt: '14.01.2025',
    updatedAt: '17.01.2025',
    resource: 'adv',
    status: 'closed',
    notes: [
      {
        date: '17.01.2025',
        message: 'Sent a proposal for the new project.',
      },
      {
        date: '16.01.2025',
        message: 'Had a productive call about potential collaboration.',
      },
      {
        date: '14.01.2025',
        message: 'Contact was created',
      },
    ],
  },
  {
    id: 'U6V7W8X9',
    name: 'Zachary Owens',
    email: 'zachary.owens@example.com',
    phone: '+79998887766',
    company: 'Future Labs',
    createdAt: '18.01.2025',
    updatedAt: '21.01.2025',
    resource: 'expo',
    status: 'active',
    notes: [
      {
        date: '21.01.2025',
        message: 'Finalized the deal and signed the contract.',
      },
      {
        date: '19.01.2025',
        message: 'Discussed the final terms and conditions.',
      },
      {
        date: '18.01.2025',
        message: 'Contact was created',
      },
    ],
  },
  {
    id: 'Y0Z1A2B3',
    name: 'Alice Brown',
    email: 'alice.brown@example.com',
    phone: '+79997776655',
    company: 'Tech Leaders',
    createdAt: '21.01.2025',
    updatedAt: '24.01.2025',
    resource: 'call',
    status: 'potential',
    notes: [
      {
        date: '24.01.2025',
        message: 'Prepared a detailed report for the client.',
      },
      {
        date: '21.01.2025',
        message: 'Had a meeting to discuss the project progress.',
      },
      {
        date: '21.01.2025',
        message: 'Contact was created',
      },
    ],
  },
  {
    id: 'C4D5E6F7',
    name: 'Bob Johnson',
    email: 'bob.johnson@example.com',
    phone: '+79996665544',
    company: 'Next Steps',
    createdAt: '22.01.2025',
    updatedAt: '24.01.2025',
    resource: 'website',
    status: 'closed',
    notes: [
      {
        date: '24.01.2025',
        message: 'Sent a follow-up email with additional details.',
      },
      {
        date: '22.01.2025',
        message: 'Discussed the project timeline and deliverables.',
      },
      {
        date: '22.01.2025',
        message: 'Contact was created',
      },
    ],
  },
  {
    id: 'G8H9I0J1',
    name: 'Charlie Smith',
    email: 'charlie.smith@example.com',
    phone: '+79995554433',
    company: 'Bright Future',
    createdAt: '25.01.2025',
    updatedAt: '27.01.2025',
    resource: 'email',
    status: 'active',
    notes: [
      {
        date: '27.01.2025',
        message: 'Completed the project and sent the final invoice.',
      },
      {
        date: '25.01.2025',
        message: 'Reviewed the final deliverables with the client.',
      },
      {
        date: '25.01.2025',
        message: 'Contact was created',
      },
    ],
  },
  {
    id: 'K2L3M4N5',
    name: 'Diana Taylor',
    email: 'diana.taylor@example.com',
    phone: '+79994443322',
    company: 'Innovate Ahead',
    createdAt: '30.01.2025',
    updatedAt: '31.01.2025',
    resource: 'other',
    status: 'potential',
    notes: [
      {
        date: '31.01.2025',
        message: 'Sent a proposal for the new project.',
      },
      {
        date: '30.01.2025',
        message: 'Had a productive call about potential collaboration.',
      },
      {
        date: '30.01.2025',
        message: 'Contact was created',
      },
    ],
  },
  {
    id: 'O6P7Q8R9',
    name: 'Ethan White',
    email: 'ethan.white@example.com',
    phone: '+79993332211',
    company: 'Future Focus',
    createdAt: '02.02.2025',
    updatedAt: '05.02.2025',
    resource: 'ref',
    status: 'closed',
    notes: [
      {
        date: '05.02.2025',
        message: 'Finalized the deal and signed the contract.',
      },
      {
        date: '03.02.2025',
        message: 'Discussed the final terms and conditions.',
      },
      {
        date: '02.02.2025',
        message: 'Contact was created',
      },
    ],
  },
  {
    id: 'S0T1U2V3',
    name: 'Fiona Harris',
    email: 'fiona.harris@example.com',
    phone: '+79992221100',
    company: 'Tech Trends',
    createdAt: '07.02.2025',
    updatedAt: '10.02.2025',
    resource: 'search',
    status: 'active',
    notes: [
      {
        date: '10.02.2025',
        message: 'Prepared a detailed report for the client.',
      },
      {
        date: '08.02.2025',
        message: 'Had a meeting to discuss the project progress.',
      },
      {
        date: '07.02.2025',
        message: 'Contact was created',
      },
    ],
  },
  {
    id: 'W4X5Y6Z7',
    name: 'George Clark',
    email: 'george.clark@example.com',
    phone: '+79991110099',
    company: 'Next Level',
    createdAt: '10.02.2025',
    updatedAt: '12.02.2025',
    resource: 'adv',
    status: 'potential',
    notes: [
      {
        date: '12.02.2025',
        message: 'Sent a follow-up email with additional details.',
      },
      {
        date: '11.02.2025',
        message: 'Discussed the project timeline and deliverables.',
      },
      {
        date: '10.02.2025',
        message: 'Contact was created',
      },
    ],
  },
]
