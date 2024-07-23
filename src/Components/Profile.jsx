function Profile({name, bio, bgColor, image}) {

    return <div className="border-2 border-black py-3 px-6 sm:w-[500px] w-[388px]  sm:mx-10 my-10">
        <img className="w-[500px] h-[300px]" src= {image} />
        <h1 className="text-2xl font-semibold"> {name} </h1>
        <div className="flex gap-2  py-2 text-center">
            <div className="w-[50px] h-[30px] text-white rounded bg-teal-400 ">
                <h1>Html</h1>

            </div>
            <div className="w-[50px] h-[30px] text-white rounded bg-teal-400 ">
                <h1>Css</h1>

            </div>
            <div className="w-[50px] h-[30px] text-white rounded bg-teal-400 ">
                <h1>Js</h1>

            </div>

        </div>
        <p>
            {bio}
        </p>
        <button style={{backgroundColor:bgColor}} className="bg-stone-500 px-10 py-2 text-white rounded w-[300px] my-4">Hire Me</button>

    </div>
}
export default Profile