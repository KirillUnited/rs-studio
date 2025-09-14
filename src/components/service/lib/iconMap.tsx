import { FaLeaf } from "react-icons/fa";
import { FaComments } from "react-icons/fa";
import { FaHandsHelping } from "react-icons/fa";
import { FaTools } from "react-icons/fa";
import { FaShieldAlt } from "react-icons/fa";

export enum BenefitsSectionIconType {
	FaLeaf = "FaLeaf",
	FaComments = 'FaComments',
	FaHandsHelping = 'FaHandsHelping',
	FaTools = 'FaTools',
	FaShieldAlt = 'FaShieldAlt',
}

export const BenefitsSectionIconMap = {
	[BenefitsSectionIconType.FaLeaf]: <FaLeaf size={32} />,
	[BenefitsSectionIconType.FaComments]: <FaComments size={32} />,
	[BenefitsSectionIconType.FaHandsHelping]: <FaHandsHelping size={32} />,
	[BenefitsSectionIconType.FaTools]: <FaTools size={32} />,
	[BenefitsSectionIconType.FaShieldAlt]: <FaShieldAlt size={32} />,
};