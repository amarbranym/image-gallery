import MyGallery from "@/components/MayGallery";
import Image from "next/image";

export default function Home() {
  const images = [
    {
      original: "https://picsum.photos/id/1018/1000/600/",
      thumbnail: "https://picsum.photos/id/1018/250/150/",
    },
    {
      original: "https://picsum.photos/id/1015/1000/600/",
      thumbnail: "https://picsum.photos/id/1015/250/150/",
    },
    {
      original: "https://picsum.photos/id/1019/1000/600/",
      thumbnail: "https://picsum.photos/id/1019/250/150/",
    },
  ];
  return (
    <main className="h-screen w-screen flex items-center justify-center" >
      <MyGallery
        images={images}
        infinite={true}
        showThumbnails={true}
        showFullscreenButton={false}
        showBullets={true}
        showIndex={true}
        autoPlay={true}
        showPlayButton={false}
        showNav={true}
        useBrowserFullscreen={false}
      />
    </main>
  );
}
