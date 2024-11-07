import Card from "@/components/card";
import Link from "next/link";

const ArchivedNotification = () => {
  return (
    <Card>
      <div>Archived Notification</div>
      &nbsp;
      <Link className="text-blue-400 underline italic" href="/dashboard">Default</Link>
    </Card>
  )
}

export default ArchivedNotification;
