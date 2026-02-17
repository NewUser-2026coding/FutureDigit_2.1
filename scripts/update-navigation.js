// This script is a reference for the navigation replacement pattern
// The actual updates are done manually through the Edit tool

const pages = [
  'app/modes/regie/page.tsx',
  'app/business-units/banque-finance/page.tsx',
  'app/business-units/ingenierie/page.tsx',
  'app/expertises/cloud/page.tsx',
  'app/expertises/gestion-projet/page.tsx',
  'app/expertises/infrastructure-devops/page.tsx',
  'app/expertises/sap/page.tsx',
  'app/expertises/software-engineering/page.tsx',
];

// Replace pattern:
// FROM: <NavigationMenu>...long nav content...</NavigationMenu>
// TO: <SiteNavigation />

console.log('Pages to update:', pages);
