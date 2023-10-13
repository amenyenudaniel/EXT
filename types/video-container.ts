export interface VideoContainerProps {
    videoID?: string | string[] | undefined; // Add a videoID prop
    setCurrentVideoTime: (value: React.SetStateAction<number>) => void;
    setCurrentVidDuration: (value: React.SetStateAction<number>) => void;
}