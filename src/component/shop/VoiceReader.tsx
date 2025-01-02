import { Icon } from "../layout/LayoutComponents";

type VoiceReaderProps = {
  text: string;
  [key: string]: any; // 允許其他屬性
};

function VoiceReader({ text, ...props }: VoiceReaderProps) {
  const handleReadText = (text: string) => {
    if (!window.speechSynthesis) {
      return;
    }
    if (window.speechSynthesis.speaking) {
      window.speechSynthesis.cancel();
    }

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "zh-TW";

    window.speechSynthesis.speak(utterance);
  };

  return (
    <Icon
      onClick={() => {
        handleReadText(text);
      }}
      $isPointer={true}
      className="material-symbols-outlined"
      {...props}
    >
      volume_up
    </Icon>
  );
}

export default VoiceReader;
