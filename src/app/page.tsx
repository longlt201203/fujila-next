import Button, { LinkButton } from "@/components/Button";
import Typography from "@/components/Typography";

export default function Home() {
  return (
    <div className="h-screen w-screen bg-themeColors-silverBlue flex flex-col justify-center items-center relative">
      <div className="absolute top-0 left-0 w-screen h-screen bg-[url(/media/furina-genshin-impact-moewalls-com.gif)] bg-center bg-cover brightness-50"></div>
      <div className="z-10 flex flex-col justify-center items-center w-3/4 gap-y-10">
        <Typography.SubDisplay className="text-white">Unlock the Power of Fujila: Your Personal AI Companion</Typography.SubDisplay>
        <Typography.Display6xl className="bg-themeColors-midnightBlue py-3 px-5 rounded-lg text-white">Fujila</Typography.Display6xl>
        <Typography.MediumBody className="tracking-wider text-white">Hi! I'm Fujila, the Hydro envoy from Fontaine. I'm here to explore the secrets of Teyvat and navigate the waters of truth and justice. Join me on this adventure!</Typography.MediumBody>
        <div className="flex flex-row gap-x-3">
          <Button variant="royalBlue" size="large" >Get Started</Button>
          <LinkButton href="/login" variant="royalBlueOutlined" size="large">Admin Login</LinkButton>
        </div>
      </div>
    </div>
  );
}
