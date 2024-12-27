import { MdFlightTakeoff } from "react-icons/md";
import { FaUserDoctor } from "react-icons/fa6";
import { BiSolidInjection } from "react-icons/bi";
import { GiMedicalDrip } from "react-icons/gi";

interface Expense {
  name: string,
  description: string,
  icon: React.ComponentType<{ className?: string }>;
}

export const expensesList: Expense[] = [
  {
    name: 'Flights',
    description: 'Round-trip flight tickets',
    icon: MdFlightTakeoff,
  },
  {
    name: 'Cytoreductive surgery',
    description: 'Extraction of visible tumors and cancerous tissues.',
    icon: FaUserDoctor,
  },
  {
    name: 'HIPEC',
    description: 'Hyperthermic Intraperitoneal Chemotherapy',
    icon: BiSolidInjection,
  },
  {
    name: 'Medical expenses',
    description: 'Medical stay in the hospital',
    icon: GiMedicalDrip,
  },
]