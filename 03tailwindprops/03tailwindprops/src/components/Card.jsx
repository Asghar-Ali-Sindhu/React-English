import React from 'react'

function Card({username = "Ali", post = "Not assigned yet"}) {
    // console.log(props);
  return (
    <div>
        <figure className="bg-slate-100 rounded-xl  dark:bg-slate-800 flex flex-col sm:flex-row">
        <img className="w-48 h-48 rounded-sm mx-auto" src="https://images.pexels.com/photos/26201301/pexels-photo-26201301/free-photo-of-a-white-house-with-a-lamp-on-the-front-porch.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load" alt="" width="384" height="512" />
        <div className="pt-6 space-y-4 bg-blue-800">
            <blockquote>
            <p className="text-lg font-medium text-blue-100  ">
                Tailwind CSS is the only framework that I've seen scale
                on large teams. It’s easy to customize, adapts to any design,
                and the build size is tiny.
            </p>
            </blockquote>
            <figcaption className="font-medium">
            <div className="text-sky-500 dark:text-sky-400">
                {username}
            </div>
            <div className="text-slate-200 dar">
                {post}
            </div>
            </figcaption>
  </div>
</figure>
    </div>
  )
}

export default Card