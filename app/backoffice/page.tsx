import BackofficeFaq from "@/components/backoffice/BackofficeFaq";
import BackofficeHero from "@/components/backoffice/BackofficeHero";
import CaseScenario from "@/components/backoffice/CaseScenario";
import Deliverables from "@/components/backoffice/Deliverables";
import DiagnosticCta from "@/components/backoffice/DiagnosticCta";
import EngagementModels from "@/components/backoffice/EngagementModels";
import FitMatrix from "@/components/backoffice/FitMatrix";
import PainChecklist from "@/components/backoffice/PainChecklist";
import SolutionPillars from "@/components/backoffice/SolutionPillars";

export default function BackofficePage() {
  return (
    <>
      <BackofficeHero />
      <PainChecklist />
      <SolutionPillars />
      <Deliverables />
      <FitMatrix />
      <CaseScenario />
      <EngagementModels />
      <BackofficeFaq />
      <DiagnosticCta />
    </>
  );
}
