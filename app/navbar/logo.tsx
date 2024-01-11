import Image from "next/image";


const Logo = () => {
    return (
        <div>
            <Image src={"/Logo/logo.png"} alt={"logo"} width={40} height={40} />
            <p>Innovo Networks</p>
        </div>
    )
}

export default Logo;