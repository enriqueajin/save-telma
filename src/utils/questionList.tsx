export interface Question {
  question: string,
  answer: string
}

export const questionList: Question[] = [
  {
    question: 'What will my donation go towards?',
    answer: 'Medical expenses, flight tickets, HIPEC, and Cytoreductive surgery.'
  },
  {
    question: 'What is Pseudomyxoma peritonei?',
    answer: "It's a rare condition characterized by the accumulation of mucin (a jelly-like substance) within the abdominal cavity, usually due to the rupture of a mucin-producing tumor, often originating from the appendix."
  }, 
  {
    question: 'What are the symptoms of Pseudomyxoma peritonei?',
    answer: 'Abdominal distension, abdominal pain or discomfort, nausea and vomiting, unexplained weight loss, and changes in bowel habits.'
  }, 
  {
    question: 'What is the treatment for Pseudomyxoma Peritonei?',
    answer: 'It involves Cytoreductive Surgery (CRS) to remove visible tumors and mucin, followed by Hyperthermic Intraperitoneal Chemotherapy (HIPEC) to kill remaining microscopic cancer cells.'
  },
  {
    question: 'What is cytoreductive surgery?',
    answer: 'Cytoreductive surgery (CRS) is a specialized surgical procedure aimed at removing as much visible cancer or tumor burden as possible from the abdominal cavity.'
  },
  {
    question: 'What is HIPEC?',
    answer: 'Hyperthermic Intraperitoneal Chemotherapy (HIPEC) is a targeted cancer treatment used in conjunction with cytoreductive surgery (CRS) to treat cancers that have spread within the abdominal cavity, such as Pseudomyxoma Peritonei (PMP) or peritoneal carcinomatosis.'
  },
];