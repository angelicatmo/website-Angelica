export const DEFAULT_INPUTS = {
  budget: 20000,
  cpc: 2.5,
  cvr: 8, // click -> lead, %
  leadToMql: 35, // %
  mqlToSql: 55, // %
  sqlToOpp: 45, // %
  oppToCustomer: 30, // %
  avgDealSize: 4500,
};

function pct(value) {
  return value / 100;
}

export function computeFunnel(inputs) {
  const { budget, cpc, cvr, leadToMql, mqlToSql, sqlToOpp, oppToCustomer, avgDealSize } = inputs;

  const clicks = cpc > 0 ? budget / cpc : 0;
  const leads = clicks * pct(cvr);
  const mql = leads * pct(leadToMql);
  const sql = mql * pct(mqlToSql);
  const opportunities = sql * pct(sqlToOpp);
  const customers = opportunities * pct(oppToCustomer);
  const revenue = customers * avgDealSize;
  const cac = customers > 0 ? budget / customers : null;
  const roas = budget > 0 ? revenue / budget : 0;

  return { clicks, leads, mql, sql, opportunities, customers, revenue, cac, roas };
}
