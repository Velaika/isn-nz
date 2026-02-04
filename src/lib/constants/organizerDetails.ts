import { OrganizerProps } from "../types";
import {
  getAllOrganizingCommittee,
  getAllInternationalFaculty,
  getAllNationalFaculty,
  getAllPatrons,
  getAllAdvisors,
  getAllScientificCommittee,
} from "./facultyDatabase";

/**
 * Organizing Committee Members
 * These are the key organizers responsible for planning and executing NZ-ISNCON 2026
 */
export const patronsData: OrganizerProps[] = getAllPatrons();
export const advisorsData: OrganizerProps[] = getAllAdvisors();
export const organizersData: OrganizerProps[] = getAllOrganizingCommittee();
export const scientificCommitteeData: OrganizerProps[] =
  getAllScientificCommittee();
export const internationalFacultyData: OrganizerProps[] =
  getAllInternationalFaculty();
export const nationalFacultyData: OrganizerProps[] = getAllNationalFaculty();
