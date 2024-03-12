"use client"
import React, { useRef, useState } from "react";
import ImageGallery, { ReactImageGalleryItem } from "react-image-gallery";

interface MyGalleryProps {
    images: ReactImageGalleryItem[];
    infinite?: boolean;
    showThumbnails?: boolean;
    showFullscreenButton?: boolean;
    showBullets?: boolean;
    showIndex?: boolean;
    autoPlay?: boolean;
    showPlayButton?: boolean;
    showNav?: boolean;
    useBrowserFullscreen: boolean
}

const MyGallery: React.FC<MyGalleryProps> = ({
    images,
    infinite = true,
    showThumbnails = true,
    showFullscreenButton = true,
    showBullets = true,
    showIndex = true,
    autoPlay = true,
    showPlayButton = true,
    showNav = true,
    useBrowserFullscreen = true
}) => {
    const GalleryRef = useRef<any>(null);
    const [show, setShow] = useState<boolean>(false);

    const toggleFullScreen = () => {
        if (GalleryRef.current) {
            GalleryRef.current.toggleFullScreen();
            setShow(!show);
        }
    };

    return (
        <div>
            <button
                className="inline-flex items-center gap-x-1.5 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                onClick={toggleFullScreen}
            >
                Full Screen
            </button>
            <div style={{ display: show ? "block" : "none" }}>
                <ImageGallery
                    ref={GalleryRef}
                    items={images}
                    infinite={infinite}
                    showNav={showNav}
                    showThumbnails={showThumbnails}
                    showFullscreenButton={showFullscreenButton}
                    showPlayButton={showPlayButton}
                    showBullets={showBullets}
                    showIndex={showIndex}
                    autoPlay={autoPlay}
                    useBrowserFullscreen={useBrowserFullscreen}
                />
            </div>
        </div>
    );
};

export default MyGallery;
