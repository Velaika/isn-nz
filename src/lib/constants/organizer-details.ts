import type { OrganizerPropsType } from "@/types";
import {
  getAllAdvisors,
  getAllInternationalFaculty,
  getAllNationalFaculty,
  getAllOrganizingCommittee,
  getAllPatrons,
  getAllScientificCommittee,
} from "./faculty-database";

/**
 * Organizing Committee Members
 * These are the key organizers responsible for planning and executing NZ-ISNCON 2026
 */
export const PATRONS_DATA: OrganizerPropsType[] = getAllPatrons();
export const ADVISORS_DATA: OrganizerPropsType[] = getAllAdvisors();
export const ORGANIZERS_DATA: OrganizerPropsType[] =
  getAllOrganizingCommittee();
export const SCIENTIFIC_COMMITTEE_DATA: OrganizerPropsType[] =
  getAllScientificCommittee();
export const INTERNATIONAL_FACULTY_DATA: OrganizerPropsType[] =
  getAllInternationalFaculty();
export const NATIONAL_FACULTY_DATA: OrganizerPropsType[] =
  getAllNationalFaculty();
