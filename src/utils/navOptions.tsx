import { RiArticleFill } from "react-icons/ri";
import { GiReceiveMoney } from "react-icons/gi";
import { PiSealQuestionFill } from "react-icons/pi";


export interface NavOptions {
  name: string,
  icon: React.ComponentType<{ className?: string }>;
}

export const navOptions: NavOptions[] = [
  {
    name: 'Donations use',
    icon: GiReceiveMoney
  }, 
  {
    name: 'FAQ',
    icon: PiSealQuestionFill
  },
  {
    name: 'Blog',
    icon: RiArticleFill
  },
];