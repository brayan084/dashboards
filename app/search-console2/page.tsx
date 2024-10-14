import GSCReport from '@/components/GoogleSearchConsole-component/GSCReport';

export default function Home() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Google Search Console Report</h1>
      <GSCReport />
    </div>
  );
}