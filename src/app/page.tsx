import { SiteHeader } from "@/com/layout/SiteHeader";
import { SiteFooter } from "@/com/layout/SiteFooter";
import { Hero } from "@/com/home/Hero";
import { TrustBar } from "@/com/home/TrustBar";
import { LookupSection } from "@/com/home/LookupSection";
import { ProblemMission } from "@/com/home/ProblemMission";
import { HowItWorks } from "@/com/home/HowItWorks";
import { InstitutionalRoles } from "@/com/home/InstitutionalRoles";
import { LegalCompliance } from "@/com/home/LegalCompliance";
import { SolutionsSection } from "@/com/home/SolutionsSection";
import { FinancialTransparency } from "@/com/home/FinancialTransparency";
import { Proof } from "@/com/home/Proof";
import { FaqSection } from "@/com/home/FaqSection";
import { Accountability } from "@/com/home/Accountability";
import { FinalCta } from "@/com/home/FinalCta";
import { pageMetadata } from "@/lib/seo";
import { siteMeta } from "@/data/site";

export const metadata = pageMetadata({
  title: { absolute: siteMeta.titleDefault },
  description: siteMeta.description,
  path: "/",
});

const HomePage = () => {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <TrustBar />
        <LookupSection />
        <ProblemMission />
        <HowItWorks />
        <InstitutionalRoles />
        <LegalCompliance />
        <SolutionsSection />
        <FinancialTransparency />
        <Proof />
        <FaqSection />
        <Accountability />
        <FinalCta />
      </main>
      <SiteFooter />
    </>
  );
};

export default HomePage;
