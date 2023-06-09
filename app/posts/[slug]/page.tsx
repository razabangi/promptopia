const Page = ({params, searchParams}: {params: { slug: string }, searchParams: any}) => {
  return (
    <div className="h-screen w-full">
      <p>{params.slug}</p>
    </div>
  )
}

export default Page
