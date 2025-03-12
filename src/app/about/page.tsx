import Image from "next/image";
import { Container } from "../Components/Container";
import { Footer } from "../Components/Footer";
import { Navbar } from "../Components/Navbar";
import image from '../assets/Image.png'

export default function Page() {

  return (
   <>
    <Navbar/>
    <Container>      
      <div className="pt-12 md:pt-20 ">
        <h1 className="text-6xl md:text-7xl text-center border-t-2 border-b-2 border-black dark:border-white lg:py-12 my-12 py-4">Matheus Jacoud</h1>
        <Image src={image} alt="post image" width={0} height={0} sizes="100vw" className="pb-10 w-full h-auto md:h-[20rem] md:mt-12"/>
        <h2 className="text-5xl">
          About Me
        </h2>
        <p className="pt-8 text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur laborum beatae aliquid quasi explicabo sequi, eaque perspiciatis consequatur cumque soluta in voluptates nihil ea aut aperiam, maiores sed accusantium optio?
          Eveniet dolor numquam ipsa sed reiciendis ab quo delectus ut, saepe illum, quae placeat repudiandae obcaecati nisi fugit. Esse ipsam possimus veniam. Perspiciatis, facere corrupti fuga expedita totam mollitia atque!
          Maiores quo amet molestias architecto sed voluptatem minima officia veritatis, nisi quia pariatur? Dolore, minima. Laudantium animi voluptates cum mollitia tempora nihil officia, eum obcaecati facilis veritatis repudiandae perspiciatis voluptatem.
          Deleniti hic, earum excepturi dolor cumque vel ratione sint? Ipsam quia numquam aliquid suscipit laudantium reiciendis quo dicta adipisci optio fuga, facere nihil. Inventore, pariatur doloremque aliquid laborum voluptates rerum!
          Voluptate cumque beatae magnam perspiciatis eveniet. Nesciunt cum maxime delectus neque ab! Magni aliquam culpa dicta illo expedita explicabo! Hic quasi aliquid numquam explicabo impedit dolorum facilis nam et? Natus!
        </p>
        <h2 className="text-5xl pt-8">
          Skills
        </h2>
        <p className="pt-8 text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur laborum beatae aliquid quasi explicabo sequi, eaque perspiciatis consequatur cumque soluta in voluptates nihil ea aut aperiam, maiores sed accusantium optio?
          Eveniet dolor numquam ipsa sed reiciendis ab quo delectus ut, saepe illum, quae placeat repudiandae obcaecati nisi fugit. Esse ipsam possimus veniam. Perspiciatis, facere corrupti fuga expedita totam mollitia atque!
          Maiores quo amet molestias architecto sed voluptatem minima officia veritatis, nisi quia pariatur? Dolore, minima. Laudantium animi voluptates cum mollitia tempora nihil officia, eum obcaecati facilis veritatis repudiandae perspiciatis voluptatem.
          Deleniti hic, earum excepturi dolor cumque vel ratione sint? Ipsam quia numquam aliquid suscipit laudantium reiciendis quo dicta adipisci optio fuga, facere nihil. Inventore, pariatur doloremque aliquid laborum voluptates rerum!
          Voluptate cumque beatae magnam perspiciatis eveniet. Nesciunt cum maxime delectus neque ab! Magni aliquam culpa dicta illo expedita explicabo! Hic quasi aliquid numquam explicabo impedit dolorum facilis nam et? Natus!
        </p>
        <h2 className="text-5xl pt-8">
          experience
        </h2>
        <p className="pt-8 text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur laborum beatae aliquid quasi explicabo sequi, eaque perspiciatis consequatur cumque soluta in voluptates nihil ea aut aperiam, maiores sed accusantium optio?
          Eveniet dolor numquam ipsa sed reiciendis ab quo delectus ut, saepe illum, quae placeat repudiandae obcaecati nisi fugit. Esse ipsam possimus veniam. Perspiciatis, facere corrupti fuga expedita totam mollitia atque!
          Maiores quo amet molestias architecto sed voluptatem minima officia veritatis, nisi quia pariatur? Dolore, minima. Laudantium animi voluptates cum mollitia tempora nihil officia, eum obcaecati facilis veritatis repudiandae perspiciatis voluptatem.
          Deleniti hic, earum excepturi dolor cumque vel ratione sint? Ipsam quia numquam aliquid suscipit laudantium reiciendis quo dicta adipisci optio fuga, facere nihil. Inventore, pariatur doloremque aliquid laborum voluptates rerum!
          Voluptate cumque beatae magnam perspiciatis eveniet. Nesciunt cum maxime delectus neque ab! Magni aliquam culpa dicta illo expedita explicabo! Hic quasi aliquid numquam explicabo impedit dolorum facilis nam et? Natus!
        </p>
        <h2 className="text-5xl pt-8">
          Education
        </h2>
        <p className="pt-8 text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur laborum beatae aliquid quasi explicabo sequi, eaque perspiciatis consequatur cumque soluta in voluptates nihil ea aut aperiam, maiores sed accusantium optio?
          Eveniet dolor numquam ipsa sed reiciendis ab quo delectus ut, saepe illum, quae placeat repudiandae obcaecati nisi fugit. Esse ipsam possimus veniam. Perspiciatis, facere corrupti fuga expedita totam mollitia atque!
          Maiores quo amet molestias architecto sed voluptatem minima officia veritatis, nisi quia pariatur? Dolore, minima. Laudantium animi voluptates cum mollitia tempora nihil officia, eum obcaecati facilis veritatis repudiandae perspiciatis voluptatem.
          Deleniti hic, earum excepturi dolor cumque vel ratione sint? Ipsam quia numquam aliquid suscipit laudantium reiciendis quo dicta adipisci optio fuga, facere nihil. Inventore, pariatur doloremque aliquid laborum voluptates rerum!
          Voluptate cumque beatae magnam perspiciatis eveniet. Nesciunt cum maxime delectus neque ab! Magni aliquam culpa dicta illo expedita explicabo! Hic quasi aliquid numquam explicabo impedit dolorum facilis nam et? Natus!
        </p>

      </div>
      <Footer/>
    </Container>
   </>
  );
}
 