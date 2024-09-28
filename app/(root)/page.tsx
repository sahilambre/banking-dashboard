import HeaderBox from "@/components/HeaderBox";
import RightSidebar from "@/components/RightSidebar";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import { getLoggedInUser } from "@/lib/actions/user.actions";
import React from "react";

const Home = async () => {
  // const loggedIn = {
  //   firstName: "Sahiil",
  //   lastName: "Ambre",
  //   email: "sambre@stevens.edu",
  // };
  const loggedIn = await getLoggedInUser();
  console.log("loggedIn: ", loggedIn);
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.name || "Guest"}
            subtext="Access & manage your account and transactions effortlessly."
          />

          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1230.35}
          />
        </header>
        RECENT TRANSACTIONS
      </div>
      <RightSidebar
        user={loggedIn}
        transactions={[]}
        banks={[{ currentBalance: 123.56 }, { currentBalance: 523.56 }]}
      />
    </section>
  );
};

export default Home;
