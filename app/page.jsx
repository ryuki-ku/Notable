import Feed from "@components/Feed";

const HomePage = () => {
  return (
    <section className="w-full flex-center flex-col">
        <h1 className="head_text text-center">
          Discover & Share
          <br className="max-md:hidden"/>
          <span className="blue_gradient text-center">
            AI sponsor by Notable
          </span>
        </h1>
        <p className="desc text-center ">
          AI sponsor by Notable is a non-profit organization that provides
          AI note for everyone to the world for creative, sharing and discovery.
        </p>

        <Feed />
    </section>
  )
}

export default HomePage