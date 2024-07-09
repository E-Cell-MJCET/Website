import Money from "@/components/ipl/budget/money";
import router, { useRouter } from "next/router";
import React from "react";

const Budget = () => {
  const router = useRouter();
  const teamId = router.query.name;

  return <div>{typeof teamId === "string" && <Money teamId={teamId} />}</div>;
};

export default Budget;
