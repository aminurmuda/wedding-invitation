import Image from "next/image"

const Divider = ({width = 320, height = 40, ...props}) => {
    return <Image
    src="/images/divider.svg"
    alt="divider"
    width={width}
    height={height}
    {...props}
  />
}

export default Divider