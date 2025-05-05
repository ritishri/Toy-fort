import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import DashboardCards from "../components/DashboardCards";
import LatestOrders from "../components/LatestOrders";
import LatestTransactions from "../components/LatestTransactions";
import Footer from "../components/Footer";
import LatestProducts from "../components/LatestProducts";
import LatestPendingProducts from "../components/LatestPendingProducts";
import LatestTransactionFeatures from "../components/LatestTransactionsFeature";
import LatestReviews from "../components/LatestReviews";
import LatestComments from "../components/LatestComments";
import LatestMembers from "../components/LatestMembers";

function Home() {
  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 bg-gray-100 min-h-screen ml-64 overflow-auto">
        <Header /> {/* Kept unchanged */}
        <div className="p-4">
          <DashboardCards />

          {/* Grid Content */}
          <div className="grid grid-cols-2 gap-4">
            <LatestOrders />
            <LatestTransactions />
            <LatestProducts />
            <LatestPendingProducts />
            <LatestTransactionFeatures />
            <LatestReviews />
            <LatestComments />
            <LatestMembers />
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
}

export default Home;
