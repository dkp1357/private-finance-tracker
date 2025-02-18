export default function Head() {
  return (
    <>
      <title>Expense Tracker - Manage Your Expenses & Income</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content="Track your expenses and income easily with Finance Tracker. Get insights into your spending habits and financial health." />
      <meta name="keywords" content="finance tracker, budget planner, expense manager, income tracker, financial management" />
      <meta name="author" content="Your Name" />

      {/* Open Graph Meta Tags for Social Media */}
      <meta property="og:title" content="Expense Tracker - Manage Your Expenses & Income" />
      <meta property="og:description" content="A simple and effective way to track your expenses and income." />
      <meta property="og:image" content="/preview-image.png" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://yourwebsite.com" />

      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
    </>
  );
}
