import Link from "next/link";
import Card from "@/components/card";

const Notifications = () => {
  return (
    <>
      <Card>
        <div>Notifications</div>
        &nbsp;
        <Link className="text-blue-400 underline italic" href="/dashboard/archived">Archived</Link>
      </Card>
    </>
  )
}

export default Notifications;
