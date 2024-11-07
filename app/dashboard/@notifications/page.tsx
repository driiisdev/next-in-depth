import Link from "next/link";
import Card from "@/components/card";

const Notifications = () => {
  return (
    <>
      <Card>
        <div>Notifications</div>
        <Link href="/dashboard/archived">Archived</Link>
      </Card>
    </>
  )
}

export default Notifications;
