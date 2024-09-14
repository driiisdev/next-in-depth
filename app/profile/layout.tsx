
const ProfileLayout = ({
  children
}: Readonly<{
  children:React.ReactNode
}>) => {
  return (
    <>
    <header>header profile</header>
    {children}
    <footer>foot profile</footer>
    </>
  )
}

export default ProfileLayout;
